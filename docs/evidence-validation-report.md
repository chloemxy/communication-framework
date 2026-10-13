# Evidence Validation Report: Patient Education Analyzer

**Scope:** `index.html` (Studio analyzer), `classic.html`, `framework-compass.html`, `framework-scoring-logic.html`, `analysis-engine.js`
**Method:** evidence-validator workflow. I pulled each factual claim (item counts, thresholds, formulas, citations, names) from the site and checked it against external sources found through web search. Direct fetches to cdc.gov, ahrq.gov and similar sites are blocked from this environment, so where a search couldn't confirm a claim, it is marked **Unverified / Missing Source** instead of being assumed correct.
**Date:** 2026-10-13

---

## Source inventory

| Tag | Source |
|---|---|
| [SITE] | The five repository files above (the claims being tested) |
| [CDC] | CDC Clear Communication Index: User Guide, Full Index Score Sheet, Modified Score Sheet (cdc.gov/ccindex, stacks.cdc.gov) |
| [AHRQ-PEMAT] | AHRQ PEMAT-P tool and User's Guide (AHRQ Pub. No. 14-0002-EF); OSU copies |
| [SAM] | Doak, Doak & Root SAM worksheet (OSU copy); SAM translation/validation studies (JMIR Form Res 2023; J Fam Community Med 2014) |
| [EQIP] | Charvet-Berard, Chopard & Perneger 2008 (PEC, PMID 18242935); Moult et al. 2004 (ResearchGate record) |
| [NCI] | NCI "Pink Book" table of contents (cancer.gov, Community Guide, CommInit listings) |
| [OHRI-DCS] | Ottawa DCS user manual (decisionaid.ohri.ca); NIH HEAL DCS form |
| [OPTION] | Elwyn 2003/2005; 2025 systematic review of OPTION in general practice (PMC12455353) |
| [AHRQ-HLUP] | AHRQ Health Literacy Universal Precautions Toolkit, 3rd ed. (2024, Pub. No. 23-0075) |
| [HCAHPS] | hcahpsonline.org; CMS 2025 HCAHPS FAQ; Becker's 2025 HCAHPS changes |
| [PAM] | ClinicalTrials.gov PAM level definitions; LOINC 88175-5 |
| [BCW] | Library/retailer records for *The Behaviour Change Wheel* (2014) |
| [SHARE] | AHRQ SHARE Approach pages and factsheets |
| [AM3] | Ask Me 3 program histories (Annals of Family Medicine; program brochures) |
| [NPS] | Vendor NPS benchmark pages (SurveyMonkey, Lobbie, CustomerGauge via Pabau, Xebo) |
| [BERYL] | The Beryl Institute, "Defining Patient Experience" |
| [PLANETREE] | Planetree affiliate hospital pages (Griffin Health, Deer Lodge, Adventist Health) |

---

## 1. Executive summary

The bibliography is mostly sound. Nearly all journal citations (authors, year, journal, volume, pages, DOI) are real and correctly formed. **The problems are in the instrument content:** several checklists the site presents as the published instrument were paraphrased or invented, and the analyzer scores real documents against them.

**Highest-risk issues** (they change scores users see or rely on):

1. **CCI items are not the CDC's items.** All three CCI lists ([SITE] `index.html:1137`, `classic.html:3054`, `analysis-engine.js` CCI criteria) differ from the official 20 items. The official structure is also different. CDC uses 4 parts (Core 11, Behavioral Recommendations 3, Numbers 3, Risk 3); the site describes 5 domains (Main Message 7, Language 4, Information 3, Numbers 3, Risk 3) [CDC].
2. **PEMAT items and counts are wrong in the analyzer.** The analyzer uses 13 understandability + 7 actionability items. PEMAT-P has 17 understandability items (1–12, 15–19) and 7 actionability items (20–26) [AHRQ-PEMAT]. Several items it scores are not in PEMAT at all.
3. **Decisional Conflict Scale formula is wrong.** The site uses `(sum / 64) × 25`; the correct formula is `(sum / 16) × 25` [OHRI-DCS]. The site's version caps every score at 25, so nothing could ever reach the "high conflict" band.
4. **NCI Pink Book is described as 6 phases; it has 4 stages** [NCI].
5. **EQIP's "36 items / 8 sections" is attributed to Moult 2004.** Moult's EQIP has 20 items. The 36-item version is Charvet-Berard 2008, with 3 domains [EQIP].
6. **The framework count is inconsistent.** The compass and scoring-logic pages list **27** frameworks (they include Beryl PX) but say "26". The analyzer lists 26 without Beryl.

