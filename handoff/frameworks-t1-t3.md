# Handoff: PEMAT-A/V, CDC IDD/ELL and CDC Inclusive Communication (T1–T3)

The change itself is [`frameworks-t1-t3.patch`](frameworks-t1-t3.patch), one commit
(`94dcbee`) made on top of `master` at `cb42306`. It is live on Production, merged as `fd503b4`.

> **Status, 2026-10-16:** `master` has moved on since this patch. PR #2 (simplified Studio UI,
> CCI and PEMAT-P aligned with the published instruments) was merged on top of it. Those
> frameworks now sit in PR #2's 23-framework list. If you're working from current `master`,
> you already have all of this, and you don't need the patch.

- **If your branch is close to `cb42306`:** run `git am handoff/frameworks-t1-t3.patch`.
- **If it isn't:** copy what you need from the patch by hand. All item wording, N/A
  conditions and scoring rules are in the `FRAMEWORK_REGISTRY` entries in
  `analysis-engine.js`. Then run `node scripts/build-fw-reg.js` to regenerate `FW_REG`
  in `index.html`. Don't hand-edit the long `FW_REG` line. On current `master`, the
  studio's short plain-language notes live in each engine entry as `uiNote` and
  `passThreshold.uiLabel`. Edit them there. `--check` exits with an error if `FW_REG` has drifted.

Files touched: `analysis-engine.js`, `index.html`, `scripts/build-fw-reg.js` (new),
`HISTORY.md` (new), `.gitignore` (ignores `Archive/` and `.code-review-graph/`).

---

## 1. Source links

Each link below opened on 2026-10-16 to the document named. On the same day, the item
wording was checked against the source, word for word:
- **PEMAT-A/V:** all 17 items match AHRQ's form.
- **CDC IDD/ELL:** all 27 items match the CDC PDF from CDC Stacks. The 90-point
  "Excellent!" rule, the score formula and the Part A rule match it too.
- **CDC Inclusive Comms:** principles 1–5 match the archived Key Principles page.
  Principle 6 matches the archived Preferred Terms page. Principles 7–12 match Calanan
  et al. 2023.

| Framework | Source | Opened as |
|---|---|---|
| PEMAT-A/V | https://www.ahrq.gov/health-literacy/patient-education/pemat-av.html | "PEMAT Tool for Audiovisual Materials (PEMAT-A/V)", AHRQ |
| PEMAT-P (print, relinked) | https://www.ahrq.gov/health-literacy/patient-education/pemat-p.html | "PEMAT for Printable Materials (PEMAT-P)", AHRQ |
| PEMAT User's Guide | https://www.ahrq.gov/health-literacy/patient-education/pemat.html | "The Patient Education Materials Assessment Tool (PEMAT) and User's Guide" |
| PEMAT paper | https://doi.org/10.1016/j.pec.2014.05.027 | Shoemaker, Wolf & Brach 2014, *Patient Educ Couns* 96(3) |
| CDC IDD/ELL | https://stacks.cdc.gov/view/cdc/129950 | "How to develop products for adults with intellectual developmental disabilities and extreme low literacy: a product development tool", CDC Stacks |
| CDC Inclusive Comms: summary (UI link) | https://www.cdc.gov/pcd/issues/2023/23_0061.htm | Calanan et al. 2023, "CDC's Guiding Principles to Promote an Equity-Centered Approach to Public Health Communication", *PCD* 20:230061 |
| CDC Inclusive Comms: Key Principles (archived) | https://web.archive.org/web/20240119163401/https://www.cdc.gov/healthcommunication/Key_Principles.html | Archived CDC page. The original is no longer live. |
| CDC Inclusive Comms: Preferred Terms (archived) | https://web.archive.org/web/20231208141915/https://www.cdc.gov/healthcommunication/preferred_terms.html | Archived CDC page. The term scan's "Try this…" lists come from here. |

The scripted check got a 403 from ahrq.gov, cdc.gov and stacks.cdc.gov. Those sites block
scripts, so I opened them in a browser to confirm.

---

## 2. What each framework is and how it scores

All three are in the **clarity** zone and show the badge **"Partly scored for you"**
(`FW_LEVEL = 'PARTIAL'`): the tool suggests some items and you rate the rest.

### PEMAT-A/V (`PEMAT_AV` in the engine, `pematav` in the UI)
- **What it's for:** video, animation and multimedia, not podcasts. It has 17 items: 13
  for Understandability and 4 for Actionability.
