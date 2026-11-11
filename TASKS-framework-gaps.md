# Framework gap tasks (from Nati Chen + Jennifer Rosart interviews, 2026-10-14)

For Claude Code. Start with the code-review-graph tools to narrow scope (see CLAUDE.md), then read the source.
Existing code: `analysis-engine.js` (FRAMEWORK_REGISTRY, prompts, validation) and `index.html` (Brief, modules, visual mode, FW_REG).

Rules for every task below:
- Copy item wording from the official source (linked), not from this file. Where this file quotes items, it is from a web fetch and may be paraphrased. Check against the source before committing.
- Keep each framework's own scoring rules. Do not merge scores across frameworks.
- Mark items that cannot be judged from text alone as NOT_ASSESSABLE or manual, as the registry already does.
- Cite the source in each framework's `sources` array.

## Corrections to earlier assumptions
- PEMAT-P is 17 understandability + 7 actionability items per AHRQ. The registry's counts are correct. Only diff the wording.
- The CDC tool for adults with intellectual/developmental disabilities is NOT a version of the Clear Communication Index. It is a separate CDC tool (see T2). Nati described it as a CCI version, so confirm with her (Q1).
- SAM has 22 factors per the OSU health literacy page. The registry has about 24 items. Needs reconciling (T6).

## P1 - build now (public sources available)

### T1. Add PEMAT-A/V (audiovisual) to the registry
- Why: Nati does animation. PEMAT has a print and an A/V version.
- Source: AHRQ PEMAT-A/V page https://www.ahrq.gov/health-literacy/patient-education/pemat-av.html
  User's Guide https://www.ahrq.gov/health-literacy/patient-education/pemat.html
  Auto-scoring form (Excel) https://www.ahrq.gov/sites/default/files/wysiwyg/professionals/prevention-chronic-care/improve/self-mgmt/pemat/pemat_form.xls
- Structure per AHRQ: 13 understandability items (official numbers 1,3,4,5,8,9,10,11,12,13,14,18,19) + 4 actionability items (20,21,22,25). Keep the official item numbers.
- Do: add `PEMAT-AV` beside the existing print `PEMAT`. Two separate scores, N/A excluded from the denominator, same as print. Check the User's Guide for the threshold (registry currently says 70%).
- Do: choose print vs A/V from the Brief format (animation/video -> A/V, poster/PDF/handout -> print). Allow manual override.
- Done when: A/V materials score against 17 items. Print scoring is unchanged. Item ids and wording match AHRQ.

### T2. Add the CDC IDD/ELL Product Development Tool as its own framework
- Why: Nati named a stricter CDC option for adults with intellectual disabilities.
- Source: "How to Develop Products for Adults with Intellectual Developmental Disabilities and Extreme Low Literacy: A Product Development Tool". CDC, developed with RTI International and CommunicateHealth.
  The copy I read: https://ictr.wisc.edu/wp-content/uploads/2025/02/CDC-IDD_ELL-Guide.pdf (university-hosted copy)
  Find the CDC-hosted original. Candidate (not opened): https://stacks.cdc.gov/view/cdc/129950
  Evidence paper: "Building Evidence for Principles to Guide the Development of Products for Adults with Intellectual and Developmental Disabilities and Extreme Low Literacy - A Product Development Tool" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10298040/
- Structure: Part 1 user guide (5 topic areas: A Behavior, B Sentences, C Words and Numbers, D Text Layout, E Visuals). Part 2 score sheet of 27 yes/no items scored as a percentage.
- Do: register as `CDC-IDD`. Add an audience option "Intellectual/developmental disability or extreme low literacy" in the Brief that surfaces this module.
- Many items need layout detail (font >=14pt, single sans-serif, one visual per page, left-aligned). Mark as manual or visual-mode checks. Text-checkable items: sentences <=10 words, active voice, whole numbers/numerals, same word for same concept.
- Done when: all 27 items present with official wording, % score computed, module appears only for the new audience (or when manually added).

