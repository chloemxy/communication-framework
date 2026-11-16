/* The "Why AI?" slide's background: a blueprint Lego figure builds itself. The pieces start apart
 * (from media/bg/Lego start.png) and glide one after another until they lock together; the built
 * figure is those same pieces, so nothing swaps at the end. Each piece is solid, drawn back to front
 * (legs, hips, torso, head and hands, arms), so it hides what is behind it. The grid stays still.
 * Plays from the start each time the slide arrives; reduced motion shows the built figure.
 * Assets in media/bg/lego/ come from scripts/lego-pieces.py. */
(function(){
  'use strict';
  var scene = document.getElementById('why'), cv = scene && scene.querySelector('.lego-bg');
  if (!cv) return;
  var ctx = cv.getContext('2d'), DIR = 'media/bg/lego/', V = '?v=20261116c';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = 1456, H = 816;
  var CX = 1152, CY = 408, FX = .875, FIG = .86;   // figure centre in the drawing; its spot and size on the slide
  var HOLD = 0.7, STAGGER = 0.14, TRAVEL = 2.6;
  var grid, pieces = [], order = [], END = 0, ready = 0, need = 0, t0 = 0, raf = 0;

  function load(src){
    need++;
    var im = new Image();
    im.onload = function(){ if (++ready === need) start(); };
    im.src = DIR + src + V;
    return im;
  }
  function ease(x){ x = x < 0 ? 0 : x > 1 ? 1 : x; return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }

  // the drawing covers the slide, anchored so the figure stays on the right
  var s = 1, ox = 0, oy = 0;
  function fit(){
    var r = Math.min(window.devicePixelRatio || 1, 2), w = cv.clientWidth, h = cv.clientHeight;
    cv.width = Math.round(w * r); cv.height = Math.round(h * r);
    ctx.setTransform(r, 0, 0, r, 0, 0);
    s = Math.max(w / W, h / H); ox = (w - W * s) * 0.7; oy = (h - H * s) * 0.5;
  }
  function draw(t){
    var w = cv.clientWidth, h = cv.clientHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.save(); ctx.translate(ox, oy); ctx.scale(s, s);
    ctx.drawImage(grid, 0, 0, W, H);
    ctx.restore(); ctx.save();
    // the figure sits on its own: pinned near the right edge and sized to the slide's height, so the
    // headline on the left never runs into it whatever the screen's shape
    var fs = h / H * FIG;
    ctx.translate(w * FX, h * .5); ctx.scale(fs, fs); ctx.translate(-CX, -CY);
    if (reduce) t = END;
    // each piece sets off in turn (pieces.json order) and is drawn in its stacking order
    order.forEach(function(p){
      var k = ease((t - HOLD - p.i * STAGGER) / TRAVEL), a = p.from, b = p.to;
      ctx.drawImage(p.img, a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] - a[0], a[3] - a[1]);
    });
    ctx.restore();
  }
  function tick(now){
    var t = (now - t0) / 1000;
    draw(t);
    raf = t < END + .1 && scene.classList.contains('on') ? requestAnimationFrame(tick) : 0;
  }
  var was = false;
  function sync(){
    var on = scene.classList.contains('on');
    if (on && !was) { cancelAnimationFrame(raf); fit(); t0 = performance.now(); raf = requestAnimationFrame(tick); }
    if (!on && was) { cancelAnimationFrame(raf); raf = 0; draw(0); }   // ready to play again next visit
    was = on;
  }
  function start(){
    fit(); draw(scene.classList.contains('on') ? (performance.now() - t0) / 1000 : 0);
    new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
    addEventListener('resize', function(){ fit(); draw(raf ? (performance.now() - t0) / 1000 : (scene.classList.contains('on') ? 99 : 0)); });
    sync();
  }

  fetch(DIR + 'pieces.json' + V).then(function(r){ return r.json(); }).then(function(j){
    grid = load('grid.jpg');
    j.pieces.forEach(function(p, i){ pieces.push({ i: i, z: p.z, from: p.from, to: p.to, img: load('p' + i + '.png') }); });
    order = pieces.slice().sort(function(a, b){ return a.z - b.z; });
    END = HOLD + (pieces.length - 1) * STAGGER + TRAVEL;
  });
})();