- **Item numbers:** these are AHRQ's own and skip numbers (1, 3, 4, 5, 8–14, 18, 19,
  20–22, 25), because the A/V version leaves out the print-only items.
- **N/A:** allowed only on items whose AHRQ form prints an N/A condition (`naOption`).
  The dropdown offers N/A only on those items.
- **Ratings:** Agree = 1, Disagree = 0.
- **Score:** each scale is calculated separately as Agree ÷ (Agree + Disagree) × 100.
  N/A and unrated items are left out. The two scores are never combined.
- **Pass mark:** none, because AHRQ sets none ("higher is better").

### CDC IDD/ELL (`CDC_IDD` / `cdcidd`)
- **What it's for:** a 27-item score sheet in Parts A–E: Behavior, Sentences, Words and
  Numbers, Text Layout, Visuals. The item text is the score-sheet question, verbatim.
- **Score:** Yes ÷ (27 − N/A) × 100. An unrated item counts as not Yes.
- **Pass mark:** 90 or above is CDC's "Excellent!". 89 or below means revise and score again.
- **Score-sheet rules,** applied after your ratings so they override them:
  - Item 1 = No means items 2–6 are all No (the Part A rule).
  - Item 3 = N/A means items 4 and 5 are N/A.
  - Item 3 = No means items 4 and 5 are No.
- **Layout and visual items** (4–6 and 17–27) are flagged `requiresVisual`. The model
  prompt is told to mark them not assessable when only text is supplied.

### CDC Inclusive Communication (`CDC_EQUITY` / `cdceq`)
- **What it's for:** a 12-principle checklist plus a term scan.
- **Ratings:** Pass, Flag or N/A for each principle. There's no score, because CDC calls
  the principles "a starting point… not a mandate".
- **Process items:** EQ-8 (co-develop with community) and EQ-9 (translation reviewed by a
  native speaker) can't be judged from the document, so they're marked
  `notAssessableFromDoc` and left out of the counts.
- **Visual items:** EQ-11 and EQ-12 (images, alt text and contrast) need the visuals.

### Also changed
- **PEMAT-P (print card):** the 70% is relabelled a **working target**, because AHRQ
  sets no cutoff. The card now says to use PEMAT-A/V when the Brief format is video.
- **Prompt builder** (`buildAnalysisPrompt`): it now passes each item's rule, its N/A
  condition ("No N/A option" when there is none) and a "needs the laid-out product"
  warning to the model.
- **Framework count:** the UI goes from 26 to 29.

---

## 3. How the Brief switches frameworks on

`briefFrameworks()` in `index.html`:

| Brief choice | Switches on | Also sets |
|---|---|---|
| Format → **Video / animation** | PEMAT-A/V | Word budget 50–1500. Visuals count as critical. |
| Audience → **IDD / extreme low literacy** | CDC IDD/ELL | Grade 5, ease 70, sentences of 10 words or fewer (CDC item 8). The grade and ease targets reuse the low-literacy values; CDC sets no grade. |

- If you untick a framework in the Frameworks bar, the untick wins over the Brief.
- **CDC Inclusive Comms is not switched on by any Brief choice.** You have to select it
  in the Frameworks bar.
- Changing the audience or format re-renders the Frameworks bar.

---

## 4. What the tool fills in from the text

Suggestions apply **only while an item is unrated**. Once you rate an item, your rating
wins, though the IDD Part A and item 3 rules in §2 still apply. Each suggestion shows its
reason. Anything not listed here stays blank for you.

