# DRAWING THE LINE — Lightning Talk Submission

**Event:** Drawing the Line: Exploring AI in Medical Illustration
**Submission deadline:** October 2, 2026, 11:59 PM ET
**Format:** 7-minute talk + 3 minutes Q&A

---

## Title

**The Machine Doesn't Get to Write It: Using AI as a Critic, Not a Generator, in Patient Education**

*Alternates:*
- Nothing It Made Ships: Building an AI That Only Ever Grades Our Work
- 26 Frameworks, Zero Generated Words
- Where We Let the Model In (and Where We Slammed the Door)

---

## Speakers

**Chloe [last name], GoInvo** — Product designer at GoInvo, a healthcare design consultancy. Background in biochemistry and biomedical communication; freelance medical illustrator for surgical and clinical journal work.

**Sonia [last name], [affiliation]** — [role / one line].

---

## Short abstract (~100 words — for a brief description field)

We built a patient-education studio where generative AI is never allowed to write a single word a patient will read. Its only job is to grade our drafts — against 26 published instruments including the CDC Clear Communication Index, PEMAT, SAM, DISCERN and IPDAS. Nothing the model produces reaches the final deliverable.

That constraint turned out to be the hard engineering problem. We'll walk through the guardrails that make an evaluator trustworthy: a locked framework registry, a rule that no score counts without a verbatim quote from the document, and a validator that rejects the model's own output when it invents a criterion or a citation.

---

## Full description (~400 words — for the main submission field)

Most AI conversations in our field start at the output: what did it draw, what did it write, can you tell. We went the other way. On this project we drew the line at generation entirely — the model never produces a word, an image, or a recommendation that reaches a patient. It only ever evaluates what a human made.

The case is a working prototype: a patient education studio where a designer drafts a handout, poster, chart or diagram in the canvas and watches it scored live against a library of published assessment instruments — 26 of them, organized in four zones. Clarity and content quality (CDC Clear Communication Index, PEMAT, SAM, DISCERN, EQIP, readability measures, the Federal Plain Language Guidelines). Process and interaction (Teach-Back, OPTION, IPDAS, the AHRQ Health Literacy Universal Precautions Toolkit, Ottawa DMSF, SHARE). Behaviour and psychology (COM-B, Health Belief Model, Transtheoretical Model, EPPM, WHO Risk Communication). Outcomes and experience (PAM, CAHPS, Picker, Beryl, EBCD).

For visual work the same panel runs the checks that usually get caught too late: alt text that says what the image *tells* rather than what it looks like, contrast ratios graded against WCAG, deuteranopia/protanopia/tritanopia and greyscale-print simulation, heading order, colour-only instructions. It runs before the Adobe accessibility check, which means fewer errors to fix back in InDesign.

The interesting part is what it took to make an AI evaluator you can actually trust with clinical material. Seven rules are compiled into the engine: only frameworks in a locked registry can be used, so the model cannot invent an instrument; every score must carry a verbatim evidence quote from the document, so "it seems to meet this" is not a passing grade; citations may only come from each framework's published source list, so there are no fabricated references; absence of evidence returns NOT MET or NOT ASSESSABLE rather than a charitable pass; and a validator inspects every response and rejects it when a criterion ID or a source doesn't exist in the registry. We will show a response getting rejected.

We'll also be honest about the seams. The deterministic half — readability, plain-language flags, contrast, structural accessibility — runs today with no model involved at all, and it does more of the work than we expected. The constrained-LLM half is built and tested standalone but not yet wired into the studio. Some of what we assumed needed AI turned out to need a regex and a published rubric.

Seven minutes, one live failure, and a defensible answer to "so did AI make this?"

---

## What we're offering against the call

| What they asked for | What this talk is |
| --- | --- |
| How you actually used or explored generative AI | Actually used — as an evaluator inside a real prototype |
| Built around a case or series of experiments | One case, several experiments about where to let the model in |
| Visual production pipeline in medical/scientific visualization | Pre-flight for posters, charts and diagrams: alt text, contrast, colour-vision simulation, structural accessibility, before InDesign export |
| Process uses count, including where nothing generated appears in the final deliverable | Exactly our premise — by design, nothing generated ships |
| Cases where you tried it and stopped | Copy generation, criteria invention, citation writing — all tried, all cut |
| AI capabilities and limits in scientifically accurate imagery | Where model judgment on accuracy is admissible and where we require a human sign-off |
| Building custom tools or pipelines for a studio | A custom tool built for a design practice, with the guardrail architecture shown |

---

## Run of show (7 minutes)

| Time | Beat |
| --- | --- |
| 0:00–0:45 | The line, stated up front: no generated word reaches a patient. Why patient education is where that line has to be. |
| 0:45–2:00 | The case — live studio walkthrough, a handout scored in real time across the four zones. |
| 2:00–3:15 | Visual mode: the pre-flight pass on a poster — alt text, contrast, colour-vision simulation, heading order. |
| 3:15–5:15 | The guardrails: locked registry, evidence-quote-or-nothing, no fabricated citations, honest gaps. Show a model response being rejected by the validator. |
| 5:15–6:15 | What we tried and stopped: generating copy, letting it name its own criteria, letting it write citations. Why each was cut. |
| 6:15–7:00 | What the deterministic half does without any model at all — and the uncomfortable finding that it's most of the value. |

## Takeaways for the audience

1. A concrete pattern for putting AI in a medical-visualization pipeline without any generated content in the deliverable.
2. Four guardrails that transfer to any evaluative use of an LLM: bind it to a registry, demand verbatim evidence, whitelist its citations, make absence of evidence fail rather than pass.
3. A named, published framework library they can apply to their own patient-facing work whether or not they ever touch a model.

---

## Technical needs

Screen share / HDMI for a live browser demo (the prototype runs client-side in a browser; a recorded fallback will be ready). No audio required.

---

## Notes before submitting

- Add both last names, Sonia's affiliation and one-line bio.
- Confirm the framework count: the studio UI says 26, the registry file currently holds 27 entries. Pick one number and make both agree before this goes out.
- If the form asks for a talk category, "Building custom tools, node-based pipelines, or fine-tuned models for a studio" and "Cases where you tried it and stopped" both fit; the first is the stronger primary.
- If there's a word cap under ~250, use the short abstract plus the run-of-show table.