### T3. Add an inclusive-communication module from the CDC Health Equity Guiding Principles
- Why: Nati references these principles.
- Source: CDC page https://www.cdc.gov/healthcommunication/Health_Equity.html (URL taken from the paper below; open it and confirm)
  Summary paper: Calanan et al., "CDC's Guiding Principles to Promote an Equity-Centered Approach to Public Health Communication", Preventing Chronic Disease 2023;20. doi:10.5888/pcd20.230061 https://www.cdc.gov/pcd/issues/2023/23_0061.htm
- Site sections: health equity lens, key principles (avoid vague or blaming terms, person-first language, limit "minority", avoid violent wording), preferred terms, developing inclusive communications, inclusive images (alt text, colour contrast), resources.
- Do: build as a checklist plus a text scan that flags terms from CDC's "Preferred terms" table with the suggested replacement. Treat the term list as a starting point, as CDC says, not a complete list.
- Related, optional: CDC "Everyday Words for Public Health Communication" https://www.cdc.gov/ccindex/everydaywords as the plain-language substitution list for the jargon scan.
- Done when: module shows pass/flag per principle, term hits link to the CDC source, and the scoring does not claim more than CDC's guidance supports.

## P2 - needs one outside input first

### T4. Audit the SAM item list (blocked on the book's score sheet)
- Source facts found: SAM = 22 factors in 6 groups. Each scored 2 superior / 1 adequate / 0 not suitable. N/A factors subtract 2 from the 44-point maximum. Bands: 70-100% superior, 40-69% adequate, 0-39% not suitable. (OSU page https://ogg.osu.edu/media/documents/health_lit/WRRSAM.pdf)
- Original: Doak, Doak & Root (1996), Teaching Patients with Low Literacy Skills, 2nd ed., J.B. Lippincott, pp. 49-59. No free copy of the instrument found online.
- Do: get the score sheet (library copy or Nati). Reconcile the registry's ~24 items to the 22 official factors. Add the percentage bands. Confirm the "any Content factor at 0 is a blocker" note really comes from the SAM, or relabel it as our own rule.
- Check copyright before shipping reworded items.

### T5. Trauma-informed language checks (blocked on Q2)
- Official source is an approach, not a word list: SAMHSA, "Concept of Trauma and Guidance for a Trauma-Informed Approach" (2014). Six principles: safety; trustworthiness and transparency; peer support; collaboration and mutuality; empowerment, voice and choice; cultural, historical and gender issues.
- Do not invent a lexicon. After Q2, build a small checklist from the SAMHSA principles plus whichever named lexicons Nati confirms.
- Optional supporting source for equity-focused wording: AMA/AAMC "Advancing Health Equity: A Guide to Language, Narrative and Concepts" https://www.ama-assn.org/system/files/ama-aamc-equity-guide.pdf

## P3 - UX work, no new sources needed

### T6. Copy-only checker mode
Nati: "most people start with copy only." Add a mode or preset that runs only the text-based frameworks (CCI, PEMAT, readability, plain language) before any visual is uploaded.

### T7. Say where in the design process to use the tool
Her biggest gap. Label stages (copy draft, layout, final check), recommend modules per stage, and add short "when to use this" guidance on the mode toggle or workspace presets.

### T8. Before/after score comparison
Let users save a first score and compare after revisions ("49% -> 100%"). First check whether this already exists.

### T9. Verify SMOG
The Readability module is labelled "Flesch-Kincaid, SMOG". Confirm SMOG is actually computed and shown. Nati targets about grade 6 with SMOG.

### T10. PEMAT-P wording check
Diff the 17 + 7 registry items against the official PEMAT-P form (https://www.ahrq.gov/health-literacy/patient-education/pemat-p.html). Counts are right. This is a wording audit only.

## Questions for Nati (owner: Chloe)
- Q1. Which exact document is the "stricter CCI version for adults with intellectual disabilities"? Is it the CDC IDD/ELL product development tool (T2) or something else?
- Q2. Which inclusive and trauma-informed language lexicons does she use? Names and links.
- Q3. Does she have a copy of the SAM score sheet?

## Not building
- STEEEP and PREMs/PROMs. They are Jennifer's QI and survey tools, not content-evaluation frameworks.
- A patient-acceptability yes/no for letters (Jennifer). A score can screen, but it cannot replace testing with patients. Say so in the UI if we mention letters.
