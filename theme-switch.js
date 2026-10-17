/* Theme switch: System / Light / Dark. Shared by every page; no dependencies.
 *
 * 1. Inline this snippet in <head> right after the two <meta> tags, BEFORE any stylesheet,
 *    so the first paint already has the chosen theme (no flash):
 *
 *    <script>try{var t=localStorage.getItem('pea.theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
 *
 *    Then: <title>, the font preconnects and link, design-system.css, and
 *    <script src="theme-switch.js" defer></script>.
 *
 * 2. Markup (in the site bar, after a <span class="bar-divider" aria-hidden="true"></span>).
 *    `hidden` keeps it out of the way when scripts do not run; this file reveals it.
 *    Each button holds an icon (shown at 600px and below) and its word in .ts-lbl (visible on wide
 *    screens, visually hidden on narrow ones, so it stays the accessible name everywhere).
 *
 *    <div class="seg theme-switch" role="group" aria-label="Colour theme" data-theme-switch hidden>
 *      <button type="button" data-theme-set="system" aria-pressed="true" title="Follow the system setting">
 *        <svg class="ts-ico" …aria-hidden="true" focusable="false">…</svg><span class="ts-lbl">System</span></button>
 *      <button type="button" data-theme-set="light" aria-pressed="false" title="Light">…<span class="ts-lbl">Light</span></button>
 *      <button type="button" data-theme-set="dark" aria-pressed="false" title="Dark">…<span class="ts-lbl">Dark</span></button>
 *    </div>
 *
 * Switching (by the button, another tab, or the OS) adds .theme-switching to <html> for two frames,
 * which turns transitions off (design-system.css), so colours flip at once instead of cross-fading.
 *
 * State: no data-theme attribute = System (the CSS media query follows the OS live).
 * A choice is saved in localStorage 'pea.theme' ('light' | 'dark'); System removes the key.
 */
(function(){
  'use strict';
  var KEY = 'pea.theme';
  var root = document.documentElement;

  function valid(v){ return v === 'light' || v === 'dark'; }
  function current(){ var t = root.getAttribute('data-theme'); return valid(t) ? t : 'system'; }

  function sync(){
    var c = current();
    var groups = document.querySelectorAll('[data-theme-switch]');
    for(var i = 0; i < groups.length; i++){
      groups[i].hidden = false;
      var btns = groups[i].querySelectorAll('[data-theme-set]');
      for(var j = 0; j < btns.length; j++){
        btns[j].setAttribute('aria-pressed', String(btns[j].getAttribute('data-theme-set') === c));
      }
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

  function apply(v, save){
    var before = root.getAttribute('data-theme');
    if(before !== (valid(v) ? v : null)) suppressTransitions();
    if(valid(v)) root.setAttribute('data-theme', v); else root.removeAttribute('data-theme');
    if(save){
      try{ if(valid(v)) localStorage.setItem(KEY, v); else localStorage.removeItem(KEY); }catch(e){ /* storage blocked: the choice lasts for this page only */ }
    }
    sync();
  }

  document.addEventListener('click', function(e){
    var b = e.target && e.target.closest ? e.target.closest('[data-theme-switch] [data-theme-set]') : null;
    if(b) apply(b.getAttribute('data-theme-set'), true);
  });

  // Another tab or the other page changed the choice
  window.addEventListener('storage', function(e){ if(e.key === KEY || e.key === null) apply(e.newValue, false); });

  // System follows OS changes through CSS alone; this keeps the pressed state honest and, when the
  // page is following the system, stops the flip from cross-fading.
  if(window.matchMedia){
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onOs = function(){ if(current() === 'system') suppressTransitions(); sync(); };
    if(mq.addEventListener) mq.addEventListener('change', onOs);
    else if(mq.addListener) mq.addListener(onOs);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync);
  else sync();
})();
