# History log

Every change to the site is recorded here, newest first. Each entry names the branch,
what changed, why, and where it is deployed on Vercel (pushes to a branch make a
Preview deployment; `master` is Production).

## 2026-11-18 — Take-home slides: black fade, art moved right

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Intent first, Build fast, Iterate:** the dark fade on the left is now black instead of the deck
  blue, and each illustration sits 14% further right (`.pt-art` `translateX(14%)`), so the gardeners
  and pots clear the fade. The pots stay aligned across all three; a sliver of empty paper on the far
  right is cropped. Phones keep the old position. Checked at 16:9.

## 2026-11-18 — Slide 2: the cricket hops in right on the click

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The cricket sets off a third of a second after the click** (was about 4 s, after the leaves), and
  is settled beside the poster by about 2.6 s (`presentation/desk-pile.js`). Not checked in a browser.

## 2026-11-18 — Slide 2: the cricket hops in gently

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **One big hop, then one small one** (was two quick ones): the big hop covers most of the way in
  1.05 s with a higher arc, a short pause, then a small 0.55 s hop to its spot; each has
  a small crouch before take-off, a soft ease in the air (slow at the top), little tip and a gentle
  settle on landing; it starts breathing once settled (`presentation/desk-pile.js`).
  Not checked in a browser.

## 2026-11-18 — AI certification: black gradient set low; "The barrier dropped" line removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The blue fade is now a black one, set lower.** The art still fills the slide, and the black starts at
  44% of the height (it was the blue wash from 38%). The stamp hand and most of the designer are
  clear of it (`presentation/index.html`).
- **The text sits lower**, ending just above the credit line.
- **"The barrier dropped. The responsibility didn't." is gone from this slide.**
- **Contrast passes AAA** against the brightest art behind each line: the title is 5.5:1 at its top edge
  (large text), the sign-off line and standards row are 7.6:1, and the credit is 12:1.
- (Tried along the way and dropped: art on top with the text on a solid deck-blue band.)

## 2026-11-18 — Slide 1: the still in the deck blue replaces the breeze video

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Title slide background (`#top`) is a still again:** `media/bg/welcome-sync.jpg` (2912 px wide, the
  table from above with the PRISM Studio on the tablet; only its table blue recoloured to the deck blue
  rgb(15 108 157)). Much sharper than the 1280×720 breeze clip. The `<video>` and its play/pause script
  are removed; `welcome-wind-loop.mp4` and `welcome-wind-poster.jpg` stay in `media/bg/` unused.
  Cache key `?v=20261118g`.
- **No bottom fade on slide 1:** the wash along the foot (`.napkin-wash`) is removed. Since the wash
  colour became the deck blue it tinted the coffee teal; the blue already passes AA without it.
- Checked in headless Edge at 1920×1080: the table samples (14, 108, 158); white text 5.8 : 1, small
  lines 5.1 : 1, both pass AA; the coffee is near-black again (3, 35, 2); the title stays clear of the
  tablet.

## 2026-11-18 — AI certification: all text appears together

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **"The barrier dropped. The responsibility didn't." now fades in with the title, the sign-off
  line and the standards row** when the slide opens, instead of arriving on its own near the end
  of the slide. No words changed (`presentation/index.html`).

## 2026-11-18 — Timeline moved to the appendix

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The timeline slide (`#then`, the quotes with "What got better") is now the last slide of the
  appendix**, after the Lego "Why AI?". Its chapter is now "Appendix" (was "The updates"). The main
  talk now goes Build fast → Iterate with nothing in between. The slide itself is unchanged and still
  steps through its three versions.

## 2026-11-18 — Every wash is the deck blue

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **One wash colour for the whole deck.** The shared wash colour (`--scrim`) is now the deck blue
  (15 108 157), the blue of the opening slides, and is no longer the dark grey. So every fade or overlay over
  art or footage is blue: the title's foot fade, the three point slides, the certification band, and
  the appendix clip captions and dimmed strips. Light theme is unchanged.
- **Point slides (Intent first, Build fast, Iterate):** option A. It's the same left-hand fade, now in blue
  and a touch firmer at the start (0.95 down to 0 by 74%). Grey over the cream paper went brown in the
  middle; blue fades through light teal.
- **Highlights on the blue wash are solid olive** (#6B5F14) on the point slides and certification, as on
  the title and slide 2. See-through yellow turns green over blue.
- **Contrast fix on the blue wash:** the small lines on the point slides and certification ("Keep what
  works. Cut the rest.", the step number, the image credit, the standards list) were the default grey
  (#B4BAC2) and read dim on the blue. They're now near-white (#EEF1F4), and titles are #F6F4EC, as on
  the other blue slides (dark theme only).
- The slide counter pill keeps its dark colour (its own `--chrome`). Slide backgrounds are unchanged (the dark
  slides stay dark), as asked.

## 2026-11-18 — Before and after: words and poster slides with measured cards; three slides hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Two before/after slides, no titles** (`#ba`, `#ba-poster`), the material centred with a glass card
  per measure at the sides: the old value in a grey glass pill (crossed out), the new one in the yellow
  glass pill, a plain-words line on what it means, and one short straight yellow lead to the edge of the
  material, level with what it measured.
- **Words:** the full water-pill handout as written and after PRISM, marked like the Studio (yellow fill
  for flagged words, blue dotted line under the long sentence, green tint and underline for applied
  fixes). Cards: Medical words 8 → 0, Reading grade 15.9 → 2.7, Longest sentence 36 → 15 words
  (3 sentences became 8), Risk numbers 25% → 1 in 4. The old 1-2-3 key (with "42-word sentence") is gone;
  the sentence on the slide is 36 words.
- **Poster:** Sonia's COVID welcome poster for UHN before and after PRISM, AAA version
  (`img/ba-poster-after.jpg`): main blue deepened to rgb(50 78 145), band text navy on the light band,
  "metres" darker, and "on the self-screening poster" reworded "on the poster at the door". Cards: Lines
  too faint to read easily 5 → 0, Faintest text 2.0 : 1 → 7.5 : 1, Jargon 1 → 0, Colour-blind check
  (red-green, red-weak and blue-yellow simulated; text stays AAA, figures stay distinct). Credit to Sonia.
- **Hidden** (kept in the file with `hidden`): Meet PRISM, A real guide, One more thing.
- Mockups and the colour-blind sheet are in `design/brainstorm/before-after/`.
- **Follow-ups the same day:** Reading grade and Risk numbers swapped sides; old values are no longer
  crossed out (plain light grey, easier to read); every card ends with "Based on:" and its standard
  (PEMAT-P and CDC Everyday Words, Federal Plain Language Guidelines, Gigerenzer & Hoffrage natural
  frequencies, Flesch-Kincaid, WCAG 1.4.6 / 1.4.3 / 1.4.1, CDC Everyday Words); "Longest sentence" title
  shortened; no orphan words (word swaps on their own lines, `text-wrap:pretty`). On both slides the cards
  sit in two equal rows per side (`.bx-side`), each with its own lead, so rows line up and never overlap.
  The poster slide's colour-blind card shows the after poster's figures in typical, red-green, red-weak
  and blue-yellow vision (`img/ba-cb-*.jpg`) instead of a sentence.
- **Words slide side by side:** "Before" and "After PRISM" now sit next to each other in the same frame
  and size as the posters (`.bx-pair`), each text centred in its card, with the cards in the same two
  rows as the poster slide, so the two slides read as a pair.
- **Card details:** a yellow glass tick after "Colour-blind check"; every card's "Based on:" citation
  now sits at the bottom of its card, the card's content starting from the top. The tick is a yellow
  pill the size of the new-value pills, right-aligned under them; numbers sit optically centred in every
  pill (trimmed to cap height).

## 2026-11-18 — Standards exist: Sonia's simpler pile

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Applied Sonia's patch `standards-slide-simpler-pile`.** The first beat drops the wooden frames:
  Nati's post lies flat and large at the back, with the CDC Clear Communication Index screenshot
  over its bottom-right corner. A round Out the Door Dinosaur badge pops in on the post's top-right
  corner and fades as the screenshots fly into their cards. New, sharper screenshots
  (`img/post-nati-chen-v2.jpg`, `img/cdc-cci-site-v2.jpg`, `img/out-the-door-dino.jpg`); the credit
  line no longer mentions the Midjourney frames. Touches `index.html`, `standards.js`, `fw-rows.js`.
- Bumped the `fw-rows.js` and `standards.js` versions so browsers fetch the new code.
- Checked both beats in headless Chrome at 1600x900.

## 2026-11-18 — Scattered tools: a smooth merge into the PRISM button, and its reverse

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Merge (step two, about 2.2 s):** the pills flow into the centre farthest first, each on one soft
  ease-in-out curve of 1.2 s, starting 0.09 s apart so many move at once. Each swings out a little on its
  way, shrinks, straightens and softens, and fades only near the end.
- **The button grows with them:** the yellow "Check it in PRISM" button starts as soon as the pile moves
  and grows, and its glow builds, with how much has gone in; it is full size as the last pills arrive. The
  script now drives the button; its CSS transition is gone.
- **Reverse (stepping back):** the same curve backwards: the button gives the pills back, nearest first,
  and shrinks and fades as they return to the pile. Arriving on the merged step (coming back from the next
  slide) shows the button at once. Reduced motion jumps straight to each end.
- Checked in headless Chrome at 1920×1080: mid-merge, merged, mid-reverse and back to the pile; no errors.

## 2026-11-18 — Scattered tools: the pile builds itself, overlaps, and lights with a PRISM sheen

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **The pile builds when the slide arrives:** pills ease in one at a time, in random order, at random moments
  (quick bursts and short pauses) and at their own speeds, out of a soft blur with a gentle overshoot. The
  pills already there spring aside, and rows ease up or down, to make room. The "…" pill comes last, on top.
- **Overlap:** pills tuck about 0.75 units over their neighbours and rows a sixth of a pill over each other,
  each pill a little off the grid with a mixed stacking order; every name stays readable.
- **Hover:** a faint band of PRISM's blue, green and yellow sweeps across the pill and stays, while it lifts
  to 104% with a soft spring, a brighter rim and a pale halo (replaces the blue lit tile). The pill under the
  pointer still drifts a few pixels.
- **Step two** still glides every pill into the yellow "Check it in PRISM" pill; stepping back lays the pile
  out at once. Reduced motion shows the finished pile with no build or drift.
- Checked in headless Chrome at 1920×1080: the pile builds, a hover shows the sheen, the step merges, no errors.

## 2026-11-18 — Scattered tools: a settled pile with gentle physics, and a "…" pill on top

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **`#tools` pills now sit in one pile** in the middle of the slide: rows touching end to end, each row
  shifted a little and each pill tilted a hair, with a small **"…" pill on top** for every tool not named
  (read out as "and more").
- **Gentle physics** (a script at the end of the page): each pill is tied softly to its place; the pill under
  the pointer drifts at most about 4 px sideways and 2.5 px up or down, at most 0.6 px a frame, and floats
  back. Nothing is thrown or burst apart. Hover still lights a pill in the deck's blue. Reduced motion keeps
  the pile still.
- **Step two** glides every pill into the centre, shrinking as it goes, and the yellow "Check it in PRISM"
  pill appears; going back lays the pile out again.
- Checked in headless Chrome at 1920×1080: the pile lays out, a hover lights a pill, the step merges, no errors.

## 2026-11-18 — Why AI? → reveal: no flash of the finished handout at the cut

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Fix:** after the reveal had been left going forward (to the Brief slide), its Studio clip stayed on
  its last frame. On the next pass the slices' exit clip cut to the slab showing the finished handout
  for a moment, then the clip jumped back to its start (the glitch and "refresh"). Now the clip returns to
  its first frame whenever the slide is left, in either direction. Coming back from the Brief slide is
  still covered by the last-frame still.
- Checked in headless Chrome (dark mode, with the exit clip): Why AI? → reveal → Brief → back → back →
  forward again; every forward arrival starts on frame 0, with no overlay or still showing.

## 2026-11-18 — Slide 1: breeze clip upscaled to 1080p, in the deck blue

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Sharper:** the 1280×720 `media/bg/welcome-wind-v2.mp4` is scaled to 1920×1080 with a
  high-quality (Lanczos) scaler and a light sharpen, and encoded at much higher quality (about 10 MB,
  was 1.7 MB), so the loop step no longer adds blur. Loops forward only, 8.5 s, the last 1.5 s
  crossfading into the start.
- **Deck blue:** the clip plays at about rgb(45 145 191), lighter than the other blue slides, so only
  its table blue is shifted to rgb(15 108 157); everything else keeps its colour. Measured in headless
  Edge: (15, 107, 156). White text 5.8 : 1, small lines 5.1 : 1, both pass AA.
- `media/bg/welcome-wind-loop.mp4` and poster `welcome-wind-poster.jpg`, cache key `?v=20261118f`.

## 2026-11-18 — Slide 1: new breeze clip (flowers sway), in the slide blue

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **New clip on the title slide:** the updated `media/bg/welcome-wind-v2.mp4` (10 s; the bouquet
  sways) replaces the steam clip. As before, only its table blue is recoloured, to the deck blue
  rgb(15 108 157); the tablet, napkin, flowers and coffee keep their colours. It loops forward only:
  the last 1.5 s crossfade into the start, 8.5 s, silent, same colour tags as before.
  `media/bg/welcome-wind-loop.mp4` and its first-frame poster `welcome-wind-poster.jpg`, cache key
  `?v=20261118c`.
- Checked in headless Edge at 1920×1080: slide 1 samples (15, 108, 157), slide 2 (12, 106, 156).

## 2026-11-18 — Frameworks slide ("14 frameworks, one dropdown.") removed

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **`#fw-pick` is removed** from the deck with its styles and hover script; "Who it's for" leads straight
  into the scattered-tools slide again.

## 2026-11-18 — "Checking a handout today" hidden

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **`#pain` is hidden** (one `hidden` attribute); the scattered-tools pill slide now opens the problem
  set on its own. The six-tile slide stays in the file to bring back.

## 2026-11-18 — New slide before "Checking a handout today": the scattered tools as glass pills

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **`#tools`**, black, no title: eleven glass pills bunched in the middle, touching end to end, each
  drifting a few pixels: Grade school reading level, Universal Patient Language, Contrast checker,
  CDC Clear Communication Index, Colour-blind simulator, Section 508 checklist, PEMAT, Plain language
  checker, Alt text guide, CDC Everyday Words and Grammarly. The pills use the pain chips' glass (a little
  darker so overlaps stay readable), Public Sans at 2.2 units, and three back pills a 0.5 px blur.
- **Hover a pill** and it lights like Meet PRISM's lit tiles: brighter glass, a stronger rim, bold white
  text and a glow in the deck's blue, rgb(15 108 157), and it comes to the front.
- **Next step** (arrow key or click): every pill flies into the centre and one yellow pill, "Check it in
  PRISM", in the brand yellow with dark text, takes their place. Going back brings the pills back.
- Checked in headless Chrome at 1920×1080: all eleven names readable, a hover lights a pill, the step
  merges them, no errors.

## 2026-11-18 — New slide after "Who it's for": Frameworks, the Studio list with a deck of cards behind

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **`#fw-pick`**, right after the Brief slide, on the same black: "14 frameworks, *one dropdown.*" at the
  top, and the Studio's Frameworks dropdown rebuilt at the Brief panel's size below it (header
  "Frameworks · 4 of 14 · Fit your Brief · Close"). Rows read like the Studio: tick box, short name,
  full name, zone tag, and the output on the right (Score, Partial score, Checklist). The four that fit
  the Brief (Patients, Handout: CCI, PEMAT-P, Readability, UPL, PRISM's "Handout, poster or web page"
  set) come first, ticked in yellow; the other ten follow, and the list runs past the bottom of the slide.
  Text and links come from `frameworks.js`.
- **Deck behind:** the 14 framework cards (the Why AI? background's browser cards: source address, zone
  colour, short and full name) wait stacked behind the panel's right edge. Hovering or clicking the panel,
  or the slide's second step (arrow key), deals them into three fanned rows on the right; leaving the
  panel stacks them again.
- The panel shares the Brief's `data-morph`, so it glides from the Brief panel into place.
- Checked in headless Chrome at 1920×1080, stacked and dealt, no errors.

## 2026-11-18 — "Health writing anyone can read." slide removed

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- The Promise slide (`#promise`) is hidden with `hidden`, so the deck goes from Who it's for straight to
  Checking a handout today. Removing the attribute brings it back.

## 2026-11-18 — Studio: the steps stay until there's material

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **"How to check your material" shows until material is in**, even with a Brief and frameworks set.
  Before, picking frameworks swapped the steps for cards that had nothing to score yet (Framework
  checklists: "need text to score", UPL 0 of 59; the 508 card). `syncGuide()` in `index.html` now keeps
  the steps and hides the cards (`.rail-scroll.steps-only .mod`) until `hasContent()`; the cards come back
  as soon as text or a file is in. Picked frameworks still tick step 3.
- Checked in headless Chrome at 1920×1080, light mode: 5 frameworks picked shows the steps; loading the
  Handout sample brings back the cards (Framework checklists, CCI).
- The reveal recording (`prism-reveal-light.mp4`) still shows the old empty state; re-recording was asked
  of the session that made it.

## 2026-11-18 — Reveal re-recorded: the Studio opens on "How to check your material"

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- Asked for by the Intro session: the Studio now keeps its "How to check your material" steps until
  material is in, so the reveal no longer opens on the Framework checklists card ("0 of 59 rated").
- **Re-made:** `prism-reveal-light.mp4` (2880×1620, 5.9 s, same drag-and-drop of `water-pill.html`),
  `prism-reveal-light-first.png`, `prism-reveal-light-last.jpg`, `video/public/prism-reveal-light.png`,
  and the slab clip `ai-to-reveal-light.mp4` (`npm run render:reveal-light`), which now lands on the
  steps. `rv-brief.png` is re-cut from the new last frame. Deck versions bumped
  (`?v=20261118e`, slab clip `?v=20261118z`, `rv-brief.png?v=20261118b`).
- Checked in headless Chrome at 1920×1080: the clip ends on the analysed handout, the Brief overlay
  matches the clip, and reveal → Who it's for → back works.

## 2026-11-18 — New slide after the reveal: "Who it's for" (the Brief)

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **New slide `#brief`** right after the PRISM reveal. On the click, the Studio, its yellow frame and the
  blue fall away to black while the Brief bar grows out of the Studio into the Brief panel, already open
  (no unfolding, to save time): Audience (Patients selected), Format
  (Handout selected), and the reading and length targets. Then "Built for healthcare teams, *written for every reader.*" fades in under it at the
  deck's standard title size, on two full lines. The open panel and the title are centred together on
  the slide.
- **Readable from the back row:** the Brief panel is rebuilt in the slide (HTML, Public Sans) at about
  2.5x the Studio's size: options ~38px at 1920×1080, the Studio's chevron on Close, and both target lines
  (Reading, Length). Sizes are in the deck's `--u`, so it scales with the screen.
- **Hover:** pointing at an option in the Brief panel lights it up: a deeper grey than the Studio's
  own hover (`#D3DAE3`) with a grey outline (`#8E99A6`), 120 ms, so it shows on a projector; the picked
  ones (Patients, Handout) stay yellow.
- **Smooth hand-off:** the whole panel morphs out of the Brief bar in the reveal clip (`rv-brief.png`, cut
  from the clip's last frame and laid exactly over it), so it grows from the bar as one piece and
  shrinks back into it going back. The bar's picture hands over to the panel in 0.22–0.3 s, so the two
  sets of words don't overlap. Frames checked every ~80 ms in headless Chrome.
- **Reveal slide:** coming back from the Brief slide, it now shows the clip's last frame (a still laid over
  the clip) instead of replaying. Leaving it backwards still returns the clip to its first frame for the
  Why AI? hand-off. Its class watcher now acts only when the slide is entered or left, which stops it
  from restarting the clip in a loop.
- Earlier today, also in this session: the title glides going forward as well as back
  (`opensAtStart()`), and every footer line is pure white at 80% (logged above).

## 2026-11-18 — One blue on every blue slide: rgb(15 108 157)

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **The most used blue, rgb(15 108 157), is now the only slide blue.** It was already on the welcome
  video, slide 2's desk, Standards exist (background and its card wash) and Why AI?'s CSS.
- **Brought in line:**
  - Why AI?'s slices clip and its exit into the Studio were rendered on rgb(34 115 150). `AiSlices.tsx`
    `BG` is now the shared blue, and `ai-slices.mp4` (plus its poster), `ai-to-reveal-light.mp4` and
    `ai-to-reveal.mp4` are re-rendered. The render scripts now pass `--color-space=bt709`, so the clips
    come out standard-range BT.709 and match the CSS blue within 2 levels, with no separate re-encode.
  - `#reveal` (the Studio push-in after the clip) was rgb(34 115 150).
  - The appendix Lego slide was #025A9E: its CSS, the blueprint grid and the nine pieces
    (`media/bg/lego/`) are shifted to the shared blue; the white lines are unchanged.

## 2026-11-18 — Studio: long sentences underlined, more medical words; reveal at 2×

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Long sentences are marked in the text:** a sentence over 25 words gets a blue dotted underline under
  the whole sentence (`::highlight(pea-long)` in `design-system.css`); the yellow word marks stay on top.
  "Longish" sentences (19–25 words) are still listed but not underlined, so paragraphs don't fill up.
- **More words flagged:** PRISM's medical-word list (cited to PEMAT-P item 4) gains physician → doctor,
  administer → take, orally → by mouth, urinary output → how much you pee, orthostatic hypotension →
  feeling dizzy when you stand up, syncope → fainting, electrolyte imbalance → salt and mineral levels
  being off. The plain-word swaps gain approximately → about, immediately → right away, notify → tell.
  "Monitor" stays off, as the list notes it's too common to flag.
- **Sharper screens:** the reveal recording is now 2880×1620 (`prism-reveal-light.mp4`, re-recorded with
  the new marks: 9 suggested changes) and the slab transition is rendered at 2880×1620 too
  (`--scale=1.5`). The closing slide's background is a 2× frame of the analysed light Studio
  (`prism-reveal-light-last.jpg`). The real-guide clip is 2496 wide; Meet PRISM is the live page.
- Checked at 1920×1080 and 2000×1032: the slab holds the same pixels across the cut, and the final
  frame is sharp.

## 2026-11-18 — Studio: Readability heads the second column, above CCI

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **The reading grade is in view as soon as material is in.** The default layouts ("Everything" and
  "Auditing existing material") now order the panels Plain language, PEMAT, Readability, CCI, Framework
  checklists, so on a wide Studio Plain language and PEMAT fill the first column and Readability tops the
  second, above CCI (the columns balance by height). One-column layouts keep the same order.
- The reveal recording (`prism-reveal-light.mp4`, `?v=20261118b`) and the slab clip were re-made with it:
  the analysed water-pill handout now shows Readability at grade 16.4 above CCI.

## 2026-11-18 — Reveal: centred on any screen; light Studio that drops in the water pill

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Pinned to the centre:** Why AI?'s slices video and its exit clip now cover the screen from the
  centre (were bottom-right), and the reveal slide places the slab with the clip's own cover scaling
  (`--rv`), so on a screen wider or taller than 16:9 the slab is centred and lands exactly where the
  clip leaves it. Checked at 2000×1032 (66 px above, 67 below, same pixels across the cut) and 1920×1080.
- **Light Studio, animated:** new recording `media/bg/prism-reveal-light.mp4` (5.8 s, 1920×1080): the
  light Studio with the Brief set to Patients + Handout, a `water-pill.html` file is dragged in and
  dropped, and the analysis fills in (flags, Plain language suggesting "water pill" and "swelling", CCI).
  New clip `ai-to-reveal-light.mp4` (Remotion `AiToRevealLight`, `npm run render:reveal-light`): the slab
  turns into its first frame. On the reveal slide the recording plays inside the slab each time the
  slide opens, once, and stops on the analysed handout.
- The dark version stays in the folder (`ai-to-reveal.mp4`, `prism-reveal-2x.jpg`); switching back is
  the exit clip's `src` and the slab's contents.

## 2026-11-18 — Reveal: the screen no longer shifts at the cut

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Two causes, both fixed.** (1) The reveal slide's slow push-in started growing the slab right after
  the cut; it's gone, so the slab holds where the clip leaves it. (2) After a slide's exit clip, the
  deck switched transitions back on before the next slide had settled, so it still glided up from its
  waiting place (4vh lower, 98.5% size). `exitThrough` now settles both slides first.
- Checked by screenshotting every ~170 ms through the click on Why AI?: from the clip's last frame
  onward the slab's yellow rim stays at exactly 192–1727 × 108–971 px in every frame.

## 2026-11-18 — Reveal: water-pill Studio, sharp, on the Why AI? blue

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **The Studio in the slab now shows the water-pill handout** (`presentation/demo-files/water-pill.html`,
  the long "as written" version plus a "When to call us" paragraph), Brief Patients + Handout: flags on
  diuretic, edema, 25% and more, a "Medical word" card suggesting "water pill" and "swelling", and the CCI.
- **Sharper:** captured at 2× (2880×1620, `media/bg/prism-reveal-2x.jpg`, `video/public/prism-reveal.png`);
  the clip is rendered at CRF 12 and re-encoded standard-range BT.709 at CRF 12.
- **The stage stays the Why AI? blue** (rgb 34 115 150) behind the slab; it no longer darkens.
- **The reveal slide is built in the page** (`.rv-slab`): the 2× picture in the slab's yellow rim at the
  clip's exact size and place (10% in, 80% wide, same corners), so the cut from the clip matches its last
  frame (compared frame to slide) and the text is sharp. The closing slide's background uses the same picture.
- `ai-to-reveal.mp4` `?v=20261118c`.

## 2026-11-18 — Reveal: the Studio stays inside the slab, square at 80%

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **The slab no longer grows to fill the screen.** `ai-to-reveal.mp4` now ends with the slab square to the
  room at 80% of the screen (192–1728 × 108–972), rounded, keeping its yellow rim, with the Studio inside
  it; the blue stage behind darkens to #111316 as it grows. `AiToPrism` takes `contained` for this
  (`AiToReveal` sets it); the old full-screen version is unchanged.
- **The reveal slide is that clip's last frame** (`media/bg/prism-reveal-framed.jpg`), so the cut from
  Why AI? doesn't show; its push-in is now a gentle 3.5% from the centre.
- Checked at 1920×1080: landing on the reveal from Why AI?.

## 2026-11-18 — "14 frameworks, one list" slide hidden

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **`#one-list` is hidden** (a single `hidden` attribute), so the deck goes from Meet PRISM straight to
  the Demo slides again. The slide, its flow-tree clip and the source stay in place to bring back.

## 2026-11-18 — PRISM intro storyboard: reveal, promise, problems, real guide, one more thing

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Why AI? now exits into the Studio itself.** New clip `media/bg/ai-to-reveal.mp4` (Remotion
  composition `AiToReveal`, `npm run render:reveal`; the same slab turn as `AiToPrism`, which now takes a
  `face` picture). The slab becomes `video/public/prism-reveal.png`: the real Studio, dark, at 1920×1080,
  with The Light Collective's guide loaded (Patients + Manual, four frameworks, 67 suggested changes, CCI
  scoring). Re-encoded to standard-range BT.709 like the other clips. `ai-to-prism.mp4` is kept, unused.
- **New slides after Why AI?:**
  - `#reveal` "PRISM": that same Studio picture, full screen (the clip's last frame), with a slow 12 s
    push-in.
  - `#promise`: one line, "Health writing anyone can read."
  - `#pain` "Checking a handout today": the six real problems as glass chips that settle in, then
    "Six problems, six places. No answer you can show."
- Then the existing Meet PRISM (Upload → Measure → Improve), Before and after, and One list.
- **New slides after One list:**
  - `#real-file` "A real guide, 67 fixes in one click.": the recorded Apply all on The Light Collective's
    guide (`d4-fixes.mp4`), as large as the slide allows, with its credit.
  - `#trust` "One more thing": "Nothing leaves your browser. Every fix cites its standard." then "Better,
    and you can show why.", over the Studio picture, blurred and dark.
- Checked at 1920×1080 (headless Chrome): the Why AI? exit landing on the reveal, the promise, problems
  before and after their click, the real guide, and the closing slide. Deck scripts parse.

## 2026-11-18 — Why AI? → Meet PRISM: the slices become PRISM

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **New clip** `presentation/media/bg/ai-to-prism.mp4` (3 s, Remotion: `video/src/AiToPrism.tsx`,
  `npm run render:prism`). It starts on the slices' last frame: the labels fade, 1 designer and 1 month
  slide into the AI slab, the slab turns to face the room, its yellow becomes the Meet PRISM slide
  (`video/public/meet-prism-face.png`, captured from the deck at 1920×1080, dark) and grows to full screen.
- **On the Why AI? slide** (`data-exit`), the click forward fades the text and plays the clip, then cuts to
  the live Meet PRISM slide with no fade. The clip's last frame is that slide, so the cut doesn't show.
  Meet PRISM skips its logo opening when arrived at this way (the page is already whole). A click during
  the clip jumps to the end. Going back, light mode and reduced motion keep the plain morph.
- **Colour range:** both `ai-to-prism.mp4` and `ai-slices.mp4` re-encoded to standard-range BT.709
  (they were full-range, which the browser showed darker), so the seams match within 1–2 levels.
- Checked in headless Chrome at 1920×1080: frames through the clip and across both seams.

## 2026-11-18 — Meet PRISM: Upload, Measure, Improve in clear glass

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **All three steps are clear glass** now, not a solid blue fill: a thin white wash, frosted behind,
  with a bright top edge and a hairline rim. Unlit steps are dimmed; a lit step is brighter glass with
  a stronger rim and a faint glow in the deck's blue, and its arrow lights too.
- `intro.css` `?v=20261118d`. Deck only. Checked at 1920×1080 after two clicks.

## 2026-11-18 — Empty Studio shows the steps again

Branch: `refresh-and-fixes` · Vercel: not deployed yet (local only)

- **Fix:** with no material, the "How to check your material" steps were missing when the
  Section 508 / WCAG card was showing (it stays on before there's text, e.g. after opening a poster),
  because any visible card hid the steps. That card no longer counts (`syncGuide`), so the steps show
  until a card has something to score, with the Section 508 card under them.

## 2026-11-18 — Why AI?: setup line ends at "months of work."

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Slide `#why`:** "I had none of those." is gone; the line now reads "Normally: developers, a
  budget, months of work." The video's screen-reader description now matches the current
  animation (developers, budget, two designers, six months → one designer, AI, one month).
  The appendix copy of the slide (`#why-lego`) is unchanged.

## 2026-11-18 — New slide: "Same handout, before and after." (after Meet PRISM)

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **New slide `#ba`** right after Meet PRISM (option A, split card with a fix key). The water-pill
  handout as written (grade 15.9, 10 flags, yellow flags) sits beside the version after PRISM (grade
  2.7, 0 flags, green underlines), with numbered green markers in the after text.
- **The key underneath** names each fix, the standard behind it and how far it moved the grade:
  1 · 8 medical words made everyday (PEMAT-P, CDC Everyday Words, 15.9 → 8.9);
  2 · a 42-word sentence split in five (Federal Plain Language, 8.9 → 3.8);
  3 · "25%" to "1 in 4", plus what to do (Gigerenzer & Hoffrage, 3.8 → 2.7).
  Numbers come from the deck's own steps in `intro.js`.
- Type: serif title, the handout in the reading serif, everything else sans at one size (white/grey).
  Checked in a screenshot at 1920×1080. The Meet PRISM slider card is unchanged.
- Also in this round: forward slide changes now hold the incoming title in the morph too (it only
  glided going back before). Not yet re-checked in a browser.

## 2026-11-18 — Meet PRISM follows the script: Upload → Measure → Improve

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **The six problem tiles are replaced** by what the script says: the headline "An all-in-one
  readability check for science and medicine", then a row of three glass pills, Upload ("your
  material") → Measure ("against 14 patient-education standards") → Improve ("with fixes you can trust
  and check").
- **Each click lights the next pill** in the deck's blue, rgb(15 108 157), with the arrow before it;
  the slide arrives with all three dimmed (`data-beats="4"`). The pills' text starts on the
  headline's left edge. The water-pill card on the right is unchanged.
- Deck only (`?deck`). `intro.js` `?v=20261118a`, `intro.css` `?v=20261118c`.
- Checked at 1920×1080: arrival, and after two clicks.

## 2026-11-18 — 14 frameworks, one list: flow-tree video replaces the dropdown

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **New clip on `#one-list`** (10 s, plays once, then holds), in the style of a flow tree: the 14
  frameworks are listed down the left, each with a circle in its zone colour. One by one each draws a
  translucent ribbon that sweeps right, and all 14 braid into one yellow circle that grows as they land
  and reads "1 list" (`media/bg/frameworks-flow.mp4`, poster `frameworks-flow.jpg`).
- Plain 2D, so the credit now reads "Animation: made in code with Remotion" (no three.js).
- **Source:** `video/src/FrameworksFlow.tsx`; `npm run render:flow` in `video/` rebuilds it. The
  dropdown clip (`frameworks-list.mp4`, `FrameworksList.tsx`) stays in the repo but is no longer used.
- Frames checked from the render. Not checked on the slide in a browser: drive C: is full, so headless
  Chrome would not start.

## 2026-11-18 — 14 frameworks, one list: the dropdown video

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **The placeholder slide after Meet PRISM (`#one-list`) now plays its video** once each time it comes
  up (11 s, then it holds): PRISM's 14 frameworks fan out as glass slices in the Why AI? clip's style,
  coloured by zone (clarity and content blue, decisions green, behaviour coral) and labelled. A yellow
  "Frameworks" dropdown drops into the middle, opens, and the slices slide into it, nearest first;
  each lands as a row, and the count climbs to 14. It ends on the open list with a zone legend
  (`media/bg/frameworks-list.mp4`, poster `frameworks-list.jpg`).
- **Drawn on the deck's dark desk** (#121417); the slide keeps that dark background and light text in
  light mode too, so the clip never shows an edge.
- **Credit:** "Animation: made in code with Remotion and three.js".
- **Source:** `video/src/FrameworksList.tsx`; `npm run render:list` in `video/` rebuilds the clip.
- Checked in headless Chrome at 1920×1080: the clip plays to its end frame, no errors.

## 2026-11-18 — Placeholder slide after Meet PRISM: "14 frameworks, one list"

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **New slide `#one-list`** right after Meet PRISM, with its own rail dot ("One list"). It holds the
  title "14 frameworks, one list" and a placeholder line until the video is made: a dropdown takes in
  the 14 framework tools (glass slices, as in the Why AI? video) and becomes one master list.
- Checked in headless Chrome at 1920×1080: it sits between Meet PRISM and the Demo slides, no errors.

## 2026-11-18 — Morph: same title glide forward and back

Branch: `refresh-and-fixes` · Vercel: Production (PR #58, merged 2026-11-18)

- **Forward now glides the title too.** Going forward, the next slide arrives on its first beat, before
  its title has faded in, so its title was left out of the morph and only the crossfade ran; coming back
  it glided. A title that shows from the slide's first beat is now held in the glide going forward as well.
- **Each pair of slides gets the same change both ways.** The title glides only when the later slide's
  title shows from its first beat (Welcome ↔ A confession, Intent first ↔ Build fast, Iterate ↔
  Verification); every other change is the morph's crossfade, forward and back.
- Checked in headless Chrome at 1920×1080 by stepping through the whole deck forward and back: every
  slide change, the welcome slide included, runs the morph.

## 2026-11-18 — Meet PRISM: tiles turn blue; tile text lines up with the headline

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Turned tiles are the deck's blue**, rgb(15 108 157), the background of the question, Why AI? and
  Standards slides, as a glass pill with bold white text (about 5.2 : 1). The panel's glow is blue too.
- **The tile text starts on the headline's left edge:** the panel hangs left by its padding plus the
  tiles' inner padding.
- `intro.css` `?v=20261118b`. Deck only. Checked at 1920×1080 after two flips.

## 2026-11-18 — Slide 2: titles in the middle

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Slide 2's titles ("50+ posters…" and "Loved it…") sit in the vertical middle of the slide**
  instead of at the top (`presentation/index.html`). The cricket after the click is a little smaller
  (16.5% of the slide's width, was 21%) and stands right against the poster, so it clears the
  centred text. Not checked in a browser.

## 2026-11-18 — Every blue slide uses the Why AI? blue

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Welcome slide and slide 2 now use rgb(15 108 157)**, like "Standards exist" and "Why AI?".
  Only the blue was recoloured, so the ink lines, the tablet and the rest of each picture are
  unchanged: `welcome-wind-loop.mp4` (every frame, re-encoded with the same codec and colour tags),
  `welcome-wind-poster.jpg`, `empty-desk-deep.jpg`, and slide 2's page colour. Pixels near the old
  blue move to the new one, blending out at the edges so the paper texture stays.
- Checked in headless Chrome: all three slides sample at about (15, 108, 157). Light text on it
  passes at 5.2:1. The originals are kept outside the repo as a backup.

## 2026-11-18 — Standards exist: same blue as the Why AI? video

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **"Standards exist" now uses rgb(15 108 157)**, the blue the "Why AI?" explanation video shows
  on screen (the video file is coded rgb(34 115 150), but Chrome plays it brighter because it is
  full-range with different colour tags than the other clips). The slide and its gradient wash
  switch to it, so the two slides read as one colour. Light text on it: 5.2:1 (title), 5.1:1 (line).

## 2026-11-18 — Meet PRISM: no slider hint in the deck

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **"Drag the slider to see each fix." is gone from the deck's Meet PRISM slide** (`intro.js`, `?deck`
  only); the speaker drags it. The live site's intro keeps the hint.
- Mockup only, not in the deck yet: `design/brainstorm/prism-blue/` shows Meet PRISM arriving in slide
  4's blue and dimming to black.

## 2026-11-18 — Titles: pure white with a crisp shadow

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Every slide title is pure white** (the welcome title, slide headings, big lines and quotes), with a
  thin dark edge and a soft glow (`0 1px 2px rgb(0 0 0 / .45), 0 2px 14px rgb(0 0 0 / .3)`), so it
  holds over busy art like the moving framework cards. Highlighted words in titles are white too.
  Before, titles were off-white (`#E9EBEE`, or `#F6F4EC` on the blue slides) with no shadow.
- Light mode keeps its dark titles. Option B of the mockups in `design/brainstorm/title-white/`.

## 2026-11-18 — Why AI?: no head counts on the row

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- Slices show cost, not people, so the row labels drop their counts: "Developers", "Budget",
  "Designers". Time keeps its count ("6 months"), and the end still reads 1 designer, AI, 1 month.

## 2026-11-18 — Why AI?: AI lands between the two designers

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **New row:** 3 developers, 3 budget slices, 2 designers, 6 months. AI drops in between the two
  designers, which is also the middle of the row (7 slices in front, 7 behind), so both sides
  slide into it evenly. The back designer goes into AI too; it ends 1 designer, AI, 1 month.
  Labels follow: "2 designers" under the pair, "6 months" above the back end.

## 2026-11-18 — Why AI?: even absorb, deck colours

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Even absorb:** AI now lands dead centre, 7 slices in front and 7 behind, so both sides slide
  into it together. The last three end evenly spaced with no overlap (1 month, AI, 1 designer);
  "1 designer" moved above its slice to stay on screen.
- **Colours from the deck:** developers coral `#F28B82`, budget green `#7FD19B` (PRISM's
  status colours), months pale ink `#EEF1F4`, designers form blue `#8DB4EC`, AI brand yellow
  `#F5CF4A`.

## 2026-11-18 — Why AI?: slices animation behind the slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Slide 4 (`#why`)** gets the explanation video, playing once each time the slide comes up
  (10 s, then it holds): a usual project fans out as glass slices in the lower right, labelled
  3 developers, Budget, 6 months and 3 designers. A yellow AI slice drops into the middle of
  the months, the other slices slide into it, and one month, AI and one designer are left.
  Labels are part of the video. It sits clear of the title on a 16:9 screen
  (`media/bg/ai-slices.mp4`, poster `ai-slices.jpg`).
- **Credit:** "Animation: made in code with Remotion and three.js".
- **Source:** new `video/` folder (Remotion + three.js). `npm run render` there rebuilds the clip;
  `node_modules` and renders stay out of git.

## 2026-11-18 — Why AI?: framework background off, waiting for the explanation video

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Slide 4 (`#why`)** loses its scrolling framework cards and their wash; the slide is the plain
  blue until the explanation video is ready. Its credit line ("Background: PRISM's 14 frameworks")
  goes with it. The rows still play on "Standards exist" (`fw-rows.js` builds both).

## 2026-11-18 — Standards exist: gradient wash, right side vivid

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Second beat:** the rows come in at full strength under a left-to-right wash in the slide's blue,
  deep behind the title and clear from about two-thirds across, so the cards on the right are
  vivid (replaces the even quarter fade). A thin fade along the bottom keeps the credit line
  readable. The screenshots land in their cards at full strength.
- Checked in headless Chrome at the slide's end state.

## 2026-11-18 — Standards exist: title in the middle of the slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- "Standards / already exist." and "What if they were all in one place?" now sit centred top to
  bottom on the left, on both beats (the framed pile, and the faded rows), instead of at the top.
  Checked both beats in headless Chrome.

## 2026-11-18 — Standards exist: the title stays over faded rows

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Second beat:** "Standards / already exist." and "What if they were all in one place?" stay on
  screen, and the framework rows come in faded to a quarter behind them, as in the faded mockup.
  The two screenshots fade to the same strength as they fly into their cards, so they land
  without a jump. The first beat (title and framed pile on plain blue) is unchanged.
- Checked in headless Chrome at the slide's end state (coming back from "Why AI?").

## 2026-11-18 — Standards exist: no cards behind the title

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- Undoes the faded rows on the first beat: the title, its line and the framed pile sit on plain
  blue again, and the framework rows come in on the click as the screenshots fly into them.

## 2026-11-18 — Standards exist: faded rows behind the title from the start

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The framework rows now appear with the title** on the first beat, faded to a quarter so
  "Standards / already exist." and its line read over them on the blue (no gradient). The rows hold
  still while the framed pile drops in.
- On the next click the screenshots fly into their cards; when they land the rows come up to full
  strength (0.7 s) and start drifting.

## 2026-11-18 — Standards exist: framed pile, one line under the title, clean rows

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Frames:** in the pile, Nati's post and the CDC screenshot each hang in the hand-drawn wooden
  picture frame from the blue cabinets drawing (`presentation/media/bg/cabinet-frame.png`, cut from
  `blue cabinets.png` and stretched along its edges so the corners keep their hatching). The frame
  thins to nothing as each screenshot flies into its card. The pile is a little smaller so the
  frames clear the title and the credit line.
- **Under the title:** "What if they were all in one place?" now sits under "Standards / already
  exist." on the first beat.
- **Second beat is clean:** "Frameworks everywhere, scattered across different documents." and the
  wash over the rows are gone, and so is the third beat (its big "What if they were all in one
  place?" now lives under the title). The slide is two clicks: the pile drops in, then the
  screenshots fly into the rows.
- Credit line adds "Frames: from a drawing generated with Midjourney".
- Not watched in the browser (the pane keeps timing out); the frame image was checked by slicing
  it around the real screenshots, and the script is syntax-checked.

## 2026-11-18 — Standards exist: the two screenshots drop onto a pile

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Slide 3 (`#standards`), first beat, laid out like slide 2:** the title "Standards / already exist."
  on the left (now on two lines, so it stays clear of the pile) and the screenshots on the right as a
  pile, option B: the CDC Clear Communication Index behind, tilted 3°, and Nati's post in front,
  lower and tilted −4°.
- **They drop in:** the CDC site first, then the post, each falling from above the slide and settling
  with a small bounce (`standards.js` adds `.down`; reduced motion skips the bounce). The labels under
  the screenshots are gone; the credit line names both.
- On the next click they still shrink into their two cards in the framework rows, now turning from
  their own tilt to the rows' −4°.
- Not watched in the browser: the pane was hidden and timed out. The script was syntax-checked and
  localhost:5173 serves the new version.

## 2026-11-18 — One title treatment; slide 2's footer trimmed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Every slide title now shares one treatment**: the same face, size and weight (as before), 1.08
  line spacing everywhere (some were 1.04), and no glow or shadow behind it (slide 2, the welcome
  slide and the photo slides each had their own).
- **Slide 2's footer** now reads "Cricket: generated with Midjourney. Posters: Sonia Seto for UHN"
  then the Noto animated emoji credit (CC BY 4.0) added back: "Cricket: generated with Midjourney.
  Posters: Sonia Seto for UHN. Emoji: Noto animated emoji (CC BY 4.0)".
- Not checked in a browser (Chrome disconnected).

## 2026-11-18 — Footers: pure white at 80%

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Every footer line** (media credits, notes, the feedback and licence line, and their links) is now
  pure white at 80% opacity, `rgb(255 255 255 / .8)`, on every slide. Before, they used the secondary
  grey, which was `#EEF1F4` on the blue slides and `#B4BAC2` on the dark ones.
- Light mode keeps its dark secondary ink for footers, since white would not show on the light desk.

## 2026-11-18 — Standards and Why AI? in the deeper blue

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The Standards slide and Why AI? now use the same deeper blue as the welcome slide and slide 2**
  (rgb 34,115,150) in both themes, with light text, the olive highlight, and the wash over the
  framework rows in that blue instead of the dark grey (`presentation/index.html`).

## 2026-11-18 — One slide change: morph, forward and back

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Every slide change is the morph**, going forward and going back: the page crossfades while the
  title (and anything marked `data-morph`) glides to its new place. The crossfade and the glide now
  run on one clock (0.75 s, same easing), so nothing finishes ahead of the rest.
- **Removed the one-off changes** that were left in the code but no longer used: the prism highlighter
  wipe and the Take-home zoom-through. The Take-home slide still shows Intent first through its letters.
- The same-title fade now only runs in the plain fallback (reduced motion, or browsers without View
  Transitions), so it can't mix with the morph.

## 2026-11-18 — Slide 2: no wind

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The three wind strokes are removed** from the click; the leaves still tumble down before the
  cricket hops in.

## 2026-11-18 — Slide 2: sharper cricket

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Chloe's higher-resolution cricket** (`presentation/media/bg/cricket.png`, 2912 x 1632) is cut out
  again by `scripts/cricket-cutout.py`: `cricket-cut.png` is now 354 x 262 (was 181 x 136), so at its
  size on the slide it is barely enlarged and stays crisp.

## 2026-11-18 — Slide 2: fix the poster drawn small in the top-left after the click

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Fix**: on Chloe's screen the lifted poster was drawn at about half size, tucked top-left behind the
  title, after the click: the sheets canvas had lost its scaling. `desk-pile.js` now re-applies the
  canvas scaling every frame and lays the slide out again whenever its size or the screen's pixel
  density changes without a resize event (browser zoom, another monitor).
- Not yet re-checked in a browser (Chrome disconnected).

## 2026-11-18 — Slide 2: on the click, the poster alone on the blue with the cricket beside it

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Replaces the zoom.** On the "Loved it" click the reactions fade, and the desk, chair and pile fade
  into the blue while the teach-back poster glides to the right half, larger (74% of the slide's
  height, its middle at 69% across). The wind and leaves still blow past.
- **The cricket hops in from the left** in two hops and stands on the blue just left of the poster's
  lower corner, facing it, feet level with the poster's bottom edge, no shadow. It leans 3.6deg
  nose-down so its hind, middle and front feet all stand on one line, and breathes (a slow, slight
  swell) once it lands. It is drawn about 21% of the slide's width, enlarged from the 181 px cutout,
  so it is a little soft; an upscaled cricket image would sharpen it.
- The zoom's left/bottom veil is removed (`presentation/desk-pile.js`, `presentation/index.html`).

## 2026-11-18 — Slide 2: updated desk drawing

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The new `empty desk.png` is on slide 2** (re-exported to `presentation/media/bg/empty-desk.jpg`,
  cache key `20261118b`): the chair no longer has an armrest. The desk itself is unchanged, so the
  pile, the lifted poster and the cricket still sit exactly on it.

## 2026-11-18 — Slide 2: the scene zooms in to the desktop on the click

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **On the click, the whole scene eases in about 2× over 1.6 s** to just the desktop: the lifted
  teach-back poster big beside the text, the pile, cup and cricket along the bottom. The drawing,
  the sheets canvas and the reactions/wind/cricket layer all zoom together; the text stays put.
- **The chair and the desk's legs fade into the blue** as it zooms (`.desk-veil`), so the footer
  sits on clean blue under the tabletop.
- **The cricket now springs up from below the desk's front edge** onto the tabletop, then takes one
  small hop left to its spot by the cup (the floor is out of view when zoomed).
- **Sharper desk drawing**: `empty-desk.jpg` re-exported at higher quality from the PNG. It is still
  1456 px wide, so it softens a little at 2×; an upscaled desk image would make it crisp.

## 2026-11-18 — Slide 2: on the click, wind, leaves and a cricket

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **On the click** (as the title changes to "Loved it…"), the reactions fade, a gust of wind
  (three cream strokes) sweeps across to the right of the title, and five ink-outlined leaves
  tumble across and down with it.
- **Then a cricket** (Sonia's Midjourney cricket, cut out to `presentation/media/bg/cricket-cut.png`
  by `scripts/cricket-cutout.py`) appears under the desk, hops out head-first past the desk's right
  leg, then jumps low up and over onto the desk, landing with every leg on the tabletop just left
  of the cup, facing left. It only appears after the click; going back hides it, coming back to the
  slide shows it sitting there.
- Credit now reads "Desk and cricket: generated with Midjourney" (`presentation/desk-pile.js`).

## 2026-11-18 — Slides 1 and 2: one deeper blue, text passes AA; breeze loops forward only

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **No more dimming on slide 1 (`#top`).** Instead of darkening the whole picture to 82% (white text
  was 4.46 : 1, just under AA), only the table's blue is recoloured to rgb(34 115 150); the tablet,
  napkin, flowers and coffee keep their full colour. White text 4.9 : 1, small lines 4.8 : 1.
- **New breeze clip, forward only, seamless:** the updated 10 s clip (steam curls off the coffee,
  light glides across the tablet; kept as `media/bg/welcome-wind-v2.mp4`) loops as 8.5 s: its last
  1.5 s crossfade into the start, so there is no jump and no reverse. `media/bg/welcome-wind-loop.mp4`
  and its first-frame poster `welcome-wind-poster.jpg`, cache key `?v=20261118a`.
- **Slide 2 (`#question`) in the same blue:** the desk picture's blue recoloured the same way
  (`media/bg/empty-desk-deep.jpg`; the desk, chair and rug untouched) and the backdrop set to
  rgb(33 113 147) to meet its edges. Small lines go from #E4EEF6 to #EEF1F4. White text 4.8 : 1,
  small lines 4.6 : 1 (were 2.7 and 2.5 : 1).
- Recolour: a colour lookup table that moves only colours near the table blue (`design/brainstorm/welcome-dim/*.cube`). Options compared in `design/brainstorm/welcome-dim/`.
- Checked at 1920×1080 (headless Edge; the browser pane was not responding): both slides render,
  title clear of the art.
## 2026-11-17 — Titles at least 5u from the edge

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Every slide title now starts at least 5u (96 px at 1920×1080) from the slide edge**, as far in as
  the Take-home title. The slide's left margin goes back from 2.5u to 5u, so the titles and the text
  under them stay lined up; the right margin stays 2.5u, so wide content (the homepage slider, the
  review spreadsheet) still runs far right.
- **Pinned slides** start their title at least 5u from the top (was 8% of the height, 87 px).
- **Feature slides:** the text column moves in to 3.44u so its text, inset 1.56u, starts at 5u, and
  each title sits 5u from the top.
- Checked at 1920×1080: every visible slide's title is 96 px or more from all four edges. The one
  exception is the opening quote mark of "Loved it" isn't the same as "understood it.", which hangs
  into the margin on purpose so the letters line up; the letters start at 96 px.

## 2026-11-18 — Slide 2: reactions around the poster, not on it

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The reactions sit just outside the lifted poster's edges** (left, right and above), overlapping
  it by a few pixels at most, so the poster stays readable. They still burst out from its centre.

## 2026-11-18 — Slide 2: the leaflets fall a few at a time

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Still the 12 UHN materials, but several fall at once**: each sets off 0.05 to 0.35 s after the
  one before (was 0.3 to 1.15 s), in a shuffled order, so the whole fall finishes in about 8 s
  (was about 13). The teach-back poster still lands last on top and lifts as before.
- Landed sheets are drawn once onto a cached pile, in the order they land, so the animation stays
  smooth (`presentation/desk-pile.js`).

## 2026-11-18 — Slide 2: fall, lift and reactions play on their own; the click changes the title

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **On arrival everything plays without a click**: the leaflets fall, and half a second after the
  last one lands the teach-back poster lifts off the pile and the reactions pop around it, while
  the title stays "50+ posters, infographics and illustrations."
- **The one click** changes the title to "“Loved it” isn’t the same as “understood it.”" with
  "Nobody was checking…"; the lifted poster and reactions stay (`presentation/desk-pile.js`).

## 2026-11-17 — Slide 1: the breeze plays forward, then back, on repeat

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #55) · GitHub Pages: updated from `master`

- **The title slide background moves (`#top`):** `media/bg/welcome-wind.mp4` (10 s: a breeze blows
  forget-me-not petals across the table, steam rises off the coffee, the glass ripples) is played
  forward and then reversed, as one 20 s silent file, `media/bg/welcome-wind-loop.mp4`, looped. It
  always comes back to its first frame, so the loop never jumps. Option D of the mockups in
  `design/brainstorm/welcome-wind/`.
- **Plays only while slide 1 is up** (paused on every other slide), muted; with reduced motion it
  rests on its first frame, `media/bg/welcome-wind-poster.jpg`, also the frame shown while it loads.
- The video is 1280×720, so it is softer than the 2912-wide still it replaces on a big projector.
- Checked at 1280×720: plays on arrival, pauses on slide 2, resumes on return; title clear of the art.

## 2026-11-17 — Slide 1: the PRISM Studio on the tablet, drawn in the picture's ink style

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #53) · GitHub Pages: updated from `master`

- **New title slide background (`#top`):** the new `media/bg/welcome.png` (a table from above in
  the empty desk's blue: a tablet, a glass on a napkin with the prototype sketched on it,
  forget-me-nots, coffee), with the PRISM Studio ("Evaluate a draft") put on the tablet's blank
  screen. The screen is read in landscape, warped to the tablet's angle and redrawn in the
  picture's own style: paper white and pale blue fills, dark-green ink panel lines, text as ink
  bars, the picture's yellow and red, and its grain. Saved as `media/bg/welcome-tablet.jpg`.
  Options compared in `design/brainstorm/welcome-tablet/`.
- Ships the earlier slide 1 changes with it: the napkin-to-screen crossfade (`n2s-*`) is retired
  (its images stay in `media/bg/`), only the soft fade along the foot stays (no wash from the
  left), and the small grey lines brighten in dark mode (`--ink-2` is `#EEF1F4` on `#top`).
- **Credit line** reads "Background: generated with Midjourney, PRISM screen drawn in".
- Checked at 1280×720 in dark and light mode: the title stays clear of the tablet.

## 2026-11-17 — Title slide fine print on one row

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The title slide's fine print is one row**, in the shared footer spot: "Feedback: prism@goinvo.com ·
  Code licensed Apache 2.0, designs CC BY 4.0 · Background: generated with Midjourney, recoloured"
  (was three lines; the licence line is shortened, links kept).

## 2026-11-17 — One footer spot for every slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Every credit line sits in the same place on one row**: lined up with the slide's text edge
  (2.5 units in) and 1.5 units above the bottom, never wrapping. Slide 2's credit (was indented and
  wrapped to four lines) and the Appendix feature slides' credits (were higher, in their side
  column, wrapped) now follow it.
- **The Appendix feature slides' tile grid stops 1.6 units higher**, so the footer fits under it.

## 2026-11-17 — Meet PRISM: back to the water pill, longer and harder

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The card is the water-pill handout again**, replacing The Light Collective passages, but a
  longer, harder version so the before and after are far apart. As written (65 words): eight medical
  words (physician, diuretic, edema, urinary output, administer, orally, monitor, orthostatic
  hypotension), a 42-word sentence and "25%". The slider then applies three fixes: everyday words
  (PEMAT-P items 3–4, AHRQ; CDC Everyday Words), the long sentence split into five (Federal Plain
  Language Guidelines), and "25%" → "About 1 in 4 people", plus "Stand up slowly." (Gigerenzer &
  Hoffrage, 1995).
- **Reading grade 15.9 → 8.9 → 3.8 → 2.7, flags 10 → 2 → 1 → 0.** The grades are PRISM's own
  Flesch-Kincaid (`computeFK`) on each step's text.
- Deck only (`?deck`); the PRISM site keeps its short water-pill card. `intro.js` `?v=20261117j`.
- The local server on 5173 had stopped; restarted it for the checks.
- Checked at 1920×1080: slider at 0, 1 and 3.

## 2026-11-17 — Standards exist: no stacked headlines; screenshots darken as they land

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Stacked headlines (`#standards`):** coming back from "Why AI?" landed on the slide's last beat,
  and the slide-change morph held its title ("Standards already exist.") at full strength, so it sat
  on top of "What if they were all in one place?". The morph now holds a title only if it shows on
  the beat the slide arrives at, and a held line lets go once its own fade-out starts.
- **Post to dark background:** the dark wash now sits over the flying screenshots (text still on
  top), so Nati's post and the CDC screenshot darken with the rows as they land, instead of staying
  bright and dimming in one step when they swap into their cards.

## 2026-11-17 — Solid olive highlight on the blue slides

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The title slide ("Dropped") and slide 2 ("understood it.") highlight in a solid olive
  (#6B5F14)**, in both themes, instead of the see-through yellow that turns green over the blue.

## 2026-11-17 — Slide 2: varied fall, poster higher, title fix, title-slide highlight

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Leaflets fall from across the desk's whole width, at random intervals.** About a third fall
  nearly flat, rocking, barely curled; the rest fall more upright and curl. Each faces its own way
  (some turned to the side, a few with their back to the room, which shows the plain paper back).
- **The lifted poster sits higher above the desk**, the reactions with it.
- **Fix: the first title no longer stays on screen under "Loved it"** when the slide is reached
  through the morph. The deck now lets go of a morphed part once its own fade-out starts
  (`paintSlide` in `presentation/index.html`).
- **The highlight on "understood it." matches the title slide's** (the deck's see-through yellow,
  green over the blue) instead of a solid olive.

## 2026-11-17 — Slide 2: lifted poster centred, slower and more varied fall

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The lifted teach-back poster sits straight above the middle of the desk**, with the reactions
  moved along with it.
- **The leaflets fall more slowly and each in its own way**: 4.4 to 6 s each (was 3.1), starting
  about 0.6 s apart with a little jitter, and each with its own sway width and speed, curl, lean
  and turn (`presentation/desk-pile.js`).

## 2026-11-17 — Slide 1: bottom fade only

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #53) · GitHub Pages: updated from `master`

- **The dark wash from the left is gone on slide 1 (`#top`)**; only the soft fade along the foot
  stays, behind the intros and fine print. The desk blue now shows across the whole slide.
- **Small grey lines brighten in dark mode** (`--ink-2` is `#EEF1F4` on `#top`): the label, the
  two job titles and the fine print, so they hold up on the bare blue.

## 2026-11-17 — Slide 2: leaflets slow down as they land

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **No more rush at the end**: each leaflet picks up a gentle speed over the first 15% of its fall,
  drifts down at that pace, then slows over the last 35% (to about 15% of its speed at touch-down).
  It tips flat over that slower last stretch instead of the last fifth (`presentation/desk-pile.js`).

## 2026-11-17 — Slide 2: leaflets fall straight down over the desk

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Each leaflet now drops from straight above the desk**, a little either side of where it lands,
  instead of coming in from the top right (`presentation/desk-pile.js`). The title stays clear.

## 2026-11-17 — Slide 2: animated reactions above the poster

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The reactions are now Google's animated Noto emoji** (`presentation/media/bg/emoji/`, CC BY 4.0,
  credited on the slide): heart, star-struck, clap, smiling with hearts, 100, party popper,
  sparkling heart, sparkles and thumbs up, in different sizes.
- **They sit on their own layer above the poster** and burst out from behind it one after another,
  springing to their spots with a little overshoot.

## 2026-11-17 — Slide 1: table from above, in the empty desk's blue

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #53) · GitHub Pages: updated from `master`

- **New title slide background (`#top`):** `media/bg/welcome.png` (a table seen from above:
  forget-me-nots, strawberries, a glass on a napkin with the prototype sketched on it), recoloured
  so its pale sky blue becomes the empty desk's blue (63, 160, 209), with the same fine grain.
  Only the background changes; the flowers, glass, napkin and plates keep their colours. Saved as
  `media/bg/welcome-blue.jpg`; it covers the slide, anchored right. The existing wash keeps the
  text readable in dark and light mode. Options compared in `design/brainstorm/welcome-bg/`.
- **Retired:** the napkin-to-screen crossfade (`n2s-*`). Its images stay in `media/bg/`.
- **Credit line** now reads "Background: generated with Midjourney, recoloured."

## 2026-11-17 — Slide 2: the pile has volume

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Each landed sheet now has thickness**: the edges facing the room show as a pale paper band with
  a dark line under it, each sheet sits a little higher (2.2 px), and a thin ink outline matches
  the drawing's own lines.
- **Shadows**: a stronger cast shadow onto the sheet below, and a soft contact shadow on the desk
  under the pile that darkens as the pile grows (`presentation/desk-pile.js`).

## 2026-11-17 — Slide 3 (the outlined designer) hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **`#waiting` is hidden** (it had already been moved to the Appendix): its "Loved it" lines now
  play on slide 2's click. The markup and the outlined designer image stay, so it can come back by
  removing `hidden`.

## 2026-11-17 — Slide 2: posters drift down on arrival; the click brings "Loved it" with the lifted poster

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Slide 2 plays on arrival** (no wait for a click): "50+ posters, infographics and
  illustrations." and the 12 UHN posters drift down onto the desk one after another (option B,
  "drift and curl"). Each is soft paper drawn as a bendable mesh on a canvas: it speeds up as it
  falls, sways side to side facing the room, curls, and tips flat just before it lands on the pile.
- **The click** brings "“Loved it” isn’t the same as “understood it.”" (quote marks hung, "understood
  it." highlighted in a solid olive) and "Nobody was checking whether patients could actually follow
  what we made.", while the Stroke teach-back poster lifts off the pile with reactions around it.
- **The desk drawing is a little smaller, anchored bottom right**, its top and left edges fading
  into the slide's blue, so the text stays clear of the chair; the credit wraps before the chair.
- `presentation/desk-pile.js` rewritten (canvas mesh instead of flat image tilts).

## 2026-11-17 — Clinic question and "Loved it" moved to the Appendix

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **"'Loved it' isn't the same as 'understood it.'"** (`#waiting`, the designer outlined in the waiting
  room) left the main deck and is now the last appendix slide.
- **The old slide 2, "Did my visual actually make a difference?"** over the clinic front-desk clip, is
  restored in the appendix just before it (`#question-clinic`; the main deck's slide 2, `#question`,
  is the new version). The two share the clinic room, so the morph carries the room across between
  them. Its clip plays when the slide is on; the slow push-in toward the desk is not restored (that
  script still belongs to the new slide 2). Its opening quote mark now hangs in the margin, so "Did"
  lines up with "make".
- Both sit under the single Appendix dot. Checked at 1920×1080: both slides, the dot, no errors.

## 2026-11-17 — Slides 2 and 3 rebuilt from the script

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Slide 2 (`#question`) is now the empty desk** (`presentation/media/bg/empty-desk.jpg`,
  Midjourney) in place of the clinic clip and the "Did my visual actually make a difference?"
  quote. It arrives empty. Click 1: "50+ posters, infographics and illustrations." while Sonia's
  12 UHN posters and handouts fall in from the top right and lie flat on the desk top in a growing
  pile. Click 2: "Everyone loved it." as the Stroke teach-back poster lifts off the pile to face the
  room and reactions pop around it. `presentation/desk-pile.js` (new) bends each sheet onto the
  desk's perspective with a CSS matrix3d, driven by the slide's --t, so going back plays it in
  reverse. Images: `presentation/media/bg/uhn/` from `scripts/uhn-posters.py` (new).
- **Slide 3 (`#waiting`)** now says "“Loved it” isn’t the same as “understood it.”" with the
  opening quote marks hung outside the text edge so the letters line up; the click highlights
  "understood it." and adds "Nobody was checking whether patients could actually follow what we
  made."
- **Credit lines on slides 2 and 3 sit at the bottom left** (`.credit.bl`), even where the text is
  on the right.
- Slide 2 and slide 3 no longer share a room, so only the title morphs between them.

## 2026-11-17 — One dot for the whole Appendix

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The slide dots on the right show the Appendix as a single dot** (named "Appendix"), instead of one
  per appendix slide. It lights on the divider and on every slide after it; clicking it goes to the
  divider. The main deck keeps one dot per slide (15 dots in all now).
- Checked at 1920×1080: the dot on "Your turn", the divider, and two appendix slides; no errors.

## 2026-11-17 — Studio: a multi-word fix no longer eats the next space

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Bug fixed:** applying a fix whose new words contain a space ("ensuring" → "making sure") lost
  the space after it: "directly ensuring that" became "directly making surethat". Chrome's
  `insertText` drops the space that follows such a replacement. `applyFixToDoc` now takes that
  space in with the new words (one edit, so Ctrl/⌘+Z still undoes it in one step).
- Checked: the sample sentence now reads "making sure that"; Apply all on the whole TLC guide gives
  "making sure that" twice and no joined words.

## 2026-11-17 — Meet PRISM: real before and after from our own work

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The card on the right is now The Light Collective's guide**, "A Guide to Negotiating Patient
  Digital Rights", instead of the made-up water-pill handout. Two short passages, as written (flags
  marked) and after PRISM's Apply all (fixes underlined): a long sentence split in two, "outcome" →
  "result", "maintain" → "keep". The text is exactly what PRISM produced (Brief: Patients, Manual).
- **Whole-guide numbers from the same run:** reading grade 12.3 → 11.8, issues to fix 120 → 101,
  67 fixes in one click. The slider runs As written → After PRISM. Credit under the card: "Our work:
  The Light Collective and Digital Public, CC BY 4.0, designed by Chloe Ma, GoInvo".
- Deck only (`?deck`); the PRISM site keeps the water-pill card. `intro.js` `?v=20261117i`,
  `intro.css` `?v=20261117e`.
- Found while capturing it, not fixed: one of Apply all's rewrites drops a space ("ensuring that" →
  "making surethat"). That passage isn't on the slide.
