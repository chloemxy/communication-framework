// The frameworks this tool uses — one list for the studio and the Framework Compass, so the
// two can't drift apart. Item wording, scoring rules and full references live in
// analysis-engine.js (FRAMEWORK_REGISTRY, by `id`); this list adds what the pages show.
//
// source: the framework's own primary reference (the publisher's page or document, or the
// original paper when there is no official site). Links checked 2026-10-16.
// output: 'score' = the instrument produces a score · 'partial' = partly scored · 'checklist' = no score
// modes and decision: from the Framework Compass library review (v2). Which canvas offers it:
//   'both' = Plan from an idea and Evaluate a draft · 'evaluate' = Evaluate a draft only ·
//   'plan' = Plan from an idea only · 'plan-scope' = Plan only, when the work covers care
//   pathways, programs or services (an open scope question; shown in Plan for now)
(function (root) {
  const FRAMEWORKS = [
    // ── Clarity & content ──
    { key: 'cci',         id: 'CCI',            zone: 'clarity',  label: 'CCI',                 name: 'Centers for Disease Control and Prevention Clear Communication Index',
      desc: 'CDC’s 20-item check for clear public health materials.', modes: 'both', decision: 'Keep', output: 'score',
      source: { label: 'CDC Clear Communication Index', url: 'https://www.cdc.gov/ccindex/' } },
    { key: 'pemat',       id: 'PEMAT',          zone: 'clarity',  label: 'PEMAT-P',             name: 'Patient Education Materials Assessment Tool, printable',
      desc: 'AHRQ: can readers understand it and act on it? For print and printable digital: PDFs and web page text.', modes: 'both', decision: 'Keep', output: 'score',
      source: { label: 'AHRQ PEMAT-P', url: 'https://www.ahrq.gov/health-literacy/patient-education/pemat-p.html' } },
    { key: 'pematav',     id: 'PEMAT_AV',       zone: 'clarity',  label: 'PEMAT-A/V',           name: 'PEMAT for audiovisual materials',
      desc: 'The same AHRQ check for video, animation and multimedia, including interactive content.', modes: 'both', decision: 'Keep (scripts and storyboards for video or animation)', output: 'score',
      source: { label: 'AHRQ PEMAT-A/V', url: 'https://www.ahrq.gov/health-literacy/patient-education/pemat-av.html' } },
    { key: 'cdcidd',      id: 'CDC_IDD',        zone: 'clarity',  label: 'CDC IDD/ELL',         name: 'Centers for Disease Control and Prevention tool for adults with intellectual disability or extreme low literacy',
      desc: 'CDC’s 27-item score sheet for readers with IDD or very low literacy.', modes: 'both', decision: 'Keep (conditional)', output: 'score',
      source: { label: 'CDC Stacks (PDF)', url: 'https://stacks.cdc.gov/view/cdc/129950' } },
    { key: 'sam',         id: 'SAM',            zone: 'clarity',  label: 'SAM',                 name: 'Suitability Assessment of Materials',
      desc: 'How well a print piece suits readers with low literacy.', modes: 'both', decision: 'Keep', output: 'score',
      source: { label: 'Doak, Doak & Root (1996), via KP Washington Research', url: 'https://prism.kpwashingtonresearch.org/background_to_plain_language/popup_Suitability_Assessment_of_Materials.html' } },
    { key: 'discern',     id: 'DISCERN',        zone: 'clarity',  label: 'DISCERN',             name: 'DISCERN',
      desc: 'Quality of written information about treatment choices.', modes: 'evaluate', decision: 'Keep (conditional)', output: 'score',
      source: { label: 'University of Oxford', url: 'https://www.ndph.ox.ac.uk/research/research-groups/applied-health-research-unit-ahru/discern' } },
    { key: 'readability', id: 'READABILITY',    zone: 'clarity',  label: 'Readability',         name: 'Flesch Reading Ease and Flesch-Kincaid Grade',
      desc: 'Reading grade and ease from word and sentence length.', modes: 'evaluate', decision: 'Keep', output: 'score',
      source: { label: 'Flesch (1948)', url: 'https://doi.org/10.1037/h0057532' } },
    { key: 'cdceq',       id: 'CDC_EQUITY',     zone: 'clarity',  label: 'CDC Inclusive Comms', name: 'Centers for Disease Control and Prevention Health Equity Guiding Principles for Inclusive Communication',
      desc: 'CDC’s principles and preferred terms for respectful, inclusive language.', modes: 'both', decision: 'Keep', output: 'checklist',
      source: { label: 'Calanan et al., Preventing Chronic Disease (2023)', url: 'https://www.cdc.gov/pcd/issues/2023/23_0061.htm' } },
    { key: 'upl',         id: 'UPL',            zone: 'clarity',  label: 'UPL',                 name: 'Universal Patient Language Best Practices',
      desc: 'Bristol Myers Squibb’s 9 best practices for patient communication, developed with Bridgeable.', modes: 'both', decision: 'Keep', output: 'checklist',
      source: { label: 'UPL Guidance Document (PDF)', url: 'https://www.upl.org/assets/buildeasy/us-corp/be-upl/en/resources/UPL%20Guidance%20Document.pdf' } },

    // ── Decisions & conversations ──
    { key: 'ipdas',       id: 'IPDAS',          zone: 'process',  label: 'IPDAS',               name: 'International Patient Decision Aid Standards',
      desc: 'Quality standards for patient decision aids.', modes: 'both', decision: 'Keep (conditional)', output: 'partial',
      source: { label: 'Ottawa Hospital Research Institute', url: 'https://decisionaid.ohri.ca/ipdas.html' } },

    // ── Behaviour change ──
    { key: 'hbm',         id: 'HBM',            zone: 'behavior', label: 'HBM',                 name: 'Health Belief Model',
      desc: 'The beliefs that shape whether people act on health advice.', modes: 'plan', decision: 'Bring back', output: 'checklist',
      source: { label: 'Rosenstock (1974)', url: 'https://doi.org/10.1177/109019817400200403' } },
    { key: 'ttm',         id: 'TTM',            zone: 'behavior', label: 'TTM',                 name: 'Transtheoretical Model (Stages of Change)',
      desc: 'Matching messages to how ready people are to change.', modes: 'plan', decision: 'Bring back', output: 'checklist',
      source: { label: 'Prochaska & Velicer (1997)', url: 'https://doi.org/10.4278/0890-1171-12.1.38' } },
    { key: 'eppm',        id: 'EPPM',           zone: 'behavior', label: 'EPPM',                name: 'Extended Parallel Process Model',
      desc: 'Pairing any risk message with a clear, doable action.', modes: 'both', decision: 'Keep', output: 'checklist',
      source: { label: 'Witte (1992)', url: 'https://doi.org/10.1080/03637759209376276' } },
    { key: 'whorisks',    id: 'WHO_RISK_COMMS', zone: 'behavior', label: 'WHO ERC',             name: 'WHO Emergency Risk Communication guideline',
      desc: 'WHO guidance for communicating risk in health emergencies.', modes: 'plan', decision: 'Keep (practitioners might write crisis materials)', output: 'checklist',
      source: { label: 'World Health Organization (2017)', url: 'https://www.who.int/publications/i/item/9789241550208' } },

    // ── Experience & partnership ──
  ];

  // Not in the library right now: cut by the library review (v2, Cut tab), or hidden after its
  // open questions were answered (2026-10-27: materials only, not care pathways or
  // services; lenses that can't check a document hidden). Not offered in the studio; the
  // Compass lists them with the reason and when to revisit.
  const CUT = [
    { key: 'share',       id: 'SHARE',          zone: 'process',  label: 'SHARE',               name: 'The SHARE Approach',
      desc: 'AHRQ’s five steps for shared decision making.', output: 'checklist',
      source: { label: 'AHRQ', url: 'https://www.ahrq.gov/sdm/share-approach/index.html' },
      cut: { why: 'Hidden for now: structures a clinical conversation, and the tool checks materials only.', revisit: 'the tool covers care conversations or pathways.' } },
    { key: 'ahrq',        id: 'AHRQ_TOOLKIT',   zone: 'process',  label: 'AHRQ Toolkit',        name: 'AHRQ Health Literacy Universal Precautions Toolkit',
      desc: 'AHRQ’s tools to make care easier for every patient to understand and act on.', output: 'checklist',
      source: { label: 'AHRQ', url: 'https://www.ahrq.gov/health-literacy/improve/precautions/index.html' },
      cut: { why: 'Hidden for now: organisational practice change, and the tool checks materials only.', revisit: 'the tool covers programs or services.' } },
    { key: 'picker',      id: 'PICKER',         zone: 'outcomes', label: 'Picker',              name: 'Picker Principles of Person Centred Care',
      desc: 'Eight principles of person-centred care.', output: 'checklist',
      source: { label: 'Picker', url: 'https://www.picker.org/about-picker/the-picker-principles-person-centred-care' },
      cut: { why: 'Hidden for now: principles for care pathways and services, and the tool checks materials only.', revisit: 'the tool covers care pathways or services.' } },
    { key: 'comb',        id: 'COM_B',          zone: 'behavior', label: 'COM-B',               name: 'Capability, Opportunity, Motivation – Behaviour model',
      desc: 'Capability, opportunity and motivation behind a behaviour.', output: 'checklist',
      source: { label: 'Michie, van Stralen & West (2011)', url: 'https://doi.org/10.1186/1748-5908-6-42' },
      cut: { why: 'Hidden for now: a behaviour model, not a check on a document.', revisit: 'Plan from an idea guides behaviour design beyond the material.' } },
    { key: 'ottawa',      id: 'OTTAWA_DMSF',    zone: 'process',  label: 'Ottawa DSF',          name: 'Ottawa Decision Support Framework',
      desc: 'A framework for helping people with hard health decisions.', output: 'partial',
      source: { label: 'Ottawa Hospital Research Institute', url: 'https://decisionaid.ohri.ca/odsf.html' },
      cut: { why: 'Hidden for now: underpins decision aids rather than checking one (IPDAS stays).', revisit: 'the tool plans decision aids from scratch.' } },
    { key: 'teachback',   id: 'TEACH_BACK',     zone: 'process',  label: 'Teach-Back',          name: 'Teach-Back Method',
      desc: 'Patients explain back what they heard; materials can support it.', output: 'checklist',
      source: { label: 'AHRQ Toolkit, Tool 5', url: 'https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html' },
      cut: { why: 'Hidden for now: a conversation technique, not a rubric for a document.', revisit: 'the tool covers clinical conversations.' } },
    { key: 'eqip',        id: 'EQIP',           zone: 'clarity',  label: 'EQIP',                name: 'Ensuring Quality Information for Patients',
      desc: 'A checklist for the quality of patient leaflets.', output: 'score',
      source: { label: 'Moult, Franck & Brady (2004)', url: 'https://doi.org/10.1111/j.1369-7625.2004.00273.x' },
      cut: { why: 'Evaluates resources, but overlaps heavily with PEMAT and SAM.', revisit: 'practitioners ask for a leaflet-specific scored check.' } },
    { key: 'plainlang',   id: 'PLAIN_LANGUAGE', zone: 'clarity',  label: 'Plain Language',      name: 'Federal Plain Language Guidelines',
      desc: 'The U.S. government’s guide to plain writing.', output: 'checklist',
      source: { label: 'Digital.gov plain language guide', url: 'https://digital.gov/guides/plain-language' },
      cut: { why: 'Largely covered by Readability and CCI. Its rules still drive the Plain language card in the studio.', revisit: '—' } },
    { key: 'pcori',       id: 'PCORI_FE',       zone: 'outcomes', label: 'PCORI',               name: 'PCORI Foundational Expectations for Partnerships in Research',
      desc: 'Six expectations for partnering with patients in research.', output: 'checklist',
      source: { label: 'PCORI (PDF)', url: 'https://www.pcori.org/sites/default/files/PCORI-Foundational-Expectations-for-Partnerships-In-Research.pdf' },
      cut: { why: 'About partnering with patients in research. Overlaps with EBCD, which is closer to patient experience work.', revisit: 'the tool covers research projects.' } },
  ];

  const ZONES = [
    { key: 'clarity',  name: 'Clarity & content' },
    { key: 'process',  name: 'Decisions & conversations' },
    { key: 'behavior', name: 'Behaviour change' },
    { key: 'outcomes', name: 'Experience & partnership' },
  ];
  const OUTPUT_LABEL = { score: 'Score', partial: 'Partial score', checklist: 'Checklist' };
  const MODE_LABEL = { both: 'Plan and evaluate', evaluate: 'Evaluate only', plan: 'Plan only', 'plan-scope': 'Plan only, if scope fits' };
  // Which canvas each mode appears in ('plan' = Plan from an idea, 'evaluate' = Evaluate a draft)
  const MODE_CANVAS = { both: ['plan', 'evaluate'], evaluate: ['evaluate'], plan: ['plan'], 'plan-scope': ['plan'] };

  // Use cases. `tag` is the short label shown on each framework; `brief` says which Brief
  // choices make it a match (format / audience values from the studio's Brief).
  const SITUATIONS = [
    // The guides behind the Plain language card's checks (refs). Not frameworks, so no fws: the
    // studio shows them inside its "Plain language" row (on by default), not as a use-case group.
    { key: 'plain',     tag: 'Plain language', name: 'Plain language', desc: 'The guides behind the Plain language card.',
      fws: [],
      refs: [
        { label: 'CDC Everyday Words', url: 'https://www.cdc.gov/ccindex/everydaywords/index.html', note: 'everyday swaps for public health terms' },
        { label: 'Federal Plain Language Guidelines', url: 'https://digital.gov/guides/plain-language', note: 'short sentences, simple words, few abbreviations' },
        { label: 'Gigerenzer & Hoffrage (1995)', url: 'https://doi.org/10.1037/0033-295X.102.4.684', note: '“1 in N” instead of percentages' },
      ] },
    { key: 'common',    tag: 'Common',       name: 'Used often in our work', desc: 'The framework our partners use most.',
      fws: ['upl'] },
    { key: 'print',     tag: 'Print & web',  name: 'Handout, poster or web page', desc: 'Clarity, understanding and reading level, in print or on screen.',
      fws: ['cci', 'pemat', 'readability', 'upl'], brief: { format: ['handout', 'poster', 'brochure', 'manual', 'digital'] } },
    { key: 'video',     tag: 'Video',        name: 'Video or animation', desc: 'The audiovisual PEMAT plus plain words.',
      fws: ['pematav', 'readability', 'upl'], brief: { format: ['video'] } },
    { key: 'literacy',  tag: 'Low literacy', name: 'Low literacy or IDD', desc: 'For readers who find reading hard.',
      fws: ['cdcidd', 'sam', 'readability'], brief: { audience: ['lowlit', 'idd'] } },
    { key: 'decision',  tag: 'Decision aid', name: 'Decision aid', desc: 'Helping people weigh treatment options.',
      fws: ['ipdas', 'discern'] },
    { key: 'behaviour', tag: 'Behaviour',    name: 'Changing a behaviour', desc: 'Messages that ask people to act.',
      fws: ['hbm', 'eppm', 'ttm'] },
    { key: 'inclusive', tag: 'Inclusive',    name: 'Inclusive, person-centred', desc: 'Respectful wording and care that puts the person first.',
      fws: ['cdceq', 'upl'] },
    { key: 'emergency', tag: 'Emergency',    name: 'Health emergency', desc: 'Outbreaks and urgent public messages.',
      fws: ['whorisks', 'cci'] },
  ];

  // "Recommended" sort order: the one our partners use most, then the checks that fit most
  // patient materials, then specialist ones. A recommendation, not a usage statistic.
  const RECOMMENDED = ['upl', 'cci', 'pemat', 'readability', 'pematav', 'cdcidd', 'sam', 'cdceq', 'discern', 'ipdas', 'hbm', 'eppm', 'ttm', 'whorisks'];

  root.PEA_FRAMEWORKS = { FRAMEWORKS, CUT, ZONES, OUTPUT_LABEL, MODE_LABEL, MODE_CANVAS, SITUATIONS, RECOMMENDED };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.PEA_FRAMEWORKS;
})(typeof window !== 'undefined' ? window : globalThis);