### PEMAT-A/V
| Item | Suggestion |
|---|---|
| 5. Active voice | Agree if 20% or fewer of the sentences look passive (AHRQ's "nearly all of the time" means 80–100%). Otherwise Disagree. |
| 12. Visual cues | N/A when the Brief format is video, as AHRQ prints. |

### CDC IDD/ELL
| Item | Suggestion |
|---|---|
| 2. Recommendation stated more than once | Needs a main message in the Brief. Yes if the message appears word for word 2 or more times. No if it appears once. N/A for a poster. |
| 5. Text and visuals for each step | No when the material has no images (text mode only). |
| 8. 10 or fewer words | Yes if at least 90% of sentences and headers have 10 or fewer words. The tool reads CDC's "almost all" as 90%. |
| 9. Active voice | No if any sentence matches the passive pattern. Otherwise Yes, with a note to confirm by reading. |
| 10. Informative headers | N/A if there are no headers. No if a header is a question. |
| 14. Same word for the same concept | No if the text mixes words from one group: doctor/physician/provider/clinician, medicine/medication/drug/pill/tablet, or shot/vaccine/vaccination/injection/jab. |
| 15. Whole numbers | N/A if there are no numbers. No if there's a %, decimal, fraction, or half/quarter/third. Otherwise Yes. |
| 16. Numerals, not words | N/A if there are no numbers. No if a number is spelled out ("one" isn't checked, because it's often a pronoun). |
| 17. Left-aligned | N/A when the Brief format is video, as CDC says. |
| 22. No italics or underline | No if the text uses `<i>`, `<em>` or `<u>` (text mode only). |

### CDC Inclusive Comms
- The term scan matches CDC's "Instead of this…" terms. They come from both the Key
  Principles and the Preferred Terms pages (`termScan` in the engine).
- A match **flags** principle EQ-1 to EQ-6. It shows the matched phrase in context,
  CDC's "Try this…" options and a link to the archived source page.
- **The scan never marks a principle as passed.** CDC says its lists aren't
  comprehensive, so finding no terms doesn't mean the principle is met.
- Some terms are left out on purpose because they would catch too much ordinary health
  copy: "individuals", "cases", "subjects", "fragile", "senior", "offender", and
  "ethnic/racial groups". These are listed in a comment in the engine.

---

## 5. Checks to confirm it works

1. Run `node scripts/build-fw-reg.js --check`. It should print `checked 29 existing keys` with no differences.
2. Open the page. The Frameworks bar should say "Show all 29", and the grid should list PEMAT-A/V, CDC IDD/ELL and CDC Inclusive Comms.
3. In the Brief, set Format to **Video / animation**:
   - PEMAT-A/V should be switched on.
   - The PEMAT print card should show the note pointing to PEMAT-A/V.
   - PEMAT-A/V item 12 should be N/A.
4. Untick PEMAT-A/V in the Frameworks bar. It should stay off while the format is still video.
5. Set Audience to **IDD / extreme low literacy**:
   - CDC IDD/ELL should be switched on.
   - The readability targets should show grade 5 and sentences of 10 words.
6. Type text with "50%", "three" and "doctor … physician" in it. CDC IDD/ELL should suggest No on items 15, 16 and 14, each with its reason.
7. Rate IDD item 1 **No**. Items 2–6 should show No, with "Item 1 is no, so CDC scores all of Part A no."
8. Rate IDD item 3 **N/A**. Items 4 and 5 should become N/A.
9. Check the IDD score with this case: rate 20 Yes, 4 No and 3 N/A. It should read 20 ÷ 24 = **83%**, below 90.
10. Select CDC Inclusive Comms and type "vulnerable populations" and "diabetics":
    - EQ-1 and EQ-2 should be flagged.
    - Each should show CDC's suggestions and a link to the archived page.
    - Clear the text. Nothing should be marked Pass.
11. Check the PEMAT-A/V dropdowns. N/A should appear only on items 8, 9, 11–14, 18, 19 and 25.
12. On the PEMAT print card, the target line should read "working target ≥70% on both · AHRQ sets no cutoff".

---

## 6. Still open

These were fixed on `refresh-and-fixes` (2026-10-16):
- The item wording is now checked against the sources (§1).
- PEMAT-A/V and CDC IDD/ELL no longer show a score from partial ratings. Each score
  appears once every item is rated, and unrated items never count as fails.
- IDD item 10 isn't marked N/A from a visual-mode transcript.
- PEMAT-P (T10) uses AHRQ's 17 + 7 items, from PR #2. Item 15 was missing AHRQ's
  example, and it's now word for word.

Still open. These need a decision from you, not code:
- **Confirm the CDC IDD/ELL document is the one Nati meant** (Q1). The wording now
  matches CDC's PDF, but whether it's the right tool is Nati's call.
- **CDC Inclusive Comms isn't switched on by any Brief choice.** Decide whether it should be.
- **CDC's "Everyday Words for Public Health Communication"** isn't added. It was optional in T3.
- **The framework count disagrees:** the registry maps 29, the engine has 30
  (`BERYL_PX` isn't mapped to the UI), the studio lists 23 with in-app scoring, and the
  talk says 26. Pick the public number.
