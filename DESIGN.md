# Design contract — Proofing desk

Every page (studio `index.html`, `framework-compass.html`, anything added later) is built from
this file and `design-system.css`. Tokens live only in `design-system.css`; pages never redefine them.

## Direction

The tool is a desk where someone proofs a patient handout against published score sheets.
So: the material sits on a **sheet of paper** on a cool grey **desk**; the checks look like
**printed score sheets** — hairline rules, item numbers in a left margin, tabular figures.
Actions are **ink**; links are **form blue** (the blue of government forms). The one signature
colour is **highlighter yellow**, and it marks only flagged words on the document — never chrome.

Spend the boldness in one place: the highlighter marks and the score-sheet rows. Everything
else is quiet.

## Colour (light / dark)

| Role | Light | Dark | Use |
|---|---|---|---|
| desk | `#ECEEF0` | `#121417` | page background |
| sheet | `#FFFFFF` | `#1B1E22` | panels, cards, the document paper |
| sheet-2 | `#F6F7F8` | `#22262B` | quiet fills, headers inside a sheet |
| rule | `#D5D9DE` | `#343A41` | hairlines, borders, score-sheet rules |
| ink | `#16181D` | `#E9EBEE` | text, primary button fill (dark: light fill, dark text) |
| ink-2 | `#4A5059` | `#B4BAC2` | secondary text (≥ 4.5:1 on sheet and desk) |
| form-blue | `#1D4F91` | `#8DB4EC` | links, focus ring, selected state |
| highlighter | `#FFE066` | `rgba(255,214,0,.28)` | marks on flagged words in the document only |
| pass / warn / fail | `#1E6B3A` / `#8A5300` / `#B3261E` | `#7FD19B` / `#F0B357` / `#F28B82` | status text and tags only, always with a word or icon |

No gradients. No indigo/violet. No cream. Dark mode is designed, not inverted: same roles,
re-tuned values, every text pair re-checked to ≥ 4.5:1.

## Type

- Interface: **Public Sans** (the U.S. Web Design System typeface — plain-language government
  forms are this tool's world). Document text: **Source Serif 4**.
- Exactly seven treatments: Display 24/600 · Heading 17/600 · Body 14/400 · Body strong 14/600 ·
  Caption 13/400 · Caption strong 13/600 · Reading (serif) 15/400. Nothing below 13px.
- Weights 400 and 600 only. No italics, uppercase or letter-spacing. Numbers in scores, counts
  and item margins use `font-variant-numeric: tabular-nums`.

## Shape and depth

- Radius 4px for controls, 6px for sheets. No pills except status tags.
- Hairline borders (`rule`) instead of shadows. Shadows only on things that float: dialogs,
  menus, the Frameworks/Brief panels.
- Score-sheet rows: item number in a fixed left margin column (tabular, ink-2), text, then
  the rating buttons; rows separated by hairlines, not cards inside cards.

## Components

- Buttons: primary (ink fill), secondary (sheet + rule border), quiet (no border). One primary
  per region. Labels are verbs, no trailing arrows. External links may keep a small ↗.
- Rating buttons: same height and radius as buttons; pressed state uses the status colour
  as a 2px inset border plus the word — never colour alone.
- Theme: light by default (does not follow the OS). One **Dark** toggle in the site bar; the
  choice is saved in `localStorage` (`pea.theme`) and applied as `data-theme="dark"` on `<html>`
  before first paint (no flash).

## Alignment: one left edge

- Every container (bar, panel, card, dialog, list) has **one left edge** for its text — the
  container's inset (in this project `--inset`, 16px).
- Titles, labels, counts, section headings and paragraphs start on that edge. Text is
  left-aligned: never centred or right-aligned (numbers may right-align inside their own
  numeric column).
- Rows with a control (checkbox, item number, chevron) put the control on the edge; all of
  the row's text — name, full name, description, small labels such as "Score" — starts on
  **one shared indent** after it.
- Bordered or filled sub-boxes (cards, tiles, buttons) put their box on the edge and inset
  their own text. Labels that sit in a line of text are plain text, not padded pills, so
  their text stays on the indent.
- A panel that opens under a bar uses the bar's edge, so the panel's first line sits
  directly under the bar title.
- Content shown as a document (a page preview) keeps its own page margins.
- Check by measuring where each text block starts inside each container: one edge, plus at
  most one row indent. Anything else is a defect.

## Never

Purple/indigo, gradients, cream + terracotta, near-black + one neon accent, one coloured word
in a heading, "A · B · C" meta strings, arrows welded to button text, rounded card + soft shadow
on every surface, decorative numbering, emoji in the interface.

## Checks before shipping

- `avoid-ai-design` scanner: no P0, no SD tells.
- Both themes: every text pair ≥ 4.5:1; focus visible; nothing under 13px; still 7 treatments.
- 375px: no horizontal scroll. `prefers-reduced-motion` respected.
