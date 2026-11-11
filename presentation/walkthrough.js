/* PRISM walkthrough, driven by scroll.
 * The page scrolls through a tall track; a sticky 16:9 stage shows the moment at that scroll
 * position. Stop scrolling and it holds still, so a presenter can talk over any moment.
 * The stage is drawn live (recorded screens + camera, cursor, spotlight and labels), so it stays
 * sharp at any size. Scenes and timing match screen record/prism-walkthrough-v7.mp4.
 * Needs media/walkthrough/clips.js (window.PRISM_WALK_CLIPS) loaded first.
 */
(function(){
  'use strict';
  var root = document.querySelector('[data-walkthrough]');
  if (!root || !window.PRISM_WALK_CLIPS) return;
  var IMG_DIR = 'media/walkthrough/', IMG_V = '?v=20261108a';   // bump when the recorded screens change
  var PX_PER_SEC = 150;                       // scroll distance per second of animation

  var FW = 1920, FH = 1080, PW = 1600, PH = 900, ZMIN = FW / PW;   // full view fills the stage
  var F = { x:0, y:0, w:PW, h:PH };
  function R(x,y,w,h){ return { x:x, y:y, w:w, h:h }; }
  var C = window.PRISM_WALK_CLIPS.clips;
  function r(a){ return a && R(a[0], a[1], a[2], Math.min(a[3], PH - a[1] - 4)); }
  function mid(a){ return [a[0] + a[2]/2, a[1] + a[3]/2]; }

  // ---------- scenes (times in seconds within each scene) ----------
  var S = [];
  // Getting started: a beginner follows "How to check your material" on the empty Studio, one label per step
  var G = C.guide, OB = mid(G.openBrief), PA = mid(G.patients), HO = mid(G.handout), GT = mid(G.thumb), FB = mid(G.fwBtn), MT = mid(G.met);
  var GS = R(G.steps[0], G.steps[1] - 6, G.steps[2], G.steps[3] + 12), BP = r(G.briefPanel);
  var GTB = R(G.thumb[0] - 10, G.thumb[1] - 10, G.thumb[2] + 20, G.thumb[3] + 52), GTC = R(120, 470, 460, 330);
  var SAM = r(G.sam), SAMC = R(808, 200, 772, 330), PR = R(G.pematPill[0] + 2, G.pematPill[1] + 2, G.pematPill[2] - 4, G.pematItem[1] + G.pematItem[3] - G.pematPill[1]);
  var PRC = R(PR.x - 6, PR.y - 10, PR.w + 12, PR.h + 150);   // room under the card for the label, clear of the Met buttons
  S.push({ clip:'guide', dur:27.0, chap:[1,'Getting started'],
    frames:[[0,0],[4.65,1,1],[7.45,2,1],[8.65,3,1],[10.4,4,1],[13.5,5,1],[16.05,6,1],[18.3,7,1],[20.4,8,1],[23.05,9,1]],
    cam:[[0,F],[2.2,F],[3.0,GS],[5.2,GS],[6.2,BP],[10.2,BP],[11.2,GTC],[13.8,GTC],[14.6,F],[16.0,F],[17.0,SAMC],[20.4,SAMC],[21.4,PRC],[25.8,PRC],[26.6,F]],
    cursor:[[[3.4,1080,560],[4.4,OB[0],OB[1]],[4.75,OB[0],OB[1]],[5.1,OB[0]+60,OB[1]+70]],
            [[6.4,520,420],[7.2,PA[0],PA[1]],[7.6,PA[0],PA[1]],[8.4,HO[0],HO[1]],[8.8,HO[0],HO[1]],[9.2,HO[0]+60,HO[1]+60]],
            [[11.6,520,790],[12.6,GT[0],GT[1]],[13.0,GT[0],GT[1]],[13.4,GT[0]+80,GT[1]+60]],
            [[14.8,1000,520],[15.8,FB[0],FB[1]],[16.2,FB[0],FB[1]],[16.6,FB[0]-40,FB[1]+90],[17.8,SAM.x+18,SAM.y+18],[18.45,SAM.x+18,SAM.y+18],[18.9,SAM.x+80,SAM.y+70]],
            [[21.8,1100,720],[22.8,MT[0],MT[1]],[23.2,MT[0],MT[1]],[23.6,MT[0]+60,MT[1]+60]]],
    clicks:[4.6,7.4,8.6,12.85,16.0,18.25,23.0],
    labels:[[5.6,10.2,'Step 1: set your Brief','Who it\u2019s for and what it is: here, patients and a handout',BP,8.9],
            [11.4,14.2,'Step 2: add your material','Open a file, paste text, or start from the sample handout',GTB,12.85],
            [16.8,20.4,'Step 3: pick your frameworks','The Brief already picked six for a handout; tick any to add it',SAM,18.55],
            [21.6,25.8,'Step 4: review the results','Scores appear; rate what the tool can\u2019t check, Met or Not met',PR,23.1]] });

  var P = r(C.studio.para), SG = r(C.studio.sug), AP = mid(C.studio.apply);
  var P2 = r(C.studio.paraAfter || C.studio.para);   // the "Applied" notice pushes the paragraph down
  var RP = R(120, 330, 560, 190), RS = R(SG.x - 20, SG.y - 20, SG.w + 40, SG.h + 70);
  // each scene opens on the previous one's last screen; recorded rail scrolls play as glides (frames 1-8)
  function glideFrames(at){ var f = [[0,0]]; for (var g = 1; g <= 8; g++) f.push([at + (g-1)*0.1, g]); return f; }
  S.push({ clip:'studio', dur:10.8, chap:[2,'Apply a suggestion'],
    frames:glideFrames(0.6).concat([[6.6,C.studio.marks.applied,1]]),
    cam:[[0,F],[1.6,F],[2.4,RP],[4.0,RP],[4.8,RS],[7.2,RS],[8.0,RP],[9.6,RP],[10.4,F]],
    cursor:[[[5.0,1330,700],[6.1,AP[0],AP[1]],[6.8,AP[0],AP[1]],[7.2,AP[0]+60,AP[1]+40]]],
    clicks:[6.45],
    labels:[[2.4,4.0,'Plain-language problems are flagged','Medical words, vague words, long sentences',P],
            [4.9,7.2,'A suggested rewrite, from a card','With the guideline it comes from',SG,5.6],
            [8.1,9.6,'Applied in your text','Undo any time, or in History',P2]] });

  // Edit the text directly: after the suggestion, finish the paragraph by hand;
  // flags clear and the reading grade drops as words change
  var E = C.edit, selAt = new Map(E.edits.map(function(e){ return [e.at, e.sel]; }));
  var editFrames = glideFrames(0.7).slice(0, E.marks.start + 1), editCursor = [[1.6,620,640]], editClicks = [], t = 2.3;
  for (var j = E.marks.start + 1; j < E.frames.length; j++) {
    editFrames.push([t, j]);
    if (selAt.has(j)) { var se = selAt.get(j), m = [se[0]+se[2]/2, se[1]+se[3]/2];
      editCursor.push([t - 0.4, m[0], m[1]]); editCursor.push([t + 0.15, m[0], m[1]]); editCursor.push([t + 0.45, m[0] + 30, m[1] + 46]);
      editClicks.push(t - 0.2, t - 0.06); t += 0.6; }
    else t += (selAt.has(j + 1) || j === E.frames.length - 1) ? 0.45 : 0.11;
  }
  // the grade was measured as "Gr 6"; it grows leftward as decimals appear, so widen the ring
  var ED = R(140, 360, 1050, 300), EG = R(E.grade[0] - 40, E.grade[1], E.grade[2] + 40, E.grade[3]);
  S.push({ clip:'edit', dur:t + 2.0, chap:[3,'Edit the text directly'],
    frames:editFrames,
    cam:[[0,F],[1.0,F],[1.9,ED],[t + 1.0,ED],[t + 1.9,F]],
    cursor:[editCursor], clicks:editClicks,
    labels:[[2.0,t*0.55,'Or edit right in the text','Flags clear as you rewrite',r(E.para)],
            [t*0.55+0.2,t + 1.0,'Reading grade updates as you type','Every check reruns on each change',EG]] });

  // Apply all: the Plain language card fixes every safe rewrite in one step
  var AA = C.applyall, AB = mid(AA.btn);
  var AAcard = R(AA.summary[0] - 6, AA.summary[1] - 6, AA.summary[2] + 12, AA.fixall[1] + AA.fixall[3] - AA.summary[1] + 12);
  var AAdoc = R(140, 190, 660, 300);
  S.push({ clip:'applyall', dur:10.6, chap:[4,'Apply all'],
    frames:glideFrames(0.6).concat([[4.55,AA.marks.applied,1]]),
    cam:[[0,F],[1.6,F],[2.5,R(1180,150,400,260)],[5.7,R(1180,150,400,260)],[6.6,AAdoc],[9.4,AAdoc],[10.2,F]],
    cursor:[[[2.3,1320,620],[3.7,AB[0],AB[1]],[4.7,AB[0],AB[1]],[5.1,AB[0]+50,AB[1]+60]]],
    clicks:[4.4],
    labels:[[2.6,5.5,'Or apply every rewrite at once','Each count updates when you click Apply all',AAcard],
            [6.7,9.4,'Fixed across the whole page','One step in History undoes them all',AAdoc]] });

  // History: every change is logged; name a version; revert to an earlier one
  var H = C.history, HB = mid(H.btn), HN = mid(H.name), HS = mid(H.save), HR = mid(H.revert);
  var histFrames = [[0,0],[1.5,1,1]]; for (var k = 2; k <= 6; k++) histFrames.push([5.75 + (k-2)*0.14, k]);
  histFrames.push([6.6,7],[7.25,8,1],[9.3,9,1],[11.35,10,1]);
  var HTOP = R(1200,40,400,470), HBOT = R(1200,560,400,330);
  S.push({ clip:'history', dur:15.6, chap:[5,'History and versions'],
    frames:histFrames,
    cam:[[0,F],[1.9,F],[2.8,HTOP],[8.7,HTOP],[9.5,HBOT],[12.0,HBOT],[12.8,F]],
    cursor:[[[0.2,820,520],[1.0,HB[0],HB[1]],[1.5,HB[0],HB[1]],[1.9,HB[0]+60,HB[1]+80]],
            [[4.8,1330,330],[5.4,HN[0]-60,HN[1]],[5.7,HN[0]-60,HN[1]],[6.2,HN[0]-40,HN[1]+50],[6.7,HS[0],HS[1]],[7.4,HS[0],HS[1]],[7.8,HS[0]+40,HS[1]+60]],
            [[9.9,1420,700],[10.9,HR[0],HR[1]],[11.5,HR[0],HR[1]],[11.9,HR[0]+60,HR[1]+40]]],
    clicks:[1.25,5.55,7.15,11.25],
    labels:[[2.9,5.4,'Every change is logged','What changed, word count and CCI score',r(H.item0)],
            [5.6,8.7,'Name a version to come back to','Save version, or Ctrl/⌘+S',R(1205,58,390,H.saved[1] + H.saved[3] - 58)],
            [9.6,11.3,'Revert to any earlier version','Here, the handout as first loaded',r(H.oldItem)],
            [12.9,15.6,'Back to the original, nothing lost','The version you left stays in History',R(115,195,670,330)]] });

  // ...then a contrast fix: pick text and background from the palette, PRISM names the nearest
  // shade that passes AAA, and Preview swaps it into the sample (the artwork is not changed)
  var PO = C.poster, CVD = PO.cvd.map(mid), ART = r(PO.art);
  var SW1 = mid(PO.sw1), SW0 = mid(PO.sw0), FXB = mid(PO.fixBtn);
  var CARD = R(PO.pal[0] - 8, PO.pal[1] - 8, PO.pal[2] + 16, PO.prev[1] + PO.prev[3] - PO.pal[1] + 16);
  var FIX = R(PO.fix[0] - 6, PO.fix[1] - 2, PO.fix[2] + 12, PO.fix[3] + 4);
  var FXP = R(PO.fix[0] - 6, PO.fix[1] - 2, PO.fix[2] + 12, PO.prev[1] + PO.prev[3] - PO.fix[1] + 6);
  S.push({ clip:'poster', dur:16.2, chap:[6,'Posters and images'],
    frames:[[0,0],[3.35,1,1],[5.45,2,1],[8.55,3,1],[12.05,4,1]],
    cam:[[0,F],[1.4,F],[2.3,R(15,180,1160,560)],[7.2,R(15,180,1160,560)],[7.9,CARD],[15.0,CARD],[15.8,F]],
    cursor:[[[2.4,1150,800],[3.05,CVD[1][0],CVD[1][1]],[3.4,CVD[1][0],CVD[1][1]],[4.7,CVD[1][0],CVD[1][1]],[5.15,CVD[4][0],CVD[4][1]],[5.6,CVD[4][0],CVD[4][1]],[6.0,CVD[4][0]+80,CVD[4][1]+60]],
            [[7.4,1100,520],[7.9,SW1[0],SW1[1]],[8.15,SW1[0],SW1[1]],[8.35,SW0[0],SW0[1]],[8.6,SW0[0],SW0[1]],
             [11.2,SW0[0],SW0[1]],[11.7,FXB[0],FXB[1]],[12.3,FXB[0],FXB[1]],[12.8,FXB[0]+60,FXB[1]+90]]],
    clicks:[3.2,5.3,8.0,8.45,11.9],
    labels:[[2.4,5.2,'See it through colour blindness','The poster as a reader with deuteranopia sees it',ART],
            [5.4,7.2,'Or as a greyscale print','Check it still works without colour',ART],
            [8.7,11.6,'Fails AAA? PRISM suggests a fix','The nearest shade of the same colour that passes',FIX],
            [12.1,15.0,'Preview it before you change the art','The sample switches to the suggested shade',FXP,12.05]] });

  // Plan from an idea: clear the poster for a new piece, outline it, step to Draft, then send the outline to the
  // editor, where it is scored; the walkthrough ends on the whole Studio
  var PL = C.plan, CL = mid(PL.clear), MB = mid(PL.modeBtn), IN = PL.input, IN2 = PL.input2, NX = mid(PL.next), TE = mid(PL.toEditor);
  var planFrames = [[0,0],[1.15,1,1],[2.75,2,1]];
  for (var k2 = 3; k2 <= 18; k2++) planFrames.push([5.2 + (k2-3)*0.12, k2]); planFrames.push([7.3,19]);
  for (var k3 = 20; k3 <= 28; k3++) planFrames.push([8.1 + (k3-20)*0.12, k3]); planFrames.push([9.3,29],[10.85,30,1],[15.15,31,1]);
  var PIN = R(IN[0], IN[1], IN[2], IN2[1] + IN2[3] - IN[1]), PCH = r(PL.checks);
  var PED = R(PL.editor[0] - 4, PL.editor[1] - 4, PL.read[0] + PL.read[2] - PL.editor[0] + 8, 330), PEC = R(20, 140, 1180, 420);
  S.push({ clip:'plan', dur:23.2, chap:[7,'Plan from an idea'], last:true,
    frames:planFrames,
    cam:[[0,F],[3.6,F],[4.5,R(250,290,790,220)],[9.6,R(250,290,790,220)],[10.4,F],[11.2,F],[12.0,PCH],[15.2,PCH],[16.0,PEC],[18.9,PEC],[19.8,F]],
    cursor:[[[0.2,900,600],[0.85,CL[0],CL[1]],[1.2,CL[0],CL[1]],[1.9,MB[0],MB[1]],[2.8,MB[0],MB[1]],[3.2,MB[0]+60,MB[1]+90]],
            [[4.5,820,560],[4.9,IN[0]+40,IN[1]+20],[5.1,IN[0]+40,IN[1]+20],[5.4,IN[0]+30,IN[1]+70]],
            [[7.4,IN[0]+30,IN[1]+70],[7.8,IN2[0]+40,IN2[1]+20],[8.0,IN2[0]+40,IN2[1]+20],[8.4,IN2[0]+30,IN2[1]+70]],
            [[9.8,900,640],[10.6,NX[0],NX[1]],[11.0,NX[0],NX[1]],[11.4,NX[0]+60,NX[1]+40]],
            [[13.6,700,720],[14.6,TE[0],TE[1]],[15.2,TE[0],TE[1]],[15.6,TE[0]+60,TE[1]+40]]],
    clicks:[1.0,2.6,4.98,7.88,10.75,15.0],
    labels:[[4.6,9.6,'Start with the one main message','Then what people should do',PIN],
            [12.1,14.6,'Each stage lists the checks that apply','The draft is scored against them in the editor',PCH],
            [16.1,18.9,'The outline opens in the editor','Already scored against the frameworks you picked',PED,15.3],
            [20.0,23.2,'That\u2019s PRISM','From an idea to a draft checked against published frameworks']] });

  var MIN_LABEL = 3.0;
  function stretch(s, at, extra){
    function sh(v){ return v > at ? v + extra : v; }
    s.frames.forEach(function(f){ f[0] = sh(f[0]); });
    s.cam.forEach(function(q){ q[0] = sh(q[0]); });
    (s.cursor || []).forEach(function(tr){ tr.forEach(function(q){ q[0] = sh(q[0]); }); });
    if (s.clicks) s.clicks = s.clicks.map(sh);
    s.labels.forEach(function(l){ if (l[0] > at) l[0] += extra; if (l[1] > at) l[1] += extra; if (l[5] > at) l[5] += extra; });
    s.dur += extra;
  }
  function byClip(n){ return S.filter(function(s){ return s.clip === n; })[0]; }
  [['guide',0.3,1.8],['poster',0.3,0.8],['edit',0.2,0.4]].forEach(function(a){ stretch(byClip(a[0]), a[1], -a[2]); });
  S.forEach(function(s){
    s.labels.forEach(function(l){ var d = l[1] - l[0]; if (d < MIN_LABEL) stretch(s, l[5] != null ? l[5] : l[1] - 0.4, MIN_LABEL - d); });
  });
  var XF = 0.8, st = 0;
  S.forEach(function(s){ s.start = st; st += s.dur - XF; });
  var TOTAL = st + XF;

  // ---------- drawing ----------
  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }
  function ease(x){ x = clamp(x, 0, 1); return x*x*x*(x*(x*6 - 15) + 10); }
  function zoomFor(q){ return q === F ? ZMIN : clamp(Math.min(FW / (q.w * 1.12), FH / (q.h * 1.3)), ZMIN, 2.1); }
  function smoothCam(kk){
    var out = kk.map(function(x){ return x.slice(); }), EXT = 0.5;   // camera moves borrow up to 0.5 s from the holds on each side, so zooms read slowly
    for (var i = 0; i < out.length - 1; i++) {
      if (out[i][1] === out[i+1][1]) continue;
      var prevHold = i > 0 && out[i-1][1] === out[i][1] ? out[i][0] - out[i-1][0] : 0;
      var nextHold = i + 2 < out.length && out[i+1][1] === out[i+2][1] ? out[i+2][0] - out[i+1][0] : 0;
      out[i][0] -= Math.min(EXT, prevHold * 0.45); out[i+1][0] += Math.min(EXT, nextHold * 0.45);
    }
    return out;
  }
  function camAt(s, lt){
    var kk = s._cam || (s._cam = smoothCam(s.cam)), i = 0;
    while (i < kk.length - 1 && kk[i+1][0] <= lt) i++;
    var a = kk[i], b = kk[i+1] || a, ra = a[1], rb = b[1];
    var p = b === a ? 0 : ease((lt - a[0]) / (b[0] - a[0]));
    var za = zoomFor(ra), zb = zoomFor(rb), z = Math.exp(Math.log(za) + (Math.log(zb) - Math.log(za)) * p);
    var q = Math.abs(1/zb - 1/za) > 1e-6 ? (1/z - 1/za) / (1/zb - 1/za) : p;
    var cx = (ra.x + ra.w/2) * (1-q) + (rb.x + rb.w/2) * q, cy = (ra.y + ra.h/2) * (1-q) + (rb.y + rb.h/2) * q;
    cx = clamp(cx, FW/2/z, PW - FW/2/z); cy = clamp(cy, FH/2/z, PH - FH/2/z);
    return { z:z, cx:cx, cy:cy };
  }
  function toS(c, x, y){ return [(x - c.cx) * c.z + FW/2, (y - c.cy) * c.z + FH/2]; }

  // images: preload everything once; until a frame has loaded, keep showing the last one that has
  var cache = {};
  function img(file){
    var im = cache[file];
    if (!im) { im = cache[file] = new Image(); im.decoding = 'async'; im.src = IMG_DIR + file + IMG_V; }
    return im;
  }
  function ready(file){ var im = img(file); return im.complete && im.naturalWidth > 0; }
  function bestFrame(files, fr, i){
    for (var n = i; n >= 0; n--) if (ready(files[fr[n][1]])) return n;
    return -1;
  }

  var stage = root.querySelector('.wk-stage');
  function layer(){
    var L = document.createElement('div'); L.className = 'wk-layer';
    L.innerHTML = '<div class="wk-cam"><img class="wk-i0" alt=""><img class="wk-i1" alt=""></div><div class="wk-spot"></div>' +
      '<div class="wk-ripple"></div><div class="wk-ripple"></div>' +
      '<svg class="wk-cursor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2 L3 19 L7.6 14.8 L10.6 21.4 L13.4 20.2 L10.5 13.7 L16.6 13.6 Z" fill="#fff" stroke="#16181D" stroke-width="1.6" stroke-linejoin="round"/></svg>' +
      '<div class="wk-label"><i></i><div><span></span><small></small></div></div>' +
      '<div class="wk-chap"><b></b><span></span></div>';
    stage.appendChild(L);
    var q = function(n){ return L.querySelector(n); };
    return { L:L, cam:q('.wk-cam'), i0:q('.wk-i0'), i1:q('.wk-i1'), spot:q('.wk-spot'), lab:q('.wk-label'),
      labT:q('.wk-label span'), labS:q('.wk-label small'), cur:q('.wk-cursor'), ch:q('.wk-chap'),
      chB:q('.wk-chap b'), chT:q('.wk-chap span'), rips:L.querySelectorAll('.wk-ripple') };
  }
  var A = layer(), B = layer();
  function show(el, on){ el.style.display = on ? '' : 'none'; }
  function setSrc(el, file){ if (el.dataset.f !== file) { el.src = IMG_DIR + file + IMG_V; el.dataset.f = file; } }

  function paint(Ly, s, lt, alpha){
    Ly.L.style.opacity = alpha; Ly.L.style.visibility = alpha > 0 ? 'visible' : 'hidden';
    if (alpha <= 0) return;
    var files = C[s.clip].frames, fr = s.frames, i = 0;
    while (i < fr.length - 1 && fr[i+1][0] <= lt) i++;
    var cur = bestFrame(files, fr, i); if (cur < 0) cur = 0;
    var fadeDur = fr[cur][2] ? 0.32 : 0, inFade = cur === i && cur > 0 && lt - fr[cur][0] < fadeDur && ready(files[fr[cur-1][1]]);
    if (inFade) { setSrc(Ly.i0, files[fr[cur-1][1]]); setSrc(Ly.i1, files[fr[cur][1]]); Ly.i1.style.opacity = ease((lt - fr[cur][0]) / fadeDur); show(Ly.i1, true); }
    else { setSrc(Ly.i0, files[fr[cur][1]]); show(Ly.i1, false); }

    var c = camAt(s, lt), o = toS(c, 0, 0);
    Ly.cam.style.transform = 'translate(' + o[0] + 'px,' + o[1] + 'px) scale(' + c.z + ')';

    var Lb = null; for (var n = 0; n < s.labels.length; n++) { var l = s.labels[n]; if (lt >= l[0] && lt <= l[1]) { Lb = l; break; } }
    if (Lb) {
      var a = ease(Math.min((lt - Lb[0]) / .5, s.last ? 1 : (Lb[1] - lt) / .4));
      show(Ly.lab, true); if (Ly.labT.textContent !== Lb[2]) { Ly.labT.textContent = Lb[2]; Ly.labS.textContent = Lb[3] || ''; }
      Ly.lab.style.opacity = a;
      var lw = Ly.lab.offsetWidth, lh = Ly.lab.offsetHeight, lx, ly;
      if (Lb[4]) {
        var rr = Lb[4], p1 = toS(c, rr.x, rr.y), p2 = toS(c, rr.x + rr.w, rr.y + rr.h), pad = 10;
        show(Ly.spot, true); Ly.spot.style.opacity = a;
        // keep the whole box on the stage: cards at the page edge would push its border out of frame
        var EDGE = 12, sx1 = Math.max(EDGE, p1[0] - pad), sy1 = Math.max(EDGE, p1[1] - pad);
        var sx2 = Math.min(FW - EDGE, p2[0] + pad), sy2 = Math.min(FH - EDGE, p2[1] + pad);
        Ly.spot.style.left = sx1 + 'px'; Ly.spot.style.top = sy1 + 'px';
        Ly.spot.style.width = (sx2 - sx1) + 'px'; Ly.spot.style.height = (sy2 - sy1) + 'px';
        lx = clamp(p1[0] - pad, 40, FW - lw - 40);
        ly = p2[1] + pad + 24; if (ly + lh > FH - 110) ly = p1[1] - pad - 24 - lh;
        if (ly < 30) ly = clamp(p2[1] + pad + 24, 30, FH - lh - 110);
      } else { show(Ly.spot, false); lx = (FW - lw) / 2; ly = FH - lh - 120; }
      Ly.lab.style.left = lx + 'px'; Ly.lab.style.top = (ly + (1 - a) * 18) + 'px';
    } else { show(Ly.lab, false); show(Ly.spot, false); }

    show(Ly.cur, false);
    (s.cursor || []).forEach(function(tr){
      if (lt < tr[0][0] || lt > tr[tr.length-1][0]) return;
      var jj = 0; while (jj < tr.length - 1 && tr[jj+1][0] <= lt) jj++;
      var a1 = tr[jj], b1 = tr[jj+1] || a1, p = b1 === a1 ? 0 : ease((lt - a1[0]) / (b1[0] - a1[0]));
      var dx = b1[1] - a1[1], dy = b1[2] - a1[2], dist = Math.hypot(dx, dy), bow = (a1[3] && b1[3]) ? 0 : Math.sin(Math.PI * p) * Math.min(60, dist * 0.08);
      var x = a1[1] + dx * p + (dist ? -dy / dist * bow : 0), y = a1[2] + dy * p + (dist ? dx / dist * bow : 0);
      var pressed = (a1[3] && b1[3]) || (s.clicks || []).some(function(ct){ return Math.abs(lt - ct) < 0.09; });
      var vis = ease(Math.min((lt - tr[0][0]) / .3, (tr[tr.length-1][0] - lt) / .3));
      var sp = toS(c, x, y);
      show(Ly.cur, true); Ly.cur.style.opacity = vis;
      Ly.cur.style.transform = 'translate(' + (sp[0] - 4) + 'px,' + (sp[1] - 4) + 'px) scale(' + (pressed ? 0.86 : 1) + ')';
    });
    var used = 0; show(Ly.rips[0], false); show(Ly.rips[1], false);
    (s.clicks || []).forEach(function(ct){
      var d = lt - ct; if (d < 0 || d > 0.5 || used > 1) return;
      var tr = (s.cursor || []).filter(function(tr){ return ct >= tr[0][0] && ct <= tr[tr.length-1][0]; })[0]; if (!tr) return;
      var jj = 0; while (jj < tr.length - 1 && tr[jj+1][0] <= ct) jj++;
      var a1 = tr[jj], b1 = tr[jj+1] || a1, p = b1 === a1 ? 0 : ease((ct - a1[0]) / (b1[0] - a1[0]));
      var sp = toS(c, a1[1] + (b1[1]-a1[1])*p, a1[2] + (b1[2]-a1[2])*p);
      var rad = 10 + 44 * ease(d / 0.5), el = Ly.rips[used++];
      show(el, true); el.style.opacity = 1 - d / 0.5;
      el.style.left = (sp[0] - rad) + 'px'; el.style.top = (sp[1] - rad) + 'px'; el.style.width = el.style.height = rad*2 + 'px';
    });

    Ly.chB.textContent = s.chap[0]; Ly.chT.textContent = s.chap[1];
  }

  function render(tt){
    var on = S.filter(function(s){ return tt >= s.start && tt < s.start + s.dur; });
    var s1 = on[0] || S[S.length-1], s2 = on[1];
    paint(A, s1, Math.min(tt - s1.start, s1.dur), 1);
    if (s2) paint(B, s2, tt - s2.start, ease((tt - s2.start) / XF)); else B.L.style.visibility = 'hidden';
    // chapter tag shouldn't double up while two scenes dissolve
    show(A.ch, !(s2 && ease((tt - s2.start) / XF) > 0.5));
  }

  // ---------- scroll ----------
  var track = root.querySelector('.wk-track'), sticky = root.querySelector('.wk-sticky'), frame = root.querySelector('.wk-frame');
  var fill = root.querySelector('.wk-fill'), timeEl = root.querySelector('.wk-time'), chapsEl = root.querySelector('.wk-chaps');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  track.style.height = 'calc(100vh + ' + Math.round(TOTAL * PX_PER_SEC) + 'px)';

  function fit(){ stage.style.transform = 'scale(' + (frame.clientWidth / FW) + ')'; }
  if (window.ResizeObserver) new ResizeObserver(fit).observe(frame); else window.addEventListener('resize', fit);
  fit();

  function range(){ return track.offsetHeight - sticky.offsetHeight; }
  // scroll position at which the stage sticks (track top minus the sticky offset under the site bar)
  function top(){ return track.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(sticky).top) || 0); }
  function scrollTime(){ var rg = range(); return rg > 0 ? clamp((window.scrollY - top()) / rg, 0, 1) * TOTAL : 0; }

  // For pages that step through the walkthrough (story.html): one stop per label, held once the
  // label is fully in (or once its follow-up click lands), as scroll positions. A stop never lands
  // mid-typing: inside a run of quick frame changes it moves to just after the run's last frame.
  function settle(s, lt){
    var f = s.frames.map(function(q){ return q[0]; }), RUN = 0.2, i = 0;
    while (i < f.length - 1 && f[i + 1] <= lt) i++;
    // only while the run is still going (or just ended), not anywhere after a finished run such as a rail glide
    var inRun = (i + 1 < f.length && f[i + 1] - f[i] < RUN) || (i > 0 && f[i] - f[i - 1] < RUN && lt - f[i] < RUN);
    if (!inRun) return lt;
    while (i + 1 < f.length && f[i + 1] - f[i] < RUN) i++;
    return Math.min(s.dur - XF, f[i] + 0.15);
  }
  window.PRISM_WALK = {
    labels: S.reduce(function(out, s){
      return out.concat(s.labels.map(function(l){
        var lt = Math.min(l[1] - 0.2, Math.max(l[0] + 0.7, l[5] != null ? l[5] + 0.3 : 0));
        return { title:l[2], time:s.start + settle(s, lt) };
      }));
    }, []),
    stops: function(){ return this.labels.map(function(l){ return Math.round(top() + l.time / TOTAL * range()); }); }
  };

  // chapter buttons on the progress rail
  S.forEach(function(s){
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'wk-chapbtn';
    b.style.left = (s.start / TOTAL * 100) + '%';
    b.innerHTML = '<b>' + s.chap[0] + '</b><span>' + s.chap[1] + '</span>';
    b.setAttribute('aria-label', 'Go to ' + s.chap[1]); b.title = s.chap[1];
    b.addEventListener('click', function(){
      var at = s.start + (s === S[0] ? 0 : XF);
      window.scrollTo({ top: top() + at / TOTAL * range(), behavior: reduce ? 'auto' : 'smooth' });
    });
    chapsEl.appendChild(b);
  });
  var chapBtns = chapsEl.querySelectorAll('.wk-chapbtn');

  function fmt(x){ x = Math.max(0, x); return Math.floor(x / 60) + ':' + String(Math.floor(x % 60)).padStart(2, '0'); }
  var shown = scrollTime(), last = 0, raf = 0;
  function frameTick(now){
    raf = 0;
    var target = scrollTime(), dt = last ? Math.min(0.1, (now - last) / 1000) : 0.016; last = now;
    // follow the scroll with a little lag, so wheel steps glide instead of jumping
    shown = reduce ? target : shown + (target - shown) * (1 - Math.exp(-dt * 14));
    if (Math.abs(target - shown) < 0.002) shown = target;
    render(shown);
    fill.style.width = (shown / TOTAL * 100) + '%';
    timeEl.textContent = fmt(shown) + ' / ' + fmt(TOTAL);
    var active = 0; S.forEach(function(s, i){ if (shown >= s.start + (i ? XF / 2 : 0)) active = i; });
    chapBtns.forEach(function(b, i){ b.classList.toggle('on', i === active); });
    if (shown !== target) raf = requestAnimationFrame(frameTick); else last = 0;
  }
  function kick(){ if (!raf) raf = requestAnimationFrame(frameTick); }
  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener('resize', kick);

  // preload in play order so the first scenes are ready first
  S.forEach(function(s){ C[s.clip].frames.forEach(function(f){ var im = img(f); im.onload = kick; }); });
  root.querySelector('.wk-total').textContent = Math.round(TOTAL) + ' seconds';
  kick();
})();
