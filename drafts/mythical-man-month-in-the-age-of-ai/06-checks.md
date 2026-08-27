# Checks

Round three, the last permitted round. Run by a fresh agent on draft revision 3,
with no sight of the drafting conversation. Findings only, no fixes applied.

Line numbers refer to `04-draft.md` at revision 3.

Revision 3 restructured the post into the Codemanship Bluffer's Guide shape:
short paragraphs, named subheads, dry asides, 1172 words across seven body
sections. The restructure is well executed. It fixed both round two blockers, it
fixed the Brooks error, and it added one new drift of its own.

Round two questions Q12, Q14 to Q19 are still unanswered. Only Q13 came back.

## Round two findings, one judgement each

Round two verdict: 0 unsourced, 2 drifted, 2 GENERIC sections, 6 pending
disclosure rows.

| Round two finding | Now | Evidence |
| --- | --- | --- |
| F1 BLOCKING DRIFTED, front matter "after a year of handing work to agents" | RESOLVED | Gone, not reworded. The description at line 6 now reads "I went back to the book to see what AI has actually changed", which is A13. Grep across the whole file returns no "year of", no "handing work", and no duration attached to agent use. The clause was cut and replaced with sourced material. |
| F2 BLOCKING DRIFTED, "which at least happens early ... waits until integration" | RESOLVED | Gone, not reworded. Grep returns no "surfac", no "integration" outside the References entry, and no "early" in the body. Lines 104 to 105 now read "An agent will not paper over that gap the way a person does. In my experience it gets confused instead." The second sentence is A7. See N2 on the first. |
| N2, "He had no way to enforce it" about Brooks | RESOLVED, with a small note | Line 100 now reads "His mechanism was a small team around a chief architect." That is no longer wrong. See N3 for the residual imprecision. |
| GENERIC section "Decomposition, not restraint" | STILL OPEN | Renamed "More agents is not the problem" and rewritten. Verdict unchanged. See pass 2. |
| GENERIC section "The brief is where it goes wrong" | STILL OPEN | Rewritten and shorter. Verdict unchanged. See pass 2. |
| 6 pending disclosure rows | STILL OPEN | All six survive revision 3. One of them got slightly worse. Alex rules. |

## Pass 1: sourcing

Twenty-four draft lines carry first person, front matter included. Every one has
a ledger row. Reader-inclusive "we" at line 134 is not counted as a claim.

### Blocking

- F3  BLOCKING DRIFTED  lines 28 to 30  "It was during work on a batch job that
  had to finish inside a fixed window, which is the kind of deadline that does
  not negotiate."  -> ledger row at line 30 cites A2 and says the aside is
  "Colour on the generalised batch job detail. Carries no new fact." The row is
  wrong on its own terms. A2 says "I read it when I were working on pay run
  optimzation work last year". A2 names optimisation work. It does not name a
  deadline, a window, or a consequence for missing one. The base wording "a batch
  job that had to finish inside a fixed window" already comes from the
  interviewer's proposed generalisation at `03-interview.md` lines 34 to 36,
  which that file marks as still to be confirmed at Gate 2, and no confirmation
  is recorded anywhere in this folder. Revision 3 then adds "the kind of deadline
  that does not negotiate", which asserts a hard, unmovable deadline. That is a
  new fact about the work, attached to a first-person sentence, resting on an
  unconfirmed generalisation. This is the mildest of the three drifts found
  across the three rounds, and it is the only one revision 3 introduced.

### Sourced, no action

- ok  line 6  front matter, "Someone put ... in front of the room to stop more
  people being added to a late project. It worked. We were late anyway. I went
  back to the book to see what AI has actually changed."  -> A3 for the meeting
  and the proposal, A4 for nobody being added and the project running long, A13
  for the motive. All four sentences are now sourced. See the voice pass on
  "We were late anyway".
