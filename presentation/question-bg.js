/* Slide background clips: slide 2's leaflets landing on a desk, which plays once and holds on the pile,
   and slide 3's flowers on The Creation of Adam, which loop. Each plays only while its slide is on
   screen, and stays on its poster frame for people who prefer reduced motion. */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  [].forEach.call(document.querySelectorAll('.scene .clip-bg'), function(video){
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
