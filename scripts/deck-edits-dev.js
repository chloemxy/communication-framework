/* Local stand-in for the Vercel function, for testing the deck's edit mode on localhost.
   Stores edits in a local JSON file instead of GitHub.

     node scripts/deck-edits-dev.js            (port 5174)
   then open http://localhost:5173/presentation/?edit&api=local */
const http = require('http');
const path = require('path');
process.env.DECK_EDITS_LOCAL_FILE = process.env.DECK_EDITS_LOCAL_FILE || path.join(require('os').tmpdir(), 'deck-edits-local.json');
const handler = require('../api/deck-edits.js');
const port = +process.env.PORT || 5174;

http.createServer((req, res) => {
  if (!req.url.startsWith('/api/deck-edits')) { res.statusCode = 404; return res.end(); }
  let raw = '';
  req.on('data', (c) => { raw += c; });
  req.on('end', () => { req.body = raw; handler(req, res); });
}).listen(port, () => console.log('deck edits (local file ' + process.env.DECK_EDITS_LOCAL_FILE + ') on http://localhost:' + port));
