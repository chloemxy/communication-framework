# History log

Every change to the site is recorded here, newest first. Each entry names the branch,
what changed, why, and where it is deployed on Vercel (pushes to a branch make a
Preview deployment; `master` is Production).

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
