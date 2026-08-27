# Interview

Round one. Questions come from the gap map in `02-outline.md`.

## Gate 1 answers, 2026-08-26

- Thesis and claim C2 were not understood as first written. Restated in plain
  words in the chat. Alex then agreed with both: "they are true and I believe
  they are good points". Still to be earned by the interview material, not
  taken as settled.
- No Notion page and no notes exist behind v1. v1 is the only prior input, and
  it is not trusted.
- Disclosure: no employer, product, customer or ticket details in public. High
  level only. Nothing that identifies the work.
- The v1 e-commerce, recommendation, refund and food-delivery examples are
  invented. They are to be replaced with real experience from this interview.

### Q1 [borrowed] all claims
Q: Did you actually read The Mythical Man-Month? First read or a reread, roughly
when, and how much of it? Whole book, a summary, or the famous quotes?
A1: "I'm re-reading it, but to be honest pls." Reading is in progress, not
finished. Alex asked for the post to be honest about that.

### Q2 [borrowed] all claims
Q: How far into the reread are you right now, and when was the first read? Is
the reread cover to cover, or the chapters that matter to you?
A2: "I read it when I were working on pay run optimzation work last year, a
colleuage mentioned the book in a meeting." First read was 2025, during a
performance optimisation project. A colleague named the book in a meeting.
A2b: "reread all of them and rechecked my notion reflection notes on 10 keys
points." The reread is complete across the ten points, and Alex holds his own
Notion reflection notes on them from the first pass.

DISCLOSURE FLAG: "pay run optimisation" names the work. Under the high-level
rule this becomes something like "a batch job that had to finish inside a
window". Decision to be confirmed at Gate 2.

### Q3 [no-story] C1, C4
Q: In that meeting, what was being discussed when the colleague brought up the
book? Was somebody proposing to add people to the pay run work, or was it a
different point?
A3: "yeah someone proposed to add people to the late work, then someone said no
and pls read this mathical man and month book." The book arrived in the room as
a counter-argument to adding people to work that was already late.

This is the opening of the post. Brooks's Law was not quoted at Alex from a
blog. It was used in a real meeting, against a real proposal.

### Q4 [no-failure] C1
Q: What happened after that meeting? Did the extra people get added anyway, or
did the argument hold? And how did the work actually end.
A4: "we likely can use them as references, no people added, the project dragged
into longer, but finished eventually within a super super long time window."
Nobody was added. The argument held. The project still ran far over and shipped
late.

That is the honest ending, and it is better than the tidy one. Brooks's Law was
applied correctly and the project was still late. Not adding people is not a
plan for finishing on time.

Alex also agreed the prior art in `01-source.md` can be cited as references.

### Q5 [no-number] C1
Q: How long was that work meant to take, and how long did it actually take? A
rough multiple is enough. Planned one quarter and took three, that sort of
answer. No need to name the project.
A5: "nearly 8 months? I can't remember." About eight months in the end. The
original estimate is not remembered.

A5b, correction, 2026-08-27: "eight months should be over 6 months". Alex revised
the figure down after reading the draft. The post now says over six months. A5's
"nearly 8" was itself hedged with a question mark, so the corrected figure is the
one to use.

Use both halves. The post says over six months and says plainly that Alex cannot
remember what was promised at the start. That is a fact about how the estimate was
treated, not a hole in the story. Do not invent a planned figure.

### Q6 [no-story] C1
Q: Now the AI half. Tell me about one time you ran several agents in parallel on
the same piece of work and it went worse than doing it one at a time. What did
you fan out, what came back, and what did you have to do to clean it up?
A6: "dependencies, complixties, rework with AI might costs more, decomposition
is the key I believe. And on product end, I'm not receving the good well defined
docs well, lacks of heaps of critical details. design considerations and
achitrectral decisions, format is very high level, and might cause confusion,
review meeting at requirements and technical kick off meetings is dead slience
and very little feedback provided. delayed feedback and so on... painful, but to
a experienced senior engineer, we just know how to make it work like a magic.
parallel execution is actually good from my own opinion, but decompoistion
importance is amplied."

Four things in this answer, and they are the post.

1. A direct disagreement with the prior art. McKinney says the winners will not
   be the people running the most parallel sessions. Alex says parallel
   execution is good. What is amplified is decomposition, not restraint about
   fan-out. This is a position, and it is his.
2. The real bottleneck is upstream of the agents. Requirements arrive too high
   level, missing design considerations and architectural decisions. Rework cost
   with AI is higher, so a vague brief is more expensive than it used to be.
3. The feedback loop is dead. Requirements reviews and technical kick-offs run
   in silence. Feedback arrives late, or not at all. This is Brooks's shared
   understanding problem, unchanged since 1975 and now the limiting factor
   because everything downstream got fast.
