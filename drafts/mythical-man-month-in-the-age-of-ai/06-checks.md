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

## Gate 2: disclosure decisions, 2026-08-27

Alex delegated these rulings rather than making them himself. Recorded as
delegated, not as his own judgement, so a later reader knows who decided.
Conservative reading applied throughout: where a detail could narrow the work and
was not load bearing, it was cut.

| Row | Decision | What was done |
| --- | --- | --- |
| Batch job with a fixed window | generalise, by removal | The whole clause is gone. The sentence now reads "I read the book for the first time because of that meeting." The detail was colour, not argument, so nothing is lost. |
| Combination risk: batch job plus ledger and bank account plus API contract | resolved | Removing the batch job clause breaks the combination. What remains, two accounting nouns and an API contract, describes a large share of financial software and does not narrow to one project. |
| Silent requirements reviews and kick-offs | keep | The shared-failure framing Alex chose at A11 is in place, and the passage no longer claims he personally stayed quiet. Colleagues may still recognise the meeting type. That is the cost of writing about it at all, and it is a fair cost. |
| "Slack thread" | keep | Public product, generic usage, and the joke depends on it. |
| "I am building an AI native software development lifecycle" | keep, closed by Alex | Raised as conditional and then closed by Alex on 2026-08-27, A20: the term is common in the industry and he is happy to use it. No employer is named and the sentence describes the work, not an internal programme. |
| "over six months" | keep | A duration with no product, customer or date attached. Alex corrected the figure from nearly eight months to over six on 2026-08-27, recorded as A5b. |

All six rows are closed. Gate 2 is complete.

## Sections that were GENERIC

Not fixed by answers, because Q14 and Q15 were not answered and inventing an
answer was refused. Fixed structurally instead.

- "The brief is where it goes wrong" no longer exists as a section. Its claims
  were abstract because they had no instance, and the cross-domain story in the
  next section is an instance of exactly those claims. The two are now one
  section: the pattern is stated, then immediately paid off by the story. Nothing
  was invented and nothing true was lost.
- "More agents is not the problem" was trimmed so the borrowed material stops
  outweighing Alex's position. The METR paragraph went, because it argued against
  a point the post was not making, and its removal leaves the section as what it
  honestly is: a short, attributed disagreement.

Both changes reduce the post. That is the correct direction when the material is
missing. A section with no instance in it should get shorter, not longer.

## Final verification, round 4

Run by a fresh agent with no sight of the drafting conversation or of rounds 1
to 3 as they happened. Findings only, nothing fixed. Line numbers refer to
`04-draft.md` as it stands now, 974 words across six body sections.

Two things were checked that the earlier rounds did not check: whether the Gate 2
rulings match what the draft now says, and whether the file that actually
publishes, `content/posts/mythical-man-month-in-the-age-of-ai.md`, matches the
draft. The second check is where this round found its real problems.

### Gate 2 rulings against the current draft

| Gate 2 row | Ruling | Draft now | Verdict |
| --- | --- | --- | --- |
| Batch job with a fixed window | generalise, by removal | Line 28 reads "I read the book for the first time because of that meeting." Grep for "batch", "window", "pay run" returns nothing in the draft. | Honoured. |
| Combination: batch job plus ledger and bank account plus API contract | resolved by removing the batch job | Ledger account, bank account and the API contract survive at lines 68 and 73. The batch job is gone, so the combination is broken as the ruling says. | Honoured. |
| Silent requirements reviews and kick-offs | keep | Present, but moved. In revision 3 this was a general present-tense pattern in its own section. It now sits at lines 80 to 81 inside the cross-domain story, as "the meetings where it should have surfaced ran in silence". | Honoured in substance, changed in form. See N9. The ruling was made against a general statement. The draft now reads as a statement about one project's meetings, which is the recognition risk the row was about. |
| "Slack thread" | keep | Line 119. | Honoured. |
| "I am building an AI native software development lifecycle" | keep, closed by Alex, A20 | Line 125, unchanged. | Honoured. The round 3 row also matched "A grounding agent" at what is now line 96. The Gate 2 row names only the lifecycle sentence. A20's reasoning covers the grounding agent too, but nobody wrote that down. |
| "over six months" | keep | Line 14, "The project took over six months". | Honoured in the draft. Not honoured in the published file. See F1. |

The round 3 row also matched "We were late anyway" in the front-matter
description. The Gate 2 row discusses only the duration. The phrase is still at
line 6. Reading `keep` as covering both halves of the row is reasonable and is
what appears to have happened.

No new disclosure hits in the draft. No ticket keys, no employer, no product, no
internal host, no colleague name, no code block. One new hit in the published
file, listed in pass 3.

### The duration correction

The draft, the ledger and the Gate 2 table agree on "over six months".

- Draft line 14: "The project took over six months".
- Ledger revision 2 table, row for line 13, cites A5 and A5b and says the
  corrected figure is used.
- `03-interview.md` lines 70 to 73 record A5b in Alex's words.
- Gate 2 row: "over six months", with the correction attributed and dated.
- Front matter carries no duration at all, so nothing to go stale there.

Two stale survivors, neither in published text:

