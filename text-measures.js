// Pure text measures: readability, sentence splitting, word counts, the jargon and vague-word
// dictionaries. Moved verbatim out of index.html so the studio and Rendomat's clarity report
// compute the same numbers from the same code. No DOM, no state.
//
// Loaded in the browser before the studio's main script (window.PRISM_TEXT) and required in
// Node (module.exports). tests/text-measures.test.js pins the results.
(function (root) {
  // ── Jargon / vague dictionaries (same as Classic) ──
  const JARGON = {
    hypertension:'high blood pressure','myocardial infarction':'heart attack',
    dyspnea:'shortness of breath',edema:'swelling',prophylactic:'preventive',
    etiology:'cause',contraindication:'reason not to use this treatment',
    comorbidity:'other health condition',prognosis:'likely outcome',
    hemorrhage:'bleeding',tachycardia:'fast heart rate',bradycardia:'slow heart rate',
    hyperlipidemia:'high cholesterol',glycemic:'blood sugar',exacerbation:'worsening',
    pathology:'disease',sequelae:'after-effects',asymptomatic:'without symptoms',
    bilateral:'on both sides',subcutaneous:'under the skin',intravenous:'into a vein',
    intramuscular:'into a muscle',diuretic:'water pill',anticoagulant:'blood thinner',
    carcinoma:'cancer',malignant:'cancerous',benign:'non-cancerous',
    metastasis:'spread of cancer',lesion:'area of damage',stenosis:'narrowing',
    thrombosis:'blood clot',embolism:'blockage',ischemia:'reduced blood flow',
    necrosis:'tissue death',fibrosis:'scarring',sepsis:'severe infection',
    anemia:'low blood count',hypertrophy:'enlargement',atrophy:'wasting away',
    oncology:'cancer care',pharmaceutical:'medicine',
  };
  const JARGON_KEYS = Object.keys(JARGON);
  const VAGUE = ['some','many','often','sometimes','various','several','a number of','a lot of',
    'a few','numerous','appropriate','adequate','sufficient','significant','substantial'];

  // ── Text engines ──
  function syllables(word){
    word = word.toLowerCase().replace(/[^a-z]/g,'');
    if(!word) return 0;
    if(word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,'').replace(/^y/,'');
    const m = word.match(/[aeiouy]{1,2}/g);
    return m ? m.length : 1;
  }
  // One word count and one sentence split for every module (footer, Readability, Plain language,
  // the text card, file history and versions), so their numbers always agree.
  function countWords(text){ return (String(text || '').match(/\b\w+\b/g) || []).length; }
  function computeFK(text){
    const sentences = splitSentences(text);
    const words = text.match(/\b\w+\b/g) || [];
    if(!sentences.length || !words.length) return null;
    const totalSyll = words.reduce((s,w) => s + syllables(w), 0);
    const avgSentLen  = words.length / sentences.length;
    const avgSyllWord = totalSyll / words.length;
    return {
      ease:  Math.round((206.835 - 1.015*avgSentLen - 84.6*avgSyllWord)*10)/10,
      grade: Math.round((0.39*avgSentLen + 11.8*avgSyllWord - 15.59)*10)/10,
      words: words.length, sentences: sentences.length,
      avgSentLen: Math.round(avgSentLen*10)/10,
      avgSyll: Math.round(avgSyllWord*100)/100,
    };
  }
  // FK can dip below zero for very short, simple text; show that as "below 1" rather than a negative grade
  const gradeText = g => g < 1 ? 'below 1' : String(g);
  // A line break always ends a sentence (each heading, list item and paragraph is its own block);
  // inside a line, a full stop, ! or ? followed by a capital does.
  function splitSentences(text){
    return String(text || '').split(/\n+|(?<=[.!?])\s+(?=[A-Z"'“‘])/).map(s => s.trim()).filter(s => /\w/.test(s));
  }
  // Artwork / PDF text arrives one printed line at a time. Rebuild it into units: a line that
  // doesn't end in . ! ? : runs on into the next when the next starts lowercase, or when the line
  // is long (wrapped prose). Short standalone lines (headlines, list items) stay their own unit.
  // prose = the text is mostly running sentences (median unit of 7+ words), not short poster lines.
  const ARTWORK_WRAP_CHARS = 45, ARTWORK_PROSE_WORDS = 7;
  function artworkUnits(raw){
    const lines = String(raw || '').split('\n').map(l => l.trim().replace(/^([-*•]|\d+[.)])\s+/, ''));
    const units = [];
    let cur = '';
    lines.forEach((l, i) => {
      if(!l){ if(cur){ units.push(cur); cur = ''; } return; }      // a blank line ends a paragraph
      cur = cur ? cur + ' ' + l : l;
      const next = (lines[i + 1] || '');
      const open = !/[.!?:]["”'’)]?$/.test(l);
      const runsOn = open && next && (/^[a-z(“"‘']/.test(next) || (l.length > ARTWORK_WRAP_CHARS && /[\p{Ll},;\-–]$/u.test(l)));
      if(!runsOn){ units.push(cur); cur = ''; }
    });
    if(cur) units.push(cur);
    const counts = units.map(countWords).sort((a, b) => a - b);
    const median = counts.length ? counts[Math.floor((counts.length - 1) / 2)] : 0;
    return { units, prose: median >= ARTWORK_PROSE_WORDS, median };
  }

  const PRISM_TEXT = { syllables, countWords, computeFK, gradeText, splitSentences, ARTWORK_WRAP_CHARS, ARTWORK_PROSE_WORDS, artworkUnits, JARGON, JARGON_KEYS, VAGUE };
  root.PRISM_TEXT = PRISM_TEXT;
  if (typeof module !== 'undefined' && module.exports) module.exports = PRISM_TEXT;
})(typeof window !== 'undefined' ? window : globalThis);
