// Measured suggestions for PEMAT-A/V items. Each rule here is AHRQ's or a named working
// threshold; the tests pin both the rule and the honesty around it (provenance, basis,
// and what still needs a person).
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const V = require('../video-measures.js');

const block = (text, seconds, extra = {}) => ({ text, seconds, heightPct: 3, contrast: 7, ...extra });
const scene = (over = {}) => ({ seconds: 12, title: 'A step', said: 'Take one pill each morning with water.', onscreen: [block('Morning dose: 1 pill', 4)], ...over });
const long = (n, over) => ({ scenes: Array.from({ length: n }, () => scene(over)) });
const item = (report, n) => report.items.find((i) => i.itemNo === n);

describe('the 80–100% rule for Agree', () => {
  const slow = block('This sentence has far too many words to read in the short time it stays on the screen', 2);

  it('agrees when nearly every on-screen block passes', () => {
    const story = long(7);
    story.scenes[0].onscreen.push(slow); // 1 failing of 8
    const r = V.videoReport(story);
    assert.equal(item(r, 13).suggestion, 'agree');
    assert.match(item(r, 13).evidence[0], /words a minute/);
  });

  it('disagrees when more than one block in five fails', () => {
    const story = long(7);
    story.scenes.slice(0, 3).forEach((s) => s.onscreen.push(slow)); // 3 failing of 10
    assert.equal(item(V.videoReport(story), 13).suggestion, 'disagree');
  });
});

describe('N/A exactly where the AHRQ form offers it', () => {
  it('treats under a minute or six screens as very short (items 8, 9, 11)', () => {
    const r = V.videoReport(long(3));
    for (const n of [8, 9, 11]) assert.equal(item(r, n).suggestion, 'na');
    assert.equal(V.videoReport(long(7)).measures.veryShort, false);
  });

  it('item 13 is N/A when every on-screen line is also narrated', () => {
    const r = V.videoReport(long(7, { said: 'One pill each morning', onscreen: [block('One pill each morning', 4)] }));
    assert.equal(item(r, 13).suggestion, 'na');
  });

  it('item 14 is N/A without narration', () => {
    assert.equal(item(V.videoReport(long(7, { said: '' })), 14).suggestion, 'na');
  });
});

describe('narration pace and contrast', () => {
  it('flags narration faster than the threshold, scene by scene', () => {
    const fast = 'word '.repeat(60).trim(); // 60 words in 12s = 300 wpm
    const r = V.videoReport(long(7, { said: fast }));
    assert.equal(item(r, 14).suggestion, 'disagree');
    assert.match(item(r, 14).evidence[0], /300 words a minute/);
    assert.match(item(r, 14).needsPerson, /listener/);
  });

  it('holds labels to the label floor and body text to the body floor', () => {
    const small = block('Morning dose: 1 pill', 4, { heightPct: 1.8 });
    assert.equal(item(V.videoReport(long(7, { onscreen: [{ ...small, role: 'label' }] })), 13).suggestion, 'agree');
    assert.equal(item(V.videoReport(long(7, { onscreen: [small] })), 13).suggestion, 'disagree');
  });

  it('fails low-contrast text against WCAG, and says so', () => {
    const r = V.videoReport(long(7, { onscreen: [block('Morning dose: 1 pill', 4, { contrast: 2.1 })] }));
    assert.equal(item(r, 13).suggestion, 'disagree');
    assert.ok(item(r, 13).basis.some((b) => /WCAG/.test(b)));
  });
});

describe('honesty', () => {
  it('marks every suggestion as measured, and every Agree or Disagree with its basis', () => {
    const r = V.videoReport(long(8));
    for (const i of r.items) {
      assert.equal(i.provenance, 'measured');
      if (i.suggestion === 'agree' || i.suggestion === 'disagree') assert.ok(i.basis.length > 0, `item ${i.itemNo}`);
    }
  });

  it('leaves judgements to a person rather than guessing', () => {
    const r = V.videoReport(long(8));
    assert.equal(item(r, 8).suggestion, null);
    assert.equal(item(r, 9).suggestion, null);
  });

  it('agrees on a summary only when a scene is marked as one', () => {
    const story = long(8);
    assert.equal(item(V.videoReport(story), 11).suggestion, null);
    story.scenes[1].kind = 'summary';
    assert.equal(item(V.videoReport(story), 11).suggestion, 'agree');
  });

  it('takes a caller’s thresholds with the caller’s basis', () => {
    const r = V.videoReport(long(8), { onscreenWpm: { value: 1, basis: 'Test basis' } });
    assert.equal(item(r, 13).suggestion, 'disagree');
    assert.ok(item(r, 13).basis.includes('Test basis'));
  });
});
