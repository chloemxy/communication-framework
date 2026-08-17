/**
 * ══════════════════════════════════════════════════════════════════════
 * ANALYSIS ENGINE  —  Framework-Grounded Document Analysis
 * ══════════════════════════════════════════════════════════════════════
 *
 * INTEGRITY GUARANTEES
 * ────────────────────
 * 1. LIBRARY-BOUND      Only frameworks registered in FRAMEWORK_REGISTRY
 *                       can be used for analysis. No invented frameworks.
 *
 * 2. EVIDENCE-ONLY      Every score must be backed by a direct quote
 *                       from the document under analysis. No inferences.
 *
 * 3. NO FABRICATED      All citations come exclusively from each
 *    CITATIONS          framework's `sources` array in this registry.
 *                       No generated, paraphrased, or invented references.
 *
 * 4. HONEST GAPS        Criteria not met or not present in the document
 *                       are reported as NOT_MET or NOT_ASSESSABLE —
 *                       never assumed or inferred to be passing.
 *
 * 5. KNOWN UNKNOWNS     If a framework is not in the registry, the engine
 *                       refuses to analyze against it and reports why.
 *
 * 6. SCORE TRACEABILITY Every criterion score includes:
 *                       criterion text → evidence quote → status
 *
 * 7. NO EXTRAPOLATION   Absence of evidence = NOT_MET or NOT_ASSESSABLE.
 *                       The engine never assigns passing scores by
 *                       assuming best practices or probable compliance.
 */

'use strict';

// ══════════════════════════════════════════════════════════════════════
// VALID SCORE STATUSES
// ══════════════════════════════════════════════════════════════════════

const SCORE_STATUS = Object.freeze({
  MET:            'met',            // Criterion clearly present with evidence
  PARTIAL:        'partial',        // Criterion partially present; gaps noted
  NOT_MET:        'not_met',        // Criterion absent or fails threshold
  NOT_ASSESSABLE: 'not_assessable', // Cannot be evaluated from document alone
                                    //   (e.g. requires live observation,
                                    //    patient survey, or field testing)
  NOT_APPLICABLE: 'not_applicable', // Criterion structurally irrelevant to
                                    //   this document type
});

// ══════════════════════════════════════════════════════════════════════
// FRAMEWORK REGISTRY
// ══════════════════════════════════════════════════════════════════════
//
// Single source of truth. Every framework entry MUST have:
//   id          Unique key used in all API calls and UI references
//   name        Full name exactly as published
//   abbr        Short label for display
//   zone        One of: clarity | process | behavior | outcomes
//   scoringType scored | semi-scored | checklist | process-guide
//   criteria[]  Array of checkable items from the published instrument
//   sources[]   Real published citations only — no invented references
//   notes       Any methodological caveats evaluators must know
//
// DO NOT add frameworks that are not in this file.
// DO NOT edit criteria without tracing back to the published source.
// ══════════════════════════════════════════════════════════════════════

