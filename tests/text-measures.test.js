// Pins the studio's text measures. The expected numbers were read from the live studio
// (index.html) before these functions moved into text-measures.js, so a change here is a
// change to what every person using the studio sees.
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const T = require('../text-measures.js');

describe('readability (Flesch Reading Ease, Flesch-Kincaid grade)', () => {
  it('matches the studio on its sample texts', () => {
    assert.deepEqual(
      T.computeFK('Hypertension means your blood pressure is high. The medicine was prescribed by your doctor. Take one pill every morning with water. If you feel dizzy, call us at 555-0100.'),
      { ease: 83.6, grade: 3.5, words: 30, sentences: 4, avgSentLen: 7.5, avgSyll: 1.37 },
    );
    assert.deepEqual(
      T.computeFK('Diabetes is a condition where your body has trouble using sugar. Eating well helps. Walk for 30 minutes most days. Check your blood sugar as your care team showed you. Ask questions — we are here to help.'),
      { ease: 91.9, grade: 2.3, words: 37, sentences: 5, avgSentLen: 7.4, avgSyll: 1.27 },
    );
  });

  it('has nothing to score in empty text', () => {
    assert.equal(T.computeFK(''), null);
  });

  it('shows a grade below 1 in words, not as a negative number', () => {
    assert.equal(T.gradeText(-0.7), 'below 1');
    assert.equal(T.gradeText(3.5), '3.5');
  });
});

describe('sentences and words', () => {
  it('ends a sentence at a line break, or at . ! ? before a capital', () => {
    assert.deepEqual(T.splitSentences('Take one pill. Then rest!\nCall us'), ['Take one pill.', 'Then rest!', 'Call us']);
    assert.deepEqual(T.splitSentences('Dose is 2.5 mg. Ok'), ['Dose is 2.5 mg.', 'Ok']);
  });

  it('counts syllables the studio’s way', () => {
    assert.deepEqual(['the', 'water', 'hypertension', 'medicine', 'pill'].map(T.syllables), [1, 2, 4, 3, 1]);
  });
});

describe('dictionaries', () => {
  it('offers a plain word for every jargon term', () => {
    for (const key of T.JARGON_KEYS) assert.ok(T.JARGON[key], key);
    assert.equal(T.JARGON.hypertension, 'high blood pressure');
  });
});
