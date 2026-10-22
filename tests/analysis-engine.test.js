// The validator holds a model's analysis to the registry — and, given the material, to the
// material itself: a quote has to be the document's own words.
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const E = require('../analysis-engine.js');

const response = (quote) => ({
  framework_id: 'PEMAT_AV',
  is_registered: true,
  framework_sources: [],
  criteria_results: [{ criterion_id: 'PEMAT-AV-1', status: 'met', evidence_quote: quote }],
});

describe('evidence quotes', () => {
  const doc = 'Take one pill every morning. If you feel “dizzy” — call us.';

  it('accepts a quote that differs only in spacing, quote marks or dashes', () => {
    assert.deepEqual(E.validateAnalysisResponse(response('Take  one pill\nevery morning'), 'PEMAT_AV', doc).violations, []);
    assert.deepEqual(E.validateAnalysisResponse(response('If you feel "dizzy" - call us'), 'PEMAT_AV', doc).violations, []);
  });

  it('refuses a paraphrase', () => {
    const { valid, violations } = E.validateAnalysisResponse(response('Take a tablet each morning'), 'PEMAT_AV', doc);
    assert.equal(valid, false);
    assert.match(violations[0], /not in the document/);
  });

  it('checks only the registry when no document is given, as before', () => {
    assert.deepEqual(E.validateAnalysisResponse(response('anything at all'), 'PEMAT_AV').violations, []);
  });

  it('still refuses a criterion the registry does not have', () => {
    const r = response('Take one pill');
    r.criteria_results[0].criterion_id = 'PEMAT-AV-99';
    assert.match(E.validateAnalysisResponse(r, 'PEMAT_AV', doc).violations[0], /Hallucinated criterion/);
  });
});
