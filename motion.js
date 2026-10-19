/* Motion: the "smart animate" parts of the site's motion system (tokens and simple entrances
 * live in design-system.css → MOTION). Shared by every page; no dependencies.
 *
 * 1. A selection glides. In segmented controls (.seg), the site nav and the Plan steps, the
 *    highlight moves from the old choice to the new one instead of jumping.
 * 2. Cards rise in. A Studio card that appears (new material, a Brief change) fades up.
 * 3. Folding. PRISMMotion.fold(card, apply) opens or closes a card's body smoothly;
 *    the Studio's toggleCollapse uses it.
 * Everything is skipped when the person asks for reduced motion.
 */
(function(){
  'use strict';
  var reduce = function(){ return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; };
  var EASE = 'cubic-bezier(.4,0,.2,1)', OUT = 'cubic-bezier(.2,.7,.2,1)';

  // ── 1. Gliding selection ──
  var GROUPS = '.seg, .site-nav, #plan-steps';
  function selectedIn(g){
    return g.querySelector('button.on, button[aria-pressed="true"], a[aria-current="page"], .plan-step.on');
  }
  var last = new WeakMap();            // group → { el, x, y, w, h } of its selection last time
  function rectIn(el, g){
    var a = el.getBoundingClientRect(), b = g.getBoundingClientRect();
    return { x: a.left - b.left + g.scrollLeft, y: a.top - b.top + g.scrollTop, w: a.width, h: a.height };
  }
  function remember(g){
    var s = selectedIn(g);
    if (s && s.offsetParent) { var r = rectIn(s, g); r.el = s; r.text = s.textContent; last.set(g, r); }
    else last.delete(g);
  }
  function glide(g){
    var prev = last.get(g), s = selectedIn(g);
    remember(g);
    if (!prev || !s || !s.offsetParent || reduce() || !s.animate) return;
    if (prev.el === s || (prev.el && !prev.el.isConnected && prev.text === s.textContent)) return;   // same choice (or redrawn)
    var now = rectIn(s, g);
    if (Math.abs(now.x - prev.x) < 1 && Math.abs(now.y - prev.y) < 1) return;
    // read the selection's final look, not a colour still transitioning in
    var keepTr = s.style.transition; s.style.transition = 'none';
    var cs = getComputedStyle(s), look = { bg: cs.backgroundColor, r: cs.borderTopLeftRadius, bw: cs.borderTopWidth, bc: cs.borderTopColor };
    s.style.transition = keepTr;
    if (look.bg === 'rgba(0, 0, 0, 0)' || look.bg === 'transparent') return;
    if (getComputedStyle(g).position === 'static') g.style.position = 'relative';
    var ghost = document.createElement('span');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.style.cssText = 'position:absolute;z-index:0;pointer-events:none;left:0;top:0;width:' + now.w + 'px;height:' + now.h + 'px;'
      + 'background:' + look.bg + ';border-radius:' + look.r + ';box-shadow:inset 0 0 0 ' + look.bw + ' ' + look.bc;
    g.insertBefore(ghost, g.firstChild);
    var keepBg = s.style.backgroundColor, keepBd = s.style.borderColor, keepPos = s.style.position, keepZ = s.style.zIndex, keepTr2 = s.style.transition;
    s.style.transition = 'none'; s.style.backgroundColor = 'transparent'; s.style.borderColor = 'transparent'; s.style.position = 'relative'; s.style.zIndex = '1';
    var a = ghost.animate([
      { transform: 'translate(' + prev.x + 'px,' + prev.y + 'px)', width: prev.w + 'px', height: prev.h + 'px' },
      { transform: 'translate(' + now.x + 'px,' + now.y + 'px)', width: now.w + 'px', height: now.h + 'px' }
    ], { duration: 260, easing: EASE });
    var ended = false;
    var end = function(){ if (ended) return; ended = true; ghost.remove(); s.style.backgroundColor = keepBg; s.style.borderColor = keepBd; s.style.position = keepPos; s.style.zIndex = keepZ; s.style.transition = keepTr2; };
    a.onfinish = end; a.oncancel = end;
    setTimeout(end, 260 + 120);   // backstop: a hidden tab may never deliver the finish event
  }

  // ── 2. Cards rise in when they appear ──
  var shown = new WeakMap();
  function visible(m){ return !!m.offsetParent && !m.classList.contains('hidden') && !m.classList.contains('na-hidden'); }
  function cardCheck(m){
    var was = shown.get(m), is = visible(m);
    shown.set(m, is);
    if (was === false && is && !reduce() && m.animate)
      m.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: OUT });
  }

  // ── 3. Folding a card ──
  function fold(card, apply){
    var body = card && card.querySelector('.mod-body');
    if (body && body._foldEnd) body._foldEnd();          // a fold still running finishes first
    var collapse = !!card && !card.classList.contains('collapsed');   // decided after that, so quick double clicks stay in step
    if (!body || reduce() || !body.animate) { apply(); return; }
    var keep = body.style.overflow, anim, done = false;
    body.style.overflow = 'hidden';
    var end = function(applyNow){
      if (done) return; done = true; body._foldEnd = null;
      if (anim) { anim.onfinish = null; anim.cancel(); }
      body.style.overflow = keep;
      if (applyNow) apply();
    };
    if (collapse) {
      var h = body.offsetHeight;
      anim = body.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0, paddingTop: '0px', paddingBottom: '0px' }], { duration: 240, easing: EASE });
      anim.onfinish = function(){ end(true); };
      body._foldEnd = function(){ end(true); };
      setTimeout(function(){ end(true); }, 240 + 120);   // backstop for a tab that isn't painting
    } else {
      apply();
      var h2 = body.offsetHeight;
      anim = body.animate([{ height: '0px', opacity: 0, paddingTop: '0px', paddingBottom: '0px' }, { height: h2 + 'px', opacity: 1 }], { duration: 280, easing: OUT });
      anim.onfinish = function(){ end(false); };
      body._foldEnd = function(){ end(false); };
      setTimeout(function(){ end(false); }, 280 + 120);
    }
  }

  // Watch selections and cards
  function start(){
    document.querySelectorAll(GROUPS).forEach(remember);
    document.querySelectorAll('.mod').forEach(function(m){ shown.set(m, visible(m)); });
    // changes are handled in a microtask: before the browser paints the jump, so the glide starts from the old place
    var pending = new Set(), cards = new Set(), queued = false;
    var flush = function(){
      queued = false;
      pending.forEach(glide); pending.clear();
      cards.forEach(cardCheck); cards.clear();
    };
    new MutationObserver(function(list){
      list.forEach(function(m){
        var t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
        if (!t || !t.closest) return;
        var g = t.closest(GROUPS); if (g) pending.add(g);
        if (m.type === 'attributes' && m.attributeName === 'class' && t.classList.contains('mod')) cards.add(t);
      });
      if ((pending.size || cards.size) && !queued) { queued = true; queueMicrotask(flush); }
    }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'aria-pressed', 'aria-current'] });
    window.addEventListener('resize', function(){ document.querySelectorAll(GROUPS).forEach(remember); });
  }

  window.PRISMMotion = { fold: fold };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