const FRAMEWORK_REGISTRY = {

  // ── ZONE 1: CLARITY & CONTENT QUALITY ──────────────────────────────

  CCI: {
    id: 'CCI',
    name: 'CDC Clear Communication Index',
    abbr: 'CCI',
    zone: 'clarity',
    scoringType: 'scored',
    formula: '(# Yes items / 20) × 100',
    passThreshold: { pass: 90, unit: '%', label: '≥90% (18+ items)' },
    criteria: [
      // Domain 1: Main Message (7 items)
      { id: 'CCI-1',  domain: 'Main Message',  text: 'The main message is stated in the first paragraph or first screen.' },
      { id: 'CCI-2',  domain: 'Main Message',  text: 'The main message states what the audience should do or believe.' },
      { id: 'CCI-3',  domain: 'Main Message',  text: 'The main message is specific (not vague or general).' },
      { id: 'CCI-4',  domain: 'Main Message',  text: 'Numbers in the main message are presented as whole numbers.' },
      { id: 'CCI-5',  domain: 'Main Message',  text: 'A call to action is explicitly present.' },
      { id: 'CCI-6',  domain: 'Main Message',  text: 'The main message is limited to one or two key points.' },
      { id: 'CCI-7',  domain: 'Main Message',  text: 'The main message is repeated in the text.' },
      // Domain 2: Language (4 items)
      { id: 'CCI-8',  domain: 'Language',      text: 'Active voice is used throughout.' },
      { id: 'CCI-9',  domain: 'Language',      text: 'Everyday words are used; jargon and technical terms avoided or defined.' },
      { id: 'CCI-10', domain: 'Language',      text: 'Personal pronouns (you/your) are used.' },
      { id: 'CCI-11', domain: 'Language',      text: 'Average sentence length is ≤20 words.' },
      // Domain 3: Information (3 items)
      { id: 'CCI-12', domain: 'Information',   text: 'A reason or explanation is given for each behavioral recommendation.' },
      { id: 'CCI-13', domain: 'Information',   text: 'Numbers are put in context (not stand-alone statistics).' },
      { id: 'CCI-14', domain: 'Information',   text: 'Only information essential to the main message is included.' },
      // Domain 4: Numbers (3 items)
      { id: 'CCI-15', domain: 'Numbers',       text: 'Numbers are meaningful to the audience.' },
      { id: 'CCI-16', domain: 'Numbers',       text: 'Fractions and percentages are explained in plain terms.' },
      { id: 'CCI-17', domain: 'Numbers',       text: 'Numbers are not overused within the piece.' },
      // Domain 5: Risk (3 items)
      { id: 'CCI-18', domain: 'Risk',          text: 'Both the benefits and harms (both sides of risk) are shown.' },
      { id: 'CCI-19', domain: 'Risk',          text: 'Absolute risk is explained (not relative risk only).' },
      { id: 'CCI-20', domain: 'Risk',          text: 'Baseline risk or comparative reference is provided.' },
    ],
    sources: [
      'Centers for Disease Control and Prevention. (2019). CDC Clear Communication Index: A Tool for Developing and Assessing CDC Public Communication Products. U.S. Department of Health and Human Services. https://www.cdc.gov/ccindex/',
      'Baur C, Prue C. (2014). The CDC Clear Communication Index is a new evidence-based tool to prepare and review health information. Health Promotion Practice, 15(5), 629–637. https://doi.org/10.1177/1524839914538969',
    ],
    notes: 'Items 1–7 (main message domain) carry the most weight in practice. CCI does not distinguish severity of failure; every item counts equally. A score <90% requires revision regardless of how many items pass.',
  },

  PEMAT: {
    id: 'PEMAT',
    name: 'Patient Education Materials Assessment Tool',
    abbr: 'PEMAT',
    zone: 'clarity',
    scoringType: 'scored',
    formula: 'Understandability % = (Σ agrees on U items / # applicable U items) × 100 | Actionability % = (Σ agrees on A items / # applicable A items) × 100',
    passThreshold: { pass: 70, unit: '%', label: 'Both scores must exceed 70%' },
    criteria: [
      // Understandability — PEMAT-P (17 items)
      { id: 'PEMAT-U1',  domain: 'Understandability / Content',       text: 'The material makes its purpose evident.' },
      { id: 'PEMAT-U2',  domain: 'Understandability / Content',       text: 'The material does not include information that distracts from its purpose.' },
      { id: 'PEMAT-U3',  domain: 'Understandability / Content',       text: 'Information is accurate and consistent with clinical evidence.' },
      { id: 'PEMAT-U4',  domain: 'Understandability / Content',       text: 'The material uses a reading level appropriate for the target audience (≤8th grade).' },
      { id: 'PEMAT-U5',  domain: 'Understandability / Word Choice',   text: 'Common, everyday words are used.' },
      { id: 'PEMAT-U6',  domain: 'Understandability / Word Choice',   text: 'Medical terms are defined or replaced with plain words.' },
      { id: 'PEMAT-U7',  domain: 'Understandability / Numbers',       text: 'Numbers are communicated clearly.' },
      { id: 'PEMAT-U8',  domain: 'Understandability / Numbers',       text: 'Fractions or percentages are explained in everyday terms.' },
      { id: 'PEMAT-U9',  domain: 'Understandability / Numbers',       text: 'Visual representations of numbers are used where helpful.' },
      { id: 'PEMAT-U10', domain: 'Understandability / Numbers',       text: 'Numbers are presented in a way meaningful to the audience.' },
      { id: 'PEMAT-U11', domain: 'Understandability / Organization',  text: 'The material has a logical flow.' },
      { id: 'PEMAT-U12', domain: 'Understandability / Organization',  text: 'A summary or conclusion is present.' },
      { id: 'PEMAT-U13', domain: 'Understandability / Layout',        text: 'The visual presentation aids comprehension.' },
      { id: 'PEMAT-U14', domain: 'Understandability / Layout',        text: 'Tables are clear and easy to read.' },
      { id: 'PEMAT-U15', domain: 'Understandability / Layout',        text: 'The layout is not visually cluttered or distracting.' },
      { id: 'PEMAT-U16', domain: 'Understandability / Visuals',       text: 'Images or charts reinforce (not contradict) the text.' },
      { id: 'PEMAT-U17', domain: 'Understandability / Visuals',       text: 'Visual aids are clearly labeled and easy to understand.' },
      // Actionability — PEMAT-P (7 items)
      { id: 'PEMAT-A1',  domain: 'Actionability',                     text: 'The material explicitly states what the audience should do.' },
      { id: 'PEMAT-A2',  domain: 'Actionability',                     text: 'Action steps are specific and doable (not vague).' },
      { id: 'PEMAT-A3',  domain: 'Actionability',                     text: 'Tools or aids are provided to support taking action (e.g., checklist, tracking sheet).' },
      { id: 'PEMAT-A4',  domain: 'Actionability',                     text: 'The reader can identify their next step from the material.' },
      { id: 'PEMAT-A5',  domain: 'Actionability',                     text: 'Contact information or a referral path is provided.' },
      { id: 'PEMAT-A6',  domain: 'Actionability',                     text: 'A visual representation of action steps is included where applicable.' },
      { id: 'PEMAT-A7',  domain: 'Actionability',                     text: 'The timing for taking action is specified.' },
    ],
    sources: [
      'Shoemaker SJ, Wolf MS, Brach C. (2014). Development of the Patient Education Materials Assessment Tool (PEMAT): A new measure of understandability and actionability for print and audiovisual patient information. Patient Education and Counseling, 96(3), 395–403. https://doi.org/10.1016/j.pec.2014.05.027',
      'Agency for Healthcare Research and Quality. PEMAT and User\'s Guide. https://www.ahrq.gov/health-literacy/patient-education/pemat.html',
    ],
    notes: 'PEMAT produces two separate scores — Understandability and Actionability — never combined. N/A items are excluded from the denominator. Both scores must exceed 70% independently. PEMAT-A/V version applies to audiovisual materials.',
  },

  SAM: {
    id: 'SAM',
    name: 'Suitability Assessment of Materials',
    abbr: 'SAM',
    zone: 'clarity',
    scoringType: 'scored',
    formula: 'Score % = (Σ points scored / Σ max possible points) × 100',
    passThreshold: {
      superior: { min: 70, max: 100, label: 'Superior (70–100%)' },
      adequate: { min: 40, max: 69,  label: 'Adequate (40–69%)' },
      unsuitable: { max: 39,          label: 'Not Suitable (<40%)' },
    },
    itemScale: '0 = Not Suitable / 1 = Adequate / 2 = Superior',
    criteria: [
      // Category 1: Content (6 factors)
      { id: 'SAM-C1', domain: 'Content', text: 'Purpose of the material is stated explicitly.' },
      { id: 'SAM-C2', domain: 'Content', text: 'Content is limited to the essential message (not overloaded).' },
      { id: 'SAM-C3', domain: 'Content', text: 'A summary or review is included.' },
      { id: 'SAM-C4', domain: 'Content', text: 'Reading level matches the target audience (Fry formula ≤5th grade preferred).' },
      { id: 'SAM-C5', domain: 'Content', text: 'Scope is appropriate to the purpose.' },
      { id: 'SAM-C6', domain: 'Content', text: 'Common vocabulary is used throughout.' },
      // Category 2: Literacy Demand (7 factors)
      { id: 'SAM-L1', domain: 'Literacy Demand', text: 'Writing style is active voice and conversational.' },
      { id: 'SAM-L2', domain: 'Literacy Demand', text: 'Sentence structure is simple; compound-complex sentences avoided.' },
      { id: 'SAM-L3', domain: 'Literacy Demand', text: 'Context is established before adding detail.' },
      { id: 'SAM-L4', domain: 'Literacy Demand', text: 'Learning aids (examples, analogies) are used.' },
      { id: 'SAM-L5', domain: 'Literacy Demand', text: 'Vocabulary uses common words; technical terms defined when necessary.' },
      { id: 'SAM-L6', domain: 'Literacy Demand', text: 'Reading grade level is ≤5th grade (preferred) or ≤8th grade (minimum).' },
      { id: 'SAM-L7', domain: 'Literacy Demand', text: 'Sentence length is appropriate (short sentences preferred).' },
      // Category 3: Graphics (4 factors)
      { id: 'SAM-G1', domain: 'Graphics', text: 'Cover graphic draws audience interest and is relevant.' },
      { id: 'SAM-G2', domain: 'Graphics', text: 'Type of visuals used is appropriate for the audience and content.' },
      { id: 'SAM-G3', domain: 'Graphics', text: 'Captions are present and explain visuals.' },
      { id: 'SAM-G4', domain: 'Graphics', text: 'Visuals are culturally relevant and free from bias.' },
      // Category 4: Layout & Typography (3 factors)
      { id: 'SAM-T1', domain: 'Layout & Typography', text: 'Layout uses columns, white space, and margins effectively.' },
      { id: 'SAM-T2', domain: 'Layout & Typography', text: 'Font size is ≥12pt for body text.' },
      { id: 'SAM-T3', domain: 'Layout & Typography', text: 'Subheadings break up text and are informative.' },
      // Category 5: Learning Stimulation & Motivation (2 factors)
      { id: 'SAM-M1', domain: 'Learning & Motivation', text: 'Material includes interaction (questions, checklists, problems to solve).' },
      { id: 'SAM-M2', domain: 'Learning & Motivation', text: 'Behavior modeling shows positive desired behaviors.' },
      // Category 6: Cultural Appropriateness (2 factors)
      { id: 'SAM-CA1', domain: 'Cultural Appropriateness', text: 'Images and examples match the target audience\'s cultural context.' },
      { id: 'SAM-CA2', domain: 'Cultural Appropriateness', text: 'Cultural logic, values, and norms are respected.' },
    ],
    sources: [
      'Doak CC, Doak LG, Root JH. (1996). Teaching Patients with Low Literacy Skills (2nd ed.). J.B. Lippincott. (SAM instrument: pp. 41–59)',
      'Winslow EH. (2001). Patient education materials: Can patients read them, or are they ending up in the trash? American Journal of Nursing, 101(10), 33–38. https://doi.org/10.1097/00000446-200110000-00020',
    ],
    notes: 'A score of 0 (Not Suitable) on any Content factor (SAM-C1 through SAM-C6) should be treated as a blocker regardless of total score. SAM is the most granular content auditing tool in the library.',
  },

  DISCERN: {
    id: 'DISCERN',
    name: 'DISCERN Quality Instrument for Consumer Health Information',
    abbr: 'DISCERN',
    zone: 'clarity',
    scoringType: 'scored',
    formula: 'Part 1 (Q1–8): sum range 8–40 | Part 2 (Q9–15): sum range 7–35 | Q16: standalone overall rating 1–5',
    passThreshold: null, // No absolute threshold; comparative only
    itemScale: '1 = No/Poor → 5 = Yes/Excellent',
    criteria: [
      // Part 1: Reliability (Q1–8)
      { id: 'DISCERN-1',  domain: 'Reliability',        text: 'Q1: Are the aims of the publication clearly stated at the beginning?' },
      { id: 'DISCERN-2',  domain: 'Reliability',        text: 'Q2: Does it achieve its aims?' },
      { id: 'DISCERN-3',  domain: 'Reliability',        text: 'Q3: Is it relevant to patients?' },
      { id: 'DISCERN-4',  domain: 'Reliability',        text: 'Q4: Are the sources of information used explicit (referenced)?' },
      { id: 'DISCERN-5',  domain: 'Reliability',        text: 'Q5: Is the date of information stated (when it was produced or reviewed)?' },
      { id: 'DISCERN-6',  domain: 'Reliability',        text: 'Q6: Is it balanced and unbiased?' },
      { id: 'DISCERN-7',  domain: 'Reliability',        text: 'Q7: Does it provide details of additional sources of support and information?' },
      { id: 'DISCERN-8',  domain: 'Reliability',        text: 'Q8: Does it refer to areas of uncertainty?' },
      // Part 2: Treatment Choices (Q9–15)
      { id: 'DISCERN-9',  domain: 'Treatment Choices',  text: 'Q9: Does it describe how each treatment works?' },
      { id: 'DISCERN-10', domain: 'Treatment Choices',  text: 'Q10: Does it describe the benefits of each treatment?' },
      { id: 'DISCERN-11', domain: 'Treatment Choices',  text: 'Q11: Does it describe the risks and side effects of each treatment?' },
      { id: 'DISCERN-12', domain: 'Treatment Choices',  text: 'Q12: Does it describe what would happen if no treatment is chosen?' },
      { id: 'DISCERN-13', domain: 'Treatment Choices',  text: 'Q13: Does it describe how the treatment choices may affect overall quality of life?' },
      { id: 'DISCERN-14', domain: 'Treatment Choices',  text: 'Q14: Is it clear that there may be more than one possible treatment choice?' },
      { id: 'DISCERN-15', domain: 'Treatment Choices',  text: 'Q15: Does it provide support for shared decision-making?' },
      // Overall
      { id: 'DISCERN-16', domain: 'Overall',            text: 'Q16: Overall, how would you rate the quality of this publication? (standalone 1–5 rating)' },
    ],
    sources: [
      'Charnock D, Shepperd S, Needham G, Gann R. (1999). DISCERN: An instrument for judging the quality of written consumer health information on treatment choices. Journal of Epidemiology and Community Health, 53(2), 105–111. https://doi.org/10.1136/jech.53.2.105',
      'DISCERN Online. University of Oxford & British Library. http://www.discern.org.uk',
    ],
    notes: 'No absolute pass/fail threshold. DISCERN scores are comparative — used against published benchmarks (peer-reviewed health leaflets average ~3.5–4/5 per question). Q16 is kept separate from Part 1 and Part 2 totals.',
  },

  EQIP: {
    id: 'EQIP',
    name: 'Ensuring Quality Information for Patients',
    abbr: 'EQIP',
    zone: 'clarity',
    scoringType: 'scored',
    formula: 'Score % = (# Yes items / # applicable items) × 100',
    passThreshold: null, // Normative/comparative, no universal threshold
    itemScale: 'Yes (1) / No (0) / N/A (excluded from denominator)',
    criteria: [
      { id: 'EQIP-1', domain: 'Identity',          text: 'Authorship, source organization, date, and version are clearly stated.' },
      { id: 'EQIP-2', domain: 'Purpose',            text: 'The document purpose is explicitly stated.' },
      { id: 'EQIP-3', domain: 'Purpose',            text: 'The target audience is explicitly stated.' },
      { id: 'EQIP-4', domain: 'Content',            text: 'Information on the condition or topic is accurate and complete.' },
      { id: 'EQIP-5', domain: 'Content',            text: 'Treatment options are described.' },
      { id: 'EQIP-6', domain: 'Recommendations',    text: 'Specific, actionable recommendations are provided.' },
      { id: 'EQIP-7', domain: 'Recommendations',    text: 'The basis or rationale for recommendations is explained.' },
      { id: 'EQIP-8', domain: 'Comprehensibility',  text: 'Language is appropriate for the target audience; jargon is avoided.' },
      { id: 'EQIP-9', domain: 'Comprehensibility',  text: 'Sentences are short and active voice is used.' },
      { id: 'EQIP-10', domain: 'Layout & Design',   text: 'Logical structure and headings are used to aid navigation.' },
      { id: 'EQIP-11', domain: 'Layout & Design',   text: 'White space and font size are adequate for readability.' },
      { id: 'EQIP-12', domain: 'Illustrations',     text: 'Visuals are present and appropriate to the content.' },
      { id: 'EQIP-13', domain: 'Illustrations',     text: 'Visuals are labeled and clearly explained.' },
      { id: 'EQIP-14', domain: 'References',        text: 'Evidence is cited and references are listed.' },
      { id: 'EQIP-15', domain: 'References',        text: 'The evidence base is dated (sources have publication years).' },
    ],
    sources: [
      'Moult B, Franck LS, Brady H. (2004). Ensuring quality information for patients: Development and preliminary validation of a new instrument to improve the quality of written health care information. Health Expectations, 7(2), 165–175. https://doi.org/10.1111/j.1369-7625.2004.00273.x',
    ],
    notes: 'EQIP uses 36 items across 8 sections in the full instrument. Separate section scores are useful for diagnostic targeting. No universal pass threshold — used normatively across document versions.',
  },

  READABILITY: {
    id: 'READABILITY',
    name: 'Readability Measures (Flesch-Kincaid / SMOG / Flesch Reading Ease)',
    abbr: 'Readability',
    zone: 'clarity',
    scoringType: 'scored',
    criteria: [
      { id: 'READ-FRE',  domain: 'Flesch Reading Ease',        text: 'FRE score: 206.835 − (1.015 × ASL) − (84.6 × ASW). Target: 60–70 (Standard/Plain). Below 50 = Difficult.', formula: 'FRE = 206.835 − (1.015 × ASL) − (84.6 × ASW)' },
      { id: 'READ-FKGL', domain: 'Flesch-Kincaid Grade Level', text: 'FKGL score: (0.39 × ASL) + (11.8 × ASW) − 15.59. Target: grade 6–8 for health materials. Above 10 = Too complex.', formula: 'FKGL = (0.39 × ASL) + (11.8 × ASW) − 15.59' },
      { id: 'READ-SMOG', domain: 'SMOG Grade',                 text: 'SMOG grade level. Target: ≤8 (6th–8th grade). Requires ≥30 sentences for accuracy. Most accurate measure for health materials due to polysyllabic term density.', formula: 'SMOG Grade = √(Polysyllabic word count × [30 / # sentences]) + 3' },
    ],
    passThreshold: {
      fre:  { target: '60–70', warn: '50–59', fail: '<50' },
      fkgl: { target: '6–8',   warn: '9–10',  fail: '>10' },
      smog: { target: '≤8',    warn: '9–10',  fail: '>10' },
    },
    sources: [
      'Flesch R. (1948). A new readability yardstick. Journal of Applied Psychology, 32(3), 221–233. https://doi.org/10.1037/h0057532',
      'Kincaid JP, Fishburne RP Jr, Rogers RL, Chissom BS. (1975). Derivation of New Readability Formulas for Navy Enlisted Personnel. Research Branch Report 8-75. Naval Technical Training Command. https://apps.dtic.mil/sti/pdfs/ADA006655.pdf',
      'McLaughlin GH. (1969). SMOG grading: A new readability formula. Journal of Reading, 12(8), 639–646.',
      'Paasche-Orlow MK, Taylor HA, Brancati FL. (2003). Readability standards for informed-consent forms as compared with actual readability. New England Journal of Medicine, 348(8), 721–726. https://doi.org/10.1056/NEJMsa021212',
    ],
    notes: 'SMOG is the most accurate readability measure for health materials because it accounts for medical polysyllabic term density. Use SMOG as primary; FRE and FKGL as secondary checks.',
  },

  PLAIN_LANGUAGE: {
    id: 'PLAIN_LANGUAGE',
    name: 'U.S. Federal Plain Language Guidelines',
    abbr: 'Plain Language',
    zone: 'clarity',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'PL-1', domain: 'Write for your audience',        text: 'The document is written for a clearly defined audience.' },
      { id: 'PL-2', domain: 'Write for your audience',        text: '"You" and "we" personal pronouns are used.' },
      { id: 'PL-3', domain: 'Write for your audience',        text: 'Content addresses the reader\'s questions, not the organization\'s messaging goals.' },
      { id: 'PL-4', domain: 'Organize for the reader',        text: 'The most important information appears first.' },
      { id: 'PL-5', domain: 'Organize for the reader',        text: 'Headers are used to guide the reader.' },
      { id: 'PL-6', domain: 'Choose words carefully',         text: 'Common, everyday words are used throughout.' },
      { id: 'PL-7', domain: 'Choose words carefully',         text: 'Jargon is avoided or defined when unavoidable.' },
      { id: 'PL-8', domain: 'Choose words carefully',         text: 'Nominalizations are avoided (e.g., "apply" not "make an application").' },
      { id: 'PL-9', domain: 'Short sentences & paragraphs',   text: 'Average sentence length is ≤20 words.' },
      { id: 'PL-10', domain: 'Short sentences & paragraphs',  text: 'Each paragraph contains one main idea.' },
      { id: 'PL-11', domain: 'Short sentences & paragraphs',  text: 'Active voice is used.' },
      { id: 'PL-12', domain: 'Design to aid comprehension',   text: 'Bullet lists are used for series of 3+ items.' },
      { id: 'PL-13', domain: 'Design to aid comprehension',   text: 'Tables are used for complex comparative data.' },
      { id: 'PL-14', domain: 'Design to aid comprehension',   text: 'Adequate white space is present.' },
    ],
    sources: [
      'Plain Language Action and Information Network (PLAIN). (2011). Federal Plain Language Guidelines. PlainLanguage.gov. https://www.plainlanguage.gov/guidelines/',
      'Plain Writing Act of 2010, Pub. L. 111-274, 124 Stat. 2861 (2010). https://www.govinfo.gov/content/pkg/PLAW-111publ274/pdf/PLAW-111publ274.pdf',
    ],
    notes: 'Plain Language is a prescriptive editing checklist, not a scoring rubric. Applied during drafting and revision, not as post-hoc auditing. No numerical score — compliance is qualitative.',
  },

  NCI_PINK_BOOK: {
    id: 'NCI_PINK_BOOK',
    name: 'National Cancer Institute — Making Health Communication Programs Work',
    abbr: 'NCI Pink Book',
    zone: 'clarity',
    scoringType: 'process-guide',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'PINK-1', domain: 'Phase 1: Planning & Strategy',       text: 'The problem, audience, objective, channels, and available resources are defined.' },
      { id: 'PINK-2', domain: 'Phase 2: Developing Concepts',       text: 'Formative research with the target audience has been conducted.' },
      { id: 'PINK-3', domain: 'Phase 2: Developing Concepts',       text: 'Message concepts have been tested with the target audience.' },
      { id: 'PINK-4', domain: 'Phase 3: Developing Materials',      text: 'Draft materials were pretested with the target audience.' },
      { id: 'PINK-5', domain: 'Phase 3: Developing Materials',      text: 'Iterative revision was performed based on pretesting feedback.' },
      { id: 'PINK-6', domain: 'Phase 4: Implementation',            text: 'Channel selection and dissemination plan are documented.' },
      { id: 'PINK-7', domain: 'Phase 5: Assessing Effectiveness',   text: 'Process and outcome evaluation methods are specified.' },
      { id: 'PINK-8', domain: 'Phase 6: Feedback to Refine',        text: 'Findings are used to improve future communication.' },
    ],
    sources: [
      'National Cancer Institute. (2004). Making Health Communication Programs Work ("The Pink Book"). U.S. Department of Health and Human Services, NIH Publication No. 04-5145. https://www.cancer.gov/publications/health-communication/pink-book.pdf',
    ],
    notes: 'The Pink Book mandates audience testing at Phase 2 and Phase 3. A material that has not been tested with its target audience fails the Pink Book standard regardless of CCI or SAM scores. Most criteria are NOT_ASSESSABLE from document content alone — they require process documentation.',
  },

  // ── ZONE 2: PROCESS & INTERACTION QUALITY ──────────────────────────

  TEACH_BACK: {
    id: 'TEACH_BACK',
    name: 'Teach-Back Method & Ask Me 3',
    abbr: 'Teach-Back / Ask Me 3',
    zone: 'process',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      // Teach-Back (requires live interaction — mostly NOT_ASSESSABLE from document)
      { id: 'TB-1', domain: 'Teach-Back', text: 'Key information is presented in a way that a patient could explain it back in their own words.', notAssessableFromDoc: false },
      { id: 'TB-2', domain: 'Teach-Back', text: 'The material is structured so the clinician can ask the patient to demonstrate understanding (teach-back prompt built in).', notAssessableFromDoc: false },
      { id: 'TB-3', domain: 'Teach-Back', text: 'If misunderstanding occurs, the material provides a re-explanation path without blaming the patient.', notAssessableFromDoc: false },
      // Ask Me 3 — evaluable from document content
      { id: 'AM3-1', domain: 'Ask Me 3', text: 'Q1 answered: What is my main problem? — The document clearly states the main health problem.' },
      { id: 'AM3-2', domain: 'Ask Me 3', text: 'Q2 answered: What do I need to do? — The document clearly states the action the patient should take.' },
      { id: 'AM3-3', domain: 'Ask Me 3', text: 'Q3 answered: Why is it important for me to do this? — The document explains why the action matters.' },
    ],
    sources: [
      'Agency for Healthcare Research and Quality. (2020). Use the Teach-Back Method: Tool #5. Health Literacy Universal Precautions Toolkit. https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html',
      'Schillinger D, Piette J, Grumbach K, et al. (2003). Closing the loop: Physician communication with diabetic patients who have low health literacy. Archives of Internal Medicine, 163(1), 83–90. https://doi.org/10.1001/archinte.163.1.83',
      'Pfizer. (n.d.). Ask Me 3: Good Questions for Your Good Health. National Patient Safety Foundation. https://www.npsf.org/page/askme3',
    ],
    notes: 'Teach-Back is a live clinical interaction method. TB-1 through TB-3 can be partially assessed from written materials (are they written to support teach-back?). Ask Me 3 (AM3-1 to AM3-3) can be fully assessed from document content. If a patient cannot answer all three Ask Me 3 questions from the document alone, the material needs revision regardless of readability scores.',
  },

  OPTION: {
    id: 'OPTION',
    name: 'Observing Patient Involvement in Decision Making',
    abbr: 'OPTION Scale',
    zone: 'process',
    scoringType: 'scored',
    formula: 'Raw total = Σ of 12 items (0–48) → Rescaled: (Raw / 48) × 100',
    passThreshold: null, // No single benchmark; used comparatively
    itemScale: '0 = not observed | 1 = minimal attempt | 2 = notable effort | 3 = consistent | 4 = fully applied',
    criteria: [
      { id: 'OPTION-1',  domain: 'Shared Decision Making', text: 'The clinician draws attention to there being a problem that requires a decision.' },
      { id: 'OPTION-2',  domain: 'Shared Decision Making', text: 'The clinician states that there is more than one way to deal with the problem.' },
      { id: 'OPTION-3',  domain: 'Shared Decision Making', text: 'The clinician assesses the patient\'s preferred format for receiving information.' },
      { id: 'OPTION-4',  domain: 'Shared Decision Making', text: 'The clinician lists options including the option of no active treatment.' },
      { id: 'OPTION-5',  domain: 'Shared Decision Making', text: 'The clinician explains the pros and cons of each option.' },
      { id: 'OPTION-6',  domain: 'Shared Decision Making', text: 'The clinician explores the patient\'s expectations or ideas about how the problem is to be managed.' },
      { id: 'OPTION-7',  domain: 'Shared Decision Making', text: 'The clinician explores the patient\'s concerns about each option.' },
      { id: 'OPTION-8',  domain: 'Shared Decision Making', text: 'The clinician checks that the patient has understood the information.' },
      { id: 'OPTION-9',  domain: 'Shared Decision Making', text: 'The clinician explores whether the patient has a preferred option.' },
      { id: 'OPTION-10', domain: 'Shared Decision Making', text: 'The clinician negotiates a decision with the patient.' },
      { id: 'OPTION-11', domain: 'Shared Decision Making', text: 'The clinician indicates a need to review the decision.' },
      { id: 'OPTION-12', domain: 'Shared Decision Making', text: 'The clinician defers to the patient\'s preferred option.' },
    ],
    sources: [
      'Elwyn G, Edwards A, Wensing M, Hood K, Atwell C, Grol R. (2003). Shared decision making: Developing the OPTION scale for measuring patient involvement. Quality and Safety in Health Care, 12(2), 93–99. https://doi.org/10.1136/qhc.12.2.93',
      'Elwyn G, Hutchings H, Edwards A, et al. (2005). The OPTION scale: Measuring the extent that clinicians involve patients in decision-making tasks. Health Expectations, 8(1), 34–42. https://doi.org/10.1111/j.1369-7625.2004.00311.x',
    ],
    notes: 'OPTION requires a trained observer rating a clinical consultation (live or recorded). Most criteria are NOT_ASSESSABLE when evaluating written materials. Published real-world primary care consultations average 20–40/100.',
  },

  IPDAS: {
    id: 'IPDAS',
    name: 'International Patient Decision Aid Standards',
    abbr: 'IPDAS',
    zone: 'process',
    scoringType: 'semi-scored',
    criteria: [
      // Qualifying criteria — must pass ALL 6
      { id: 'IPDAS-Q1', domain: 'Qualifying (must meet all 6)', tier: 'qualifying', text: 'The health condition for which the index decision is required is described.' },
      { id: 'IPDAS-Q2', domain: 'Qualifying (must meet all 6)', tier: 'qualifying', text: 'The index decision is explicitly stated.' },
      { id: 'IPDAS-Q3', domain: 'Qualifying (must meet all 6)', tier: 'qualifying', text: 'The options available for the index decision are described.' },
      { id: 'IPDAS-Q4', domain: 'Qualifying (must meet all 6)', tier: 'qualifying', text: 'The positive features (benefits/advantages) of each option are described.' },
      { id: 'IPDAS-Q5', domain: 'Qualifying (must meet all 6)', tier: 'qualifying', text: 'The negative features (harms/side effects/disadvantages) of each option are described.' },
      { id: 'IPDAS-Q6', domain: 'Qualifying (must meet all 6)', tier: 'qualifying', text: 'What it is like to experience the consequences of the options is described.' },
      // Certifying criteria
      { id: 'IPDAS-C1',  domain: 'Information',         tier: 'certifying', text: 'Probabilities are presented for outcomes of each option.' },
      { id: 'IPDAS-C2',  domain: 'Information',         tier: 'certifying', text: 'Absolute risk is used (not relative risk only).' },
      { id: 'IPDAS-C3',  domain: 'Information',         tier: 'certifying', text: 'A time horizon for outcomes is explicit.' },
      { id: 'IPDAS-C4',  domain: 'Information',         tier: 'certifying', text: 'Uncertainty in the evidence is acknowledged.' },
      { id: 'IPDAS-C5',  domain: 'Probabilities',       tier: 'certifying', text: 'Event rates use the same denominator across options.' },
      { id: 'IPDAS-C6',  domain: 'Probabilities',       tier: 'certifying', text: 'Sources and dates of evidence are cited.' },
      { id: 'IPDAS-C7',  domain: 'Values Clarification',tier: 'certifying', text: 'Features most important to patients are described.' },
      { id: 'IPDAS-C8',  domain: 'Values Clarification',tier: 'certifying', text: 'An exercise to help the patient clarify their values is included.' },
      { id: 'IPDAS-C9',  domain: 'Guidance / Coaching', tier: 'certifying', text: 'Steps for deliberation and decision-making are described.' },
      { id: 'IPDAS-C10', domain: 'Guidance / Coaching', tier: 'certifying', text: 'Guidance for preparing for a clinical consultation is included.' },
      { id: 'IPDAS-C11', domain: 'Guidance / Coaching', tier: 'certifying', text: 'The material does not pressure the patient toward one option.' },
      { id: 'IPDAS-C12', domain: 'Development',         tier: 'certifying', text: 'A systematic development process is documented.' },
      { id: 'IPDAS-C13', domain: 'Development',         tier: 'certifying', text: 'Patients and clinicians were involved in development.' },
      { id: 'IPDAS-C14', domain: 'Development',         tier: 'certifying', text: 'Plain language review was conducted.' },
      { id: 'IPDAS-C15', domain: 'Development',         tier: 'certifying', text: 'Field testing with the target audience was done.' },
      { id: 'IPDAS-C16', domain: 'Disclosure',          tier: 'certifying', text: 'Funding sources are disclosed.' },
      { id: 'IPDAS-C17', domain: 'Disclosure',          tier: 'certifying', text: 'Conflicts of interest are disclosed.' },
      { id: 'IPDAS-C18', domain: 'Plain Language',      tier: 'certifying', text: 'Reading level is ≤8th grade.' },
    ],
    sources: [
      'Elwyn G, O\'Connor A, Stacey D, et al. (2006). Developing a quality criteria framework for patient decision aids: Online international Delphi consensus process. BMJ, 333(7565), 417. https://doi.org/10.1136/bmj.38926.629329.AE',
      'Stacey D, Légaré F, Pouliot S, Kryworuchko J, Dunn S. (2010). Shared decision making models to inform an interprofessional perspective on decision support for people facing health decisions. Patient Education and Counseling, 80(2), 164–172. https://doi.org/10.1016/j.pec.2009.10.015',
      'IPDAS Collaboration. Patient Decision Aids. Ottawa Hospital Research Institute. https://ipdas.ohri.ca/',
    ],
    notes: 'Qualifying criteria are a gate — failing any one disqualifies the material as a patient decision aid. Certifying criteria are aspirational standards for formal certification. Development and process criteria (C12–C15) are typically NOT_ASSESSABLE from document content alone.',
  },

  AHRQ_TOOLKIT: {
    id: 'AHRQ_TOOLKIT',
    name: 'AHRQ Health Literacy Universal Precautions Toolkit (2nd ed.)',
    abbr: 'AHRQ Toolkit',
    zone: 'process',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'AHRQ-1',  domain: 'Spoken Communication',      text: 'Teach-back technique is incorporated into patient communication.' },
      { id: 'AHRQ-2',  domain: 'Spoken Communication',      text: 'Communication is designed to be accessible for non-English speakers.' },
      { id: 'AHRQ-3',  domain: 'Written Communication',     text: 'Materials are easy to read (reviewed using CCI or equivalent).' },
      { id: 'AHRQ-4',  domain: 'Written Communication',     text: 'Consent forms are written at an appropriate reading level.' },
      { id: 'AHRQ-5',  domain: 'Written Communication',     text: 'Medication instructions are clear and actionable.' },
      { id: 'AHRQ-6',  domain: 'Self-Management',           text: 'Materials support patient self-management goals.' },
      { id: 'AHRQ-7',  domain: 'Self-Management',           text: 'Forms and documents are designed to be easy to use and complete.' },
      { id: 'AHRQ-8',  domain: 'Supportive Systems',        text: 'Appointment and referral instructions are clear.' },
      { id: 'AHRQ-9',  domain: 'Supportive Systems',        text: 'A team-based approach to health literacy is reflected.' },
    ],
    sources: [
      'Agency for Healthcare Research and Quality. (2015). Health Literacy Universal Precautions Toolkit (2nd ed.). AHRQ Publication No. 15-0023-EF. https://www.ahrq.gov/health-literacy/improve/precautions/index.html',
      'DeWalt DA, Callahan LF, Hawk VH, et al. (2010). Health literacy universal precautions toolkit. AHRQ Publication No. 10-0046-EF. Agency for Healthcare Research and Quality.',
    ],
    notes: 'The Toolkit is a practice improvement framework, not a document scoring tool. Spoken communication and system criteria (AHRQ-1, AHRQ-2, AHRQ-8, AHRQ-9) are typically NOT_ASSESSABLE from written materials alone.',
  },

  OTTAWA_DMSF: {
    id: 'OTTAWA_DMSF',
    name: 'Ottawa Decision Support Framework + Decisional Conflict Scale',
    abbr: 'Ottawa DMSF',
    zone: 'process',
    scoringType: 'semi-scored',
    formula: 'DCS Score = (sum / 64) × 25 → range 0–100',
    passThreshold: { low: '<25', moderate: '25–37.4', high: '≥37.5' },
    criteria: [
      // DMSF design criteria (assessed from document)
      { id: 'OTTAWA-1', domain: 'Decision Needs Assessment',    text: 'Knowledge gaps about options are addressed.' },
      { id: 'OTTAWA-2', domain: 'Decision Needs Assessment',    text: 'Patient values are acknowledged as relevant to the decision.' },
      { id: 'OTTAWA-3', domain: 'Decision Needs Assessment',    text: 'Barriers to communication are recognized and addressed.' },
      { id: 'OTTAWA-4', domain: 'Decision Support Interventions', text: 'Risk communication is provided in an understandable format.' },
      { id: 'OTTAWA-5', domain: 'Decision Support Interventions', text: 'A values clarification exercise is included.' },
      // DCS subscales (require patient survey — NOT_ASSESSABLE from document)
      { id: 'OTTAWA-DCS1', domain: 'DCS: Informed',            text: 'Patient feels they know enough about options, risks, and benefits. (Requires DCS survey — not assessable from document alone)', notAssessableFromDoc: true },
      { id: 'OTTAWA-DCS2', domain: 'DCS: Values Clarity',      text: 'Patient knows which benefits/risks matter most to them. (Requires DCS survey)', notAssessableFromDoc: true },
      { id: 'OTTAWA-DCS3', domain: 'DCS: Support',             text: 'Patient has enough support and advice. (Requires DCS survey)', notAssessableFromDoc: true },
      { id: 'OTTAWA-DCS4', domain: 'DCS: Uncertainty',         text: 'Patient is not uncertain about the choice. (Requires DCS survey)', notAssessableFromDoc: true },
      { id: 'OTTAWA-DCS5', domain: 'DCS: Effective Decision',  text: 'Patient feels decision is informed, value-based, and supported. (Requires DCS survey)', notAssessableFromDoc: true },
    ],
    sources: [
      'O\'Connor AM. (1995). Validation of a decisional conflict scale. Medical Decision Making, 15(1), 25–30. https://doi.org/10.1177/0272989X9501500105',
      'O\'Connor AM, Tugwell P, Wells GA, et al. (1998). A decision aid for women considering hormone therapy after menopause. Patient Education and Counseling, 33(3), 267–279. https://doi.org/10.1016/S0738-3991(98)00026-3',
      'Ottawa Hospital Research Institute. Decision Support & Decision Aids. https://decisionaid.ohri.ca/',
    ],
    notes: 'The DMSF is a design framework (not scored). The Decisional Conflict Scale (DCS) is the measurement instrument and requires a patient survey — criteria marked notAssessableFromDoc cannot be evaluated from document content alone.',
  },

  SHARE: {
    id: 'SHARE',
    name: 'AHRQ SHARE Approach — Shared Decision Making Framework',
    abbr: 'SHARE Approach',
    zone: 'process',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'SHARE-S', domain: 'Seek patient participation',   text: 'The material or process explicitly invites the patient into the decision; explains it is a choice, not a directive.' },
      { id: 'SHARE-H', domain: 'Help explore options',         text: 'All reasonable options including watchful waiting are presented with balanced information.' },
      { id: 'SHARE-A', domain: 'Assess values & preferences',  text: 'Patient values and what matters most are elicited; open questions are used; no steering toward one option.' },
      { id: 'SHARE-R', domain: 'Reach a decision together',    text: 'The decision is negotiated; patient comfort is confirmed; decision and rationale are documented.' },
      { id: 'SHARE-E', domain: 'Evaluate the decision',        text: 'Follow-up and revisiting are planned; decisional regret is acknowledged as possible.' },
    ],
    sources: [
      'Agency for Healthcare Research and Quality. (2014). The SHARE Approach — A Model for Shared Decision Making: A Resource for Clinicians. AHRQ Publication No. 14-0058-1-EF. https://www.ahrq.gov/health-literacy/professional-training/shared-decision/index.html',
      'Elwyn G, Frosch D, Thomson R, et al. (2012). Shared decision making: A model for clinical practice. Journal of General Internal Medicine, 27(10), 1361–1367. https://doi.org/10.1007/s11606-012-2077-6',
    ],
    notes: 'SHARE is a clinician conversation model used for training and workflow design. Steps R and E (reaching a decision together, follow-up) are typically NOT_ASSESSABLE from written materials alone.',
  },

  // ── ZONE 3: BEHAVIOR & PSYCHOLOGY ──────────────────────────────────

  COM_B: {
    id: 'COM_B',
    name: 'COM-B Behaviour System + Behaviour Change Wheel',
    abbr: 'COM-B',
    zone: 'behavior',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'COMB-C1', domain: 'Capability — Physical',      text: 'The document addresses physical ability barriers to performing the target behavior.' },
      { id: 'COMB-C2', domain: 'Capability — Psychological', text: 'The document provides knowledge, understanding, or memory aids to support the target behavior.' },
      { id: 'COMB-O1', domain: 'Opportunity — Physical',     text: 'The document addresses resources, environmental, or timing factors needed to perform the behavior.' },
      { id: 'COMB-O2', domain: 'Opportunity — Social',       text: 'The document acknowledges social influences, cultural norms, or peer support factors.' },
      { id: 'COMB-M1', domain: 'Motivation — Automatic',     text: 'The document addresses habits, emotional responses, or impulse triggers related to the behavior.' },
      { id: 'COMB-M2', domain: 'Motivation — Reflective',    text: 'The document addresses beliefs, intentions, goals, or reasoning about the behavior.' },
      { id: 'COMB-BCW', domain: 'BCW Intervention Match',    text: 'The intervention type(s) used in the document match the diagnosed COM-B gap (e.g., education for psychological capability gaps; persuasion for reflective motivation gaps).' },
    ],
    sources: [
      'Michie S, van Stralen MM, West R. (2011). The behaviour change wheel: A new method for characterising and designing behaviour change interventions. Implementation Science, 6(1), 42. https://doi.org/10.1186/1748-5908-6-42',
      'Michie S, Atkins L, West R. (2014). The Behaviour Change Wheel: A Guide to Designing Interventions. Silverback Publishing. ISBN 978-1-909567-00-4.',
    ],
    notes: 'COM-B is a diagnostic framework — outputs are gap diagnoses and intervention maps, not scores. Assessment requires knowing which COM-B sub-component is the barrier before evaluating whether the document addresses it. COMB-BCW requires evaluator judgment about intervention match.',
  },

  HBM: {
    id: 'HBM',
    name: 'Health Belief Model',
    abbr: 'HBM',
    zone: 'behavior',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'HBM-1', domain: 'Perceived Susceptibility', text: 'The document communicates that the audience is at risk for the condition ("People like you are at risk…").' },
      { id: 'HBM-2', domain: 'Perceived Severity',      text: 'The document communicates the seriousness of the condition or its consequences if left unaddressed.' },
      { id: 'HBM-3', domain: 'Perceived Benefits',      text: 'The document explains how taking the recommended action will reduce risk or harm.' },
      { id: 'HBM-4', domain: 'Perceived Barriers',      text: 'The document acknowledges and directly addresses barriers or objections to taking the recommended action.' },
      { id: 'HBM-5', domain: 'Cues to Action',          text: 'The document provides external or internal triggers that prompt the desired behavior (e.g., reminder prompts, symptom descriptions).' },
      { id: 'HBM-6', domain: 'Self-Efficacy',           text: 'The document builds confidence that the audience can perform the recommended action (step-by-step instructions, "you can do this" framing).' },
    ],
    sources: [
      'Rosenstock IM. (1974). Historical origins of the health belief model. Health Education Monographs, 2(4), 328–335. https://doi.org/10.1177/109019817400200403',
      'Janz NK, Becker MH. (1984). The health belief model: A decade later. Health Education Quarterly, 11(1), 1–47. https://doi.org/10.1177/109019818401100101',
      'Champion VL, Skinner CS. (2008). The health belief model. In K Glanz, BK Rimer, K Viswanath (Eds.), Health Behavior and Health Education: Theory, Research, and Practice (4th ed., pp. 45–65). Jossey-Bass.',
    ],
    notes: 'The most common HBM design error: addressing Susceptibility (HBM-1) and Severity (HBM-2) while neglecting Barriers (HBM-4) and Self-Efficacy (HBM-6) — fear without actionable path. All 6 constructs should be present for complete HBM compliance.',
  },

  TTM: {
    id: 'TTM',
    name: 'Transtheoretical Model (Stages of Change)',
    abbr: 'TTM',
    zone: 'behavior',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'TTM-STAGE', domain: 'Stage Targeting',         text: 'The document is clearly targeted to one or more specific stages of change (Pre-contemplation, Contemplation, Preparation, Action, Maintenance) — or explicitly addresses multiple stages.' },
      { id: 'TTM-PRE',   domain: 'Pre-contemplation',       text: 'The document raises awareness and consciousness about the health problem for those not yet considering change.' },
      { id: 'TTM-CONT',  domain: 'Contemplation',           text: 'The document helps the audience weigh pros and cons of changing (decisional balance).' },
      { id: 'TTM-PREP',  domain: 'Preparation',             text: 'The document provides a specific action plan and resources for those ready to act within 30 days.' },
      { id: 'TTM-ACT',   domain: 'Action',                  text: 'The document provides support and reinforcement for those who have recently made the change.' },
      { id: 'TTM-MAINT', domain: 'Maintenance',             text: 'The document provides long-term habit support or relapse prevention strategies.' },
      { id: 'TTM-SE',    domain: 'Self-Efficacy',           text: 'The document builds confidence in the ability to maintain the change in difficult situations.' },
    ],
    sources: [
      'Prochaska JO, DiClemente CC. (1983). Stages and processes of self-change of smoking: Toward an integrative model of change. Journal of Consulting and Clinical Psychology, 51(3), 390–395. https://doi.org/10.1037/0022-006X.51.3.390',
      'Prochaska JO, Velicer WF. (1997). The transtheoretical model of health behavior change. American Journal of Health Promotion, 12(1), 38–48. https://doi.org/10.4278/0890-1171-12.1.38',
    ],
    notes: 'TTM stage assessment requires knowing the audience\'s current stage — this may be NOT_ASSESSABLE from document content alone without that context. A document cannot meet criteria for all 5 stages simultaneously; the assessment should focus on which stage(s) it targets.',
  },

  EPPM: {
    id: 'EPPM',
    name: 'Extended Parallel Process Model',
    abbr: 'EPPM',
    zone: 'behavior',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'EPPM-1', domain: 'Perceived Susceptibility', text: 'The document communicates that the audience is personally at risk.' },
      { id: 'EPPM-2', domain: 'Perceived Severity',      text: 'The document communicates the seriousness of the threat.' },
      { id: 'EPPM-3', domain: 'Response Efficacy',       text: 'The document demonstrates that the recommended action actually works to reduce the threat.' },
      { id: 'EPPM-4', domain: 'Self-Efficacy',           text: 'The document builds confidence that the audience can perform the recommended action.' },
      { id: 'EPPM-BALANCE', domain: 'Threat-Efficacy Balance', text: 'Threat (EPPM-1 + EPPM-2) is balanced with efficacy (EPPM-3 + EPPM-4). High threat without high efficacy predicts fear control (avoidance/denial) rather than behavior change.' },
    ],
    sources: [
      'Witte K. (1992). Putting the fear back into fear appeals: The Extended Parallel Process Model. Communication Monographs, 59(4), 329–349. https://doi.org/10.1080/03637759209376276',
      'Witte K, Allen M. (2000). A meta-analysis of fear appeals: Implications for effective public health campaigns. Health Education & Behavior, 27(5), 591–615. https://doi.org/10.1177/109019810002700506',
    ],
    notes: 'Critical design rule: never raise perceived threat (EPPM-1, EPPM-2) without simultaneously and convincingly raising efficacy (EPPM-3, EPPM-4). Every fear appeal must pair the risk with what works and how to do it. EPPM-BALANCE requires evaluator judgment.',
  },

  WHO_RISK_COMMS: {
    id: 'WHO_RISK_COMMS',
    name: 'WHO Risk Communication Framework',
    abbr: 'WHO Risk Comms',
    zone: 'behavior',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'WHO-RC-1', domain: 'Trust',              text: 'The document uses credible, trusted sources or messengers; conflicts of interest are disclosed.' },
      { id: 'WHO-RC-2', domain: 'Transparency',       text: 'The document shares what is known AND what is unknown; uncertainty is acknowledged explicitly.' },
      { id: 'WHO-RC-3', domain: 'Transparency',       text: 'Errors or limitations are acknowledged rather than suppressed.' },
      { id: 'WHO-RC-4', domain: 'Respect for Public', text: 'Community concerns and questions are addressed; the audience is not talked down to.' },
      { id: 'WHO-RC-5', domain: 'Respect for Public', text: 'Rumors or common misconceptions are identified and addressed.' },
      { id: 'WHO-RC-6', domain: 'Actionability',      text: 'The document provides clear, actionable guidance alongside risk information.' },
    ],
    sources: [
      'World Health Organization. (2017). Communicating Risk in Public Health Emergencies: A WHO Guideline for Emergency Risk Communication (ERC) Policy and Practice. WHO. https://www.who.int/publications/i/item/9789241550208',
      'Covello VT, Peters RG, Wojtecki JG, Hyde RC. (2001). Risk communication, the West Nile Virus epidemic, and bioterrorism: Responding to the communication challenges posed by the intentional or unintentional release of a pathogen in an urban setting. Journal of Urban Health, 78(2), 382–391. https://doi.org/10.1093/jurban/78.2.382',
    ],
    notes: 'WHO Risk Communication Framework is designed for public health emergency communication. Apply to materials in crisis or outbreak contexts. Planning and coordination criteria (channel selection, spokesperson training) are typically NOT_ASSESSABLE from document content alone.',
  },

  // ── ZONE 4: OUTCOMES & EXPERIENCE ──────────────────────────────────

  PAM: {
    id: 'PAM',
    name: 'Patient Activation Measure',
    abbr: 'PAM',
    zone: 'outcomes',
    scoringType: 'scored',
    formula: 'PAM-13: 13 items scored via Item Response Theory → 0–100 scale (Insignia licensed algorithm)',
    passThreshold: {
      level1: '≤47.0 — Disengaged/Overwhelmed',
      level2: '47.1–55.1 — Aware but struggling',
      level3: '55.2–67.0 — Taking action',
      level4: '≥67.1 — Maintaining behaviors',
    },
    criteria: [
      // PAM criteria evaluable from materials design perspective
      { id: 'PAM-D1', domain: 'Role Understanding',  text: 'The material reinforces that the patient is the one responsible for managing their health.', notAssessableFromDoc: false },
      { id: 'PAM-D2', domain: 'Confidence',          text: 'The material builds patient confidence in their ability to manage their health condition.', notAssessableFromDoc: false },
      { id: 'PAM-D3', domain: 'Knowledge & Skills',  text: 'The material explains what the patient\'s medications or treatments do and why.', notAssessableFromDoc: false },
      { id: 'PAM-D4', domain: 'Self-Management',     text: 'The material provides strategies for maintaining healthy behaviors during difficult times.', notAssessableFromDoc: false },
      // PAM scoring itself requires patient survey
      { id: 'PAM-SCORE', domain: 'PAM Score (survey)', text: 'Patient\'s PAM activation level (Level 1–4). Requires PAM-13 or PAM-22 survey administered to the patient — cannot be assessed from document content.', notAssessableFromDoc: true },
    ],
    sources: [
      'Hibbard JH, Stockard J, Mahoney ER, Tusler M. (2004). Development of the Patient Activation Measure (PAM): Conceptualizing and measuring activation in patients and consumers. Health Services Research, 39(4 Pt 1), 1005–1026. https://doi.org/10.1111/j.1475-6773.2004.00269.x',
      'Hibbard JH, Mahoney ER, Stockard J, Tusler M. (2005). Development and testing of a short form of the patient activation measure. Health Services Research, 40(6 Pt 1), 1918–1930. https://doi.org/10.1111/j.1475-6773.2005.00438.x',
      'Greene J, Hibbard JH. (2012). Why does patient activation matter? An examination of the relationships between patient activation and health-related outcomes. Journal of General Internal Medicine, 27(5), 520–526. https://doi.org/10.1007/s11606-011-1931-2',
    ],
    notes: 'PAM is proprietary (Insignia Health) — commercial licensing is required for the scoring algorithm. The PAM score itself requires a patient survey and cannot be derived from document analysis. PAM-D1 through PAM-D4 assess how well the material supports activation from a design perspective.',
  },

  CAHPS: {
    id: 'CAHPS',
    name: 'Consumer Assessment of Healthcare Providers and Systems (CAHPS/HCAHPS)',
    abbr: 'CAHPS / HCAHPS',
    zone: 'outcomes',
    scoringType: 'scored',
    formula: 'Top-Box % = (# "Always" or "9–10" responses / total responses) × 100 (risk-adjusted)',
    passThreshold: null, // Benchmarked comparatively; no universal pass
    criteria: [
      // HCAHPS domains evaluable from written materials
      { id: 'CAHPS-1', domain: 'Communication about Medicines', text: 'The document explains new medications and their purpose in plain language.' },
      { id: 'CAHPS-2', domain: 'Communication about Medicines', text: 'Side effects or risks of medications are discussed.' },
      { id: 'CAHPS-3', domain: 'Discharge Information',         text: 'Written discharge instructions or aftercare information are provided.' },
      { id: 'CAHPS-4', domain: 'Discharge Information',         text: 'Symptoms to watch for after discharge are specified.' },
      { id: 'CAHPS-5', domain: 'Care Transitions',              text: 'The document addresses what the patient should do after the clinical encounter (follow-up, self-care).' },
      { id: 'CAHPS-6', domain: 'Care Transitions',              text: 'Questions the patient may have about post-discharge care are anticipated and answered.' },
      // Domains requiring survey data
      { id: 'CAHPS-NR1', domain: 'Nurse Communication (survey)',   text: 'Nurses listened, explained clearly, and treated patient with courtesy. Requires HCAHPS survey — not assessable from document.', notAssessableFromDoc: true },
      { id: 'CAHPS-NR2', domain: 'Doctor Communication (survey)',  text: 'Doctors listened, explained clearly, and treated patient with courtesy. Requires HCAHPS survey — not assessable from document.', notAssessableFromDoc: true },
      { id: 'CAHPS-NR3', domain: 'Overall Rating (survey)',        text: 'Patient 0–10 global hospital rating. Requires HCAHPS survey — not assessable from document.', notAssessableFromDoc: true },
    ],
    sources: [
      'Agency for Healthcare Research and Quality. CAHPS: Surveys and Tools to Advance Patient-Centered Care. https://www.ahrq.gov/cahps/index.html',
      'Centers for Medicare & Medicaid Services. HCAHPS: Patients\' Perspectives of Care Survey. https://www.cms.gov/medicare/quality/initiatives/hospital-quality-initiative/hcahps-patients-perspectives-care-survey',
      'Cleary PD, Edgman-Levitan S. (1997). Health care quality: Incorporating consumer perspectives. JAMA, 278(19), 1608–1612. https://doi.org/10.1001/jama.1997.03550190072047',
    ],
    notes: 'CAHPS is a family of surveys — HCAHPS (hospital), CG-CAHPS (clinician/group), and others. Survey domains requiring patient responses are marked NOT_ASSESSABLE from document content. CAHPS-1 through CAHPS-6 can be assessed from written discharge and medication materials.',
  },

  NPS: {
    id: 'NPS',
    name: 'Net Promoter Score',
    abbr: 'NPS',
    zone: 'outcomes',
    scoringType: 'scored',
    formula: 'NPS = % Promoters (9–10) − % Detractors (0–6)',
    passThreshold: {
      excellent:  '>70 — World-class',
      veryGood:   '50–70 — Very Good',
      average:    '0–49 — Average to Good',
      poor:       '<0 — Needs improvement',
      healthcareBenchmark: '20–50 (typical healthcare sector range)',
    },
    criteria: [
      // NPS score itself requires survey
      { id: 'NPS-SCORE', domain: 'NPS Survey Score', text: 'NPS is derived from a patient survey ("How likely are you to recommend us?") — cannot be assessed from document content alone.', notAssessableFromDoc: true },
      // Material design considerations that support NPS improvement
      { id: 'NPS-D1', domain: 'Promoter Drivers', text: 'The document or communication creates a memorable positive experience that a patient would want to share.' },
      { id: 'NPS-D2', domain: 'Detractor Mitigation', text: 'The document addresses common pain points or confusion that lead to patient dissatisfaction.' },
      { id: 'NPS-D3', domain: 'Follow-up Trigger',   text: 'The document includes a mechanism or invitation for patients to provide feedback.' },
    ],
    sources: [
      'Reichheld FF. (2003). The one number you need to grow. Harvard Business Review, 81(12), 46–54. https://hbr.org/2003/12/the-one-number-you-need-to-grow',
      'Reichheld FF, Markey R. (2011). The Ultimate Question 2.0: How Net Promoter Companies Thrive in a Customer-Driven World (rev. ed.). Harvard Business Review Press. ISBN 978-1-4221-7335-0.',
    ],
    notes: 'NPS is a directional indicator, not a diagnostic tool. A low NPS signals a problem but does not identify the cause. Pair with open-ended "Why?" questions. Healthcare sector NPS benchmarks (20–50) differ substantially from general consumer benchmarks — compare within sector.',
  },

  PICKER: {
    id: 'PICKER',
    name: 'Picker Institute — Principles of Patient-Centered Care',
    abbr: 'Picker Principles',
    zone: 'outcomes',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'PICKER-1', domain: 'Values & Preferences',          text: 'The document treats the patient as a person; their choices and dignity are honored.' },
      { id: 'PICKER-2', domain: 'Coordination & Integration',    text: 'The document addresses coordination of care across services; care transitions are acknowledged.' },
      { id: 'PICKER-3', domain: 'Information, Communication & Education', text: 'The document informs the patient about their condition and treatment; health literacy is supported.' },
      { id: 'PICKER-4', domain: 'Physical Comfort',              text: 'Physical comfort needs (pain management, environment) are addressed.' },
      { id: 'PICKER-5', domain: 'Emotional Support',             text: 'Emotional needs and fear/anxiety are acknowledged and addressed.' },
      { id: 'PICKER-6', domain: 'Family & Friends Involvement',  text: 'Family or caregiver involvement is acknowledged and supported as appropriate.' },
      { id: 'PICKER-7', domain: 'Continuity & Transition',       text: 'Discharge planning, follow-up, and community service coordination are addressed.' },
      { id: 'PICKER-8', domain: 'Access to Care',                text: 'Access to care (appointments, after-hours, language/geographic access) is addressed.' },
    ],
    sources: [
      'Gerteis M, Edgman-Levitan S, Daley J, Delbanco TL (Eds.). (1993). Through the Patient\'s Eyes: Understanding and Promoting Patient-Centered Care. Jossey-Bass. ISBN 978-1555425159.',
      'Picker Institute. About Picker. https://www.picker.org/',
      'Jenkinson C, Coulter A, Bruster S. (2002). The Picker Patient Experience Questionnaire: Development and validation using data from in-patient surveys in five countries. International Journal for Quality in Health Care, 14(5), 353–358. https://doi.org/10.1093/intqhc/14.5.353',
    ],
    notes: 'Picker Principles are an organizational and design standard. Separate Picker survey instruments measure how well each principle is being met by a care organization — those scores require patient surveys. The 8 principles can be assessed from written materials as design criteria.',
  },

  BERYL_PX: {
    id: 'BERYL_PX',
    name: 'The Beryl Institute Patient Experience Framework',
    abbr: 'Beryl PX',
    zone: 'outcomes',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      // Pillar criteria mostly NOT_ASSESSABLE from a single document — organizational framework
      { id: 'BERYL-1', domain: 'Culture & Leadership',       text: 'The document reflects organizational commitment to patient experience as a strategic priority.', notAssessableFromDoc: false },
      { id: 'BERYL-2', domain: 'Infrastructure & Governance', text: 'A patient feedback mechanism or patient advisory council role is referenced.', notAssessableFromDoc: false },
      { id: 'BERYL-3', domain: 'Evidence & Measurement',     text: 'The document references data-driven outcome tracking (CAHPS, NPS, or equivalent).', notAssessableFromDoc: false },
      { id: 'BERYL-4', domain: 'Practice & Innovation',      text: 'Service recovery processes or patient-centered care redesign efforts are reflected in the document.', notAssessableFromDoc: false },
    ],
    sources: [
      'The Beryl Institute. (2023). Defining Patient Experience. https://www.theberylinstitute.org/page/DefiningPatientExp',
      'Wolf JA, Niederhauser V, Marshburn D, LaVela SL. (2014). Defining patient experience. Patient Experience Journal, 1(1), 7–19. https://doi.org/10.35680/2372-0247.1004',
    ],
    notes: 'Beryl PX is an organizational framework — it governs org-level strategy and culture, not individual document quality. Most criteria are relevant for policy documents, strategic plans, or program materials rather than patient-facing educational content. Apply with this context in mind.',
  },

  EBCD: {
    id: 'EBCD',
    name: 'Experience-Based Co-Design',
    abbr: 'EBCD',
    zone: 'outcomes',
    scoringType: 'process-guide',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'EBCD-1', domain: 'Phase 1: Setup',            text: 'The scope of the co-design project is defined; patient and staff participants are identified.', notAssessableFromDoc: true },
      { id: 'EBCD-2', domain: 'Phase 2: Staff Experience', text: 'Staff experience has been observed and emotional touchpoints identified.', notAssessableFromDoc: true },
      { id: 'EBCD-3', domain: 'Phase 3: Patient Experience', text: 'Patient experience has been captured (interviews, filmed where possible) and emotional touchpoints mapped.', notAssessableFromDoc: true },
      { id: 'EBCD-4', domain: 'Phase 4: Share & Bring Together', text: 'Patient films or stories have been shared with staff; shared priority touchpoints have been identified.', notAssessableFromDoc: true },
      { id: 'EBCD-5', domain: 'Phase 5: Co-Design',        text: 'Mixed patient-staff co-design groups have worked on priority touchpoints and prototyped solutions.', notAssessableFromDoc: true },
      { id: 'EBCD-6', domain: 'Phase 6: Celebrate & Share', text: 'Changes implemented, impact evaluated, sustainability planned.', notAssessableFromDoc: true },
    ],
    sources: [
      'Bate P, Robert G. (2006). Experience-based design: From redesigning the system around the patient to co-designing services with the patient. Quality and Safety in Health Care, 15(5), 307–310. https://doi.org/10.1136/qshc.2005.016527',
      'Donetto S, Tsianakas V, Robert G. (2014). Using Experience-based Co-design (EBCD) to Improve the Quality of Healthcare: Mapping Where We Are Now and Establishing Future Directions. King\'s College London. https://www.kcl.ac.uk/nmpc/research/nnru/publications/reports/ebcd-where-are-we-now-report.pdf',
      'The Point of Care Foundation. EBCD: Experience-based Co-design. https://www.pointofcarefoundation.org.uk/our-programmes/ebcd/',
    ],
    notes: 'EBCD is a participatory design methodology requiring live patient and staff engagement across 6 phases. All criteria are NOT_ASSESSABLE from document content alone — EBCD produces qualitative outputs (implemented changes, patient/staff-reported improvement), not scores.',
  },

  SEIPS: {
    id: 'SEIPS',
    name: 'Systems Engineering Initiative for Patient Safety (SEIPS 2.0)',
    abbr: 'SEIPS',
    zone: 'outcomes',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'SEIPS-P',  domain: 'Work System — Person',           text: 'The document accounts for the people involved (patient, clinician, caregiver) and their characteristics.' },
      { id: 'SEIPS-T',  domain: 'Work System — Tasks',            text: 'The document identifies the specific tasks the patient or clinician must perform.' },
      { id: 'SEIPS-TT', domain: 'Work System — Tools & Technology', text: 'The document addresses the tools, devices, or technologies involved in performing the task.' },
      { id: 'SEIPS-O',  domain: 'Work System — Organization',     text: 'The document reflects organizational factors (policies, workflows, staffing) relevant to care delivery.' },
      { id: 'SEIPS-E',  domain: 'Work System — Environment',      text: 'The document accounts for the physical or social environment in which care occurs.' },
      { id: 'SEIPS-CP', domain: 'Processes — Clinical',           text: 'Clinical care processes are accurately and completely described.' },
      { id: 'SEIPS-CO', domain: 'Processes — Collaborative',      text: 'Team or interprofessional collaboration processes are acknowledged where relevant.' },
      { id: 'SEIPS-PP', domain: 'Processes — Patient',            text: 'Patient self-care and self-management processes are supported.' },
      { id: 'SEIPS-OUT', domain: 'Outcomes',                      text: 'The document connects process changes to expected patient safety or quality-of-life outcomes.' },
    ],
    sources: [
      'Carayon P, Schoofs Hundt A, Karsh BT, et al. (2006). Work system design for patient safety: The SEIPS model. Quality and Safety in Health Care, 15(Suppl 1), i50–i58. https://doi.org/10.1136/qshc.2005.015842',
      'Holden RJ, Carayon P, Gurses AP, et al. (2013). SEIPS 2.0: A human factors framework for studying and improving the work of healthcare professionals and patients. Ergonomics, 56(11), 1669–1686. https://doi.org/10.1080/00140139.2013.838643',
    ],
    notes: 'SEIPS is a systems analysis model for clinical workflow design. Use for evaluating clinical process documentation, care pathway materials, or patient safety tools. SEIPS assessment produces work system analyses and redesign recommendations, not numerical scores.',
  },

  PLANETREE: {
    id: 'PLANETREE',
    name: 'Planetree Model of Person-Centered Care',
    abbr: 'Planetree',
    zone: 'outcomes',
    scoringType: 'checklist',
    formula: null,
    passThreshold: null,
    criteria: [
      { id: 'PT-1',  domain: 'Human Interactions',               text: 'The document reflects compassion, emotional connection, and respect for human dignity.' },
      { id: 'PT-2',  domain: 'Patient & Family Education',       text: 'Patient education and access to health information is supported; health literacy is addressed.' },
      { id: 'PT-3',  domain: 'Nutritional & Nurturing Care',     text: 'Nutritional needs or the healing role of food/nourishment is acknowledged where relevant.' },
      { id: 'PT-4',  domain: 'Spirituality & Diversity',         text: 'Spiritual, cultural, or diversity needs of the patient population are acknowledged.' },
      { id: 'PT-5',  domain: 'Human Touch',                      text: 'Comfort care, therapeutic touch, or physical comfort is addressed where relevant.' },
      { id: 'PT-6',  domain: 'Arts & Entertainment',             text: 'Healing environment, arts, or distraction as part of care experience is referenced where applicable.' },
      { id: 'PT-7',  domain: 'Integrative Therapies',            text: 'Complementary or integrative care options are referenced where clinically appropriate.' },
      { id: 'PT-8',  domain: 'Healthy Communities',              text: 'Community health, prevention, or social determinants of health are addressed.' },
      { id: 'PT-9',  domain: 'Healing Environment',              text: 'The physical environment, wayfinding, or environmental design is addressed.' },
      { id: 'PT-10', domain: 'Staff Care',                       text: 'Staff wellbeing and organizational support for caregivers is reflected in organizational documents.' },
    ],
    sources: [
      'Planetree International. The Planetree Model. https://planetree.org/planetree-model/',
      'Frampton SB, Gilpin L, Charmel PA (Eds.). (2003). Putting Patients First: Designing and Practicing Patient-Centered Care. Jossey-Bass. ISBN 978-0787964542.',
      'Stone S. (2008). A retrospective evaluation of the impact of the Planetree patient-centered model of care on inpatient quality outcomes. HERD: Health Environments Research & Design Journal, 1(4), 55–69. https://doi.org/10.1177/193758670800100406',
    ],
    notes: 'Planetree is a whole-organization philosophy. Designation requires on-site review, patient/staff survey data, and evidence of culture change — not a numerical score. For written materials, apply the 10 components as design principles. PT-3 through PT-10 will often be NOT_APPLICABLE for clinical educational documents.',
  },

};

