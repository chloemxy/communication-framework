// Measured evidence for video items: what a timed storyboard can tell us about the PEMAT-A/V
// items a text-only check can't assess (on-screen text, narration speed, chunking, summary).
//
// A video tool (Rendomat) knows facts the studio can't see in words alone: how long each line is
// on screen, how big it is, its contrast, how fast the narration runs. This turns those facts into
// SUGGESTIONS for specific instrument items, each carrying the measurements behind it and the basis
// of every threshold. A suggestion is never the instrument's verdict:
//   - provenance is always 'measured', and the threshold's basis is named (most are working
//     thresholds, not part of PEMAT);
//   - AHRQ's rule is kept: Agree only when the characteristic holds nearly all the time (80–100%);
//   - what a measurement can't settle (garbled audio, cluttered pictures) is said in `needsPerson`.
//
// Browser: window.PRISM_VIDEO. Node: module.exports. Requires text-measures.js.
(function (root) {
  const TEXT = root.PRISM_TEXT || (typeof require === 'function' ? require('./text-measures.js') : null);

  // Every threshold with where it comes from. Callers may pass their own (with their own basis).
  const THRESHOLDS = {
    onscreenWpm: { value: 200, basis: 'Working threshold: about 20 characters a second, the upper end of subtitle reading-rate guidance. Not part of PEMAT.' },
    narrationWpm: { value: 160, basis: 'Working threshold: 140–160 words a minute is the common range for clear narration. Not part of PEMAT.' },
    textHeightPct: { value: 2.7, basis: 'Working threshold: on-screen body text at least 2.7% of the frame height. Not part of PEMAT.' },
    labelHeightPct: { value: 1.5, basis: 'Working threshold: short labels (eyebrows, captions on images) at least 1.5% of the frame height. Not part of PEMAT.' },
    contrast: { value: 4.5, basis: 'WCAG 2.2 success criterion 1.4.3, contrast (minimum): 4.5:1 for text.' },
    agreeShare: { value: 0.8, basis: 'AHRQ PEMAT User’s Guide: rate Agree when the characteristic is present 80–100% of the time.' },
    veryShortSeconds: { value: 60, basis: 'AHRQ PEMAT-A/V: a very short material is under 1 minute, or 6 or fewer slides or screenshots.' },
    veryShortScreens: { value: 6, basis: 'AHRQ PEMAT-A/V: a very short material is under 1 minute, or 6 or fewer slides or screenshots.' },
  };

  const words = (text) => (TEXT ? TEXT.countWords(text) : (String(text || '').match(/\b\w+\b/g) || []).length);
  const round = (n, d = 0) => Math.round(n * 10 ** d) / 10 ** d;
  const sceneName = (scene, i) => `Scene ${i + 1}${scene.title ? ` (${scene.title})` : ''}`;
  const normal = (t) => String(t || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

  /**
   * storyboard = {
   *   scenes: [{
   *     seconds,                       // how long the scene runs
   *     title?, kind?: 'summary'|'chapter'|…,
   *     said?: string,                 // narration
   *     onscreen?: [{ text, seconds?, heightPct?, contrast?, role?: 'body'|'label' }],  // each block of on-screen text
   *     cues?: number,                 // rings, arrows, highlights pointing at something
   *   }]
   * }
   */
  function measureStoryboard(storyboard, thresholds = {}) {
    const t = { ...THRESHOLDS, ...thresholds };
    const scenes = (storyboard && storyboard.scenes) || [];
    const totalSeconds = scenes.reduce((s, sc) => s + (Number(sc.seconds) || 0), 0);
    const veryShort = totalSeconds < t.veryShortSeconds.value || scenes.length <= t.veryShortScreens.value;

    const blocks = [];
    scenes.forEach((sc, i) => (sc.onscreen || []).forEach((b) => {
      const n = words(b.text);
      if (!n) return;
      const seconds = Number(b.seconds) || Number(sc.seconds) || 0;
      blocks.push({
        scene: i, where: sceneName(sc, i), text: String(b.text), words: n, seconds,
        wpm: seconds > 0 ? round((n / seconds) * 60) : null,
        heightPct: Number.isFinite(b.heightPct) ? round(b.heightPct, 2) : null,
        contrast: Number.isFinite(b.contrast) ? round(b.contrast, 2) : null,
        role: b.role === 'label' ? 'label' : 'body',
      });
    }));
    const narrated = scenes.map((sc, i) => ({ scene: i, where: sceneName(sc, i), words: words(sc.said), seconds: Number(sc.seconds) || 0 }))
      .filter((s) => s.words > 0);
    narrated.forEach((s) => { s.wpm = s.seconds > 0 ? round((s.words / s.seconds) * 60) : null; });

    const allText = scenes.map((sc) => [sc.said, ...(sc.onscreen || []).map((b) => b.text)].filter(Boolean).join('\n')).join('\n');
    return {
      totalSeconds: round(totalSeconds, 1),
      screens: scenes.length,
      veryShort,
      blocks,
      narrated,
      readability: TEXT && allText.trim() ? TEXT.computeFK(allText) : null,
      thresholds: t,
      scenes,
    };
  }

  /** Share of items passing, and the failures, for the 80–100% rule. */
  function share(list, pass) {
    const judged = list.filter((x) => pass(x) !== null);
    const failing = judged.filter((x) => pass(x) === false);
    return { judged: judged.length, failing, share: judged.length ? (judged.length - failing.length) / judged.length : null };
  }

  function suggest(m) {
    const t = m.thresholds;
    const out = [];
    const item = (itemNo, rest) => out.push({ framework: 'PEMAT_AV', criterionId: `PEMAT-AV-${itemNo}`, itemNo, provenance: 'measured', ...rest });

    // 13. Text on the screen is easy to read. N/A: no text, or all text is narrated.
    const narration = normal(m.scenes.map((s) => s.said).join(' '));
    const unnarrated = m.blocks.filter((b) => !narration.includes(normal(b.text)));
    if (!m.blocks.length || !unnarrated.length) {
      item(13, { suggestion: 'na', evidence: [m.blocks.length ? 'Every on-screen line is also narrated.' : 'No on-screen text.'], basis: [] });
    } else {
      const pace = share(m.blocks, (b) => (b.wpm === null ? null : b.wpm <= t.onscreenWpm.value));
      const floor = (b) => (b.role === 'label' ? t.labelHeightPct.value : t.textHeightPct.value);
      const size = share(m.blocks, (b) => (b.heightPct === null ? null : b.heightPct >= floor(b)));
      const contrast = share(m.blocks, (b) => (b.contrast === null ? null : b.contrast >= t.contrast.value));
      const checks = [pace, size, contrast].filter((c) => c.judged);
      const worst = checks.length ? Math.min(...checks.map((c) => c.share)) : null;
      const evidence = [
        ...pace.failing.map((b) => `${b.where}: “${b.text.slice(0, 60)}${b.text.length > 60 ? '…' : ''}” is on screen for ${b.seconds}s — ${b.wpm} words a minute (limit ${t.onscreenWpm.value}).`),
        ...size.failing.map((b) => `${b.where}: “${b.text.slice(0, 40)}…” is ${b.heightPct}% of the frame height (${b.role} floor ${floor(b)}%).`),
        ...contrast.failing.map((b) => `${b.where}: “${b.text.slice(0, 40)}…” has ${b.contrast}:1 contrast (floor ${t.contrast.value}:1).`),
      ];
      if (!evidence.length) evidence.push(`${m.blocks.length} on-screen text blocks checked: pace${size.judged ? ', size' : ''}${contrast.judged ? ', contrast' : ''} all within limits.`);
      item(13, {
        suggestion: worst === null ? null : worst >= t.agreeShare.value ? 'agree' : 'disagree',
        evidence,
        basis: [t.onscreenWpm.basis, size.judged ? t.textHeightPct.basis : null, size.judged && m.blocks.some((b) => b.role === 'label') ? t.labelHeightPct.basis : null, contrast.judged ? t.contrast.basis : null, t.agreeShare.basis].filter(Boolean),
        needsPerson: 'Font choice and on-screen clutter are not measured.',
      });
    }

    // 14. The words can be heard clearly (not too fast, not garbled). N/A: no narration.
    if (!m.narrated.length) {
      item(14, { suggestion: 'na', evidence: ['No narration.'], basis: [] });
    } else {
      const pace = share(m.narrated, (s) => (s.wpm === null ? null : s.wpm <= t.narrationWpm.value));
      item(14, {
        suggestion: pace.share === null ? null : pace.share >= t.agreeShare.value ? 'agree' : 'disagree',
        evidence: pace.failing.length ? pace.failing.map((s) => `${s.where}: ${s.words} words in ${s.seconds}s — ${s.wpm} words a minute (limit ${t.narrationWpm.value}).`) : [`Narration pace within ${t.narrationWpm.value} words a minute in every scene.`],
        basis: [t.narrationWpm.basis, t.agreeShare.basis],
        needsPerson: 'Speed only. Whether the audio is clear (not garbled, no music over the voice) needs a listener.',
      });
    }

    // 8, 9, 11: N/A on a very short material, by AHRQ's own definition.
    const short = m.veryShort ? `${m.totalSeconds}s and ${m.screens} screens: a very short material.` : null;
    if (short) {
      for (const n of [8, 9, 11]) item(n, { suggestion: 'na', evidence: [short], basis: [t.veryShortSeconds.basis] });
    } else {
      const heaviest = Math.max(0, ...m.scenes.map((s) => words([s.said, ...(s.onscreen || []).map((b) => b.text)].join(' '))));
      item(8, { suggestion: null, evidence: [`${m.screens} scenes over ${m.totalSeconds}s; the busiest scene carries ${heaviest} words.`], basis: [], needsPerson: 'Whether each scene is one short section is a judgement; the counts are here to help.' });
      const titled = m.scenes.filter((s) => s.title).length;
      item(9, { suggestion: null, evidence: [`${titled} of ${m.screens} scenes have a title on screen.`], basis: [], needsPerson: 'Whether the titles are informative needs a reader.' });
      const summary = m.scenes.findIndex((s) => s.kind === 'summary');
      item(11, {
        suggestion: summary >= 0 ? 'agree' : null,
        evidence: [summary >= 0 ? `${sceneName(m.scenes[summary], summary)} is a summary.` : 'No scene is marked as a summary.'],
        basis: [],
        ...(summary >= 0 ? {} : { needsPerson: 'A summary may exist without being marked; check the closing scenes.' }),
      });
    }

    // 12. Visual cues to key points. AHRQ's form offers N/A for video, so suggest it — but
    // report the cues counted, in case the reviewer rates the item anyway.
    const cues = m.scenes.reduce((s, sc) => s + (Number(sc.cues) || 0), 0);
    item(12, { suggestion: 'na', evidence: [`The PEMAT-A/V form allows N/A for video. ${cues} pointing cue${cues === 1 ? '' : 's'} (rings, arrows, highlights) found.`], basis: [] });

    return out.sort((a, b) => a.itemNo - b.itemNo);
  }

  /** The whole report: measurements, item suggestions, and readability of every word in the video. */
  function videoReport(storyboard, thresholds) {
    const m = measureStoryboard(storyboard, thresholds);
    return { measures: { totalSeconds: m.totalSeconds, screens: m.screens, veryShort: m.veryShort, blocks: m.blocks, narrated: m.narrated, readability: m.readability }, items: suggest(m), thresholds: m.thresholds };
  }

  const PRISM_VIDEO = { THRESHOLDS, measureStoryboard, videoReport };
  root.PRISM_VIDEO = PRISM_VIDEO;
  if (typeof module !== 'undefined' && module.exports) module.exports = PRISM_VIDEO;
})(typeof window !== 'undefined' ? window : globalThis);