- `05-claims.md` line 96, under "Still deliberately not written": "Any planned
  duration for the eight-month project." That is a live statement about the
  current post, not a round record, and it still says eight months.
- `06-checks.md` lines 198 and 297 say "eight months". Those are the round 3
  record and should stay as written. A record of what was true then is not a
  stale figure.

### The section merge

"The brief is where it goes wrong" is gone and its material sits inside "Two
words for the same thing". Claim by claim, nothing was orphaned:

| Claim from the deleted section | Where it is now |
| --- | --- |
| "Which moves the problem upstream, into the part of the process that has not changed at all." | Lines 59 to 60, opening the merged section. |
| "The briefs I work from are often too high level" and the three fragments after it | Lines 60 to 62, unchanged. |
| "Requirements reviews and technical kick-offs run in silence." | Reworded into lines 80 to 81. |
| "This is not a complaint about one function ... handed to whoever writes the code." | Lines 81 to 83, unchanged. |
| "That used to be survivable. A thin brief cost one developer some guessing. Now it costs a fan-out of agents building confidently on the guess." | Lines 85 to 86. The middle sentence was dropped, which is the right call: round 3 marked it as replacing an invented unit with nothing measurable. |

The merge did not lose a claim. It did create one new sentence and it did leave
two transitions damaged. N9, N10, N11 and N12 below.

The METR paragraph is gone from the body. Its References entry survives at lines
136 to 137. That is a reference with nothing citing it, which the procedure does
not forbid. Its ledger row is now orphaned. See N13.

### Pass 1: sourcing

Twenty-four draft lines carry first person, front matter included. Twenty-three
have a ledger row. One does not.

#### Blocking, in the draft

- **BLOCKING UNSOURCED  line 25**  "We did the right thing and the schedule went
  exactly where it was always going."  No ledger row, in either table. Grep for
  "right thing" and "schedule went" across `05-claims.md` returns nothing. The
  sentence is first person plural about the team, so it is inside the pass 1
  net. Round 3 reported "every one has a ledger row", and its voice pass listed
  six team plurals when there are seven, so this line was missed twice.
  Substance check: both halves are supported by A4, nobody was added and the
  project ran far over. The gap is the ledger row, not the claim. The fix is one
  row, not a cut. It still blocks under the written rule, and the written rule is
  the reason two earlier rounds caught invented material.

#### Blocking, in the file that publishes

`content/posts/mythical-man-month-in-the-age-of-ai.md` is modified in the working
tree and no longer matches `04-draft.md`. The committed version at 6973bfb does
match. Someone has round-tripped the working copy through an editor that inserts
curly quotes, escapes square brackets and leaves trailing double spaces, and made
content edits inside it that never came back to the draft or the ledger.

The procedure scopes pass 1 to `04-draft.md`. These are reported as blocking
anyway, because that file is what Hugo renders and the whole point of the gate is
that nothing unsourced reaches the public site.

- **F1  BLOCKING DRIFTED  published line 13**  "The project took about over 6
  months."  A stale figure artefact: "about eight months" was edited to "over six
  months" without removing "about", so the published text now reads "about over
  6 months". It is ungrammatical and it is the one figure Alex personally
  corrected. The same edit deleted "Which tells you how closely anyone was
  holding that number", which has a ledger row at `05-claims.md` line 13.

- **F2  BLOCKING UNSOURCED  published line 21**  "I read the book for the first
  time because of that meeting on 2024."  The date is new, has no ledger row, and
  contradicts the record: `03-interview.md` line 28 reads "First read was 2025",
  derived from A2's "last year" given in an interview dated 2026-08-26. Alex may
  have corrected himself. Nothing in this folder says so, and 00-state.md's own
  process note is the rule here: an answer that does not reach the file did not
  happen.

- **F3  BLOCKING UNSOURCED  published line 9**  "I still remember that someone
  proposed adding people to a project that was already late."  "I still remember
  that" is a new first-person memory claim with no ledger row. It is a small
  claim and A3 supports the underlying event, but it was added outside the
  ledger, which is exactly the route the invented material took in rounds 1
  and 2.

- **F4  BLOCKING, front matter  published lines 1 to 8**  The YAML block is
  destroyed. There is an opening `---` and no closing one, `title:` has become a
  markdown H2, every value is wrapped in curly quotes, and the tag and category
  brackets are backslash-escaped. Hugo will not parse this as front matter. The
  title has also changed to "The book won the argument and the project was still
  late, is this outdated in the age of AI?" and the date has moved back to
  2026-08-24. Neither change is recorded anywhere.

  One more content edit rides along, at published line 38: "Now the constraint is
  how well the work is cut up". Harmless, sourced to A10 option A either way,
  listed for completeness.

#### Sourced, no action

The twenty-three remaining first-person lines all carry rows and all still say
what their rows say. Spot-checked against the interview rather than against round
3's report:

- line 6 front matter, to A3, A4, A13. Unchanged from round 3.
- line 14, to A5 and A5b, with the corrected figure.
- line 28, to A2 and A3, now with the batch job clause gone.
- lines 32, 34, 36 to 37, to A1, A2b, A13, `01-source.md` lines 62 to 64.
- lines 39 to 41, to A10 option A and A6.
- lines 49, 51 to 53, to A6 and McKinney.
- line 60, to A6.
- lines 66, 71 to 74, 76 to 78, to A7 and A8.
- lines 93 to 94, to A7.
- lines 101, 103, 106 to 108, to A10 option C and A6.
- line 123, reader-inclusive, voice rule 6 allows it.
- lines 125 to 128, to A9.

No MISATTRIBUTED findings. No first-person sentence points at a `[research]`
block. No UNCITED findings: Brooks, McKinney and the token figure are attributed
in the text and carry References entries.

#### Notes, not blocking

- **N9  lines 80 to 81**  "None of that was in the brief, and the meetings where
  it should have surfaced ran in silence."  New in this revision, created by the
  merge, and it has no ledger row. Not first person, so it does not block under
  the procedure, the same call round 3 made on N2. It is the most consequential
  thing in this round after the published file. It welds two separately sourced
  claims into one sentence about one project. A7 supports "the upfront info was
  wrong and an investigation outcome was missing". A6 supports the silent
  meetings as a general pattern, present tense, no project attached. Nothing in
  the interview says the meetings on the cross-domain work were silent. In
  revision 3 the reader met a general complaint. Now the reader meets a specific
  event that was never described. It should either get a ledger row that admits
  it is a composite, or go back to the general tense.
- **N10  line 45**  "Wes McKinney calls it the agentic tar pit."  "It" has no
  antecedent. The sentence that supplied one, "There is a good argument going
  around that agents make Brooks worse", was cut this round. The section now
  opens on a dangling pronoun directly under a heading.
- **N11  line 51**  "I still disagree."  Same cut, same cause. There is now
  nothing earlier in the section to be still disagreeing with. The McKinney
  sentence states a conclusion but the post never frames it as an argument being
  made at the reader.
- **N12  line 59**  "Which moves the problem upstream" opens a section as a
  sentence fragment. Its antecedent, "Decomposition was always a good skill", is
  on the far side of a heading. This was already awkward in revision 3, where a
  METR paragraph sat between the two. It is less bad now and still wrong.
  Related: the heading "Two words for the same thing" does not describe its first
  two paragraphs, which are about thin briefs. The merged section is carrying the
  old section's opening under the new section's name.
- **N13  ledger staleness.**  Confirmed stale, as expected. Every line number in
  both tables refers to revision 2 or 3. Against the current draft the revision 3
  table's rows map to lines 6, 15, 28, 34, 36, 49, 89 and 119. The research table
  maps to 19, 45 and 88, with one row that maps to nothing. Four rows are worse
  than stale:
  - Research table line 63, "Nineteen per cent slower while believing they were
    faster", points at a claim that is no longer in the draft. The METR paragraph
    was cut. Orphaned row.
  - The revision 3 table has two rows both labelled line 30, both REMOVED, which
    reads as a duplicate until you notice they are two different clauses.
  - Revision 2 table row for line 49 quotes "I disagree with the conclusion, and
    I have no numbers to put against his." Only the first half survives, as "I
    still disagree" at line 51.
  - "Still deliberately not written" line 96 still says "the eight-month
    project".
- **N14  References.**  METR is listed and nothing in the body cites it now. Not
  a procedure violation. Worth a decision rather than an accident.
- **N15  `03-interview.md` lines 213 to 214.**  There are two "### Q11
  [disclosure] C1, C6" headings. The first has no content under it and is
  immediately followed by the Q20 heading. A20 is recorded correctly. The stray
  heading is record hygiene.
- Carried unchanged from round 3, all still true: N3 the chief architect and the
  surgical team compressed into one; N4 the word "only" at line 78; N5 "an
  agreement rather than a mechanism"; N6 the grounding agent described as
  behaviour with no instance, Q18 open; N7 "has not changed at all".
- Resolved by this revision: round 3's N1 and its OVERSOLD entry for "nobody has
  clean numbers here". The METR paragraph carried that sentence and both are
  gone.

### Pass 2: voice

#### Mechanical

All clean, verified by grep over the whole file including front matter.

- Em dash, en dash, figure dash, section sign: none.
- Banned words, full `voice.md` list: none. No "harness" as a verb, no
  "landscape", no "leverage".
- Filler openers: none. No "That said," as a paragraph opener.
- Bold spans: zero in the file.
- Exclamation marks: zero.
- Australian spelling: consistent.
- Sentence length: inside rule 1 throughout.

One rule fires, at slightly higher strength than round 3 reported.

- Lines 6, 14, 25, 39, 78, 89, 90 and 123. **Seven team plurals, not six.** Round
  3's list missed line 25, "We did the right thing". The team, not the reader:
  "We were late anyway", "what we said it would take", "We did the right thing",
  "how fast we could write the code", "our shared vocabulary". Close to
  reader-inclusive and probably fine: "Very few of us work that way", "we call
  it", "the year we automated the typing". Voice rule 6 wants first person
  singular. Non-blocking, unchanged in character since round 2.

#### Section verdicts

Six body sections now, down from seven.

