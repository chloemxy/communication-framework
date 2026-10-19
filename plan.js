// ════════════════════════════════════════
// PLAN FROM AN IDEA — a guided path from an idea to a finished piece.
// From Nati Chen's interview (TASKS-framework-gaps.md, T6 and T7): people don't know where in the
// design process the frameworks help, and most start with the words only. So the path names each
// stage, says which checks matter there, and sends the words to the studio at the stage where
// PRISM can check them (drafting or scripting).
// Uses the studio's globals: brief, setBrief, setMode, editor, saveVersion, analyze, fwManual,
// renderFwTopBar, escapeHtml, $.
// ════════════════════════════════════════
const PLAN_LS = 'pea.plan';
const PLAN_SRC = {
  cci:   'https://www.cdc.gov/ccindex/',
  pematp:'https://www.ahrq.gov/health-literacy/patient-education/pemat-p.html',
  pemav: 'https://www.ahrq.gov/health-literacy/patient-education/pemat-av.html',
  cap:   'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html',
  ad:    'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html',
  idd:   'https://stacks.cdc.gov/view/cdc/129950',
  con:   'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
  alt:   'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html',
};
// [check text, short source label, full source name, url]
const C = (t, s, n, u) => ({ t, s, n, u });
const PLAN_OUTLINE_CHECKS = [
  C('One main message, said first', 'CCI 1, 2, 10', 'CDC Clear Communication Index, items 1, 2 and 10', PLAN_SRC.cci),
  C('At least one thing people can do', 'CCI 5', 'CDC Clear Communication Index, item 5', PLAN_SRC.cci),
  C('Why it matters, and how to do it', 'CCI 13, 14', 'CDC Clear Communication Index, items 13 and 14', PLAN_SRC.cci),
];
const PLAN_FLOWS = {
  video: {
    label: 'video or animation', fws: ['pematav', 'cci', 'readability', 'plainlang'],
    stages: [
      { key:'outline', name:'Outline', line:'Decide what it must say before you write it.' },
      { key:'draft', name:'Script', prism:true, auto:true, line:'Write the words people will hear and read on screen. PRISM checks them as you type.',
        checks: [
          C('Everyday words; medical words explained', 'PEMAT-A/V 3, 4', 'PEMAT-A/V items 3 and 4 (AHRQ)', PLAN_SRC.pemav),
          C('Active voice', 'PEMAT-A/V 5', 'PEMAT-A/V item 5 (AHRQ)', PLAN_SRC.pemav),
          C('Names at least one action, and speaks to the viewer', 'PEMAT-A/V 20, 21', 'PEMAT-A/V items 20 and 21 (AHRQ)', PLAN_SRC.pemav),
          C('Ends with a summary', 'PEMAT-A/V 11', 'PEMAT-A/V item 11 (AHRQ)', PLAN_SRC.pemav),
        ] },
      { key:'board', name:'Storyboard', prism:true, line:'Sketch each scene: what is shown, what is said, and any words on screen.',
        checks: [
          C('One idea or step per scene', 'CDC IDD/ELL 4', 'CDC product development tool for adults with IDD and extreme low literacy, item 4', PLAN_SRC.idd),
          C('Scenes follow a logical order', 'PEMAT-A/V 10', 'PEMAT-A/V item 10 (AHRQ)', PLAN_SRC.pemav),
          C('Each action is broken into small, clear steps', 'PEMAT-A/V 22', 'PEMAT-A/V item 22 (AHRQ)', PLAN_SRC.pemav),
          C('Words on screen are short and easy to read', 'PEMAT-A/V 13', 'PEMAT-A/V item 13 (AHRQ)', PLAN_SRC.pemav),
          C('Pictures are clear and uncluttered', 'PEMAT-A/V 18', 'PEMAT-A/V item 18 (AHRQ)', PLAN_SRC.pemav),
          C('At least one picture shows the main message', 'CCI 4', 'CDC Clear Communication Index, item 4', PLAN_SRC.cci),
        ] },
      { key:'final', name:'Animation', prism:true, line:'Build it, then check the finished video.',
        checks: [
          C('Narration is clear and not too fast', 'PEMAT-A/V 14', 'PEMAT-A/V item 14 (AHRQ)', PLAN_SRC.pemav),
          C('Captions for everything that is said', 'WCAG 1.2.2', 'WCAG 2.2, 1.2.2 Captions (Prerecorded)', PLAN_SRC.cap),
          C('Audio description for what is only shown', 'WCAG 1.2.5', 'WCAG 2.2, 1.2.5 Audio Description (Prerecorded)', PLAN_SRC.ad),
          C('Watched by a few people from your audience', '', '', ''),
        ] },
    ],
  },
  print: {
    label: 'printed or web piece', fws: ['pemat', 'cci', 'readability', 'plainlang'],
    stages: [
      { key:'outline', name:'Outline', line:'Decide what it must say before you write it.' },
      { key:'draft', name:'Draft', prism:true, auto:true, line:'Write the words. PRISM checks them as you type.',
        checks: [
          C('Everyday words; medical words explained', 'PEMAT-P 3, 4', 'PEMAT-P items 3 and 4 (AHRQ)', PLAN_SRC.pematp),
          C('Active voice', 'PEMAT-P 5', 'PEMAT-P item 5 (AHRQ)', PLAN_SRC.pematp),
          C('Names at least one action', 'PEMAT-P 20', 'PEMAT-P item 20 (AHRQ)', PLAN_SRC.pematp),
          C('Short sections with headings; lists for steps', 'CCI 8, 9', 'CDC Clear Communication Index, items 8 and 9', PLAN_SRC.cci),
        ] },
      { key:'board', name:'Layout', prism:true, line:'Place the words and pictures on the page.',
        checks: [
          C('The main message stands out (bold, larger, boxed)', 'CCI 3', 'CDC Clear Communication Index, item 3', PLAN_SRC.cci),
          C('Pictures help explain, and don’t distract', 'PEMAT-P 15, 16', 'PEMAT-P items 15 and 16 (AHRQ)', PLAN_SRC.pematp),
          C('Pictures are clear and uncluttered', 'PEMAT-P 18', 'PEMAT-P item 18 (AHRQ)', PLAN_SRC.pematp),
          C('At least one picture shows the main message', 'CCI 4', 'CDC Clear Communication Index, item 4', PLAN_SRC.cci),
        ] },
      { key:'final', name:'Final check', prism:true, line:'Check the finished layout before it goes out.',
        checks: [
          C('Text has enough contrast with its background', 'WCAG 1.4.3', 'WCAG 2.2, 1.4.3 Contrast (Minimum)', PLAN_SRC.con),
          C('Pictures that carry meaning have alt text (web and PDF)', 'WCAG 1.1.1', 'WCAG 2.2, 1.1.1 Non-text Content', PLAN_SRC.alt),
          C('Read by a few people from your audience', '', '', ''),
        ] },
    ],
  },
};
const PLAN_FORMATS = [['handout','Handout'], ['poster','Poster'], ['digital','Web page'], ['video','Video / animation']];

