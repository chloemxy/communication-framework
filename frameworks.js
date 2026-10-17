// The frameworks this tool uses — one list for the studio and the Framework Compass, so the
// two can't drift apart. Item wording, scoring rules and full references live in
// analysis-engine.js (FRAMEWORK_REGISTRY, by `id`); this list adds what the pages show.
//
// source: the framework's own primary reference (the publisher's page or document, or the
// original paper when there is no official site). Links checked 2026-10-16.
// output: 'score' = the instrument produces a score · 'partial' = partly scored · 'checklist' = no score
(function (root) {
  const FRAMEWORKS = [
    // ── Clarity & content ──
    { key: 'cci',         id: 'CCI',            zone: 'clarity',  label: 'CCI',                 name: 'CDC Clear Communication Index',
      desc: 'CDC’s 20-item check for clear public health materials.', output: 'score',
      source: { label: 'CDC Clear Communication Index', url: 'https://www.cdc.gov/ccindex/' } },
    { key: 'pemat',       id: 'PEMAT',          zone: 'clarity',  label: 'PEMAT',               name: 'Patient Education Materials Assessment Tool — print (PEMAT-P)',
      desc: 'AHRQ: can readers understand it and act on it? For print.', output: 'score',
      source: { label: 'AHRQ PEMAT-P', url: 'https://www.ahrq.gov/health-literacy/patient-education/pemat-p.html' } },
    { key: 'pematav',     id: 'PEMAT_AV',       zone: 'clarity',  label: 'PEMAT-A/V',           name: 'PEMAT for audiovisual materials',
      desc: 'The same AHRQ check for video and animation.', output: 'score',
      source: { label: 'AHRQ PEMAT-A/V', url: 'https://www.ahrq.gov/health-literacy/patient-education/pemat-av.html' } },
    { key: 'cdcidd',      id: 'CDC_IDD',        zone: 'clarity',  label: 'CDC IDD/ELL',         name: 'CDC tool for adults with intellectual disability or extreme low literacy',
      desc: 'CDC’s 27-item score sheet for readers with IDD or very low literacy.', output: 'score',
      source: { label: 'CDC Stacks (PDF)', url: 'https://stacks.cdc.gov/view/cdc/129950' } },
    { key: 'sam',         id: 'SAM',            zone: 'clarity',  label: 'SAM',                 name: 'Suitability Assessment of Materials',
      desc: 'How well a print piece suits readers with low literacy.', output: 'score',
      source: { label: 'Doak, Doak & Root (1996), via KP Washington Research', url: 'https://prism.kpwashingtonresearch.org/background_to_plain_language/popup_Suitability_Assessment_of_Materials.html' } },
    { key: 'discern',     id: 'DISCERN',        zone: 'clarity',  label: 'DISCERN',             name: 'DISCERN',
      desc: 'Quality of written information about treatment choices.', output: 'score',
      source: { label: 'University of Oxford', url: 'https://www.ndph.ox.ac.uk/research/research-groups/applied-health-research-unit-ahru/discern' } },
    { key: 'eqip',        id: 'EQIP',           zone: 'clarity',  label: 'EQIP',                name: 'Ensuring Quality Information for Patients',
      desc: 'A checklist for the quality of patient leaflets.', output: 'score',
      source: { label: 'Moult, Franck & Brady (2004)', url: 'https://doi.org/10.1111/j.1369-7625.2004.00273.x' } },
    { key: 'readability', id: 'READABILITY',    zone: 'clarity',  label: 'Readability',         name: 'Flesch Reading Ease and Flesch-Kincaid Grade',
      desc: 'Reading grade and ease from word and sentence length.', output: 'score',
      source: { label: 'Flesch (1948)', url: 'https://doi.org/10.1037/h0057532' } },
    { key: 'plainlang',   id: 'PLAIN_LANGUAGE', zone: 'clarity',  label: 'Plain Language',      name: 'Federal Plain Language Guidelines',
      desc: 'The U.S. government’s guide to plain writing.', output: 'checklist',
      source: { label: 'Digital.gov plain language guide', url: 'https://digital.gov/guides/plain-language' } },
    { key: 'cdceq',       id: 'CDC_EQUITY',     zone: 'clarity',  label: 'CDC Inclusive Comms', name: 'CDC Health Equity Guiding Principles for Inclusive Communication',
      desc: 'CDC’s principles and preferred terms for respectful, inclusive language.', output: 'checklist',
      source: { label: 'Calanan et al., Preventing Chronic Disease (2023)', url: 'https://www.cdc.gov/pcd/issues/2023/23_0061.htm' } },
    { key: 'upl',         id: 'UPL',            zone: 'clarity',  label: 'UPL',                 name: 'Universal Patient Language Best Practices',
      desc: 'Bristol Myers Squibb’s 9 best practices for patient communication.', output: 'checklist',
      source: { label: 'UPL Guidance Document (PDF)', url: 'https://www.upl.org/assets/buildeasy/us-corp/be-upl/en/resources/UPL%20Guidance%20Document.pdf' } },

    // ── Decisions & conversations ──
    { key: 'ipdas',       id: 'IPDAS',          zone: 'process',  label: 'IPDAS',               name: 'International Patient Decision Aid Standards',
      desc: 'Quality standards for patient decision aids.', output: 'partial',
      source: { label: 'Ottawa Hospital Research Institute', url: 'https://decisionaid.ohri.ca/ipdas.html' } },
    { key: 'ottawa',      id: 'OTTAWA_DMSF',    zone: 'process',  label: 'Ottawa DSF',          name: 'Ottawa Decision Support Framework',
      desc: 'A framework for helping people with hard health decisions.', output: 'partial',
      source: { label: 'Ottawa Hospital Research Institute', url: 'https://decisionaid.ohri.ca/odsf.html' } },
    { key: 'share',       id: 'SHARE',          zone: 'process',  label: 'SHARE',               name: 'The SHARE Approach',
      desc: 'AHRQ’s five steps for shared decision making.', output: 'checklist',
      source: { label: 'AHRQ', url: 'https://www.ahrq.gov/sdm/share-approach/index.html' } },
    { key: 'teachback',   id: 'TEACH_BACK',     zone: 'process',  label: 'Teach-Back',          name: 'Teach-Back Method',
      desc: 'Patients explain back what they heard; materials can support it.', output: 'checklist',
      source: { label: 'AHRQ Toolkit, Tool 5', url: 'https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html' } },
    { key: 'ahrq',        id: 'AHRQ_TOOLKIT',   zone: 'process',  label: 'AHRQ Toolkit',        name: 'AHRQ Health Literacy Universal Precautions Toolkit',
      desc: 'AHRQ’s tools to make care easier for every patient to understand and act on.', output: 'checklist',
      source: { label: 'AHRQ', url: 'https://www.ahrq.gov/health-literacy/improve/precautions/index.html' } },

    // ── Behaviour change ──
    { key: 'comb',        id: 'COM_B',          zone: 'behavior', label: 'COM-B',               name: 'Capability, Opportunity, Motivation – Behaviour model',
      desc: 'Capability, opportunity and motivation behind a behaviour.', output: 'checklist',
      source: { label: 'Michie, van Stralen & West (2011)', url: 'https://doi.org/10.1186/1748-5908-6-42' } },
    { key: 'hbm',         id: 'HBM',            zone: 'behavior', label: 'HBM',                 name: 'Health Belief Model',
      desc: 'The beliefs that shape whether people act on health advice.', output: 'checklist',
      source: { label: 'Rosenstock (1974)', url: 'https://doi.org/10.1177/109019817400200403' } },
    { key: 'ttm',         id: 'TTM',            zone: 'behavior', label: 'TTM',                 name: 'Transtheoretical Model (Stages of Change)',
      desc: 'Matching messages to how ready people are to change.', output: 'checklist',
      source: { label: 'Prochaska & Velicer (1997)', url: 'https://doi.org/10.4278/0890-1171-12.1.38' } },
    { key: 'eppm',        id: 'EPPM',           zone: 'behavior', label: 'EPPM',                name: 'Extended Parallel Process Model',
      desc: 'Pairing any risk message with a clear, doable action.', output: 'checklist',
      source: { label: 'Witte (1992)', url: 'https://doi.org/10.1080/03637759209376276' } },
    { key: 'whorisks',    id: 'WHO_RISK_COMMS', zone: 'behavior', label: 'WHO ERC',             name: 'WHO Emergency Risk Communication guideline',
      desc: 'WHO guidance for communicating risk in health emergencies.', output: 'checklist',
      source: { label: 'World Health Organization (2017)', url: 'https://www.who.int/publications/i/item/9789241550208' } },

    // ── Experience & partnership ──
    { key: 'picker',      id: 'PICKER',         zone: 'outcomes', label: 'Picker',              name: 'Picker Principles of Person Centred Care',
      desc: 'Eight principles of person-centred care.', output: 'checklist',
      source: { label: 'Picker', url: 'https://www.picker.org/about-picker/the-picker-principles-person-centred-care' } },
    { key: 'pcori',       id: 'PCORI_FE',       zone: 'outcomes', label: 'PCORI',               name: 'PCORI Foundational Expectations for Partnerships in Research',
      desc: 'Six expectations for partnering with patients in research.', output: 'checklist',
      source: { label: 'PCORI (PDF)', url: 'https://www.pcori.org/sites/default/files/PCORI-Foundational-Expectations-for-Partnerships-In-Research.pdf' } },
  ];

  const ZONES = [
    { key: 'clarity',  name: 'Clarity & content' },
    { key: 'process',  name: 'Decisions & conversations' },
    { key: 'behavior', name: 'Behaviour change' },
    { key: 'outcomes', name: 'Experience & partnership' },
  ];
  const OUTPUT_LABEL = { score: 'Score', partial: 'Partial score', checklist: 'Checklist' };

  root.PEA_FRAMEWORKS = { FRAMEWORKS, ZONES, OUTPUT_LABEL };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.PEA_FRAMEWORKS;
})(typeof window !== 'undefined' ? window : globalThis);