- Checked at 1920×1080: both slider positions.

## 2026-11-17 — Meet PRISM: a Jeopardy board of six problems on glass tiles

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Six problems now, on glass tiles** in one frosted panel (the same iOS-glass look as the demo
  slides' menu, no arrows). Added two to the four from the appendix: "Patient material can’t go to
  cloud tools" → "Nothing is uploaded; it all stays in your browser", and "Hard to trust where a rule
  comes from" → "Every check cites its framework and source".
- **Each click flips one tile** (a 0.7 s turn on its horizontal axis, like a Jeopardy board) to PRISM's
  answer on a yellow glass face. After the sixth, the headline turns from "Checking a handout today" to
  "One place, in your browser". All tiles are one height, and text starts at the same left edge on both
  faces.
- The slide (`#intro`) has seven steps (`data-beats="7"`, with a hidden `.pm-beat` so the deck counts
  them); the frame reads the slide's `--t` and sets `li.on` / `.pm-solved`. The right side (the
  water-pill card) is unchanged for now. Deck only (`?deck`); the PRISM site is unchanged.
  `intro.js` `?v=20261117h`, `intro.css` `?v=20261117d`.
- Checked at 1920×1080 (headless Chrome): arrival, three flips, all six.

## 2026-11-17 — New slide 4: Standards exist (post and CDC site shrink into the framework rows)

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **New slide `#standards` after the designer slide**, three steps. Arrives: "Standards already
  exist." over Nati Chen's post and the CDC Clear Communication Index side by side
  (`presentation/img/cdc-cci-site.png`, new). Click: both shrink and tilt into two cards in the
  middle row of the framework background while the other cards fade in, then the rows start
  drifting; the title becomes "Frameworks everywhere, scattered across different documents."
  Click: "What if they were all in one place?"
- `presentation/standards.js` (new) works out where each screenshot starts and the card it lands in;
  `fw-rows.js` now builds every `.fw-bg`, and on slide 4 puts the two screenshot cards in the
  middle row.
- No framework count is said on the slide yet (the script says 26, the deck says 14).

## 2026-11-17 — Meet PRISM: four problems that turn into what PRISM does

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The slide now tells problem → answer → before and after**, using the problems from the appendix
  demos. Click 1: "Checking a handout today" over four problems (scattered tools, each wanting a
  different format; dozens of checklists; poster checks on separate, clunky sites; checkers that
  leave the rewrite to you). Click 2: each line turns, in place, into what PRISM does, under "One
  place, in your browser"; the bullets fill yellow. The water-pill card stays beside them, at As
  written, for the before and after you drag live.
- Built into the deck version of the front door (`?deck`): `intro.js` and `intro.css`
  (`.pm-swap`, `.pm-rows`, `.pm-solved`). The slide (`#intro`) has `data-beats="2"` and a hidden
  `.pm-beat` marker the frame watches. Every row is one line, all in one type treatment.
- `intro.js` `?v=20261117g`, `intro.css` `?v=20261117c`. The PRISM site's front door is unchanged.
- Checked at 1920×1080 (headless Chrome): both clicks, rows on one line each, slider at As written.

## 2026-11-17 — Why AI?: the 14 frameworks scroll behind the line

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **Slide 4 (`#why`) background** is now PRISM's 14 frameworks as browser cards, after Chloe's
  `prism-frameworks-background.png`: the URL bar, the yellow category tag, the serif name, the
  subtitle and the source. The cards sit in seven tilted rows; each row is a carousel and the
  rows pan in alternating directions, one card passing every 9 s. Only the 14 frameworks the deck
  names, so the slide matches "14 frameworks".
- Built in code (`presentation/fw-rows.js` makes the cards; CSS `.fw-*` moves them), so the rows
  loop with no jump, stay sharp on the projector, and pause when the slide is off screen.
- A wash in the slide's own colour sits over the cards, heaviest behind the headline, so the slide
  follows light and dark mode. The Lego figure is off this slide (`lego-bg.js` and its pieces stay
  in the repo, unused); the credit line now reads "Background: PRISM's 14 frameworks".

## 2026-11-17 — All demo slides moved to the Appendix; empty scroll under the score cards fixed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The four demo slides left the main deck** ("Bring it in, start checking", "Pick the right checks",
  "Check a poster", "Fix it your way", the versions with zoom and live panels) and now follow the
  Appendix divider, ahead of the two tile versions. The main deck now goes from Meet PRISM straight
  on. All six appendix slides are numbered the same way, Appendix · 1 to 6 (they read "1 of 4" … and
  "Appendix · A/B"), and sit under the chapter "Appendix".
- **Appendix · 5 (four clip tiles) plays its clips without the zoom camera**, re-recorded plain;
  these clips are used nowhere else.
- **No magnifier anywhere:** the lens was removed from the Studio at your request (another session), so
  the appendix live panel has none either.
- **No more long, empty, scrollable black area under the score cards** in the live Frameworks panel
  (`?demo=frameworks`): positioned parts of the Plain language suggestion list escaped the card's
  scroll box and stretched the column to about 6,800 px. The cards are now their containing block
  and clip their content, so the column ends with its last card (2,701 px).
- Checked at 1920×1080: the appendix slides, and the whole deck back from the end (19 changes, all
  morphs, no errors).

