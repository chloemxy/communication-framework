/* The framework background (Why AI?, and slide 4 where two screenshots fly into it): PRISM's 14 frameworks as browser cards in tilted rows.
 * Each row holds all 14 cards twice (so it loops without a jump), starts at a different card,
 * and slides one card every 9 s; rows alternate direction. CSS (#why .fw-*) does the motion;
 * this only builds the cards. Card text follows frameworks.js (labels, names, sources). */
(function(){
  'use strict';
  var boxes = document.querySelectorAll('.fw-bg');
  if (!boxes.length) return;
  var SECS_PER_CARD = 9, ROWS = 7;
  var Z = { c:'Clarity & content', d:'Decisions & conversations', b:'Behaviour change', e:'Experience & partnership' };
  var F = [
    ['cdc.gov/ccindex', 'c', 'CCI', 'CDC Clear Communication Index', 'Centers for Disease Control and Prevention'],
    ['ahrq.gov/health-literacy/patient-education/pemat-p.html', 'c', 'PEMAT-P', 'Patient Education Materials Assessment Tool, printable', 'AHRQ'],
    ['ahrq.gov/health-literacy/patient-education/pemat-av.html', 'c', 'PEMAT-A/V', 'PEMAT for audiovisual materials', 'AHRQ'],
    ['stacks.cdc.gov/view/cdc/129950', 'c', 'CDC IDD/ELL', 'Tool for adults with intellectual disability or extreme low literacy', 'Centers for Disease Control and Prevention'],
    ['prism.kpwashingtonresearch.org/background_to_plain_language', 'c', 'SAM', 'Suitability Assessment of Materials', 'Doak, Doak & Root (1996)'],
    ['ndph.ox.ac.uk/research/research-groups/applied-health-research-unit-ahru/discern', 'c', 'DISCERN', 'Judging the quality of written consumer health information', 'University of Oxford'],
    ['doi.org/10.1037/h0057532', 'c', 'Readability', 'Flesch Reading Ease and Flesch-Kincaid Grade', 'Flesch (1948)'],
    ['cdc.gov/pcd/issues/2023/23_0061.htm', 'c', 'CDC Inclusive', 'Health Equity Guiding Principles for Inclusive Communication', 'Calanan et al. (2023)'],
    ['upl.org/resources/upl-guidance-document', 'c', 'UPL', 'Universal Patient Language Best Practices', 'Bristol Myers Squibb'],
    ['decisionaid.ohri.ca/ipdas.html', 'd', 'IPDAS', 'International Patient Decision Aid Standards', 'Ottawa Hospital Research Institute'],
    ['doi.org/10.1177/109019817400200403', 'b', 'HBM', 'Health Belief Model', 'Rosenstock (1974)'],
    ['doi.org/10.4278/0890-1171-12.1.38', 'b', 'TTM', 'Transtheoretical Model (Stages of Change)', 'Prochaska & Velicer (1997)'],
    ['doi.org/10.1080/03637759209376276', 'b', 'EPPM', 'Extended Parallel Process Model', 'Witte (1992)'],
    ['who.int/publications/i/item/9789241550208', 'b', 'WHO ERC', 'Emergency Risk Communication guideline', 'World Health Organization (2017)']
  ];
  // the 9 more the library review kept (with F, the 23 on the Verification list); only a data-cut wall shows them
  var MORE = [
    ['doi.org/10.1186/1748-5908-6-42', 'b', 'COM-B', 'Capability, Opportunity, Motivation – Behaviour model', 'Michie, van Stralen & West (2011)'],
    ['decisionaid.ohri.ca/odsf.html', 'd', 'Ottawa DSF', 'Ottawa Decision Support Framework', 'Ottawa Hospital Research Institute'],
    ['ahrq.gov/health-literacy/improve/precautions/tool5.html', 'd', 'Teach-Back', 'Teach-Back Method', 'AHRQ Toolkit, Tool 5'],
    ['doi.org/10.1111/j.1475-6773.2004.00269.x', 'e', 'PAM', 'Patient Activation Measure', 'Hibbard et al. (2004)'],
    ['cancer.gov/publications/health-communication/pink-book.pdf', 'c', 'NCI Pink Book', 'Making Health Communication Programs Work', 'National Cancer Institute'],
    ['pointofcarefoundation.org.uk/resource/experience-based-co-design-ebcd-toolkit', 'e', 'EBCD', 'Experience-Based Co-Design', 'Point of Care Foundation'],
    ['ahrq.gov/health-literacy/professional-training/shared-decision', 'd', 'SHARE', 'The SHARE Approach to shared decision-making', 'AHRQ'],
    ['ahrq.gov/health-literacy/improve/precautions', 'd', 'AHRQ Toolkit', 'Health Literacy Universal Precautions Toolkit', 'AHRQ'],
    ['picker.org/who-we-are/the-picker-principles-of-person-centred-care', 'e', 'Picker', 'Picker Principles of Person Centred Care', 'Picker']
  ];
  // the 9 frameworks the library review cut; a wall marked data-cut (Verification) mixes them in,
  // and index.html greys them out one by one
  var CUT = [
    ['eqip-tool.org', 'c', 'EQIP', 'Ensuring Quality Information for Patients', 'Moult, Franck & Brady (2004)'],
    ['digital.gov/guides/plain-language', 'c', 'Plain Language', 'U.S. Federal Plain Language Guidelines', 'PLAIN (2011)'],
    ['pcori.org/engagement', 'e', 'PCORI', 'Foundational Expectations for Partnerships in Research', 'PCORI'],
    ['glynelwyn.com/option', 'd', 'OPTION', 'OPTION Scale: observing patient involvement', 'Elwyn et al. (2003)'],
    ['ahrq.gov/cahps', 'e', 'CAHPS', 'Consumer Assessment of Healthcare Providers and Systems', 'AHRQ'],
    ['netpromoter.com', 'e', 'NPS', 'Net Promoter Score', 'Reichheld (2003)'],
    ['theberylinstitute.org', 'e', 'Beryl PX', 'The Beryl Institute Patient Experience Framework', 'The Beryl Institute (2023)'],
    ['planetree.org/planetree-model', 'e', 'Planetree', 'Planetree Model of Person-Centered Care', 'Planetree International'],
    ['doi.org/10.1080/00140139.2013.838643', 'b', 'SEIPS', 'Systems Engineering Initiative for Patient Safety 2.0', 'Holden et al. (2013)']
  ];
  function esc(t){ return t.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function card(f, cut){
    return '<div class="fw-card' + (cut ? ' fw-cut" data-n="' + esc(f[2]) : '') + '"><div class="fw-bar"><i></i><i></i><i></i><span>' + esc(f[0]) + '</span></div>' +
      '<div class="fw-body"><div class="fw-zone">' + esc(Z[f[1]]) + '</div><div class="fw-title">' + esc(f[2]) + '</div>' +
      '<div class="fw-sub">' + esc(f[3]) + '</div><div class="fw-src">' + esc(f[4]) + '</div></div></div>';
  }
  // slide 4 (data-shots): the middle row holds Nati's post and the CDC Clear Communication Index as
  // two cards, which standards.js flies the big screenshots into
  var SHOTS = { 2:['lnkd.in/p/gsauNRxE', 'post', 'img/post-nati-chen-v2.jpg?v=20261118a'], 4:['cdc.gov/ccindex', 'cdc', 'img/cdc-cci-site-v2.jpg?v=20261118a'] };
  function shot(s){
    return '<div class="fw-card shot" data-shot="' + s[1] + '"><div class="fw-bar"><i></i><i></i><i></i><span>' + esc(s[0]) + '</span></div>' +
      '<img src="' + s[2] + '" alt=""></div>';
  }
  [].forEach.call(boxes, function(box){
    var shots = box.hasAttribute('data-shots'), cuts = box.hasAttribute('data-cut'), html = '';
    // with data-cut: all 23 kept frameworks, and a cut card after every second one (32 cards)
    var all = [];
    (cuts ? F.concat(MORE) : F).forEach(function(f, i){ all.push(card(f)); if (cuts && i % 2 && CUT[(i - 1) / 2]) all.push(card(CUT[(i - 1) / 2], true)); });
    for (var r = 0; r < ROWS; r++) {
      var set = '';
      for (var k = 0; k < all.length; k++) set += shots && r === 3 && SHOTS[k] ? shot(SHOTS[k]) : all[(r * 5 + k) % all.length];
      html += '<div class="fw-row' + (r % 2 ? ' rev' : '') + '" style="--dur:' + (all.length * SECS_PER_CARD) + 's;--off:calc(' + (-(r % 3) * 7) + ' * var(--cu))">' + set + set + '</div>';
    }
    box.innerHTML = html;
  });
})();