- opening, lines 9 to 15  **SPECIFIC.**  Unchanged except the duration. Still the
  best material in the post.
- "Being right is not the same as being on time", lines 17 to 28  **SPECIFIC,
  borderline.**  Shorter now that the batch job clause is gone. "Not adding
  people is not a plan. It is the absence of one specific mistake." is still the
  line that carries the section.
- "Why I went back to it", lines 30 to 41  **SPECIFIC, borderline.**  Unchanged.
  Ten points, ninety seconds, six months. No incident, and the post still never
  says which of the ten points moved. Q12 open.
- "More agents is not the problem", lines 43 to 55  **GENERIC.**  Improved, not
  fixed. The cut worked as intended: thirteen lines where there were nineteen,
  and the borrowed material no longer outweighs Alex's position. What is left is
  three McKinney sentences, one token aside, and the same three opinion sentences
  Alex has had since revision 2. There is still no fan-out, no task, no
  assumption that went unwritten, nothing that came back and had to be repaired.
  A competent writer with `01-source.md` open and one sentence of Alex's opinion
  still produces this. Q14 is the fix and it is still unanswered. This is the
  third round with the same verdict and the note in `03-interview.md` line 110
  said it first: the answer is a pattern, not a story.
- "Two words for the same thing", lines 57 to 97  **SPECIFIC.**  The merge did
  its job. Round 3 marked the brief material ABSTRACT because it described a
  category with no instance. The instance now follows it in the same section,
  three paragraphs later. That is the correct structural answer to an unanswered
  Q15, and it is honest, because nothing was invented to fill the hole. The
  section is long and it earns the length. Lines 96 to 97 remain a capability
  description with no instance, Q18 open.
- "The part nobody upstream sees", lines 99 to 115  **SPECIFIC, borderline.**
  Unchanged.
- "Where this actually sits", lines 117 to 128  **SPECIFIC.**  Unchanged.

Count: six body sections, five specific or borderline specific, one GENERIC, zero
ABSTRACT. Round 3 was seven sections, two GENERIC, and it recorded the brief
section as ABSTRACT as well. Deleting a section is a blunt fix and in this case it
was the right one. The post got shorter and more of it is now Alex.

#### OVERSOLD

- lines 96 to 97, the grounding agent. Keeps A7's "used properly" hedge, still
  never says where it fails. Voice rule 9 wants the concession first. Carried.
- lines 59 to 60, "the part of the process that has not changed at all."
  Absolute, rhetorical. Carried.
- lines 90 to 91, "an agreement rather than a mechanism." Absolute, no source.
  Carried.
- Resolved: "nobody has clean numbers here", cut with the METR paragraph.

#### Ending

Not SUMMARY-END. The post lands on the Slack thread and the half-built lifecycle,
and the last sentence is an admission. Voice rule 10 satisfied. Unchanged.

### Pass 3: disclosure

The draft is clean and Gate 2 is closed. Grep confirms no ticket key, no
employer, no product name, no internal URL or hostname, no code block, no account
identifier, no colleague name. Every named person is public.

One new row, and it is in the published file rather than the draft.

| File and line | Matched text | Concern | Decision |
| --- | --- | --- | --- |
| `content/posts/...md` line 21 | "because of that meeting on 2024" | A date attached to a work anecdote. The procedure lists dates of unreleased work as a hit, and a year narrows the class of work a colleague would have to sort through. It also partly reverses the Gate 2 ruling on this exact sentence, which was "generalise, by removal" and took narrowing detail out of it. Separately blocking as F2 because it is unsourced and contradicts the record. | pending |

Two Gate 2 rows deserve a second look, neither of them a new hit:

- The silent meetings row was ruled `keep` against a general statement. The
  passage is now attached to one project. The ruling is probably still what Alex
  would say. It was not made against this wording.
- The lifecycle row closed two matched texts with one ruling and only names one
  of them. A20's reasoning covers the grounding agent as well. Nobody wrote that
  down.

### Is the post honest

The draft, yes, with two things named out loud.

Every claim in `04-draft.md` traces to something Alex said, and the two rounds
that found invented material found it in places this round can confirm are still
empty. The reread motive is A13's question, not a feeling somebody wrote for him.
The duration is his own correction. The bridge, the two account nouns, the API
contract and the rework are A7 and A8 almost verbatim. The ending claims no
results, which is the hardest kind of honesty for a post like this and it holds.
The two structural fixes in this revision, deleting a section and cutting a
paragraph, both made the post smaller rather than filling holes with invention.
That is the right direction and it was done properly.

The two things:

1. Line 80's "the meetings where it should have surfaced ran in silence" is a
   composite. Both halves are sourced, to different answers, about different
   scopes. Welded together they tell the reader about an event nobody described.
   It is a small step and it is the same kind of step that produced the findings
   the earlier rounds caught: a true general claim getting attached to a specific
   story because the story needed it.
2. Line 25 has no ledger row. The claim is true against A4. The record does not
   say so, and the record is the only thing a checker can see.