## 2026-11-17 — Meet PRISM slide: wider headline, even gaps, slider waits

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The headline fills three lines** ("Make health handouts, / posters and web / pages easy to
  read.") instead of five: in the deck version (`?deck`, class `intro-deck`) its 13-character limit
  is off and the copy column is wider (1.2 : 1 against the handout card).
- **Even gaps:** the logo above the headline now has 20–32 px below it (was 14 px), and the lede
  below has 16–28 px above it, so logo, headline and lede are spaced alike.
- **The slider no longer steps by itself on the slide.** The deck had its own loop that moved it
  every 1.8 s; now each time the slide opens the slider is set to As written and waits.
- `intro.js` `?v=20261117f`, `intro.css` `?v=20261117a`. Only the `?deck` page changes; the PRISM
  site's front door is as before.
- Checked at 1920×1080 (headless Chrome, 9 s after the slide opened): three-line headline, slider
  still at As written with 11 / 3.

## 2026-11-17 — Deck's front door: no countdown

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **On the "Meet PRISM" slide (`?deck`) the progress bar no longer fills**, and the page no longer
  moves on to the Studio by itself. The countdown text and Pause are hidden there too, since there's
  nothing to pause; Skip to the Studio stays. The PRISM site keeps its 9-second countdown.
  `intro.js` is loaded as `?v=20261117e`.
- Checked: the deck page is still on the front door after 12 s with the bar hidden; the site page
  still shows "Opening the Studio in 9 s".

## 2026-11-17 — Demo clips: zoom-in removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The pre-recorded demo clips no longer zoom in on the cursor.** f1-paste, f2-drop, f3-sample,
  f4-brief, s3-alt and s3-colour were re-encoded from their original full-view frames (same
  recording, same timing and cursor, the whole panel in view the whole time).
- The deck loads them as `?v=20261118u` so browsers fetch the new files. s3-poster was never zoomed.

## 2026-11-17 — Front-door changes apply to the deck only; the PRISM site is back as it was

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The PRISM site's front door is unchanged again:** "For health handouts, posters and web pages"
  over "Make your health handout easy to read.", Check a draft and Plan from an idea, "Your file
  never leaves your computer.", and the slider's fixes applying by themselves during the countdown.
- **The deck's "Meet PRISM" slide keeps today's changes.** Its frame now loads
  `../index.html?intro&deck`, and `?deck` gives one headline ("Make health handouts, posters and web
  pages easy to read."), no buttons, no privacy line, and a slider that waits for the speaker.
  `intro.js` is loaded as `?v=20261117d`.
- Checked both: the site page has the kicker, both buttons and the privacy line; the `?deck` page has
  none of them and the slider stays at As written. No console errors.

## 2026-11-17 — Live demo slides: magnifier removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The round 2× magnifier that followed the mouse on the live Studio panels (every `?demo=` page,
  so slides 2–4) is gone.** The panels show at their normal size; pointing and clicking work as before.

## 2026-11-17 — Front door: the slider no longer moves by itself

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **The water-pill card's slider stays at "As written"** until someone drags it. Before, the three
  fixes applied on their own at 2, 4 and 6 seconds into the countdown. The countdown to the Studio,
  Pause and Skip to the Studio are unchanged. `intro.js` is loaded as `?v=20261117b`.
- Checked: the slider stays at 0 over 8 seconds, no console errors.

## 2026-11-17 — Slides reordered: timeline and review now sit inside the three points

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **New order after the demo:** take-home divider → Intent first → Build fast → **timeline** (`#then`,
  "The updates") → Iterate → **Excel review** (`#review`, "AI drafted it. We reviewed it.") →
  **AI certification** (`#certify`) → Your turn → Appendix.
- The timeline used to come straight after the demo, and the review and certification came before
  the take-home divider. Now the timeline illustrates "Build fast", and the review and
  certification follow "Iterate" ("Keep what works. Cut the rest."). Markup moved only, with no
  changes to the slides themselves.

## 2026-11-17 — Appendix for Q&A: the two tile demo slides, behind a divider

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #57)

- **New divider at the end, after "What's your view on our approach?"** (`#appendix`, chapter
  "Appendix"): just the title "Appendix", so it can hold more than the demo slides later.
- **The two hidden tile versions of the demo now follow it**, shown again: "Bring it in, start
  checking" (`#feat-drop`, four clip tiles) as Appendix · A, and "Pick the right checks"
  (`#feat-frameworks`, the two live panels with the magnifier) as Appendix · B. Their step label was
  "1 of 4" / "2 of 4". The main demo keeps its zoom versions.
- Checked at 1920×1080: the divider and both appendix slides.

## 2026-11-17 — Every slide change is a morph, forward and back

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **One transition everywhere:** every slide change, forward and back, is now the morph (shared parts
  glide, the rest crossfades). Removed the exceptions: the zoom through the "3" on the take-home
  divider (forward), a click-to-start slide entered going forward (plain fade before), and two slides
  that share a title (plain fade before). The divider still shows Intent first through its cut-out at
  rest. Reduced motion and browsers without View Transitions keep the plain fade.
- Checked in headless Chrome at 1920×1080: all 17 slides, 16 changes forward and 16 back, every one a
  morph, no errors.

## 2026-11-17 — Demo slides: one text column width

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **The text column is the same width on every demo slide.** On the two tile slides (Bring it in,
  Check a poster) it ran 75 px wider than on the live-panel slides; now all six end at the same
  edge (48–609 px at 1920×1080, the same share at 1440×900), and the tiles start 48 px after it,
  like the live panels (they were right-aligned, 104 px away).

## 2026-11-17 — Demo slide titles go back to the whole view

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Clicking a demo slide's title returns the right side to where it started:** on a section-zoom
  slide the camera flies back out to the whole workspace; on the tile and live-Studio slides every
  cover closes. The menu's yellow pill clears. Hovering the title underlines it in yellow; it also
  works from the keyboard (Tab to it, Enter or Space).
- Checked at 1920×1080: zoom slide (Brief → whole workspace), Check a poster (colour tile closed),
  Fix it your way (History panel closed).

## 2026-11-17 — "Pick the right checks": click the panel to use the Studio live

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Clicking the Studio panel swaps the stills for the real Studio, in the same place**, so you can
  click, scroll, tick items and apply fixes. It opens on the same view as the stills: the TLC guide,
  Brief set to Patients + Manual, the document at 40% and the score cards in one wide column, light
  mode. Clicking while zoomed in pulls back to the whole view first. Picking a menu line, an arrow
  key (also from inside the Studio) or clicking the title goes back to the stills and zooms as
  before. "Click to use it live" shows in the corner while pointing at the panel on the whole view.
- **Studio: new demo mode** `/?studio&demo=checks` for this, which never reads or saves stored work.
  It loads in the background once the slide is shown, and is kept light when the deck turns dark.
- Checked at 1920×1080: the still and the live Studio side by side match; a click goes live; picking
  "Suggests fixes" leaves it and zooms to stop 4.

## 2026-11-17 — "Pick the right checks": History is opened from its button

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Picking "Saves every change" now opens History the way you would**: the camera moves to the
  History button on the normal workspace (×1.8, 0.65 s), a yellow click ring plays on the button,
  then the open History panel fades in and the camera moves onto it (0.75 s). A stop can do this
  with `data-press` (the still, a camera stop for the button, and the button's box).
- Checked at 1920×1080 by capturing frames at 0.3, 0.7, 0.9, 1.3 and 2.1 s after picking it from
  the CCI stop.

## 2026-11-17 — "Pick the right checks": while zoomed in, hovering a line points to its target

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Zoomed in, pointing at another menu line tells you where the camera will go:**
  - the target is in view on the same still: it gets the yellow frame (e.g. items with notes while
    on the CCI checklist);
  - the target is off-screen: a dark pill with a yellow ring and glow sits on the panel edge facing
    it, with an arrow pointing that way and the target's name (e.g. "↖ History button");
  - the target is at the same spot on another still: the pill sits at the bottom and says
    "⇄ Switches to Plain language fix" (or "Frameworks list").
  Moving away clears it; clicking flies there as before and clears it.
- Target names are set on the slide (`data-hl-names`).
- Checked at 1920×1080, zoomed on the CCI checklist: hovering lines 1, 3, 4 and 5.

## 2026-11-17 — "Pick the right checks": hovering "Saves every change" frames the History button

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Line 5's hover frames the History button** in the Material header on the normal workspace (the
  button you'd press), instead of the open History panel. Clicking still zooms to the panel.
  A frame can name the still it sits on (a sixth value in `data-hl`).
- Checked at 1920×1080: the ring sits on the button's own edges.

## 2026-11-17 — "Pick the right checks": no frame while zoomed in

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **The hover frame only shows on the whole workspace.** Zooming in clears it, and pointing at other
  lines while zoomed in adds none; once the camera pulls back out, hovering frames sections again.
- Checked: hover on the whole view shows the frame; after a click it's gone (zoomed to stop 3);
  hovering another line while zoomed shows none; after pulling back, hover frames again; no console
  errors.

## 2026-11-17 — "Pick the right checks": hovering a menu line frames its section

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Pointing at a menu line (or tabbing to it) frames the section it zooms to**, before any click:
  the still for that stop shows, everything else dims, and a yellow ring sits on the section's own
  edges: 1 the Frameworks bar and its open list; 2 the CCI card; 3 CCI items 3–5 with their notes;
  4 the Plain language flag with its rewrite and Apply; 5 the History panel. Moving away clears it.
  Clicking zooms in as before, and the frame stays on the section while it's pointed at.
- **Framed exactly:** each box is measured from the Studio's layout while the stills are taken
  (position and corner radius), set in Studio pixels on the slide (`data-hl`), and drawn inside the
  section's edges, so it stays flush at any zoom. Items 3–5 have no card of their own, so their
  frame has 8 px of room and lines up with the Plain language flag's edge.
- The four stills were retaken with the boxes (`?v=20261117c`).
- Checked at 1920×1080: each of the five lines hovered, and the corners of each frame at 3×.

## 2026-11-17 — "Pick the right checks" zoom: one wide results column

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **The stills now show the score cards in one wide column** (716 px, was two of 340), so each
  checklist item reads on one or two lines with its Met / Not met / N/A on the same row. A fourth
  still, `ws2-sheets.webp`, has the column scrolled to CCI for stops 2 and 3.
- **Stops:** 1 the Frameworks list (×1.45); 2 CCI's header and first items (×1.64); 3 the items
  with notes (×1.75, lower down); 4 the Plain language flag with its rewrite and Apply (×1.75);
  5 History (×2.1).

## 2026-11-17 — Live "Pick the right checks" slide hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **`#feat-frameworks` (the live Studio frame) is hidden**, so the section-zoom version
  (`#feat-frameworks-zoom`) is the deck's "2 of 4". The slide stays in the file; remove `hidden`
  to bring it back. Live frames on hidden slides no longer load in the background.
- The demo run is now: Bring it in (zoom) → Pick the right checks (zoom) → Check a poster → Fix it
  your way. Checked: no console errors.

## 2026-11-17 — New slide: "Pick the right checks" as a section zoom

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **New slide after "Pick the right checks"** (`#feat-frameworks-zoom`, same title, problem, credit
  and five menu lines), built like slide 1's section zoom so it reads from the back of the room:
  sharp stills of the Studio (1215×984 at 2.5×, the TLC guide with Patients + Manual) instead of
  the live frame. Each menu line, or each click, glides the camera to its part of the Studio:
  1 the Frameworks list open with the four picks ticked; 2 the score cards (CCI's items); 3 the items
  with notes ("No bold text found, so not met", "PRISM found 14 actions. Your call."); 4 a Plain
  language flag with its rewrite and Apply; 5 History with Undo and the versions. The last click
  pulls back to the whole workspace.
- **Stills:** `media/zoom/ws2-cards.webp`, `ws2-list.webp` (shown at stop 1) and `ws2-history.webp`
  (stop 5), crossfading as the camera moves.
- **The section zoom takes its stops and stills per slide** (`data-stops` on `.fz`, `data-on` on an
  image); slide 1 keeps its own stops.
- The live slide (`#feat-frameworks`) is unchanged and still in the deck, before this one.
- Checked at 1920×1080: the whole workspace and all five stops, each with its menu line lit, and
  slide 1's Brief stop.

## 2026-11-17 — Slide 2: "Sonia" byline removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **The "Sonia" line under slide 2's quote is removed**; the quote and the handoff line stay.

## 2026-11-17 — Section zoom flies straight to the chosen section

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Picking a menu line zooms straight to its section.** Before, the camera followed the slide's
  step timeline, so picking "Set the Brief" first panned through paste or drop and the examples on
  the way. Now each step names a camera stop and the camera flies from wherever it is directly to
  that stop (0.75 s, eased), for menu clicks and for the arrow keys alike. Arriving on the slide
  starts on the whole workspace without a move.
- The deck now marks each slide with the step it is going to (`data-beat`), so a slide can animate
  on its own instead of following the timeline.
- Checked at 1920×1080 by sampling the camera every 80 ms: whole workspace → Brief, Brief → paste or
  drop, and paste or drop → examples each go directly.

## 2026-11-17 — Front door: one headline, no buttons

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **The kicker and headline are one line now:** "Make health handouts, posters and web pages easy
  to read." (was "For health handouts, posters and web pages" over "Make your health handout easy to
  read."). The lede under it is unchanged.
- **Check a draft and Plan from an idea are gone.** The page still moves on to the Studio by itself,
  and Skip to the Studio stays in the top bar. The deck's "Meet PRISM" slide shows the same page; its
  frame title says the new headline. `intro.js` is loaded as `?v=20261117a`.
- Checked at 1920×1080: the headline wraps to five lines at 60 px, no buttons, no console errors.

## 2026-11-17 — Section-zoom slide: three menu lines, no captions on the panel

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **"Paste text from anywhere" and "Drop in a Word file, PDF, text or image" are one menu line:
  "Paste in or drop a file".** The slide's menu is now three lines, one per zoom step: Paste in or
  drop a file, Start from an example to learn how it works, Set the Brief, and the checks begin.
- **No captions on the zoomed panel:** the menu line on the left (the yellow pill) says what is
  shown, so the dark caption bar at the bottom is gone and the zoom uses the whole panel.
- **Camera recentred on each section:** Open a file, Type or paste text and the drop line at 2.6×;
  the sample handout and poster at 2.7×; the open Brief with its targets at 2.05×.
- Checked at 1920×1080: each step, and a menu click on the second line.

## 2026-11-17 — "What PRISM does" menus are a glass panel

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **The demo menus are now one frosted glass panel** (option C, after a mockup of three glass
  styles): a translucent panel with a lit top edge, a soft shadow and a faint yellow glow. Each line
  is a button with a yellow arrow, and hover tints it. The line for what is showing on the right is
  a yellow glass pill. This replaces the separate yellow buttons from earlier today.
- **Light mode:** the panel turns milky white with dark text and dark-gold arrows.
- **Text alignment:** the text still starts on the column's left edge, with the panel reaching into
  the margin.
- **Five-line menu (Pick the right checks):** set at 26 px with tighter spacing, so its credit fits
  (the lines end at 914 px, the credit runs 965–1032 at 1920×1080).
- Checked at 1920×1080: slide 1 and Pick the right checks in dark mode, Fix it your way in light
  mode, each with a line open.

## 2026-11-17 — "What PRISM does" menus are buttons

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **On the four demo slides, each line of "What PRISM does" is a raised yellow button** with an arrow
  (option B), in place of the bulleted yellow box. The button for what is showing on the right is
  pressed in (pale yellow with a dark ring); hover lightens a button. The text starts on the column's
  left edge, the buttons reach into the margin as the box did. Other `.ft-list` boxes ("What got
  better") are unchanged.
- Pick the right checks has five buttons, so a five-item menu is spaced a little tighter; its credit
  still fits above the bottom edge (buttons end at 949 px, credit 965–1032 at 1920×1080).
- Checked at 1920×1080: all four demo slides with a button pressed.

## 2026-11-17 — Four-tile "Bring it in" slide hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **`#feat-drop` (the four clip tiles) is hidden**, so the section-zoom version (`#feat-drop-zoom`)
  is the deck's "1 of 4". The hidden slide stays in the file; remove `hidden` to bring it back.

## 2026-11-17 — New slide: section zoom on the workspace; "What PRISM does" is a menu

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **New slide after "Bring it in, start checking"** (`#feat-drop-zoom`, the same text on the left).
  The right side is the empty Studio workspace (a still at 2.5×, `media/zoom/ws-empty.webp`). It
  arrives on the whole workspace; each click glides the camera (0.7 s) into one section with a big
  caption over the bottom: 1 Paste it in, or drop a file; 2 Start from an example; 3 Set the Brief
  (a second still with the Brief open on Patients + Handout, so its targets show,
  `media/zoom/ws-brief.webp`). The next click pulls back out to the workspace. Back runs it in
  reverse. Captions are 2.5u / 1.67u (48 / 32 px at 1920×1080), readable from the back rows.
- **"What PRISM does" is a clickable menu on all five demo slides.** Each line opens what it
  describes on the right: a clip tile (slides 1 and 3), a live Studio panel (slides 2 and 4) or a
  zoom step (the new slide). The line for what's showing is marked and the others dim, including
  when a tile or panel is opened by hovering it. Keyboard: Tab to a line, Enter or Space.
- The deck has a small hook for this, `window.deckBeat(i)`, which moves the current slide to one
  of its own click steps.
- Checked at 1920×1080: arrival, each zoom step and the pull-back; menu clicks on the new slide,
  slide 3 (colour tile) and slide 4 (History). All inline scripts parse.

## 2026-11-17 — Demo slides: magnifier on the live Studio, zoomed clips, no hairline

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **Magnifier lens on the live Studio panels** (Pick the right checks, Fix it your way). In any
  `?demo=` page of the Studio, a round 2× lens with a yellow ring follows the mouse so the room can
  read what the presenter points at. It shows a copy of the live panels rebuilt from them several
  times a second (scroll positions, typed text, the poster canvas and the yellow word marks
  included), so it always matches the page under it, and it never takes clicks. Built in
  `index.html` (demo mode only); the normal Studio is unchanged.
- **Pre-recorded clips zoom in on the action:** `f1-paste`, `f2-drop`, `f3-sample`, `f4-brief`,
  `s3-alt` and `s3-colour` were re-recorded with a zoom camera: the full view while the cursor is
  parked, then an ease in to 1.5× that follows the cursor (sideways pan damped, since text runs
  across the panel), settling to 1.3× for the final hold. Same actions and lengths as before;
  `s3-poster` still runs in step with the colour clip. Versions `?v=20261117z`.
- **No white hairline between the two live panels** on Pick the right checks: closed slots are
  filled with the slide's colour behind their covers, and the 24 px gap between the two slots is
  masked (the Studio's panel edge landed half a pixel into it).
- Checked at 1920×1080: the lens on both live slides and on the poster demo page, a zoomed tile on
  slides 1 and 3, the gap on slide 2.

## 2026-11-17 — Slide 3: the poster down one column, two clip tiles beside it

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #49) · GitHub Pages: updated from `master`

- **Slide 3 (`#feat-poster`) is the poster in a tall column plus two tiles**: "Alt text, checked"
  (`s3-alt`) and "Colour contrast and colour blindness" (new `s3-colour`, 29 s: white on the poster
  blue passes at 5.13:1, white on the light-blue band fails at 2.03:1, Preview darkens the band to
  #217f95, then Deutan, Protan, Tritan, Greyscale and back to Normal). The Section 508 tile and its
  bullet are gone.
- **The poster plays in step with the colour tile** (`s3-poster`, made from full-size snapshots of
  the Studio's artwork at each change): it shows the darkened band during the fix and each
  colour-blind view as the clip reaches it, and goes back to its first frame when the tile is
  covered. Any tile can drive another video with `data-sync`.
- The colour clip is the Colour and contrast card alone, recorded at 760×640 (×2.5), so its text
  reads at tile size.
- Checked at 1920×1080: the layout; hovering the colour tile plays both videos together (12.98 s /
  12.97 s); moving to the Alt text tile resets the poster; no console errors.

## 2026-11-17 — Studio: a contrast fix shows on the poster, and downloads

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #49) · GitHub Pages: updated from `master`

- **Preview paints the fix onto the artwork**: every pixel close to the colour being changed (the
  picked background or text colour) moves to the suggested shade, with soft edges; Show original
  puts it back. Other areas in the same colour change too, as a palette swap in the design file would.
  The swap is tight (within 30 RGB steps), so neighbouring palette colours stay put. PDFs keep their
  own render.
- **Download fixed copy** appears under the preview while a fix is showing: the artwork at full size
  with the swap, as `<file>-fixed-<hex>.png`.
- Checked on the UHN poster: the light-blue band and circles (#5ac2da, 12% of the poster) swap to
  #217f95; #8ecddf is a paler blue on the circles (4% of the poster).

## 2026-11-17 — Slide 3: back to the four recorded clips

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #49) · GitHub Pages: updated from `master`

- **Slide 3 (`#feat-poster`) plays its clips again** instead of the live Studio: four tiles like slide
  1's, "Section 508 checks", "Alt text, checked", "Colour contrast", "Colour blindness" (clips
  `s3-508`, `s3-alt`, `s3-contrast`, `s3-cvd`, `?v=20261117a`). The live frame (`?demo=poster`) is no
  longer on the slide; the demo mode stays in the Studio.

## 2026-11-17 — Demo slides mirrored: text panel on the left

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #51) · GitHub Pages: updated from `master`

- **All four demo slides** (`#feat-drop`, `#feat-frameworks`, `#feat-poster`, `#feat-edit`) now put
  the text column (step, title, The problem, What PRISM does, credit) on the left and the clips or
  the live Studio on the right. One CSS block mirrors the positions (wider than 720 px only; phones
  keep the stacked layout). The four-tile slide keeps its tiles right-aligned, with the same gap to
  the text as before.
- Checked at 1920×1080: all four slides, nothing overlapping.

## 2026-11-17 — Studio: Fix and Review line up with the word Apply

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The red Fix (and amber Review) on each Plain language flag now end where the words "Apply" and
  "Apply all" end**, 13 px in from the buttons' edge (they ended on the button edge).

## 2026-11-17 — Feature slides count to 4

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The step labels now read "1 of 4" to "4 of 4"** (they said "of 8"); the demo has four feature
  slides: Bring it in, Pick the right checks, Check a poster, Fix it your way.

## 2026-11-17 — Studio: the New box ends at the Apply button

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Plain language's New box now ends on the same right edge as its Apply button** (it reached 6 px
  past it). Its left side still hangs into the padding so its words line up with Now.

## 2026-11-17 — Slide 4: the live draft, its suggestions and History; slide 3's problem line

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 4 (`#feat-edit`) is now the real Studio, live**, laid out like slide 3: the Take Action
  draft fills the left column (edit it in place); on the right, the Plain language card (apply a
  suggestion, Apply all, or write your own in New) and History (every change as a version; Undo,
  Revert). Each right tile is covered by its title until you point at it, with the same slide-up
  cover. It loads with the deck, like slides 2 and 3.
- **Studio: new demo mode** (`/?demo=edit`): the Take Action section, Brief Patients + Handout, only
  those three panels on a transparent page; History stays open (clicks elsewhere, Escape and its ✕
  don't close it). Never reads or saves stored work.
- **Slide 3's problem now reads:** "Contrast checkers, colour-blind simulators and alt text guides are
  scattered across separate, clunky sites. No one place does it all."
- The four slide 4 clips (`s4-*`) are no longer used; their files stay in the folder.
- Checked at 1920×1080: slide 4 with both tiles covered, then each opened; in the Studio, applying a
  suggestion added a version and History stayed open after a click elsewhere.

## 2026-11-17 — One side margin on every slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Every slide now keeps 2.5u (48 px at 1920×1080) on the left and the right**, the margin the
  feature slides use. Before, most slides had 5u on the left and 5u + 44 px on the right (96 / 140 px),
  so wide content such as the homepage slider stopped well short of the right edge. The slide dots
  sit in the right margin.
- **Feature slides: the right column runs to that right margin** (it had a fixed width, so on screens
  wider than 16:9 the yellow box stopped short).
- "Waiting" and the hidden "What we brought" keep their own left offset; their right margin is 2.5u too.
- Checked at 1920×1080 by measuring each slide's content: 48 px each side on every slide except the
  intro (full-bleed front door) and "Waiting" (text set to the right on purpose).

## 2026-11-17 — Homepage slider: three versions, "What got better" card instead of the build stats

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The stats are gone** (131 commits, 23 sittings, 23M tokens, 0 developers). Their place shows
  "What got better" for each version, as the same yellow card the feature slides use for "What
  PRISM does" (`ft-kick`, `ft-does`, `ft-list`). Every card is as tall as the tallest one, so its
  bottom edge meets the screen's.
  - 0 h: Frameworks up top · One upload box · Scores as cards
  - 10 h: All on one page · Drop Word or PDF · Steps show you how · Simpler panels (1 h merged in)
  - 18 h: New PRISM logo · Yellow brand colour · One button style · One type system
- **1 h (Aug 17) removed.** Three versions remain (0 h, 10 h, 18 h); the hidden title reads "Three
  homepages in 18 hours."
- **One text edge:** as on the feature slides, the prompt, credit, label and points all start at the
  card text's left edge, and the yellow card's padding hangs out to the left.
- **Credit lines drop the name:** "10 h · Oct 16" instead of "Chloe · 10 h · Oct 16".
- **Smaller gap to the screen:** the left column is 18u wide (was 17u), so the gap before the screen is
  1.5u (24 px at 1600x900, was 40 px). The screen keeps its size.
  The column also takes any spare width, so the gap stays 1.5u in taller windows (16:10, 5:4),
  where the screen is limited by height. Before, the spare width became a wide gap there.
- **The tile feature slides ("Bring it in" and "Fix it your way") get the same tight gap.** Each tile
  is now as large as fits both ways (1040:880), and the text column starts 1.5u after the tiles
  instead of at a fixed 68.3u. At 1600x900 the gap was 88 px; at 16:10 the tiles nearly touched
  the text. The live-panel slides (Frameworks, Check a poster) are unchanged.
- **Points match the screens:** each list names only what its screenshot shows. 18 h is about
  branding and the design system; its prompt is now "I like logo 3, implement while use the yellow
  as theme color, adjust color palette to include it. disregard the font, keep current" (Oct 18).

## 2026-11-17 — Slides: previous / next arrows with a slide count

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **A small pill at the bottom centre of every slide:** ‹ previous, "4 / 17", next ›. The arrows turn
  a whole slide each time, skipping a slide's click-through steps (the keys still step through them);
  they grey out on the first and last slide.
- **It fades out 2.5 s after the mouse stops**, so it isn't on the projector while presenting; moving
  the mouse brings it back. It's hidden in edit mode.
- **On slides whose credit line runs under it** (title, question, certification, closing), the pill
  sits just above the credit instead of covering it.

## 2026-11-17 — Slides: "Pick the right checks" says what PRISM does, in plain words

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New points on the Frameworks feature slide (`#feat-frameworks`, 2 of 8):** "Picks the frameworks
  that fit your readers", "Shows what every framework asks for, in one place", "Tells you which items
  need your judgement, and why", "Suggests fixes you can apply in one click", "Saves every change,
  so you can go back" (was four points on sorting, filtering and result cards).
- **Balanced line breaks** in every feature slide's list (`text-wrap: balance`), so no point ends
  with one word alone on its second line. (Since changed to `pretty`; see "list rows fill the yellow
  box".)

## 2026-11-17 — Slide 3: poster down the left; colour-blind picker in one row

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 3's live view is now three panels**: the poster view fills the left column (it opens at
  52%, was 23%); on the right, Alt text (top) and one tile for Colour contrast and colour blindness
  (bottom), each covered by its title until you point at it. The colour-blind buttons stay in the
  colour card (`?demo=poster` no longer splits them out).
- **Studio: the colour-blind picker is one row of five equal buttons**: Normal · Deutan · Protan ·
  Tritan · Greyscale (was two columns with "Greyscale / mono print" alone on a third row). The full
  names are the tooltips and what screen readers say ("Deuteranopia: green-blind, the most common",
  "Protanopia: red-blind", "Tritanopia: blue-blind, rare", "Greyscale: mono print, or no colour
  vision").
- Checked at 1920×1080: slide 3 with both tiles covered, and with the colour tile open.

## 2026-11-17 — Live slides load ahead: no black screen

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The live Studio frames on slides 2 and 3 load when the deck opens** (one after the other), so
  arriving on either slide shows the panels at once instead of a dark screen for a few seconds.
  After a slide is left, its frame reloads in the background, so it is fresh (nothing typed or
  picked carries over) and ready for the next visit.
- **`?demo=poster` shows its panels as soon as the poster is open** (it waited a fixed 3.5 s).
- Checked at 1920×1080: from slide 2 to slide 3, the poster is on screen 0.3 s after arriving.

## 2026-11-17 — Slide 3: the live poster, with its three cards

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 3 (`#feat-poster`) is now the real Studio, live**, in a 2×2 grid like slide 2's panels:
  the poster view top left, always open; the Alt text, Colour contrast and Colour blindness cards in
  the other three, each covered by its title until you point at it (one open at a time; leaving the
  slide covers them again). You can type alt text, pick colour pairs and preview a fix, and switch
  colour-blind views; the colour-blind view shows on the poster. The frame loads fresh each time the
  slide opens.
- **Studio: new demo mode** (`/?demo=poster`): opens the UHN poster with the Brief set to Patients +
  Poster and shows only those four panels on a transparent page, always light; the colour-blind
  buttons move into a card of their own. Like `?demo=frameworks`, it never reads or saves stored work.
- The four slide 3 clips (`s3-*`) are no longer used; their files stay in the folder.
- Checked at 1920×1080: the poster shows on arrival, pointing at Colour blindness opens it, and
  clicking Deuteranopia changes the poster.

## 2026-11-17 — Feature slides: list rows fill the yellow box

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The What PRISM does lists fill each row before wrapping** (`text-wrap: pretty`, was `balance`,
  which split each item into two short, even lines). On slide 3: "Runs the Section 508 / WCAG
  checks", "Tests alt text against WCAG 1.1.1 and your reading level", "Checks colour pairs, and
  suggests a fix", "Shows it as colour-blind readers see it". Applies to every feature slide.

## 2026-11-17 — Studio: alt text checks in the checklist format

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The Alt text card's checks are now checklist rows like CCI and PEMAT**, under a section header
  "WCAG 1.1.1 Non-text Content · 4 items": 1 The image has alt text. 2 The alt text says what the
  image tells the reader. 3 The alt text is 150 characters or fewer. 4 The alt text reads at the
  Brief's grade or lower. Each has Met / Not met / N/A, which PRISM marks as you type, and a one-line
  note (Checked by PRISM, the count, the grade, or what to fix). A person can change any mark; a
  changed mark holds until the next image opens.
- **The card's header has a pill** like the other cards: "1 not met", "2 to rate" or "All met".
- **Less text:** the help line is "Say what the image tells the reader."; the separate character
  count under the box is gone (item 3 shows it).
- **Edges:** the typed alt text starts on the card's text edge (the box hangs into the padding), with
  the title, help line, section header and item numbers; the N/A buttons end under "4 items", also
  when the buttons drop under the item in a narrow card.
- Slide 3's alt text clip (`s3-alt`) is re-recorded with the new rows.
- Checked at 1440×900: marks on "Image of a poster" (1 not met), N/A on item 2 (All met), a good
  rewrite (All met); no console errors.

## 2026-11-17 — Studio: alt text download and copy move to Export

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The Alt text card no longer has "Download image with alt text", "Copy" or the note under them**
  ("Adobe apps and many asset libraries read this…"). It keeps the text box and its checks.
- **Export in the Material bar now shows for images and PDFs too**, with "Download image with alt
  text" and "Copy alt text" (a document still gets Copy text, Download for Word and plain text).
  Without alt text it says to write it first; a file type that can't carry alt text says why.

## 2026-11-17 — Studio: one right edge for chevrons and Deselect all; CCI summary removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Every score card's right edge lines up**: the header chevron's arrow (it stopped 4 px short) and
  the borderless "Deselect all" (13 px short, from its button padding) now end where the card's
  numbers, pills' rows, "0 of 59 rated" and the N/A boxes end (1408 px at 1440 wide). No sideways
  scroll.
- **The CCI card no longer shows its summary** ("Can't reach 90 yet · best possible …", the met / not
  met counts and the advice under them); the score pill in the header stays. PEMAT's summary
  ("14 items left to rate…") is removed the same way.

## 2026-11-17 — Guide credit names its designer

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The Light Collective guide's credit now ends "designed by Chloe Ma, GoInvo"** on every slide
  that uses it (slides 1, 2 and 4, and the hidden older demo slide). It wraps to three lines in the
  right column at 1920×1080.
- **The guide's title links to the PDF** on lightcollective.org
  (`…/2024/12/Collective-Digital-Rights-For-Patients_v2.0.pdf`, checked: it loads).

## 2026-11-17 — Demo slides 3 and 4; Studio: Section 508 card, alt text checked against WCAG 1.1.1

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New slide `#feat-poster`, "3 of 8: Check a poster"**, after slide 2, in slide 1's layout: four
  tiles that play when pointed at or clicked (Section 508 check, Alt text checked, Colour contrast,
  Colour blindness), and the right column: The problem ("Posters and images get their accessibility
  check at the end, when changes cost the most.") and What PRISM does. Credit: the UHN poster, Sonia
  Seto.
- **New slide `#feat-edit`, "4 of 8: Fix it your way"**: Edit in the text ("access" retyped as "get
  to"), Apply a suggestion (then Apply all), Write your own (a long sentence with no safe rewrite,
  rewritten in New and applied), Go back in History (Undo last change, then Revert). Credit: the
  Light Collective guide.
- **Clips** (`presentation/media/loops/s3-*`, `s4-*`: WebM with alpha, MP4 fallback, PNG first frame),
  one real Studio card or panel each at 520×440, recorded like slide 1's; 6–12 s.
- **Studio: the Accessibility card is now "Section 508 / WCAG 2.2 AA"** (its tip says Section 508
  uses the WCAG success criteria). Opening an image or PDF turns it on, even in a workspace that had
  it off.
- **Studio: alt text is checked against WCAG 1.1.1 Non-text Content** (the rule Section 508 points
  to) and the Brief: under the text box, four rows: There is alt text · Says what it tells the reader
  (not "image of…", not a file name) · Short enough (150 characters) · Easy to hear (its reading grade
  against the Brief's goal).
- **Studio fix:** the rule that stops a long sentence being split before "what / which / that…" held
  a stray control character where `\b` belonged, so it never matched. It now reads `\b`.
- Checked at 1920×1080: both slides, a tile on each plays when pointed at and stops on its last
  frame; the Studio's inline scripts all parse.

## 2026-11-16 — Studio: every score card's text ends on one right edge

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **One right edge across all score cards.** A card that scrolls (Plain language) used to lose 10 px
  to its scrollbar, so Apply all, Fix and Apply ended 10 px short of Readability's numbers. The
  scrollbar now sits inside the right padding on every card (`--msbw`, measured on load), so the
  text in Plain language, Readability, CCI, PEMAT and the framework list all ends 16 px from the
  card's edge (1003 px at 1040 wide).
- **The New box spans the full row**: its text ends on that edge too, with the box padded outward.

## 2026-11-16 — Studio: Apply has its own hover

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **Apply no longer looks like the row it sits on.** On a lit flag it keeps a white face; hovering
  Apply itself gives it the selected tint with a blue outline and blue text.

## 2026-11-16 — Studio: whole flag lights on hover; New is a white text box

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **Hovering anywhere on a Plain language flag** (its title, Now, New or Based on) now lights the
  whole flag; before, only the title row did.
- **New reads as a text box**: white, with a thin outline, since it's the line you can edit. It's
  padded outward, so its words stay on the same edge as Now.

## 2026-11-16 — Studio: more automatic checks on CCI and PEMAT; suggestion box without fill

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **New signals read from the words** (`textSignals`): actions (sentences that start with a verb,
  or "you should / make sure…"), numbered steps, a summary ("Summary", "Key points", "In short"…),
  named sources ("according to", CDC, WHO, studies, citations), calculations ("calculate",
  "multiply", 3 + 4; not "/", so 120/80 isn't a sum), probabilities (%, "1 in 10", odds) and risk
  words (risk, harm, side effects…), plus grade on target with no jargon.
- **Hints, not verdicts**: CCI 5, 10, 11, 12, 17 and PEMAT 3, 7, 11, 20, 22 now get a note such as
  "PRISM found 14 actions. Your call." or "No summary found. Your call.", and the matching answer
  is pre-marked (dashed) until a person confirms it. Nothing is locked by a hint.
- **Decided automatically**: CCI 6 (active voice, the same check as PEMAT 5) is "Checked by PRISM";
  CCI 20 is N/A without probabilities; PEMAT 24 is N/A when there's nothing to calculate; CCI
  Part D (18–20) starts N/A when there are no risk words (a Met or Not met overrides it, as Part C).
- **The Now / New suggestion has no white fill** (and no outline); its text stays on the card's
  left edge and Apply on its right edge.
- Checked on the TLC guide (14 actions, numbered steps, named sources, no summary, no maths) and
  the sample handout (19 actions, no risk words so Part D is N/A, 120/80 not counted as maths).

## 2026-11-16 — Studio: no note on N/A items

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **N/A items no longer carry a reason line** ("No numbers in the material", "You marked this N/A");
  the greyed, selected N/A button is enough. They still fold into the "don't apply" row.

## 2026-11-16 — Studio: Plain language card on one left and right edge; counts row removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **Right edges line up**: Apply all, each card's Fix and each suggestion's Apply now end on the same
  right edge (Fix and Apply were 16 and 24 px short). The cards were capped by a blanket
  `max-width:100%` on everything in a score card; the issue rows and suggestion boxes now opt out.
  Left edges stay lined up (Long sentence, Now, New, Based on).
- **The "to fix / to review / sentences fine" counts are hidden** on the Plain language card; the
  card opens on "N suggested changes · Apply all".

## 2026-11-16 — Studio: N/A on every row; sticky framework header; no box around suggestions

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **Every CCI and PEMAT item has the same three answers, Met / Not met / N/A.** The part-level
  "Doesn't apply" button on CCI Parts B–D is gone; a part that doesn't apply is marked item by item,
  and N/A items fold into the "don't apply" row. Part C still starts N/A when there are no numbers,
  but those items are no longer locked: a Met or Not met overrides it.
- **An open framework's header row sticks** to the top of its card while its items scroll (the
  chevron, the name and "0 of 59 rated" stay in view).
- **The Now / New suggestion box has no outline** (it was a dashed box); its text still starts on
  the card's left edge.

## 2026-11-16 — Studio: suggestion text on the card's edge; quiet Met all / Deselect all

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **Now / New line up with the rest of the Plain language card.** The dashed suggestion box hangs out
  by its padding and border, so "Now", "New" and "Based on" start on the same edge as "Long
  sentence", the counts and "suggested changes" (they were 13 px further in).
- **Met all / Deselect all have no outline**: plain text buttons, with a light fill on hover.

## 2026-11-16 — Studio: plain notes, N/A items folded, Met all / Deselect all; drag to scroll

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **No more status pills on checklist items** (CCI, PEMAT and the text-checked frameworks). The pressed
  Met / Not met / N/A button already shows the value; a plain grey note under the sentence says why:
  "Checked by PRISM" (was "Auto ✓/✗"), "No bold text found, so not met", and "PRISM found headings.
  Your call." (was "Detected, confirm it": PRISM spotted a sign of the item, but it needs a person).
  Score-sheet items read "Set by the score sheet" and "This needs the layout".
- **Items that don't apply fold away**: in each section they move to a closed "3 items don't apply"
  row at the end, each with its reason under the sentence ("No numbers in the material", "You marked
  this N/A") and a selected, locked N/A button (no separate N/A pill). Marking N/A moves an item in;
  clicking N/A again moves it back. The row stays open across redraws once opened. Only the sentence
  is struck through, not the note.
- **Met all / Deselect all** on every section: PEMAT Understandability and Actionability, CCI Parts
  A–D (hidden while a part is marked "Doesn't apply"), and each section of a self-rated framework such
  as UPL (Met all picks the scale's best answer). Items PRISM scores itself are left alone.
- **Click and drag to scroll** (`drag-scroll.js`, in the Studio and the Compass): with a mouse, press
  anywhere on a panel, including cards and buttons, and drag to scroll it. It doesn't start in the
  document text or form fields (dragging there still selects), on links or on resize grips. A drag of
  5 px or more doesn't count as a click.
- **Deck demo slides**: drag left across the clip row for the next clip, right for the one before
  (60 px or more, mostly sideways).
- Checked: notes and folded rows on the TLC guide (Patients + Manual), Met all / Deselect all on
  PEMAT Understandability (8 → 18 → 8 pressed), a mouse drag scrolling the Plain language card, a
  drag on the poster demo slide moving clip 5 → 6, every inline script parses, no console errors.

## 2026-11-16 — Slides: hide the two old strip demo slides

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- The old demo slides `#features` (the four-strip slide "1 · Drop it in … 4 · Plain language") and
  `#features-2` (the poster demo, "5 · New example" onward) are now `hidden`, so the deck skips
  them. The new one-feature slides take their place. Both are still in the file and come back by
  removing `hidden`.

## 2026-11-16 — Studio: one chevron everywhere; score sheets on one left edge

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **One chevron style** across the Studio and the Compass: the thin stroke chevron from the Frameworks
  and Brief bars. It replaces the small solid triangles on every score card's fold button and in the
  framework list, and the browser's own arrow on every dropdown (Style, Sort, workspace menus).
  `design-system.css` draws it for any `<select>`, in the secondary text colour for each theme
  (version bumped to `?v=20261116a`).
- **Framework list on one left edge**: the chevron, the section heading and the item numbers now all
  line up on the left. Item numbers are left-aligned on the CCI and PEMAT sheets too, which share the
  column.
- **Section headings without numbers, in sentence case**: "1 Enable Patient Learning" now reads
  "Enable patient learning". Words in capitals (CDC, AI) keep their capitals.

## 2026-11-16 — Studio: Readability card leads with what to fix

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **One "things to fix" list at the top**, with no box and no icons, on the card's left edge (e.g.
  "2 things to fix"). Each line says the change, where it stands now, and how: "Cut it to 700 words
  or fewer · 791 now" and "Shorten sentences to 15 words or fewer · 19.3 now". It replaces the
  summary headline and the "Length for format" row at the bottom. When nothing needs fixing it reads
  "Nothing to fix" with one line of advice. Posters get "Read the poster aloud".
- **Plain score names**: "Reading ease" (Flesch score, 0 to 100) and "School grade" (Flesch–Kincaid),
  with "Grade 13" in place of "Gr 13". The line under each says what it means and how this text
  does, e.g. "Higher is easier. Aim for 60 or more; this text is hard to read."
- **The formula opens from its name**: click "Flesch–Kincaid" or "Flesch score" to see the working
  with this text's numbers, what raises or lowers it, what was counted, and the source. This replaces
  the "How the grade is worked out" row.
- **Stats spelled out**: "words in an average sentence", "syllables in an average word", "of
  sentences use the passive voice".

## 2026-11-16 — Studio: Readability summary in plain, full sentences

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The headline names the reader**: "Reads at grade 13 · suits a college-level reader" (was "· 7
  grades above goal: grade 6", with the reader on a separate bulleted line).
- **No "Next" pill** on any score card; the next step is a plain line under the summary.
- **Readability's next steps are full sentences** that say what, why and how:
  - Long sentences: "Your sentences are 19.3 words long on average. For this reader, aim for 15
    words or fewer. To shorten them, split a sentence where it joins two ideas with “and”, “but” or
    “so”." (was "Split sentences at “and”, “but” or “so”: 19.3 words on average, aim for 15 or fewer.")
  - Long words: "Your sentences are a good length. The grade is high because of long words. Swap
    medical terms for everyday ones, such as “high blood pressure” for “hypertension”."
  - Meets the goal: "This is easy enough for your reader. As you edit, keep sentences this short."
  - Posters: "Poster lines are too short for a reading-level formula to measure reliably." / "To
    check it, read the poster aloud and listen for any line that is hard to say or understand."
- **Every other score card's notes are now full sentences too** (CCI, PEMAT, Accessibility, Content
  accuracy: 14 lines). Each says what's wrong, why it matters and what to do, and spells out terms:
  for example "Rate each remaining item as Met or Not met. If the material has no steps, numbers or
  risks, mark that part “Doesn't apply” so it isn't scored." and "These would fail the web
  accessibility standard (WCAG 2.2 AA) and Adobe's PDF accessibility check." PEMAT names its 70%
  working target; accuracy asks for "a named clinical reviewer".

## 2026-11-16 — Studio: score card summaries on one left edge

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The summary at the top of each score card has no bullets** ("Suits a college-level reader." and
  the like), and the yellow **Next** label now sits inline with its text, so a wrapped line returns to
  the card's left edge instead of hanging under the label. Every line of the summary starts on one
  edge. Applies to every score card (Readability, CCI, PEMAT…), and to slide 2's live panel.

## 2026-11-16 — Slide 2: the Frameworks list stays open

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **In the Studio's demo mode the Frameworks list is always open.** It used to close when you
  clicked anywhere outside it, such as the score cards on the right, leaving only the bar. Clicks
  elsewhere, Escape and the toggle no longer close it, and the toggle ("Close" and its arrow) is hidden
  there since it would do nothing. The normal Studio is unchanged.

## 2026-11-16 — Slide 2: tiles keep one corner radius

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Each tile on slide 2 keeps the same rounded corners covered or open.** The corners jumped from
  rounded (cover) to square (the live panel) as a cover slid away. Each tile now has a fixed rounded
  outline: a ring in the slide's own colour masks the corners outside it, over both the cover and the
  live panel. Checked at 1920×1080: the corners match in both states.

## 2026-11-16 — Slide 2: hover covers; Studio: Clear sits before Show all

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 2's two live panels start covered**, like slide 1's tiles: "Pick, sort and filter" over the
  Frameworks list, "Each one, its own card" over the score cards. Hovering a cover slides it up to show
  the live panel and covers the other again; leaving the slide covers both. While covered, the slide's
  own background fills the corners, so the white panel underneath doesn't show past the covers'
  rounded corners.
- **Studio: in the Frameworks and Brief bars, Clear now sits before the toggle** ("Clear · Show all
  11"), so "Show all" and "Close" appear in the same place (the toggle ends at the bar's right edge in
  both states). The bars use a one-row grid on wide screens; phones keep their two-row layout.

## 2026-11-16 — Slide 2: "Pick the right checks", the live Studio

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New slide `#feat-frameworks`** ("2 of 8"), after slide 1. The left area is the **real Studio,
  live**, in two tall panels you click and scroll yourself: the Frameworks list, open (left), and
  the score cards (right). It opens with the Take Action section loaded and the Brief set to
  Patients + Handout; ticking or unticking a framework adds or removes its card on the right.
  The frame loads fresh each time the slide comes on, so it always starts the same way.
- Right column, same layout as slide 1: The problem ("There are many published checklists for
  health writing. Knowing which fit your material, and tracking each one, is a job in itself.") and
  What PRISM does (Picks the checklists that fit your Brief · Sort by use case, area or what's
  recommended · Filter to the ones that give a score · Each one gets its own card of results).
- **Studio: new demo mode** (`/?demo=frameworks`): shows only those two panels on a transparent page,
  always light, and never reads or saves this browser's stored work or theme, so a demo can't
  overwrite a real draft.
- Inside the live panels, Left / Right / Page Up / Page Down still turn slides (except in a text
  field or the sort menu). The deck's theme switch leaves the live panels light.
- Checked at 1920×1080: arriving from slide 1 loads the panels ready; unticking PEMAT-P removed its
  card (4 of 11 → 3 of 11); a right arrow pressed inside the panel moved to the next slide; no console
  errors.

## 2026-11-16 — Slide 1: shorter clips

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Each tile's clip holds its last frame for 0.8 s instead of about 3 s**, re-encoded from the
  same frames (no re-recording). Paste 6.2 s, Drag and drop 6.8 s, Try a sample 6.1 s, Set the
  Brief 7.4 s (were 10.5–12.9 s). The whole run, with its 2 s gaps, now takes about 34 s (was about
  50 s). Clip URLs are `?v=20261116g`.

## 2026-11-16 — Slide 1: tiles play in turn, then replay on hover

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **When the slide comes on, the four clips play one after another**: Paste, Drag and drop, Try a
  sample, Set the Brief. Each starts 2 s after the one before it ends, and each stops on its last
  frame. Leaving the slide stops the run and puts all four back on their first frame; coming back
  starts it again. Reduced motion keeps them still.
- **After the run, hovering a tile replays that tile** from the start; the others stay on their
  last frame. Hovering does nothing while the run is still going.
- This replaces the hover-only version below. It works for any slide marked `scene feat`.
- Checked at 1920×1080: tiles played in order with the 2 s gaps, ended with all four on their
  last frame, and hovering tile 1 then replayed only tile 1; no console errors.

## 2026-11-16 — Slide 1: only the hovered tile plays

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Only the tile under the mouse plays.** Moving onto a tile plays its clip from the start and
  stops every other tile on its first frame; moving off a tile stops it on its first frame too.
  Focus no longer starts a clip (a click focused the tile and kept it playing); Enter or Space on a
  focused tile still plays it.
- Checked at 1920×1080 with real mouse moves: tile 1 plays alone, moving to tile 2 stops tile 1 and
  plays tile 2, moving off all tiles stops everything; no console errors.

## 2026-11-16 — Slide 1: each clip plays when you hover it

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The four tiles no longer play when the slide opens.** They show their first frame, and each
  clip plays from the start when the pointer moves onto its tile (also on keyboard focus or a tap),
  then stops on its last frame. Hovering again replays it. Reduced motion keeps them still.
- **No picture-in-picture button on hover:** every video in the deck (16) now has
  `disablepictureinpicture`, so the browser no longer shows its own button over a clip.
- Checked at 1920×1080: arriving on the slide leaves all four still; hovering "Set the Brief"
  plays only that clip; no console errors.

## 2026-11-16 — Slide 1: four ways to start, four clips

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **`#feat-drop` is now "Start with your draft"** with four clips in a 2×2 grid on the left, each
  with a plain label above it (no numbers, nothing over the screens): Paste it in, Drag and drop a
  file, Try a sample, Set the Brief. All four play together when the slide opens and stop on their
  last frame. The right column: The problem ("Your draft is already in Word, a PDF or an email…")
  and What PRISM does ("Paste it, drop the file in, or try a sample. Then tell PRISM who it's for.").
- **Each clip is one real Studio component on a transparent background** (`media/loops/f1-paste`,
  `f2-drop`, `f3-sample`, `f4-brief`: WebM with alpha, MP4 fallback on the dark background, PNG
  first frame), 7.5–9.5 s, with a drawn cursor. The Material panel is 520×440; the Brief clip opens
  the Brief and picks Patients and Handout, ending on grade 6 or lower, 150–700 words.
- The earlier single drag-and-drop clip (`f1-drop`) is no longer used; its files stay in the folder.
- Checked at 1920×1080: all four clips play on arriving from the previous slide; tiles about
  508×438 each.

## 2026-11-16 — Slide 1: the Brief clip starts open

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **"Set the Brief" starts with the Brief already expanded**: the cursor picks Patients, then
  Handout, and the clip ends on the targets (grade 6 or lower, 150–700 words). The click on Edit
  brief is gone. 5.1 s (`f4-brief`, `?v=20261116m`).

## 2026-11-16 — Slide 1: one text edge, label above the box

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **"What PRISM does" sits above the yellow box**, like "The problem", in the brand yellow (dark gold
  in light theme). The box holds only the list.
- **Every line of text in the right column starts on one left edge** (x = 1341 at 1920×1080): step,
  title, both labels, the problem line, all four list items and the credit. The list's bullets hang
  in the box's padding, to the left of that edge.

## 2026-11-16 — Slide 1: the example tile uses the poster

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **"Start from an example" now opens the sample poster** (Know Your Numbers) instead of the sample
  handout (`f3-sample`, `?v=20261116l`). The tile's title is unchanged.

## 2026-11-16 — Slide 1: hover slides the cover up

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Moving the pointer onto a tile reveals it:** its title cover slides up out of the tile
  (0.55 s ease) and its clip plays once, ending on the last frame. The tile that was open slides its
  cover back down, so only one shows at a time. Hovering the open tile again doesn't restart it; a
  click (or Enter / Space) replays it. Leaving the slide covers them all again.
- Checked at 1920×1080 with real mouse moves: hovering tile 1 opened and played it; hovering tile 4
  covered tile 1 and played tile 4; the cover ends fully above the tile; no console errors.

## 2026-11-16 — Slide 1: yellow panel is just the list

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Removed "One workspace for every check. Bring your material in however you have it:"** from the
  What PRISM does panel. The panel is now its label and the four-item list.

## 2026-11-16 — Slide 1: two text styles in the right column

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The right column's text below the title now uses two treatments**: one label style (600,
  uppercase, 1.15u) for both "The problem" and "What PRISM does", and one body style (400, 1.56u)
  for the problem line, the yellow panel's sentence and its list. Before, the yellow panel had its
  own label size and weight, a larger bold sentence and a third size for the list.

## 2026-11-16 — Slide 1: "Bring it in, start checking"

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New story: scattered tools, one workspace.** Title "Bring it in, start checking". The problem:
  "The checks live in scattered tools, and each wants your draft in a different form." What PRISM
  does: "One workspace for every check. Bring your material in however you have it:" then a list:
  Paste text from anywhere · Drop in a Word file, PDF, text or image · Start from an example to
  learn how it works · Set the Brief, and the checks begin.
- **Tile 3 is now "Start from an example"** and uses the text sample: the clip clicks the sample
  handout (Managing Your Blood Pressure at Home), which opens with its hard words highlighted
  (`f3-sample`, `?v=20261116k`).

## 2026-11-16 — Studio: nothing peeks out around the drop area

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **While a file is dragged over the empty Material panel, only the blue drop area shows.** The
  empty-state buttons and sample tiles behind it used to peek out in the thin margin below it.
- Slide 1's Drag and drop clip is re-recorded with the fix (`f2-drop`, `?v=20261116j`).

## 2026-11-16 — Slide 1: clips without the Material header row

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Paste, Drag and drop and Try a sample were re-recorded without the panel's header row**
  (Material, file name, History, Export, Upload, Clear). Each clip now starts at the formatting
  toolbar, so the panel's content gets that space. The Brief clip is unchanged. URLs are
  `?v=20261116i`.

## 2026-11-16 — Slide 1: one tile open at a time

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Only one tile shows its screen at a time.** Clicking another tile covers the open one again
  (back to its title, its clip reset) and uncovers and plays the new one. Clicking the open tile
  still replays it.
- Checked: opening tile 1, then tile 3, left only tile 3 open and playing; clicking tile 3 again
  replayed it; no console errors.

## 2026-11-16 — Slide 1: tiles match the screen, nothing cropped

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Each tile now has the clip's own shape** (1040:880), so the screen shows whole, edge to edge,
  with nothing cropped. Before, the clips were cropped to a slightly wider tile, which cut the
  bottom footer by different amounts, so the bottoms didn't line up. Tiles are 570×482 at
  1920×1080 (were 596×482), left-aligned in the left area.

## 2026-11-16 — Slide 1: click a tile to reveal it

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The four tiles start covered**, each a dark card showing only its title in the display serif
  (Paste it in, Drag and drop a file, Try a sample, Set the Brief). The tiles are larger: each fills
  its quarter of the left side (labels above them are gone).
- **A click uncovers a tile and plays its clip once**, ending on the last frame; the screen fills the
  whole tile, edge to edge. A click on an open tile replays it. Opened tiles stay open; leaving the
  slide covers them all again. Enter or Space on a focused tile does the same and doesn't move the
  deck. Reduced motion shows the clip's last frame without playing.
- This replaces the autoplay run and hover replay.
- **Clips re-recorded cropped to the panel** (1040×880, no margin or shadow) so they fill the tile, with
  the centred empty panel and the 0.8 s ending: 5.3–6.6 s each. URLs are `?v=20261116h`.
- Checked at 1920×1080: all four covered on arrival, clicking "Drag and drop a file" uncovered and
  played only that tile, leaving the slide covered them again; no console errors.

## 2026-11-16 — Studio: empty Material panel is centred

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The empty Material panel keeps no scrollbar space** (nothing to scroll there), so the blue
  "Drop to open it" area and the empty-state buttons sit centred, with equal margins left and right
  (14 px each in the slide capture; before, the right margin was about 16 px wider). A panel with
  a document still keeps its scrollbar space.

## 2026-11-16 — Studio: drop area's dashed line hugs the blue fill

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **When a file is dragged over the empty Material panel**, the dashed line is now drawn on the blue
  "Drop to open it" area itself. It used to be the panel's outline, which also spans the space
  kept for the scrollbar, so it ran past the fill on the right.

## 2026-11-16 — New feature slide: Drop in your draft (one feature per slide)

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New slide `#feat-drop`** ("1 of 8", chapter "Demo"), placed before the current demo slides
  (`#features`, `#features-2`, unchanged for now). It's the first of the planned one-feature-per-slide
  layout: the clip fills the left, and all text sits in the right column on one left edge, the
  yellow panel's text included: step, title "Drop in your draft", The problem, What PRISM does,
  and the credit at the bottom.
- **The clip shows only the Studio's Material panel**, recorded from the real Studio with
  everything else hidden, on a transparent background (`media/loops/f1-drop.webm`, VP9 with
  alpha, so it sits cleanly on the dark and the light theme). An MP4 on the dark background is the
  fallback, and the first frame is the poster. 13 s: the empty panel, the Word file dragged in
  ("Drop to open it"), then the Take Action section of the Light Collective guide opens (791 words),
  held until the end. The file is `presentation/demo-files/Take_Action_LightCollective.docx`
  (copied from `supporting document/`).
- Slide clips can now play from any element marked `data-play` (they needed the `.fp` class before).
- Checked at 1920×1080: arriving from the previous slide plays the clip, no console errors; light
  theme shows the panel on the light background.

## 2026-11-16 — Why AI?: arms hide the hands' tubes

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Lego figure (`#why`):** the hands were drawn in front of the arms, so each hand's small tube
  showed over the arm's cuff. The hands now sit behind the arms (z 1.7, arms 1.8) in
  `scripts/lego-pieces.py` and `media/bg/lego/pieces.json`, so the cuff and its round hole cover
  the tube and only the hand's grip shows below. The cache version is bumped in `lego-bg.js` and in
  the page's `<script>` tag, so browsers fetch the new piece order.

## 2026-11-16 — Slide 2: background waits 3 s

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 2's clip and push-in now start 3 seconds** after the slide arrives, down from 10
  (`presentation/question-bg.js`, cache key `20261116h`).

## 2026-11-16 — Slide 2 and the designer slide morph into each other

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Morph both ways between slide 2 and `#waiting`:** the room stays in place while the designer
  fades in and the room dims (going back, she fades out and the room brightens). The title morphs as
  on other slides, and the push-in zoom eases back out. The backdrop, wash and text layers are
  paired with `data-morph` (`clinic`, `clinic-wash`, `clinic-text`).
- **Going back into a `data-wait` slide can now morph:** it arrives finished, so only going forward
  into one keeps the plain fade. After a morph, a paired layer with no fade-in of its own is let go,
  so slide 2's push-in still runs.

## 2026-11-16 — New slide after slide 2: the designer waits, outlined

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New slide `#waiting` right after slide 2** (slide 2 keeps its clinic clip, quote and 10 s
  push-in). Its background is a still of the designer waiting in her chair
  (`presentation/media/bg/clinic designer.webp`, Midjourney). She is traced with a thin cream
  outline and the rest of the room is dimmed (`clinic-designer-outlined.jpg`).
- **Placeholder text** ("Placeholder title" and one placeholder line) sits on the right half, over
  the dark room, so it never covers her. The slide keeps light text in both themes.
- **Credit:** "Image: generated with Midjourney, outlined in code".

## 2026-11-16 — Slides: shared edit mode (Chloe and Sonia retype lines, saved for everyone)

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Edit mode on the deck** (`presentation/deck-edit.js`): open `presentation/?edit`, or press E
  once you've edited in that browser. Every title, line and caption gets a dashed outline; click and
  type. Enter or Esc finishes a line, Shift+Enter breaks it, paste comes in as plain text. Typing never
  turns the slide. A pill at the top shows when the last save was. No name or passcode: the toggle
  is all it takes (anyone with the link and `?edit` can edit).
- **Saved to GitHub** (`api/deck-edits.js`, a Vercel function): each save is one commit to
  `presentation/deck-edits.json` on the `deck-edits` branch, so there is a full history and master
  is untouched. Everyone who opens the deck (Vercel or GitHub Pages) sees the saved edits; while
  editing, the other person's edits show up within 15 seconds. `vercel.json` turns off deploys
  for the `deck-edits` branch.
- **The deck waits up to 1.5 s for the edits before it starts**, so animations keep their text. If
  the edits can't load, the deck starts with the text as written.
- **On "push"**: `node scripts/bake-deck-edits.js` folds the edits into `presentation/index.html`,
  then the edits file is cleared. Each edit keeps the line's original markup, so an edit made against
  older text is skipped rather than misapplied.
- **Setup needed in Vercel** (Settings → Environment Variables, all environments): `GITHUB_TOKEN`
  (fine-grained, this repo only, Contents read and write).
- Local testing: `node scripts/deck-edits-dev.js` (saves to a local file), then
  open `presentation/?edit&api=local`.

## 2026-11-16 — Studio: score modules reordered

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #46) · GitHub Pages: updated from `master`

- **The score column now runs Plain language, Readability, Framework checklists (UPL), CCI,
  PEMAT-P** (was Framework checklists, Readability, CCI, PEMAT-P, Plain language), in the
  Everything and Auditing layouts. Drafting runs Plain language, Readability, Framework checklists.
  The demo clips still show the old order until they're re-recorded.

## 2026-11-16 — Front door: privacy line under the buttons removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **"Your file never leaves your computer." is gone** from under Check a draft / Plan from an idea
  on the front door (`intro.js`). The Studio's own privacy note (the Private button and the guide)
  is unchanged. `intro.js` is now loaded as `?v=20261116a` so browsers fetch the new copy.

## 2026-11-16 — Why AI?: shoulders under the body, hands over the cuffs

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The arms now sit behind the torso**, so the body covers the shoulder joints.
- **The hands sit higher and in front of the arms**, covering the round cuff holes
  (`scripts/lego-pieces.py`, assets regenerated, cache key `20261116f`).

## 2026-11-16 — Title: napkin turns into the screen as "Dropped" falls

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Title slide (`#top`):** the napkin-to-screen crossfade now runs with the "Dropped" fall instead
  of after it. It starts at 1.45 s, as the word begins to creak (right after the highlight sweep),
  and finishes at 3.65 s, as the word settles. Was 4 s to 5.8 s. `n2s-in` is now 2.2 s with a
  1.45 s delay.

## 2026-11-16 — Slide 2: background waits 10 s

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 2's background now waits 10 seconds** after the slide arrives, holding on the still
  first frame. Then the clinic clip plays once and the slow push-in toward the desk starts
  (`presentation/question-bg.js`, cache key `20261116e`). Leaving the slide resets both.

## 2026-11-16 — "How we met" hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **`#posts` ("How we met.") is hidden** for now, like "What we brought"; the markup, the cabinet
  pair and the two post images stay in place, so it can come back by removing `hidden`.

## 2026-11-16 — "How we met": bigger cabinets, follows light and dark mode

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Option A:** the slide drops the cream half of the illustration and uses the deck's own
  background, so it switches with light and dark mode like every other slide. The title and the
  four dated rows stay on the left.
- **The cabinet pair** (`presentation/media/bg/blue-cabinets-pair.jpg`, cropped from
  `blue cabinets.png`) now stands on the right half, its top below the slide top and its drawers
  running off the bottom edge, so the frames and posts are a little bigger. Each whole post still
  fills its frame and links to LinkedIn.

## 2026-11-16 — "How we met": the two posts hang in the blue cabinets

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **`#posts` is now a light slide** on the new illustration `presentation/media/bg/blue cabinets.png`:
  cream on the left, two blue cabinets with an empty picture frame each on the right. The title
  "How we **met.**" and the four dated rows sit on the cream half in dark ink.
- **Each whole post fills one frame**, Nati's on the left and GoInvo's on the right, as a clean white
  rectangle with no border stroke, still linked to LinkedIn. The illustration keeps its own shape
  (cover-sized) and the posts are placed in % of it, so they stay in their frames on any screen
  shape; at 4:3 the right frame is cut off at the edge.
- The tilted pile and the blue / yellow post borders are gone. The slide stays light in both deck
  themes. Credit line: the two posts, then "Background: generated with Midjourney".

## 2026-11-16 — Slides: light mode for bright rooms

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Light / dark switch for the whole deck.** Press **T**, or click the sun/moon under the chapter
  dots. The deck starts dark; the choice is remembered in the browser (`talk.theme`) and applied
  before the first paint, so there is no flash.
- **Light palette:** cream desk (#F6F4EF), near-black ink, the same yellow highlight. Every wash over
  footage (napkin, clinic desk, certification art, demo-clip captions, Intent/Build/Iterate) now
  draws from one `--scrim` colour, cream in light mode, so dark text reads on it. Text over footage
  gets a soft cream glow instead of the dark shadow.
- **Exceptions, on purpose:** "From napkin to prototype" keeps its dark cover in light mode (the
  letters are cut out of it to show the pale napkin film and vanish on cream). The Meet PRISM frame
  gets the deck's theme, but PRISM's own front door is dark in both themes.
- Checked all 15 slides in light at 1024×768, and the title slide back in dark; no console errors.

## 2026-11-16 — Demo slides: bigger clips with overlaid captions, fuller clips; Studio fixes

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Studio: the score cards line up with the Frameworks bar.** The results column's scrollbar (and
  its 4 px padding) now hang outside the column, so the cards end exactly where the Frameworks bar
  ends (they stopped 19 px short). The scrollbar width is measured on load (`--sbw`, 0 where
  scrollbars overlay). Checked at 1040 and 1440 wide, no sideways scroll.
- **Studio: contrast fixes can change the background.** For each failing target (AA body, AAA) both
  sides are tried, the text colour and the background, and the one that needs the smaller lightness
  change leads; the other is offered under it ("or darken text to …"). Preview shows either. White
  text on the UHN poster's light-blue band now gets "Darken background to #2b7f97 (4.50:1)" instead
  of grey text (#515151).
- **Demo slides, layout B:** slimmer side margins (2.5u) and strips (3u), so the open clip shows the
  whole Studio at 1582×896 on a 1920×1080 screen (was 1384×743). The caption sits on a dark
  gradient over the bottom of the clip instead of under it, in the theme's text colours.
- **Fuller clips** (all eight re-recorded with the aligned cards):
  - 3 · Frameworks (20 s): the list opens with the Brief's picks ticked, scrolls through every use
    case, is sorted By area and then Recommended, and is filtered to frameworks that give a score.
  - 4 · Plain language (31 s): the counts, the cards scrolling by, a card jumping to its sentence, one
    rewrite applied, a highlighted word retyped by hand ("access" → "get to"), Apply all (grade
    12.3 → 11.8), then Undo and Revert in History.
  - 6 · Alt text and colour contrast (25 s): alt text typed, white on blue passes, white on the
    light-blue band fails, and Preview shows the darker band.
  - 7 · Colour blindness (16 s): all four views, then back to normal.
  - 8 · Framework Compass (28 s): scrolls through all 14 frameworks, then CCI's formula, items,
    references and the cdc.gov link.
- **Poster slide order:** New example, Alt text and contrast, Colour blindness, Compass.
- Checked at 1920×1080 (headless Chrome screenshots after the clips play): both slides, caption over
  the clip, the Brief targets clear of the caption.

## 2026-11-16 — Demo clips: bigger text, standard encoding, stop on the last frame

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Clips looked soft for two reasons:** the Studio was recorded 1200 px wide, so its 13–14 px text
  came out small on the slide, and the MP4s were encoded as 4:4:4 full-range video (from the JPEG
  frames), which many players handle poorly.
- **Now recorded at 1040×590** (the narrowest width before the Studio stacks into one column). The
  Studio shows the document beside one wide results column, and every word in the clip is about
  15% bigger. Captured at 2.4× (2496×1416), encoded as standard 4:2:0 H.264 High, CRF 14,
  tuned for flat UI. 11 MB for all eight.
- **Each clip plays once and stops on its last frame** (the fade back to the first frame is gone).
  The first frame is still the still shown before a clip starts.
- The poster looks smaller in clips 5–7 in this layout (16% zoom, was 26%).
- Checked at 1920×1080: clips 1 and 2 play to the end and stay on their last frame, 2496 px source
  shown at 1384 px, no console errors.

## 2026-11-16 — Demo slides: no titles, taller and sharper clips, TLC guide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Titles off** on both demo slides ("Check a draft.", "Check a poster." stay as hidden headings for
  screen readers). The row starts where the title was.
- **Taller clips:** each clip now shows the whole Studio window (1.765:1, was a 2.1:1 strip), so the
  open panel is 1384×743 at 1920×1080 (was 1384×592). The caption ends about 40 px above the credit.
- **Sharper:** recorded at 2× (2400×1360, was 1920×914), JPEG frames at quality 98, H.264 at CRF 15
  (was 20). 14 MB for all eight.
- **Longer:** every step waits 0.4 s longer, and each clip holds about 2 s more on its last state
  before the fade, so no clip loops back in the middle of a move. Clips run 6.5–18 s.
- **File demo now uses The Light Collective's guide**, "A Guide to Negotiating Patient Digital
  Rights" (CC BY 4.0). The PDF opens read-only in the Studio (no Apply all, Undo or History), so the
  clips drop a Word copy made from its text: `presentation/demo-files/TLC_guide_v6_final.docx`
  (8,075 words). The PDF is beside it. The Brief is now Patients + **Manual** (grade 6 or lower,
  600–6,000 words); the caption and credit say so. The guide is over 6,000 words, so it's flagged
  as too long.

## 2026-11-16 — Take-home divider: the title itself is the cut-out

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The 3 is gone.** The divider (`#three`) is now just "From napkin / to prototype" in heavy Newsreader
  (800), cut out of the dark, centred, and as wide as the slide's margins allow (capped at about a
  third of the height). "Intent first" shows through the letters. The comma, the highlight and
  "in three steps." are removed. The title stays in the page as hidden text for screen readers and
  the chapter dots. On phones the cut-out is off and that title shows as normal text.
- **Going forward zooms through the letters**, from the thickest spot in the type, into Intent first.
- **Under the divider, Intent first drops its dark left-hand wash**, so the letters show the paper and
  the drawing; the wash fades back in (0.6 s) once the slide lands.
- **The cut-out title sits at the foot of the slide** (its ink ends one margin above the bottom),
  over Intent first's drawing, so the letters show the pot, the gardener and the book.
- **Intent first fades in with the divider** (it used to show in full for a moment before the dark
  arrived). On phones, nothing waits underneath the divider.
- **Smoother zoom through the letters.** The letters used to grow by v³ over a linear 1.3 s, so they
  crawled for half the time (×1.06 at 0.25 s) and then jumped from ×8 to ×50 in the last 0.15 s. The
  zoom is now geometric, with the same growth ratio from frame to frame, and eases in: about ×1.2 at
  0.24 s, ×3 at 0.6 s, ×15 at 0.96 s and ×49 at 1.2 s, so the speed rises evenly and peaks at the cut.
  The cover sits on its own layer while it redraws.
- **No more glitch at the end of the zoom.** The letters used to grow to ×40–50, where the browser
  redraws the huge mask badly and the page flickered just as Intent first filled the screen. They now
  stop at ×14. Over the last 45% of the 1.2 s, the dark cover dissolves instead, while Intent first's
  wash and its "1 of 3", title and line fade in under it. The slide is complete at the cut, so nothing
  animates after it: no cascade and no wash fade-in. The extra layer hint on the cover is removed.
- **The zoom grows out of the drawing.** It used to start from the thickest stroke anywhere, which was
  the "F" at the far left. Now it starts from the stroke nearest the gardener: of the strokes at
  least 60% as thick as the thickest, the one closest to a point 60% across and 45% down Intent
  first's art. At 1280×720 that's the "k" of "napkin", so the hole opens onto the gardener and the
  book.
- Checked at 1280×720: cut-out at rest, and landing on Intent first with its title and wash.

## 2026-11-16 — Demo slides re-recorded with real examples

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slides 5–6 (`#features`, `#features-2`) now follow the demo script**, four clips each in its
  order (option A). Chapter name is now "Demo". Slide 5, "Check a draft.": Drop it in (with the
  Private note), Brief (Patients + Handout: grade 6 or lower, 150–700 words), Frameworks (four picked
  for the Brief), Fix and undo (one fix, Apply all, Undo last change, Revert in History). Slide 6,
  "Check a poster.": New example (Clear all, drop the poster), Colour contrast (white on the poster
  blue passes at 5.13:1; white on the light-blue band fails at 1.73:1 with darker shades
  suggested), Colour blindness and alt text, Framework Compass (CCI: formula, pass mark,
  references with links).
- **Real material instead of the sample:** the draft is GoInvo's FasterCures case study
  ("Engaging Patients to Understand Health Data", 943 words in the body, so it's over the
  700-word target), saved as `presentation/demo-files/health-data-basics.docx`. The poster is
  Sonia Seto's COVID welcome poster for UHN, shrunk to 1500×1997 as
  `presentation/demo-files/uhn-welcome-poster.png` (the original is 7250×9650). Both files can be
  used for a live demo too.
- **Clips** are `presentation/media/loops/d1-drop` … `d8-compass` (MP4 plus first-frame still,
  6.9 MB in all), recorded the same way as before: headless Chrome, light mode, 1200×680 Studio with
  the document panel at 40%, a 1920×914 window, a drawn cursor with a yellow click ring, a 0.35 s
  fade back to the first frame. The old clips stay in the folder.
- **Credits:** each slide credits its material at the bottom. To make room, a row with a credit
  under it gives up 3.3u of video height, so the caption ends about 50 px above the credit.
- The script now says "accessibility checks" instead of "508 Checker" (the Studio's panels are
  Alt text and Colour and contrast), and the audience is Patients, grade 6.
- Checked at 1920×1080: both slides, every panel step, no console errors.

## 2026-11-16 — Take-home divider: zoom through the 3 into Intent first

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The giant 3 on the divider (`#three`) is now a cut-out**, in heavy Newsreader (800, newly
  loaded). It's a hole in the dark slide, and the next slide, "Intent first", waits underneath it,
  so its artwork shows through the 3. The page keeps "Intent first" shown under the divider whenever
  the divider is on (`.peek`); any slide marked `data-zoom` does the same with the slide after it.
- **Going forward zooms through the 3** (a text-mask zoom): the hole grows from the thickest point
  of its stroke (found by sampling the glyph) until it covers the screen. The title fades out in
  the first third. Then "Intent first" plays its own fade-in. It takes 1.3 s. A click during the
  zoom just jumps to its end. Going back, reduced motion, and phone widths use the normal change.
- **The 3 is centred on the page height** (measured from the glyph itself), so the whole numeral
  shows and holds more of Intent first's illustration. It no longer bleeds off the bottom.
- Checked at 1280×720: cut-out at rest, a frame mid-zoom, landing on Intent first with its title,
  and going back to the divider and on to AI certification.

## 2026-11-16 — Homepage slider: new 18 h quote

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The 18 h (Oct 19) quote now matches its screenshot.** It was "make button center, make where
  to type and paste more obvious, show where history log/change log is", but no history log shows
  in that screenshot. It now joins two of Chloe's Oct 19 prompts: "make button center, make where
  to type and paste more obvious … nothing's uploaded to anywhere, others can't access your data"
  (the centred Open a file button, the Type or paste text button, and the lock line under them).

## 2026-11-12 — New "Why AI?" slide; camera-phone slide hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **New slide (`#why`, chapter "Why AI?")** after "Two posts", option A: a grey setup line, "Normally:
  developers, a budget, months of work. I had none of those.", then the big serif line "If you
  understand the problem, you can **build the tool yourself.**" (highlighted). It carries the
  spoken script about maternity leave, vibe coding and the three-week course. No image, so no
  source line.
- **Camera-phone analogy (`#analogy`)** hidden for now; the markup stays in place.

## 2026-11-12 — "Two posts": how Sonia and Chloe met

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **New slide (`#posts`, chapter "Two posts")** right after "A confession", following Sonia's
  script. Option E (after trying A, side by side): on the left the title "Two posts. One
  **project.**" (highlighted) and four lines, each led by a grey date: "April Nati's post led Sonia
  to the CDC Clear Communication Index, then to 26 frameworks." / "Around then Sonia saw Chloe's
  post on AI design certification and reached out." / "Summer We scoped it and talked to our
  networks." / "August Chloe started building." On the right, the two posts overlap like pinned
  printouts, tilted -4° and 3°, each arriving with its line.
- **Colour edges (option 5):** Nati's post, the one Sonia found, has a border in Sonia's blue; the
  GoInvo post has Chloe's yellow, the same pair as "What we brought". Corners are rounder (8px).
  The yellow post sits a little further in so it clears the chapter dots.
- **New title and date table:** the title is now "How we **met.**" (highlighted), and the four
  lines became a table with the date in its own grey column and hairlines between rows, each one
  line: April "Nati's post. Then 26 frameworks." / Spring "Chloe's post. Sonia reaches out." /
  Summer "We scope it with our networks." / August "We start building."
- The posts are shown whole (Sonia's collapsed captures: the dino drawing and the certification
  photo), at about their own pixel size so they stay sharp. Each post, and each name in the credit
  line, links to it on LinkedIn (opens in a new tab). Images: `presentation/img/post-nati-chen.png`
  and `post-goinvo-certification.png`.
- The hidden "What we brought" slide is unchanged.

## 2026-11-12 — Take-home divider before the three points

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **New divider slide (`#three`, chapter "Take-home")** just before "Intent first". Option E5: the
  title sits low on the left, "From napkin to **prototype,**" (highlighted), with "in three steps."
  under it, picking up the title slide's "napkin to prototype". A giant dim serif "3" bleeds off the
  bottom on the right, stopping short of the chapter dots so they stay clear. It echoes the "1 of 3"
  on each point slide.

## 2026-11-12 — "Dropped" falls less, clear of the line below

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **"Dropped" (`#top`)** came to rest at 8°, with its highlight over "prototype" in the blurb
  below. The fall now peaks at 4° and settles at 3°, and the word no longer shifts down 0.16em.
  Measured gap to the blurb at rest / at the bottom of the fall: 11 / 3 px at 1920×1080,
  8 / 2 px at 1280×720, 7 / 2 px at 1024×768. Same sweep, creak and bounce timing as before.

## 2026-11-12 — Title background: napkin sketch turns into the screen

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **New title slide background (`#top`):** the PRISM prototype sketched on a napkin
  (`media/bg/n2s-napkin.webp`) becomes the same prototype on a monitor (`media/bg/n2s-screen.webp`).
  The two images line up pixel for pixel. The drawing itself never moves or fades: a copy cut from
  the napkin image (`.n2s-lock`) stays on top while the monitor fades in around it. It plays once
  per showing, 4 s in (after "Dropped" settles), over 1.8 s. With reduced motion turned on, the
  monitor shows straight away. The dark wash and the brightness are unchanged.
- **Retired:** the self-drawing napkin photo with the cursor clicking "Open". `napkin.js` and its
  media files stay in the repo but are no longer loaded.
- **Credit line** now reads "napkin and screen sketches generated with Nano Banana (Google Gemini)".
- Options mockup: `design/brainstorm/napkin-to-screen/`.

## 2026-11-12 — Title slide: "Dropped" sweeps, creaks, then falls

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **"Dropped" on the title slide (`#top`)** is now animated, every time the slide is shown. First the
  yellow highlight sweeps left to right across the word (0.7 s). Then the word sags for a beat, its
  right end falls fast, bounces once and settles at 8° (was a static 2° tilt). The pivot is the
  word's bottom-left corner. CSS only: `dw-sweep` and `dw-fall` keyframes on `.title.on h1 .dw`.
  With reduced motion turned on, the word just sits at the final tilt.

## 2026-11-12 — Slide 2 background: clinic front desk still

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **"A confession" (`#question`)** now sits on a still of a busy clinic front desk
  (`media/bg/clinic-room.jpg`) in place of the handoffs video, behind the same dark fade. Credit:
  "Image: generated with Midjourney". `question-bg.js` now only drives videos (`video.clip-bg`).

## 2026-11-12 — Closing slide split into one slide per point; "What's your view" back

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #38) · GitHub Pages: updated from `master`

- **Three point slides replace the closing slide (`#wrap`):** Intent first (`#intent`), Build fast
  (`#build`) and Iterate (`#iterate`), each with a big faint serif numeral (1, 2, 3, hero size, light ink at 16%) set behind the top of the title in place of a "1 of 3" label (screen readers still hear "1 of 3"), the point as the title and its line
  below, top left on bare paper. The art fills the rest of the slide, pushed right and down on its own
  paper colour, with a soft fade at its left edge. A smooth dark fade (`.pt-wash`, like slide 2's)
  covers the left of each slide, easing out before the art, so the text is the deck's light type on dark
  and the pots and gardeners stay bright.
- **Art:** one still per point, the same blue pot and a small gnome-hatted gardener in each: a
  seedling in front of an open book of bonsai sketches for Intent first (`media/bg/point-1-sprout.jpg`,
  with a slow 14 s zoom and drift, off for reduced motion), the gardener sitting on the rim of an
  overgrown tree for Build fast (`point-2-messy.jpg`) and the gardener with scissors beside the trimmed
  tree for Iterate (`point-3-neat.jpg`). The pot is the same size and in the same spot on all three:
  Intent first's image is the reference, and the other two are scaled (122% and 113.6%) about their
  own pot's base and moved onto it, so flipping through the slides only the tree changes. Build fast's
  tree may rise past its art box. Intent first's blues (pot, gardener) are toned down to the muted
  teal-blue of Iterate (hue 201°→185°, less saturated and darker), and the gardener's trousers are
  filled solid blue like on the other two. Each slide's paper colour matches its image. Each slide credits Midjourney at
  its foot.
- **"What's your view on our approach?" (`#next`) is back** as the last slide, as it was before
  2026-11-10, on the dot background. The "AI gives you the average. You're the designer." title, the
  "Your turn" footer and the hidden thesis slide's text are no longer shown.

## 2026-11-11 — Studio row: "What to do" steps button and Clear all

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **What to do · N of 4:** the four check steps (Brief, material, frameworks, review) are now a
  button beside the Evaluate / Plan toggle, so they stay one click away after a file fills the card
  area (the full guide there still shows on an empty Studio). It opens a list: done steps get a tick,
  the next one is open with its Open Brief / Open Frameworks button. Esc or a click outside closes it.
  Hidden in Plan from an idea, which has its own stages. (`renderSteps`, `toggleSteps`, fed by `syncGuide`.)
- **Clear all,** next to it: after a confirm, removes the material, Brief, framework picks, ratings
  and the plan for a fresh start. Saved versions in History stay. Plain language goes back to its
  default (on). (`clearAll`.)

## 2026-11-11 — Meet PRISM: logo opening every time, no swipe

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **No swipe:** the Meet PRISM slide no longer comes in with the prism highlighter wipe
  (`data-wipe="prism"` removed from `#intro`); it uses the normal morph like every other slide. The
  wipe CSS and code stay in place, unused, for any slide that wants it later.
- **Logo opening plays every time the slide opens**, going forward or back, not only the first time
  per showing. When the slide is left, the page and small logo are hidden again (`hold()`), so they
  never flash before the next opening; a half-finished opening is cancelled cleanly.

## 2026-11-16 — Why AI?: Lego parts seated properly

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Head** comes down until its collar rests on the shoulders; the neck is hidden inside it.
- **Hands** are centred on the arm cuffs, behind the arms, so each peg disappears into its cuff.
- **Hips** slide up so their studs are hidden inside the torso and the bar sits right under it.
- **Legs** sit side by side directly under the hip bar, in front of the hip pin, so no stray pin
  or overlapping leg lines show.
- Positions and stacking in `scripts/lego-pieces.py`; asset version `20261116d`.

## 2026-11-16 — Why AI?: headline on three lines, clear of the Lego figure

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- The headline now breaks "If you understand / the problem, you can / build the tool yourself." so it
  ends at about 65% of the slide's width at 16:9 and never touches the Lego figure on the right
  (about 240 px of clear space at 1920 × 1080). Narrow screens still run it as one paragraph.

## 2026-11-16 — Why AI?: Lego pieces lock together as solid parts

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **No morph at the end.** The built figure is now the start drawing's own nine pieces pushed
  together (head onto the neck, arms in, hips and legs up), so the pieces simply stop where they
  lock and nothing swaps. `Lego end.png` is no longer used; `media/bg/lego/figure.png` removed.
- **Solid pieces.** Each piece is filled with the blueprint blue inside its outline and drawn back to
  front (legs, hips, torso, head and hands, arms), so parts hide what is behind them instead of
  showing through. The hands sit behind the arms with their pegs inside the cuffs.
- `scripts/lego-pieces.py` (moves and stacking order per piece) and `presentation/lego-bg.js`
  (version `20261116c`).

## 2026-11-16 — Why AI?: a blueprint Lego figure builds itself

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **"If you understand the problem, you can build the tool yourself."** now sits on a blue blueprint
  sheet. When the slide arrives, the Lego figure's nine pieces (from `Lego start.png`) glide one
  after another into place and morph into the finished drawing (`Lego end.png`), which holds. About
  4 s; the grid stays still and nothing is left behind where the pieces started. Replays on each
  visit; reduced motion shows the finished figure.
- The figure is pinned near the right edge and sized to the slide's height, so the headline never
  runs into it. The small line above the title is lighter (`#DCE8F6`) and the highlight is solid
  (`#5A5114`) so both read on blue. Credit: "Drawings: generated with Midjourney, assembled in code".
- New `presentation/lego-bg.js` (canvas) and assets in `presentation/media/bg/lego/` (clean grid,
  figure, nine pieces, `pieces.json`), made by `scripts/lego-pieces.py`.

## 2026-11-16 — Slide 2: clinic clip, push-in from arrival

Branch: `refresh-and-fixes` · Vercel: not deployed yet (local only)

- **Slide 2's background is now a clip** (`presentation/media/bg/clinic-room.mp4`, silent web copy of
  the 10 s `cinic room.mp4`; poster `clinic-room-first.jpg`): the passers-by walk through, the clerk
  types, and a cricket lands on the pile of handouts. It plays once, muted, from the moment the slide
  arrives and holds on its last frame; each visit starts it over.
- **The push-in now starts on arrival**, before the click, and is easy to see: 15% toward the
  handouts over 8 s, moving from the first moment and slowing as it lands (was 12% over 12 s after
  the click, which barely moved at first). The text still waits for the click.
- `presentation/question-bg.js` (version `20261116a`) and slide 2's CSS and credit in
  `presentation/index.html`: "Image: generated with Midjourney, animated with Veo (Google Gemini) and
  in code".

## 2026-11-12 — Slide 2: slow push-in toward the handouts

Branch: `refresh-and-fixes` · Vercel: not deployed yet (local only)

- **Slide 2's clinic still now moves.** When the click plays the quote, the background eases in 12%
  toward the pile of handouts on the desk over 12 s, then holds. Stepping back to before the text, or
  leaving the slide, resets it at once. Reduced motion keeps the still.
- `presentation/question-bg.js` adds `.push` to `#question img.clip-bg` once the slide's text has
  played; CSS in `presentation/index.html` does the 12 s scale (transform-origin 64% 40%). Script
  version bumped to `20261112b`. Credit now reads "Image: generated with Midjourney, animated in code".

## 2026-11-12 — AI certification art on a solid cream background

Branch: `refresh-and-fixes` · Vercel: not deployed yet (local only)

- **Certify the work, not the AI.** The illustration's peach backdrop, its glow and the insides of
  its circles are now one flat cream, `#F5F2DE`, the same as the bonsai image. Skin, hands, hair,
  the gold rings and the stamp keep their colors; the paper ribbon's lightest parts now share the
  cream and read by their outlines and shading.
- Recolored frame by frame (all 478 frames) in `presentation/media/bg/ai-certification-loop.mp4`
  and its poster `ai-certification-loop.jpg`; cache version bumped to `20261112a`. The narrow-screen
  band behind the art (`.cert-band`) is now the same cream. The original `AI certification.mp4` is
  unchanged.

## 2026-11-12 — Slide 2 waits for a click before its text plays

Branch: `refresh-and-fixes` · Vercel: not deployed yet (local only)

- **Slide 2 ("Did my visual actually make a difference?")** now arrives showing only its background.
  The next click (clicker, arrow key, Page Down, scroll) plays the quote, the highlight, the line and
  "Sonia" in their usual order; the click after that goes to slide 3. Going back from slide 3 shows
  slide 2 with its text in place; one more step back hides the text again.
- New slide option `data-wait` (`presentation/index.html`): adds an empty first step to a slide, and
  that slide is entered with the plain fade, so slide 1's title no longer glides into the quote.
  Only `#question` uses it.
- **All at once on the click:** the quote, the line and "Sonia" now fade in together over 0.5 s
  (`data-in="0 1"`, `data-dur="500"`), and the highlight behind "make a difference?" is already filled
  in (`data-in="0 0"`, no sweep). Before, they played one after another over 1.6 s.

## 2026-11-11 — Reopened slide shows its text without a click

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Fix:** opening or refreshing the deck on a later slide (from the address, e.g. `#question`, or
  the slide last shown in this browser) used the morph transition while the page was still loading.
  That transition stalled until the first click or scroll, so slide 1 stayed underneath and the
  slide's text stayed hidden. The opening slide now appears at once and its text plays in by itself
  (`presentation/index.html`, start-up code calls `swap()` instead of `show()`). Slide-to-slide
  transitions are unchanged.

## 2026-11-11 — Contrast card suggests a passing shade

Branch: `claude/focused-stonebraker-69c134` · Vercel: Production (merged to `master`)

- **Fix rows in the contrast card** (Images → Colour and contrast): when a pair fails AA body
  (4.5:1) or AAA (7:1), a row under the grades names the nearest shade of the text colour that
  passes, with a swatch and its ratio, e.g. "Darken to #9d211a (7.00:1) to pass AAA" for
  #b3261e on #f6f1e8 (5.81:1). One row per failing target; nothing shows when all three pass.
- **How the shade is found:** same hue and saturation, lightness only, in 0.1% steps; darker on
  light backgrounds, lighter on dark ones. A shade counts only if its exact ratio reaches the
  target. If even black or white can't reach it, the row says to pick a different colour.
- **Preview:** each row's Preview button (secondary button, pressed state while on) swaps the
  shade into the Large heading / body copy sample; Show original swaps it back. Picking new
  swatches clears the preview. The artwork itself is never changed.
- **Walkthrough frames recorded, not on a slide yet:** chapter 6 of the scroll walkthrough
  (`walkthrough.js`, `media/walkthrough/06-poster-003/004.webp`) has a contrast-fix beat, but the
  deck on `master` no longer shows the walkthrough (it uses the feature loops in `media/loops/`).
  The clip for the Images feature loop is still to do.

## 2026-11-10 — Slide transitions: morph by default, prism wipe into Meet PRISM

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Morph is the default slide change** (`presentation/index.html`, `show()` → `morph()`). Browsers
  with View Transitions (Chrome, Edge, Safari 18) crossfade the page while the title glides from its
  old place and size to the new one, like PowerPoint Morph. Any element marked `data-morph="name"`
  on two slides glides the same way. A morphed title arrives in place and skips its own fade-in.
  Slides that share `data-title` (Verification), the walkthrough, and reduced motion keep the old fade.
- **Prism wipe into Meet PRISM** (`data-wipe="prism"` on `#intro`, forward only): the next slide is
  revealed behind a slanted yellow highlighter band, the logo's own swipe shape, trailed by three
  thin lines of split light (red, green, blue). Going back from Meet PRISM uses the morph.
- If the browser skips or cuts short a transition, the slide still changes.

## 2026-11-10 — "What's your view" slide removed; closing title as a small lead-in over the serif; license on the last slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The "What's your view on our approach?" slide is removed** (`presentation/index.html`, `#next`),
  along with its layout rules and its entry in the rail's title lookup. The deck now ends on the
  closing slide (`#wrap`).
- **The closing title drops the yellow highlight**: "AI gives you the average." is a small grey
  lead-in line in Public Sans, and "You're the designer." is the full-size Newsreader title under it.
  A mono version (IBM Plex Mono) was tried first and dropped (option D) so the deck keeps two fonts.
  The rest of the deck's yellow highlights are unchanged for now.
- **The license is on the closing slide**: "Code on GitHub, licensed Apache 2.0. Designs licensed
  CC BY 4.0." sits in fine print under the footer. The footer's "Code GitHub" link is dropped,
  since the license line now links GitHub.

## 2026-11-10 — Thesis slide hidden; closing slide gets its title and appears all at once

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The thesis slide is hidden** (`presentation/index.html`, `#thesis`, `hidden` on the section). Its
  three principles now live on the closing slide (`#wrap`), so the deck goes straight from AI
  certification to "What's your view". It is still in the file and can come back by removing `hidden`.
- **The closing slide has a title (option T1)**: "AI gives you the average. You're the designer."
  at the size of every slide title, set at the same height as the other titled slides. The slide's
  one highlight moves from "Iterate." to "You're the designer." The columns step down to fit: the
  numerals are smaller and the step names are one size below the title.
- **The closing slide shows all at once.** The three columns and the footer now fade in together
  instead of one after another.

## 2026-11-10 — New closing slide: three numbered principles on the dotted paper

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New last slide** (`presentation/index.html`, `#wrap`, chapter "Thank you"). It merges the
  thesis and the "Your turn" slides as concept J1. Three columns, each with a large dim numeral
  (1, 2, 3), a one-line serif title and a short line: "Intent first. Name the goal before you
  prompt." / "Build fast. Let AI draft the options." / "Iterate. Keep what works. Cut the rest."
  Only "Iterate." is highlighted. Footer under a hairline (option F6), which folds in the old
  "What's next" list: "**Your turn.** It's free, open, and unfinished." then "Code GitHub · Try
  communication-framework.vercel.app · Talk prism@goinvo.com". GitHub links to the repo. At
  1920×1080 it sits on two lines.
- **Same background as "What's your view"**: the dotted paper whose dots bloom and fade.
  `presentation/dot-bg.js` now runs on every `.dot-bg` canvas, not only the one on `#next`.
- The thesis slide and "What's your view" slide stay in place for now so both can be compared;
  hide them (`hidden` on the section) once this one is approved.

## 2026-11-10 — Feature clips re-recorded wider; open panel fills the row

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **All eight feature clips re-recorded** (`presentation/media/loops/1-private` … `8-plan`, MP4 plus
  first-frame still). The Studio now runs 1200×680 with the document panel at 40%, so its three
  columns all show; each clip is a 1200×572 window of it (2.1:1), at the same text size as before
  (96% on a 16:9 screen). Same actions, cursor and lengths as the earlier clips. The Plain
  language clip now clicks a Revert that is on screen, and the Plan clip scrolls its checks higher.
- **The open panel always fills the row** to the slide's right margin, beside three 4u strips. Its
  height follows the clips' 2.1:1 shape, capped so a two-line caption fits; on a screen wider than
  16:9 the clip is trimmed at the bottom instead of leaving a gap. At 1600×900 the screen is
  1146×546 (was 1026×513) and the caption ends 40 px above the edge.
- **Captions are two rows again** (title, then one line). The Compass line is shortened to "From the
  Studio: how each of 14 frameworks is scored, and its source." The others fit unchanged.
- Clip URLs carry `?v=20261110` so browsers and Vercel fetch the new files.

## 2026-11-10 — Homepage slider down to four versions

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **15 h (Oct 17) removed.** Four versions remain: 0 h, 1 h, 10 h and 18 h, re-spaced so each
  scroll moves one. The hidden title reads "Four homepages in 18 hours." The screenshot stays in
  `img/home/`.

## 2026-11-10 — Homepage slider down to five versions

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Three versions removed from the slider:** 3 h (Oct 9, Sonia's version), 9 h and 12 h (Oct 16).
  Five remain: 0 h, 1 h, 10 h, 15 h and 18 h. Each scroll moves one version, with the screen,
  prompt and dots in step. Their screenshots stay in `img/home/`.
- The slide's hidden title (for screen readers and the chapter rail) now reads "Five homepages in
  18 hours."

## 2026-11-09 — "What we brought" hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The "What we brought" slide is hidden** (`hidden` on `#brought` in `presentation/index.html`).
  It no longer shows or gets a rail dot; the markup stays, so removing `hidden` brings it back.

## 2026-11-09 — AI certification: plain-language line under the title

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New line under "Certify the work, not the AI."** It now reads "A person signs off each screen
  as safe for patients, against:", with "safe for patients" highlighted like "not the AI." The old
  line ("This screen, this flow, this version: fit for purpose, under these conditions.") didn't
  read as a sentence; the new one fits on one row and leads into the list of seven standards below
  it (`presentation/index.html`).

## 2026-11-16 — Verification: the spreadsheet and the decision list are one slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`, PR #59) · GitHub Pages: updated from `master`

- **"AI drafted it. We reviewed it." is now a single slide** (`presentation/index.html`). Scrolling
  inside the spreadsheet scrolls it; a fresh scroll past its last row (WHO ERC, row 24) fades the
  sheet out and the five-column decision list (Keep · 7 … Cut · 9) in, in the same place, while the
  title stays still. Scrolling up returns to the sheet; a fresh scroll up from its top goes to the
  previous slide. Trackpad momentum on hitting either end never turns the slide by itself.
- **With keys or a clicker**, the first press glides the sheet to its last row and the next brings up
  the decision list. The separate decision-list slide (`#decided`) is gone.
- The sheet still pans across its columns by itself until someone scrolls, clicks or touches it.
- **The spreadsheet now looks like the deck.** The Excel frame (green bar, column letters, row numbers,
  sheet tabs) is gone; it is a plain dark table ruled like the decision list, in Public Sans, under a
  small "▦ framework-compass-library-review-v2.xlsx · 23 rows" tag. The header row has a gold
  underline, the frozen #, Framework and Full name columns end at a thin gold line, and each decision
  is a tag: solid gold for "Keep", gold outline for the rest. All 13 columns and 23 rows still scroll.
- **The decision list sits on the Standards exist card wall.** When the list comes up, the slide turns
  the same blue and the same drifting framework cards fade in behind it (no Nati post or CDC
  screenshot), under a wash that keeps the list readable and lifts toward the bottom so the rows show
  to the edge. `fw-rows.js` gains the 9 cut frameworks as cards (EQIP, Plain Language, PCORI, OPTION,
  CAHPS, NPS, Beryl PX, Planetree, SEIPS) for walls marked `data-cut`; their sources come from the old
  library in `analysis-engine.js` and are worth checking against the review sheet.
- **The cut frameworks grey out one by one,** about a second apart: each card turns charcoal, shrinks a
  little, its name is struck and its label reads "Cut", while the same name in the Cut column dims and
  is struck. Coming back from the next slide shows them all cut at once; stepping back to the sheet
  resets them. New credit: "Background: PRISM's 14 frameworks, and the 9 the review cut".
- **The card wall now sits on the deck's black, not blue.** A gradient is solid black behind the title
  and list and lifts toward the foot, where the white cards show; the title keeps the deck's usual
  yellow highlight.
- **Cut cards go hollow instead of charcoal.** Each cut card loses its white fill and keeps a thin light
  outline, faint text, a struck name and the "Cut" label, a little smaller; it shows on the black near
  the top and as a gap among the white cards near the foot.

## 2026-11-09 — Verification: the two "We reviewed it" slides flip cleanly

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **No ghost of the spreadsheet behind the decision list.** When the list had faded in over the
  spreadsheet, the spreadsheet slide then ran its own fade-and-slide out and showed through. It now
  hides at once while still covered (`presentation/index.html`).
- **Fast flipping no longer leaves a slide stuck underneath.** Moving on from either slide within
  0.7 s used to leave the spreadsheet showing under the next slide; the shared-title fade now
  settles first.
- **The shared title renders the same on both slides**, so its letters don't shimmer at the swap.
- **Going back from the decision list, the title stays still.** The spreadsheet underneath used to fade
  in while the list faded out, so the title dimmed mid-way; it is now there at once and only the list
  fades.
- **The spreadsheet's header row is frozen too.** The column letters and row 1 (#, Framework, Full
  name, Zone…) now stay at the top when the sheet scrolls down, like Freeze Panes in Excel, alongside
  the frozen first columns.
- **The decision list's headings each fit on one row:** "With conditions" is now "With caveats" and
  "Depends on scope" is now "If in scope"; headings no longer wrap, and the two-line space they kept
  is gone.

## 2026-11-09 — "Intent first" moves after AI certification; text appears by block

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The thesis slide ("Intent first. Build fast. Iterate.") now comes after AI certification**,
  just before "What's your view on our approach?" (`presentation/index.html`).
- **Text appears a block at a time, not line by line.** On the thesis slide the three rows come in
  together, then "AI gives you the average. You're the designer." On AI certification the title,
  the description and the standards line come in together, then "The responsibility didn't." last.

## 2026-11-09 — Homepage slider: three type styles, no hours on the timeline, bigger screen

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Three type styles in the left column:** serif for the stat numbers, white sans for the prompt
  and the stat labels, grey sans at the same size for one credit line ("Chloe · 10 h · Oct 16").
  The yellow uppercase tag and the italic serif quote are gone, and every prompt is one size.
- **No hours on the timeline.** The labels and the hour on the handle are hidden. The timeline is
  a slim row of dots, and the credit line names the hour.
- **Bigger screen:** 1084x678 at 1600x900 (was 1028x643), because the left column is narrower
  (17u, was 20u). The prompt's first line sits level with the screen's top edge, and the stats end
  level with its bottom edge.

## 2026-11-09 — Homepage slider: the prompt behind each version; timeline above the screen

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Each version shows the prompt that led to it.** It fades in and out with its screen, under a
  yellow "My prompt · 12 h" tag with "Chloe, Oct 16" below. The prompts are quoted from Chloe's Claude
  Code sessions (9 h, 10 h, 12 h, 15 h, 18 h). Claude Code had deleted the 0 h and 1 h sessions
  after 30 days, so those prompts are written to match the screens and Chloe's way of typing. 3 h,
  Sonia's version, is tagged "Prompt · 3 h" and credited to Sonia. The 0 h and 10 h prompts are long,
  so they're set at the smaller quote size to keep the stats level with the screen's bottom.
- **The hour timeline runs above the screen**, with every hour labelled. The handle's hour covers
  its label, and the ends are pulled in so the handle stays within the screen's width.
- **Left column:** the quote starts level with the top of the screen and the stats end level with
  its bottom. The longest quote (10 h) is set a little smaller. The screen stays a whole 16:10 shot.

## 2026-11-09 — Homepage slider: whole screen, build stats in the left column; 29 hours slide hidden

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The homepage screen shows whole.** It was cropped about 25% on the right, because a near-square
  box was filled with a 16:10 shot. The box is now 16:10 and as large as fits inside the slide
  margins: 1028x643 px at 1600x900. The left column runs from the screen's top edge to its bottom
  edge.
- **Build stats replace the title.** "Eight homepages in 18 hours. / Drag through every version."
  gives way to the ledger from the next slide (131 commits, 23 sittings, 23M tokens, 0 developers)
  above the upright hour slider. The title is still there for screen readers and the chapter rail.
- **The 29 hours slide ("The proof") is hidden.** Its section is marked `hidden`, and the deck
  leaves hidden slides out (13 slides now). Remove `hidden` to bring it back.

## 2026-11-09 — Feature slides: slimmer strips, bigger open screen; Frameworks and Drop or paste swap

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Closed panels are slim strips and the open screen is bigger.** The open panel now takes the
  row's width less three ~4u strips, capped so the 2:1 video and its caption still fit the screen
  height. At 1600x900 (16:9) the screen is 1093 px wide (was 960) and strips are 82 px (were 126);
  at 1440x900 (16:10) strips are the full 4u slim (58 px). Caption bottom sits 40 px above the
  screen edge at 16:9.
- **Strips stay 4u on every screen shape.** In a browser window wider than 16:9 (e.g. 1920x960)
  the screen is height-limited and the strips had been taking the spare width (181 px each); now
  they stay 4u (68 px there, 64 px at 1600x900) and the row ends short of the right margin instead.
- **Long captions break onto two lines** so none is cut off by the narrower panel: Plain language
  (after "or apply all."), Images (after "alt text,") and Framework Compass (after "the Studio:").
  The screen's height budget now allows a two-line caption, so at 16:9 the open screen is 1026 px
  (was 960 before this round) and the two-line caption ends 24 px above the screen edge.
- **Frameworks is now feature 3** on "Bring your draft." and **Drop or paste is feature 6** on
  "Check it, or plan it." Strip numbers are renumbered to match.

## 2026-11-08 — Logo opening on Meet PRISM; one title across Verification; one-line captions

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Meet PRISM opens with the PRISM logo.** The first time the slide comes up, the logo plays its
  scan large in the middle, then shrinks into a small PRISM logo that now sits above "For health
  handouts, posters and web pages", while the page rises in. It plays once per showing of the deck
  (off with reduced motion). Slide-only: the app's own front door is unchanged.
- **The decisions slide keeps the spreadsheet’s title,** "AI drafted it. We reviewed it." Moving
  between the two, neither slide moves and only the content under the title changes (both carry
  `data-title="verify"`).
- **Feature captions stay on one line** on slides (the longest, the Framework Compass one, is 1479 of
  1684 px at 1080p).
- **The homepage screen no longer runs off the right edge;** it stops at the slide’s right margin,
  cropped from the right.

## 2026-11-08 — Homepage slider: "Eight homepages in 18 hours.", upright slider, bigger screen

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New title and line:** "Eight homepages in 18 hours." / "Drag through every version." (was
  "Scores aren’t enough." and the Jul 31 description).
- **Hours instead of dates:** each version is labelled with the hours of building before it
  (0, 1, 3, 9, 10, 12, 15, 18 h), counted from commit times the same way as the 29-hours slide
  (commits under 2 hours apart are one sitting, plus 30 minutes each).
- **Layout B1:** title, line and an upright slider share a left column; every hour is labelled and
  the current one rides on the grip. Drag up and down; release snaps to the nearest version.
- **Bigger screen:** the homepage fills the right side at full slide height and runs off the right
  edge (about 1.4× the old size). Phones keep a horizontal slider above the screen.

## 2026-11-08 — Verification spreadsheet runs to the bottom of the slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- The Excel window on "AI drafted it. We reviewed it." now fills from under the title to the bottom
  edge of the slide (13 rows visible at 1080p instead of about 6); the sheet tabs sit on the edge.

## 2026-11-08 — Decisions and Verification slides: source notes removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- Removed the footer line ("Source: Framework Compass library review, v2. …") from
  "32 frameworks. 32 human calls." and from the spreadsheet slide "AI drafted it. We reviewed it."

## 2026-11-08 — Top titles share one height; spreadsheet header row back to normal

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Every title at the top of a slide now starts on the same line** (86 px down at 1080p). "Scores
  aren’t enough." sat 56 px lower because it was aligned to the bottom of its three-line description;
  Verification sat lower because its content was centred. Both are now pinned like the others.
- The spreadsheet’s row 1 no longer sticks while scrolling (it slid over the frozen columns);
  columns A to C, the column letters and the row numbers still stay put.

## 2026-11-08 — Review spreadsheet: columns A to C frozen

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **#, Framework and Full name stay in place** while the sheet scrolls or pans sideways, with a darker
  line after column C, like frozen panes in Excel. The column letters and row numbers stay put too.

## 2026-11-08 — Homepage slider down to 8 versions

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Dot 7 removed** (an Oct 17 version, `img/home/14.jpg` deleted), leaving 8.

## 2026-11-08 — Slides: one title size

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **Every slide title is now 115px on a 1920×1080 projector** (`--fs-title`, 6 units). Before, titles ran
  100–173px: 127px on most slides, 104px on The updates, Verification and Your turn, 100px on AI
  certification, and 173px for the analogy line. The per-slide size overrides are gone. Phones keep
  the display size.
- **Your turn:** the headline column is wider (1.5 to 1 instead of 1.15 to 1), so "What's your view on
  our approach?" stays on two lines and the contact card no longer runs off the foot of the slide.
- The PRISM wordmark and the big numbers on The proof keep the larger hero size.

## 2026-11-08 — Meet PRISM shows the real front door

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The Meet PRISM slide is now the PRISM landing page itself**, loaded from `../index.html?intro`
  in a frame that fills the slide, with its top bar (logo, countdown, Pause, Skip) hidden. The
  countdown is paused so it never hands off to the Studio. The handout’s fixes step through by
  themselves while the slide is up, and stop if someone drags the slider. Wheel and arrow keys over
  the page still turn slides. The old title, line, link and studio screenshot are gone.

## 2026-11-08 — Homepage slider follows the pointer, then snaps

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Dragging the handle moves it smoothly with the pointer,** and the screens crossfade in step with it.
  On release (or on a plain click) it glides to the nearest version in about 0.3 s and stays there.

## 2026-11-08 — Homepage slider down to 9 versions

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Seven more versions removed** (dots 4, 6, 7, 9, 13, 14 and 15), leaving 9; their images are deleted
  from `img/home/`.

## 2026-11-08 — Homepage slider: grab handle with the date on it

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The slider handle is a wide yellow grip** (three lines, grab cursor) and the date rides on it in
  a small tag, so the date tag on the screen itself is gone. Screens still crossfade.
- **The handle nudges right and back when the slide opens**, to show it can be dragged.
- **More room between the title and the slider;** the Jul 31 and Oct 19 end labels are gone, since
  the date now rides on the handle.

## 2026-11-08 — Frameworks clip by area; Compass expanders stay put; slider trimmed to 16

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Frameworks panel plays a longer clip** (`media/loops/6-frameworks-area.mp4`, 21 s, replaces
  `6-frameworks.mp4`): sorts the list By area and scrolls through every area, ticks CCI, closes the
  list, then the cards: Readability collapses, the CCI card scrolls through its items, Readability opens.
- **Framework Compass: "How it’s scored" and "All references" no longer jump** when opened
  (`framework-compass.html`). They are now buttons that stay in the row; what they open appears
  full width under it. The Compass clip (`7-compass-studio.mp4`) is re-recorded with the fix.
  *Not pushed: `framework-compass.html` also holds the unpushed Oct 27 app work, so it stays local.*
- **Homepage slider: four versions removed** (dots 3, 5, 6 and 7), leaving 16, and the footer note
  under the slide is gone.

## 2026-11-08 — Compass clip starts in the Studio

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The Framework Compass panel shows how to get there** (`media/loops/7-compass-studio.mp4`, 14 s,
  replaces `7-compass.mp4`): it starts in the Studio, clicks Framework Compass in the top bar, the
  Compass opens in place, then scrolls to PEMAT-A/V and opens All references and How it’s scored.
  The camera is wider than before so the top bar stays in view.
- Caption: "One click from the Studio: how each of 14 frameworks is scored, with its source."

## 2026-11-08 — Slides: one framework count, 14

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **The Frameworks feature caption now says 14**, matching the Framework Compass: "Pick from 14
  published frameworks, grouped by area." It said 11, the number Evaluate a draft offers; Plan from an
  idea adds HBM, TTM and WHO ERC, so all 14 are usable across the two.

## 2026-11-08 — Homepage slider ends Oct 19; closed feature panels get round corners

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The homepage slider stops at Oct 19** with 20 versions; the last four (the later front door
  versions) are gone, and their images removed from `img/home/`.
- **Closed feature panels have a rounded bottom-right corner.** The panel is narrower than its
  video, so the white video showed a square corner there.

## 2026-11-08 — Plain language clip: every way to apply a fix, History and Revert

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Panel 4 on "Bring your draft." plays a longer clip** (`media/loops/4-fixes.mp4`, 19 s, replaces
  `4-checks.mp4`), recorded the same way as the other loops (same window, no zoom, drawn cursor):
  hard words are highlighted; one rewrite is applied from its card; "Various" is retyped as "Many"
  right in the text; Apply all fixes the rest; History opens with every change listed; Revert brings
  back the handout as first loaded, highlights and all.
- Caption: "Fix one, edit in the text, or apply all. Revert any change from History."

## 2026-11-08 — Slides: a Meet PRISM intro before the demo

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **New slide before "Bring your draft."** The PRISM wordmark with its yellow highlighter on the I,
  "A patient education analyzer.", one line on what it does, and the live address. A real studio
  screenshot fades in on the right; phones hide it. The deck is 14 slides.

## 2026-11-08 — Slides: "Not everything worked" removed

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **Removed the What went wrong slide** ("Not everything worked.": the Design, Facts and Bugs cards,
  and "Claude sounds sure when it’s wrong. Check everything."). The proof now leads straight into
  the thesis, and the deck is 13 slides. Its styles are shared with other slides, so they stay.

## 2026-11-08 — Homepage stepper becomes a slider above the screen

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The row of dots on "Scores aren’t enough." is now a slider, and sits above the homepage screen.**
  Drag the yellow handle or click anywhere on it to jump straight to that version; scrolling and the
  arrow keys still step one version at a time.

## 2026-11-08 — Verification leads into AI certification

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Verification and its summary moved** to sit right before AI certification. The order is now:
  … The updates → The proof → What went wrong → The thesis → Verification (spreadsheet) →
  "32 frameworks. 32 human calls." → AI certification → Your turn.

## 2026-11-08 — Verification summary slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New slide after the review spreadsheet: "32 frameworks. 32 human calls."** All 32 frameworks
  from the v2 review, in five columns by decision: Keep 7, With conditions 8, Brought back 4,
  Depends on scope 4, Cut 9 (struck through). Text appears at once, with no animation.

## 2026-11-08 — Review spreadsheet scrolls by hand

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The spreadsheet on Verification scrolls left, right, up and down.** A wheel or trackpad gesture
  over the sheet scrolls the sheet instead of turning the slide; anywhere else on the slide, and the
  arrow keys or a clicker, still move to the next slide. Column letters and row numbers stay pinned.
- **It still pans by itself** across the columns and back when the slide opens, and stops the moment
  someone wheels, drags or touches it.

## 2026-11-08 — Your turn: split left and right

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The closing slide is split in two.** The question sits top left with the GoInvo card (Try PRISM,
  Feedback) under it; What’s next runs down the right half. The card’s bottom edge lines up with the
  last line of the list, and "Thank you. What’s next:" sits on the same baseline as the question’s
  last line. On narrow screens it still stacks.

## 2026-11-08 — Four feature clips re-recorded wider, with scrolling

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Plain language (7.4 s)** is framed wider so the draft, Readability and the Plain language
  module all show. Hard words light up, then a suggested fix is applied and the long sentence
  splits in the draft, and the list moves to the next suggestion (cited to PEMAT-P item 4).
  Its caption now reads “Flags hard words, suggests fixes, shows the grade.”
- **Images (9.6 s)** shows all three modules: alt text is typed, the Alt text card folds away,
  two palette colours get a contrast result, and the poster switches to deuteranopia, then greyscale.
- **Frameworks (10.2 s)** is full width. The sort menu opens with its four options (drawn over
  the page, since the recorder can't capture the browser's own menu), sorts by name, scrolls
  through all 11, regroups by area and ticks CCI. The extra clicks are gone.
- **Framework Compass (9.4 s)** scrolls down to PEMAT-A/V and highlights its source link, its
  full citation under All references, and its formula under How it's scored.
- **Plain language clip redone (9.9 s) to match how PRISM works:** the highlights are already on when
  the draft opens (the earlier one-by-one reveal was staged). Three suggestions are then applied in
  turn: the long sentence splits, “hypertension” becomes “high blood pressure”, and “myocardial
  infarction” becomes “heart attack”. The grade goes from 4.3 to 4.1.
- **The “Screen recordings of PRISM” credit line is gone** from both feature slides, at your request.
- **Drop or paste caption** drops “or image”: “Word, PDF or text opens as an editable draft.”

## 2026-11-08 — Homepage stepper, the real review sheet, sharper feature captions

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **"Scores aren’t enough." steps through every homepage version.** 24 screenshots, one for each
  commit that visibly changed `index.html` from Jul 31 to Nov 4, rebuilt from git and saved in
  `img/home/`. Each scroll moves one version; a row of 24 evenly spaced dots fills as you go, and
  the next scroll after the last version moves on to the next slide. The old two-image slider is gone.
- **Verification shows the real spreadsheet.** The Library tab of the v2 review (23 frameworks, all
  13 columns) is drawn as an Excel window from the file’s own cells, and pans slowly from column A
  to M and back while the slide is up. The four count-up numbers and the closing line are gone.
- **Feature captions say what each feature does,** with the repeated and filler phrases cut, and
  the Plan caption now describes the feature instead of quoting Nati.
- **Rail dots are evenly spaced;** the extra gap before each new chapter is gone.

## 2026-11-08 — Title retype removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Titles no longer retype** (`presentation/index.html`). The backspace-and-retype transition
  is gone (its CSS, script and the camera-phone slide's `data-rt-with`). Titles fade in with the
  rest of the slide again, 160 ms after it opens. `titleOf` and `plain` stay because the rail
  labels each dot with its slide's title. The titles' shared 86px starting height stays too.

## 2026-11-08 — Your turn: everything shows at once

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The closing slide no longer animates its text.** The question, the What’s next list, the
  PRISM and feedback card and the licence line are all there the moment the slide opens.

## 2026-11-08 — "Three tests" and "Make room to grow" slides removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Removed two slides** from `presentation/index.html`: "Every framework had to pass three tests"
  (`#decided`) and the "Make room to grow." before/after (`#then-2`). "Scores aren’t enough." now
  leads straight to Verification. The images they used stay in the repo.

## 2026-11-08 — "Check the math" slide removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Removed the "Check the math." before/after slide** (`#then-6`, the readability grade pair) from
  `presentation/index.html`. Human review now leads straight to The proof. The screenshots
  `img/ba-grade-before.jpg` and `img/ba-grade-after.jpg` stay in the repo, unused.

## 2026-11-08 — Titles hold one height; one rail dot per slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Top titles start at one height** (`presentation/index.html`). The seven slides whose title
  sits at the top (What we brought, both PRISM slides, the three before/afters, the closing
  question) are marked `.pin`: their title starts 8% down the screen (86px at 1080) instead of
  wherever centring put it (67–103px), so a retyped title stays in place. The centred statement
  slides keep their layout.
- **The rail has a dot for every slide**, not one per chapter, so it can step to any slide. A
  small gap marks where a chapter starts, and hovering shows the slide's title.
- **Each dot's click target is the dot plus 8px around it.** The hidden label no longer
  catches clicks, which had made the whole ~200px row clickable.

## 2026-11-08 — Slide titles retype

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Going forward, each slide's title is retyped** (`presentation/index.html`). The new slide
  opens with the previous slide's title in its place, deletes it letter by letter, then types
  its own behind a yellow caret. The rest of the slide plays once the title is done.
  - Timing: 16 ms per letter to delete, a 150 ms pause, 38 ms per letter to type. A typical
    change takes about 1–1.5 seconds.
  - Titles are the headline on each slide (`.title h1`, `.h2`, `.big-line`, the question and
    the closing question). Slides without one (The proof, the walkthrough) type the next title
    from blank.
  - The title is held at its finished size while it types, so lines break where they end up.
    Highlighted words get their highlight as they are typed.
  - On the camera-phone slide, the setup line shows while its punchline types
    (`data-rt-with`), since it reads first.
  - Pressing next during typing finishes the slide and moves on. Going back shows titles at
    once. With reduced motion, titles appear without typing.

## 2026-11-08 — Slides: a refresh keeps your place

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Refreshing the slides reopens the slide you were on** (`presentation/index.html`). The
  current slide is remembered in this browser only (`localStorage`, key `prism-talk-slide`);
  the address stays `/presentation/`.
- **Home** goes back to the title slide, and that is remembered too.
- A slide named in the address (e.g. `#voices`) still wins over the remembered one.
- The slide plays in again as it does when you arrive on it; the walkthrough reopens at its start.
- **Note:** opening the deck again later in the same browser also lands on the last slide, so
  press Home before the talk.

## 2026-11-08 — Slide 2 gets a Framework Compass panel; longer Frameworks clip; Plan shows the checks

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Check it, or plan it.** now has four panels: Images, Frameworks, Framework Compass (new) and
  Plan (`presentation/index.html`).
- **Frameworks** (`media/loops/6-frameworks.mp4`, 9.4 s): points to "11 frameworks", shows the
  groups, re-sorts by name and then by area, then ticks CCI and PEMAT-P into the bar. Caption:
  "11 frameworks, grouped and sorted. Tick what you need."
- **Framework Compass** (`media/loops/7-compass.mp4`, new): the page with its 14 frameworks; a
  search for "video" narrows it to PEMAT-A/V and opens How it's scored. Caption: "How each
  framework is scored, and its source."
- **Plan from an idea** (`media/loops/8-plan.mp4`, replaces `7-plan`): starts on a filled-in
  video storyboard (what's shown, said and on screen for all five scenes), then ticks three
  scene checks, each citing its framework item (CDC IDD/ELL 4, PEMAT-A/V 10, PEMAT-A/V 22).
- **Rounded strips:** each panel is now clipped to rounded corners, so the closed strips no
  longer show a square white corner under the dimmed overlay.
- The section now runs about 3:55 (the Compass panel and the longer Frameworks clip add about 20 s).

## 2026-11-08 — Feature clips: drop and images re-recorded; playback retries

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Drop or paste** (`media/loops/3-drop.mp4`): the dragged Word file now starts inside the
  frame instead of half off its right edge, so the first frame already shows what's happening.
- **Images** (`media/loops/5-images.mp4`): the colour-blind buttons were below the frame, so
  their clicks happened out of view. The card column is now scrolled so the contrast check
  (5.81:1, picked before the clip starts) and the colour-blind buttons are both in frame; the
  poster switches to Deuteranopia, then Greyscale. Caption: "Contrast, colour-blind views and
  alt text."
- **Playback retries** (`presentation/index.html`, `playClip()`): if a clip hasn't loaded when
  its panel opens, it plays once it can; if it still hasn't started after 1.2 s, it reloads
  and tries again.

## 2026-11-08 — Feature clips play once; panels clickable; rounder corners; smaller active dot

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Feature clips play once and stop on the result** (`presentation/media/loops/*.mp4`). The
  0.35 s fade back to the first frame was trimmed off, and the videos no longer loop. Each
  replays from the start when its panel opens again.
- **Every feature panel is clickable** (`presentation/index.html`). A click, or Enter on a
  focused panel, opens that feature directly; the panels glide over in 0.55 s. Clicking the
  open panel replays its clip. The arrow keys and scrolling still step through them in order.
- **Video corners are round again.** Chrome drew square corners on playing videos, so each
  video now sits in a clipped, rounded frame (`.fp-v`).
- **Chapter dots:** the current dot grows to 110% instead of 135%.
- Panel 4's caption is now "Hard words are flagged, with a reading grade." so it fits on one line.

## 2026-11-08 — Middle of the talk reworked: features, decisions, updates, verification

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New order after the analogy** (`presentation/index.html`), about 3:35 to present:
  1. **What PRISM does, slide 1 ("Bring your draft."):** four panels, Private, Brief, Drop or
     paste, Plain language.
  2. **What PRISM does, slide 2 ("Check it, or plan it."):** three panels, Images, Frameworks,
     Plan from an idea. Plan's caption is Nati's "Most people start with copy only."
  3. **How we decided (new):** three tests every framework had to pass (material only,
     documents, our formats), closing on "26 frameworks became 14."
  4. **The updates:** Scores aren't enough; Make room to grow.
  5. **Verification:** AI drafted it, we reviewed it (Sonia's spreadsheet); Check the math.
  6. **The proof:** unchanged, with its numbers and office background, now closing the section.
- **Expanding panels:** each click opens the next panel. The open panel plays its loop; the
  others shrink to dimmed strips with their names and pause. Phones stack the panels.
- **Seven loops** in `presentation/media/loops/` (MP4 plus a still, 2.1 MB in all), recorded
  with headless Chrome from the current Studio in light mode. Every loop is under 5 seconds,
  uses the same camera distance (a fixed 960×480 window of the 1440×900 app, at 2×) and never
  zooms or pans. A drawn cursor with a yellow click ring shows each action, and the last
  0.35 s fades back to the first frame so the loop restarts without a jump.
- **Out of the deck:** the PRISM overview, the walkthrough, Real voices, and the before/afters
  Start where they start, Keep only what's sourced (now a line on How we decided) and Quote,
  don't paraphrase. Their files stay in the repo; `walkthrough.js` no longer loads.
- **Refresh keeps your slide:** the address changes to the current slide (`#features`,
  `#decided`…), so a reload opens it again.
- Checked at 1920×1080: each panel step, every new slide, the address on each slide change,
  no console errors.

## 2026-11-08 — Then and now becomes six before/after slides

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Six slides replace the one Aug 17 vs. today slide** (`presentation/index.html`), all in the
  same template: a headline that says why the change was made, a line on what changed, and the
  wipe between before and after. They sit in The proof, after the numbers.
  1. **Scores aren't enough.** The first tool (Jul 31) gave three scores; PRISM (Oct 28) shows
     what to fix, and why.
  2. **Make room to grow.** The side panel broke at 26 frameworks; Sonia's Sep 15 prototype
     made it a bar on top.
  3. **Start where they start.** After Nati's interview, Plan went from a blank editor to a
     guided path (Oct 17).
  4. **Keep only what's sourced.** 26 frameworks became 14, each linked to its source.
  5. **Quote, don't paraphrase.** Claude had reworded CDC's CCI checklist; since Oct 16 every
     item is CDC's own wording.
  6. **Check the math.** Headings counted as sentences, so a grade 4.3 handout read as 2.7
     (fixed Oct 27).
- **New screenshots** in `presentation/img/ba-*.jpg`, taken with headless Chrome from the code
  before and after each change: `f7cf84c` / `c2cc437` (Plan), `19f5989~1` / `19f5989` (CCI),
  and the last commit / the working tree (grade, both scoring today's sample handout). The CCI
  and grade pairs are close crops of their card, so their wipe runs all the way across
  (`--stop:1`); the others stop halfway as before. Each wipe can still be dragged.
- A one-slide version that stepped through all six pairs was tried first and replaced before
  it was deployed.
- **Real voices:** the "Three days later" card is gone, since slide 3 now tells that story.
- **To check:** the grade fix (Oct 27) is still only in the working tree, not on Production.

## 2026-11-05 — What we brought: art left, text panel right

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New layout for slide 3** (`presentation/index.html`): the hands video fills the left 59% of the slide,
  zoomed in with the fingertips at its centre and no dark wash over it. The title, text and source line
  sit in a dark panel on the right. The two cards are gone, replaced by a blue and a yellow side rule.
- **Copy:** each person's name and first line merge, as "Sonia: the framework idea" and
  "Chloe: AI fluency, open source". The rest of the wording is unchanged.
- **Phones** stack the title, art and text. A centred letterbox version was tried first and replaced
  before it was deployed.

## 2026-11-08 — What we brought: new flower clip that grows once

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **New Veo clip** (`media/bg/creation-of-adam-grow.mp4`): vines start at both hands, wrap up the arms
  and bloom into lilies, roses and blue flowers in about 5 seconds. It plays once and holds in full
  bloom, starting over on each visit. Silent, enlarged from 1280 x 720 to 1920 x 1080. Rebuilt from
  Chloe's newer version of the clip, which adds lilies to the right arm and blooms by about 6 seconds.
- **Wider framing:** the clip now fills the art panel instead of zooming in on the hands, so the flowers
  along both arms show.
- **Fixed overlap:** "Each knew what the other didn't" ran into the source line at 1280 x 720. The art
  panel is a little narrower (55% of the width instead of 59%) and the source line is shorter.

## 2026-11-05 — Last slide: dotted paper background

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Animated dot grid** (`presentation/dot-bg.js`): a faint dotted paper grid sits behind the last slide,
  and soft patches of brighter dots bloom at random spots, then fade. It runs only while the slide is on
  screen and stays a plain faint grid for people who prefer reduced motion.
- **Test page:** `design/brainstorm/dot-grid-options.html` holds the six animation options.

## 2026-11-05 — Last slide ends on a question

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The huge "Thank you." is replaced** by "What’s your view on our approach?" at headline size, to open
  the Q&A. "Thank you" moves to a small line above the next steps, and the slide's menu name is now
  Your turn. The next steps and the PRISM card stay up during questions.
- **Simpler card:** it now holds only Try PRISM and Feedback, at one size. GitHub, the licences and the
  event move to a single fine-print line at the bottom, like the source lines on other slides.

## 2026-11-05 — Slides: never more than 4 type treatments

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **One rule for every slide:** a serif headline, sans at one size for everything else, and fine print
  for sources. Rows now differ only by white or grey. Uppercase tags, italic lines, mid-size serif
  subheads and bold are gone, so no slide uses more than 4 treatments (it was up to 6).
- **Why:** rows with a different treatment each read as noise, worst on Thank you and What we brought.
- **The proof:** the ledger numbers now match the headline size, and their column is wider so "23M"
  clears "tokens".
- **Thank you:** the card's spacing is tighter so it stays on screen.

## 2026-11-05 — AI certification: the illustration moves

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New background video** (`media/bg/ai-certification-loop.mp4`): Chloe's illustration animated with Veo
  replaces the still image. The clip's start and end don't match, so it plays forward, then in reverse,
  and never jumps. It is silent, 20 seconds and 7 MB.
- **Enlarged from 1280 x 720 to 1920 x 1080** to match the other clips, so it looks a little softer than
  the still did.
- **Source line** now credits the animation to Veo (Google Gemini).

## 2026-11-05 — Slides: tag and fine print match at 22px

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Tags and fine print are now one size:** 22px on a 1920×1080 projector (fine print was about 21px).
  Both still scale with the screen like the rest of the type, because a fixed 22px clipped the Thank
  you slide at 1280×720. Phones stay at 12px.

## 2026-11-05 — The proof: numbers in a ledger, recounted

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The stat row becomes a ledger.** The big hours number sits on the left, with four ruled rows
  beside it, so the numbers line up in one column and the uneven gaps are gone.
- **Numbers recounted from the repo:** 29 hours (was 27), 131 commits (was 123), 23 sittings (was 21).
  The line under the hours now reads "of building, over 16 days."
- **The dark wash over the video is a little stronger,** since the numbers now sit over the bright windows.
- **The footer is one row,** with the hours and token notes cut down and the video credit joined on.
- **"10+ frameworks" is off this slide;** the deck gives different counts, so it waits for a decision.

## 2026-11-05 — Camera phones slide: headline in three rows

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The headline drops from four rows to three.** "Camera phones didn’t end photography." is a small
  italic line, then "They made everyone a photographer." runs over two big rows, larger than any
  other headline, with the highlight on "everyone". On a phone it wraps freely.

## 2026-11-05 — The proof gets days racing by; slide 2 plays once

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The 27 hours slide has a moving background** (`media/bg/office-days.mp4`): an office where a full
  day passes every 5 seconds, sun crossing the floor, the lamp coming on at night, and real code from
  `napkin.js` typing on the monitor. It loops with no visible join, and a dark wash keeps the numbers
  readable. The room is a Nano Banana image; the days and code are animated in code.
- **Slide 2 no longer loops.** The clip plays once when the slide opens, stops on the full pile, and
  starts over on each return to the slide. It stays sharp, with no blur on the leaflets.

## 2026-11-05 — Slide 3: new flower clip with much less zoom

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New Veo clip** (`media/bg/creation-of-adam-bloom.mp4`): vines grow along both arms from the bare
  painting into full bloom, then play in reverse. It is silent, 20 seconds and 14 MB.
- **Sharper on the slide:** the hands are already high in the frame, so the zoom drops from 1.28x to
  1.06x.

## 2026-11-04 — AI certification: illustration fills the slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The illustration now bleeds across the whole slide** and is simply there when the slide opens: the
  left-to-right wipe and the seal pop are gone. A lighter dark fade sits behind the text, so the scroll
  shows through.

## 2026-11-04 — Slides: Human review

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New slide between The thesis and AI certification.** "AI drafted it. We reviewed it." with counts from
  the Framework Compass library review v2: 32 frameworks (23 kept, 9 cut), 11 flagged to verify, 6 open
  decisions. The numbers count up. It leads into certification as the human check on AI.
- **Recheck the numbers** against the Google Sheet. They come from the local v2 file.

## 2026-11-04 — Slides 2 and 3: clips play forward, then in reverse

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The loops now run A to B to A.** Each clip plays through, then plays backwards to its first frame,
  so it never jumps or fades back to the start. Each loop is 20 seconds and about 8.7 MB, still silent.

## 2026-11-04 — AI certification: illustration credited to Chloe

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The source line now credits Chloe Ma alone** and links the GoInvo article, Human-Assisted AI
  Design Certification for Healthcare.

## 2026-11-04 — New AI-generated backgrounds on slides 2, 3 and AI certification

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 2 (A confession):** the Pexels clip is replaced by `media/bg/handoffs-loop.mp4`, handouts
  landing on a clinic desk until they pile up. The dark wash is a little lighter.
- **Slide 3 (What we brought):** the zoom on the painting is replaced by
  `media/bg/creation-of-adam-loop.mp4`, flowers growing around the two hands. The clip sits higher, so
  the fingertips show between the headline and the cards.
- **Both clips are silent** (audio track removed) and enlarged to 1920 x 1080. Each holds its last
  frame for 2.5 seconds, then fades back to its first frame, so the 13.5-second loop has no jump.
- **AI certification:** `media/bg/ai-certification-2.webp` now fills the whole slide, with the text on
  a dark fade below it. The headline is a little smaller and the lead fits on one line. This also
  fixes the slide's image path, which pointed at a file that had moved.
- **Source lines updated** on all three slides: Veo (Google Gemini) for the two videos, Nano Banana for
  the illustration.

## 2026-11-04 — Welcome slide: the napkin sketch loops

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The napkin now loops while the welcome slide is showing.** After the click, the finished sketch
  holds for 3 seconds, fades off the napkin, and draws itself again, about every 11.5 seconds. It
  stops when you leave the slide. People who prefer reduced motion still see the finished sketch.

## 2026-11-04 — Slide 2: sharper video

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The clinic clip is re-cut from the Pexels original** (1920 x 1080 is the largest Pexels offers).
  Less zoom (1.45x, was 1.6x), about three times the bitrate (3.8 Mbps, was 1.3), and adaptive
  sharpening with a little more contrast. The file is 7.4 MB, up from 2.5 MB.
- **Playback fix:** the first re-cut used heavy encoder settings (H.264 level 5.0), and the video was
  reported as not moving. It is now level 4.1, and clips retry playing once they have loaded.
- **The wash now fades out on the right**, so the pamphlet and hands aren't greyed over. The text
  side stays as dark as before.

## 2026-11-04 — Slides: footers in one spot

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Title slide portraits:** round photos of Sonia and Chloe, cropped so their heads match.
- **Title slide:** names side by side with class years in brackets, job titles below them, and
  the footer as three lines (feedback email, licences, background credit). The byline is gone. The event line and the third-party video sentence are gone from this slide.
- **What went wrong:** the highlight on "worked." is gone.
- **The proof's footnote now sits at the foot of the slide,** in the same place as the media credits
  on the other slides.
- **All footers sit lower,** close to the bottom edge, with clear space above them. The title slide's
  footer now uses the same spot.

## 2026-11-04 — Slides: take-home rewritten; new AI certification slide

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The thesis** keeps Intent first, Build fast and Iterate, with new lines from the talk script. It
  closes on "AI gives you the average. You're the designer."
- **New slide before Thank you: AI certification.** "Certify the work, not the AI", fit for purpose
  under stated conditions, and the shared standard. "We" means designers who create with AI. It
  closes on "The barrier dropped. The responsibility didn't."
- **Animated illustration** (`presentation/img/ai-certification.webp`): it draws in left to right along
  the ribbon, then the seal lands. The slide plays over 4.5 seconds (`data-dur`).
- **Still to do:** the illustration credit on the slide is a placeholder.

## 2026-11-04 — The proof: numbers count up

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **27, 123, 21 and 10+ now count up from 0** as the slide plays (`data-count` on the number). The
  0 developers stays at 0. Going back to the slide shows the final numbers.
- **New stat: 23M tokens.** From the Claude Code logs on Chloe's machine, Aug 17 to Nov 4: input,
  output and cache writes (22.8M). Cache re-reads are left out (1.2B with them), and so are Sonia's
  usage and anything before Aug 17. The footnote says so. **Recount before the talk.**

## 2026-11-04 — Slides: What we brought

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New slide after A confession.** Sonia brought the framework idea and had never used Claude or
  tools like it. Chloe brought AI fluency and open source and had never heard of these frameworks.
  It closes on "Each knew what the other didn't." The deck is 12 slides again.
- **Background:** a 20-second looping slow zoom on the hands in Michelangelo's *The Creation of Adam*
  (`presentation/media/bg/creation-of-adam.mp4`, 3 MB, made from the public-domain image on
  Wikimedia Commons), with Sonia's side under Adam and Chloe's under God's hand. The source is
  credited at the foot of the slide. `question-bg.js` now runs every slide's background clip.

## 2026-11-04 — PRISM goes open source: Apache 2.0 for code, CC BY 4.0 for designs

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`)

- **New `LICENSE`:** the standard Apache 2.0 text, unchanged, so GitHub detects it.
- **New `NOTICE`:** the copyright line (Chloe Ma, Sonia Seto, and GoInvo), what each license
  covers, and what neither covers: framework text, the Canadian healthcare charter PDF, the GoInvo
  logo, trademark rights in the PRISM name and logo, and the YouTube video on slide 3.
- **Slides:** the welcome and thank-you lines now read "Code licensed under Apache 2.0. Designs
  licensed under Creative Commons Attribution 4.0."
- **About panel:** a new License section under Feedback.
- **Why two licenses:** Apache is written for software, and CC BY suits slides and images. It also
  keeps the CC BY line the slides already carried.

## 2026-11-04 — Slides: The catch removed

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Removed The catch** ("We each knew half", the Sonia and Chloe cards, "Claude wrote the code. We
  made the calls."). The analogy now leads straight into The proof, and the deck is 11 slides. Its
  styles are gone too.

## 2026-11-04 — Slide 2 plays a clinic clip; slides name their media sources

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 2 ("Did my visual actually make a difference?") has a full-bleed video:** a doctor using
  a printed diabetes pamphlet, from Pexels ("A Doctor Pointing at a Pamphlet" by Pavel Danilyuk).
  - Cropped so the pamphlet sits right of the text, with the first 2 seconds trimmed and a dark
    wash on top. It loops every 15.6 seconds with a 1-second crossfade.
  - It plays only while slide 2 is showing, and people who prefer reduced motion see a still.
  - The earlier AI pile-of-guides animation was dropped for looking weird.
- **Every video or generated animation now names its source at the foot of its slide:** the
  napkin on slide 1 (Nano Banana), the clip on slide 2, the iPhone ad on slide 3, and the
  walkthrough. Slide 1 also says third-party video isn't covered by the CC BY licence.
- **Code:** new file `presentation/question-bg.js`, new `media/bg/clinic-pamphlet.mp4` and `.jpg`,
  and the `.clip-bg`, `.clip-wash` and `.credit` styles in `presentation/index.html`.

## 2026-11-04 — Slide 3 plays a phone commercial behind the analogy

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Slide 3 ("Camera phones didn't end photography") has a moving background:** Apple's
  "Shot on iPhone 18 Pro: new trick" commercial (youtu.be/1WLqGs7c_yA).
  - It's muted, with no controls or captions, and cropped to fill the slide.
  - It loops the first 26.5 seconds, which cuts the "Shot on iPhone" title and logo that
    start at about 27 seconds.
  - A dark wash sits on top so the lines stay readable.
- **Embedded from YouTube, not copied into the repo.** The video plays only while slide 3 is
  showing and needs an internet connection; offline, the slide stays plain dark.
- **Code:** new file `presentation/analogy-bg.js`, plus the `.yt-bg` and `.yt-wash` styles in
  `presentation/index.html`.

## 2026-11-04 — Slides: one scroll each, shorter lines, one type system

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **One scroll per slide.** Each scroll, swipe or key press moves to the next slide, and
  everything on it plays in one 1.6-second cascade. Before, every line or card needed its own
  scroll. Going back snaps the slide in. The walkthrough still steps through its labels.
- **Scene labels removed.** The yellow-dash kickers (A confession, An analogy, The catch, and so
  on) are gone. The chapter rail still uses the names.
- **Shorter, plainer lines.** Rewritten to cut AI-sounding phrasing ("camera-phone moment",
  "isn't X", colon reveals) and extra words. For example:
  - "We each knew half." / "Claude wrote the code. We made the calls."
  - "Camera phones didn't end photography. They made everyone a photographer. AI just did that
    for software."
  - "Not everything worked." The three cards are now headlines only: 3 frameworks fit, 26 didn't;
    checklists drifted; some bugs remain.
  - "Anyone can build now. Knowing what to build is the job."
  - The failure details (the sidebar fix from Sonia's prototype, Picker's 1993 principles, the
    Plan draft behind the poster) are no longer on the slides, so say them out loud.
- **One type system** (written up in a comment at the end of the stylesheet):
  - **Two faces:** Newsreader and Public Sans. Source Serif 4 and the monospace byline are gone.
  - **Five sizes**, set as `--fs-*` tokens: hero, display, heading, body and tag (plus fine
    print). These replace about 25 one-off sizes.
  - **Two inks:** white and grey.
  - **Emphasis:** one highlighter per slide and no bold. Italic Newsreader is used only for the
    closing line under a slide.
  - Thank you now runs across the full width, with What's next and the PRISM card under it.
  - Apostrophes in slide text are now curly.
- **Cleanup:** dead CSS for slides that left the deck has been deleted: who, angles, map, steps,
  turning point and drawing the line.

## 2026-11-04 — Slides follow the talk's new structure: confession, analogy, catch, proof, voices, demo, failures, thesis

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Why:** the script now follows the shape of Doodle to Demo's talk (studied from its recording):
  a personal confession, an analogy, the catch, proof with a number, real voices, a demo, honest
  failures, then one thesis said plainly.
- **New order** in `presentation/index.html` (12 slides):
  1. Welcome (unchanged).
  2. **A confession:** Sonia's "Did my visual actually make a difference?" (relabelled).
  3. **An analogy (new):** "Phones didn't replace photographers. They let everyone show what they
     see." Building software just had its camera-phone moment.
  4. **The catch (new):** "Each of us knew only half." Sonia knew patient education but had never
     built with AI; Chloe knew product design and AI tools but doesn't write code. "So Claude wrote
     the code, and we brought everything else."
  5. **The proof (new):** 27 hours of building, 123 commits, 21 sittings, 10+ frameworks,
     0 developers, from the first commit on July 31 to today. Hours come from commit times
     (commits under 2 hours apart are one sitting, plus 30 minutes each), the same method as the
     old timeline. **Recount before the talk.**
  6. Then and now (kept, now part of The proof).
  7. **Real voices (new):** Nati Chen's interview on October 14, quoting only her verbatim line
     "Most people start with copy only." Her biggest gap (paraphrased, not quoted): knowing where in
     the design process each framework helps. Three days later Plan from an idea became a guided
     path.
  8. The demo: PRISM, then the walkthrough (relabelled).
  9. **What went wrong (new):** three true failures from this log: the sidebar that broke at 26
     frameworks (fixed by Sonia's prototype), checklists that paraphrased old sources (Picker's 1993
     principles; every item is now checked against its source), and the Plan draft that hides
     behind an open poster (found while recording, still open).
  10. **The thesis (new):** "Intent first. Build fast. Iterate." with whose each one is, ending on
      the camera-phone callback.
  11. Thank you (unchanged).
- **Removed from the deck:** Where it started, The problem (frameworks map), Designing with Claude
  (five steps), A turning point (now a failure card) and Drawing the line (folded into the thesis).
  Their styles are still in the file.
- **Nati is quoted by name** (Chloe confirmed).
- **Still to do:** background clips for the new slides (the camera-phone footage first).

## 2026-11-04 — The presentation site is gone; the story slides now live at /presentation/

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **Deleted the long-scroll presentation page** (the old `presentation/index.html`). Only the
  story slides are left.
- **The slides moved to `presentation/index.html`**, so `/presentation/` opens them directly.
  `presentation/story.html` is now a tiny redirect to `/presentation/`, so old links still work.
- On the "Designing with Claude" slide, the five step cards no longer link into the deleted page:
  the "Check the sources first", "Six front doors", "The proofing desk", "Sonia's fork" and "PRISM
  today" lines are gone, and the lead drops "Each links to the moment where it happened."
- The screenshots in `presentation/img/` are kept, even the ones only the old page used.

## 2026-11-04 — Story page: the welcome slide gets GoInvo, a blurb, intros and a license

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **The opening slide now carries everything a welcome page needs**, laid out top to bottom:
  - the **GoInvo logo**, with "By Sonia Seto, Chloe Ma" and the feedback email
    **prism@goinvo.com**;
  - the title, with the new blurb under it: "Clickable napkin sketches: share ideas faster,
    improve them faster.";
  - **both speakers' introductions** along the bottom, with name, role and BMC year;
  - the event line and the license: "This project and designs are licensed under Creative Commons
    Attribution 4.0".
- The logo is a copy of GoInvo's SVG (`presentation/img/goinvo-logo.svg`), drawn inline in the
  slide's text colour so it can switch to white on the dark backgrounds that come later.
- At 1920×1080 the title is about 180px and the blurb about 50px. Everything fits on one screen,
  on a projector and on a phone.
- Chloe's title is now **Senior product designer** (was Senior health strategy designer) on the
  welcome slide, the "Who we are" slide and the full presentation page.
- **The welcome slide's background draws itself (prototype).** A napkin with a pen sketch of
  PRISM's Studio sits behind the title. When the slide comes on, the sketch draws itself onto the
  blank napkin: first the two big frames trace their outlines, then the cards, labels and lines wipe
  in, top to bottom, in about 6 s. Then the sketched "Open" button fills with the brand yellow and a
  ring spreads from it, the "clickable napkin sketch". It replays whenever the slide is shown again,
  and shows the finished sketch straight away for people who prefer reduced motion.
  - **Colour: warm wood**, the photo's own colours (Chloe's pick). Adding `?tone=cool` to the
    address shows a version greyed to the deck's cool grey, for comparison.
  - **Readability:** a wash in the wood's own tone fades from the left, so the title, logo and intros
    sit on plain tabletop rather than on the sketch.
  - **Made from one Nano Banana still** (the draft, 1024px wide, upscaled 2×):
    `scripts/napkin-ink.py` separates the ink into `media/bg/napkin-ink.png`, paints a blank napkin
    (`napkin-blank.webp`) and lists the ink's mark groups in drawing order
    (`napkin-strokes.json`). `presentation/napkin.js` draws it.
  - **Still a draft:** the napkin overlaps the right side of the title and the image is soft at
    projector size. A regenerated pair (napkin in the right 40%, no coffee ring, larger size) runs
    through the same script.
- **The whole story page is on warm paper now** (Chloe's pick, option A of three previewed): the
  background `#F3EDE4`, cards `#FBF8F3`, rules `#DDD3C5`, and warm near-black text (`#1E1A16`,
  `#5A5048`). It runs on from the napkin's wood on the welcome slide instead of jumping to cool
  grey. Yellow accents and Sonia's blue are unchanged. The walkthrough's screens keep PRISM's own
  colours, since they're the real app.
- **No dark mode on the story page.** It stays on warm paper even when the viewer's computer is set to
  dark.
- **Two slides removed:** "Who we are" (the introductions now open the talk on the welcome slide)
  and "Each of us knew half". The story page has 11 slides.
- **Napkin animation fixes.**
  - **No more early checkboxes.** Faint outlines of the boxes and lines had stayed on the blank
    napkin where the ink was erased, so they showed before being drawn. Each piece was also
    revealed as a rectangle that overlapped its neighbours. Now the blank napkin is filled from the
    paper around each hole (no halos), and each of the 69 marks reveals only its own ink, using a
    per-pixel owner map (`media/bg/napkin-marks.png`).
  - **A visible click.** After the sketch is drawn, a cursor glides to "Open" and presses it; the
    button fills solid yellow and a ring spreads out.
- **"10+ frameworks" everywhere for now:** The problem slide said "about 26"; it now matches the PRISM
  slide's "10+". (A turning point keeps "broke at 26", the size of the library at that moment.)
- **Thank you** now has the GoInvo logo, "Feedback: prism@goinvo.com" and the CC BY 4.0 line on its
  Try PRISM card. Its "The record behind the talk →" button is removed.
- **The story page now uses PRISM's own dark theme** (Chloe's pick, after previewing it), replacing
  the warm paper: page `#121417`, cards `#1B1E22`, rules `#343A41`, text `#E9EBEE` / `#B4BAC2`, links
  `#8DB4EC`, and PRISM's translucent yellow highlighter. The talk now looks like the product. There is
  still only one theme, with no light mode.
- **Welcome slide: every line is readable.** The text keeps to the left half, and the napkin moves into
  the right 42% (on a 1920×1080 screen the text ends at 982px and the napkin starts at 1085px). The
  title is set on two lines, "The Barrier / Just Dropped", at about 140px. The photo's top and bottom
  edges fade into the dark, so the napkin sits in a pool of light, dimmed slightly to suit the page.
  On phones the napkin is hidden.
- **Welcome slide: the napkin photo now bleeds across the whole slide** (it had been boxed into the
  right 42%). A dark wash from the left, and another along the bottom, keeps the text in contrast
  where it crosses the napkin: white text measures about 11:1 and the grey role lines about 5.8:1 at
  their hardest spots (WCAG AA asks for 4.5:1). A soft text shadow backs this up. The slides now
  live in `presentation/index.html` (moved there in another session); this change is there.
- **Not done yet:** the animated portraits; moving backgrounds on the other slides; a regenerated,
  sharper napkin still; the repo has no `LICENSE` file yet to match the license line.

## 2026-11-02 — Walkthrough: moves as you scroll, no jumps, Edit after Apply, a proper ending

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **It starts moving right away.** The opening held still for 2.2 s, about 330 px of scrolling
  with nothing changing on screen. It now holds for 0.4 s, and the camera heads for the guide
  straight after. The player also follows the scroll a little more closely, with less trailing lag.
- **New chapter order:** Getting started, Apply a suggestion, **Edit the text directly**, Apply
  all, History and versions, Posters and images, Plan from an idea. Editing by hand now follows
  the one-card fix. It picks up the paragraph where the suggestion left it: "various
  complications" becomes "problems", "precipitated" becomes "caused", and "adequately" is deleted.
  The reading grade drops from 5.3 to 4.2. Apply all then fixes the three rewrites that are left.
- **The same screen no longer changes between chapters.** The walkthrough was re-recorded in one
  pass, in this order. Each chapter starts on exactly the screen the previous one ended on. When
  the card rail moves to a different card, the move is recorded as a short scroll the viewer sees;
  before, the crossfade swapped in different cards.
- **Plan finishes its flow and the walkthrough has an ending.** Plan now:
  1. clears the poster for a new piece;
  2. outlines the message;
  3. steps to Draft;
  4. clicks "Write the draft in the editor". The outline opens in the editor, already scored:
     grade below 1, CCI and PEMAT ready to rate.

  Then the camera pulls back to the whole Studio and holds on "That's PRISM: From an idea to a
  draft checked against published frameworks". This leads into the next slide, Then and now,
  which compares the Studio in August with today.
- **Highlight boxes stay whole.** A box around a card at the page's right edge ran off the frame
  (Every change is logged, Name a version, Revert). Boxes now stop 12 px inside the frame, ring
  included. "Back to the original, nothing lost" now frames just the reverted handout and its
  notice, instead of a strip across the whole page and under the History panel.
- **Story page stops:** the "don't stop mid-typing" rule no longer mistakes a rail scroll for
  typing. 21 stops in all.
- **Found in PRISM, not fixed here:** with a poster or image open, Plan's "Write the draft in the
  editor" fills the editor behind the image, so the outline never shows. The walkthrough avoids
  this by clearing the poster first.
- **Updated:**
  - `presentation/media/walkthrough/` (100 screens, `clips.js`)
  - `presentation/walkthrough.js`
  - the `?v=20261102h` tags in `presentation/index.html` and `presentation/story.html`
  - the web video (106 s) and its poster

  Master copy: `screen record/prism-walkthrough-v9.mp4`.

## 2026-11-02 — Walkthrough starts like a beginner: the four steps of "How to check your material"

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **Why:** the walkthrough opened with a handout already being edited. A first-time visitor lands on
  the empty Studio and its four-step guide, so the walkthrough now starts there and follows it.
- **New first chapter, "Getting started"** (27 s), recorded from `master` as deployed, one label per
  guide step:
  1. **Step 1: set your Brief.** It holds on the empty Studio, then zooms in on the guide, and the
     cursor clicks its Open Brief button. Then it picks Patients (the guide ticks step 1) and Handout,
     and the Brief picks six frameworks for a handout.
  2. **Step 2: add your material.** It clicks the sample handout. This replaces the "Start from a
     sample handout" label from the entry below.
  3. **Step 3: pick your frameworks.** It opens the list of 23, shows the six the Brief picked, and
     ticks SAM (Suitability Assessment of Materials).
  4. **Step 4: review the results.** The PEMAT card shows 16 items to rate. It marks the first one
     Met, and the card drops to 15 to rate.
- **The separate Frameworks chapter is gone.** Step 3 now shows the list and ticking. There are still
  seven chapters: Getting started, Apply a suggestion, Apply all, History and versions, Posters and
  images, Plan from an idea, Edit the text directly. The video is 97 s (was 82 s).
- **The whole walkthrough was re-recorded in one pass**, so the later chapters carry the Brief
  (Patients, Handout) and the seven frameworks. Plan's Draft stage now lists the checks turned on
  for you. The closing edit's camera is wider, so it keeps the reading grade (now lower down in the
  Readability card) in view.
- **Updated:**
  - `presentation/media/walkthrough/` (89 screens, `clips.js`)
  - `presentation/walkthrough.js` (scenes, image version tag)
  - the `?v=20261102c` script tags in `presentation/index.html` and `presentation/story.html`
  - `presentation/media/prism-walkthrough.mp4` and its poster

  Master copy: `screen record/prism-walkthrough-v7.mp4`.
- **Re-rendered (v8)** to match the new chapter order, the longer edit chapter and the 0.5 s camera
  smoothing described in the entry below. It is 98 s; the web copy is 40 MB. Master copy:
  `screen record/prism-walkthrough-v8.mp4`.

## 2026-11-02 — Story page: PRISM logo fix; the walkthrough holds on its opening and plays slower

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **The yellow marker behind the "I" in PRISM (What we built slide) no longer hangs below the
  word.** It was sized to the font's full line, including the space for descenders, so it ran
  about a quarter of the letter's height under the baseline. It now ends just below the baseline.
- **The walkthrough holds on its opening screen first.** On the story page, the first step into the
  walkthrough shows the opening screen and stops there; the next step starts playing. (A "Start
  from a sample handout" label added here was replaced by the Getting started chapter above.)
- **Each step plays instead of fast-forwarding.** A step forward now plays the walkthrough at its
  recorded speed and holds on the next label; a step back rewinds quickly.
- **A step never stops mid-typing.** If a label's stop would land while text is being typed, it
  moves to just after the last letter (`walkthrough.js`). Before, Plan from an idea stopped on
  "Che|" in the main message box.
- **Gentler camera.** Each zoom or pan takes up to 0.5 s longer on each side, borrowed from the
  pauses around it, and the closest zoom is 2.1× instead of 2.6×. This applies on both pages.
- Edit the text directly briefly moved to follow History; the re-recorded order in the entry above
  (Edit right after Apply a suggestion) replaces that.
- The walkthrough's chapter rail on the story page only spells out the current chapter's name, as on
  the full page, so the names no longer overlap.

## 2026-11-01 — Walkthrough shows more of PRISM: Apply all, History, revert, the Plan stages

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Why:** the walkthrough showed one applied suggestion and a closing edit, but not the rest of
  how a draft changes in PRISM: fixing everything at once, the change log, saved versions and
  going back to one, or what Plan does after the first field.
- **Seven chapters, 82 seconds** (was five, 49 s), all recorded from `master` as deployed:
  1. Apply a suggestion: the Jargon rewrite from a card, as before.
  2. **Apply all (new):** the Plain language card's "3 suggested changes", one click, counts
     drop to 0 to fix, and "Applied 3 changes. Undo them all at once in History."
  3. **History and versions (new):** the History panel lists each change with what changed
     (struck and added words), word count and CCI; a version is named "Draft for Sonia" and
     saved; then Revert takes the handout back to the first snapshot ("The version you left is
     still in History").
  4. Frameworks, 5. Posters and images: as before.
  6. Plan from an idea: now also fills "What should people do?", moves to the Draft stage and
     holds on the checks PRISM scores there.
  7. Edit the text directly: the closing continuous edit, as before.
- **Rail:** with seven chapters, only the current chapter shows its name (others show the
  number; hover or focus shows the name).
- **Updated:** `presentation/media/walkthrough/` (84 screens, `clips.js`), `presentation/walkthrough.js`
  (scenes, image version tag), `presentation/index.html` (script version tags, rail rule),
  `presentation/media/prism-walkthrough.mp4` and its poster. Master copy:
  `screen record/prism-walkthrough-v6.mp4`.

## 2026-11-01 — Walkthrough re-recorded from the live PRISM

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **Why:** the walkthrough had been recorded from local, unreleased Studio edits (the Oct 26–27
  library review, "Based on:" sources, a longer sample handout), so it didn't match PRISM as
  deployed.
- **Re-recorded from `master` as deployed** (served locally from a clean copy): the 117-word
  sample handout, the Jargon rewrite with "Source: PEMAT-P, AHRQ", the "Applied. Undo it…"
  notice, 23 frameworks with CCI ticked, the poster's colour-blind and greyscale views, Plan, and
  the closing edit taking the reading grade from 6 to 4.5. Each scene was checked against the
  live Studio.
- **Labels:** "11 published frameworks" is now "23 published frameworks"; the "Applied" spotlight
  follows the paragraph down when the notice appears; the grade ring is wide enough for "Gr 4.5".
- **Updated:** `presentation/media/walkthrough/` (screens and `clips.js`), `presentation/walkthrough.js`
  (labels, and a version tag on image URLs so browsers don't show the old screens),
  `presentation/media/prism-walkthrough.mp4` and its poster. The master copy is
  `screen record/prism-walkthrough-v5.mp4`.

## 2026-11-01 — Story page becomes slides, sized for the room

Branch: `refresh-and-fixes` · Vercel / GitHub Pages: not pushed (local only)

- **No more real scrolling in `presentation/story.html`.** Each scroll, swipe, or key press
  (→, ↓, Space or PageDown; ←, ↑ or PageUp to go back) plays one beat on a timer.
  - In each slide, animations that overlap play together as one beat.
  - After a slide's last beat, the next step changes slides: the old slide drifts away and fades,
    and the new one fades in from the other side while its first beat plays.
  - A trackpad's momentum counts as one step.
  - **The walkthrough steps through its on-screen labels (17 points in the new seven-chapter recording), not whole chapters.** Each
    step moves quickly (0.9–1.8 s) to the next labelled moment and holds there, so it never plays
    on its own. To support this, `walkthrough.js` now lists those points as `window.PRISM_WALK`.
    The full page doesn't use it.
  - The chapter dots and Home/End jump between slides.
- **Sized for a projector.** On anything wider than a phone, each slide fills the screen. All type
  and spacing scale with the window: at 1920×1080, headlines are about 88px and body text about
  36–42px. The opening title is about 180px.
- **The opening slide no longer animates.** It opens already finished: "Dropped" highlighted and
  tilted, with the names. The barrier tape and the row of four numbers are gone.
- **Then and now works as a comparison again.**
  - The screenshots keep their 16:10 shape and are no longer cropped.
  - The wipe stops halfway, so August and October show side by side.
  - Each date label shows only while its version is visible. Before, "Oct 28" sat over the August
    screenshot.
  - You can drag the divider anywhere.
- The Drawing the line slide now shows Claude's column first, then Us.
- **The top bar, the "Scroll or press →" hint and the "Next: the walkthrough" line are gone** (wordmark, chapter name, Full page link,
  progress line), so slides use the
  whole screen. The chapter dots on the right remain, and the last slide still links to the full page.

## 2026-11-01 — The talk as a scroll story

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **New page, `presentation/story.html`.** It tells the talk on one screen, with no visible
  scrollbar. Scrolling changes the screen in place instead of moving the page. There are 12
  scenes in the deck's order:
  - **Opening:** the barrier tape drops and "Dropped" gets its highlight.
  - **Who we are:** the two cards slide in.
  - **The question:** the quote is highlighted as you scroll.
  - **PRISM and the walkthrough:** PRISM's three features appear one by one, then the walkthrough
    plays.
  - **Then and now:** August wipes into October.
  - **Where it started:** the origin cards and the two angles.
  - **The frameworks map:** its lines draw into PRISM.
  - **How we built it:** the five steps fill a progress bar, and the sidebar turns into the top bar.
  - **Drawing the line:** a rule draws down the middle between Claude and Us.
  - **Thank you:** it ends with a link to the record on the full page.
- **The walkthrough is the shared one.** It loads the same `walkthrough.js` and
  `media/walkthrough/` as the full page, so updates to the walkthrough show up in both. Its styles are copied
  from `index.html`; if those change, copy them again.
- **How it works:** each scene is a tall section with a sticky full-screen stage. A small script
  turns the scroll position into `--k` values that the CSS animates from. → / PageDown and ← /
  PageUp step one beat at a time, for a clicker. The chapter dots on the right jump between
  sections. With reduced motion, each step appears without animation.
- The current page, `presentation/index.html`, stays as the full version; the story links to it
  as "Full page".

## 2026-11-01 — Presentation page: walkthrough plays as you scroll

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The walkthrough is a scroll-driven player now, not a video** (`presentation/index.html`,
  new `presentation/walkthrough.js`). The stage sticks under the site bar while you scroll through
  it; scrolling moves the animation forward or back, and stopping holds it still, so a presenter
  can talk over any moment. A rail under the stage shows the five chapters (Studio, Frameworks,
  Posters and images, Plan from an idea, Edit and recheck), the time, and jumps to a chapter on
  click.
- **Why:** the embedded video looked soft (a 1280×720, 30 fps copy at about 630 kbps), and a talk
  needs to pause anywhere. The player draws the recorded screens with the camera, cursor,
  spotlight and labels live in the page, so it stays sharp at any size.
- **Content matches v4 of the walkthrough** (49 s): it opens on the workspace, with no logo card
  and no front door. Recorded screens are in `presentation/media/walkthrough/` (60 WebP images,
  2400×1350, 9 MB, plus `clips.js`).
- **"Watch as a video"** links to a new web encode at `presentation/media/prism-walkthrough.mp4`
  (1920×1080, 60 fps, H.264 High), which replaces the 720p copy; the poster image was refreshed.
  Without JavaScript the page shows that video instead.
- The PRISM pitch sits above the player, with its three features in a row.

## 2026-10-28 — Presentation page follows the talk deck

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: updated from `master`

- **The page now runs in the order of the slides** in *The Barrier Just Dropped*
  (`presentation/index.html`): title, Who we are, The question, What we built, Where it started,
  How we built it, Drawing the line, and What's next / Thank you. The page keeps its proofing-desk
  style.
- **New from the deck:**
  - the 56-second walkthrough (`presentation/media/`, compressed from `screen record/prism-walkthrough-v4.mp4`);
  - the origin story;
  - a frameworks-to-PRISM map;
  - the five steps of designing with Claude, each linked to a moment;
  - the 3-to-26 turning point (sidebar to top bar, from Sonia's Sep 15 prototype);
  - the Claude / Us split.
- **The design record is now an appendix** after Thank you, in the deck's References spot: rhythm,
  Moments, journey, collaboration, library and logo. The old run-of-show section is gone. Links
  like `#m14` now open that moment from anywhere on the page.

## 2026-10-28 — Presentation page hosted on GitHub Pages

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`) · GitHub Pages: on, from `master`

- **GitHub Pages turned on** for the repo, serving `master` from the root, so the talk page is also at
  https://chloemxy.github.io/communication-framework/presentation/. Added an empty `.nojekyll` so
  Pages serves the files as they are. Vercel still hosts the same site.

## 2026-10-28 — Presentation page: Moments timeline in working hours

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`)

- **Timeline ticks show rough working hours instead of dates** (`presentation/index.html`). The
  dates bunched up (eight moments between Oct 16 and Oct 19) and jumped weeks elsewhere. Hours come
  from commit times, with commits under 2 hours apart grouped into one sitting plus 30 minutes for
  each sitting, about 23 hours in all. The panel still shows each moment's date and commit.

## 2026-10-28 — Presentation page: wordmark fix

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`)

- **Header wordmark reads as one word again** (`presentation/index.html`). The bar's flex gap was
  splitting "PR", the highlighted "I" and "SM" into separate pieces. The word now sits in one span,
  and the I uses the product's slanted highlighter shape.

## 2026-10-28 — Presentation page: PRISM design journey

Branch: `refresh-and-fixes` · Vercel: Production (merged to `master`)

- **New page at `/presentation/`** (`presentation/index.html`, `presentation/img/`), a companion
  for the Drawing the Line talk. The Studio and Compass are unchanged.
- **What's on it:**
  - A before/after slider (Aug 17 against today, both light).
  - A commits-per-day chart with the eight turning points.
  - **Moments:** an 18-moment player with a phase bar, the draft from each commit in a browser
    frame, Show before, Turning points only, the parts of the site each moment changed, and the
    features available, coming later and retired.
  - The design record: 23 entries with drafts and Chloe's quotes from build sessions, filterable.
  - Sonia and Chloe's contributions, the library cut from 26 to 11, the seven logo marks and the
    7-minute run of show.
- **Screens** are the site rendered from each commit with headless Chrome (20 JPGs, 1.4 MB).
- Also published as a private Claude artifact.

## 2026-10-27 — Plain language checks get sources; reading grade fixed; row hover

Branch: `refresh-and-fixes` · Vercel: not pushed (local only)

- **Reading grade was too low.** Every heading and table cell ("Normal", "Under 80") counted
  as a full sentence, and numbers counted as zero syllables. The sample handout read
  grade 2.7; it now reads 4.3.
  - Readability now reads only the sentences: headings and tables are left out, and numbers
    are dropped from the word and syllable counts.
  - The footer's sentence count and words per sentence now match Readability's.
  - "How the grade is worked out" now cites both formulas: the grade from Kincaid,
    Fishburne, Rogers & Chissom (1975), Navy Research Branch Report 8-75
    (doi:10.21236/ADA006655), and the ease from Flesch (1948) (doi:10.1037/h0057532).
  - The grade and ease bars are coloured against the audience's target: green when they
    meet it, amber when close (within 2 grades, or 10 ease points), red when far off. Bars
    for poster text stay neutral.
  - **Fix:** the first version dropped all table text, so a handout laid out in a table
    scored nothing (all dashes). Now only short table labels (under 5 words with no full
    stop) are left out. Sentences in tables still count, and if nothing is left the whole
    text is read.
- **Sentence splits no longer leave fragments.** "…what works, what doesn't, and what
  would…" was split into "What would make the experience better for you." The splitter now
  skips:
  - an ", and" that closes a list (another comma within 8 words before it)
  - a break where the new sentence would start with what, which, who, whom, whose, that,
    how, why, whether, than or as

  Those sentences get no automatic rewrite. Clean splits still work.
- **"How to judge" guidance for 7 checklists:** HBM, TTM, EPPM, SAM, IPDAS, DISCERN and WHO
  ERC, 88 items in all.
  - **At the top of each checklist:** "What each answer means" explains the scale (for TTM,
    rate the target stage first and mark the other stages N/A; for EPPM, fear needs efficacy),
    plus a line on whose reading it is.
  - **Under each item:** a "How to judge" disclosure says what each answer looks like on a
    page, best first (Met / Partly / Not met / N/A, SAM 2 / 1 / 0, DISCERN 5 / 2–4 / 1).
    N/A lines show only where the scale offers N/A. Open panels stay open while you rate.
  - **Labelled PRISM's reading, not official wording.** HBM, TTM and EPPM are theories, not
    checklists. The DISCERN bands follow its handbook, and SAM's follow Doak, Doak & Root.
  - **Code:** new file `fw-judge.js` (`PEA_FW_JUDGE`), plus `fwJudgeHtml()` in `index.html`.
- **"Allow Grammarly" checkbox in the editor toolbar.** Off by default and remembered in this
  browser. Ticking it removes the opt-out tags from every text field, including ones added
  later. Unticking puts them back.
- **Grammarly is off on the studio's text fields.** Its underlines piled on top of PRISM's own
  flags. Every text field gets Grammarly's opt-out attributes (`data-gramm`,
  `data-gramm_editor`, `data-enable-grammarly` set to false): the document, the Brief, search
  boxes, and the New lines in Plain language. Fields added later are marked as they appear (a
  small script at the top of `<body>`).
- **Framework checklists: header layout.** The chevron lines up with the group label
  ("Self-rated"), and "0 of 5 rated" lines up with "1 framework". The hover tint now extends
  the same distance past the text on both sides. Before, a `max-width:100%` rule for all card
  content had squashed it, so the count sat against the right edge.
- **"Default" group at the top of the Frameworks list.** It holds Plain language and
  Readability, in every sort order. The rest are grouped by the chosen sort. In Plan from an
  idea it holds only Plain language, because Readability is Evaluate only there.
  (`FW_DEFAULT` in `index.html`.)
- **Edit in place, Enter to apply.** The Edit button and its separate text box are gone.
  Click the New line to edit it directly: it fills with the whole new sentence, or the
  sentence as it is when there's no suggestion, with the cursor at the end. **Enter** applies,
  the same as the Apply button. **Esc** puts it back, and leaving it unchanged restores the
  preview. When there's no suggested rewrite, New shows "No safe automatic rewrite. Write your
  own." as its placeholder (the separate note under the card is gone), and Apply appears once
  you've typed a change.
- **After Apply, the document stays on the change and shows it.** The document panel scrolls
  to centre the changed sentence (`scrollDocTo()`). The new words get a green mark
  (`::highlight(pea-applied)`) for 4 seconds, or until you type. If words were only removed,
  the whole sentence is marked. The cursor sits at the end of the sentence.
- **Apply all now includes the "Everyday word" swaps.** They were left out before.
- **Hand edits change and show only the words you changed.** "Edit" then "Apply" used to
  replace the whole sentence, and History showed the old sentence struck through followed by
  the new one in full. A word-by-word comparison (`wordDiffEdits()`) now replaces only the
  changed words. The record shows those words with a few words of context, for example
  "…so ~~some~~ couple things may look or…". Added words get only an underline, and removed
  words only a strike-through.
- **Plain language, take three: one tickable row, on by default.** It sits at the top of the
  Frameworks list in every sort order, with a tick box (on by default) and a "Plain language"
  chip in the bar. Its three guides (CDC Everyday Words, Federal Plain Language Guidelines,
  Gigerenzer & Hoffrage) are listed inside it as links, each with a short note. Unticking it,
  or pressing Clear, hides the Plain language card and its highlights. It isn't counted in
  "1 of 11", because it's not a framework in the library. The separate guide rows below are
  replaced by this.
- **Plain language dropdown group, take two.** The group now holds only its guides: CDC
  Everyday Words, Federal Plain Language Guidelines and Gigerenzer & Hoffrage, each its own
  row with a link and a "Guide" tag, and no tick box. CCI, PEMAT-P and Readability are back in
  their own groups, and the Compass's Situation filter skips this group (it has no frameworks).
  Cache tag: `frameworks.js v=20261027c`.
- **Workspace notes float above the footer.** Notes like "Workspace edited — hit Save…" and
  "Changed in…" used to sit in the editor toolbar and push the document down when they
  wrapped. They now float just above the word-count footer and take no space.
  - **"How the grade is worked out"** in the Readability card shows the formula with the
    actual numbers, the counts, and what was left out.
- **Every Plain language finding now says what it's based on.** Item numbers were checked
  against the engine's PEMAT-P and CCI wording.
  - Long sentences: Federal Plain Language Guidelines (the 18- and 25-word limits are PRISM's).
  - Medical words: PEMAT-P item 4. The medical-word list is still PRISM's, because CDC's list
    leaves out disease and anatomy terms.
  - Passive voice: PEMAT-P item 5 (CCI item 6 asks the same).
  - Bare percentages: CCI items 15–16 and Gigerenzer & Hoffrage.
  - Wordy and acronyms: Federal Plain Language Guidelines.
  - Vague words: labelled "PRISM's own rule".
- **New check, "Everyday word", from CDC's *Everyday Words for Public Health Communication***
  (May 2016). It covers 56 of CDC's 103 terms. The very common ones (disease, risk, dose,
  data…) are left out because they would flag almost every handout. CDC's own alternatives are
  quoted, with a one-click swap where one reads cleanly. It's a review, not a fix, because CDC
  says to check the context first. "Jargon" is renamed "Medical word".
- **Frameworks dropdown: a "Plain language" group at the top** (sorted by use case, the
  default). It holds CCI, PEMAT-P and Readability, plus an "Also used" line linking CDC
  Everyday Words, the Federal Plain Language Guidelines and Gigerenzer & Hoffrage.
- **Issue row hover:** hovering a finding now tints the whole row, rewrite box included, as one
  rounded block. The rewrite box is white with a rule line, aligned with the label and the
  Fix/Review tag.
- **Code:** `index.html` (`computeFK`, `readabilityText()`, `EVERYDAY`, `SCAN_BASIS`,
  `fixSwap`, issue styles, dropdown refs). `frameworks.js` (the `plain` situation with
  `refs`). Cache tag: `frameworks.js v=20261027b`.

## 2026-10-27 — Library review's open questions answered: 7 more frameworks hidden

Branch: `refresh-and-fixes` · Vercel: not pushed (local only)

- **Hidden: SHARE, AHRQ Toolkit and Picker.** The tool checks materials in the formats we
  support, not care pathways, programs or services.
- **Hidden: COM-B, Ottawa DSF and Teach-Back.** These are lenses that can't check a document.
- **WHO ERC stays in Plan only**, because practitioners might write crisis materials.
- **PEMAT-A/V stays in both canvases.** The tool doesn't take video uploads, but PEMAT-A/V
  still checks a video or animation script and storyboard (Brief: Video, and the Plan video
  flow).
- **PAM stays out.** It's a licensed survey that measures the patient, not the material.
  (It was never in the tool.)
- **Now offered:** Evaluate a draft has 11 frameworks and Plan from an idea has 12. On the
  Compass, the hidden ones are listed under "Not in the library right now", with the reason
  and when to revisit. The use-case sets and the Recommended order were updated to match.
- **Code:** `frameworks.js` (entries moved to `CUT`), `FW_REG` regenerated with 14 frameworks,
  `framework-compass.html`. Cache tags: `frameworks.js v=20261027a`, `plan.js v=20261027a`.

## 2026-10-26 — Framework library follows the Compass library review (v2)

Branch: `refresh-and-fixes` · Vercel: not pushed (local only)

Source: `framework-compass-library-review-v2.xlsx` (Library, Cut and Summary tabs).

- **Cut: EQIP, Plain Language and PCORI.** They're gone from the Frameworks list in both
  canvases, the use-case sets, the Recommended order and the Compass list. The Compass shows
  them under "Cut from the library" with the sheet's reason and when to revisit. The
  **Plain language card still runs** on every text; it's just no longer tied to a framework.
  The "Research with patient partners" use case is gone (PCORI was its only framework), and
  "Used often in our work" is now UPL alone.
- **Each canvas offers only its frameworks (the sheet's Modes column):**
  - **Evaluate a draft (11):** the 9 marked Both, plus Readability and DISCERN (Evaluate only).
  - **Plan from an idea (18):** the 9 marked Both, plus COM-B, HBM, TTM, Ottawa DSF and
    Teach-Back (Plan only), plus SHARE, AHRQ Toolkit, Picker and WHO ERC (Plan only, if scope
    fits). These last four are shown for now, because open question 2 (does Plan cover care
    pathways, programs or services?) hasn't been answered.
  - The Readability card still scores in Plan when you check the storyboard or script. It
    just isn't in Plan's pick list.
- **The Compass** labels each framework with its canvas ("Plan and evaluate", "Evaluate only",
  "Plan only", "Plan only, if scope fits") and adds a Canvas filter (Plan from an idea /
  Evaluate a draft).
- **Not done:** NCI Pink Book, EBCD and PAM (Bring back / Keep in the sheet) aren't in the tool
  yet. Each needs its items written from its source first.
- **Code:** `frameworks.js` (`modes`, `decision`, `CUT`, `MODE_LABEL`, `MODE_CANVAS`).
  `index.html` (`fwAvailable()` replaces `FW_AVAILABLE`, `FW_LIVE` no longer includes
  plainlang, and `FW_REG` is regenerated with 20 frameworks). `plan.js` (plainlang removed from
  the flows). `framework-compass.html`, `scripts/build-fw-reg.js`. Cache tags:
  `frameworks.js v=20261026a`, `plan.js v=20261026a`.

## 2026-10-21 — "Text the tool read" hidden; highlights leave room for Grammarly

Branch: `refresh-and-fixes` · Vercel: not pushed (local only)

- **The "Text the tool read" card is hidden for now.** Words read from an image or PDF are
  still scored and highlighted as before; the card just isn't shown. Hints that pointed to it
  were reworded. Bring it back by restoring `'mod-vtext': () => visualOn` in `APPLIES`.
- **Flagged words are a yellow fill only, with no underline.** The underline sat exactly where
  Grammarly and the browser draw theirs, so the two covered each other. The marks never
  changed the document (CSS Custom Highlight API), so only the look clashed. The issue you
  click still gets a thick underline for a moment.
- **Code:** `index.html` (`APPLIES`, hint text), `design-system.css` (`::highlight(pea-flag)`),
  stylesheet cache tag `v=20261021b`.

## 2026-10-21 — Plan from an idea starts with no frameworks

Branch: `refresh-and-fixes` · Vercel: not pushed (local only)

- **Switching to Plan from an idea clears the Frameworks bar.** Picks, ratings, open
  checklists and the output filter from Evaluate a draft are reset, so the plan starts empty.
- **Nothing switches itself on in Plan.** The Brief's picks (for example Video → PEMAT-A/V) and
  in-use scoring cards don't count there. Only frameworks that the plan turns on ("Check the
  storyboard words", "Score the final script", handing a draft to the editor) or that you tick
  are selected.
- **Back in Evaluate**, the usual rules return, including the Brief's picks. Going back into
  Plan clears again.
- **Code:** `index.html`. `fwPlanning()` gates `selectedFrameworks()` and `fwChosen()`, and
  `setMode()` clears on the switch into Plan.

## 2026-10-21 — Light theme matches dark; longer sample handout

Branch: `refresh-and-fixes` · Vercel: not pushed (local only)

- **Light theme greys now follow the dark theme.** Both themes already used the same cool slate
  hue (about 212°). The light page was nearly white (`#ECEEF0`), so the two looked like
  different tools. The page is now a visible slate (`--desk #D8DDE3`) under white sheets,
  mirroring dark mode's slate desk with lighter panels. The related tokens moved with it:
  - `--sheet-2 #EEF1F4`, `--rule #C9CFD6`, `--hover #E5E9EE`, `--meter-track #DDE2E8`
  - `--scroll-thumb #A9B1BA`, `--checker-b #E3E7EC`
- **Contrast kept:** on the new desk, `--control-border` is darkened to `#6E767F` (3.4:1) and
  `--ink-disabled` to `#565D66` (4.9:1). Ink, ink-2, form blue and the status colours all
  stay ≥ 4.5:1 on the desk. Dark theme is unchanged. Edit is in `design-system.css`; its
  cache-bust is now `v=20261021a` on index, Compass and the logo preview page.
- **Sample handout is much longer:** about 685 words, up from about 117. It is a two-page
  blood pressure handout with these sections: why it matters, what you need, before you check,
  numbered steps, a numbers table, medicine, everyday habits, when to call, when to call 911,
  questions to ask, and a closing reminder.
- **It still carries problems on purpose:** the jargon paragraph, a bare percentage, passive
  sentences, vague wording, a long sentence, an undefined acronym (DASH), and a mix of
  "care team" and "provider". So every check still has something to find.

## 2026-10-21 — Plan: Next button pinned to the bottom

Branch: `refresh-and-fixes` · Vercel: Production (pushed, merged to master)

- **The Next button is now in a bar pinned to the bottom of the plan.** It stays in the same
  place whether the stage is short or long, and you no longer scroll to find it.
- **It is a primary button** ("Next: Script →"), 44px tall, and the bar shows where you are
  ("Stage 1 of 4"). The last stage has no Next, so there is no bar there.
- **Code:** `plan.js` (Next markup) and `index.html` (`.plan-next` CSS; the stage side padding
  is now the `--ps-x` variable, so the bar spans the column). The `plan.js` cache-bust is now
  `v=20261021c`.

## 2026-10-21 — Plan from an idea uses the Evaluate layout

Branch: `refresh-and-fixes` · Vercel: Production (pushed, merged to master)

- **The score cards stay on the right in Plan mode.** From Script onwards, the plan takes the
  document column and the score cards sit on the right, as in Evaluate a draft. Outline has
  nothing to score yet, so it stays full width with no Brief or Frameworks bars.
- **"Check the storyboard words" scores in place.** It turns on the video frameworks (PEMAT-A/V,
  CCI, Readability, Plain language), and their cards appear on the right. You stay in Plan.
  - Before this, the button jumped to Evaluate a draft.
  - Once checking has started, the cards re-score as you edit, add or remove scenes.
  - Checking stops when you leave the stage, change the format or switch mode, so a later
    scene edit never overwrites the editor without asking.
- **Script safety:** the script in the editor is saved to History first ("Before storyboard
  words"), as before.
- **"Score the final script"** (Animation stage) also scores in place now.
- **Half-width plan:** when the plan column is narrow, the stage list becomes a row across the
  top, and scene cards stack their fields below 520px. This uses a container query, so it
  follows the column width, not the window.
- **Fix:** on phones the plan's row collapsed (`min-height:max-content`) and overlapped the
  cards. The plan now sizes to its content above them.
- **Code:** `plan.js` (`planScoreHere`, `planBoardResync`, `planBoardStop`) and `index.html`
  (Plan CSS, `setMode`). The `plan.js` cache-bust is now `v=20261021b`.
- `.claude/launch.json` gains `studio-alt` (port 5175) for a second preview while 5173 is in use.

## 2026-10-21 — Storyboard scenes laid out as frames

Branch: `refresh-and-fixes` · Vercel: Production (pushed, merged to master)

- **Each scene is now a card laid out like a storyboard frame.** "Shown" is a tall, dashed
  picture panel on the left. "Said" and "Words on screen" are stacked beside it. The scene
  number and Remove share a header line.
- **Why:** the three fields used to sit in one row at different heights. "Shown" was a
  one-line input that cut off its placeholder, and Remove floated on its own line.
- **Fields:** "Shown" is now a multi-line box. All three fields have short placeholders.
  The saved data is unchanged (`shown`, `said`, `onscreen`).
- **Phones (≤760px):** the fields stack in order: Shown, Said, Words on screen.
- **Code:** `plan.js` (scene markup) and `index.html` (`.plan-scene*` CSS). The `plan.js`
  cache-bust is now `v=20261021a`.

## 2026-10-21 — Front door opens with the big logo

Branch: `refresh-and-fixes` · Vercel: Production (pushed, merged to master)

- **The opening:** the front door now starts on the dark screen with the PRISM logo large in the
  middle (up to 168px). It plays its Scan there: the yellow reading line sweeps across and the I
  is highlighted.
- **The glide:** after about 1.35 seconds the logo shrinks and glides into its place in the top-left
  corner (0.72 seconds). It lands exactly on the corner logo, so the hand-over is invisible.
- **The page:** while the logo travels, the page rises in a beat at a time: kicker, headline,
  lede, buttons, then the handout. The bar's controls fade in. The 9-second countdown starts
  only after the logo has landed.
- **Skipping it:** any click or key during the opening jumps to the finished page. With reduced
  motion, the page shows straight away with no opening.
- **Checked:**
  - During the opening, the page and corner logo wait and the countdown hasn't started.
  - The glide ends exactly on the corner logo's position and size.
  - Afterwards the page rises in and the corner logo shows.

## 2026-10-19 — Logo animation: Scan is live

Branch: `refresh-and-fixes` · Vercel: Production (pushed b52c1a4, merged to master)

- **Scan (number 2) is now the site's logo animation.** A thin yellow reading line sweeps across
  PRISM, and the I is highlighted as the line passes it (about 1.2 s).
- **Where:** it plays on page load (Studio, Compass, front door) and again on hover.
- **Code:** CSS only (`design-system.css`). The line is the word's `::after`, so no page's markup
  changed.
- **Preview page:** "live on the site" moved to Scan. Its cards keep their own versions, so the
  site's line doesn't double up there.
- **Checked:** Studio and front-door logos sit in exactly the same place. At the end the line is
  gone and the I is highlighted.

## 2026-10-19 — Five logo animations to compare

Branch: `refresh-and-fixes` · Vercel: Production (pushed b52c1a4, merged to master)

- `design/brainstorm/logo-animation.html` now shows five animations side by side, each with
  Replay, plus Replay all. Every one ends on the same logo.
  1. **Swipe:** a highlighter stroke draws across the I (0.6 s). Live on the site.
  2. **Scan:** a yellow reading line sweeps the word and leaves the I highlighted (1.2 s).
  3. **Stamp:** the swipe drops onto the I and lands with a small settle (0.7 s).
  4. **Type-on:** P R I S M types out behind a cursor, then the I gets flagged (1.3 s).
  5. **Prism fan:** a thin beam at the I widens into the chisel (0.85 s).
- Variants 2–5 live only on the preview page until one is chosen. Reduced motion shows the
  finished logo for all of them.
- **Checked:** each variant runs its own animations, has the right middle frame, and ends on the
  exact logo (shape, colour, no leftover transform).

## 2026-10-19 — Logo animation: the highlighter swipe

Branch: `refresh-and-fixes` · Vercel: Production (pushed b52c1a4, merged to master)

- **What it does:** the logo draws itself the way a highlighter marks a word.
  - The yellow chisel swipe sweeps across the I from left to right.
  - The I turns from ink to its dark on-yellow colour as the swipe passes.
  - It lasts about 0.6 seconds, after a 0.18-second pause.
- **Where it plays:** when any page loads (Studio, Compass, the front door), and again whenever
  you hover the logo. With reduced motion, the finished logo shows straight away.
- **Code:** CSS only, in `design-system.css` next to the logo styles. The front door sets the
  starting letter colour for the dark cover.
- **Preview:** `design/brainstorm/logo-animation.html` shows the logo large on dark and light, with
  Replay. It's linked from the brainstorm index.
- **Checked:** it plays on all three logos on the preview page, ends exactly on the original
  shape and colour, Replay restarts it, and the middle frame looks right.

## 2026-10-19 — Privacy note always within reach

Branch: `refresh-and-fixes` · Vercel: Production (pushed 4c18927, merged to master)

- **Why:** the "Your work stays on this computer" note was only in the workspace guide, which
  disappears once score cards fill the panel.
- **What:** a 🔒 **Private** button now sits in the Studio's site bar, next to About, on every
  screen and view.
  - Pressing it opens a small panel with the same four lines: nothing is uploaded; it's still here
    after a refresh; it's gone if you clear site data or switch browser or computer; Clear removes
    it now.
  - Escape or a click elsewhere closes the panel, and Escape returns focus to the button.
  - On phones it shows just the lock. Screen readers hear "Private: your work stays on this
    computer".
- The guide keeps its own copy of the note for first-time visitors.

## 2026-10-19 — Clear works for Frameworks; Clear added to the Brief

Branch: `refresh-and-fixes` · Vercel: Production (pushed 4c18927, merged to master)

- **Frameworks Clear now clears.**
  - Before: it removed your ticks, but the Brief's picks (e.g. 10 of 23 for a low-literacy
    handout) came straight back, so nothing seemed to happen.
  - Now: everything selected is unticked, including the Brief's picks and the automatic scoring
    cards. The bar shows "None selected". Things stay off until you tick them again.
- **Brief Clear (new).** A Clear button sits on the Brief bar whenever an audience, format or
  notes are set, in the same place and style as the Frameworks one.
  - It empties the Brief, and the frameworks the Brief had picked drop out with it.
  - Frameworks you ticked or cleared yourself stay as you left them.
  - Your document is untouched.
- **Checked:**
  - Handout + low literacy: 10 frameworks → Clear → 0.
  - Clearing the Brief keeps a hand-ticked framework.
  - Brief Clear hides once the Brief is empty.

## 2026-10-19 — Motion system: smart animate across the site

Branch: `refresh-and-fixes` · Vercel: Production (pushed 35c2d67, merged to master)

- **One motion system.**
  - Tokens (quick 120ms, base 200ms, slow 320ms) and two curves in `design-system.css` → MOTION.
  - A new shared `motion.js` on the Studio and Compass pages.
  - DESIGN.md has a new Motion section.
- **Smart animate:**
  - **Selections glide.** In the mode toggle, Brief chips, colour-vision picker, site nav (Studio ⇄
    Framework Compass) and Plan steps, the highlight moves from the old choice to the new one
    instead of jumping.
  - **Theme switch.** The new theme spreads out in a circle from the theme button (View
    Transitions).
  - **Studio ⇄ Compass.** The Compass slides in from the right and the Studio from the left,
    matching their order in the nav.
  - **Cards.** They fold and unfold smoothly, by clicking the header bar or ▾. Quick double
    clicks stay in step. Cards fade up when they appear.
  - **Plan.** Stage content arrives in a short stagger, heading first.
- **Things that open ease in:** menus (Export, Filter), tooltips, the About dialog and its
  backdrop, the History drawer (slides from the right), the Files list, a suggestion's Edit box,
  the empty Material prompts, and Compass disclosures ("How it's scored", "All references").
- **Press:** buttons, rating buttons, toggles and nav links scale to .97 when pressed.
- **Reduced motion:** every animation and transition is switched off, site-wide.
- **Robustness:** every animation tidies up on a timer as well as on its finish event, so a
  background tab never leaves a half-finished state.
- **Checked** in the browser: correct glide paths, folds ending in the right state (including
  double clicks), theme switching, the Compass loading the motion layer, no errors. The browser
  pane wasn't on screen, so the motion itself couldn't be watched; check it live.

## 2026-10-19 — Checklist rows: even buttons, tidier layout

Branch: `refresh-and-fixes` · Vercel: Production (pushed 35c2d67, merged to master)

- **Even buttons.** Rating buttons (Yes / No / N/A, Met / Not met) keep one size, 32px.
  - The bug: in a tall row, the button group stretched to the row height. The plain buttons
    grew to 44px while a suggested one (dashed) stayed 32px.
  - Now the group sits at the top of the row. Checked: all 110 checklist rows use 32px buttons.
- **Tidier rows.** In every checklist (CCI, PEMAT and the framework checklists) the question stands
  on its own line. Its tags ("needs the layout", "set by score sheet", "Auto ✓") sit on a line
  underneath, then the reasons ("Item 3 is no…", "N/A if…"). Before, tags wrapped at the end of
  the question. Tag text lines up with the question's left edge.

## 2026-10-19 — Dark by default

Branch: `refresh-and-fixes` · Vercel: Production (pushed 35c2d67, merged to master)

- **First visit:** the site opens in dark mode on every page (Studio, Compass, brainstorm and demo
  pages). It's set before the first paint, so there's no flash.
- **Choosing Light:** the theme button (it says **Light** while dark) saves the choice, and it's
  remembered after a refresh. Picking Dark again saves that too. Only an explicit Light choice
  keeps the site light.
- **Docs:** `theme-switch.js`, `design-system.css` and DESIGN.md now say dark is the default.
- **Checked:** a first visit opens dark; Light stays Light after a reload; switching back works.

## 2026-10-19 — Brief picks more frameworks; each framework links to its source

Branch: `refresh-and-fixes` · Vercel: Production (pushed 35c2d67, merged to master)

- **The Brief now selects frameworks.** Each use case in `frameworks.js` that matches the Brief
  brings its frameworks. Before, only Video and IDD added one each.
  - **Format Poster, Brochure, Handout, Digital/web or Manual:** CCI, PEMAT-P, Readability,
    Plain Language, UPL and EQIP. Brochure was added to this use case.
  - **Format Video / animation:** PEMAT-A/V (instead of PEMAT-P), Readability, Plain Language
    and UPL.
  - **Audience Low literacy or IDD:** CDC IDD/ELL, SAM, Readability, Plain Language, the AHRQ
    toolkit and Teach-Back.
  - **Audiences Patients, Caregivers and Clinicians** don't add frameworks on their own.
  - Unticking a framework in the Frameworks bar still wins.
- **Source link on every framework row.** A small external-link icon next to the abbreviation
  opens the framework itself in a new tab. It uses the same link as the Framework Compass
  (`frameworks.js` source), and all 23 frameworks have one. Clicking or pressing Enter on the
  icon opens the link without ticking the row.
- **Score type on row 1.** The output type and how it's scored ("Partial score | Self-rated") now
  sit on the abbreviation's line, right-aligned, at every panel width. The full name below gets
  the whole width. Checked: no row overlaps.

## 2026-10-19 — One privacy note, aligned

Branch: `refresh-and-fixes` · Vercel: Production (pushed f8b4fed, merged to master)

- The lock line in the empty Material panel ("Nothing is sent anywhere…") is removed. The
  privacy note in the workspace guide now says it once.
- That note is now plain text after a hairline, with no box and no bullets. Its heading and lines
  start on the same left edge as "How to check your material", so no space is wasted on the
  left.
- Fixed a double line above the note: the last step's hairline is now the only divider.
- The note's lines start where the heading's words start (after the lock icon).
- The empty Material panel now names the formats it reads: "Word (.docx), PDF, text (.txt, .md,
  .html) or an image (.png, .jpg, .webp)". Each format stays together on one line. (`.doc` is
  still accepted only to explain that it should be resaved as .docx.)

## 2026-10-19 — Work survives a refresh; privacy note; front door hand-off; no orphans

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 44eb366)

- **Your work is kept on refresh.**
  - Saved in this browser only (IndexedDB, not cookies), a moment after each change and again
    when you leave the page. Nothing is uploaded.
  - Saved: the material and every opened file (images and PDFs too), History versions, the
    Brief (audience, format, notes) and checklist ratings.
  - Not saved yet: the Frameworks selection.
  - Checked: the sample handout with an applied fix and the sample poster both come back after
    a refresh.
  - **Clear** (Material header) now also empties the file list and History and deletes the
    saved copy.
- **Workspace guide:** a new note, "Your work stays on this computer":
  - Nothing is uploaded.
  - Your work is still here after a refresh.
  - It's gone if you clear site data or switch browser or computer.
  - Clear removes it now.
- **Front door → Studio:** the hand-off is now one movement, about 0.8 seconds.
  - The handout paper flies into the Material panel (or into the Plan after "Plan from an
    idea"), and its words fade as it lands.
  - The yellow countdown line gathers into the yellow "Studio" tab.
  - The headline lifts away and the dark cover dissolves to show the Studio.
  - With reduced motion, the intro simply closes.
- **No orphan words:** headings and captions balance their lines (`text-wrap: balance`), and
  paragraphs and list items avoid a lone last word (`text-wrap: pretty`). This applies site-wide
  in `design-system.css`.

## 2026-10-19 — Studio fixes: suggestion cards, notes, Plan, small polish

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 44eb366)

- **Suggestion cards (Plain language).**
  - Every card shows **Now** (old words struck through in red) and, where a rule can rewrite
    safely, **New** (new words underlined in green). Cards without a rewrite show their sentence
    with the flagged words highlighted.
  - The source is named in the card ("Source: PEMAT-P, AHRQ").
  - **Edit** opens a box to write your own fix, even on cards with no automatic rewrite.
    **Apply** puts it into the document and records it in History.
  - On a poster, Apply changes "Text the tool read" (the artwork isn't edited).
  - After a change, **Save file** appears beside Apply all. It downloads the edited document
    (.html for Word), or the corrected text for a poster.
- **Score notes.** Each note is now a headline with the key number, one or two short points,
  and a yellow **Next** tag with one step. This applies to Readability, Clear Communication Index,
  PEMAT, Accessibility and Accuracy.
- **Plan from an idea.** Brief and Frameworks are hidden at Outline. They appear from Draft on
  (the stages marked "PRISM checks").
- **Cards.**
  - Clicking anywhere on a header bar folds or unfolds the card. Its own buttons and the name
    tooltip still work, and dragging still moves the card.
  - Double-clicking a resize grip fits the box to its content.
  - Card content now reaches the right padding: no reserved scrollbar gutter, and a thin
    scrollbar when a card scrolls.
- **Frameworks list.**
  - "PEMAT" is now **PEMAT-P**, with the full name no longer repeating it.
  - CDC is spelled out in full names ("Centers for Disease Control and Prevention …").
  - Use-case pill text lines up with the name above it.
- **Smaller fixes.**
  - Colour-vision picker buttons are tighter.
  - Dropdown options use theme colours, so they no longer look greyed out in dark mode.
  - The empty Material panel: if nothing is typed or pasted, clicking away brings back the
    prompts and guides.
- **Theme button** names the mode it switches to: **Light** (sun) in dark mode, **Dark** (moon)
  in light mode. DESIGN.md updated.
- **Front door.**
  - The logo stays the same size and position when the intro opens.
  - Simpler wording: "Make your health handout easy to read."

## 2026-10-19 — Logo opens the front door

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 44eb366)

- **Studio:** clicking the PRISM logo brings the Studio view back underneath, with the work in it
  kept, and opens the front door over it. After the countdown, or Skip, you're back in the Studio.
  The logo is now a link (`./?intro`, so Ctrl/⌘-click and new tab still work).
- **Compass page:** the logo goes to `index.html?intro`. `?intro` always shows the front door, even
  if it was seen this session, and is then removed from the address.
- **Code:** `intro.js` can now show the intro more than once (`window.PRISMIntro.show()`). The logo
  link has no underline on hover; it dims instead.

## 2026-10-19 — Front door: one dark screen, handout and slider merged

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 44eb366)

- **Why:** the user wanted both concepts on a dark background, merged and tighter, in one screen
  with no scrolling.
- **Layout:** one dark screen.
  - Left: the kicker, the serif headline, the lede and the two buttons.
  - Right: the handout as a paper plate, with reading grade and flag count in its header and a
    slider underneath.
  - The slider now fixes the handout itself:
    - "diuretic" becomes "water pill" (PEMAT-P, AHRQ).
    - The long sentence is split into three (Federal Plain Language Guidelines).
    - "25%" becomes "1 in 4" (Gigerenzer & Hoffrage).
    - Each fix shows briefly in green, and its source appears under the slider.
- **Timing:** the countdown is 9 seconds, and the three fixes apply by themselves at 2, 4 and 6
  seconds. Touching anything pauses it.
- **Fit:** sizes scale with the screen height. Checked with no scroll at 1440×900, 1280×680,
  1024×768 and 375×812 (phone), in light and dark.
- **Removed:** the separate slider section and the sources footer. Sources now appear in the plate.

## 2026-10-19 — Front door: editorial mockup (serif headlines)

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 44eb366)

- **Why:** to make the site feel more professional and editorial: classic magazine restraint,
  black, white and one yellow.
- **Cover:** the front door now opens on a dark cover (ink in light mode, the dark desk in dark
  mode).
  - A short yellow-rule kicker, then a large **Newsreader** serif headline and a serif lede.
  - The main button is yellow with ink text.
  - The handout is shown as a captioned plate. Its margin notes are ruled rows.
- **Slider:** the section is laid out as a feature. A serif heading and deck sit beside the slider,
  with large serif figures for reading grade and flags.
- **Sources:** a sources line at the foot, with titles of cited sources in italic.
- **Type:** Public Sans stays for the interface, buttons, kickers and captions.
- **Scope:** front door only (`intro.css`, `intro.js`). The Studio and Compass are unchanged
  until this is approved.

## 2026-10-19 — Front door: intro over the Studio

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 44eb366)

- **Why:** the site needed a front door for health communicators and interested members of the
  public. It shows briefly, then hands over to the Studio.
- **What:** at `/`, an intro layer covers the Studio (`intro.css`, `intro.js`; two lines added to
  the `index.html` head).
  - Hero: "See your handout the way your readers will." A patient handout with yellow flags,
    and margin notes that give each fix and its source.
  - Below: "Would your reader get this?" A slider applies the suggestions one at a time, with
    the reading grade and the number of flags.
- **Timing:** after 8 seconds the intro slides away into the Studio, and focus moves to the Studio.
  - A yellow progress line and "Opening the Studio in N s" show the countdown.
  - Any click, key, scroll or slider move pauses it. **Pause** / **Resume** and **Skip to the
    Studio** are always there.
- **Buttons:** **Check a draft** opens the Studio's file picker. **Plan from an idea** switches the
  Studio to Plan mode.
- **When it's skipped:** the intro shows once per browser tab session, so reloading while
  working goes straight to the Studio. It's also skipped for `#about`, any other hash, `?studio`,
  or the Compass view.
- `design/brainstorm/landing.html`: six hero mockups this was chosen from.

## 2026-10-19 — History panel: save with a name, revert, export, delete

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 91f55ba)

- **Closes on an outside click**, as well as with ✕ or Esc.
- **Save a version with a name.** The field and Save version button are at the top of the panel.
  Ctrl/⌘+S still saves.
- **Every version** has three actions:
  - **Revert** (was "Restore"): the version you leave stays in History.
  - **Export**: downloads that version as `<file>-edited-HHMMSS.html`, which opens in Word.
  - **Delete**: asks first. The current text doesn't change.
- The help line now says what each action does. The old line "nothing is deleted" is gone, since
  Delete exists now.
- Checked on localhost: named save, export filename, delete, revert, outside click.

## 2026-10-19 — Compass opens under the same bar; About wording and credit order

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 91f55ba)

- **Studio ⇄ Framework Compass without reloading the bar.** Clicking Framework Compass now shows it
  inside the studio, below the same site bar, with a short fade (none with reduced motion).
  - It used to open in a new tab, so studio work wouldn't be lost. That work now stays in memory
    across the switch (checked: the document text is identical after Compass → Studio).
  - Back and Forward move between the two views. Ctrl/⌘-click still opens the Compass in a new
    tab.
  - Embedded, the Compass hides its own bar (`?embed`) and follows the studio's Dark setting.
  - The Evaluate/Plan switch is hidden while the Compass is showing.
- Visiting the pages directly (for example the Compass's own Studio link): `design-system.css` now
  asks the browser for a cross-document view transition. The bar holds still and the page under
  it cross-fades, in browsers that support it.
- Shared files re-versioned to `?v=20261019a`.
- **About:** the note is now two plain lines: "PRISM scores your writing but leaves the writing to
  you" and "Every check links to its source, and anything you haven't rated stays out of the
  score". It replaces "It grades your work; it doesn't write it…".
- **Credits:** Chloe Ma is listed first, for the larger contribution.

## 2026-10-19 — Centred empty panel; History button; taller cards

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 91f55ba)

- **Empty Material panel is centred.** It holds:
  - a 260px "Open a file" button
  - a "Type or paste text" button of the same width (was a small underlined link)
  - one line, "Or drop a file here. Ctrl/⌘+V pastes from anywhere."
  - the file types and the privacy line
  - the samples, also centred
- DESIGN.md notes this as the one exception to the left-edge rule.
- **History is easy to find.** A "History (N)" button with a clock icon sits in the Material header
  beside Export. It opens the History side panel (saved versions and applied changes, with Undo
  and Restore).
  - The panel and the hints now say "History" everywhere.
  - The footer count still opens it too. Focus returns to whichever button opened it.
- **Score cards can be dragged taller.** The resize corner was capped by a 640px max height. Grabbing
  the corner now lifts the cap. Checked: a drag took the CCI card from 640 to 665px.
- Checked on localhost: 1440×900 and 375px (no sideways scroll), History open and Esc to close,
  no console errors.

## 2026-10-18 — Flagged I logo; yellow becomes the theme colour

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 73b8d7a)

- **Logo.** The wordmark on both pages is now PRISM with the I on a slanted swipe of highlighter
  yellow (concept 3, "Flagged I", from `design/brainstorm/`). Screen readers still hear "PRISM".
  New `favicon.svg` shows the I on the swipe, and switches to a light stem in dark browser tabs.
- **Theme colour.** New tokens `--brand` (`#FFE066` light, `#F5CF4A` dark) and `--on-brand`
  (ink, 13.6:1 light, 11.8:1 dark). Yellow now fills the current page in the site bar and the
  chosen option in segmented toggles (e.g. Evaluate a draft / Plan from an idea). Those toggles
  keep an ink border as the visible cue. Links, focus ring and other selected states stay form blue.
- **DESIGN.md.** The "yellow never in chrome" rule is replaced: yellow is the theme colour, always
  a fill under ink text. Added a Logo section and the two tokens.
- Fonts unchanged (Public Sans + Source Serif 4).

## 2026-10-17 — Plan from an idea: a guided path

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 73b8d7a)

- Why: in Nati Chen's interview (TASKS-framework-gaps.md, T6 and T7), the biggest gap was knowing
  where in the design process the frameworks help, and "most people start with copy only".
- **Plan from an idea** now opens a guided page in place of the workspace. The Brief and
  Frameworks bars stay. Its code lives in the new file `plan.js`.
- **Format picker:** Handout, Poster, Web page, Video / animation. It is synced with the Brief, and
  the plan remembers it across reloads.
- **Four stages**, listed down the side with a status ("1 of 6", "Done"). Stages that use PRISM
  are tagged "PRISM checks".
  - Video: Outline → Script → Storyboard → Animation.
  - Print and web: Outline → Draft → Layout → Final check.
- **Stage by stage:**
  - **Outline:** main message, what to do, up to 3 key points, how long, and medical words. Checks:
    CCI 1, 2, 10; CCI 5; CCI 13–14.
  - **Script / Draft:** opens the editor with the outline in place and turns on the right checks
    (PEMAT-A/V or PEMAT-P, CCI, Readability, Plain Language). Lists the items PRISM scores itself.
  - **Storyboard:** one scene per paragraph of the script (shown / said / words on screen).
    "Check the storyboard words" sends them to the editor. Checks: CDC IDD/ELL 4, PEMAT-A/V 10,
    22, 13, 18, CCI 4.
  - **Layout:** open a layout image or PDF to check it. Checks: CCI 3, 4; PEMAT-P 15, 16, 18.
  - **Animation / Final check:** PEMAT-A/V 14, WCAG 1.2.2 and 1.2.5 (video); WCAG 1.4.3 and 1.1.1
    (print); try it with people from the audience.
- Source links are small and sit after each check; the full citation is on hover.
- **Back to plan:** after the plan sends you to the editor, a "Back to plan: <next stage>" button
  appears in the Material header.
- Replacing editor text asks first and saves a version. Cancel stays in the Plan. **Start over**
  clears the plan but not the editor.
- Reviewed by the reader-advocate agent. Fixed from its review:
  - the script now carries into the storyboard
  - ticks no longer carry over between formats
  - the phone layout no longer clips
  - citations tightened: "one idea per scene" now cites CDC IDD/ELL item 4; audio description is
    WCAG 1.2.5
- Checked on localhost: the video path end to end (outline → editor → back → scenes from the
  script), Cancel, ticks per format, 375px with no sideways scroll, and dark mode.
- Not tested with users yet. Nati walking through it would show whether animators storyboard
  after the script.

## 2026-10-17 — Quieter sources; version history side panel; Wordy rewrites

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 73b8d7a)

- **Sources take less space.** Each suggestion shows a small "Source" link beside "Suggested". The
  full citation appears on hover and opens in a new tab.
- **Version history is tucked away.** It is now a side panel over the right edge of the page,
  hidden until you open it from "N versions" in the Material footer.
  - It no longer takes room inside the Material panel.
  - ✕ or Esc closes it, and focus returns to the button.
- **Review items can be applied too.** Any card with a recommendation gets Apply, whether it is
  marked Fix or Review. The writer decides.
- **New: Wordy card.** Plainer words where a clear swap exists:
  - "in an appropriate manner" → "properly"
  - "a significant period of time" → "a long time"
  - "adequately" → "well"; "adequate" or "sufficient" → "enough"
  - "substantial" → "large"; "numerous" → "many"
  - "various" is dropped (the examples after it say more)
  - Source: Federal Plain Language Guidelines (use simple words and phrases).
- Still no automatic rewrite for passive voice, acronyms, or vague words such as "often" and
  "some". Only the writer knows the agent, the full name or the number.
- **Previews:** changes close together share one excerpt instead of repeating the words between
  them.
- **Change log:** an Apply all entry lists 2 changes, then "and N more".

## 2026-10-17 — Logo and type brainstorm (design/brainstorm/)

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 73b8d7a)

- New folder `design/brainstorm/` with an index page, three type directions (`typography.html`/`.md`),
  six logo concepts with an online similarity check (`logo.html`/`.md`, `logo-svgs/`).
- Picks: type direction 2 "Health column" (Newsreader masthead and headings); logos Pilcrow P and
  Flagged I. Nothing in the studio changed.
- Flagged: the name PRISM is also used by a Kaiser Permanente Washington readability programme.
  A trademark search is needed before adopting a mark.

## 2026-10-17 — Suggested rewrites with Apply; change log with Undo

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 73b8d7a)

- **Suggested rewrites.** Plain-language cards now show a suggested edit, its source, and an
  **Apply** button where a rule can rewrite safely. These rules are used:
  - **Long / longish sentence:** split at an existing ", and", ", but", ", so" or ";". The card
    shows the whole new sentence. Source: Federal Plain Language Guidelines (write short sentences).
  - **Jargon:** the plain words from PRISM's word list, with "a/an" corrected. The card shows only
    the changed words and a few words either side. Source: PEMAT-P items 3–4 (AHRQ).
  - **Bare percentage:** "25% of readings" becomes "1 in 4 readings", but only where it still
    reads right ("25% of the time" gets no rewrite). Source: Gigerenzer & Hoffrage (1995).
  - Passive voice, vague words and acronyms keep their advice but get no automatic rewrite: a
    rule could change the meaning.
- Cards with a rewrite no longer repeat the original sentence: clicking the card highlights it in
  the text.
- **Apply all** above the list applies every suggested change, sentence by sentence.
- Each edit goes through the editor's own undo (Ctrl/⌘+Z) and keeps bold and other formatting.
  Word map: "asymptomatic" now becomes "without symptoms" (was "no symptoms", which didn't fit
  as an adjective).
- **Change log.** The Versions drawer records every applied suggestion: struck-through old words,
  underlined new words.
  - **Undo last change** goes back one step. **Restore** brings back any older version.
  - Nothing is deleted: undo and restore add entries.
  - The state before the first suggestion is saved automatically.
- **Fixed:** the previous commit's empty-panel markup closed one `</div>` too many, which pushed
  the word-count footer and Versions drawer outside the Material panel. (Not pushed, so the
  Preview was never affected.)
- Checked on localhost with the sample handout: previews, Apply, Undo, Apply all (3 changes, none
  left), formatting kept, change log entries, light and dark.

## 2026-10-17 — Empty Material panel: option C, neater

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 73b8d7a)

