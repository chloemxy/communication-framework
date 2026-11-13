/* Slide background clips (videos only; slide 2 is now a still): slide 3's flowers on The Creation of Adam, which loop. Each plays only while its slide is on
   screen, and stays on its poster frame for people who prefer reduced motion. */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  [].forEach.call(document.querySelectorAll('.scene video.clip-bg'), function(video){
    var scene = video.closest('.scene'), was = false;
    function sync(){
      var on = scene.classList.contains('on');
      if (on && !was && !video.loop) video.currentTime = 0;   // a play-once clip starts over on each visit
      was = on;
      if (!on) video.pause();
      else if (!video.ended) { var p = video.play(); if (p) p.catch(function(){}); }
    }
    new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
    // a slide reached before its clip has loaded starts playing as soon as it can
    video.addEventListener('canplay', sync);
    document.addEventListener('visibilitychange', sync);
    sync();
  });
})();

/* Slide 2's still: once the click plays its text, the view eases in toward the handouts on the desk
   over 12 s and holds. Leaving the slide, or stepping back to before the text, resets it at once. */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var scene = document.getElementById('question'), img = scene && scene.querySelector('img.clip-bg');
  if (!img) return;
  function sync(){
    var go = scene.classList.contains('on') && parseFloat(scene.style.getPropertyValue('--t')) > 0;
    if (go === img.classList.contains('push')) return;
    if (!go) { img.style.transition = 'none'; img.classList.remove('push'); void img.offsetWidth; img.style.transition = ''; }
    else img.classList.add('push');
  }
  new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class', 'style'] });
  sync();
})();
