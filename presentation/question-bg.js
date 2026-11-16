/* Slide background clips (videos only; slide 2 is now a still): slide 3's flowers on The Creation of Adam, which loop. Each plays only while its slide is on
   screen, and stays on its poster frame for people who prefer reduced motion. */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  [].forEach.call(document.querySelectorAll('.scene video.clip-bg'), function(video){
    if (video.closest('#question')) return;   // slide 2's clip waits; handled below
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

/* Slide 2's clip: the slide arrives on the still first frame; 10 s later the clip plays once while
   the view eases in toward the handouts on the desk over 8 s and holds. Leaving the slide resets it. */
(function(){
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var scene = document.getElementById('question'), video = scene && scene.querySelector('.clip-bg');
  if (!video) return;
  var DELAY = 10000, timer = 0, started = false, was = false;
  function begin(){
    timer = 0; started = true;
    video.classList.add('push');
    if (video.play) { var p = video.play(); if (p) p.catch(function(){}); }
  }
  function sync(){
    var on = scene.classList.contains('on');
    if (on && !was) { clearTimeout(timer); started = false; timer = setTimeout(begin, DELAY); }
    if (!on && was) {
      clearTimeout(timer); timer = 0; started = false;
      if (video.pause) { video.pause(); try { video.currentTime = 0; } catch (e) {} }
      video.style.transition = 'none'; video.classList.remove('push'); void video.offsetWidth; video.style.transition = '';
    }
    was = on;
  }
  new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('visibilitychange', function(){
    if (!video.play) return;
    if (document.hidden) video.pause();
    else if (started && scene.classList.contains('on') && !video.ended) { var p = video.play(); if (p) p.catch(function(){}); }
  });
  sync();
})();