- Feedback: the upload section still looked bad. Three options were built as a demo
  (`demos/upload-options.html`, not committed), critiqued, and reviewed by the reader-advocate
  agent. The user picked C, "but neater".
- The panel now has:
  - one 48px **Open a file** button. It says "Open", not "Upload": to people handling patient
    materials, "upload" sounds like the file is sent to a server.
  - one line: "Or drop it here, or paste or type text".
  - the file types.
  - a privacy line with a lock: "Nothing is sent anywhere. PRISM reads it in this browser."
  - after a hairline, "No file? Try a sample", with the handout and the poster shown as small
    pictures (labelled Word file and Image).
- The dashed box, the large icon and the Checks/Edit/Save notes are gone. Everything starts on
  the panel's text edge (measured: 37px, the same as the panel title).
- While the panel is empty, dragging a file over it shows "Drop to open it" across the panel.
  Ctrl+V with no field focused pastes into the editor.
- Checked on localhost: 1440×900, 375px phone (no sideways scroll), dark mode, drop overlay,
  paste, and the sample buttons.

## 2026-10-17 — Empty Material panel: simpler and bigger

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- Feedback: the empty panel was hard to read, too wordy, and repeated "Add your material"
  (already step 2 of the Guide).
- The heading is gone. The drop box now fills the panel and shows a page-with-arrow icon,
  then two 48px buttons, "Upload a file" and "Type or paste", in 17px type.
