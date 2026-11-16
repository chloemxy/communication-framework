/* Fold the shared slide edits into presentation/index.html (run on "push").

     node scripts/bake-deck-edits.js                 reads the edits from the deck-edits branch on GitHub
     node scripts/bake-deck-edits.js edits.json      reads them from a local file

   Each edit keeps the line's original markup ("from"); the script swaps it for the edited markup
   ("html") inside that slide's <section>. Lines it cannot find are listed, so they can be done by hand.
   After baking, clear presentation/deck-edits.json on the deck-edits branch so the edits aren't
   applied twice. */
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'presentation', 'index.html');
const RAW = 'https://raw.githubusercontent.com/chloemxy/communication-framework/deck-edits/presentation/deck-edits.json';

(async () => {
  const src = process.argv[2]
    ? fs.readFileSync(process.argv[2], 'utf8')
    : await (await fetch(RAW + '?t=' + Date.now())).text();
  const edits = (JSON.parse(src).edits) || {};
  let html = fs.readFileSync(FILE, 'utf8');
  const done = [], missed = [];
  for (const [key, e] of Object.entries(edits)) {
    const id = key.split('.')[0];
    const start = html.search(new RegExp('<section[^>]*\\sid="' + id + '"'));
    const end = start < 0 ? -1 : html.indexOf('</section>', start);
    const slice = end < 0 ? '' : html.slice(start, end);
    const at = slice.indexOf(e.from);
    if (at < 0 || slice.indexOf(e.from, at + 1) >= 0 && e.from.length < 4) { missed.push(key); continue; }
    html = html.slice(0, start) + slice.slice(0, at) + e.html + slice.slice(at + e.from.length) + html.slice(end);
    done.push(key);
  }
  fs.writeFileSync(FILE, html);
  console.log('Baked ' + done.length + ' edit(s).');
  if (missed.length) {
    console.log('Not found, do these by hand:');
    missed.forEach((k) => console.log('  ' + k + ': ' + JSON.stringify(edits[k].from) + ' -> ' + JSON.stringify(edits[k].html)));
  }
})();