The file that would actually publish, no. It carries a mangled duration, a year
that contradicts the interview, an added memory claim, a changed title and date,
and front matter Hugo cannot parse. None of that went through the ledger. This is
not the draft's fault and it is not a small thing: the gate has now been run four
times on a file that is no longer the file that ships.

### Verdict

BLOCKED: 4 unsourced or drifted claims (1 in the draft, 3 in the published file),
1 broken front matter block, 1 unresolved disclosure hit. Gate 2 is closed and all
six of its rulings are honoured in the draft. 1 section still GENERIC, down from
2, which does not block on its own.

## Verification, round 5

Run by a fresh agent on draft revision 5, with no sight of the drafting
conversation or of rounds 1 to 4 as they happened. Findings only, nothing fixed.
Line numbers refer to `04-draft.md` as it stands now, 1100 words across six body
sections plus References.

Round 4's top finding was that the draft and the file that publishes had
diverged, and that four rounds of checks had audited the wrong file. That is the
first thing checked here.

### Draft against the published file

Byte-identical. The `sha256` of both files is
`2f88b4fbe0f9843159ed84aee7b293f6ccfc0d1a723c5d996bac1a1676f382ef`, 6653 bytes
each, and `diff` returns nothing.

Round 4's F1 to F4 were all artefacts of that divergence. Checked individually
against the current file:

| Round 4 finding | State now |
| --- | --- |
| F1, "about over 6 months" | Gone. Line 15 reads "The project took over six months". No "about", no "eight", no digit form. |
| F2, "on 2024" unsourced | Sourced. A21 now exists at `03-interview.md` line 248 and the ledger carries a row. Still a live disclosure row. See pass 3. |
| F3, "I still remember that someone proposed" with no row | Row added, `05-claims.md` line 30, to A3. |
| F4, destroyed YAML block | Repaired. Opening and closing `---`, straight quotes throughout, unescaped brackets, no trailing whitespace. Hugo will parse it. |

The front matter title and the 2026-08-24 date, which round 4 flagged as
unrecorded, now carry rows at `05-claims.md` lines 28 and 29.

### The other round 4 items

| Item | State | Evidence |
| --- | --- | --- |
| Missing ledger row, "We did the right thing and the schedule went exactly where it was always going" | RESOLVED | `05-claims.md` line 34, to A4, with the gap named honestly as a ledger gap rather than a post gap. |
| Orphaned METR research row | RESOLVED | The research table at `05-claims.md` lines 95 to 100 has four rows and none is METR. The removal is minuted at line 37. |
| Stale figure, "the eight-month project" | RESOLVED | `05-claims.md` line 131 now reads "Any planned duration for the project." A grep for "eight" across the draft and the ledger returns nothing. |
| N10, dangling "it" at "Wes McKinney calls it the agentic tar pit" | RESOLVED | Line 46 restores the antecedent: "There is a good argument going around that agents make Brooks worse." |
| N11, "I still disagree" with nothing to disagree with | RESOLVED by removal | The sentence is gone. Line 51 is now "He is burning ten billion tokens a month. I have opinions. Weigh accordingly.", and the disagreement is carried by "Yes and no" at line 53, which is A22's own opening. |
| N9, the welded silent-meetings sentence | RESOLVED | Lines 93 to 94 now read "None of that was in the brief. The meetings where that sort of thing should surface run in silence, requirements reviews and technical kick-offs both." The brief gap stays specific to the story. The silence goes back to general present tense, which is what A6 supports. The weld is broken and the ledger row at line 35 explains why. |

Six of six addressed, none cosmetically.

### The rewritten section, clause by clause against A22

This is the check the round was called for. A22 is recorded verbatim at
`03-interview.md` lines 255 to 264. Every clause of draft lines 53 to 68 is
matched against it below. Anything in the draft with no matching clause would be
smuggled material.

| Draft | A22 | Verdict |
| --- | --- | --- |
| 53, "Yes and no." | "Yes and no." | Verbatim. |
| 53 to 54, "Parallel execution is not the risk. It should be the default now, with sequential demoted to the exception." | "Parallel execution isn't the risk - it should actually be our default mode in the age of AI, with sequential execution demoted to the exception." | Verbatim in substance. "the default now" for "our default mode in the age of AI" is compression, not amplification. |
| 56 to 57, "What burns people is turning agents loose on dependencies and hidden complexity that nobody resolved first." | "Where people get burned isn't from using too many agents; it's from letting agents hit dependencies and hidden complexity unprepared." | Match. "that nobody resolved first" renders "unprepared", and A22's second condition supplies the resolving. The dropped half, "isn't from using too many agents", is carried by the section heading. |
| 57 to 58, "That is where rework with an agent costs more than rework by hand." | "where AI rework suddenly costs more than human rework" | Match. See N17 on the dropped hedge. |
| 60, "Two conditions make it work." | "To make parallel agents work, you need two strict conditions" | The closest thing to drift in the passage. See N16. |
| 62 to 63, "One, a single source of truth that is genuinely agent-ready. Clean decomposition up front, every dependency resolved before an agent touches a line." | "first, a single source of truth that is truly 'agent-ready' - meaning clean upfront decomposition with every dependency resolved before an agent touches a single line" | Near verbatim. |
| 65 to 66, "Two, human judgment anchored at both ends. Full control of what goes in, and a firm gate before anything is delivered." | "Second, crisp human judgment anchored at both ends: total control over the initial input, and a firm last gate before delivery." | Near verbatim. "crisp" and "last" dropped, both weakening. |
| 68, "That is not rocket science. It is just clean architecture." | "That's not rocket science; it's just clean architecture." | Verbatim. |