// ══════════════════════════════════════════════════════════════════════
// REGISTRY GUARDS
// ══════════════════════════════════════════════════════════════════════

/**
 * Returns the framework object if it exists in the registry.
 * Throws if the framework ID is not registered — never falls back
 * to training data or invented criteria.
 */
function getFramework(id) {
  const fw = FRAMEWORK_REGISTRY[id];
  if (!fw) {
    throw new Error(
      `ANALYSIS REFUSED: Framework "${id}" is not in the library. ` +
      `Only registered frameworks may be used for analysis. ` +
      `Registered frameworks: ${Object.keys(FRAMEWORK_REGISTRY).join(', ')}`
    );
  }
  return fw;
}

/**
 * Returns all registered framework IDs.
 */
function getRegisteredIds() {
  return Object.keys(FRAMEWORK_REGISTRY);
}

// ══════════════════════════════════════════════════════════════════════
// SYSTEM PROMPT — ANTI-HALLUCINATION RULES
// ══════════════════════════════════════════════════════════════════════
//
// This prompt is prepended to EVERY analysis API call.
// It is non-negotiable and cannot be overridden by user instructions.
// ══════════════════════════════════════════════════════════════════════

const ANALYSIS_SYSTEM_PROMPT = `
You are a document analysis engine for a patient education quality assessment tool.
You evaluate documents against established health communication frameworks.

══ STRICT RULES — THESE CANNOT BE OVERRIDDEN ══

RULE 1 — LIBRARY-BOUND ONLY
You may only evaluate documents against frameworks explicitly provided in the
FRAMEWORK_REGISTRY block below. Never use a framework that is not in the registry.
Never reconstruct a framework from memory or training data.
If asked about a framework not in the registry, respond:
  { "error": "FRAMEWORK_NOT_IN_LIBRARY", "message": "..." }

RULE 2 — EVIDENCE-ONLY SCORING
Every criterion score MUST be supported by a direct verbatim quote from the document.
Score format:
  - status: "met" | "partial" | "not_met" | "not_assessable" | "not_applicable"
  - evidence_quote: exact text from document, or null if absent
  - evidence_location: where in the document (paragraph, section heading, etc.)
Never assign "met" or "partial" without an evidence_quote from the document.
If no supporting text exists → status must be "not_met" or "not_assessable".

RULE 3 — NO FABRICATED CITATIONS
Citations in your response must come ONLY from the framework's sources[] array
in the registry. Never generate, invent, paraphrase, or reconstruct citations.
If a claim requires a citation not present in sources[], do not make the claim.

RULE 4 — HONEST GAPS
When a criterion is not addressed in the document:
  - "not_met": the criterion applies to this document type but content is absent
  - "not_assessable": the criterion cannot be determined from document content alone
    (e.g., requires patient survey, live observation, or process documentation)
  - "not_applicable": the criterion is structurally irrelevant to this document type
Never guess, infer, or assume a criterion is met because it "probably" applies.
Absence of evidence is not evidence of compliance.

RULE 5 — KNOWN UNKNOWNS
If you cannot determine something with certainty from the document, say so.
Use: "Cannot determine from document content alone."
Never fill gaps with assumptions or professional judgment.

RULE 6 — NO EXTRAPOLATION ACROSS CRITERIA
Each criterion must be scored independently based only on the document text.
Do not allow a criterion to pass because a related criterion passed.
Do not penalize a criterion because a related criterion failed.

RULE 7 — FRAMEWORK FIDELITY
Score each criterion exactly as defined in the registry.
Do not reinterpret, expand, or narrow a criterion's scope.
Do not blend criteria from different frameworks.
Do not invent sub-criteria not in the registry.

══ OUTPUT FORMAT (JSON) ══

{
  "framework_id": "<id from registry>",
  "framework_name": "<full name from registry>",
  "is_registered": true,
  "analysis_timestamp": "<ISO 8601>",
  "document_summary": "<1–2 sentence description of what the document appears to be>",
  "overall_status": "met" | "partial" | "not_met" | "not_assessable",
  "scores": {
    "met": <count>,
    "partial": <count>,
    "not_met": <count>,
    "not_assessable": <count>,
    "not_applicable": <count>
  },
  "criteria_results": [
    {
      "criterion_id": "<id>",
      "criterion_text": "<exact text from registry>",
      "domain": "<domain from registry>",
      "status": "<SCORE_STATUS value>",
      "evidence_quote": "<verbatim text from document | null>",
      "evidence_location": "<e.g. 'Section 2, paragraph 3' | null>",
      "notes": "<brief assessor note if needed | null>"
    }
  ],
  "strengths": ["<specific thing the document does well, with evidence>"],
  "gaps": ["<specific unmet criterion with its ID>"],
  "not_assessable_reason": "<if overall not_assessable, explain why>",
  "framework_sources": ["<only sources from registry sources[] array>"]
}

If the document cannot be analyzed against a framework (e.g., framework requires
live observation and this is a written document), set overall_status to
"not_assessable" and explain in not_assessable_reason.
`.trim();

