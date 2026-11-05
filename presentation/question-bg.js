/* Slide background clips: slide 2's Pexels clip of a doctor using a medical pamphlet, and the slow
   zoom on The Creation of Adam. Each plays only while its slide is on screen, and stays on its poster
   frame for people who prefer reduced motion. */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  [].forEach.call(document.querySelectorAll('.scene .clip-bg'), function(video){
    var scene = video.closest('.scene');
    function sync(){
      if (scene.classList.contains('on')) { var p = video.play(); if (p) p.catch(function(){}); }
      else video.pause();
    }
    new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
    // a slide reached before its clip has loaded starts playing as soon as it can
    video.addEventListener('canplay', sync);
    document.addEventListener('visibilitychange', sync);
    sync();
  });
})();
