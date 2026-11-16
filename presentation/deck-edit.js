/* Shared slide edits: Chloe and Sonia can retype any line on a slide, and it saves for everyone.

   - Open the deck with ?edit (or press E once you've edited in this browser) to turn edit mode on.
     Every title, line and caption gets a dashed outline; click one and type.
   - Enter or Esc finishes a line, Shift+Enter breaks it. Edits save a moment after you stop typing.
   - Everyone who opens the deck sees the saved edits. They live on the GitHub branch deck-edits
     (api/deck-edits.js) until they are folded into this page with scripts/bake-deck-edits.js.

   Runs before the deck script: it tags each editable line (data-ek), loads the saved edits,
   then starts the deck (deckEdits.ready). */
(function(){
  'use strict';
  var started = false, queue = [];
  function startDeck(){ if (started) return; started = true; queue.forEach(function(f){ try { f(); } catch (e) { console.error(e); } }); queue = []; }
  window.deckEdits = { ready: function(f){ if (started) f(); else queue.push(f); } };

  /* ---------- which lines can be edited ---------- */
  var SEL = 'h1,h2,h3,h4,p,li,q,cite,blockquote,figcaption,.intros b,.intros span,.visit > b';
  var orig = {}, els = {};
  [].forEach.call(document.querySelectorAll('main > section[id]'), function(sec){
    var n = 0;
    [].forEach.call(sec.querySelectorAll(SEL), function(el){
      if (el.closest('[aria-hidden="true"], .visually-hidden, .sr-only, svg, .fp-strip, .xl-win')) return;
      if (el.querySelector('[data-count], img, video, svg, canvas, ul, ol, div')) return;
      if (el.parentElement.closest('[data-ek]')) return; // the outer line is editable already
      if (!el.textContent.trim()) return;
      var key = sec.id + '.' + (n++);
      el.setAttribute('data-ek', key);
      orig[key] = el.innerHTML; els[key] = el;
    });
  });

  /* ---------- where edits are saved ---------- */
  var q = new URLSearchParams(location.search);
  var API = q.get('api') === 'local' ? 'http://localhost:5174/api/deck-edits'
    : /\.vercel\.app$/.test(location.hostname) ? '/api/deck-edits'
    : 'https://communication-framework.vercel.app/api/deck-edits';

  var saved = {}, lastAt = null, setupMsg = null;

  function get(timeout){
    var ctl = window.AbortController ? new AbortController() : null;
    var t = ctl && setTimeout(function(){ ctl.abort(); }, timeout);
    return fetch(API, { cache:'no-store', signal: ctl && ctl.signal }).then(function(r){
      clearTimeout(t);
      return r.json().then(function(d){ if (!r.ok) throw new Error(d && d.error || r.status); return d; });
    });
  }

  /* put saved markup into a line: same shape -> swap only the words (the deck's animations keep
     their elements); otherwise replace the markup */
  function shapeOf(n){ return [].map.call(n.querySelectorAll('*'), function(e){ return e.tagName + '.' + e.className; }).join('|'); }
  function setHtml(el, html){
    if (el.innerHTML === html) return;
    var tpl = document.createElement('div'); tpl.innerHTML = html;
    var a = el.cloneNode(true); stripRuntime(a, el.getAttribute('data-ek'));
    if (shapeOf(a) === shapeOf(tpl)) {
      var from = texts(el), to = texts(tpl);
      if (from.length === to.length) { from.forEach(function(t, i){ t.nodeValue = to[i].nodeValue; }); return; }
    }
    el.innerHTML = html;
  }
  function texts(root){ var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), out = [], n; while ((n = w.nextNode())) out.push(n); return out; }

  function apply(edits, skip){
    Object.keys(els).forEach(function(key){
      if (skip && skip(key)) return;
      var e = edits[key], el = els[key];
      if (e && e.from === orig[key]) setHtml(el, e.html);       // an edit made against this version
      else if (!e && saved[key]) setHtml(el, orig[key]);         // an edit that was reverted
    });
    saved = edits;
  }

  /* load the edits, then start the deck (never wait more than 1.5 s) */
  get(1500).then(function(d){ apply(d.edits || {}); lastAt = d.at; })
    .catch(function(e){ setupMsg = /not set up/.test(e.message) ? e.message : null; })
    .then(startDeck);

  /* ---------- edit mode ---------- */
  var KEEP = 'deck-edit';
  function store(k, v){ try { if (v == null) localStorage.removeItem(KEEP + '.' + k); else localStorage.setItem(KEEP + '.' + k, v); } catch (_) {} }
  function read(k){ try { return localStorage.getItem(KEEP + '.' + k); } catch (_) { return null; } }

  var css = document.createElement('style');
  css.textContent =
    '.de-on [data-ek]{outline:1.5px dashed color-mix(in srgb,currentColor 45%,transparent);outline-offset:.18em;cursor:text}' +
    '.de-on [data-ek]:hover{outline-color:color-mix(in srgb,currentColor 75%,transparent)}' +
    '.de-on [data-ek]:focus{outline:2px solid #c9a96a;outline-offset:.18em}' +
    '.de-bar{position:fixed;z-index:99999;top:12px;left:50%;transform:translateX(-50%);display:flex;gap:8px;align-items:center;' +
      'font:500 13px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;color:#f3efe6;background:#1b1a18;border:1px solid #3a3833;' +
      'border-radius:999px;padding:6px 6px 6px 14px;box-shadow:0 4px 16px rgba(0,0,0,.3)}' +
    '.de-bar .de-st{color:#bdb7ab;font-weight:400;white-space:nowrap}' +
    '.de-bar .de-st.bad{color:#f0a58a}.de-bar .de-st.ok{color:#a9d6b5}' +
    '.de-bar button{font:inherit;color:#1b1a18;background:#f3efe6;border:0;border-radius:999px;padding:5px 12px;cursor:pointer}';
  document.head.appendChild(css);

  var on = false, bar = null, st = null, pending = {}, timers = {}, busy = false, failTimer = 0, poll = 0;

  function ago(iso){
    if (!iso) return '';
    var m = Math.round((Date.now() - new Date(iso)) / 60000);
    return m < 1 ? 'just now' : m < 60 ? m + ' min ago' : m < 1440 ? Math.round(m / 60) + ' h ago' : new Date(iso).toLocaleDateString();
  }
  function status(text, kind){ if (!st) return; st.textContent = text; st.className = 'de-st' + (kind ? ' ' + kind : ''); }
  function idle(){
    if (setupMsg) return status('Saving isn’t set up yet', 'bad');
    var n = Object.keys(saved).length;
    status(lastAt ? 'Saved ' + ago(lastAt) + ' · ' + n + ' edited line' + (n === 1 ? '' : 's') : 'No edits yet', lastAt ? 'ok' : '');
  }

  function setOn(v){
    on = v;
    document.documentElement.classList.toggle('de-on', on);
    Object.keys(els).forEach(function(k){
      if (on) { els[k].setAttribute('contenteditable', 'plaintext-only'); if (els[k].contentEditable !== 'plaintext-only') els[k].setAttribute('contenteditable', 'true'); els[k].spellcheck = true; }
      else els[k].removeAttribute('contenteditable');
    });
    if (on && !bar) {
      bar = document.createElement('div'); bar.className = 'de-bar'; bar.setAttribute('role', 'status');
      bar.innerHTML = '<span>Editing</span><span class="de-st"></span><button type="button" data-done>Done (E)</button>';
      st = bar.querySelector('.de-st');
      bar.querySelector('[data-done]').addEventListener('click', function(){ setOn(false); });
      document.body.appendChild(bar);
    }
    if (bar) bar.hidden = !on;
    clearInterval(poll);
    if (on) {
      store('used', '1');
      idle();
      poll = setInterval(refresh, 15000);
    }
  }

  /* what a line looks like to save: no editing or animation leftovers */
  function stripRuntime(root, key){
    var keep = new Set((orig[key] || '').match(/class="([^"]*)"/g) ? orig[key].match(/class="([^"]*)"/g).join(' ').replace(/class="|"/g, ' ').split(/\s+/).filter(Boolean) : []);
    [].forEach.call(root.querySelectorAll('*'), function(n){
      [].slice.call(n.attributes).forEach(function(a){
        if (!/^(class|href|target|rel|data-[\w-]+|aria-hidden|aria-label|title)$/.test(a.name)) n.removeAttribute(a.name);
      });
      if (n.hasAttribute('class')) {
        var c = n.className.split(/\s+/).filter(function(x){ return keep.has(x); }).join(' ');
        if (c) n.className = c; else n.removeAttribute('class');
      }
    });
    return root;
  }
  function markupOf(el){
    var key = el.getAttribute('data-ek'), c = stripRuntime(el.cloneNode(true), key);
    var html = c.innerHTML.replace(/&nbsp;/g, ' ');
    if (orig[key].indexOf('\n') < 0) html = html.replace(/\n/g, '<br>');
    if (!/<br>\s*$/.test(orig[key])) html = html.replace(/(<br>\s*)+$/, '');
    return html;
  }

  function schedule(key, wait){
    pending[key] = true;
    clearTimeout(timers[key]);
    timers[key] = setTimeout(flush, wait);
    status('Saving…');
  }
  function flush(){
    if (busy) return;
    var key = Object.keys(pending)[0];
    if (!key) return idle();
    busy = true; delete pending[key];
    var html = markupOf(els[key]);
    fetch(API, { method:'POST', headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ key:key, html:html, from:orig[key] }) })
      .then(function(r){ return r.json().then(function(d){ return { r:r, d:d }; }); })
      .then(function(x){
        busy = false;
        if (!x.r.ok) throw new Error(x.d && x.d.error || x.r.status);
        setupMsg = null; saved = x.d.edits || saved; lastAt = x.d.at;
        Object.keys(pending).length ? flush() : idle();
      })
      .catch(function(e){
        busy = false; pending[key] = true;
        status(/not set up/.test(e.message) ? 'Saving isn’t set up yet' : 'Not saved yet, retrying…', 'bad');
        clearTimeout(failTimer); failTimer = setTimeout(flush, 5000);
      });
  }

  /* pick up the other person's edits while editing */
  function refresh(){
    if (busy || Object.keys(pending).length) return;
    get(8000).then(function(d){
      var focus = document.activeElement && document.activeElement.getAttribute && document.activeElement.getAttribute('data-ek');
      apply(d.edits || {}, function(k){ return k === focus || pending[k]; });
      lastAt = d.at; idle();
    }).catch(function(){});
  }

  function inLine(e){ return on && e.target.closest && e.target.closest('[data-ek]'); }
  document.addEventListener('keydown', function(e){
    var el = inLine(e);
    if (el) {
      e.stopPropagation(); // typing never turns the slide
      if (e.key === 'Escape' || (e.key === 'Enter' && !e.shiftKey)) { e.preventDefault(); el.blur(); }
      else if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault();
        var s = getSelection(); if (!s.rangeCount) return;
        var r = s.getRangeAt(0); r.deleteContents();
        var br = document.createElement('br'); r.insertNode(br);
        r.setStartAfter(br); r.collapse(true); s.removeAllRanges(); s.addRange(r);
        schedule(el.getAttribute('data-ek'), 1200);
      }
      return;
    }
    if (e.altKey || e.ctrlKey || e.metaKey || (e.target.matches && e.target.matches('input,textarea,select,[contenteditable]'))) return;
    if ((e.key === 'e' || e.key === 'E') && (on || q.has('edit') || read('used'))) { e.preventDefault(); e.stopPropagation(); setOn(!on); }
  }, true);
  ['pointerdown', 'click', 'wheel', 'touchstart'].forEach(function(t){
    document.addEventListener(t, function(e){ if (inLine(e) && t !== 'wheel') e.stopPropagation(); }, true);
  });
  document.addEventListener('input', function(e){ var el = inLine(e); if (el) schedule(el.getAttribute('data-ek'), 1200); }, true);
  document.addEventListener('focusout', function(e){ var el = inLine(e); if (el && pending[el.getAttribute('data-ek')]) { clearTimeout(timers[el.getAttribute('data-ek')]); flush(); } }, true);
  document.addEventListener('paste', function(e){
    if (!inLine(e)) return;
    e.preventDefault();
    var t = (e.clipboardData || window.clipboardData).getData('text/plain').replace(/\s*\n\s*/g, ' ');
    document.execCommand('insertText', false, t);
  }, true);
  setInterval(function(){ if (on && !busy && !Object.keys(pending).length) idle(); }, 30000);
  addEventListener('beforeunload', function(e){ if (Object.keys(pending).length || busy) { e.preventDefault(); e.returnValue = ''; } });

  window.deckEdits.ready(function(){ if (q.has('edit')) setOn(true); });
})();
