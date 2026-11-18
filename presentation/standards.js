/* Standards exist: the CDC Clear Communication Index and Nati's post drop onto the slide with a small
 * bounce, piled on the right, and on the click shrink and tilt into their two cards in the framework rows. The deck sets
 * each .fly's --k (0 big, 1 in its card); this works out both ends of the flight in pixels: the big
 * spot (its place in the pile) and the card's spot (its centre and size in
 * the tilted rows, which hold still until the screenshots land). At --k 1 the slide gets .go: the
 * flying copies hide, the real cards show, and the rows start drifting. */
(function(){
  'use strict';
  var scene = document.getElementById('standards');
  if (!scene) return;
  var flies = [].slice.call(scene.querySelectorAll('.fly'));
  function px(v){ return Math.round(v) + 'px'; }
  function layout(){
    var W = scene.clientWidth, H = scene.clientHeight, sr = scene.getBoundingClientRect();
    // the pile, as on slide 2's poster: the CDC site behind, tilted 3deg, and Nati's post in front,
    // lower and tilted -4deg, both on the right of the slide
    var SPOT = { cdc:{ x:.57, y:.15, h:.44, r:3 }, post:{ x:.53, y:.35, h:.48, r:-4 } };   // picture sizes; each frame adds 13% of its height per side
    flies.forEach(function(f){
      var img = f.querySelector('img'), ar = (img.naturalWidth || 4) / (img.naturalHeight || 3);
      var sp = SPOT[f.dataset.fly], h = H * sp.h, w = h * ar, cx = W * sp.x + w / 2, cy = H * sp.y + h / 2;
      f.style.setProperty('--w0', px(w)); f.style.setProperty('--h0', px(h));
      f.style.setProperty('--x0', px(cx)); f.style.setProperty('--y0', px(cy));
      f.style.setProperty('--r0', sp.r + 'deg');
      // its card in the rows: each row holds every card twice (so the loop never jumps), so take the
      // copy nearest the screenshot
      var card = null, r = null, best = Infinity;
      [].forEach.call(scene.querySelectorAll('.fw-card.shot[data-shot="' + f.dataset.fly + '"]'), function(c){
        var b = c.getBoundingClientRect(), d = Math.abs(b.left + b.width / 2 - sr.left - cx);
        if (d < best) { best = d; card = c; r = b; }
      });
      if (!card) return;
      f.style.setProperty('--w1', px(card.offsetWidth)); f.style.setProperty('--h1', px(card.offsetHeight));
      f.style.setProperty('--x1', px(r.left + r.width / 2 - sr.left)); f.style.setProperty('--y1', px(r.top + r.height / 2 - sr.top));
    });
  }
  function k(){ return parseFloat(flies[0].style.getPropertyValue('--k')) || 0; }
  function sync(){
    var go = scene.classList.contains('on') && k() > .999;
    if (go === scene.classList.contains('go')) return;
    scene.classList.toggle('go', go);
    // flying back out: the rows have stopped where they are, so the cards' spots are measured again
    if (!go) layout();
  }
  new MutationObserver(sync).observe(flies[0], { attributes: true, attributeFilter: ['style'] });
  // each screenshot drops in from above with a small bounce when its image's --k first rises above
  // 0 (CSS .down plays it); back at 0, it waits above the slide again
  flies.forEach(function(f){
    var im = f.querySelector('img');
    new MutationObserver(function(){
      f.classList.toggle('down', (parseFloat(im.style.getPropertyValue('--k')) || 0) > 0);
    }).observe(im, { attributes: true, attributeFilter: ['style'] });
  });
  new MutationObserver(function(){ if (!scene.classList.contains('go')) layout(); sync(); })
    .observe(scene, { attributes: true, attributeFilter: ['class'] });
  addEventListener('resize', function(){ if (!scene.classList.contains('go')) layout(); });
  flies.forEach(function(f){ var im = f.querySelector('img'); if (!im.complete) im.addEventListener('load', layout); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  layout();
})();
