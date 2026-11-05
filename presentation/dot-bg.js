/* Last slide's dotted paper: a faint dot grid where soft patches bloom at random spots and fade away.
   It runs only while the slide is on screen, and stays a plain faint grid for people who prefer
   reduced motion. */
(function(){
  var canvas = document.querySelector('#next .dot-bg');
  if (!canvas) return;
  var scene = canvas.closest('.scene'), ctx = canvas.getContext('2d');
  var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LIFE = 5, BASE = 0.05, PEAK = 0.42, TAU = Math.PI * 2;
  var w = 0, h = 0, patches = [], nextPatch = 0, timer = null;

  function fit(){
    var box = canvas.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = box.width; h = box.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(performance.now() / 1000);
  }

  function draw(t){
    if (!w || !h) return;
    if (!still && t > nextPatch) {
      patches.push({ x: Math.random(), y: Math.random() * h / w, born: t, r: 0.12 + Math.random() * 0.12 });
      nextPatch = t + 0.9 + Math.random() * 1.1;
    }
    patches = patches.filter(function(p){ return t - p.born < LIFE; });
    ctx.clearRect(0, 0, w, h);
    var gap = w * 0.02, radius = Math.max(0.8, w * 0.0011);
    for (var y = gap / 2; y < h; y += gap) for (var x = gap / 2; x < w; x += gap) {
      var glow = 0;
      for (var i = 0; i < patches.length; i++) {
        var p = patches[i], dx = x / w - p.x, dy = y / w - p.y, life = Math.sin(Math.PI * (t - p.born) / LIFE);
        glow += Math.exp(-(dx * dx + dy * dy) / (p.r * p.r)) * life * life;
      }
      ctx.fillStyle = 'rgba(255,255,255,' + (BASE + Math.min(1, glow) * PEAK).toFixed(3) + ')';
      ctx.beginPath(); ctx.arc(x, y, radius, 0, TAU); ctx.fill();
    }
  }

  function sync(){
    var on = scene.classList.contains('on') && !document.hidden && !still;
    if (on && !timer) { fit(); timer = setInterval(function(){ draw(performance.now() / 1000); }, 40); }
    if (!on && timer) { clearInterval(timer); timer = null; }
  }

  new ResizeObserver(fit).observe(canvas);
  new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('visibilitychange', sync);
  fit();
  sync();
})();
