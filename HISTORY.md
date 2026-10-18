# History log

Every change to the site is recorded here, newest first. Each entry names the branch,
what changed, why, and where it is deployed on Vercel (pushes to a branch make a
Preview deployment; `master` is Production).

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