Several other items are outdated: the AHRQ Toolkit (now 3rd ed., 23 tools, 5 areas), HCAHPS (32 items since 2025), and the Ask Me 3 attribution. A set of "in practice" benchmark claims has no source.

---

## 2. Verified claims table

| # | Claim [SITE] | External evidence | Verdict |
|---|---|---|---|
| 1 | CCI has 20 items scored 0/1; overall score on a 100-point scale; ≥90 passes | [CDC] user guide and score sheet: 20 items, 0/1, converted to 100, 90+ passing | **Verified** |
| 2 | CCI organized in "5 domains": Main Message 7 / Language 4 / Information 3 / Numbers 3 / Risk 3 (`framework-scoring-logic.html`, `analysis-engine.js`) | [CDC]: Part A Core 11, Part B Behavioral Recommendations 3, Part C Numbers 3, Part D Risk 3 | **Conflict** |
| 3 | CCI items listed in analyzer (e.g., "Reading level ≤ grade 6", "≤3 key points per page", "White space reduces clutter", "Says who performs the action", "Personal pronouns", "Sentence length ≤20 words") | [CDC] items include: one main message; main message at top; visual cues; supporting visual; call to action; active voice in message and call to action; audience's words; bulleted/numbered lists; chunks with headings; summary in first paragraph; what authorities know and don't know; behavioral recommendations (12–14); numbers (15–17); risk (18–20). None of the listed site items appear. | **Conflict / fabricated items** |
| 4 | CCI score = Yes ÷ 20 (fixed denominator; "18 of 20 passes") | [CDC]: Part B scored only if the material has behavioral recommendations; Risk only if risk is presented; items 19–20 have N/A; failing item 1 zeroes items 2–4 | **Conflict** (fixed /20 misrepresents conditional scoring) |
| 5 | CCI "Items 1–7 carry the most weight in practice" | No source found | **Unverified / Missing Source** |
| 6 | PEMAT gives two separate scores; N/A excluded; 70% cutoff | [AHRQ-PEMAT]: developers set 70% for both; N/A excluded from denominator | **Verified** (note: sources say "70%"; site says "exceed 70%" / ">70%". Confirm whether exactly 70% passes.) |
| 7 | PEMAT-P understandability = 13 items (`index.html:1159`, `classic.html:3096`) | [AHRQ-PEMAT]: items 1–12 and 15–19 = **17** | **Conflict** |
| 8 | PEMAT-P understandability = 17 items (`framework-scoring-logic.html`, `analysis-engine.js`) | [AHRQ-PEMAT]: 17 | **Verified (count)**. But item content includes non-PEMAT items: "Information is accurate", "reading level ≤8th grade", "fractions explained", "visual representations of numbers" |
| 9 | PEMAT actionability items: "barriers addressed", "what to do if problems occur", "who to contact", "timing specified", "contact/referral path" | [AHRQ-PEMAT] actionability: identifies at least one action; addresses user directly; breaks action into manageable steps; tangible tool; simple instructions for calculations; explains how to use charts/tables to act; visual aids to help act | **Conflict** |
| 10 | SAM: 22 factors, 6 categories, 0/1/2 scoring, 70–100 Superior / 40–69 Adequate / <40 Not Suitable | [SAM]: 6 categories, 22 criteria, 2/1/0 points | **Verified** (bands consistent with Doak; band cut-offs not re-confirmed by search) |
| 11 | SAM Content = 6 factors, Literacy Demand = 7 factors (`framework-scoring-logic.html:382`) | [SAM]: Content = purpose, behavioral content, scope, summary (4). Site's own table sums to 6+7+4+3+2+2 = **24**, not 22 | **Conflict** (internal arithmetic error too) |
| 12 | SAM threshold = none (`index.html` FW_REG `"th":null`) | Compass, scoring-logic and engine all give the 70/40 bands | **Internal divergence** |
| 13 | EQIP: 36 items across 8 sections, from Moult, Franck & Brady 2004 | [EQIP]: original EQIP = 20 items (yes / partly / no / N/A); EQIP-36 = Charvet-Berard 2008 with 3 domains (content, identification, structure) | **Conflict** |
| 14 | EQIP full name "EQuality of Information for Patients" (`index.html:2883`) | [EQIP]: "Ensuring Quality Information for Patients" (site uses this elsewhere) | **Conflict** |
| 15 | DISCERN: 16 questions, Q1–8 reliability, Q9–15 treatment choices, Q16 overall; Charnock 1999 JECH 53(2):105–111 | Consistent with the published instrument (not re-confirmed by search) | **Unverified** (low risk) |
| 16 | DISCERN "peer-reviewed leaflets average ~3.5–4/5 per question" | No source found | **Unverified / Missing Source** |
| 17 | Flesch Reading Ease and FK Grade Level formulas | Standard published coefficients (206.835 / 1.015 / 84.6; 0.39 / 11.8 / 15.59) match `index.html:1223` | **Verified** |
| 18 | "SMOG is the most accurate readability measure for health materials… use as primary" (`framework-scoring-logic.html:554`) | No source found for "most accurate". Also, the analyzer doesn't compute SMOG at all. | **Unverified / overstated** |
| 19 | Pink Book = 6-phase process (`framework-scoring-logic.html:621`; criteria in engine) | [NCI]: 4 stages. (1) Planning and Strategy Development; (2) Developing and Pretesting Concepts, Messages, and Materials; (3) Implementing the Program; (4) Assessing Effectiveness and Making Refinements | **Conflict** |
| 20 | "The Pink Book **mandates** audience testing… fails the Pink Book standard" | [NCI]: the guide calls itself "guidelines, not hard and fast rules" | **Conflict / overstated** |
| 21 | Pink Book is NIH Pub. No. 04-5145, 2004 | [NCI]: listings give 2002 and 2004. `classic.html:3232` says "Pink Book (2002)" | **Internal divergence** (pick one; the PDF itself is dated 2004 print / 2002 revision) |
| 22 | OPTION: 12 items, 0–4, rescaled 0–100; OPTION-5 exists | [OPTION]: 12 items, 0–4; OPTION-5 is a revised short form | **Verified** |
| 23 | OPTION item list (items 9 "preferred option", 10 "negotiates a decision", 12 "defers to patient's preferred option") | Search returned no verbatim item text. Published OPTION-12 items 9–12 are about inviting questions, eliciting the preferred level of involvement, indicating a decision stage, and indicating a review. | **Unverified / likely divergent**: check against Elwyn 2005 |
| 24 | OPTION "real-world primary care means 20–40/100" | [OPTION]: 2025 GP review reports baseline median **16**, range 1.5–57.2 | **Conflict** (overstated) |
| 25 | IPDAS: 6 qualifying criteria (condition, decision, options, positive features, negative features, what consequences are like); Elwyn 2006 BMJ 333:417 | Matches the IPDASi v4 qualifying set from memory; not re-confirmed by search | **Unverified** (low risk) |
| 26 | AHRQ Toolkit: 2nd ed. (2015), 21 tools, 4 action areas | [AHRQ-HLUP]: **3rd ed., March 2024, AHRQ Pub. 23-0075, 23 tools, 5 areas** (adds "Start on the Path to Improvement") | **Outdated** |
| 27 | Framework label "AHRQ Shared Decision Making Toolkit" (`index.html:2889`) | The registry entry, sources and compass all describe the Health Literacy Universal Precautions Toolkit | **Conflict** (mislabel) |
| 28 | DCS: 16 items (10-item low-literacy version), 0–4 coding, 5 subscales; <25 low, ≥37.5 high | [OHRI-DCS]: 0–4 coding confirmed; cut-offs 25 and 37.5 cited from the manual (secondary) | **Verified** (cut-offs: secondary source) |
| 29 | DCS formula `(sum / 64) × 25` (`framework-scoring-logic.html:828`, `analysis-engine.js:490`) | [OHRI-DCS]: sum ÷ 16 × 25 → 0–100 | **Conflict** (math error) |
| 30 | SHARE: Seek / Help / Assess / Reach / Evaluate | [SHARE] | **Verified** |
| 31 | SHARE citation "AHRQ Pub. No. 14-0058-1-EF" | [SHARE]: found 14-0034-x-EF (2016) and the current 21-0015-x-EF (2021); no 14-0058 | **Unverified / likely wrong** |
| 32 | Ask Me 3 questions (main problem / what to do / why important) | [AM3] | **Verified** |
| 33 | Ask Me 3 cited as "Pfizer. (n.d.)… National Patient Safety Foundation. npsf.org/page/askme3" | [AM3]: developed by the Partnership for Clear Health Communication (housed at NPSF). The program now lives at IHI; the site's own `FW_SOURCE.teachback` already links to IHI. | **Conflict** (author attribution; link likely dead) |
| 34 | Teach-Back source link (`FW_SOURCE.teachback`) points to the Ask Me 3 page | The registry cites AHRQ Tool #5 for Teach-Back | **Internal divergence** |
| 35 | COM-B book ISBN 978-1-909567-00-4 | [BCW]: **978-1-912141-00-5** | **Conflict** |
| 36 | Michie 2011 Impl Sci 6:42; HBM, TTM, EPPM, SEIPS, Picker, EBCD, PAM, CAHPS journal citations | Citation forms are internally consistent and match the known publications | **Verified (form)**. Individual DOIs not resolvable from this environment. |
| 37 | PAM levels: ≤47.0 / 47.1–55.1 / 55.2–67.0 / ≥67.1; 0–100 | [PAM]: same bands (Hibbard 2004). LOINC uses 72.4 as the Level 3/4 boundary | **Verified** (note the alternative convention) |
| 38 | PAM "clinically meaningful change = 3–6 points over 6–12 months" | No source found | **Unverified / Missing Source** |
| 39 | HCAHPS: 29 items, 10 publicly reported measures, incl. Care Transitions 3 items (`framework-scoring-logic.html:1259`) | [HCAHPS]: since Jan 1, 2025, **32 items**. New care coordination, restfulness and information-about-symptoms submeasures; some call-button and care-transition items removed | **Outdated** |
| 40 | NPS: >70 world-class / 50–70 very good; "healthcare runs 20–50"; compass says ">50 excellent" | [NPS]: healthcare averages reported anywhere from 13 to 65 depending on vendor; no primary benchmark | **Unverified + internal divergence** |
| 41 | Beryl definition: "sum of all interactions, shaped by an organization's culture…"; Wolf et al. 2014 PXJ 1(1) | [BERYL] | **Verified** |
| 42 | Beryl "4 pillars" (Culture & Leadership, Infrastructure & Governance, Evidence & Measurement, Practice & Innovation) | No source found | **Unverified / Missing Source** |
| 43 | Planetree 10 components incl. "Staff care"; omits "Family, friends & social support" | [PLANETREE]: sources list 9 or 10 components; family/social support is consistently a component; "staff care" not seen | **Unverified / likely divergent** |
| 44 | Picker 8 principles (Gerteis 1993) | Matches the standard Picker list | **Verified** |
| 45 | Plain Writing Act 2010, Pub. L. 111-274, 124 Stat. 2861; PLAIN 2011 guidelines | Matches the public record | **Verified** |
| 46 | Plain Language label "(HHS/NIH)" (`index.html` FW_FULL) | The cited guidelines are from PLAIN (federal interagency), not HHS/NIH | **Conflict** (minor) |
| 47 | Grade 6 target attributed to "(NCI, CDC)" (`index.html:1323`) and "NCI Pink Book (2002) and AMA/AHA" (`classic.html:3232`) | Not confirmed. CDC's CCI does not set a grade level; the compass page says "Grade 6–8" | **Unverified + internal divergence** |
| 48 | "Deuteranopia (red-green) is the most common" CVD (`index.html` visual mode tip) | Deuteranomaly (not deuteranopia) is the most common form; "~1 in 12 men" is the commonly cited figure | **Conflict** (minor wording) |