const PLAN_EMPTY = () => ({ stage:'outline', outline:{ message:'', action:'', points:'', terms:'', length:'' }, scenes:[], done:{}, handoff:null });
let plan = PLAN_EMPTY();
try { const saved = JSON.parse(localStorage.getItem(PLAN_LS) || 'null'); if(saved) plan = Object.assign(plan, saved); } catch(e){}
function planSave(){ try { localStorage.setItem(PLAN_LS, JSON.stringify(plan)); } catch(e){} }
function planFlowKey(){ return brief.format === 'video' ? 'video' : 'print'; }
function planFlow(){ return PLAN_FLOWS[planFlowKey()]; }
const planCheckId = (stageKey, i) => 'pc-' + planFlowKey() + '-' + stageKey + '-' + i;
const pEsc = s => escapeHtml(s || '');
const planLines = t => (t || '').split('\n').map(x => x.trim()).filter(Boolean);

function planSrcLink(c){
  return c.u ? ' <a class="plan-src" href="' + c.u + '" target="_blank" rel="noopener" title="' + pEsc(c.n) + '" aria-label="Source: ' + pEsc(c.n) + ' (opens in a new tab)">' + pEsc(c.s) + '</a>' : '';
}
// Items PRISM scores itself are listed, not ticked
function planAutoList(list){
  return '<ul class="plan-checks plan-auto">' + list.map(c => '<li><span>' + pEsc(c.t) + '</span>' + planSrcLink(c) + '</li>').join('') + '</ul>';
}
function planChecks(stageKey, list){
  return '<ul class="plan-checks">' + list.map((c, i) => {
    const id = planCheckId(stageKey, i), on = !!plan.done[id];
    return '<li><label><input type="checkbox" ' + (on ? 'checked ' : '') + 'onchange="planTick(\'' + id + '\', this.checked)"> <span>' + pEsc(c.t) + '</span></label>' + planSrcLink(c) + '</li>';
  }).join('') + '</ul>';
}
function planTick(id, on){ plan.done[id] = on; planSave(); renderPlanSteps(); }
function planStageChecks(st){ return st.key === 'outline' ? PLAN_OUTLINE_CHECKS : st.auto ? [] : (st.checks || []); }
function planStatus(st){
  const list = planStageChecks(st), n = list.filter((c, i) => plan.done[planCheckId(st.key, i)]).length;
  return n === 0 ? '' : n === list.length ? 'Done' : n + ' of ' + list.length;
}