Nothing was added. Nothing was smuggled in. No fan-out, no repair, no number and
no anecdote appears that A22 does not contain, which is exactly where the earlier
rounds found invented material. The compression is honest and it runs in the
weakening direction on every judgement call except one, N16.

The removal recorded at `05-claims.md` line 15, "Decomposition was always a good
skill. It matters more than it did.", is confirmed gone from the draft, and the
reasoning holds: A22 makes the same point with a mechanism behind it.

Lines 46 to 51, the McKinney setup and the token aside, are not from A22. They
carry their own rows, the research table row for the tar pit and the revision 3
row at `05-claims.md` line 54 for the token figure, and both check out against
`01-source.md` lines 79 to 85. "ten billion" understates the source's "over 10
billion", which is the safe direction.

### Section verdict on "More agents is not the problem"

**No longer GENERIC.** Verdict changed after three consecutive rounds of GENERIC.

The test is whether a competent writer with the same research could have produced
it. With `01-source.md` open, that writer produces McKinney's tar pit and then
either agrees with it or hedges. They do not produce "it should be the default
now, with sequential demoted to the exception", which is the opposite of
McKinney's conclusion and is stated as an operating position rather than as a
reaction. They do not produce the two conditions, because the two conditions
describe how one particular person runs agents: an agent-ready single source of
truth with every dependency resolved before a line is written, and human
judgement clamped on the input and on the delivery gate. That is a described
mechanism, and `01-source.md` line 123 names showing the machinery as one of the
two ways this post is worth reading.

The ratio moved as well. Six lines of borrowed setup and aside against sixteen
lines of Alex. In revision 3 it was the other way round.

Not ABSTRACT either, under the written test: the section carries concrete nouns
and a number.

What has not changed, and should be said plainly rather than graded away: this is
still a position, not a story. There is no fan-out, no task that came back wrong,
nothing repaired. Q14 is still unanswered. The difference is that the section no
longer needs an answer to it, because a mechanism stated by the person who uses
it is original material in a way that an opinion was not. `03-interview.md` lines
266 to 271 make that call explicitly, and on the evidence it is the right one.

### The year

A21 settles it. Checked in all three places:

- Draft line 29: "I read the book for the first time because of that meeting, in 2024."
- Ledger `05-claims.md` line 12: row to A21, with the conflict named and resolved.
- Interview `03-interview.md` line 248: A21, "2024 was the first read."

No contradictory year survives in published text. A grep for 2025 in the draft
returns only the two References entries, both from METR's title and publication
year.

Two contradictions survive in the record, neither of them in published text:

- **N18** `03-interview.md` line 28 still reads "First read was 2025, during a
  performance optimisation project." That is the interviewer's gloss on A2 and it
  was never updated after A21. It is the exact line round 4 cited to raise F2. A
  round 6 reading the interview top to bottom would raise F2 again. The ledger row
  at line 12 does the reconciling work, so this does not block, but the gloss is
  now wrong and should say so.
- **N19** Q21 at `03-interview.md` lines 322 to 328 has an empty answer slot. A21
  is filed under Q12 at line 248, whose question asks something else entirely,
  whether the reread is finished or still going. Q12's own question is therefore
  still unanswered while appearing answered. Record hygiene, the same class as
  round 4's N15, which is also still open at lines 213 to 214.

### Pass 1: sourcing

Twenty-four lines carry first person, front matter included. All twenty-four have
a ledger row, and every row points at a line that exists.

Mapped independently against `03-interview.md` rather than against round 4's
report: lines 6, 9, 15, 26, 29, 33, 35, 37 to 38, 40 to 42, 51, 73, 79, 84, 89 to
91, 103 to 104, 107, 115, 117, 137 and 139 to 142.

- **0 UNSOURCED.** Round 4's single draft blocker, then line 25, is closed.
- **0 MISATTRIBUTED.** No first-person sentence points at a `[research]` block.
  The McKinney material at lines 46 to 51 stays in the third person and names him.
- **0 UNCITED.** Brooks, the tar pit, the token figure and Brooks on key people
  are all attributed in the text and all carry References entries.
- **0 DRIFTED.** The two candidates are N16 and N17 below. Both stay inside what
  A22 says and neither introduces a fact.

Notes, not blocking:

- **N16  line 60**  "Two conditions make it work." A22 says "you need two strict
  conditions". A22 states them as necessary. The draft phrasing leans sufficient,
  and it drops "strict". This is the one place in the rewritten passage where the
  compression moves the claim in the strengthening direction. It is small, and it
  is a modality shift rather than a new fact, so it does not meet the DRIFTED bar.
  "You need two conditions" would match A22 exactly and costs nothing.