---

## 3. Divergences and contradictions

**A. CCI structure and content**
- **[SITE] says:** 5 domains (7/4/3/3/3). Items include reading grade ≤6, ≤3 key points per page, white space, personal pronouns, ≤20-word sentences, "numbers as whole numbers", "main message repeated". Score = Yes/20.
- **[CDC] says:** 4 parts (Core 11 / Behavioral 3 / Numbers 3 / Risk 3). Item wording differs throughout. Parts B–D are conditional and items 19–20 can be N/A.
- **Impact:** every CCI score the analyzer shows is computed against a different checklist than the one it names, and the "18 of 20 passes" message is wrong for materials with no numbers or risk content.

**B. PEMAT: three different versions inside the site**
- **`index.html` / `classic.html`:** 13 U + 7 A, with non-PEMAT items (sentence ≤20 words, barriers, problems, contact).
- **`analysis-engine.js` / `framework-scoring-logic.html`:** 17 U + 7 A. The count is right, but items include accuracy, ≤8th-grade reading level and action timing, none of which are PEMAT items.
- **[AHRQ-PEMAT]:** 17 U (1–12, 15–19) + 7 A (20–26), with the item text listed in Table row 9.

**C. Framework count: 26 vs 27**
- **Compass and scoring-logic:** say "26 frameworks" but list 27 (Beryl PX is the extra one).
- **Analyzer (`index.html` FW_ZONE / FW_LABEL):** 26, no Beryl. The topbar text says "Show all 26".

