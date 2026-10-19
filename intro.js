/* Front door: an intro layer over the Studio at "/" (styles in intro.css).
 * One dark screen, no scrolling: the headline and actions on the left; on the right, a patient
 * handout with yellow flags and a slider that applies PRISM's fixes to it one at a time.
 * While the countdown runs, the fixes apply by themselves; then the intro slides away into
 * the Studio. Any interaction (click, key, scroll, the slider) pauses it, and Pause / Skip are
 * always there (WCAG 2.2.1: timing can be stopped).
 * Shown once per browser tab session, so reloading while working goes straight to the Studio.
 * Skipped when the URL already asks for something in the Studio (a hash, ?studio, another view).
 * Always shown for ?intro, and again whenever the logo ([data-front-door]) is clicked: the Studio
 * view comes back underneath, with the work in it kept.
 */
(function(){
  'use strict';
  var SECONDS = 9;
  var STEP_AT = [2, 4, 6];          // seconds into the countdown when each fix is applied
  var KEY = 'pea.introSeen';

  function seen(){ try { return sessionStorage.getItem(KEY) === '1'; } catch(e){ return false; } }
  function markSeen(){ try { sessionStorage.setItem(KEY, '1'); } catch(e){} }
  var forced = /[?&]intro\b/.test(location.search);
  var auto = forced || !(seen() || location.hash || /[?&]studio\b/.test(location.search) || (history.state && history.state.view && history.state.view !== 'studio'));

  // The handout at each step. <mark class="f"> = flagged, <ins class="fix"> = the fix just applied.
  var STEPS = [
    { t:'Your doctor prescribed a <mark class="f">diuretic</mark> to lower fluid build-up. <mark class="f">Take the medicine in the morning with food, and weigh yourself every day, and call us if you gain more than 2 pounds in a day.</mark> About <mark class="f">25%</mark> of people feel dizzy at first.',
      w:'As written: a medical word, a long sentence and a percentage.', g:'11', f:'3' },
    { t:'Your doctor prescribed a <ins class="fix">water pill</ins> to lower fluid build-up. <mark class="f">Take the medicine in the morning with food, and weigh yourself every day, and call us if you gain more than 2 pounds in a day.</mark> About <mark class="f">25%</mark> of people feel dizzy at first.',
      w:'“Diuretic” becomes “water pill”. <span class="src">PEMAT-P items 3–4, AHRQ</span>', g:'10', f:'2' },
    { t:'Your doctor prescribed a water pill to lower fluid build-up. <ins class="fix">Take the medicine in the morning with food. Weigh yourself every day. Call us if you gain more than 2 pounds in a day.</ins> About <mark class="f">25%</mark> of people feel dizzy at first.',
      w:'One long sentence becomes three short ones. <span class="src"><cite>Federal Plain Language Guidelines</cite></span>', g:'6', f:'1' },
    { t:'Your doctor prescribed a water pill to lower fluid build-up. Take the medicine in the morning with food. Weigh yourself every day. Call us if you gain more than 2 pounds in a day. About <ins class="fix">1 in 4</ins> people feel dizzy at first.',
      w:'“25%” becomes “1 in 4”. <span class="src">Gigerenzer &amp; Hoffrage, 1995</span>', g:'5', f:'0' }
  ];

  var html =
    '<div class="intro-bar">' +
      '<span class="site-name"><span><span class="sr-only">PRISM</span><span aria-hidden="true">PR<span class="hl-i">I</span>SM</span></span></span>' +   // same nesting as the Studio's logo link, so it renders identically
      '<span class="intro-count" id="intro-count"></span>' +
      '<button type="button" class="btn btn-quiet" id="intro-pause">Pause</button>' +
      '<button type="button" class="btn btn-secondary" id="intro-skip">Skip to the Studio</button>' +
      '<span class="intro-progress" id="intro-progress" aria-hidden="true"></span>' +
    '</div>' +
    '<div class="intro-hero">' +
      '<div class="intro-copy">' +
        '<p class="intro-kicker">For health handouts, posters and web pages</p>' +
        '<h1 class="intro-display" id="intro-title">Make your health handout easy to read.</h1>' +
        '<p class="intro-lede">PRISM finds the hard parts and shows a simpler way to say them, based on trusted health guides.</p>' +
        '<div class="intro-ctas">' +
          '<button type="button" class="btn intro-cta-main" data-go="evaluate">Check a draft</button>' +
          '<button type="button" class="btn intro-cta-alt" data-go="plan">Plan from an idea</button>' +
        '</div>' +
        '<p class="intro-fine">Your file never leaves your computer.</p>' +
      '</div>' +
      '<figure class="intro-plate" aria-labelledby="intro-try-h">' +
        '<div class="intro-handout">' +
          '<div class="intro-plate-head">' +
            '<h2 id="intro-try-h">Taking your water pill</h2>' +
            '<dl class="intro-figs">' +
              '<div><dt>Reading grade</dt><dd id="intro-s-grade"></dd></div>' +
              '<div><dt>Flags</dt><dd id="intro-s-flags"></dd></div>' +
            '</dl>' +
          '</div>' +
          '<p class="intro-reading" id="intro-s-text"></p>' +
          '<div class="intro-slide"><span>As written</span><input type="range" id="intro-s-range" min="0" max="3" step="1" value="0" aria-label="Fixes applied" aria-describedby="intro-s-why"><span>Plain language</span></div>' +
          '<p class="intro-why" id="intro-s-why" aria-live="polite"></p>' +
        '</div>' +
        '<figcaption class="intro-caption">Drag the slider to see each fix.</figcaption>' +
      '</figure>' +
    '</div>';

  var box = null, others = [], left = SECONDS, paused = false, timer = null, start = 0, done = true;

  function $(id){ return document.getElementById(id); }
  function reduced(){ return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; }

  function drawCount(){
    $('intro-count').textContent = paused ? 'Paused' : 'Opening the Studio in ' + Math.max(0, Math.ceil(left)) + ' s';
    $('intro-pause').textContent = paused ? 'Resume' : 'Pause';
    $('intro-pause').setAttribute('aria-pressed', paused ? 'true' : 'false');
    $('intro-progress').style.transform = 'scaleX(' + (1 - left / SECONDS) + ')';
  }
  function setStep(n){ var r = $('intro-s-range'); if (+r.value !== n) { r.value = n; drawStep(); } }
  function tick(){
    if (paused || done) return;
    var now = performance.now();
    left -= (now - start) / 1000; start = now;
    if (left <= 0) { leave(); return; }
    var elapsed = SECONDS - left, n = 0;
    STEP_AT.forEach(function(t){ if (elapsed >= t) n++; });
    if (n > +$('intro-s-range').value) setStep(n);   // the fixes apply by themselves
    drawCount();
    timer = requestAnimationFrame(tick);
  }
  function pause(){ if (paused || done) return; paused = true; cancelAnimationFrame(timer); drawCount(); }
  function resume(){ if (!paused || done) return; paused = false; start = performance.now(); drawCount(); timer = requestAnimationFrame(tick); }

  function leave(then){
    if (done) return;
    done = true; cancelAnimationFrame(timer); markSeen();
    others.forEach(function(el){ el.inert = false; });
    if (then) then();
    var ghosts = [];
    var finish = function(){
      box.remove(); ghosts.forEach(function(g){ g.remove(); });
      var st = $('stage'); if (st && !then) st.focus({ preventScroll:true });
    };
    if (reduced() || !box.animate) { finish(); return; }
    handoff(ghosts, finish);
  }

  // The hand-off into the Studio, as one movement (about 0.8 s):
  //  · the handout paper flies into the Material panel (or the Plan, after "Plan from an idea"),
  //    its words fading as it lands, so the page you were shown becomes the page you work on;
  //  · the yellow countdown line gathers into the yellow "Studio" tab in the site bar;
  //  · the headline lifts away and the dark cover dissolves, uncovering the Studio underneath.
  function handoff(ghosts, finish){
    var EASE = 'cubic-bezier(.2,.7,.2,1)', T = 760;
    var plate = box.querySelector('.intro-handout');
    var target = (!$('plan') || $('plan').hidden) ? $('canvas') : $('plan');
    var tab = document.querySelector('.site-bar .site-nav a[aria-current="page"]');
    var bar = $('intro-progress');
    function ghostFrom(el, css){
      var r = el.getBoundingClientRect(), g = document.createElement('div');
      g.setAttribute('aria-hidden', 'true');
      g.style.cssText = 'position:fixed;z-index:1001;pointer-events:none;margin:0;left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px;' + (css || '');
      document.body.appendChild(g); ghosts.push(g);
      return { g: g, r: r };
    }
    function flyTo(gh, toEl, extraFrom, extraTo, delay){
      var b = toEl.getBoundingClientRect(), a = gh.r;
      gh.g.animate([
        Object.assign({ left: a.left + 'px', top: a.top + 'px', width: a.width + 'px', height: a.height + 'px' }, extraFrom || {}),
        Object.assign({ left: b.left + 'px', top: b.top + 'px', width: b.width + 'px', height: b.height + 'px' }, extraTo || {})
      ], { duration: T, delay: delay || 0, easing: EASE, fill: 'forwards' });
    }

    // the paper: a copy of it flies; its words fade in the first third
    if (plate && target) {
      var cs = getComputedStyle(target);
      var paper = ghostFrom(plate, 'background:#FFFFFF;border-radius:2px;box-shadow:0 24px 60px rgba(0,0,0,.4);overflow:hidden');
      var words = plate.cloneNode(true);
      words.style.cssText = 'margin:0;box-shadow:none;width:' + paper.r.width + 'px;height:' + paper.r.height + 'px';
      paper.g.appendChild(words);
      plate.style.visibility = 'hidden';
      words.animate([{ opacity: 1 }, { opacity: 0 }], { duration: T * .35, easing: 'ease-out', fill: 'forwards' });
      flyTo(paper, target,
        { backgroundColor: '#FFFFFF', borderRadius: '2px', boxShadow: '0 24px 60px rgba(0,0,0,.4)' },
        { backgroundColor: cs.backgroundColor, borderRadius: cs.borderTopLeftRadius, boxShadow: '0 0 0 rgba(0,0,0,0)' });
    }
    // the yellow line gathers into the Studio tab
    if (bar && tab) {
      var line = ghostFrom(bar, 'background:var(--brand);border-radius:2px;transform-origin:left');
      bar.style.visibility = 'hidden';
      var p = parseFloat((bar.style.transform.match(/scaleX\(([\d.]+)\)/) || [0, 1])[1]);
      line.r = { left: line.r.left, top: line.r.top, width: line.r.width * p, height: line.r.height };
      line.g.style.width = line.r.width + 'px';
      flyTo(line, tab, { borderRadius: '2px' }, { borderRadius: getComputedStyle(tab).borderTopLeftRadius }, 60);
    }
    // the words on the cover lift away; the cover dissolves
    box.querySelectorAll('.intro-copy, .intro-caption').forEach(function(el, i){
      el.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-16px)' }],
        { duration: T * .45, delay: i * 40, easing: 'ease-in', fill: 'forwards' });
    });
    // the bar's own items just fade: the logo underneath is in the same place, so it seems to stay
    box.querySelectorAll('.intro-bar > :not(.intro-progress)').forEach(function(el){
      el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: T * .4, easing: 'ease-in', fill: 'forwards' });
    });
    box.style.overflow = 'hidden';
    box.animate([{ backgroundColor: getComputedStyle(box).backgroundColor }, { backgroundColor: 'rgba(0,0,0,0)' }],
      { duration: T * .7, delay: T * .25, easing: 'ease', fill: 'forwards' });
    var bb = box.querySelector('.intro-bar');
    if (bb) bb.animate([{ borderBottomColor: getComputedStyle(bb).borderBottomColor }, { borderBottomColor: 'rgba(0,0,0,0)' }], { duration: T * .5, fill: 'forwards' });
    box.style.pointerEvents = 'none';
    // the ghosts settle, then step aside for the real panel and tab
    setTimeout(function(){
      ghosts.forEach(function(g){ g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, fill: 'forwards' }); });
      setTimeout(finish, 190);
    }, T + 80);
  }

  function drawStep(){
    var s = STEPS[+$('intro-s-range').value];
    $('intro-s-text').innerHTML = s.t; $('intro-s-why').innerHTML = s.w;
    $('intro-s-grade').textContent = s.g; $('intro-s-flags').textContent = s.f;
  }

  function mount(){
    if (!document.getElementById('intro-font')) {
      var l = document.createElement('link'); l.id = 'intro-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap';
      document.head.appendChild(l);
    }
    if (!done) return;   // already showing
    box = document.createElement('section');
    box.className = 'intro';
    box.id = 'intro';
    box.setAttribute('aria-labelledby', 'intro-title');
    box.innerHTML = html;
    left = SECONDS; paused = false; done = false;
    document.body.appendChild(box);
    others = [].filter.call(document.body.children, function(el){ return el !== box && el.tagName !== 'SCRIPT' && !el.inert; });
    others.forEach(function(el){ el.inert = true; });

    // The logo stays exactly where the Studio's logo is (its bar can wrap to two rows)
    var sl = document.querySelector('.site-bar .site-name [aria-hidden]'), il = box.querySelector('.site-name [aria-hidden]');
    if (sl && il) {
      var d = sl.getBoundingClientRect().top - il.getBoundingClientRect().top;
      if (Math.abs(d) < 24) box.querySelector('.site-name').style.transform = 'translateY(' + d + 'px)';
    }

    drawStep();
    $('intro-s-range').addEventListener('input', drawStep);
    $('intro-skip').addEventListener('click', function(){ leave(); });
    $('intro-pause').addEventListener('click', function(e){ e.stopPropagation(); paused ? resume() : pause(); });
    box.querySelectorAll('[data-go]').forEach(function(b){
      b.addEventListener('click', function(){
        var go = b.getAttribute('data-go');
        leave(function(){
          if (go === 'plan') { var p = document.querySelector('#mode-toggle [data-m="plan"]'); if (p) p.click(); }
          else { var f = $('file-doc'); if (f) f.click(); }   // same click, so the file picker may open
        });
      });
    });
    // Anyone engaging with the intro gets as long as they want
    ['pointerdown','keydown','wheel','touchstart'].forEach(function(ev){
      box.addEventListener(ev, function(e){
        if (e.target.closest && e.target.closest('#intro-skip, #intro-pause, [data-go]')) return;
        pause();
      }, { passive:true });
    });
    box.addEventListener('scroll', pause, { passive:true });

    $('intro-skip').focus({ preventScroll:true });
    drawCount();
    start = performance.now();
    timer = requestAnimationFrame(tick);
  }

  // The logo opens the front door again: Studio view underneath, then the intro over it
  function wireLogo(){
    document.querySelectorAll('[data-front-door]').forEach(function(a){
      a.addEventListener('click', function(e){
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;   // new tab/window still works
        e.preventDefault();
        if (typeof window.showView === 'function') window.showView('studio');
        mount();
      });
    });
  }

  function ready(){
    wireLogo();
    if (forced) { try { history.replaceState(history.state, '', location.pathname + location.hash); } catch(e){} }
    if (auto) mount();
  }
  window.PRISMIntro = { show: mount };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