// ══════════════════════════════════════════════════════════════════════
// PROMPT BUILDER
// ══════════════════════════════════════════════════════════════════════

/**
 * Builds the complete prompt for a single framework analysis.
 *
 * @param {string} documentText   - Full text of the document to analyze
 * @param {string} frameworkId    - Must be a key in FRAMEWORK_REGISTRY
 * @returns {{ system: string, user: string }}
 */
function buildAnalysisPrompt(documentText, frameworkId) {
  const fw = getFramework(frameworkId); // Throws if not registered

  const criteriaBlock = fw.criteria.map(c =>
    `  [${c.id}] (${c.domain}) ${c.text}${c.notAssessableFromDoc ? ' ⚠ REQUIRES DATA BEYOND DOCUMENT — mark not_assessable' : ''}`
  ).join('\n');

  const sourcesBlock = fw.sources.map((s, i) => `  [${i + 1}] ${s}`).join('\n');

  const userPrompt = `
FRAMEWORK TO APPLY
──────────────────
ID:           ${fw.id}
Name:         ${fw.name}
Zone:         ${fw.zone}
Scoring:      ${fw.scoringType}
Formula:      ${fw.formula || 'Not scored numerically'}
Pass threshold: ${fw.passThreshold ? JSON.stringify(fw.passThreshold) : 'None (qualitative / comparative)'}
Notes:        ${fw.notes || 'None'}

CRITERIA (from registry — evaluate each independently)
───────────────────────────────────────────────────────
${criteriaBlock}

AUTHORIZED SOURCES (cite only these — no others)
─────────────────────────────────────────────────
${sourcesBlock}

DOCUMENT TO ANALYZE
───────────────────
${documentText}

Evaluate the document against every criterion above.
For each criterion: find direct evidence in the document, quote it verbatim,
and assign a status. If no evidence exists, mark not_met or not_assessable.
Return valid JSON matching the output format in your system instructions.
`.trim();

  return {
    system: ANALYSIS_SYSTEM_PROMPT,
    user: userPrompt,
  };
}