function renderPlan(){
  const root = $('plan');
  if(!root) return;
  // the Brief is not saved across reloads; the plan remembers its own format
  if(!brief.format && plan.format) setBrief('format', plan.format, document.querySelector('#brief-top-panel [data-v="' + plan.format + '"]'));
  const fmt = brief.format;
  root.querySelector('#plan-fmt').innerHTML = PLAN_FORMATS.map(([v, l]) =>
    '<button type="button" aria-pressed="' + (fmt === v) + '" class="' + (fmt === v ? 'on' : '') + '" onclick="planFormat(\'' + v + '\')">' + l + '</button>').join('');
  renderPlanSteps();
  renderPlanStage();
}
function renderPlanSteps(){
  const fl = planFlow();
  // Brief and Frameworks only matter once PRISM checks words: hide them at the early stages
  const cur = fl.stages.find(s => s.key === plan.stage) || fl.stages[0];
  $('stage').classList.toggle('plan-early', !cur.prism);
  $('plan-steps').innerHTML = fl.stages.map((st, i) =>
    '<li><button type="button" class="plan-step' + (plan.stage === st.key ? ' on' : '') + '"' + (plan.stage === st.key ? ' aria-current="step"' : '') + ' onclick="planGo(\'' + st.key + '\')">' +
      '<span class="plan-n">' + (i + 1) + '</span><span class="plan-sname">' + st.name + '</span>' +
      (st.prism ? '<span class="plan-prism">PRISM checks</span>' : '') +
      '<span class="plan-stat">' + planStatus(st) + '</span>' +
    '</button></li>').join('');
}
function planGo(key){ plan.stage = key; planSave(); renderPlanSteps(); renderPlanStage(); const h = $('plan-stage-h'); if(h) h.focus(); }
function planFormat(v){
  if(brief.format === v) return;
  const btn = document.querySelector('#brief-top-panel [data-v="' + v + '"]');
  setBrief('format', v, btn || null);
  plan.format = v; planSave();
  renderPlan();
}
function planField(k, v){ plan.outline[k] = v; planSave(); }

