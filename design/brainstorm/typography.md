# PRISM type directions (brainstorm)

Specimen page: `design/brainstorm/typography.html` (direction 0 is the current baseline). Nothing
here is implemented; `index.html`, `design-system.css` and `DESIGN.md` are untouched.

The brief: "the site needs more character", but the Proofing desk stays quiet. So each direction
puts its character in one specific place tied to PRISM's world, and leaves the rest of the
interface alone.

## 1. Hyperlegible

A health-literacy tool set in a typeface built for low-vision readers; the character is the
letterforms themselves.

- Interface + wordmark: **Atkinson Hyperlegible Next** 400/600/800 (Braille Institute). I, l and 1
  are drawn differently, 0 and O differ, large x-height.
- Reading: **Literata** 400/600 (screen long-form serif, optical sizes).
- Wordmark: PRISM in Atkinson 800, 21px.
- DESIGN.md changes: both faces; add 800 for Display and wordmark only; body 14 to 15, reading 15 to 17.
  Keeps: no italics, no letter-spacing, 7 treatments, nothing under 13px.
- Scale: caption 13 · body 15 · reading 17 · heading 19 · display 28/800 · wordmark 21/800.
- Risk: touches every pixel of the interface; Atkinson is wide, so the dense site bar and score
  sheets get longer lines and more wrapping.

## 2. Health column

The editorial health page: a newspaper masthead and serif headlines over the plain
government-sans interface.

- Interface: **Public Sans**, unchanged.
- Reading, display, page headings, score-sheet item numbers, wordmark: **Newsreader** 400/600 with an
  italic (Production Type, on-screen news; optical size axis 6 to 72).
- Wordmark: PRISM in Newsreader 600 at optical size 72, 23px, tracked +0.07em, like a masthead.
- DESIGN.md changes: the serif leaves the document for Display, page Heading, item numbers and the
  wordmark; one italic, for titles of cited sources only; letter-spacing on the wordmark only;
  reading 15 to 17 (smaller x-height than Source Serif 4). Keeps: Public Sans for every control,
  400/600, nothing under 13px.
- Scale: caption 13 · body 14 · reading 17 · heading 19 (serif) · display 30 (serif) · item number
  17/600 (serif, tnum) · wordmark 23.
- Risk: smallest change to controls, but a serif heading next to sans controls needs care so the
  two families do not compete inside one panel (use the serif for page level only, never inside buttons).

## 3. Printed form

The printed government form: a condensed black form title, heavy item numbers, and a wordmark
written one letter per box.

- Interface + wordmark: **Archivo** 400/600/800 with its width axis (condensed 75% for the form
  title, 87.5% for headings and item numbers, normal width for running text).
- Reading: **Source Serif 4**, unchanged, at 16px.
- Wordmark: P R I S M in Archivo 600, each letter in a comb box drawn in the existing
  `--control-border` grey.
- DESIGN.md changes: interface face; width axis for Display, headings and item numbers only; 800
  weight there; item numbers move from ink-2 to ink. Keeps: document face, no italics or letter-spacing.
- Scale: caption 13 · body 14 · item 15/800 · reading 16 · heading 17/800 · display 26/800 condensed.
- Risk: Archivo's capital I and lowercase l are both plain strokes (weakest Il1 of the three);
  the comb wordmark is the most "designed" idea and could tip into decoration.
- Note: I first tried Libre Franklin here. The Google Fonts build failed the tabular-figures test
  (1111 and 0000 measured different widths with `tabular-nums` on), and it is Public Sans's own
  parent, so it would barely differ. Archivo passes.

## Checks

- Tabular figures, measured in the browser (the page reruns this on load): Public Sans, Source
  Serif 4, Atkinson Hyperlegible Next, Literata, Newsreader and Archivo all pass.
- No new colours. Every colour in the specimen is an existing light-theme token. Contrast of the
  pairs it uses (WCAG, computed with a script):

| Pair | Ratio |
|---|---|
| ink #16181D on sheet #FFFFFF | 17.76 |
| ink on highlighter #FFE066 (the marked word) | 13.62 |
| ink-2 #4A5059 on sheet | 8.13 |
| ink-2 on desk #ECEEF0 | 6.99 |
| form-blue #1D4F91 on sheet | 8.14 |
| pass #1E6B3A on pass-bg #E5F1E9 (pressed Agree) | 5.62 |
| control-border #7A828C on sheet (direction 3 comb boxes) | 3.89 (UI component, needs 3:1) |

- 375px: no horizontal scroll (measured scrollWidth = 375).
- Dark mode not specimened. No colours change, but the wordmark in direction 3 must use the dark
  `--control-border` value.

## Recommendation

**Direction 2, Health column.** It gives PRISM a recognisable masthead and a voice on the page
headings without touching a single control, so the score sheets, buttons and the highlighter
stay as quiet as the contract wants. It also fits who uses the tool: health communicators who
write and edit, and who cite sources (the one italic has a real job). The cost is two DESIGN.md
rule changes (one italic, wordmark tracking) and moving the serif up from the document.

If the team cares more about legibility than voice, take one idea from direction 1: use Literata
or Atkinson for the document preview only. Do not adopt direction 3's comb wordmark unless the
form metaphor is pushed elsewhere too; on its own it reads as a gimmick.

## Open questions for the lead

- Does Framework Compass get the same masthead, or a quieter one?
- Is "Prism" in title case acceptable for the masthead, or must the wordmark stay all caps?
- Should the reading face also change the Brief and Plan editors, or only the document preview?
