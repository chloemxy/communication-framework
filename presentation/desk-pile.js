/* Slide 2: Sonia's UHN posters and handouts drift down onto the empty desk as soon as the slide
 * arrives, one after another. Each is soft paper: it falls faster and faster, sways side to side
 * facing the room, curls a little, and tips flat just before it lands on the pile. On the click the
 * Stroke teach-back poster lifts off the pile to face the room and reactions pop around it.
 *
 * Everything is in the drawing's own pixels (1456 x 816, media/bg/empty-desk.jpg). The sheets are
 * drawn on a canvas as a bendable mesh: each grid cell is two triangles of the poster image, so a
 * sheet can curve. A landed sheet lies exactly in the desk top's perspective. The fall runs on its own
 * clock from the slide's arrival; the lift and the reactions follow the slide's --t (.5 once it has arrived,
 * 1 after the click, which changes the title), so going back plays them in reverse. Images: media/bg/uhn/ (made by
 * scripts/uhn-posters.py). */
(function(){
  'use strict';
  var scene = document.getElementById('question'), art = scene && scene.querySelector('.desk-art');
  var cv = scene && scene.querySelector('.desk-sheets');
  if (!art || !cv) return;
  var ctx = cv.getContext('2d');
  var W = 1456, H = 816, DIR = 'media/bg/uhn/', V = '?v=20261117a';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HX = 815, HY = 265;   // the lifted poster's centre: straight above the middle of the desk, well clear of it
  var NX = 6, NY = 8, EDGE = 2.2;   // EDGE: a sheet's thickness in the pile

  // the desk top as drawn: back edge y 517.5 from x 592 to 1017, front edge y 542.5 from x 567 to 1062.
  // A point on it is (X across, Y deep) in inches on a 60 x 30 in top; lift raises it (the pile).
  function desk(X, Y, lift){
    var u = X / 60, v = Y / 30, L = 592 - 25 * v, R = 1017 + 45 * v;
    return [L + u * (R - L), 517.5 + 25 * v - lift];
  }
  var seed = 7; function rnd(){ seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function seg(t, a, b){ return t <= a ? 0 : t >= b ? 1 : (t - a) / (b - a); }
  function smooth(x){ return x * x * (3 - 2 * x); }
  function easeOut(x){ return 1 - Math.pow(1 - x, 3); }

  var layer = scene.querySelector('.desk-pops'), sheets = [], hero = null, pops = [].slice.call(scene.querySelectorAll('.pop-r'));

  // mesh points of a sheet in the air: w x h image px, centre (cx, cy), turned (yaw, pitch, roll),
  // curled across (bx) and along (by)
  function airMesh(s, cx, cy, w, yaw, pitch, roll, bx, by){
    var h = w * s.h / s.w, P = [];
    for (var j = 0; j <= NY; j++) for (var i = 0; i <= NX; i++) {
      var u = i / NX - .5, v = j / NY - .5, x = u * w, y = v * h;
      var z = (bx * (u * u * 4 - .33) + by * (v * v * 4 - .33)) * w * .35, c, n, t;
      c = Math.cos(roll); n = Math.sin(roll); t = x * c - y * n; y = x * n + y * c; x = t;
      c = Math.cos(yaw); n = Math.sin(yaw); t = x * c + z * n; z = -x * n + z * c; x = t;
      c = Math.cos(pitch); n = Math.sin(pitch); t = y * c - z * n; z = y * n + z * c; y = t;
      var f = 1200 / (1200 + z);
      P.push([cx + x * f, cy + y * f, z]);
    }
    return P;
  }
  // mesh points of a sheet lying on the desk (its size in inches, turned by rot, raised by lift)
  function landMesh(s){
    var P = [], c = Math.cos(s.rot), n = Math.sin(s.rot);
    for (var j = 0; j <= NY; j++) for (var i = 0; i <= NX; i++) {
      var x = (i / NX - .5) * s.iw, y = (j / NY - .5) * s.id;
      var p = desk(s.X + x * c - y * n, s.Y + x * n + y * c, s.lift);
      P.push([p[0], p[1], 0]);
    }
    return P;
  }
  function mix(A, B, k){ return A.map(function(p, i){ return [p[0] + (B[i][0] - p[0]) * k, p[1] + (B[i][1] - p[1]) * k, p[2] + (B[i][2] - p[2]) * k]; }); }

  // one triangle of the image (s0 s1 s2, image px) drawn onto the screen triangle (d0 d1 d2)
  function tri(img, s0, s1, s2, d0, d1, d2){
    var x0 = s0[0], y0 = s0[1], x1 = s1[0] - x0, y1 = s1[1] - y0, x2 = s2[0] - x0, y2 = s2[1] - y0;
    var det = x1 * y2 - x2 * y1; if (!det) return;
    var u1 = d1[0] - d0[0], v1 = d1[1] - d0[1], u2 = d2[0] - d0[0], v2 = d2[1] - d0[1];
    var a = (u1 * y2 - u2 * y1) / det, b = (v1 * y2 - v2 * y1) / det, c = (u2 * x1 - u1 * x2) / det, d = (v2 * x1 - v1 * x2) / det;
    // grow the clip a hair, so the seams between triangles don't show
    var mx = (d0[0] + d1[0] + d2[0]) / 3, my = (d0[1] + d1[1] + d2[1]) / 3;
    function out(p){ var dx = p[0] - mx, dy = p[1] - my, l = Math.hypot(dx, dy) || 1; return [p[0] + dx / l * .6, p[1] + dy / l * .6]; }
    var e0 = out(d0), e1 = out(d1), e2 = out(d2);
    ctx.save();
    ctx.beginPath(); ctx.moveTo(e0[0], e0[1]); ctx.lineTo(e1[0], e1[1]); ctx.lineTo(e2[0], e2[1]); ctx.closePath(); ctx.clip();
    ctx.transform(a, b, c, d, d0[0] - a * x0 - c * y0, d0[1] - b * x0 - d * y0);
    ctx.drawImage(img, 0, 0);
    ctx.restore();
  }
  function drawMesh(s, P, flat){
    var iw = s.img.naturalWidth, ih = s.img.naturalHeight;
    function q(i, j){ return P[j * (NX + 1) + i]; }
    function src(i, j){ return [i / NX * iw, j / NY * ih]; }
    // a soft shadow under it: tight when it lies on the pile, wide and faint in the air
    ctx.save();
    ctx.shadowColor = flat ? 'rgba(35,30,15,.5)' : 'rgba(0,30,60,.25)';
    ctx.shadowBlur = flat ? 5 : 14; ctx.shadowOffsetY = flat ? 2.5 : 10; ctx.shadowOffsetX = flat ? 1 : 0;
    ctx.fillStyle = '#fff'; ctx.beginPath();
    var E = [];
    for (var i = 0; i <= NX; i++) E.push(q(i, 0));
    for (var j = 1; j <= NY; j++) E.push(q(NX, j));
    for (i = NX - 1; i >= 0; i--) E.push(q(i, NY));
    for (j = NY - 1; j > 0; j--) E.push(q(0, j));
    E.forEach(function(p, k){ k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); });
    ctx.closePath(); ctx.fill(); ctx.restore();
    for (j = 0; j < NY; j++) for (i = 0; i < NX; i++) {
      var a = q(i, j), b = q(i + 1, j), c = q(i + 1, j + 1), d = q(i, j + 1);
      // a cell turned away from the room shows the sheet's plain back, not a mirrored poster
      if ((b[0] - a[0]) * (d[1] - a[1]) - (b[1] - a[1]) * (d[0] - a[0]) < 0) {
        ctx.fillStyle = '#ECE6D6'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(d[0], d[1]); ctx.closePath(); ctx.fill();
      } else {
        tri(s.img, src(i, j), src(i + 1, j), src(i + 1, j + 1), a, b, c);
        tri(s.img, src(i, j), src(i + 1, j + 1), src(i, j + 1), a, c, d);
      }
      // the curl darkens the faces turned away from the room a little
      if (!flat) {
        var nz = (b[0] - a[0]) * (d[1] - a[1]) - (b[1] - a[1]) * (d[0] - a[0]);
        var area = Math.hypot(b[0] - a[0], b[1] - a[1]) * Math.hypot(d[0] - a[0], d[1] - a[1]) || 1;
        var dark = .28 * (1 - Math.min(1, Math.abs(nz) / area));
        if (dark > .02) { ctx.fillStyle = 'rgba(0,20,40,' + dark.toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(d[0], d[1]); ctx.closePath(); ctx.fill(); }
      }
    }
    if (flat) {
      // the paper's thickness: the edges facing the room show as a pale band with a dark line under it
      // (the outline runs clockwise, so an edge faces the room when its outward normal points down)
      for (var e = 0; e < E.length; e++) {
        var p0 = E[e], p1 = E[(e + 1) % E.length], dx = p1[0] - p0[0], dy = p1[1] - p0[1];
        if (-dx <= 0) continue;
        ctx.fillStyle = '#EFE8D2'; ctx.beginPath();
        ctx.moveTo(p0[0], p0[1]); ctx.lineTo(p1[0], p1[1]); ctx.lineTo(p1[0], p1[1] + EDGE); ctx.lineTo(p0[0], p0[1] + EDGE); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = 'rgba(40,38,28,.55)'; ctx.lineWidth = .7; ctx.beginPath();
        ctx.moveTo(p0[0], p0[1] + EDGE); ctx.lineTo(p1[0], p1[1] + EDGE); ctx.stroke();
      }
      // a thin ink outline, like the drawing's own lines
      ctx.strokeStyle = 'rgba(28,38,38,.6)'; ctx.lineWidth = .75; ctx.beginPath();
      E.forEach(function(p, k){ k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); });
      ctx.closePath(); ctx.stroke();
    }
  }

  var COPIES = 1;   // each poster falls once
  function build(list){
    var imgs = {}, posters = list.posters.filter(function(p){ return p.from.indexOf('Stroke') !== 0; });
    function img(file){ if (!imgs[file]) { imgs[file] = new Image(); imgs[file].src = DIR + file + V; } return imgs[file]; }
    var order = [];
    for (var c = 0; c < COPIES; c++) posters.forEach(function(p){ order.push(p); });
    // shuffle, so the copies don't fall in the same sequence twice
    for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), x = order[i]; order[i] = order[j]; order[j] = x; }
    // the Stroke teach-back poster comes last, so it lands on top of the pile and lifts off it
    order.push({ file: list.hero.file, w: list.hero.w, h: list.hero.h, hero: true });
    var start = 0;
    order.forEach(function(p, k){
      var portrait = p.h >= p.w;
      var s = { img: img(p.file), w: p.w, h: p.h, k: k, iw: portrait ? 11 : 15, id: portrait ? 15 : 11,
        X: 30 + (rnd() - .5) * 9, Y: 15 + (rnd() - .5) * 4.5, rot: (rnd() - .5) * 60 * Math.PI / 180,
        // they set off close together, a few at a time, so the whole fall is short
        ph: rnd() * 6.28, a: (start += k ? .05 + rnd() * .3 : 0),
        // every sheet falls in its own way: how long it takes, how wide and fast it sways, how much it
        // curls, how far it leans back and turns
        dur: 4.2 + rnd() * 1.8, amp: 35 + rnd() * 70, freq: 1.2 + rnd() * 1.3, spin: (rnd() - .5) * .9 };
      // about a third fall nearly flat, the way paper really falls, rocking and barely curled; the rest
      // fall more upright and curl. Each faces its own way: some turned to the side, a few their back
      // to the room (the plain back then shows).
      if (rnd() < .35) { s.lean = 1.05 + rnd() * .3; s.curl = rnd() * .15; s.turn = .25 + rnd() * .3; }
      else { s.lean = .05 + rnd() * .5; s.curl = .2 + rnd() * .55; s.turn = .1 + rnd() * .3; }
      s.face = (rnd() - .5) * 2.2 + (rnd() < .2 ? Math.PI : 0);
      sheets.push(s);
      if (p.hero) hero = s;
    });
    // the teach-back poster lands just after all the others
    var last = sheets.reduce(function(m, s){ return s === hero ? m : Math.max(m, s.a + s.dur); }, 0);
    hero.a = last + .25 - hero.dur;
    // the pile stacks in the order the sheets land, each a sheet's thickness higher than the last
    landOrder = sheets.filter(function(s){ return s !== hero; }).sort(function(p, q){ return (p.a + p.dur) - (q.a + q.dur); });
    landOrder.forEach(function(s, i){ s.lift = i * EDGE; });
    hero.lift = landOrder.length * EDGE;
    sheets.forEach(function(s){
      s.land = landMesh(s);
      // each drops from straight above the desk, anywhere across its width
      s.x0 = s.land[(NY / 2) * (NX + 1) + NX / 2][0] + (rnd() - .5) * 480;
    });
  }
  // a sheet in the air ft seconds after it set off (k: 0 at the top, 1 landed)
  // how far down a falling sheet is (0..1) at k (0..1 of its fall): it picks up speed over the first
  // 15%, drifts down at that steady pace, then slows over the last 35% and settles, never speeding up
  // at the end. Built once from that speed profile.
  var DROP = (function(){
    var n = 400, v = [], acc = [0], sum = 0;
    for (var i = 0; i < n; i++) {
      var k = (i + .5) / n, up = Math.min(1, k / .15), down = k > .65 ? 1 - .85 * smooth((k - .65) / .35) : 1;
      v.push(up * down);
    }
    v.forEach(function(x){ sum += x; acc.push(sum); });
    return acc.map(function(x){ return x / sum; });
  })();
  function drop(k){ var f = k * 400, i = Math.floor(f); return i >= 400 ? 1 : DROP[i] + (DROP[i + 1] - DROP[i]) * (f - i); }
  function airPose(s, k){
    var land = s.land[(NY / 2) * (NX + 1) + NX / 2], tt = k * s.dur;
    var y = -150 - top + (land[1] + 150 + top) * drop(k);   // from above the slide's top edge
    var sw = Math.sin(tt * s.freq + s.ph), cw = Math.cos(tt * s.freq + s.ph);
    var x = s.x0 + (land[0] - s.x0) * smooth(k) + sw * s.amp * (1 - k);
    return airMesh(s, x, y, 120, s.face * (1 - smooth(k)) + sw * s.turn * 1.6, s.lean * (1 - .3 * k) + .15 * cw, sw * s.turn + s.spin * (1 - k), s.curl + .25 * cw, .15 * sw);
  }
  function landedAt(){ return sheets.reduce(function(m, s){ return Math.max(m, s.a + s.dur); }, 0); }
  // sheets that have landed are drawn once onto a cached pile, in the order they land, so a big
  // pile doesn't slow the animation down
  var landOrder = [], pc = document.createElement('canvas'), pctx = pc.getContext('2d'), cached = 0;
  function resetPile(){ cached = 0; pctx.save(); pctx.setTransform(1, 0, 0, 1, 0, 0); pctx.clearRect(0, 0, pc.width, pc.height); pctx.restore(); }
  function draw(ft, t){
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); ctx.restore();
    // once the last sheet has landed, the poster lifts off the pile on its own, then the reactions pop
    var after = landedAt() + .5, lifting = smooth(seg(ft, after, after + 1.3));
    // after the click the desk scene fades into the blue and the poster glides to the right, larger
    var gone = since <= 0 ? 0 : smooth(seg(since, .1, 1.2)), move = since <= 0 ? 0 : smooth(seg(since, .2, 1.7));
    art.style.opacity = (1 - gone).toFixed(3);
    ctx.globalAlpha = 1 - gone;
    // a soft contact shadow on the desk under the pile, darker as the pile grows
    var landed = sheets.filter(function(s){ return reduce || ft >= s.a + s.dur * .9; }).length;
    if (landed) {
      var c = desk(30, 16.5, 0), g = ctx.createRadialGradient(c[0], c[1], 0, c[0], c[1], 115);
      g.addColorStop(0, 'rgba(45,35,15,' + (.12 + .3 * landed / sheets.length).toFixed(3) + ')'); g.addColorStop(1, 'rgba(45,35,15,0)');
      ctx.save(); ctx.translate(c[0], c[1]); ctx.scale(1, .16); ctx.translate(-c[0], -c[1]);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(c[0], c[1], 115, 0, 6.2832); ctx.fill(); ctx.restore();
    }
    while (cached < landOrder.length && (reduce || ft >= landOrder[cached].a + landOrder[cached].dur)) {
      var keep = ctx; ctx = pctx; drawMesh(landOrder[cached], landOrder[cached].land, true); ctx = keep; cached++;
    }
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(pc, 0, 0); ctx.restore();
    sheets.forEach(function(s){
      var k = reduce ? 1 : seg(ft, s.a, s.a + s.dur);
      if (k <= 0) return;
      if (s === hero) { if (lifting > 0) return; if (k >= 1) { drawMesh(s, s.land, true); return; } }
      else if (k >= 1) return;   // already on the cached pile
      // as it slows down near the desk, the sheet gently tips flat onto its spot on the pile
      var m = smooth(seg(k, .62, 1));
      drawMesh(s, m > 0 ? mix(airPose(s, k), s.land, m) : airPose(s, k), false);
    });
    ctx.globalAlpha = 1;
    if (hero && lifting > 0) {
      var e = smooth(lifting), up = airMesh(hero, HX, HY, 220, 0, 0, 0, .3 * Math.sin(Math.PI * e), 0);
      if (move > 0) {
        var L = layout();
        up = mix(up, airMesh(hero, L.hx, L.hy, L.hw, 0, 0, 0, .22 * Math.sin(Math.PI * move), 0), move);
      }
      drawMesh(hero, mix(hero.land, up, e), false);
    }
    // each reaction springs out in turn (an ease with a little overshoot)
    pops.forEach(function(el, i){
      var p = seg(ft, after + 1 + i * .14, after + 1.45 + i * .14), c = 1.70158, e = p ? 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2) : 0;
      // on the click they fade away
      el.style.setProperty('--p', (p * (1 - seg(t, .5, .58))).toFixed(3)); el.style.setProperty('--e', e.toFixed(3));
    });
  }

  // After the click ("Loved it" isn't "understood it"): the reactions fade, the desk, chair and pile fade
  // into the blue while the teach-back poster glides to the right half, larger; a gust of wind sweeps past
  // with a few leaves tumbling down, then a cricket hops in from the left and stands beside the poster. It runs on its own clock from
  // the click; going back before the click hides it all, and coming back to the slide shows it done.
  var fx = scene.querySelector('.desk-fx'), cricket = scene.querySelector('.desk-cricket');
  var winds = fx ? [].slice.call(fx.querySelectorAll('.wind path')) : [], leaves = [], NSV = 'http://www.w3.org/2000/svg';
  if (fx) [[610, 120, '#C9A227', 0], [580, 230, '#B5651D', .35], [630, 330, '#9C8A2A', .7], [600, 170, '#C47A2C', 1.05], [650, 280, '#A8892F', 1.4]]
    .forEach(function(l){
      var g = document.createElementNS(NSV, 'g');
      g.innerHTML = '<path d="M0 -13 C11 -7 11 7 0 15 C-11 7 -11 -7 0 -13 Z" fill="' + l[2] + '" stroke="#1d2b2a" stroke-width="1.6"/><path d="M0 -11 L0 13" stroke="#1d2b2a" stroke-width="1.1"/>';
      g.style.opacity = 0; fx.querySelector('.leaves').appendChild(g);
      leaves.push({ g: g, x: l[0], y: l[1], d: l[3] });
    });
  // the click's layout, in the drawing's pixels: the poster alone on the right (74% of the slide's height,
  // its middle at 69% across), and the cricket standing on the blue just left of the poster's lower
  // corner, facing it, its feet level with the poster's bottom edge
  function layout(){
    var w = scene.clientWidth, h = scene.clientHeight, ph = .74 * h, pw = ph * (hero ? hero.w / hero.h : .61);
    var px = .69 * w - pw / 2, py = (h - ph) / 2 - .018 * h, cw = .165 * w;   // small enough to clear the centred text
    return { hx: (.69 * w - ox) / sc, hy: (py + ph / 2 - oy) / sc, hw: pw / sc,
      cx: (px - cw / 2 - .006 * w - ox) / sc, fy: (py + ph + .016 * h - oy) / sc, cw: cw / sc,
      x0: (-cw * .6 - ox) / sc, hop: .07 * h / sc };
  }
  // it hops in from the left edge in two hops, nose up as it rises and down as it lands, then stays,
  // breathing; the drawing leans 3.6deg nose-down so its hind, middle and front feet all stand on the floor
  var LEAN = 3.6;
  function cricketAt(tt, L){
    var mid = L.x0 + (L.cx - L.x0) * .55, hops = [[3.9, 4.4, L.x0, mid], [4.6, 5.1, mid, L.cx]];
    var x = L.x0, y = L.fy, tilt = 0, sq = 0, i, h, r;
    for (i = 0; i < hops.length; i++) {
      h = hops[i];
      if (tt >= h[1]) { x = h[3]; if (tt < h[1] + .15) sq = Math.sin(Math.PI * (tt - h[1]) / .15); continue; }
      if (tt > h[0]) {
        r = (tt - h[0]) / (h[1] - h[0]);
        x = h[2] + (h[3] - h[2]) * smooth(r); y = L.fy - Math.sin(Math.PI * r) * L.hop;
        tilt = -Math.cos(Math.PI * r) * 18;
      }
      break;
    }
    return [x, y, tilt, sq];
  }
  function after(tt){
    if (!fx) return;
    winds.forEach(function(p, i){
      var L = p._L || (p._L = p.getTotalLength()), k = (tt - .45 - i * .25) / 1.6;
      p.style.strokeDasharray = (L * .35) + ' ' + (L * 2);
      p.style.strokeDashoffset = L * .35 - k * L * 1.1;
      p.style.opacity = k > 0 && k < 1.6 ? (Math.min(1, k * 3) * Math.min(1, Math.max(0, 1 - (k - 1) / .6)) * .9).toFixed(3) : 0;
    });
    leaves.forEach(function(l){
      var k = (tt - .6 - l.d) / 2.6;
      if (k <= 0 || k >= 1.4) { l.g.style.opacity = 0; return; }
      l.g.style.opacity = k > 1 ? (1 - (k - 1) / .4).toFixed(3) : 1;
      var x = l.x + k * 700, y = l.y + k * k * 230 + Math.sin(k * 9 + l.d * 3) * 18;
      l.g.setAttribute('transform', 'translate(' + x + ',' + y + ') rotate(' + (k * 540 + l.d * 90) + ') scale(' + (2 * (1 - .3 * Math.abs(Math.sin(k * 7)))) + ',2)');   // twice the drawn size, so they read from afar
    });
    var L = layout(), c = cricketAt(tt, L), cw = L.cw, ch = cw * (cricket.naturalHeight || 262) / (cricket.naturalWidth || 354);
    // a slow breath once it has landed: the body swells a touch, from the feet up
    var breathe = tt > 5.3 ? .018 * Math.sin((tt - 5.3) * 2 * Math.PI / 2.6) : 0;
    var sx = 1 + .1 * c[3], sy = 1 - .15 * c[3] + breathe;
    cricket.style.width = cw + 'px';
    cricket.style.opacity = tt > 3.85 ? 1 : 0;
    cricket.style.transform = 'translate(' + (c[0] - cw / 2) + 'px,' + (c[1] - ch) + 'px) rotate(' + (LEAN + c[2]) + 'deg) scale(' + sx + ',' + sy + ')';
  }

  // the drawing sits a little smaller than the slide, anchored to the bottom right, so the text on the
  // left stays clear of the chair; its top and left edges fade into the slide's own blue (CSS)
  // zoomTo(z) can ease the whole scene in towards the desktop (z 0 to 1); the click no longer uses it
  // (the desk fades away instead), so it stays at 0.
  var sc = 1, ox = 0, oy = 0, top = 0, zs = 1, zx = 0, zy = 0, pr = 1, zoomNow = -1;
  var veil = scene.querySelector('.desk-veil');
  function fit(){
    var w = scene.clientWidth, h = scene.clientHeight;
    pr = Math.min(window.devicePixelRatio || 1, 2);
    sc = Math.max(w / W, h / H) * .8; ox = (w - W * sc) * .95; oy = h - H * sc; top = oy / sc;
    zs = h / (630 - 40); zx = w * .47 - (HX - 110) * zs; zy = -40 * zs;   // the tabletop's front edge lands at 85% down, above the footer
    cv.width = pc.width = Math.round(w * pr); cv.height = pc.height = Math.round(h * pr);
    zoomNow = -1; zoomTo(lastZoom);
  }
  var lastZoom = 0;
  function zoomTo(z){
    lastZoom = z;
    if (z === zoomNow) return;
    zoomNow = z;
    var S = sc + (zs - sc) * z, X = ox + (zx - ox) * z, Y = oy + (zy - oy) * z;
    art.style.transform = 'translate(' + X + 'px,' + Y + 'px) scale(' + S + ')';
    if (layer) layer.style.transform = art.style.transform;
    if (veil) veil.style.opacity = z;
    view = [pr * S, pr * X, pr * Y];
    applyView();
    resetPile();   // the framing changed, so the cached pile is drawn again
  }
  // the canvases' drawing transform; set again every frame, so the sheets can never end up drawn
  // unscaled in the corner if something resets a canvas
  var view = [1, 0, 0];
  function applyView(){
    ctx.setTransform(view[0], 0, 0, view[0], view[1], view[2]); pctx.setTransform(view[0], 0, 0, view[0], view[1], view[2]);
  }
  function readT(){ return parseFloat(scene.style.getPropertyValue('--t')) || 0; }
  var t0 = 0, tc = null, since = -1, raf = 0, was = false;
  function tick(now){
    // if the slide's size or the screen's pixel density changed without a resize event (browser zoom,
    // a move to another monitor, the slide first laid out), lay everything out again
    var r = Math.min(window.devicePixelRatio || 1, 2);
    if (Math.round(scene.clientWidth * r) !== cv.width || Math.round(scene.clientHeight * r) !== cv.height) fit();
    applyView();
    var t = readT(), ft = t > .5 ? 1e3 : (now - t0) / 1000;
    // the click's own clock starts when --t moves past .5, and stops when it comes back
    if (t > .5 && tc === null) tc = now;
    if (t <= .5) tc = null;
    since = reduce && tc !== null ? 99 : tc === null ? -1 : (now - tc) / 1000;
    draw(ft, t);
    after(since);
    raf = scene.classList.contains('on') ? requestAnimationFrame(tick) : 0;
  }
  function sync(){
    var on = scene.classList.contains('on');
    if (on && !was) {
      fit();
      // arriving going forward starts the fall; coming back, the pile is already there
      t0 = readT() >= .5 ? -1e9 : performance.now(); resetPile();
      tc = readT() > .5 ? -1e9 : null;
      if (!raf && sheets.length) raf = requestAnimationFrame(tick);
    }
    was = on;
  }
  new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
  addEventListener('resize', function(){ fit(); });
  fit();
  fetch(DIR + 'posters.json' + V).then(function(r){ return r.json(); }).then(function(j){
    build(j);
    was = false; sync();
  });
})();
