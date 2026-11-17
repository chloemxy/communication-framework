// Click and drag to scroll: with a mouse, press on any panel and drag to scroll it, like a touch
// screen. It never starts on text you can edit or select into (the document, inputs), on controls
// (links, sliders) or on resize grips, so editing and clicking work as before.
// A drag that moved 5px or more doesn't count as a click, so it can start on a button or card.
(function(){
  // it can start on buttons and cards too: only a real drag (5px or more) cancels the click
  var SKIP = 'input,textarea,select,option,a,[contenteditable],[contenteditable] *,' +
             '#editor,#editor *,[draggable="true"],[role="slider"],.no-drag';
  function scroller(el){
    for (; el && el !== document.documentElement; el = el.parentElement){
      var cs = getComputedStyle(el);
      if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 1) return el;
    }
    var se = document.scrollingElement;
    return se && se.scrollHeight > se.clientHeight + 1 ? se : null;
  }
  var drag = null, moved = false;
  document.addEventListener('pointerdown', function(e){
    if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest(SKIP)) return;
    var r = e.target.getBoundingClientRect && e.target.getBoundingClientRect();
    // the bottom-right corner of anything resizable is its grip
    if (r && getComputedStyle(e.target).resize !== 'none' && r.right - e.clientX < 18 && r.bottom - e.clientY < 18) return;
    var s = scroller(e.target);
    if (!s) return;
    drag = { s: s, y: e.clientY, top: s.scrollTop, id: e.pointerId };
    moved = false;
  });
  document.addEventListener('pointermove', function(e){
    if (!drag || e.pointerId !== drag.id) return;
    var dy = e.clientY - drag.y;
    if (!moved && Math.abs(dy) < 5) return;
    if (!moved){ moved = true; document.documentElement.classList.add('drag-scrolling'); window.getSelection && window.getSelection().removeAllRanges(); }
    drag.s.scrollTop = drag.top - dy;
    e.preventDefault();
  }, { passive: false });
  function end(){ if (!drag) return; drag = null; document.documentElement.classList.remove('drag-scrolling'); }
  document.addEventListener('pointerup', end);
  document.addEventListener('pointercancel', end);
  // a drag isn't a click
  document.addEventListener('click', function(e){ if (moved){ moved = false; e.stopPropagation(); e.preventDefault(); } }, true);
  var st = document.createElement('style');
  st.textContent = '.drag-scrolling,.drag-scrolling *{cursor:grabbing!important;user-select:none!important}';
  document.head.appendChild(st);
})();