function renderPlanStage(){
  const fl = planFlow(), i = Math.max(0, fl.stages.findIndex(s => s.key === plan.stage)), st = fl.stages[i];
  const next = fl.stages[i + 1];
  const o = plan.outline;
  let h = '<h3 class="plan-stage-h" id="plan-stage-h" tabindex="-1">' + (i + 1) + '. ' + st.name + '</h3><p class="plan-line">' + st.line + '</p>';

  if(st.key === 'outline'){
    h += '<div class="plan-form">' +
      '<label class="plan-f"><span>The one main message</span><input type="text" value="' + pEsc(o.message) + '" oninput="planField(\'message\', this.value)" placeholder="e.g. Check your blood pressure at home twice a day."></label>' +
      '<label class="plan-f"><span>What should people do?</span><input type="text" value="' + pEsc(o.action) + '" oninput="planField(\'action\', this.value)" placeholder="e.g. Write each reading in your log book."></label>' +
      '<label class="plan-f"><span>What do they need to know? One point per line, up to 3.</span><textarea rows="3" oninput="planField(\'points\', this.value)" placeholder="e.g. Sit quietly for 5 minutes first.">' + pEsc(o.points) + '</textarea></label>' +
      '<label class="plan-f"><span>How long?</span><input type="text" value="' + pEsc(o.length) + '" oninput="planField(\'length\', this.value)" placeholder="' + (fl === PLAN_FLOWS.video ? 'e.g. 60 seconds' : 'e.g. 1 page') + '"></label>' +
      '<label class="plan-f"><span>Medical words you must use, separated by commas (optional)</span><input type="text" value="' + pEsc(o.terms) + '" oninput="planField(\'terms\', this.value)" placeholder="e.g. hypertension, diuretic"></label>' +
    '</div>' +
    '<p class="plan-sub">Before you move on</p>' + planChecks('outline', PLAN_OUTLINE_CHECKS);
  }
  else if(st.key === 'draft'){
    const names = fl.fws.map(k => (window.PEA_FRAMEWORKS.FRAMEWORKS.find(f => f.key === k) || {}).label || k);
    h += '<p class="plan-p">The editor opens with your outline in place. These checks are turned on for you: <b>' + names.map(pEsc).join(', ') + '</b>.</p>' +
      '<div class="plan-actions"><button type="button" class="btn btn-primary plan-cta" onclick="planToEditor()">' + (fl === PLAN_FLOWS.video ? 'Write the script in the editor' : 'Write the draft in the editor') + '</button></div>' +
      '<p class="plan-sub">PRISM scores these in the editor</p>' + planAutoList(st.checks);
  }
  else if(st.key === 'board' && fl === PLAN_FLOWS.video){
    if(!plan.scenes.length) plan.scenes = planStarterScenes();
    const hasScript = !!editor.innerText.trim();
    h += '<div class="plan-scenes" role="list">' + plan.scenes.map((sc, k) =>
      '<div class="plan-scene" role="listitem"><span class="plan-scene-n">Scene ' + (k + 1) + '</span>' +
        '<label class="plan-f"><span>Shown</span><input type="text" value="' + pEsc(sc.shown) + '" oninput="planScene(' + k + ',\'shown\',this.value)" placeholder="e.g. A person at a table with a cuff on"></label>' +
        '<label class="plan-f"><span>Said</span><textarea rows="2" oninput="planScene(' + k + ',\'said\',this.value)">' + pEsc(sc.said) + '</textarea></label>' +
        '<label class="plan-f"><span>Words on screen</span><input type="text" value="' + pEsc(sc.onscreen) + '" oninput="planScene(' + k + ',\'onscreen\',this.value)"></label>' +
        '<button type="button" class="btn btn-quiet plan-scene-x" onclick="planSceneDel(' + k + ')" aria-label="Remove scene ' + (k + 1) + '">Remove</button>' +
      '</div>').join('') + '</div>' +
      '<div class="plan-actions"><button type="button" class="btn btn-secondary" onclick="planSceneAdd()">Add a scene</button>' +
      (hasScript ? '<button type="button" class="btn btn-secondary" onclick="planScenesFromScript()">Fill scenes from the script</button>' : '') +
      '<button type="button" class="btn btn-secondary" onclick="planBoardToEditor()">Check the storyboard words</button></div>' +
      '<p class="plan-sub">Check each scene</p>' + planChecks('board', st.checks);
  }
  else if(st.key === 'board'){
    h += '<p class="plan-p">Lay out the page in your design tool. When you have a draft layout, open it here as an image or PDF to check contrast and alt text.</p>' +
      '<div class="plan-actions"><button type="button" class="btn btn-secondary" onclick="planOpenFile()">Open a layout to check</button></div>' +
      '<p class="plan-sub">Check the layout</p>' + planChecks('board', st.checks);
  }
  else {
    h += '<p class="plan-p">' + (fl === PLAN_FLOWS.video
        ? 'Score the final script with PEMAT-A/V, then run through the list for the finished video.'
        : 'Open the finished file to score it and check contrast and alt text.') + '</p>' +
      '<div class="plan-actions"><button type="button" class="btn btn-primary plan-cta" onclick="' + (fl === PLAN_FLOWS.video ? 'planToEditor(true)' : 'planOpenFile()') + '">' +
        (fl === PLAN_FLOWS.video ? 'Score the final script' : 'Open the finished file') + '</button></div>' +
      '<p class="plan-sub">Before it goes out</p>' + planChecks('final', st.checks);
  }
  if(next) h += '<div class="plan-next"><button type="button" class="btn btn-secondary" onclick="planGo(\'' + next.key + '\')">Next: ' + next.name + '</button></div>';
  $('plan-stage').innerHTML = h;
}