- One short line, "Or drop it here. Word, PDF, text or an image.", and the samples
  (Handout, Poster), in 14px instead of 13px.
- The three bulleted guide sections (10 lines) became three one-line rows in full-contrast
  14px text: Checks, Edit, Save.
- Checked on localhost: 1440×900, an 800px pane, 375px phone (no sideways scroll), and dark
  mode.

## 2026-10-17 — Empty Material panel with guidance; Export

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Empty panel redesigned.** The panel used to show a centred "Drop anything in here" with
  three small buttons. It now shows, left-aligned on the panel's edge:
  - **Add your material:** a dashed drop box with a large **Upload a file** button,
    "Type or paste instead", the accepted file types (Word .docx, PDF, .txt/.md/.html,
    PNG/JPG), and the two samples.
  - **What PRISM checks:** reading level and sentence length; jargon, passive voice and
    vague words; the chosen frameworks' checklists; for images, text read automatically
    plus contrast and alt text.
  - **While you edit:** scores update as you type, flagged issues link to your text, and
    Ctrl/⌘+S saves a version.
  - **Saving your work:** your file stays in your browser and isn't uploaded; edits and
    versions last until the tab is closed or reloaded; Export copies or downloads.
  - Clicking blank space starts typing. It fits a 1440×900 screen without scrolling, with
    three guide columns that stack on a phone.
