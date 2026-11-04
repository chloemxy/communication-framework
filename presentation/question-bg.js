/* Slide 2 background: a looping Pexels clip of a doctor using a medical pamphlet. It plays only while
   the slide is on screen, and stays on its poster frame for people who prefer reduced motion. */
(function(){
  var scene = document.getElementById('question');
  var video = scene && scene.querySelector('.clip-bg');
  if (!video) return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function sync(){
    if (scene.classList.contains('on')) { var p = video.play(); if (p) p.catch(function(){}); }
    else video.pause();
  }
  new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
  sync();
})();