- **N17  lines 57 to 58**  "rework with an agent costs more than rework by hand",
  flat. A22 supports the flat form: "AI rework suddenly costs more than human
  rework". A6, the earlier answer, hedged it, "rework with AI might costs more",
  and the revision 2 ledger row used "can cost more". A22 is the newer and more
  direct statement, so the flat form is defensible, and the scope is narrowed by
  "That is where". Recorded because a hedge was dropped, not because it is wrong.
- **N20  lines 110 to 111**  "A grounding agent helps, used properly. It goes and
  checks what a brief claims against the code, instead of waiting for someone to
  volunteer the missing detail." The first sentence is A7 almost word for word.
  The second is not in A7. Its wording traces to the interviewer's own gloss at
  `03-interview.md` lines 134 to 135. It is not first person, so it does not block
  under the procedure, and it reads as a definition of what a grounding agent is
  rather than a claim about what Alex's one did. It has survived four rounds
  unchallenged, so it is carried rather than newly raised. Q18 is the answer to it.
- **N21  line 26**  "the schedule went exactly where it was always going." A4 says
  the project dragged and finished late. It does not say the outcome was
  predetermined. The sentence is rhetoric on a sourced fact, in the voice's
  claim-then-deflate register, and the ledger row at line 34 is honest about what
  A4 covers. Non-blocking.
- **N22  ledger precision.**  The revision 5 row at `05-claims.md` line 13 gives
  its range as "45 to 62". The A22 material actually sits at lines 53 to 68, so
  the row both misses its own last two clauses and swallows the McKinney
  sentences, which belong to a different row. The STALE warning at line 40 is
  scoped to the revision 2 and 3 tables only. Match by sentence, as that warning
  says, and the row is complete. By number it was wrong on the day it was written.
- **N23  References.**  METR, Gorman and Demirbas are listed and none of the three
  is cited in the body. Not a procedure violation. Round 4's N14 raised METR
  alone; the other two are in the same position and always have been.
- Carried unchanged and still true: N3, the chief architect and the surgical team
  compressed into one, line 103; N4, the word "only" at line 90; N5, "an agreement
  rather than a mechanism", line 105; N7, "has not changed at all", line 72.

### Pass 2: voice

#### Mechanical

All clean. Verified by grep over the whole file including front matter.

- Em dash, en dash, figure dash, section sign: none. A22 uses " - " as a dash
  twice and the draft converted both to full stops, which is the rule applied
  correctly to a verbatim source.
- Curly quotes: none. All apostrophes and quotes are straight.
- Banned words, the full `voice.md` list: none.
- Filler openers: none. No "That said," as a paragraph opener.
- Bold spans: zero in the file.
- Exclamation marks: zero.
- Trailing whitespace and tabs: none.
- Australian spelling: one hit, "judgment" at line 65. It is A22's own spelling,
  Alex's word, and it is the accepted form in technical and legal use. Reported
  because the mechanical pass is mechanical. Not a finding.

One cosmetic artefact, new this revision:

- **N24  line 95**  The paragraph at lines 93 to 97 has a three-word line, "is
  not a", left over from editing "This is not a complaint about one function" in
  place. Markdown joins soft-wrapped lines, so it renders correctly and it is not
  a publish problem. It is the visible fingerprint of an in-place edit, which is
  the same class of slip that produced round 4's whole first section.

#### Section verdicts

Six body sections.

- opening, lines 9 to 16  **SPECIFIC.**  Unchanged. Still the best material in
  the post.
- "Being right is not the same as being on time", lines 18 to 29  **SPECIFIC.**
  Promoted from borderline. The year lands the meeting in time, and "Not adding
  people is not a plan. It is the absence of one specific mistake." still carries
  the section.
- "Why I went back to it", lines 31 to 42  **SPECIFIC, borderline.**  Unchanged.
  The post still never names which of the ten points moved. Q12 open, and N19
  explains why it looks closed.
- "More agents is not the problem", lines 44 to 68  **SPECIFIC.**  Verdict changed
  from GENERIC. Reasoning above.
- "Two words for the same thing", lines 70 to 111  **SPECIFIC.**  Unchanged. The
  merge still does its job, and lines 93 to 94 no longer overclaim.
- "The part nobody upstream sees", lines 113 to 129  **SPECIFIC, borderline.**
  Unchanged.
- "Where this actually sits", lines 131 to 142  **SPECIFIC.**  Unchanged.

Count: six body sections, zero GENERIC, zero ABSTRACT. Round 4 was one GENERIC,
round 3 was two. The section that resisted two revisions of cutting was fixed by
one interview answer, which is what the round two loop is for.

#### OVERSOLD

- line 60, "Two conditions make it work." No qualifier and no concession, and
  A22's "strict" was dropped. New this revision. Also N16.
- lines 72 to 73, "the part of the process that has not changed at all." Carried.
- lines 104 to 105, "an agreement rather than a mechanism." Carried.
- lines 110 to 111, the grounding agent. Keeps A7's "used properly" and still
  never says where it fails. Carried, Q18 open.
- Not oversold: lines 53 to 54. The claim that parallel should be the default is
  strong, but "Yes and no" precedes it and the failure conditions follow it in the
  next paragraph. Rule 9 is satisfied by structure.

