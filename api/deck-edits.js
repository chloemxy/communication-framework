/* Shared slide edits for the talk deck (presentation/index.html).

   GET  /api/deck-edits         -> { edits: { key: { html, from, at } }, at }
   POST /api/deck-edits         body { key, html, from }
                                -> saves one slide line; html equal to from removes the edit

   Edits live in presentation/deck-edits.json on the GitHub branch `deck-edits` (one commit per
   save), so every change has a history. Nothing here touches master: on "push" the edits are
   folded into presentation/index.html with scripts/bake-deck-edits.js.

   Vercel environment variables:
     GITHUB_TOKEN        fine-grained token, this repo only, Contents: read and write
     GITHUB_REPO         optional, default chloemxy/communication-framework
     DECK_EDITS_BRANCH   optional, default deck-edits
   Local testing: DECK_EDITS_LOCAL_FILE=<path> stores edits in that file instead of GitHub
   (see scripts/deck-edits-dev.js). */

const REPO = process.env.GITHUB_REPO || 'chloemxy/communication-framework';
const BRANCH = process.env.DECK_EDITS_BRANCH || 'deck-edits';
const PATH = 'presentation/deck-edits.json';
const GH = 'https://api.github.com/repos/' + REPO;

const ORIGINS = [
  /^https:\/\/communication-framework[a-z0-9-]*\.vercel\.app$/,
  /^https:\/\/(www\.)?prismcheck\.org$/,
  /^https:\/\/chloemxy\.github\.io$/,
  /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/,
];

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

/* ---------- storage: GitHub branch, or a local file for testing ---------- */

async function gh(path, opts) {
  const r = await fetch(GH + path, Object.assign({}, opts, {
    headers: Object.assign({
      Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'prism-deck-edits',
    }, opts && opts.headers),
  }));
  const text = await r.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (_) { data = { message: text }; }
  return { status: r.status, data };
}

async function ensureBranch() {
  const ref = await gh('/git/ref/heads/' + BRANCH);
  if (ref.status === 200) return;
  const repo = await gh('');
  const base = await gh('/git/ref/heads/' + (repo.data && repo.data.default_branch || 'master'));
  if (base.status !== 200) throw new Error('Could not read the default branch: ' + base.status);
  const made = await gh('/git/refs', { method: 'POST', body: JSON.stringify({ ref: 'refs/heads/' + BRANCH, sha: base.data.object.sha }) });
  if (made.status !== 201 && made.status !== 422) throw new Error('Could not create the branch: ' + made.status);
}

async function load() {
  const file = process.env.DECK_EDITS_LOCAL_FILE;
  if (file) {
    const fs = require('fs');
    try { return { doc: JSON.parse(fs.readFileSync(file, 'utf8')), sha: null }; }
    catch (_) { return { doc: { edits: {} }, sha: null }; }
  }
  const r = await gh('/contents/' + PATH + '?ref=' + encodeURIComponent(BRANCH));
  if (r.status === 404) return { doc: { edits: {} }, sha: null };
  if (r.status !== 200) throw new Error('GitHub read failed: ' + r.status);
  const doc = JSON.parse(Buffer.from(r.data.content, 'base64').toString('utf8'));
  if (!doc.edits) doc.edits = {};
  return { doc, sha: r.data.sha };
}

async function store(doc, sha, message) {
  const file = process.env.DECK_EDITS_LOCAL_FILE;
  const text = JSON.stringify(doc, null, 2) + '\n';
  if (file) { require('fs').writeFileSync(file, text); return true; }
  const body = { message, content: Buffer.from(text, 'utf8').toString('base64'), branch: BRANCH };
  if (sha) body.sha = sha;
  const r = await gh('/contents/' + PATH, { method: 'PUT', body: JSON.stringify(body) });
  if (r.status === 200 || r.status === 201) return true;
  if (r.status === 409 || r.status === 422) return false; // someone saved in between: retry
  throw new Error('GitHub write failed: ' + r.status);
}

/* ---------- input checks ---------- */

const KEY = /^[a-z0-9-]+\.\d{1,3}$/;
const TAGS = /<\/?([a-z0-9]+)\b[^>]*>/gi;
const ALLOWED = new Set(['b', 'i', 'em', 'strong', 'mark', 'br', 'span', 'a', 'sup', 'sub', 'small', 'q', 'cite']);

function clean(html) {
  if (typeof html !== 'string' || html.length > 4000) return null;
  let ok = true;
  html.replace(TAGS, (m, t) => { if (!ALLOWED.has(t.toLowerCase())) ok = false; return m; });
  if (!ok || /\son[a-z]+\s*=|javascript:|<script|<style/i.test(html)) return null;
  return html;
}

/* ---------- handler ---------- */

module.exports = async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && ORIGINS.some((re) => re.test(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }
  if (req.method === 'OPTIONS') { res.statusCode = 204; return res.end(); }

  const local = !!process.env.DECK_EDITS_LOCAL_FILE;
  if (!local && !process.env.GITHUB_TOKEN) return send(res, 503, { error: 'Saving is not set up yet (GITHUB_TOKEN missing).' });

  try {
    if (req.method === 'GET') {
      const { doc } = await load();
      return send(res, 200, { edits: doc.edits, at: doc.at || null });
    }
    if (req.method !== 'POST') return send(res, 405, { error: 'Use GET or POST.' });

    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = null; } }
    if (!body) return send(res, 400, { error: 'No edit sent.' });
    const key = String(body.key || '');
    const html = clean(body.html), from = clean(body.from);
    if (!KEY.test(key) || html === null || from === null) return send(res, 400, { error: 'That edit could not be saved.' });

    if (!local) await ensureBranch();
    const at = new Date().toISOString();
    for (let attempt = 0; attempt < 4; attempt++) {
      const { doc, sha } = await load();
      if (html === from) delete doc.edits[key];
      else doc.edits[key] = { html, from, at };
      doc.at = at;
      const plain = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 50);
      const msg = 'Deck edit: ' + key + (html === from ? ' reverted' : ' → "' + plain + '"');
      if (await store(doc, sha, msg)) return send(res, 200, { ok: true, edits: doc.edits, at });
      await new Promise((r) => setTimeout(r, 250 + attempt * 250));
    }
    return send(res, 409, { error: 'Someone else was saving at the same moment. Try again.' });
  } catch (e) {
    return send(res, 502, { error: String(e && e.message || e) });
  }
};
