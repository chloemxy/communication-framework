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
 *
 *    <div class="seg theme-switch" role="group" aria-label="Colour theme" data-theme-switch hidden>
 *      <button type="button" data-theme-set="system" aria-pressed="true">System</button>
 *      <button type="button" data-theme-set="light" aria-pressed="false">Light</button>
 *      <button type="button" data-theme-set="dark" aria-pressed="false">Dark</button>
 *    </div>
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

  function apply(v, save){
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

  // System follows OS changes through CSS alone; this only keeps the pressed state honest.
  if(window.matchMedia){
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    if(mq.addEventListener) mq.addEventListener('change', sync);
    else if(mq.addListener) mq.addListener(sync);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync);
  else sync();
})();
