# Source material

## Provenance

The only source in hand is the published v1 post, snapshot at
`00-published-v1.md`. It was written on 2026-08-25 in a worktree that did not
carry the write-post skill, so it never went through intake, an interview or a
claims check.

Open question for Alex: was there an original Notion page or a set of notes
behind v1? If yes, it should come in here before drafting. If no, v1 is the
only input and it is not a trustworthy one.

## Tagging

v1 is treated as `[unknown]` in full, not as `[mine]`. The prose reads as
model-written and none of it has an interview line behind it. Nothing in it can
become an "I" sentence in v2 without Alex confirming it first.

Two specific things in v1 that must not survive as they stand:

- Line 165, "I have watched this play out", attached to a SaaS backend that
  drifts into "Members" and "Users". First person, no citation.
- Line 325, "Most people hate writing docs, and I get it". First person, no
  citation.

## Book material

`[research]` The Mythical Man-Month, Frederick Brooks, 1975, plus the 1986
essay No Silver Bullet. Brooks's own claims can be cited and argued with. They
never become an "I" sentence.

The ten points v1 covers:

1. The man-month is a dangerous unit, Brooks's Law
2. Individual capability spread beats headcount
3. Schedule optimism, "the code is written" is not "done"
4. System testing is where module assumptions collide
5. Conceptual integrity, designed as if by one mind
6. The second-system effect
7. No silver bullet, accidental versus essential complexity
8. Plan to throw one away
9. The surgical team
10. Documentation as the carrier of shared understanding

## Web cross check on the ten points, 2026-08-26

Alex asked whether the ten points are already on the public internet. They are,
completely. Every one of them is a canonical idea from the book and each is
summarised in dozens of places, in English and in Chinese.

Checked sources:

- Shortform, Blinkist, getAbstract, SuperSummary and Brian's Notes all carry
  ten-point or key-idea lists of the book. The man-month fallacy, communication
  overhead, the tar pit, conceptual integrity and the surgical team appear in
  all of them.
- Chinese summaries on Zhihu, CSDN, Douban and the Chinese Wikipedia article
  cover the same set, including the second-system effect, no silver bullet,
  conceptual integrity and the surgical team.

Conclusion for the post: the list is not the contribution. A reader can get the
ten points in ninety seconds from any summary site. Restating them, even well,
puts the post in a crowded field where it adds nothing.

What is not on the public internet is what happened to Alex. The meeting where
the book was used as a counter-argument, the batch job work behind it, and what
running agents has taught him since. The post has to be built on that, with the
book as the frame, not the content.

This changes the shape of v2. Sections are named after what happened, not after
Brooks's chapter titles.

## Prior art on the AI angle, 2026-08-26

Alex clarified that the post is a review of Brooks through what AI changed. That
angle is occupied, and by people with reach.

`[research]` Wes McKinney, The Mythical Agent-Month, O'Reilly Radar and his own
blog. Argues agents amplify Brooks rather than escape him. Agents eat accidental
complexity and cannot touch essential complexity. Names an "agentic tar pit"
where parallel sessions produce code faster than humans can review it. Concrete
numbers: over 10 billion tokens a month, agents start chasing their own tails
around 100 KLOC, and struggle badly in million-line codebases. Conclusion: the
winners will not be the people running the most parallel sessions.

`[research]` Murat Demirbas, Agentic AI and The Mythical Agent-Month, January
2026. Argues coordination complexity is mathematical, not sociological. Cites a
case where agent-produced inference code ran slower than the human baseline
(1.2k versus 1.76k tokens per second) and integration into a distributed system
took 35 days. Conclusion: multi-agent systems hit state-space explosion faster
than humans do.

`[research]` Several more on the same ground: a Databricks MVP article
"Engineering in the Era of AI Agents", a Data Engineer Things piece from August
2026, votee.ai's "Mythical Agent-Minute", and two rereads of No Silver Bullet
("The Werewolf and the Copilot", "There Is Still No Silver Bullet").

`[research]` Jason Gorman, The Bluffer's Guide to The Mythical Man-Month,
Codemanship, November 2023. Alex supplied this one as the format reference, not
as an argument: sharp, clear, funny, warm, short. About 1200 words. An opinionated
personal opener, then named subheads, then short paragraphs and bulleted key
concepts, with dry asides carrying the humour. The revision 3 draft follows this
shape.

Worth flagging to Alex: the same author published "The Mythical Agent-Month" in
April 2026. The format reference has already taken the AI angle too. Listed here
because the field is crowded, not because the post needs to answer it.

`[research]` METR randomised controlled trial, 2025. Experienced developers were
19 per cent slower with AI assistance while believing they were faster. Useful
because it cuts against the easy narrative, and none of the Brooks rereads above
lead with it.

### What this means for v2

v1's conclusion, that AI is heavy artillery against accidental complexity while
essential complexity stands, is the consensus position. McKinney reaches it with
better numbers. Publishing it again adds nothing and invites the comparison.

Two ways to be worth reading, and the post should do both:

1. Show the machinery. Everyone names verification and coordination as the new
   bottleneck. Very few show what they built to handle it, what it cost, and
   where it failed. Alex runs a multi-agent SDLC harness with gates, adversarial
   verifiers and written lessons. That is the part nobody else can write.
2. Disagree with something. If Alex's own experience contradicts the consensus,
   or contradicts a number above, that is the post. Agreement is not.

## What v1 has instead of experience

Every example is an invented archetype. None names a repo, a date, a number or
a person:

- an e-commerce campaign system (point 1)
- optimising a recommendation system (point 2)
- a refund feature (point 3)
- order, discount, payment and risk modules (point 4)
- a SaaS backend growing from user management (point 5)
- an ops configuration backend and its v2 (point 6)
- a food-delivery subsidy system (point 7)
- an AI customer-service bot (point 8)
- a collaborative-docs product (point 9)

These are placeholders where Alex's own work should be.