- ok  lines 14 to 15  "I cannot remember what we said it would take at the start.
  Which tells you how closely anyone was holding that number."  -> A5 for the
  first half. The aside is an inference, and it is the interviewer's own reading
  at `03-interview.md` lines 70 to 72: "That is a fact about how the estimate was
  treated". Grounded in the record rather than invented, so it passes. Worth
  knowing it rests on interviewer commentary, not on Alex's words.
- ok  line 34  "I am rereading it now, along with the ten points I took notes on
  the first time."  -> A1 and A2b. Revision 2 stated both halves, in progress and
  the ten points covered. Revision 3 keeps A1's "rereading now" and folds A2b
  into a subordinate clause, so the post now under-claims rather than
  over-claims. Safe. Q12 would still settle whether the reread is finished.
- ok  line 36  "I went back with one question. Is this outdated in the age of
  AI?"  -> A13, near verbatim. This is the one piece of genuinely new sourced
  material in revision 3.
- ok  lines 38 to 39  "You can get Brooks's big ideas off any summary site in
  ninety seconds, so I am not going to walk you through them."  -> `01-source.md`
  lines 62 to 64. A statement about the post, not about Alex's experience.
- ok  lines 41 to 43  "Six months ago I would have told you the constraint was
  how fast we could write the code ... how well the work is cut up before an
  agent ever touches it."  -> A10 option A, confirmed, plus A6.
- ok  line 52  "I have opinions. Weigh accordingly."  -> A6. Claims nothing
  factual. See N1 on what it replaced.
- ok  lines 54 to 56  "I still disagree. Parallel execution works for me. What
  makes rework expensive is dependencies and hidden complexity, and rework with
  an agent can cost more than rework by hand."  -> A6, close to verbatim on all
  three.
- ok  line 70  "The briefs I work from are often too high level."  -> A6.
- ok  line 85  "The clearest case I have hit was cross-domain."  -> A7.
- ok  lines 90 to 93  "The information I was given up front was wrong on this
  point, an investigation outcome was missing, and the question came back several
  times. An API contract decision was sitting on top of it."  -> A7.
- ok  lines 95 to 96  "I built a bridge between the two concepts instead. It kept
  the design and the implementation simple, it resolved, and it cost rework
  getting there."  -> A8. Claim, then the deflation in the same breath. The best
  voice match in the post.
- ok  line 97  "our shared vocabulary has inconsistencies in it"  -> A8. See N4.
- ok  line 104  "In my experience it gets confused instead"  -> A7.
- ok  line 112  "Here is the thing I had wrong for longer."  -> A10 option C.
- ok  line 114  "I used to think AI would expose thin requirements."  -> A10 C.
- ok  lines 117 to 119  "A senior engineer absorbs the gap ... and the work ships.
  It looks like it worked."  -> A6 and A10 C. The invented consequence from
  revision 1 is still gone.
- ok  line 134  "the year we automated the typing"  -> reader-inclusive, voice
  rule 6 allows it.
- ok  lines 136 to 139  "I am building an AI native software development
  lifecycle ... I have no results to report yet, and I am not going to pretend
  otherwise."  -> A9. Still the best-sourced writing in the post.

### Research attribution

No UNCITED findings. Every research claim in the body is attributed in the text
and carries a References entry.

- ok  line 19  Brooks's Law, 1975.
- ok  lines 47 to 50  McKinney, the agentic tar pit, and the conclusion about
  parallel sessions. Matches `01-source.md` lines 79 to 85.
- ok  line 52  "He is burning ten billion tokens a month." `01-source.md` line 83
  says "over 10 billion tokens a month". The draft drops the "over", which
  under-states rather than over-states. Attributed by "He" to McKinney, named at
  line 47.
- ok  lines 60 to 63  METR, about nineteen per cent slower while believing they
  had been faster. Matches `01-source.md` lines 110 to 112.
- ok  lines 99 to 100  conceptual integrity, designed as if by one mind, and the
  chief architect mechanism. See N3.
