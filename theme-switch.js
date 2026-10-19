/* Dark mode toggle. Shared by every page; no dependencies.
 *
 * The site is light by default (it does not follow the OS setting). One "Dark" toggle in the
 * site bar switches dark mode on and off; the choice is saved in localStorage 'pea.theme'.
 *
 * 1. Inline this snippet in <head> right after the two <meta> tags, BEFORE any stylesheet,
 *    so the first paint already has the chosen theme (no flash):
 *
 *    <script>try{if(localStorage.getItem('pea.theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}</script>
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
      try{ if(dark) localStorage.setItem(KEY, 'dark'); else localStorage.removeItem(KEY); }catch(e){ /* storage blocked: the choice lasts for this page only */ }
    }
    sync();
  }

  document.addEventListener('click', function(e){
    var b = e.target && e.target.closest ? e.target.closest('[data-theme-toggle]') : null;
    if(b) apply(!isDark(), true);
  });

  // Another tab or the other page changed the choice
  window.addEventListener('storage', function(e){ if(e.key === KEY || e.key === null) apply(e.newValue === 'dark', false); });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync);
  else sync();
})();