- **Export** (Material header, once there's text; hidden for images):
  - Copy text.
  - Download for Word (.html), which opens in Word.
  - Download plain text (.txt).
  - Files are named `<file>-edited`, and the original is never changed.
- Checked in both themes: contrast passes and only the existing type treatments are used.

## 2026-10-17 — Frameworks: use-case tags replace the situation tiles

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- Removed the "Start from a situation" section from the Frameworks dropdown.
- Each framework now shows **use-case tags**: Common, Print & web, Video, Low literacy,
  Decision aid, Behaviour, Inclusive, Research, Emergency. A tag that matches the Brief's
  format or audience is highlighted.
- The list is **sorted by use case** by default. Area, Recommended and Name A–Z are still
  in Sort.
- The Framework Compass rows show the same tags. The short tag names live in
  `frameworks.js`.

## 2026-10-17 — Frameworks: sort, and shorter rows

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Sort** (next to Filter): By area (default), Recommended, Name A–Z, By use case. The
  choice is remembered (`pea.fwSort`).
  - Recommended puts UPL and PCORI first (used most by our partners), then the checks
    that fit most patient materials, then specialist ones. It's a recommendation, not a
    usage statistic (`RECOMMENDED` in `frameworks.js`).
  - By use case groups frameworks under the situations, each framework once, under its
    first situation.
- **Shorter rows:** the description line is gone. Hover over or click the abbreviation
  (dotted underline) to read it. Clicking the abbreviation doesn't tick the row; screen
  readers still get the description through the row.

## 2026-10-17 — One left edge for text, everywhere

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Rule:** every container (bar, panel, card, dialog, list) has one left edge for its
  text, the new `--inset` token (16px). Rows with a checkbox or number put it on that edge,
  and all their text shares one indent. Written into `DESIGN.md` and into the design
  agents (layout designer, design-system manager, coder, reader-advocate, design lead).
- **Fixed against it:**
  - The Brief and Frameworks panels now start on the bar title's edge (they were 4px
    further in).
  - Framework rows put the checkbox on the edge, with the hover fill still running edge
    to edge.
  - "Score" is plain strong text on the row indent instead of a padded pill; "Auto +
    review" follows after a hairline. Both were right-aligned in wide layouts.
  - The Material header is on the same edge as the cards. Card headers and bodies, bar
    titles and Compass rows all use `--inset`.
