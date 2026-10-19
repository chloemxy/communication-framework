/* Dark mode toggle. Shared by every page; no dependencies.
 *
 * The site is dark by default (it does not follow the OS setting). One theme button in the
 * site bar switches dark mode on and off; the choice is saved in localStorage 'pea.theme'.
 *
 * 1. Inline this snippet in <head> right after the two <meta> tags, BEFORE any stylesheet,
 *    so the first paint already has the chosen theme (no flash):
 *
 *    <script>(function(){var t;try{t=localStorage.getItem('pea.theme')}catch(e){}if(t!=='light')document.documentElement.setAttribute('data-theme','dark')})()</script>
 *
 *    Then design-system.css, and <script src="theme-switch.js" defer></script>.
 *
 * 2. Markup (in the site bar). Visible from the start, so an old cached copy of this file can't
 *    leave it hidden. The icon shows at 600px and below; the word stays the accessible name.
 *
 *    <button type="button" class="btn btn-quiet theme-toggle" data-theme-toggle aria-pressed="false" title="Dark mode">
 *      <svg class="ts-ico" …aria-hidden="true" focusable="false">…</svg><span class="ts-lbl">Dark</span></button>
 *
 * Switching adds .theme-switching to <html> for two frames, which turns transitions off
 * (design-system.css), so colours flip at once instead of cross-fading.
 */
(function(){
  'use strict';
  var KEY = 'pea.theme';
  var root = document.documentElement;

  function isDark(){ return root.getAttribute('data-theme') === 'dark'; }

  // The button names the mode it switches to: "Light" while dark, "Dark" while light (moon / sun icon)
  var MOON = '<path d="M13.25 9.6A5.5 5.5 0 0 1 6.4 2.75a5.5 5.5 0 1 0 6.85 6.85z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>';
  var SUN = '<circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/>'
    + '<path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
  function sync(){
    var dark = isDark(), btns = document.querySelectorAll('[data-theme-toggle]');
    for(var i = 0; i < btns.length; i++){
      var b = btns[i], lbl = b.querySelector('.ts-lbl'), ico = b.querySelector('.ts-ico');
      b.hidden = false;
      b.removeAttribute('aria-pressed');
      b.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
      if(lbl) lbl.textContent = dark ? 'Light' : 'Dark';
      if(ico) ico.innerHTML = dark ? SUN : MOON;
    }
  }

  // No cross-fade while the colours change: transitions off now, back on after the next paint
  var settleId = 0;
  function suppressTransitions(){
    root.classList.add('theme-switching');
    var id = ++settleId;
    var raf = window.requestAnimationFrame || function(f){ return setTimeout(f, 16); };
    raf(function(){ raf(function(){ if(id === settleId) root.classList.remove('theme-switching'); }); });
  }

  function apply(dark, save){
    if(dark !== isDark()) suppressTransitions();
    if(dark) root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
    if(save){
      try{ localStorage.setItem(KEY, dark ? 'dark' : 'light'); }catch(e){ /* storage blocked: the choice lasts for this page only */ }
    }
    sync();
  }

  document.addEventListener('click', function(e){
    var b = e.target && e.target.closest ? e.target.closest('[data-theme-toggle]') : null;
    if(!b) return;
    var next = !isDark();
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!document.startViewTransition || reduce){ apply(next, true); return; }
    // the new theme spreads out from the button in a circle
    var r = b.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    var far = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.style.setProperty('--tx', x + 'px'); root.style.setProperty('--ty', y + 'px'); root.style.setProperty('--tr', far + 'px');
    root.classList.add('theme-reveal');
    var applied = false, once = function(){ if(!applied){ applied = true; apply(next, true); } };
    var vt = document.startViewTransition(once);
    var done = function(){ root.classList.remove('theme-reveal'); };
    vt.finished.then(done, done);
    // backstop: a page that isn't painting never runs the transition; switch at once instead
    setTimeout(function(){ if(!applied){ try{ vt.skipTransition(); }catch(err){} once(); done(); } }, 150);
  });

  // Another tab or the other page changed the choice
  window.addEventListener('storage', function(e){ if(e.key === KEY || e.key === null) apply(e.newValue !== 'light', false); });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync);
  else sync();
})();