/**
 * Builds prompts for multiple frameworks simultaneously.
 * Returns one prompt object per framework.
 *
 * @param {string}   documentText  - Full text of the document
 * @param {string[]} frameworkIds  - Array of framework IDs (all must be registered)
 * @returns {Array<{ frameworkId: string, system: string, user: string }>}
 */
function buildMultiFrameworkPrompts(documentText, frameworkIds) {
  // Validate all IDs first — fail fast before any API calls
  frameworkIds.forEach(id => getFramework(id));

  return frameworkIds.map(id => ({
    frameworkId: id,
    ...buildAnalysisPrompt(documentText, id),
  }));
}

// ══════════════════════════════════════════════════════════════════════
// RESPONSE VALIDATOR
// ══════════════════════════════════════════════════════════════════════

/**
 * Validates a parsed analysis response against the registry.
 * Catches cases where the LLM may have hallucinated criteria or sources.
 *
 * @param {Object} response     - Parsed JSON response from the LLM
 * @param {string} frameworkId  - Expected framework ID
 * @returns {{ valid: boolean, violations: string[] }}
 */
function validateAnalysisResponse(response, frameworkId) {
  const violations = [];
  const fw = getFramework(frameworkId);
  const registeredCriterionIds = new Set(fw.criteria.map(c => c.id));
  const registeredSources      = new Set(fw.sources);

  // 1. Framework ID must match
  if (response.framework_id !== frameworkId) {
    violations.push(`framework_id mismatch: expected "${frameworkId}", got "${response.framework_id}"`);
  }

  // 2. Every criterion result must reference a registered criterion ID
  if (Array.isArray(response.criteria_results)) {
    response.criteria_results.forEach(result => {
      if (!registeredCriterionIds.has(result.criterion_id)) {
        violations.push(`Hallucinated criterion: "${result.criterion_id}" is not in the registry for ${frameworkId}`);
      }
    });
  }

  // 3. "met" or "partial" results must have an evidence_quote
  if (Array.isArray(response.criteria_results)) {
    response.criteria_results.forEach(result => {
      if ((result.status === SCORE_STATUS.MET || result.status === SCORE_STATUS.PARTIAL)
          && !result.evidence_quote) {
        violations.push(`Criterion ${result.criterion_id} scored "${result.status}" but has no evidence_quote — violates RULE 2`);
      }
    });
  }

  // 4. All sources cited must exist in the registry
  if (Array.isArray(response.framework_sources)) {
    response.framework_sources.forEach(src => {
      if (!registeredSources.has(src)) {
        violations.push(`Fabricated or unlisted source cited: "${src.substring(0, 80)}..."`);
      }
    });
  }

  // 5. is_registered must be true
  if (response.is_registered !== true) {
    violations.push('is_registered must be true for any analysis result');
  }

  return {
    valid: violations.length === 0,
    violations,
  };
}

// ══════════════════════════════════════════════════════════════════════
// EXPORTS (for use in index.html via <script type="module"> or inline)
// ══════════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  // Node.js / CommonJS
  module.exports = {
    SCORE_STATUS,
    FRAMEWORK_REGISTRY,
    ANALYSIS_SYSTEM_PROMPT,
    getFramework,
    getRegisteredIds,
    buildAnalysisPrompt,
    buildMultiFrameworkPrompts,
    validateAnalysisResponse,
  };
} else {
  // Browser global
  window.AnalysisEngine = {
    SCORE_STATUS,
    FRAMEWORK_REGISTRY,
    ANALYSIS_SYSTEM_PROMPT,
    getFramework,
    getRegisteredIds,
    buildAnalysisPrompt,
    buildMultiFrameworkPrompts,
    validateAnalysisResponse,
  };
}