// The editor is hidden in Plan mode (no innerText line breaks), so read it block by block
function planEditorLines(){
  const blocks = [...editor.querySelectorAll('p, li, h1, h2, h3, h4')].map(el => el.textContent.trim()).filter(Boolean);
  return blocks.length ? blocks : planLines(editor.textContent);
}
// One scene per paragraph of the script in the editor; without a script, one per outline line
function planStarterScenes(){
  const script = planEditorLines().slice(0, 20);
  if(script.length) return script.map(t => ({ shown:'', said:t, onscreen:'' }));
  const o = plan.outline, pts = planLines(o.points).slice(0, 3);
  return [{ shown:'', said:o.message, onscreen:'' }, ...pts.map(p => ({ shown:'', said:p, onscreen:'' })), { shown:'', said:o.action, onscreen:'' }];
}
function planScenesFromScript(){
  if(plan.scenes.some(sc => sc.shown || sc.onscreen) && !confirm('Replace these scenes with one scene per paragraph of the script?')) return;
  plan.scenes = []; plan.scenes = planStarterScenes(); planSave(); renderPlanStage();
}
function planScene(k, field, v){ plan.scenes[k][field] = v; planSave(); }
function planSceneAdd(){ plan.scenes.push({ shown:'', said:'', onscreen:'' }); planSave(); renderPlanStage(); }
function planSceneDel(k){ plan.scenes.splice(k, 1); planSave(); renderPlanStage(); }

// The words go to the editor, where the checks run. Anything already there is saved as a version first.
function planSendToEditor(html, label){
  const fl = planFlow();
  if(editor.innerText.trim()){
    if(!confirm('Replace the text in the editor? What is there now is saved in History.')) return;
    saveVersion('Before ' + label);
  }
  fl.fws.forEach(k => { fwManual[k] = true; });
  planLeave();
  editor.innerHTML = html;
  $('canvas-empty').style.display = 'none';
  renderFwTopBar();
  analyze();
  saveVersion(label);
  editor.focus();
}
function planOutlineHtml(){
  const o = plan.outline, pts = planLines(o.points).slice(0, 3);
  const P = t => '<p>' + pEsc(t) + '</p>';
  // each medical word gets a line to explain it, so it is defined the first time it is used (PEMAT item 4)
  const terms = (o.terms || '').split(',').map(x => x.trim()).filter(Boolean).map(t => P(t + ': [say what it means in everyday words]')).join('');
  if(planFlow() === PLAN_FLOWS.video)
    return (o.message ? P(o.message) : '') + terms + pts.map(t => P(t)).join('') + (o.action ? P(o.action) : '') || '<p></p>';
  return (o.message ? '<h1>' + pEsc(o.message) + '</h1>' : '') +
    (o.action ? '<h2>What to do</h2>' + P(o.action) : '') +
    (terms ? '<h2>Words to know</h2>' + terms : '') +
    (pts.length ? '<h2>What to know</h2><ul>' + pts.map(p => '<li>' + pEsc(p) + '</li>').join('') + '</ul>' : '') || '<p></p>';
}
// Into the editor, with a way back to the next stage of the Plan
function planLeave(){
  const st = planFlow().stages, i = st.findIndex(s => s.key === plan.stage);
  plan.handoff = (st[i + 1] || st[i]).key; planSave();
  setMode('evaluate', document.querySelector('#mode-toggle [data-m="evaluate"]'));
}
function planBackSync(){
  const b = $('plan-back');
  if(!b) return;
  const st = plan.handoff && planFlow().stages.find(s => s.key === plan.handoff);
  b.hidden = !st;
  if(st) b.textContent = 'Back to plan: ' + st.name;
}
function planBack(){
  if(plan.handoff) plan.stage = plan.handoff;
  planSave();
  setMode('plan', document.querySelector('#mode-toggle [data-m="plan"]'));
}
function planReset(){
  if(!confirm('Start over? This clears the outline, scenes and ticks. The editor text stays.')) return;
  plan = PLAN_EMPTY(); planSave(); renderPlan();
}
function planToEditor(finalCheck){
  if(finalCheck && editor.innerText.trim()){
    planFlow().fws.forEach(k => { fwManual[k] = true; });
    planLeave();
    renderFwTopBar(); analyze();
    return;
  }
  planSendToEditor(planOutlineHtml(), planFlow() === PLAN_FLOWS.video ? 'Script from outline' : 'Draft from outline');
}
function planBoardToEditor(){
  const html = plan.scenes.map(sc => [sc.said, sc.onscreen].filter(x => (x || '').trim()).map(x => '<p>' + pEsc(x) + '</p>').join('')).join('') || '<p></p>';
  planSendToEditor(html, 'Storyboard words');
}
function planOpenFile(){
  planLeave();
  $('file-doc').click();
}