4. The hidden cost. A senior engineer absorbs the gap and makes it work anyway,
   so the gap never shows up in any metric. Nobody upstream learns that the
   brief was thin.

Still missing: one concrete instance. The answer is a pattern, not a story.

DISCLOSURE FLAG, raised early on purpose. Points 2 and 3 read as criticism of
the product function at Alex's employer. Even with no names, colleagues will
recognise their own meetings. Options at Gate 2: keep as written, generalise to
"teams I have worked in", or reframe as a shared failure that includes
engineering. Alex decides, not the drafter.

### Q7 [no-story] C1, C4
Q: Give me one instance. A recent piece of work where the brief was too high
level. What was actually missing from it, what did you or the agents get wrong
because of that, and how did you find out?
A7: "for point 3, I thin ai gounder agent does a good job if used properly. FQ7,
across domain, hidden complixities and dependencies, validation rules. Agent can
be confused if even a human start working on assumptions. corss domain modules
don't speak the same uniquiteo langauage, e..g ledger account and bank account
would be used in a efficient way to simplify the tech solution, but upfront info
was provided in a wrong way and missed some investition outcome, lead to back
and forth a few times, API contract decision is based on that, and becoming a
hard decision, but I handled it well."

Two separate things here.

First, the answer to the dead feedback loop. A grounding agent, used properly,
does the job the silent meeting did not. It checks claims against the code
instead of waiting for a human to volunteer the missing detail. This is the
machinery the prior art does not show, and it is the strongest original material
in the interview so far.

Second, the story. Cross-domain work where the missing pieces were hidden
dependencies and validation rules. Two modules used different words for
overlapping things, ledger account and bank account. Treating them as the same
thing would have simplified the technical solution. The upfront information was
wrong and an investigation outcome was missing, so the question came back several
times. An API contract decision hung off it, which made it expensive to get
wrong.

This is Brooks's conceptual integrity, arriving as a vocabulary problem. An agent
takes the words in a brief literally, so a mismatch between two teams' words
surfaces immediately instead of at integration. That is a genuinely new effect
and it belongs in the post.

Still missing: a number on the back and forth, and what "handled it well"
actually consisted of.

DISCLOSURE: ledger account and bank account are generic accounting terms. Safe
at this level. Do not add the product, the module names or the ticket.

### Q8 [no-story] C2
Q: You say you handled it well. What did that consist of? Walk me through what
you did once you saw the two modules meant different things, and what a less
experienced engineer would have done instead.
A8: "I used a bridge solution to keep implemention and design solution simple
and consistent, without this bridge solution, things can go wrong and become
very complicated. A ubiquitous language is a shared, common vocabulary used by
everyone on a project, however, our system has some inconsistencies, gross are
not super clear, and initial design and clarification was a bit off track and
caused rework, but risks were resolved evetually."

The fix was a bridge between the two account concepts, so neither side had to
adopt the other's vocabulary and both the design and the implementation stayed
simple. The honest part: the glossary was not clear, the early clarification
went off track, and it cost rework. It ended safely.

Note the shape of this answer, because it is the voice the post needs. Claim,
then the deflation in the same breath. It resolved, and it cost rework, and the
vocabulary was never clean to begin with.

### Q9 [no-failure] C2, C3, C6
Q: After you built the bridge, did the vocabulary get written down anywhere the
next person or the next agent would find it? A glossary entry, a decision record,
a rule in the repo. Or did it stay in your head and in the code?
A9: "its still on slack, that's why I 'm build a AI native SDLC, which should
store it into its domain context db or KB, this project is still in WIP."

The decision is still in a Slack thread. Nobody wrote it down, and the next
agent will not find it. This is Brooks on documentation, arriving unchanged in
2026, and it is the reason Alex is building an AI native SDLC that puts the
domain context into a knowledge base instead of a chat history. The project is
work in progress, so the post says that and claims nothing about results.

This is the closing of the post. Not a summary, a state of play. The oldest
point in the book is the one that still bites, and the fix is half built.

### Q10 [no-stakes] all claims
Q: Last two, then I draft. First: before the reread, what did you believe about
Brooks and AI that you no longer believe? Something you would have said out loud
six months ago and would not say now.
A10: Alex asked for candidates drawn from his own answers rather than writing
one cold. Three were offered. He picked A and C.

A, confirmed: he used to think the constraint was how fast code gets written.
He now thinks the constraint is how well the work is cut up before an agent
touches it.

C, confirmed: he used to think AI would expose thin requirements. It does not. A
senior engineer absorbs the gap and makes it work, so nobody upstream finds out.

B was offered and not picked, so the post does not claim it.

These two are the spine of the draft. A is the disagreement with the prior art.
C is the observation nobody else in the field is writing.