#### Voice rule 6, team plurals

Eight uses of "we", "us" or "our". Five are the team: lines 6, 15, 26, 40 and 91.
Three are reader-inclusive and allowed: lines 103, 104 and 137. Down from round
4's count, because the section rewrite removed two. Non-blocking, and unchanged
in character since round 2.

#### Ending

Not SUMMARY-END. The post lands on the Slack thread, the year we automated the
typing, and an admission that there are no results yet. Rule 10 satisfied.

### Pass 3: disclosure

The draft carries no ticket key, no employer name, no product name, no internal
URL or hostname, no code block, no account or connection identifier and no
colleague name. Every named person is public: Brooks, McKinney, Demirbas, Gorman.
Grep confirms across the body and the front matter.

Gate 2's six rulings re-verified against the current text, not against round 4's
report:

| Gate 2 row | Ruling | Draft now | Verdict |
| --- | --- | --- | --- |
| Batch job with a fixed window | generalise, by removal | A grep for batch, window, pay run, deadline and negotiate returns nothing. | Honoured. |
| Combination: batch job plus ledger and bank account plus API contract | resolved by removing the batch job | Batch job gone. Ledger account and bank account at line 81, the API contract at line 86. | Honoured, but see the pending row below. The closing argument was that the surviving details are generic alone and no longer narrow together. A year is a new narrowing detail, added to the same post after that argument was made. |
| Silent requirements reviews and kick-offs | keep | Lines 93 to 94, back in general present tense, plus "This is not a complaint about one function" at lines 94 to 96. | Honoured, and better than at round 4. The N9 fix moved the passage back to the general form the ruling was actually made against. Round 4's concern that the ruling had been applied to different wording is now moot. |
| "Slack thread" | keep | Line 133. | Honoured. |
| "I am building an AI native software development lifecycle" | keep, closed by Alex, A20 | Line 139, unchanged. | Honoured. Round 4's note stands: the round 3 row also matched "A grounding agent", now at line 110, A20's reasoning covers it, and nobody has written that down. |
| "over six months" | keep | Line 15. Now honoured in the published file too. | Honoured. |

One row is open, and it is the one this round was asked to rule on.

| Line | Matched text | Concern | Decision |
| --- | --- | --- | --- |
| 29 | "in 2024" | A year attached to a work anecdote, added to a sentence that previously had a removal ruling applied to it. | **pending** |

**Does the year re-open the row. Yes.**

The reasoning, set out so Alex can overrule it in one word:

1. The procedure lists "dates of unreleased work" as a disclosure hit. A year
   attached to a work anecdote is the smallest form of that.
2. Gate 2's ruling on this exact sentence was "generalise, by removal", and the
   stated reason was that the detail was colour rather than argument. The
   direction of that ruling was to take narrowing detail out of this sentence.
   Adding a year puts narrowing detail back into the same sentence. It is a
   different axis, time rather than subject matter, but it is the same sentence
   and the same effect.
3. The combination row closed on the argument that what remained, two accounting
   nouns and an API contract, "describes a large share of financial software and
   does not narrow to one project". A year was not part of what that argument
   weighed. A colleague sorting late projects now has a year, a duration of over
   six months, ledger and bank account vocabulary, and an API contract decision.
   That set is narrower than the one Gate 2 signed off.
4. A21 does not close this row. A21 answers which year is true. The disclosure
   question is whether a true year may be published. Those are different
   questions, and the procedure says not to decide the second one on Alex's
   behalf.

Against that: it is only a year, the meeting is not identified, no employer,
product or customer is named, and the sentence reads better with it. This is very
likely a `keep`. It is still not the checker's call, and reporting it as closed
because it looks low risk is the failure mode the gate exists to prevent.

One word from Alex, `keep`, `redact` or `generalise`, closes it and the post is
clear.

### Is the post honest

Yes, and this is the first round that can say so about the file that actually
publishes.

Every claim in the draft traces to something Alex said. The one section that
three rounds called GENERIC was fixed by getting a real answer rather than by
writing one, and the answer went in compressed rather than embroidered. Every
judgement call in that compression except N16 runs toward the weaker claim. The
duration is Alex's own correction, the year is his own correction, the reread
motive is his question and not a feeling invented for him, and the ending still
claims no results. Both places where an earlier round found a general claim welded
onto a specific story, N9 and the front-matter "year of handing work to agents",
are gone rather than reworded.

Two things are still worth saying out loud. The interview file contradicts itself
on the year at line 28 and nobody fixed the gloss, which is a trap for whoever
reads that file next. And line 111's description of what a grounding agent does is
the interviewer's sentence, not Alex's, sitting under a paragraph that opens with
Alex's own words. It has never been challenged. It should be, once, by the person
who owns the claim.

### Verdict

BLOCKED: 0 unsourced, 0 misattributed, 0 drifted, 0 uncited, 1 unresolved
disclosure hit. Draft and published file are byte-identical. All six Gate 2
rulings are honoured. 0 sections GENERIC, down from 1. The single open item is one
word from Alex on the year at line 29.