**D. SAM thresholds**
- **Compass, scoring-logic, engine:** 70–100 / 40–69 / <40.
- **`index.html` FW_REG:** `"th": null`. The registry copy in the analyzer dropped the thresholds.

**E. NPS benchmarks**
- **Compass:** ">50 is excellent".
- **Scoring-logic:** ">70 world-class, 50–70 very good, healthcare 20–50".
- **[NPS]:** healthcare averages vary from 13 to 65 depending on the source.

**F. Readability target**
- **Analyzer default:** grade ≤6, attributed to "NCI, CDC".
- **Compass:** "Grade 6–8 target".
- **`classic.html`:** grade 6 "NCI Pink Book (2002) and AMA/AHA".

**G. Engine header vs. content**
- **`analysis-engine.js` header says:** "Real published citations only… DO NOT edit criteria without tracing back to the published source."
- **But:** the CCI, PEMAT, SAM, Pink Book and OPTION criteria in the same file don't trace to the published instruments (see A, B, rows 11, 19, 23).

---

## 4. Unresolved questions and gaps

1. **Items not checked word for word against the original PDFs** (the network blocks them): OPTION-12 item text, DISCERN item text, IPDAS certifying criteria, Doak SAM factor-by-category list, CCI items 12–20 exact wording. Before any rewrite, someone should open these files directly:
   - CDC Full Index Score Sheet: cdc.gov/ccindex/pdf/full-index-score-sheet.pdf
   - AHRQ PEMAT-P: ahrq.gov/sites/default/files/publications/files/pemat-p.pdf
   - OSU SAM worksheet: ogg.osu.edu/media/documents/health_lit/HOSAM2006.pdf
   - Elwyn 2005 OPTION paper
   - OHRI DCS user manual
2. **URL liveness was not tested.** Links that look risky: `npsf.org/page/askme3` (NPSF merged into IHI), `discern.org.uk`, `decisionaid.ohri.ca/ipdas.html` (vs. `ipdas.ohri.ca`), PEMAT `pemat1.html` vs `pemat.html` (both used), plainlanguage.gov `/guidelines/`, the KCL EBCD report PDF, and the Point of Care Foundation EBCD page.
3. **PEMAT pass rule:** does exactly 70% pass ("≥70") or fail (">70%" as coded at `index.html:1520–1528`)? Confirm in the User's Guide.
4. **Ownership facts to confirm:** PAM's current licensor (the site says Insignia Health); the SHARE publication number; the Pink Book edition year.
5. **Unsourced "in practice" claims** that need a citation or should be reworded as opinion:
   - CCI items 1–7 weighting
   - SMOG "most accurate"
   - DISCERN 3.5–4/5 average
   - "most common HBM design error"
   - "SAM is the most granular"
   - PAM 3–6 point change
   - Beryl 4 pillars
   - Beryl "State of PX" report as calibration tool
6. **Unused source in the repo:** `A_Charter_for_Accountable_Use_of_AI-Canadian_Healthcare.pdf` isn't referenced anywhere in the site. Decide whether it should be cited or removed.
7. **Design question:** auto-scored items labelled with an instrument's name (e.g., "CCI · AUTO ✓ reading level") imply the instrument endorses that test. Once the item lists are corrected, several current AUTO checks (grade level, sentence length) won't map to any real CCI or PEMAT item. Should they move to the Readability or Plain-language cards?

---

## 5. Recommended changes (priority order)

| Priority | Change | Files |
|---|---|---|
| P0 | Replace the CCI item list with the CDC 20 items. Restructure into Parts A–D. Implement conditional/N/A scoring (score over applicable items, 90 pass). Re-map AUTO checks only where a real item matches (e.g., active voice → item 6; lists → item 8; headings → item 9). | `index.html`, `classic.html`, `analysis-engine.js`, `framework-scoring-logic.html` |
| P0 | Replace the PEMAT lists with the official PEMAT-P 17 U + 7 A items. Implement N/A exclusion. Confirm the ≥70 vs >70 rule. | same |
| P0 | Fix the DCS formula to `(sum / 16) × 25`. | `framework-scoring-logic.html:828`, `analysis-engine.js:490` |
| P1 | Rewrite the Pink Book section as 4 stages. Remove "mandates" and "fails the Pink Book standard". | `framework-scoring-logic.html:621`, `analysis-engine.js` |
| P1 | EQIP: either describe the original 20-item Moult tool, or keep 36 items and cite Charvet-Berard 2008 with its 3 domains. Fix "EQuality". | `framework-scoring-logic.html:474`, `analysis-engine.js:275`, `index.html:2883` |
| P1 | SAM: fix the category counts to total 22 (Content 4). Remove the duplicate reading-level item. Restore thresholds in `index.html` FW_REG. | `framework-scoring-logic.html:382`, `analysis-engine.js`, `index.html:2932` |
| P1 | Settle on 26 or 27 frameworks (add Beryl to the analyzer, or drop it from compass and scoring-logic) and fix the headline counts. | `framework-compass.html`, `framework-scoring-logic.html:216`, `index.html` |
| P1 | Fix the mislabel "AHRQ Shared Decision Making Toolkit" → "Health Literacy Universal Precautions Toolkit". Update to the 3rd ed. (2024, 23 tools, 5 areas, Pub. 23-0075). | `index.html:2889`, `framework-scoring-logic.html:773`, `analysis-engine.js` |
| P1 | Update HCAHPS to the 2025 survey (32 items, revised measures). | `framework-scoring-logic.html:1259` |
| P2 | Verify and correct OPTION items 9–12 against Elwyn 2005. Change the benchmark to "median ≈16/100 at baseline in GP studies" (cite the 2025 review) or remove it. | `framework-scoring-logic.html:696`, `analysis-engine.js:413` |
| P2 | Fix the COM-B ISBN → 978-1-912141-00-5. | `framework-scoring-logic.html:999`, `analysis-engine.js:557` |
| P2 | Ask Me 3: attribute to the Partnership for Clear Health Communication / NPSF (now IHI) and point to IHI. Point the Teach-Back link at AHRQ Tool #5. | `framework-scoring-logic.html:934`, `analysis-engine.js:381`, `index.html` FW_SOURCE |
| P2 | Correct the SHARE pub number (verify; likely 14-0034 or the current 21-0015). | `framework-scoring-logic.html:887`, `analysis-engine.js:530` |
| P2 | Make NPS benchmarks consistent, or drop them and say "compare against your own trend". | compass, scoring-logic, engine |
| P2 | Remove or source the "in practice" claims listed in Gap 5. | all |
| P3 | Make readability-target attributions consistent (grade 6 vs 6–8; drop "NCI, CDC", "AMA/AHA" unless sourced). Fix the "Plain Language (HHS/NIH)" label. Change "deuteranopia" → "deuteranomaly". | `index.html`, `classic.html` |
| P3 | Check every outbound link and replace dead ones. | all |