### Q11 [disclosure] C1, C6
### Q20 [disclosure] closed at Gate 2
Q: Is the AI native software development lifecycle personal work or employer
work? As written the sentence reads as personal. If it is employer sponsored, the
post announces an internal unreleased project under your real name.
A20: "ai native sdlc is a common term, its okay to use". Alex ruled the term
generic and cleared the sentence. Disclosure row closed on his instruction.

### Q11 [disclosure] C1, C6
Q: The framing decision. The post says briefs arrive too thin and that
requirements reviews and kick-offs run in silence. Three ways to write it: keep
it as your current workplace, generalise to "teams I have worked in", or write it
as a shared failure where engineering also stayed quiet in those meetings. Which
one?
A11: "3". Alex chose the shared failure framing.

Recorded late. The answer was given in the session and did not reach this file
before the checks ran, which the checker correctly flagged as unsourced. The
record is the record. If it is not written down it did not happen.

Scope limit on A11, raised by the checker and worth keeping: choosing a framing
is not the same as stating that Alex personally stayed silent in those meetings.
The draft sentence "We did not fill the silence either" claims more than the
choice does. Carried into round two as R2-6.

## Round two

The checker returned BLOCKED. Findings in `06-checks.md`. These questions come
from the sections it marked GENERIC or ABSTRACT, and from claims it marked
DRIFTED.

### Q12 [r2] [drifted] line 37
Q: The reread. A1 says you are re-reading it and asked to be honest about that.
A2b says you reread all ten points. Which is true right now: finished, or still
going?
A21: "2024 was the first read." The year is settled. A2's "last year" was loose,
said in a 2026 session about a 2024 read. The post now carries 2024 and the
reread is two years later.

### Q22 [r2] [generic] section "More agents is not the problem"
Q: Q14 asked for one real fan-out. Instead Alex gave the position in full, which
is better for this section than an anecdote would have been.
A22, verbatim: "Yes and no. Parallel execution isn't the risk - it should
actually be our default mode in the age of AI, with sequential execution demoted
to the exception. Where people get burned isn't from using too many agents; it's
from letting agents hit dependencies and hidden complexity unprepared, where AI
rework suddenly costs more than human rework. To make parallel agents work, you
need two strict conditions: first, a single source of truth that is truly
'agent-ready' - meaning clean upfront decomposition with every dependency
resolved before an agent touches a single line. Second, crisp human judgment
anchored at both ends: total control over the initial input, and a firm last gate
before delivery. That's not rocket science; it's just clean architecture."

This closes the GENERIC finding on that section. It is not a story, and it does
not need to be. It is a mechanism, stated by the person who uses it, and it is a
sharper disagreement with McKinney than the previous three sentences were. His
claim was that the winners will not be the ones running the most parallel
sessions. Alex's claim is that parallel should be the default and the preparation
is what decides whether it works.

### Q13 [r2] [drifted] line 40
Q: The draft says you went back to the book because you had started handing work
to agents and something had shifted you could not name. Nothing in the interview
says why you went back. What was the actual trigger for the reread?
A13: "is this outdated in age of AI, that's my motivation."

The motive is the question itself. He went back to the book to find out whether
it still holds now that AI has changed how the work gets done. Not a feeling, a
question.

This restores the framing v1 used in its title, but honestly this time. The
question is the reason for the reread, not the conclusion of the post. The post
can open the reread section with it and answer it from his own experience rather
than from the book.

### Q14 [r2] [generic] section "Decomposition, not restraint"
Q: One real fan-out. What were the tasks, which assumption was shared and not
written down, and what came back that you had to throw away or repair?
A:

### Q15 [r2] [generic] section "The brief is where it goes wrong"
Q: One brief. What was in it, what was missing, and what did the missing part
cost in time or rework?
A:

### Q16 [r2] [drifted] lines 94, 105, 115
Q: Modules or teams? A7 says the modules do not speak the same ubiquitous
language. The draft turns that into two teams using different words. Was the
mismatch in the code and the domain model, or between two groups of people?
A:

### Q17 [r2] [oversold] lines 114 to 118
Q: The post's headline new idea is that an agent takes brief wording literally,
so a vocabulary mismatch surfaces on day one instead of at integration. Your
words in A7 point the other way: the agent gets confused when it works on
assumptions. Which is it in practice? Did an agent ever surface a mismatch early
for you, or did it just get stuck?
A:

### Q18 [r2] [oversold] lines 120 to 122
Q: The grounding agent. Has it actually run on real work, and where does it fail?
The post currently describes it as a capability, not as something that ran.
A:

### Q19 [r2] [unsourced] line 59
Q: Have you ever measured your own throughput with and without AI? The draft has
you saying you never have. True?
A:

### Q21 [r4] [conflict] opening
Q: You hand-edited the published file to say you read the book "on 2024". A2 says
you read it while working on the optimisation work "last year", which from the
2026 session date is 2025. Which year is right? The post currently carries no
year, because asserting a year the interview contradicts is worse than omitting
one.
A:
