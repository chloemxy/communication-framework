// How to judge each checklist item: what Met, Partly and Not met (or the instrument's own scale)
// look like on a page, so people can rate with less guessing. Shown under each item in the
// studio's Framework checklists card.
//
// This is PRISM's reading of each source, written for patient materials. It is not official
// wording. HBM, TTM and EPPM are theories, not checklists, so their items are PRISM's too.
// DISCERN's 5 / 2–4 / 1 bands follow the DISCERN handbook (Charnock et al., 1999); SAM's
// 2 / 1 / 0 follow Doak, Doak & Root (1996).
//
// scale: what each answer means for the whole checklist (shown once, at the top).
// items: one entry per item, in registry order. Keys are the answer values (met / part / no,
// or the numbers); na, where given, says when N/A fits (shown only where the scale has N/A).
// labels: the answers in order, best first.
(function (root) {
  // best first; each is [answer value, label]
  const MPN = [['met', 'Met'], ['part', 'Partly'], ['no', 'Not met'], ['na', 'N/A']];

  const FW_JUDGE = {
    hbm: {
      basis: 'PRISM’s reading of the Health Belief Model (Rosenstock, 1974).',
      scale: 'Met: the page does this clearly, where readers will see it. Partly: it’s there but vague, general or buried. Not met: it’s missing. A strong page usually meets all six.',
      labels: MPN,
      items: [
        { met: 'Names who is at risk in terms readers recognise (“If you’re over 40 or have diabetes…”).', part: 'Says the risk exists, but only for “people” in general.', no: 'Doesn’t say who is at risk.' },
        { met: 'Says plainly what can happen if nothing is done, in concrete terms.', part: 'Hints at harm (“it can be serious”) without saying what.', no: 'Doesn’t say why it matters.' },
        { met: 'Links the action to a clear result (“Taking it every day lowers your chance of a stroke”).', part: 'Says the action is good for you, but not what it does.', no: 'Asks for the action without saying why it helps.' },
        { met: 'Names a real obstacle (cost, time, side effects, fear) and says how to get past it.', part: 'Mentions an obstacle but gives no way around it.', no: 'Ignores what might stop people.' },
        { met: 'Gives a clear prompt: a time, a symptom to watch for, a reminder or a next date.', part: 'Says “remember to…” with no trigger to act on.', no: 'Nothing prompts the reader to start.' },
        { met: 'Shows people they can do it: small steps, what to expect, a “you can” tone.', part: 'Gives steps but makes them sound hard, or skips how to start.', no: 'Tells people what to do but not how.' },
      ],
    },
    ttm: {
      basis: 'PRISM’s reading of the Transtheoretical Model (Prochaska & Velicer, 1997).',
      scale: 'Rate item 1 first: which stage or stages the page is for. Then rate those stages’ items, and mark the others N/A; one page rarely serves every stage. Met: clearly done. Partly: touched on. Not met: missing for a stage the page aims at.',
      labels: MPN,
      items: [
        { met: 'You can tell which readers it’s for: not yet thinking about it, thinking about it, getting ready, doing it, or keeping it up.', part: 'It aims at a stage, but mixes in messages for others that confuse it.', no: 'It talks to everyone the same way.' },
        { met: 'Raises awareness for people not yet thinking about change: what the problem is and why it’s theirs.', part: 'Gives facts but doesn’t connect them to the reader.', no: 'Assumes readers already care.', na: 'The page isn’t for people at this stage.' },
        { met: 'Helps weigh pros and cons, and answers the common “but…”.', part: 'Lists the pros only.', no: 'Doesn’t help people decide.', na: 'The page isn’t for people at this stage.' },
        { met: 'Gives a concrete plan: first steps, when, and where to get help.', part: 'Says what to do but not how or when to start.', no: 'No plan.', na: 'The page isn’t for people at this stage.' },
        { met: 'Supports people who just started: what to expect, how to cope early on.', part: 'Says “keep going” with no practical help.', no: 'No support for people who just started.', na: 'The page isn’t for people at this stage.' },
        { met: 'Helps keep the change going and says what to do after a slip.', part: 'Mentions keeping it up, with no plan for slips.', no: 'Nothing on the long term.', na: 'The page isn’t for people at this stage.' },
        { met: 'Prepares readers for hard moments (stress, holidays, being sick) with a plan.', part: 'Says it may be hard, with no way through.', no: 'Doesn’t mention difficult situations.' },
      ],
    },
    eppm: {
      basis: 'PRISM’s reading of the Extended Parallel Process Model (Witte, 1992).',
      scale: 'Rate items 1–4, then item 5 on the balance between them. Met: clearly done. Partly: vague or easy to miss. Not met: missing. A page that raises fear (items 1–2) must also meet 3 and 4, or readers tend to look away instead of acting.',
      labels: MPN,
      items: [
        { met: 'Tells readers that this could happen to them, and why (“If you smoke…”).', part: 'Talks about risk in general, not to the reader.', no: 'Doesn’t say the reader is at risk.', na: 'There’s no risk message.' },
        { met: 'Says how serious it is, in concrete terms, without exaggerating.', part: 'Uses vague words like “serious” or “dangerous”.', no: 'Doesn’t say why it matters.', na: 'There’s no risk message.' },
        { met: 'Shows the action works: how much it lowers the risk, or what it prevents.', part: 'Says the action helps, with nothing to back it.', no: 'Doesn’t say whether the action works.' },
        { met: 'Makes the action feel doable: clear steps, what you need, where to get help.', part: 'Names the action, but it sounds hard or unclear.', no: 'Doesn’t help readers believe they can do it.' },
        { met: 'Every risk message is paired with a clear, doable action that works, given at least as much space.', part: 'Actions are there, but the threat gets far more space.', no: 'Raises fear with no clear way to act.', na: 'There’s no risk message.' },
      ],
    },
    sam: {
      basis: 'PRISM’s guidance, adapted from the Suitability Assessment of Materials (Doak, Doak & Root, 1996).',
      scale: '2 (superior): clearly meets it all through the page. 1 (adequate): meets it in part, or most of the time. 0 (not suitable): misses it. The total is the share of points out of the most possible; 70% or more is superior, 40–69% adequate.',
      labels: [[2, '2'], [1, '1'], [0, '0'], ['na', 'N/A']],
      items: [
        { 2: 'The purpose is stated near the start, in the title or first lines.', 1: 'The purpose is there, but implied or not up front.', 0: 'You can’t tell what it’s for.' },
        { 2: 'Only what readers need to act; extras are left out.', 1: 'Mostly focused, with some nice-to-know detail.', 0: 'Overloaded with background or detail.' },
        { 2: 'Ends with a short summary or review of key points.', 1: 'Key points are repeated, but not as a summary.', 0: 'No summary or review.' },
        { 2: 'Grade 5 or lower.', 1: 'Grade 6 to 8.', 0: 'Above grade 8.' },
        { 2: 'Covers one topic, at the right depth for its purpose.', 1: 'Wanders a little, or is a bit thin in places.', 0: 'Too broad or too thin to be useful.' },
        { 2: 'Everyday words throughout.', 1: 'Mostly everyday words, with a few hard ones.', 0: 'Many uncommon or technical words.' },
        { 2: 'Active voice, talks to “you”, sounds like a person talking.', 1: 'A mix of active and passive, or partly formal.', 0: 'Mostly passive and formal.' },
        { 2: 'Short, simple sentences; few with several clauses.', 1: 'Some long sentences with several clauses.', 0: 'Many long, complex sentences.' },
        { 2: 'Each section says what it’s about before the details.', 1: 'Context comes after the details in places.', 0: 'Details first, context missing.' },
        { 2: 'Uses examples or comparisons people know.', 1: 'An example or two, but key points have none.', 0: 'No examples.' },
        { 2: 'Common words, and any technical term is explained.', 1: 'Most terms explained; a few left as they are.', 0: 'Technical terms left unexplained.' },
        { 2: 'Grade 5 or lower.', 1: 'Grade 6 to 8.', 0: 'Above grade 8.' },
        { 2: 'Most sentences are short (about 15 words or fewer).', 1: 'Many sentences are 15 to 20 words.', 0: 'Many sentences run past 20 words.' },
        { 2: 'The cover image is friendly, fits the topic, and shows what it’s about.', 1: 'An image that’s neutral or only loosely related.', 0: 'No cover image, or a confusing one.', na: 'Not a printed piece with a cover.' },
        { 2: 'Simple, realistic visuals that show the key actions.', 1: 'Visuals are decorative, or harder to read than needed.', 0: 'Visuals confuse, or are missing where needed.' },
        { 2: 'Every visual has a caption saying what it shows.', 1: 'Some visuals have captions.', 0: 'No captions.', na: 'No visuals.' },
        { 2: 'People and settings readers recognise; no stereotypes.', 1: 'Neutral, but not specific to the audience.', 0: 'Out of place, or reinforces stereotypes.', na: 'No visuals of people or places.' },
        { 2: 'Plenty of white space, clear margins, an easy order to follow.', 1: 'Readable, but crowded in places.', 0: 'Dense, cluttered or hard to follow.' },
        { 2: 'Body text is 12 point or larger.', 1: 'Body text is just under 12 point.', 0: 'Small body text.' },
        { 2: 'Short sections with headings that say what’s in them.', 1: 'Some headings, or vague ones (“Overview”).', 0: 'Long blocks with no headings.' },
        { 2: 'Asks readers to do something: answer, tick, plan, write.', 1: 'One small interaction.', 0: 'Read-only.' },
        { 2: 'Shows the behaviour being done (a person doing the step, a worked example).', 1: 'Describes the behaviour without showing it.', 0: 'Only says what not to do, or nothing.' },
        { 2: 'Images and examples match the audience’s life, foods and places.', 1: 'Generic; could be anyone.', 0: 'Don’t fit the audience.' },
        { 2: 'Respects the audience’s values and ways of deciding; checked with people from the audience.', 1: 'No clashes, but not shaped for the audience.', 0: 'Clashes with the audience’s values or norms.' },
      ],
    },
    ipdas: {
      basis: 'PRISM’s guidance on the IPDAS criteria (Elwyn et al., 2006; IPDASi, Joseph-Williams et al., 2014).',
      scale: 'Met: clearly and fully done in the aid. Partly: done for some options, or vaguely. Not met: missing. A decision aid must meet all 6 qualifying items (1–6). Items 18–21 are checked in the aid’s development records, not on the page.',
      labels: MPN,
      items: [
        { met: 'Describes the health condition or problem the decision is about.', part: 'Names it but doesn’t describe it.', no: 'Not described.' },
        { met: 'States the decision outright (“You’re deciding whether to…”).', part: 'The decision is implied.', no: 'The decision isn’t stated.' },
        { met: 'Lists every reasonable option, including waiting or doing nothing where that’s an option.', part: 'Some options are missing, such as doing nothing.', no: 'Options aren’t laid out.' },
        { met: 'Gives the benefits of each option, side by side.', part: 'Benefits for some options only.', no: 'No benefits given.' },
        { met: 'Gives the harms and downsides of each option, side by side.', part: 'Downsides for some options only, or played down.', no: 'No downsides given.' },
        { met: 'Says what each option is like day to day (recovery, routines, feelings).', part: 'Briefly, for some options.', no: 'Doesn’t describe the experience.' },
        { met: 'Gives numbers for outcomes of each option.', part: 'Numbers for some outcomes or options only.', no: 'Only words like “common” or “rare”.' },
        { met: 'Uses absolute numbers (“3 in 100”).', part: 'Mixes absolute and relative numbers.', no: 'Relative numbers only (“50% less”).' },
        { met: 'Says over what time (“over 10 years”).', part: 'For some numbers only.', no: 'No time frame.' },
        { met: 'Says what isn’t known or is uncertain in the evidence.', part: 'Mentions uncertainty in passing.', no: 'Presents everything as certain.' },
        { met: 'Uses the same denominator for every option (all “out of 100”).', part: 'Mostly the same.', no: 'Different denominators make options hard to compare.', na: 'No numbers given.' },
        { met: 'Cites the evidence and its date.', part: 'Sources without dates, or dates without sources.', no: 'No sources.' },
        { met: 'Names the features of each option that people often care about.', part: 'Mentions a few, briefly.', no: 'Not addressed.' },
        { met: 'Has an exercise to weigh what matters to you (a scale, a worksheet, questions).', part: 'Asks readers to think about it, with no exercise.', no: 'No values exercise.' },
        { met: 'Walks through the steps of making the decision.', part: 'Some guidance, no clear steps.', no: 'No guidance on deciding.' },
        { met: 'Helps readers get ready to talk with their clinician (questions to ask, a summary to bring).', part: 'Says to talk to your doctor, nothing more.', no: 'No preparation for the visit.' },
        { met: 'Balanced: no option framed as the right one.', part: 'Leans slightly toward one option.', no: 'Pushes one option.' },
        { met: 'The development process is documented (needs the aid’s records).', part: 'Partly documented.', no: 'Not documented.' },
        { met: 'Patients and clinicians took part in developing it (needs the records).', part: 'Only one of the two groups took part.', no: 'Neither took part, or unknown.' },
        { met: 'A plain language review was done (needs the records).', part: 'An informal review only.', no: 'No review.' },
        { met: 'Field-tested with the intended users (needs the records).', part: 'Tested with a few people, or not the intended users.', no: 'Not tested.' },
        { met: 'Funding sources are stated in the aid.', part: 'Stated, but hard to find.', no: 'Not stated.' },
        { met: 'Conflicts of interest are stated, or it says there are none.', part: 'Partly stated.', no: 'Not stated.' },
        { met: 'Grade 8 or lower.', part: 'Grade 9 to 10.', no: 'Above grade 10.' },
      ],
    },
    discern: {
      basis: 'PRISM’s summary of the DISCERN handbook hints (Charnock et al., 1999).',
      scale: '5: yes, fully. 2–4: partly (closer to 5 the more fully it’s done). 1: no. Questions 9–15 are about treatment choices; if the page isn’t about treatment, DISCERN may not fit. There’s no pass mark: use the average to compare versions.',
      labels: [[5, '5'], ['2–4', '2–4'], [1, '1']],
      items: [
        { 5: 'Says at the start what it covers and who it’s for.', '2–4': 'The aims are there but vague, or come late.', 1: 'No aims stated.' },
        { 5: 'Delivers everything the aims promised.', '2–4': 'Covers some of what it promised.', 1: 'Doesn’t do what it set out to do.', note: 'Rate 1 if there are no aims (question 1 was 1).' },
        { 5: 'Talks to readers about their situation and the questions they’ll have.', '2–4': 'Partly relevant, or written for professionals.', 1: 'Not relevant to patients.' },
        { 5: 'Names the sources of evidence (references, or where the facts come from).', '2–4': 'Some sources, or vague ones (“research shows”).', 1: 'No sources.' },
        { 5: 'Gives dates for the information or its sources.', '2–4': 'Some dates, or only a copyright year.', 1: 'No dates.' },
        { 5: 'Fair to all options; facts kept separate from opinion.', '2–4': 'Leans one way in places.', 1: 'One-sided or promotional.' },
        { 5: 'Points to more help: support groups, websites, phone lines.', '2–4': 'One source of further help.', 1: 'None.' },
        { 5: 'Says where the evidence is uncertain or experts disagree.', '2–4': 'Mentions uncertainty briefly.', 1: 'Presents everything as certain.' },
        { 5: 'Explains how each treatment works.', '2–4': 'For some treatments, or briefly.', 1: 'Doesn’t explain.' },
        { 5: 'Gives the benefits of each treatment.', '2–4': 'For some treatments, or vaguely.', 1: 'No benefits given.' },
        { 5: 'Gives the risks and side effects of each treatment.', '2–4': 'For some treatments, or played down.', 1: 'No risks given.' },
        { 5: 'Says what happens with no treatment.', '2–4': 'Mentions it briefly.', 1: 'Not covered.' },
        { 5: 'Says how each choice affects daily life.', '2–4': 'For some choices, or briefly.', 1: 'Not covered.' },
        { 5: 'Makes clear there’s more than one choice, including no treatment.', '2–4': 'Implies it.', 1: 'Presents one choice only.' },
        { 5: 'Encourages talking choices through with clinicians and family, with questions to ask.', '2–4': 'Says to ask your doctor, nothing more.', 1: 'No support for deciding.' },
        { 5: 'High quality, useful source of information about treatment choices.', '2–4': 'Some problems, but useful.', 1: 'Serious problems; not useful.', note: 'Base this on your answers to questions 1–15.' },
      ],
    },
    whorisks: {
      basis: 'PRISM’s reading of the WHO Emergency Risk Communication guideline (WHO, 2017).',
      scale: 'Met: clearly done. Partly: done in a limited or vague way. Not met: missing. For outbreak or crisis material, aim to meet all six.',
      labels: MPN,
      items: [
        { met: 'Comes from, or quotes, sources the audience trusts; any conflict of interest is stated.', part: 'Source named but not explained, or not one the audience trusts.', no: 'No clear source.' },
        { met: 'Says what is known, what isn’t yet, and when there will be an update.', part: 'Mentions uncertainty in passing.', no: 'Presents everything as certain.' },
        { met: 'Owns mistakes or limits and says what changed.', part: 'Updates advice without saying why.', no: 'Hides or ignores past errors.', na: 'Nothing has needed correcting.' },
        { met: 'Answers the questions and worries people actually have, respectfully.', part: 'Answers some, or sounds talking-down.', no: 'Ignores people’s concerns.' },
        { met: 'Names common myths or rumours and corrects them clearly.', part: 'Hints at misinformation without naming it.', no: 'Doesn’t address rumours.', na: 'No rumours are circulating.' },
        { met: 'Every risk comes with clear, specific steps people can take now.', part: 'Gives steps, but vague or hard to act on.', no: 'Risk with no action.' },
      ],
    },
  };

  root.PEA_FW_JUDGE = FW_JUDGE;
  if (typeof module !== 'undefined' && module.exports) module.exports = FW_JUDGE;
})(typeof window !== 'undefined' ? window : globalThis);
