# History log

Every change to the site is recorded here, newest first. Each entry names the branch,
what changed, why, and where it is deployed on Vercel (pushes to a branch make a
Preview deployment; `master` is Production).

## 2026-10-16 — Getting-started steps in the empty card area

Branch: `refresh-and-fixes` (local) · Vercel: not deployed

- While no score cards are showing, the card area shows "How to check your material":
  1. Set your Brief (with an Open Brief button)
  2. Add your material (Upload a file, Try a sample)
  3. Pick your frameworks (Open Frameworks)
  4. Review the results
- Each step turns into a ✓ when it's done. The guide steps aside as soon as a card appears.
- It uses only the existing type treatments: Display for the title and step numbers,
  Heading for the step names, Body for the text, Caption for the buttons.

## 2026-10-16 — Cards show only what you picked; fewer notes

Branch: `refresh-and-fixes` (local) · Vercel: not deployed

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
