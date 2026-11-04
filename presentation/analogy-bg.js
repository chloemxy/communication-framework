/* Slide 3 background: the "Shot on iPhone" commercial, embedded from YouTube (not copied here),
   muted with no controls. It loops the first 26.5 s, before the brand ending at about 27 s, and
   plays only while slide 3 is on screen. */
(function(){
  var scene = document.getElementById('analogy');
  var box = scene && scene.querySelector('.yt-bg');
  if (!box) return;
  var VIDEO = '1WLqGs7c_yA', CUT = 26.5;
  var player = null, ready = false, timer = null;

  function on(){ return scene.classList.contains('on'); }
  function loop(){
    if (ready && player.getCurrentTime() >= CUT) player.seekTo(0, true);
  }
  function sync(){
    if (!ready) { if (on()) load(); return; }
    clearInterval(timer);
    if (on()) { player.playVideo(); timer = setInterval(loop, 200); }
    else player.pauseVideo();
  }

  var loading = false;
  function load(){
    if (loading) return; loading = true;
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function(){
      if (prev) prev();
      player = new YT.Player(box.appendChild(document.createElement('div')), {
        videoId: VIDEO,
        playerVars: { autoplay: 1, mute: 1, controls: 0, disablekb: 1, fs: 0, rel: 0,
          iv_load_policy: 3, playsinline: 1, modestbranding: 1, cc_load_policy: 0, end: Math.ceil(CUT) },
        events: {
          // captions off, even when the viewer has them on by default on YouTube
          onReady: function(e){ e.target.mute(); e.target.unloadModule('captions'); e.target.unloadModule('cc'); ready = true; sync(); },
          onStateChange: function(e){
            if (e.data === YT.PlayerState.ENDED) { player.seekTo(0, true); player.playVideo(); }
            if (e.data === YT.PlayerState.PLAYING) { box.classList.add('live'); player.unloadModule('captions'); }
          }
        }
      });
    };
    var s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(s);
  }

  new MutationObserver(sync).observe(scene, { attributes: true, attributeFilter: ['class'] });
  // start fetching once the talk is open, so the video is ready by slide 3
  setTimeout(load, 1500);
})();
