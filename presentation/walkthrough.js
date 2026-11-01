/* PRISM walkthrough, driven by scroll.
 * The page scrolls through a tall track; a sticky 16:9 stage shows the moment at that scroll
 * position. Stop scrolling and it holds still, so a presenter can talk over any moment.
 * The stage is drawn live (recorded screens + camera, cursor, spotlight and labels), so it stays
 * sharp at any size. Scenes and timing match screen record/prism-walkthrough-v4.mp4.
 * Needs media/walkthrough/clips.js (window.PRISM_WALK_CLIPS) loaded first.
 */
(function(){
  'use strict';
  var root = document.querySelector('[data-walkthrough]');
  if (!root || !window.PRISM_WALK_CLIPS) return;
  var IMG_DIR = 'media/walkthrough/';
  var PX_PER_SEC = 150;                       // scroll distance per second of animation

  var FW = 1920, FH = 1080, PW = 1600, PH = 900, ZMIN = FW / PW;   // full view fills the stage
  var F = { x:0, y:0, w:PW, h:PH };
  function R(x,y,w,h){ return { x:x, y:y, w:w, h:h }; }
  var C = window.PRISM_WALK_CLIPS.clips;
  function r(a){ return a && R(a[0], a[1], a[2], Math.min(a[3], PH - a[1] - 4)); }
  function mid(a){ return [a[0] + a[2]/2, a[1] + a[3]/2]; }

  // ---------- scenes (times in seconds within each scene) ----------
  var S = [];
  var P = r(C.studio.para), SG = r(C.studio.sug), AP = mid(C.studio.apply), TH = mid(C.studio.thumb);
  var RP = R(120, 330, 560, 190), RS = R(1190, 300, 360, 320);
  S.push({ clip:'studio', dur:11.8, chap:[1,'Studio'],
    frames:[[0,0],[1.6,1,1],[7.6,2,1]],
    cam:[[0,F],[2.4,F],[3.3,RP],[5.0,RP],[5.8,RS],[8.2,RS],[9.0,RP],[10.6,RP],[11.4,F]],
    cursor:[[[0.2,760,820],[1.2,TH[0],TH[1]],[1.6,TH[0],TH[1]],[2.2,TH[0]+120,TH[1]+80]],
            [[6.0,1330,640],[7.1,AP[0],AP[1]],[7.8,AP[0],AP[1]],[8.2,AP[0]+60,AP[1]+40]]],
    clicks:[1.4,7.45],
    labels:[[3.4,5.0,'Plain-language problems are flagged','Medical words, vague words, long sentences',P],
            [5.9,8.2,'A suggested rewrite','With the guideline it comes from',SG,6.6],
            [9.1,10.6,'Applied in your text','Undo any time, or in History',P]] });

  var CCI = C.fw.cci, BTN = mid(C.fw.btn);
  S.push({ clip:'fw', dur:7.4, chap:[2,'Frameworks'],
    frames:[[0,0],[1.45,1,1],[4.75,2,1]],
    cam:[[0,F],[1.8,F],[2.7,R(800,125,790,430)],[3.9,R(800,125,790,430)],[4.4,R(800,380,790,400)],[6.2,R(800,380,790,400)],[7.0,F]],
    cursor:[[[0.2,1100,520],[1.1,BTN[0]+180,BTN[1]],[1.5,BTN[0]+180,BTN[1]],[2.0,BTN[0]+120,BTN[1]+120]],
            [[3.6,1250,480],[4.4,CCI[0]+22,CCI[1]+22],[4.9,CCI[0]+22,CCI[1]+22],[5.4,CCI[0]+90,CCI[1]+60]]],
    clicks:[1.3,4.6],
    labels:[[2.8,4.0,'11 published frameworks','Each linked to its original source',R(808,132,772,410)],
            [4.8,6.2,'Tick one to add its checks','CCI: CDC Clear Communication Index',r(CCI)]] });

  var CVD = C.poster.cvd.map(mid), ART = r(C.poster.art);
  S.push({ clip:'poster', dur:8.4, chap:[3,'Posters and images'],
    frames:[[0,0],[3.35,1,1],[5.45,2,1]],
    cam:[[0,F],[1.4,F],[2.3,R(15,180,1160,560)],[7.2,R(15,180,1160,560)],[8.0,F]],
    cursor:[[[2.4,1150,800],[3.05,CVD[1][0],CVD[1][1]],[3.4,CVD[1][0],CVD[1][1]],[4.7,CVD[1][0],CVD[1][1]],[5.15,CVD[4][0],CVD[4][1]],[5.6,CVD[4][0],CVD[4][1]],[6.0,CVD[4][0]+80,CVD[4][1]+60]]],
    clicks:[3.2,5.3],
    labels:[[2.4,5.2,'See it through colour blindness','The poster as a reader with deuteranopia sees it',ART],
            [5.4,7.2,'Or as a greyscale print','Check it still works without colour',ART]] });

  var MB = mid(C.plan.modeBtn), IN = C.plan.input;
  var planFrames = [[0,0],[1.15,1,1]]; for (var k = 2; k <= 17; k++) planFrames.push([3.6 + (k-2)*0.12, k]); planFrames.push([5.7,18]);
  S.push({ clip:'plan', dur:7.6, chap:[4,'Plan from an idea'],
    frames:planFrames,
    cam:[[0,F],[2.0,F],[2.9,R(250,290,790,220)],[6.5,R(250,290,790,220)],[7.3,F]],
    cursor:[[[0.2,700,520],[0.85,MB[0],MB[1]],[1.2,MB[0],MB[1]],[1.6,MB[0]+60,MB[1]+90]],
            [[2.9,820,560],[3.3,IN[0]+40,IN[1]+20],[3.5,IN[0]+40,IN[1]+20],[3.8,IN[0]+30,IN[1]+70]]],
    clicks:[1.0,3.38],
    labels:[[3.0,6.5,'Start with the one main message','Each stage lists the checks that apply',r(IN)]] });

  // ending: continuous editing, flags clearing as words are rewritten
  var E = C.edit, selAt = new Map(E.edits.map(function(e){ return [e.at, e.sel]; }));
  var editFrames = [[0,0]], editCursor = [[1.6,620,640]], editClicks = [], t = 2.3;
  for (var j = 1; j < E.frames.length; j++) {
    editFrames.push([t, j]);
    if (selAt.has(j)) { var se = selAt.get(j), m = [se[0]+se[2]/2, se[1]+se[3]/2];
      editCursor.push([t - 0.4, m[0], m[1]]); editCursor.push([t + 0.15, m[0], m[1]]); editCursor.push([t + 0.45, m[0] + 30, m[1] + 46]);
      editClicks.push(t - 0.2, t - 0.06); t += 0.6; }
    else t += (selAt.has(j + 1) || j === E.frames.length - 1) ? 0.45 : 0.11;
  }
  var ED = R(140, 335, 1040, 180), EG = r(E.grade);
  S.push({ clip:'edit', dur:t + 1.0, chap:[5,'Edit and recheck'], last:true,
    frames:editFrames,
    cam:[[0,F],[1.0,F],[1.9,ED],[t + 2,ED]],
    cursor:[editCursor], clicks:editClicks,
    labels:[[2.0,t*0.55,'Edit right in the page','Flags clear as you rewrite',r(E.para)],
            [t*0.55+0.2,t + 1.0,'Reading grade updates as you type','Every check reruns on each change',EG]] });

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
  [['studio',1.7,0.5],['poster',0.3,0.8],['plan',1.3,0.4],['edit',0.2,0.4]].forEach(function(a){ stretch(byClip(a[0]), a[1], -a[2]); });
  S.forEach(function(s){
    s.labels.forEach(function(l){ var d = l[1] - l[0]; if (d < MIN_LABEL) stretch(s, l[5] != null ? l[5] : l[1] - 0.4, MIN_LABEL - d); });
  });
  var XF = 0.8, st = 0;
  S.forEach(function(s){ s.start = st; st += s.dur - XF; });
  var TOTAL = st + XF;

  // ---------- drawing ----------
  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }
  function ease(x){ x = clamp(x, 0, 1); return x*x*x*(x*(x*6 - 15) + 10); }
  function zoomFor(q){ return q === F ? ZMIN : clamp(Math.min(FW / (q.w * 1.12), FH / (q.h * 1.3)), ZMIN, 2.6); }
  function smoothCam(kk){
    var out = kk.map(function(x){ return x.slice(); }), EXT = 0.35;
    for (var i = 0; i < out.length - 1; i++) {
      if (out[i][1] === out[i+1][1]) continue;
      var prevHold = i > 0 && out[i-1][1] === out[i][1] ? out[i][0] - out[i-1][0] : 0;
      var nextHold = i + 2 < out.length && out[i+1][1] === out[i+2][1] ? out[i+2][0] - out[i+1][0] : 0;
      out[i][0] -= Math.min(EXT, prevHold * 0.4); out[i+1][0] += Math.min(EXT, nextHold * 0.4);
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
    if (!im) { im = cache[file] = new Image(); im.decoding = 'async'; im.src = IMG_DIR + file; }
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
  function setSrc(el, file){ if (el.dataset.f !== file) { el.src = IMG_DIR + file; el.dataset.f = file; } }

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
        Ly.spot.style.left = (p1[0] - pad) + 'px'; Ly.spot.style.top = (p1[1] - pad) + 'px';
        Ly.spot.style.width = (p2[0] - p1[0] + pad*2) + 'px'; Ly.spot.style.height = (p2[1] - p1[1] + pad*2) + 'px';
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

  // chapter buttons on the progress rail
  S.forEach(function(s){
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'wk-chapbtn';
    b.style.left = (s.start / TOTAL * 100) + '%';
    b.innerHTML = '<b>' + s.chap[0] + '</b><span>' + s.chap[1] + '</span>';
    b.setAttribute('aria-label', 'Go to ' + s.chap[1]);
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
    shown = reduce ? target : shown + (target - shown) * (1 - Math.exp(-dt * 9));
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
