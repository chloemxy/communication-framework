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
 * 2. Markup (in the site bar). `hidden` keeps it out of the way when scripts do not run; this
 *    file reveals it. The icon shows at 600px and below; the word stays the accessible name.
 *
 *    <button type="button" class="btn btn-quiet theme-toggle" data-theme-toggle aria-pressed="false" title="Dark mode" hidden>
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

  function sync(){
    var btns = document.querySelectorAll('[data-theme-toggle]');
    for(var i = 0; i < btns.length; i++){
      btns[i].hidden = false;
      btns[i].setAttribute('aria-pressed', String(isDark()));
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
