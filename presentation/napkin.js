/* The welcome slide's background: a napkin sketch of PRISM draws itself, stroke group by stroke
 * group, then a cursor glides in and clicks its "Open" button. Plays each time the slide comes on.
 * media/bg/napkin-blank.webp is the bare napkin, napkin-ink.png the ink alone (same size),
 * napkin-marks.png says which mark owns each ink pixel, and napkin-strokes.json lists the marks in
 * drawing order (boxes in image pixels). All four come from scripts/napkin-ink.py. */
(function(){
  'use strict';
  var slide = document.getElementById('top'), cv = slide && slide.querySelector('.napkin');
  if (!cv) return;
  var ctx = cv.getContext('2d'), DIR = 'media/bg/', V = '?v=20261104b';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // the slide's data-tone picks the grade; ?tone=cool or ?tone=warm overrides it, for comparing
  var tone = /[?&]tone=(warm|cool)/.exec(location.search); if (tone) slide.dataset.tone = tone[1];
  var blank = new Image(), ink = new Image(), owner = new Image(), data = null, t0 = 0, raf = 0, plan = [];
  var OPEN = null, CLICK = { glide:0.9, ripple:0.8, hold:0.6 };

  function load(im, src){ return new Promise(function(ok){ im.onload = ok; im.onerror = ok; im.src = DIR + src + V; }); }
  Promise.all([load(blank, 'napkin-blank.webp'), load(ink, 'napkin-ink.png'), load(owner, 'napkin-marks.png'),
    fetch(DIR + 'napkin-strokes.json' + V).then(function(r){ return r.json(); }).then(function(d){ data = d; })])
    .then(function(){ grade(); cut(); build(); size(); if (slide.classList.contains('on')) play(); else frame(1e9); });

  // the cool tone greys the photo and ink to sit with a cool deck; the yellow click stays yellow
  function grade(){
    if (slide.dataset.tone !== 'cool') return;
    [blank, ink].forEach(function(im, i){
      var c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight;
      var x = c.getContext('2d'); x.filter = 'grayscale(.92) brightness(1.05) contrast(.96)'; x.drawImage(im, 0, 0);
      if (i) ink = c; else blank = c;
    });
  }
  // give each mark its own cut-out of the ink, so revealing one never uncovers a neighbour
  function cut(){
    var o = document.createElement('canvas'); o.width = data.W; o.height = data.H;
    var ox = o.getContext('2d'); ox.drawImage(owner, 0, 0);
    data.marks.forEach(function(m){
      var c = document.createElement('canvas'); c.width = m.w; c.height = m.h;
      var x = c.getContext('2d'); x.drawImage(ink, m.x, m.y, m.w, m.h, 0, 0, m.w, m.h);
      var px = x.getImageData(0, 0, m.w, m.h), own = ox.getImageData(m.x, m.y, m.w, m.h).data;
      for (var i = 0; i < own.length; i += 4) if (own[i] !== m.id) px.data[i + 3] = 0;
      x.putImageData(px, 0, 0); m.img = c;
    });
  }
  // timeline: the two big frames trace their edges, then each smaller mark wipes in
  function build(){
    var t = 0.25;
    data.marks.forEach(function(m){
      var big = m.big, d = big ? 0.75 : Math.min(0.22, 0.05 + (m.w + m.h) / 2600);
      plan.push({ m:m, a:t, b:t + d, big:big });
      t += big ? 0.55 : d * 0.55;
      if (!OPEN && m.w > 90 && m.w < 140 && m.h > 40 && m.h < 70 && m.y > 560 && m.y < 660) OPEN = m;
    });
    plan.end = t + 0.3;
    plan.done = plan.end + CLICK.glide + CLICK.ripple + CLICK.hold;
  }
  var dpr = 1, sc = 1, ox = 0, oy = 0;
  function size(){
    dpr = Math.min(2, window.devicePixelRatio || 1);
    var w = cv.clientWidth, h = cv.clientHeight;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    // the photo covers the whole slide, anchored right so the napkin stays clear of most of the text
    sc = Math.max(w / data.W, h / data.H); ox = w - data.W * sc; oy = (h - data.H * sc) / 2;
  }
  function clamp(v){ return v < 0 ? 0 : v > 1 ? 1 : v; }
  function ease(k){ return 1 - Math.pow(1 - k, 2); }
  function inOut(k){ return k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; }
  // part of a mark's own ink: (u, v, w, h) in the mark's box
  function reveal(m, u, v, w, h){ if (w > 0 && h > 0) ctx.drawImage(m.img, u, v, w, h, m.x + u, m.y + v, w, h); }
  function cursor(x, y, down){
    var s = down ? 0.9 : 1;
    ctx.save(); ctx.translate(x, y); ctx.scale(1.6 * s, 1.6 * s);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 26); ctx.lineTo(6.5, 20); ctx.lineTo(11, 30);
    ctx.lineTo(15, 28); ctx.lineTo(10.5, 18.5); ctx.lineTo(19, 18.5); ctx.closePath();
    ctx.fillStyle = '#1E1A16'; ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 2; ctx.lineJoin = 'round';
    ctx.stroke(); ctx.fill(); ctx.restore();
  }
  function frame(t){
    ctx.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * ox, dpr * oy);
    ctx.drawImage(blank, 0, 0);
    plan.forEach(function(p){
      var k = ease(clamp((t - p.a) / (p.b - p.a))), m = p.m, w = m.w, h = m.h, B = 26;
      if (k <= 0) return;
      if (k >= 1) { reveal(m, 0, 0, w, h); return; }
      if (p.big) {            // trace the outline: top, right, bottom, left
        var e = k * 4;
        reveal(m, 0, 0, w * clamp(e), B);
        reveal(m, w - B, 0, B, h * clamp(e - 1));
        var b = clamp(e - 2); reveal(m, w * (1 - b), h - B, w * b, B);
        var l = clamp(e - 3); reveal(m, 0, h * (1 - l), B, h * l);
      } else if (w >= h) reveal(m, 0, 0, w * k, h);
      else reveal(m, 0, 0, w, h * k);
    });
    if (!OPEN) return;
    // the click: a cursor glides to Open and presses it; the button fills yellow and a ring spreads
    var cx = OPEN.x + OPEN.w / 2, cy = OPEN.y + OPEN.h / 2, c = t - plan.end;
    if (c <= 0) return;
    var g = inOut(clamp(c / CLICK.glide)), pressed = c >= CLICK.glide, r = clamp((c - CLICK.glide) / CLICK.ripple);
    if (pressed) {
      ctx.fillStyle = '#FFE066';
      ctx.beginPath(); ctx.ellipse(cx, cy, OPEN.w / 2 - 3, OPEN.h / 2 - 5, 0, 0, Math.PI * 2); ctx.fill();
      reveal(OPEN, 0, 0, OPEN.w, OPEN.h);
      if (r < 1) {
        ctx.strokeStyle = 'rgba(232,180,20,' + (1 - r) + ')'; ctx.lineWidth = 6;
        ctx.beginPath(); ctx.ellipse(cx, cy, OPEN.w / 2 + 90 * ease(r), OPEN.h / 2 + 70 * ease(r), 0, 0, Math.PI * 2); ctx.stroke();
      }
    }
    var sx = cx + 300, sy = cy + 220;
    cursor(sx + (cx + 8 - sx) * g, sy + (cy + 6 - sy) * g, pressed && r < 0.25);
  }
  function play(){
    cancelAnimationFrame(raf);
    if (reduce) { frame(1e9); return; }
    t0 = performance.now() + 450;           // let the slide fade in first
    (function step(now){
      var t = (now - t0) / 1000; frame(t);
      if (t < plan.done) raf = requestAnimationFrame(step);
    })(performance.now());
  }
  new MutationObserver(function(){ if (data && slide.classList.contains('on')) play(); })
    .observe(slide, { attributes:true, attributeFilter:['class'] });
  addEventListener('resize', function(){ if (data) { size(); frame(1e9); } });
})();