- ok  line 124  Brooks on key people.

### Notes, not blocking

- N1  lines 52 and 60. Revision 2 said plainly "I have no numbers to put against
  his". Revision 3 replaces that with "I have opinions. Weigh accordingly." at
  line 52 and "Worth adding that nobody has clean numbers here" at line 60. The
  aside is good writing. The swap trades a sourced personal admission for a claim
  about the whole field, and `01-source.md` lists numbers from McKinney,
  Demirbas and METR, so "nobody has clean numbers" is doing a lot of work through
  the word "clean". Voice rule 3 wants the personal admission stated, not
  implied.
- N2  line 104  "An agent will not paper over that gap the way a person does."
  Not a first-person sentence, so it does not block under the procedure. A7 says
  only that an agent can be confused when a human works on assumptions. The
  contrast with a person who papers over the gap comes from A6 and A10 C, which
  are about a senior engineer absorbing the gap, in a different section. The
  composite is defensible and much weaker than the sentence F2 removed. Flagged
  so nobody reads the underlying idea as now sourced. Q17 remains the way to
  settle it.
- N3  line 100  "His mechanism was a small team around a chief architect." The
  correction is a real improvement on "He had no way to enforce it", which was
  wrong. It is still a compression of two separate things in Brooks: the system
  architect who owns conceptual integrity, and the surgical team, which
  `01-source.md` line 43 lists as its own point. A reader who knows the book will
  notice the merge but will not call it an error.
- N4  line 97  "It only came up because our shared vocabulary has inconsistencies
  in it." A8 says "our system has some inconsistencies". Reading that as
  vocabulary inconsistency is fair in context. The word "only" is new in revision
  3 and makes the cause exclusive, which A8 does not.
- N5  lines 101 to 102  "which in practice is an agreement rather than a
  mechanism." Editorial, absolute, no source. Reads well and claims more than the
  record holds.
- N6  lines 107 to 108  the grounding agent. Still described in the present tense
  as something that does a job, with no instance and no failure mode. The ledger
  keeps its promise not to claim it has run on real work, and the sentence still
  reads to a stranger as a report of behaviour. Q18 open.
- N7  line 67  "the part of the process that has not changed at all." Absolute,
  no source, rhetorical. Carried from round two.
- N8  ledger hygiene. The research table at `05-claims.md` lines 58 to 64 still
  carries revision 2 line numbers. Against revision 3 the correct lines are 19,
  47, 60, 99 and 124.

## Pass 2: voice

### Mechanical

All clean, verified by grep across the whole file including front matter.

- Em dash, en dash, figure dash, section sign: none.
- Banned words: none. Full list from `voice.md` checked.
- Filler openers: none, including "That said," as a paragraph opener.
- Bold spans: none in the file.
- Exclamation marks: none.
- Australian spelling: consistent.
- Sentence length: comfortably inside rule 1. The restructure cut almost every
  long sentence.

One rule still fires, at the same strength as last round.

- lines 6, 14, 41, 97, 100 and 101  voice rule 6. Six team plurals: "We were late
  anyway", "what we said it would take", "how fast we could write the code", "our
  shared vocabulary", "Very few of us work that way", "Fifty years on we call
  it". The last two are close to reader-inclusive and are probably fine. The
  first four are the team, not the reader. "We were late anyway" is new in
  revision 3 and it sits in the front matter, which renders in every feed and
  link card.

### Section verdicts

The Bluffer's Guide shape suits the material. Named subheads, one idea a
paragraph, dry asides. Nothing below marks an aside as a defect for being
informal.

- opening, lines 9 to 15  SPECIFIC. A real meeting, a real proposal, eight
  months, and an admission he cannot remember the estimate. Sharper than revision
  2 and still the best material in the post.

- "Being right is not the same as being on time", lines 17 to 30  SPECIFIC,
  borderline. Lines 19 to 23 are book summary. Lines 25 to 30 are his. "Not
  adding people is not a plan. It is the absence of one specific mistake." is the
  line most likely to be quoted back at him, and it is his.

- "Why I went back to it", lines 32 to 43  no longer ABSTRACT. This is the one
  section that improved on new material rather than on prose. Q13's answer gave
  it a real motive, and the "ninety seconds" line clears the book summary out of
  the way. It passes the concrete test on numbers: ten points, ninety seconds,
  six months. It still contains no incident, and the post still never says which
  of the ten points moved or what one of the notes said. Q12 open.

- "More agents is not the problem", lines 45 to 63  GENERIC. The restructure
  changed the prose, not the verdict. Nineteen lines, of which about eleven are
  McKinney and METR restated. Alex's own contribution is the same three opinion
  sentences it was in revision 2: he disagrees, parallel execution works for him,
  decomposition matters more. There is no fan-out, no task, no shared assumption
  that went unwritten, and nothing that came back and had to be repaired. The
  token aside at line 52 is funny, and the number in it is McKinney's, not
  Alex's. Any competent writer with `01-source.md` open and one sentence of
  Alex's opinion produces this section. `03-interview.md` line 105 named the gap
  two rounds ago, "the answer is a pattern, not a story", and the gap is exactly
  where it was. Q14 is the fix and it is unanswered.

- "The brief is where it goes wrong", lines 65 to 81  GENERIC and ABSTRACT. Same
  answer: the prose changed, the verdict did not. The fragment style at lines 70
  to 72 is the sharpest writing in the post, and it is describing a category, not
  an instance. The section contains no document, no meeting, no date, no number
  and no artifact of any kind. Line 80's "A thin brief cost one developer some
  guessing" correctly avoids the invented unit of a day from revision 1, and
  replaces it with nothing measurable. Line 81's "a fan-out of agents building
  confidently on the guess" is the claim the section exists to make, and it has
  no instance behind it. Q15 is the fix and it is unanswered.

- "Two words for the same thing", lines 83 to 108  SPECIFIC, and still the
  strongest section. Ledger account and bank account, the bridge, the API
  contract sitting on top, the rework. F2 is gone, which removes the paragraph
  that was claiming most on least evidence. Lines 107 to 108 remain a capability
  description with no instance. Q18 open.

- "The part nobody upstream sees", lines 110 to 126  SPECIFIC, borderline. Line
  121 anchors the claim to the cross-domain case, so it attaches to something
  that happened. Lines 125 to 126 are the argument of the post in two sentences
  and they land.

- "Where this actually sits", lines 128 to 139  SPECIFIC. A Slack thread nobody
  wrote in, a half-built lifecycle, and a plain refusal to claim results.

Count: seven body sections, five specific or borderline specific, two GENERIC,
zero ABSTRACT. Under half are GENERIC, so this does not force a full return to
round two.

To answer the question directly: the restructure did not change the verdict on
either GENERIC section. It changed the prose. Both sections are better written
than they were and contain the same amount of Alex, which is three opinion
sentences in one and none in the other. Cutting and rewriting have now been tried
twice. Neither section can be fixed without Q14 and Q15.

### OVERSOLD

- lines 107 to 108  the grounding agent. Keeps A7's "used properly" hedge and
  still never says where it fails. Voice rule 9 wants the concession first.
- line 60  "nobody has clean numbers here." Absolute, and the source file lists
  three sets of numbers.
- line 67  "the part of the process that has not changed at all." Absolute,
  rhetorical.
- lines 101 to 102  "an agreement rather than a mechanism." Absolute, no source.

Resolved from round two: "He had no way to enforce it" is corrected, and the
agent-behaviour paragraph is gone.

### Ending

Not SUMMARY-END. The post lands once, on the Slack thread and the unfinished
lifecycle, and the last sentence is an admission rather than a summary. That is
voice rule 10.

## Pass 3: disclosure

No ticket keys, no employer name, no product name, no internal URL or hostname,
no code block, no account or connection identifier, no colleague name. Grep
confirmed across the draft and the front matter. Every named person is public:
Brooks, McKinney, Demirbas, Gorman.

Six rows, carried forward from round two. Not decided here. Alex rules each one
`keep`, `redact` or `generalise`. The "changed in revision 3" column is the
re-assessment asked for.

| Line | Matched text | Concern | Changed in revision 3 | Decision |
| --- | --- | --- | --- | --- |
| 29 to 30 | "a batch job that had to finish inside a fixed window, which is the kind of deadline that does not negotiate" | Generalised from the work named in A2. `03-interview.md` lines 34 to 36 raise the generalisation and say it is to be confirmed at Gate 2. No confirmation is recorded in this folder. | Worse. The new aside asserts a non-negotiable deadline, which narrows the class of work the description fits. Also F3 in pass 1. | pending |
| 29, 87, 92 | the combination: a batch job with a hard finishing window, plus ledger account and bank account, plus an API contract decision | Each detail is generic alone, and `03-interview.md` line 150 clears the account terms at this level. Together they narrow the work enough that a colleague could name it. Never assessed as a combination anywhere in the record. | Marginally worse, for the same reason as the row above. | pending |
| 70 to 78 | "Requirements reviews and technical kick-offs run in silence", "This is not a complaint about one function" | `03-interview.md` lines 107 to 111 flag that colleagues will recognise their own meetings even with no names. A11 records the shared-failure framing choice, so the sourcing is clear. The recognition risk is not. | Unchanged in substance. The fragment style at lines 70 to 72 makes the criticism read as sharper, not softer. | pending |
| 130 | "Slack thread" | Names the messaging tool used at work. Public product, generic usage, almost certainly fine. Listed because the procedure says report every hit. | Unchanged. | pending |
| 107, 136 | "A grounding agent", "I am building an AI native software development lifecycle" | If this is employer work rather than personal work, the post announces an unreleased internal project on a public site under a real name. A9 does not say which it is. | Unchanged. | pending |
| 6, 14 | "We were late anyway", "about eight months" | A real duration for a real project, and a public statement that it was late. Low risk, no product or customer attached, and the number is the point of the opening. | The lateness admission now sits in the front-matter description as well as the body, so it renders in feeds and link cards. | pending |

Publish is blocked while any row is pending.

## What is blocking, and who has to act

This is the final permitted round, so the state of each item is set out plainly.

| Item | Who acts | Can it be resolved without Alex |
| --- | --- | --- |
| F3, "the kind of deadline that does not negotiate" | Reviser | Yes. Cutting the clause at line 30 removes the drift. The underlying generalisation at line 29 still needs Alex, but as a disclosure row, not a sourcing block. |
| Six pending disclosure rows | Alex | No. The procedure says Alex rules each row `keep`, `redact` or `generalise`, and says not to decide on his behalf. Four of the six look low risk on their face. That judgement is still not the checker's to make. |
| GENERIC section "More agents is not the problem" | Alex, via Q14 | No. Two revisions of cutting and rewriting have not moved it. |
| GENERIC section "The brief is where it goes wrong" | Alex, via Q15 | No. Same. |
| Q12, Q16, Q17, Q18, Q19 | Alex | No. None of them blocks publish now. Q17 and Q18 would let the two weakest paragraphs in the strongest section carry real weight. |

The shortest route to CLEAR is six one-word decisions from Alex on the disclosure
table, plus one clause cut. That gets the post to publishable. It does not get
the two GENERIC sections to good, and nothing except Q14 and Q15 will.

## Verdict

BLOCKED: 0 unsourced, 1 drifted claim, 6 unresolved disclosure hits. 2 sections
still GENERIC after a second revision, which does not block on its own and will
not be fixed by more rewriting.
