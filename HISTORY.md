# History log

Every change to the site is recorded here, newest first. Each entry names the branch,
what changed, why, and where it is deployed on Vercel (pushes to a branch make a
Preview deployment; `master` is Production).

## 2026-10-16 — Scoring: no passes without evidence, unreviewed ≠ failed

Branch: `fix-scoring-evidence` · Vercel: Preview

Fixes the two blockers from the reader-advocate baseline audit.

- **Visual mode no longer passes items without evidence.** A transcript can't show
  headers, emphasis or how visuals are used, so "At least one visual", "Key info
  highlighted", "Headers structure the content", "Key information stands out",
  "Headers / bullets group information" and "Visuals support the text" are now left for
  the designer to rate, tagged **CHECK DESIGN**. Previously they passed automatically.
  The CDC IDD/ELL header item (10) is no longer marked N/A from a transcript either.
- **Unreviewed items no longer count as failures.** CCI and PEMAT items the tool can't
  score now have a three-way rating: Not reviewed / Met / Not met (was a single checkbox).
  - CCI shows "N/20 met" with met, not met and not yet reviewed counts; it shows a fail
    only when more than 2 items are not met (18 of 20 can no longer be reached).
  - PEMAT shows a percentage only once every item in a scale is rated, otherwise
    "x of n met · y to rate".
  - Removed the predictions about readers ("readers typically miss the main point",
    "likely to be misread and not acted on"). PEMAT's 70% is called a working target.
- `.claude/launch.json` added: local preview at http://localhost:5173
  (`python -m http.server`).

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