- **Measured:** in the Frameworks panel, every heading, the count, the checkboxes and the
  situation boxes start on one edge, and row text shares one indent. Card titles and
  bodies, and the Material header, sit on the same edge.
- `DESIGN.md` now says the theme is light by default with one Dark toggle. It still
  described the old System / Light / Dark switch.

## 2026-10-17 — Fix: Dark button missing after an update

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Cause:** the Dark toggle started hidden and was revealed by `theme-switch.js`. A
  browser still holding the previous cached copy of that script (which revealed the old
  three-button switch) left the new button hidden.
- **Fix:** the toggle is visible in the page markup from the start.
- Shared files are now loaded with a version (`?v=20261017b`), so browsers fetch fresh
  copies after a change. This covers `design-system.css`, `theme-switch.js`,
  `frameworks.js` and `analysis-engine.js`. **Bump the version** whenever one of these
  files changes.

## 2026-10-17 — About dialog: one "Got it" button

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- The About footer has a single button, **Got it**, which closes the dialog. The
  Framework Compass button was removed; the Compass is still in the site bar.

## 2026-10-17 — Renamed to PRISM; About credits and feedback

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **The app is PRISM.** "Patient Education Analyzer" is replaced in:
  - the site bar on both pages
  - the page titles ("PRISM — Studio", "Framework Compass — PRISM")
  - the About dialog ("About PRISM", and the lead now opens "PRISM is a free,
    open-source tool…")
  - the design-system header
- **Credits stand out.** About's "Made by" shows Sonia Seto (Sonia Seto Studios) and Chloe
  Ma (GoInvo) as two name cards: the name in Heading weight, the studio or company under
  it. A short line notes Claude helped build and test the code.
- **Feedback.** A new section links to prism@goinvo.com.
- Checked in both themes. On a 768px-tall screen the About text now scrolls slightly, but
  the header and footer stay in view.

## 2026-10-17 — Frameworks rows: name on two lines, distinct output tag

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- Each framework row reads, in order:
  1. the abbreviation (Body strong)
  2. the full name on its own line (Body)
  3. what it checks (Caption)
- The output type ("Score", "Partial score", "Checklist") is now a small outlined tag in
  ink. How it's scored ("Auto + review", "Self-rated") stays plain grey text beside it,
  so the two read as different things.
- Contrast checked in both themes.

## 2026-10-17 — PEMAT for digital materials, made clear

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- AHRQ publishes no separate "digital" PEMAT. Its User's Guide (checked 2026-10-17) says:
  - PEMAT-P covers printable materials "(e.g., brochures, pamphlets, PDFs)", including
    material printed from websites "(e.g., PDFs or html text)".
  - PEMAT-A/V covers video and multimedia, including "interactive content".
  - PEMAT can't assess podcasts or the user-friendliness of websites.
- Wording updated to match:
  - PEMAT is now "— printable (PEMAT-P)", described as "for print and printable digital:
    PDFs and web page text".
  - PEMAT-A/V mentions multimedia and interactive content.
  - The "Print handout or poster" situation is now "Handout, poster or web page". It's
    suggested for the Digital Brief too.
  - The Brief's Digital choice has a tooltip saying which PEMAT applies.

## 2026-10-17 — Light by default, one Dark toggle; "Clear"

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- The site is light by default and no longer follows the system's dark setting.
- The System / Light / Dark switch is replaced by one **Dark** toggle in the site bar, on
  both pages. Your choice is remembered (`pea.theme`) and shared between the pages.
  Checked with the OS set to dark: the site still opens light.
- The Frameworks panel's "Clear selection" button now reads **Clear**.

## 2026-10-17 — Frameworks dropdown: situations and grouping

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Start from a situation.** The Frameworks dropdown opens with nine one-click starting
  points. Each shows which frameworks it picks; clicking it again clears that set.
  - Used often in our work: UPL, PCORI
  - Print handout or poster: CCI, PEMAT, Readability, Plain Language, UPL, EQIP
  - Video or animation: PEMAT-A/V, Readability, Plain Language, UPL
  - Low literacy or IDD: CDC IDD/ELL, SAM, Readability, Plain Language, AHRQ Toolkit,
    Teach-Back
  - Decision aid: IPDAS, Ottawa DSF, SHARE, DISCERN
  - Changing a behaviour: COM-B, HBM, EPPM, TTM
  - Inclusive, person-centred: CDC Inclusive Comms, UPL, Picker
  - Research with patient partners: PCORI
  - Health emergency: WHO ERC, CCI, Plain Language
- Situations that match the Brief (format or audience) move to the top, marked "Suggested".
- **All frameworks** are listed below, grouped under area headings with counts.
- The situations live in `frameworks.js`, so the Compass's filter offers the same ones
  ("Show: by situation or by area").
- UPL's description notes it was developed with Bridgeable (per the UPL Rules document).
  UPL and PCORI are confirmed as frequently used, so they stay.
- PCORI in the tool is the Foundational Expectations, which PCORI says update its 2014
  Engagement Rubric.

## 2026-10-16 — About dialog: shorter, clearer, centred

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Centred.** The page's global `margin:0` reset had cancelled the browser's automatic
  centring of dialogs; it now sits in the middle of the screen.
- **Shorter:** 157 words, down from about 420, and fits without scrolling on a laptop.
- **New structure:**
  - a one-line lead
  - "How it works" as three numbered steps (Set the Brief, Add your draft, Pick
    frameworks), plus one line on the tool's principle
  - a two-sentence "Why we built it"
  - "Made by"
  - a footer with a Framework Compass link and Close
- Removed the talk takeaways and the "working name is Prism" line.
- Checked in both themes: text passes contrast, it uses only the existing type
  treatments, and focus starts on Close.

## 2026-10-16 — Compass: search row pinned to the top

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- On the Framework Compass, the search box, area filter and "N of 23" count stay pinned at
  the top of the screen while you scroll the list. Jumping to a framework by link (e.g.
  `#upl`) leaves room so the row doesn't cover it.

## 2026-10-16 — Frameworks list: pinned header, full names

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- The "23 frameworks · Filter · Clear selection" row stays pinned at the top of the
  Frameworks panel while the list scrolls under it. The Filter menu still opens on top.
- Each framework shows its full name after the abbreviation, for example "CCI CDC Clear
  Communication Index".
  - Where the name starts with the abbreviation, only the rest is shown (PCORI
    "Foundational Expectations for Partnerships in Research").
  - DISCERN and Teach-Back stay as they are.
  - COM-B is spelled out as "Capability, Opportunity, Motivation – Behaviour model"
    (in `frameworks.js`, so the Compass shows it too).

## 2026-10-16 — Plain language issues show the full sentence

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- Each issue in the Plain language card now quotes the whole sentence it's about, wrapped
  over as many lines as it needs. Before, sentences were cut at 58 characters and to one
  line with "…".

## 2026-10-16 — Proofing desk look, with light and dark themes

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **New look, written down in DESIGN.md:**
  - The material sits on a white sheet on a cool grey desk. Panels are flat sheets with thin
    rules; only menus, dialogs and the open Brief and Frameworks panels have a shadow.
  - The type is Public Sans for the interface and Source Serif 4 for the document, still in the
    same seven treatments.
  - Actions are ink and links are form blue. The old indigo accent and cream background are gone.
- **Light and dark themes:**
  - Both pages have a System / Light / Dark switch in the site bar. System follows your
    computer's setting.
  - Your choice is remembered, and the page opens in it without a flash of the other theme.
  - Every colour in the studio comes from the shared tokens, so dark mode has no light leftovers.
    The document paper goes dark too. Your uploaded artwork is never recoloured.
- **Highlighter marks:** flagged words in the document (jargon, bare percentages, vague words,
  acronyms) get a yellow mark and an underline, so they show without relying on colour.
  Clicking an issue underlines its words more heavily. The document itself isn't changed.
- **Score sheets:** checklist rows show the item number in a left margin, then the text and the
  rating buttons, with thin rules between rows instead of boxes inside boxes. The Frameworks
  picker is a list of rows instead of a grid of cards.
- **One site bar:** both pages share the same site bar (Studio, Framework Compass, About), with a
  skip link. On a phone it takes two rows on the Compass and three on the studio.
- **Text in artwork:** the tool reads each image twice, normally and inverted, so white text on
  coloured backgrounds is found. On the sample poster it now finds 49 of 55 words; it found 32
  before. The card warns that this kind of text is easy to miss.
- **Smaller fixes:**
  - The artwork highlight is an outline with no fill, so the artwork's own text stays readable.
  - "Read text again" asks for confirmation on the page instead of in a browser pop-up.
  - The CCI summary counts add up.
  - The .doc warning clears when you open something else.
  - Switching theme no longer flickers.
- **Checks:**
  - The avoid-ai-design scanner finds nothing on either page or the stylesheet; Inter, indigo,
    cream, accent words, arrows on buttons and dot-separated meta lines were all flagged before.
  - All text measures at least 4.5:1 contrast in both themes, at desktop and phone widths.

## 2026-10-16 — Studio and Compass share one framework list and one design system

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Same frameworks everywhere.** The studio now builds its framework list (names,
  descriptions, areas, source links) from `frameworks.js`, the list the Framework Compass
  uses. Both show the same 23.
  - Added to the studio: UPL (64 items) and PCORI (6).
  - Removed from the studio: SEIPS and Planetree, plus the hidden reference-only entries.
- **`FW_REG` regenerated** from the engine. It picks up the updated Picker principles,
  UPL, PCORI and the moved source links.
  - `scripts/build-fw-reg.js` now takes its framework map from `frameworks.js`.
  - `--check` also reports frameworks added or removed, instead of crashing.
  - It prints "checked 23 existing keys" with no differences.
- **One design system.** The studio loads `design-system.css`, the stylesheet the Compass
  uses, and drops its own copies of the tokens and button component. The design team's
  button (primary / secondary / quiet / icon) is now the shared definition. Measured: the
  studio and the Compass use the identical type treatments, nothing is under 13px, and no
  text is below 4.5:1 contrast.
- The top-bar link now reads "Framework Compass ↗". It used to say "Full compass (26)",
  a count that had drifted.

## 2026-10-16 — Studio refinement: calmer buttons, artwork review, honest artwork scores

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **Buttons:** one button style in three strengths (primary, secondary, quiet). The coloured
  dots on Upload, Files, Clear and the samples are gone, because the colours meant nothing.
  Framework tags and the Plain language count tiles are neutral too.
- **Less on screen:** removed the "live" dot next to Material, the clear-formatting and link
  buttons, and the long empty-state paragraph. Track changes and Save version moved into the
  version drawer (Ctrl/⌘+S still saves). Files shows only once two files are open. Upload
  appears once per area, and the guide no longer repeats it. Framework sources sit in a
  collapsed "Sources" section, and repeated notes on the cards are cut. The honesty messages
  stay, shorter.
- **Images and PDFs:** the Material panel shows only the artwork, with zoom out / Fit / zoom
  in, Shift+= / Shift+− / Shift+0 while you're in the panel, and drag to pan. Alt text, Colour
  and contrast, and Text the tool read are cards on the right. Visual type is gone.
- **Text the tool read:** the tool reads the words in an image automatically (Tesseract.js,
  loaded only when artwork opens), and you can fix them. Click a line or a Plain language
  issue to see where it is on the artwork. PDFs with a text layer use that text and keep
  their line breaks.
- **Alt text:** "Download image with alt text" saves a copy of the JPEG or PNG with the alt
  text in its accessibility metadata (IPTC Alt Text). The original file isn't changed. Copy
  works for every file type.
- **Guide:** "How to check your material" sits on the page background instead of a card.
- **Frameworks filter:** the four-button filter is now a compact Filter menu.
- **Fixes from the review:**
  - Brief and Frameworks open from the keyboard, and closed panels no longer take focus.
  - Cards have real headings.
  - The plain-language scan no longer reads a Word document as one long sentence; all counts
    agree.
  - Wrapped artwork lines join into sentences, and poster reading levels never auto-pass.
  - A .doc file that can't be opened shows a message instead of being scored.
  - The Material footer fits on a phone.

## 2026-10-16 — Scoring rules folded into the Framework Compass

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- Each Compass row has a collapsed **How it's scored** section, built from the engine
  registry. It lists the formula, pass mark and rating scale (where the instrument has
  them), a short note, and every item grouped by part.
  - Each item carries its scoring rule and a tag if it needs the design or records
    beyond the material.
  - Items keep their instrument numbers. For example, PEMAT-P runs 1–12 and 15–26, as
    AHRQ numbers it.
  - Frameworks with no pass mark say so plainly.
- Deleted `framework-scoring-logic.html`. Nothing linked to it, and it covered the old 26
  frameworks with hand-written rules that could drift from the engine.

## 2026-10-16 — Remove the Classic page

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- Deleted `classic.html`, the old "Classic" analyzer view. Nothing linked to it any more;
  the studio (`index.html`) replaces it. It stays in git history if it's ever needed.

## 2026-10-16 — Framework Compass rebuilt; UPL and PCORI added; shared design system

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **One list of frameworks.** New `frameworks.js` holds the 23 frameworks the studio uses: a
  one-line description, output type and the framework's own primary source for each.
  The Compass is built from it plus the engine registry, so it shows exactly what the
  studio uses. The studio switches to the same list once the design pass lands.
- **Framework Compass rebuilt** (`framework-compass.html`):
  - Removed the 3-step "Find your framework" wizard, the emoji filter chips, the
    metric/benchmark columns and the stacks.
  - Each framework is one row: name, one-line description, Score/Partial/Checklist tag and
    a link to its primary source. The full references sit in a collapsed "All references".
  - Search and an area filter. 23 frameworks in 4 areas.
- **Removed from the Compass** (not used in the studio's checks, or not relevant to patient
  materials): NCI Pink Book, OPTION, PAM, CAHPS, NPS, EBCD and Beryl PX were reference-only;
  SEIPS (patient-safety systems) and Planetree (organisation certification) aren't about
  patient materials. SEIPS and Planetree also leave the studio list in the next step.
- **Added: UPL — Universal Patient Language** (Bristol Myers Squibb).
  - 64 items, verbatim from the UPL Guidance Document (© 2026, 9 best practices). That's
    the current source the upl.org deep links lead to.
  - Each item cites its detailed-guidance page and, where one exists, the matching rule
    in the older UPL Rules (2017).
- **Added: PCORI Foundational Expectations for Partnerships in Research** (updated March 2026).
  - The 6 expectations, verbatim, with PCORI's "Questions to ask" for each.
  - It rates the project's partnerships, not the material, so you answer from what you
    know about the project.
- **Sources checked 2026-10-16** and updated where they had moved:
  - DISCERN → University of Oxford (NDPH)
  - Plain Language → digital.gov
  - SHARE → AHRQ `/sdm/share-approach/`
  - IPDAS → decisionaid.ohri.ca/ipdas.html
  - Picker → the current Picker Principles page
- **Picker updated** to its current eight principles (names verbatim from picker.org). Each
  one says what to look for in a document. The old items paraphrased the 1993 version.
- **Shared design system.** New `design-system.css` holds the tokens, the 7 type
  treatments, the button component, the site bar and the disclosure style for every page.
  The Compass uses it, with the same site bar as the studio.

## 2026-10-16 — Getting-started steps in the empty card area

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- While no score cards are showing, the card area shows "How to check your material":
  1. Set your Brief (with an Open Brief button)
  2. Add your material (Upload a file, Try a sample)
  3. Pick your frameworks (Open Frameworks)
  4. Review the results
- Each step turns into a ✓ when it's done. The guide steps aside as soon as a card appears.
- It uses only the existing type treatments: Display for the title and step numbers,
  Heading for the step names, Body for the text, Caption for the buttons.

## 2026-10-16 — Cards show only what you picked; fewer notes

Branch: `refresh-and-fixes` · Vercel: Preview (pushed 60d4d1a)

- **CCI and PEMAT cards** show only when CCI or PEMAT is picked in Frameworks (or switched
  on by the Brief). Before, they always showed once there was text.
- **Framework checklists card** shows only when a picked framework has no card of its own
  (SAM, PEMAT-A/V, CDC IDD/ELL and so on). It also shows when a picked scoring card is
  waiting for text, so the "needs text to score" prompt still appears.
- **Accessibility and Accuracy** are off by default. They're still in the other workspace
  presets, which are hidden for now.
- With text and nothing picked, the studio shows Readability and Plain language.
- **Notes removed:**
  - the "N of 20 items scored from your text · you tick the rest", "Worked out from your
    text" and "Flags problems for you · no official score" lines under each card title
  - the "has its own card below… cards you didn't pick are faded" note in the checklists card
- Fix: the list of cards (`MODS`) is now defined before the Frameworks bar first renders
  during load.

## 2026-10-16 — Half-width document panel, one checklist control, seven type treatments

Branch: `refresh-and-fixes` · Vercel: Preview

- **Material panel at half the screen, adjustable.**
  - On desktop the document and the score cards start 50/50, with a divider between them.
  - The divider responds to dragging, the arrow keys (Shift for bigger steps), Home and
    End, and double-click to reset. The width is remembered per browser.
  - The Brief bar lines up with the document column.
  - Below 1000px the panel starts at half the screen height and can be dragged taller or shorter.
- **One checklist control.** The CCI, PEMAT and every framework checklist (PEMAT-A/V, CDC
  IDD/ELL, Inclusive Comms, SAM, DISCERN, EQIP and the rest) now use the same row of
  rating buttons. This replaces the mix of checkboxes and dropdowns.
  - Pressing the selected button again clears the rating.
  - Auto-scored and score-sheet-locked items show their value on the same buttons, locked.
  - Tool suggestions show as dashed buttons until you confirm them.
  - CCI's "Doesn't apply" is the same button style.
  - In a card narrower than 400px, the buttons move under the item text.
- **Seven type treatments, site-wide.** An audit of all four pages found 41 distinct text
  styles: 34 in the interface and 7 in the document preview. They used 6 weights,
  13.5px half sizes, italics, uppercase and a monospace font. Now:
  - Display 24/600 · Heading 17/600 · Body 14/400 · Body strong 14/600 · Caption 13/400 ·
    Caption strong 13/600 (all Inter).
  - Reading, serif 15/400, for the document being evaluated.
  - Rules: weights 400 and 600 only; no italics, uppercase or letter-spacing; Inter on
    every page (the compass and scoring-logic pages used the system font).
  - The document preview's headings use Display and Heading. Bold and italic the author
    wrote in their own draft are kept as written.
  - The Italic toolbar button shows a math-italic glyph instead of italic type.
  - The re-audit found exactly these 7 on `index.html`, `classic.html`,
    `framework-compass.html` and `framework-scoring-logic.html`.

## 2026-10-16 — Top nav: Full compass and About

Branch: `refresh-and-fixes` · Vercel: Preview

- **Full compass (26) ↗** moved from inside the Frameworks panel to a new top nav on the
  right of the top bar.
- **About** opens a dialog with the project summary. It's adapted from the "BMC AI Talk Proposal"
  Google Doc and covers:
  - what the tool is and why we built it
  - how it works and how we built it with Claude
  - the takeaways, and who we are
- The proposal's title options, its undecided PRISM name variants and contact email are
  left out. The working name is given as Prism.
- The dialog closes with Escape, the ✕ button or a click outside. Focus returns to the About button.

## 2026-10-16 — Remove the mode-switch hints

Branch: `refresh-and-fixes` · Vercel: Preview

- Switching modes no longer flashes a hint, so both buttons behave the same. Removed:
  - "Plan from an idea": "Planning mode — set Brief and Frameworks first. Add scoring
    modules (CCI, PEMAT…) once you have a draft…"
  - "Evaluate a draft": "Evaluate mode — upload or paste a draft and it scores against
    your Brief and the frameworks."

## 2026-10-16 — Design refresh: tokens, 13px type floor, smaller canvas

Branch: `refresh-and-fixes` · Vercel: Preview

- **Layout.** The studio is a grid now, not absolutely positioned panels.
  - The document column is capped at 560px. It used to fill everything left of a
    320px card column.
  - Score cards fill the rest, in balanced 300px+ columns (two on a laptop).
  - The Brief and Frameworks bars span the top.
  - Below 1000px everything stacks into one scrolling column. At 375px the editor is
    usable (326px wide; it was 13px) and nothing scrolls sideways.
- **Type.** Every font size is on a scale of 13 / 14 / 15 / 17 / 20 / 24 px. Nothing on the
  site renders below 13px; it used to go down to 8px, with 145 declarations under 13px.
  - Measured in the browser: 0 text elements under 13px in the studio (text and visual mode),
    `classic.html`, `framework-compass.html` and `framework-scoring-logic.html`. The other
    three pages had 218 sizes under 13px raised to 13px, with no other restyling.
  - Tiny uppercase tracked labels are now sentence-case semibold labels.
- **Colour.** New stone-neutral palette with a deep blue accent (`#2f4ac0`) in place of
  the purple.
  - Every text grey is at least 5:1 on every surface; the accent is 7.3:1 on white.
  - A browser scan of visible text found no contrast below 4.5:1, apart from the
    user's own artwork and swatch previews.
- **System.** Design tokens on `:root`: type scale, 4px spacing scale, radii, shadows and
  focus ring.
  - A refresh layer restyles the top bar, the bars, cards, pills, tags, checklists,
    meters, segmented controls and the tooltip on those tokens.
  - A visible focus ring is shown for keyboard users.
  - `prefers-reduced-motion` is respected.

## 2026-10-16 — Close open tasks: honest scoring, single-source notes, verified wording

Branch: `refresh-and-fixes` · Vercel: Preview

- **No passes without evidence in visual mode.** A transcript can't show headers, emphasis,
  visuals or tables, so those signals are now "can't tell" (null) instead of guessed.
  - The CCI and PEMAT-P items that depend on them are left for the designer, tagged
    **check design**.
  - "No tables" no longer marks PEMAT item 19 N/A from a transcript.
  - CDC IDD/ELL item 10 is no longer N/A from a transcript.
- **Unreviewed items are not failures.** This applies to all four instruments:
  - **CCI and PEMAT-P:** manual items are rated Not reviewed / Met / Not met (was a
    checkbox, where unticked meant failed).
  - **CCI:** shows "N met · N open" until every item is rated. It shows a fail only once
    90 is out of reach.
  - **PEMAT-P and PEMAT-A/V:** show a percentage only once all of a scale's items are rated.
  - **CDC IDD/ELL:** shows a total only once every item is answered.
  - Removed the predictions about readers ("readers may get it wrong and not act").
    PEMAT's 70% is called a working target.
- **Engine is the single source for `FW_REG` again.** PR #2's plain-language notes moved
  into `analysis-engine.js` as `uiNote` and `passThreshold.uiLabel` (20 fields).
  `build-fw-reg.js` uses them, and `--check` now exits with an error on drift.
- **Item wording checked against the sources** on 2026-10-16:
  - PEMAT-A/V: 17 of 17 match AHRQ.
  - PEMAT-P: 24 of 24 match AHRQ, after fixing item 15, which was missing AHRQ's example.
  - CDC IDD/ELL: 27 of 27 match CDC's PDF.
  - CDC Inclusive Comms: 12 of 12 match CDC's archived pages and Calanan et al. 2023.
- **Handoff pack** (`handoff/`) restored and updated with these results and the remaining
  decisions. Those are confirming the IDD tool with Nati, whether a Brief choice should
  switch Inclusive Comms on, Everyday Words, and the public framework count.

## 2026-10-16 — Release PR #2 to Production

Branch: `master` · Vercel: Production

- Merged PR #2 (merge commit `19f5989`). It ships these changes to the live site:
  - the evidence validation report (`docs/evidence-validation-report.md`)
  - CCI, PEMAT and DCS aligned with the published instruments
  - the simplified Studio UI
  - the T1–T3 frameworks added to that UI (see the entry below)

## 2026-10-16 — Resolve conflicts: merge `master` into PR #2

Branch: `claude/inspiring-faraday-au7zm5` · Vercel: Preview (PR #2)

PR #2 ("Align CCI/PEMAT/DCS with published instruments; simplify Studio UI") was branched
before T1–T3, so it conflicted with `master` in `analysis-engine.js` and `index.html`.
Resolved by keeping the PR's new UI and adding the T1–T3 frameworks to it:

- **PEMAT pass mark:** kept `master`'s wording. AHRQ's User's Guide (Step 7) says "the higher
  the score, the more understandable or actionable", and its Introduction and How-To pages
  set no 70% cutoff (checked 2026-10-16). The card now says 70% or more is this tool's
  *working target*. The PR's ≥70% comparison is kept.
- **Frameworks list:** PEMAT-A/V, CDC IDD/ELL and CDC Inclusive Comms added to the PR's
  in-app list, which goes from 20 to 23. Short descriptions were written in the PR's plain style.
- **Brief:** the PR's simplified chips are kept. "Video / animation" and the IDD audience
  still switch their frameworks on. The PR's "scoring modules in use count as selected"
  rule is kept alongside.
- **`FW_REG`:** kept the PR's hand-written plain-language notes and added the three new
  entries. Note: `scripts/build-fw-reg.js --check` now reports 18 differences (the PR's
  rewrites exist only in `index.html`, not the engine). Don't run the script without
  `--check` until the engine notes are brought in line, or the rewrites will be lost.

## 2026-10-16 — Release to Production

Branch: `master` · Vercel: Production

- Merged `frameworks-t1-t3` into `master` (merge commit `fd503b4`), shipping the
  framework additions below to the live site.

## 2026-10-16 — Add PEMAT-A/V, CDC IDD/ELL and CDC Inclusive Communication

Branch: `frameworks-t1-t3` · Vercel: Preview

- **PEMAT-A/V** (AHRQ, 17 items) added for video, animation and multimedia. Official AHRQ
  item numbers and N/A conditions are kept; no pass mark, as AHRQ sets none.
- **CDC IDD/ELL** product development tool (27 items, 90% threshold, Part A rule) added for
  adults with intellectual/developmental disabilities or extreme low literacy.
- **CDC Health Equity Guiding Principles for Inclusive Communication** added as a
  principles checklist with a term scan that offers CDC's "Try this…" suggestions.
- **Brief:** new "Video / animation" format and "IDD / extreme low literacy" audience; each
  switches on the matching framework automatically.
- **PEMAT print:** the 70% target is now labelled a working target, not an AHRQ cutoff;
  the card points to PEMAT-A/V when the brief says video.
- Prompt builder passes item rules, N/A conditions and "needs visuals" flags to the model.
- Framework count in the UI goes from 26 to 29.
- `scripts/build-fw-reg.js` added: regenerates the UI's framework data (`FW_REG`) from
  `analysis-engine.js`. Run with `--check` to confirm the two are in sync.
- `Archive/` is now ignored by git.

Known open items: item wording still to be checked against the AHRQ and CDC source
documents; the CDC IDD/ELL link is the stacks.cdc.gov candidate, not yet confirmed.

## Earlier (from git history)

- 2026-10-14 — Merged Sonia's fork updates into `master`.
- Fix: topbar controls unreachable below tablet width.
- Merged `sonia-frameworks-v2`: frameworks topbar, live Brief/Tune feedback, mode toggle.
- Simplified studio module headers; removed prototype cruft.
- Added supporting studio files; removed standalone `studio.html`.
- Restyled `index.html` into the unified Patient Education Analyzer studio view.
- Initial commit: communication framework tool.
