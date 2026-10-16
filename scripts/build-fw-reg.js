// Regenerates index.html's FW_REG from analysis-engine.js FRAMEWORK_REGISTRY.
// usage: node scripts/build-fw-reg.js [--check]   (run from the repo root)
const fs = require('fs'), path = require('path');
const dir = path.resolve(__dirname, '..'), check = process.argv.includes('--check');
const R = require(path.join(dir, 'analysis-engine.js')).FRAMEWORK_REGISTRY;
const MAP = { cci:'CCI', pemat:'PEMAT', pematav:'PEMAT_AV', cdcidd:'CDC_IDD', sam:'SAM', discern:'DISCERN', eqip:'EQIP',
  readability:'READABILITY', plainlang:'PLAIN_LANGUAGE', cdceq:'CDC_EQUITY', pinkbook:'NCI_PINK_BOOK', teachback:'TEACH_BACK',
  option:'OPTION', ipdas:'IPDAS', ahrq:'AHRQ_TOOLKIT', ottawa:'OTTAWA_DMSF', share:'SHARE', comb:'COM_B', hbm:'HBM', ttm:'TTM',
  eppm:'EPPM', whorisks:'WHO_RISK_COMMS', pam:'PAM', cahps:'CAHPS', nps:'NPS', picker:'PICKER', ebcd:'EBCD', seips:'SEIPS', planetree:'PLANETREE' };
const LIVE = ['cci','pemat','readability','plainlang'];
const file = path.join(dir, 'index.html');
const html = fs.readFileSync(file, 'utf8');
const m = html.match(/const FW_REG = (\{.*\});/);
const old = JSON.parse(m[1]);
const out = {};
for (const [k, id] of Object.entries(MAP)) {
  const f = R[id]; if (!f) throw new Error('missing ' + id);
  const e = { n: f.name, t: f.scoringType, th: f.passThreshold && f.passThreshold.label || null, sc: f.itemScale || null, note: f.notes || null, src: f.sources };
  if (!LIVE.includes(k)) e.cr = f.criteria.map(c => {
    const row = [c.domain, c.text, c.notAssessableFromDoc ? 1 : 0];
    const meta = {};
    if (c.itemNo !== undefined) meta.no = c.itemNo;
    if (c.scale) meta.s = c.scale;
    if (c.naOption !== undefined) meta.na = c.naOption;
    if (c.check) meta.ck = c.check;
    if (c.rule) meta.rule = c.rule;
    if (c.scan) { meta.scan = 1; meta.id = c.id; }
    if (Object.keys(meta).length) row.push(meta);
    return row;
  });
  if (f.termScan) e.scan = f.termScan.map(t => ({ ...t, url: f.sourcePages[t.page] }));
  out[k] = e;
}
if (check) {
  for (const k of Object.keys(old)) {
    const a = JSON.stringify(old[k]), b = JSON.stringify(out[k]);
    if (a !== b) console.log('DIFF', k, '\n old:', a.slice(0, 300), '\n new:', b.slice(0, 300));
  }
  console.log('checked', Object.keys(old).length, 'existing keys');
} else {
  const json = JSON.stringify(out).replace(/</g, '\u003c');
  fs.writeFileSync(file, html.replace(m[0], () => 'const FW_REG = ' + json + ';'));
  console.log('wrote', Object.keys(out).length, 'frameworks');
}
