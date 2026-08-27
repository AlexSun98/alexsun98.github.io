---
title: "The book won the argument and the project was still late, is this outdated in the age of AI?"
date: 2026-08-24
tags: ["Software Engineering", "AI", "Books"]
categories: ["Engineering"]
description: "Someone put The Mythical Man-Month in front of the room to stop more people being added to a late project. It worked. We were late anyway. I went back to the book to see what AI has actually changed."
---

I still remember someone proposing to add people to a project that was already
late. It is a reasonable instinct, and a generous one. The work is behind, so
find more hands.

Someone else said no, and told the room to go and read The Mythical Man-Month.

Nobody was added. The book won the argument.

The project took over six months. I cannot remember what we said it would take
at the start.

## Being right is not the same as being on time

Brooks, 1975: adding manpower to a late software project makes it later. Fifty
years of quotation later, it still holds up.

It is also only half a sentence. It tells you what not to do. It says nothing
about how to finish.

We did the right thing and the schedule went exactly where it was always going.
Not adding people is not a plan. It is the absence of one specific mistake.

I read the book for the first time because of that meeting, in 2024.

## Why I went back to it

I am rereading it now, along with the ten points I took notes on the first time.

I went back with one question. Is this outdated in the age of AI?

You can get Brooks's big ideas off any summary site in ninety seconds, so I am
not going to walk you through them. I only care about the parts that changed.

Six months ago I would have told you the constraint was how fast we could write
the code. I do not believe that any more. Now the constraint is how well the work
is cut up before an agent ever touches it.

## More agents is not the problem

There is a good argument going around that agents make Brooks worse. Wes McKinney
calls it the agentic tar pit: parallel sessions produce code faster than humans
can review it. His conclusion is that the people who do well will not be the ones
running the most parallel sessions.

He is burning ten billion tokens a month. I have opinions. Weigh accordingly.

Yes and no. Parallel execution is not the risk. It should be the default now,
with sequential demoted to the exception.

What burns people is turning agents loose on dependencies and hidden complexity
that nobody resolved first. That is where rework with an agent costs more than
rework by hand.

You need two conditions.

One, a single source of truth that is genuinely agent-ready. Clean decomposition
up front, every dependency resolved before an agent touches a line.

Two, human judgment anchored at both ends. Full control of what goes in, and a
firm gate before anything is delivered.

That is not rocket science. It is just clean architecture.

## Two words for the same thing

That moves the problem upstream, into the part of the process that has not
changed at all. The briefs I work from are often too high level. Design
considerations missing. Architectural decisions clearly made somewhere, written
down nowhere. Feedback arriving after the decisions it should have shaped.

Here is what that costs.

The clearest case I have hit was cross-domain. Hidden dependencies, validation
rules, and two parts of the system using different words for things that
overlapped. Ledger account in one place, bank account in the other.

Treating them as one concept would have made the technical solution simpler. That
was the tempting path. The information I was given up front was wrong on this
point, an investigation outcome was missing, and the question came back several
times. An API contract decision was sitting on top of it, which is a bad place to
be guessing.

I built a bridge between the two concepts instead. It kept the design and the
implementation simple, it resolved, and it cost rework getting there. It only
came up because our shared vocabulary has inconsistencies in it.

None of that was in the brief. The meetings where that sort of thing should
surface run in silence, requirements reviews and technical kick-offs both. This
is not a complaint about one function. A room where nobody argues is not
agreement. It is a room where the disagreement has been handed to whoever writes
the code.

That used to be survivable. Now a thin brief costs a fan-out of agents building
confidently on the guess.

Brooks called this conceptual integrity and wanted a system designed as if by one
mind. His mechanism was a small team around a chief architect. Very few of us
work that way. Fifty years on we call it a ubiquitous language, which in practice
is an agreement rather than a mechanism.

An agent will not paper over that gap the way a person does. In my experience it
gets confused instead.

A grounding agent helps, used properly. It goes and checks what a brief claims
against the code, instead of waiting for someone to volunteer the missing detail.

## The part nobody upstream sees

Here is the thing I had wrong for longer.

I used to think AI would expose thin requirements. The gap would finally become
visible, because a machine fails loudly where a person copes.

It does not work like that. A senior engineer absorbs the gap. The investigation
that should have happened gets done anyway, the call that should have been made
at kick-off gets made, and the work ships. It looks like it worked.

The cross-domain case above is exactly that. It resolved, so from the outside the
process looks healthy.

That is Brooks on key people, arriving from a direction he did not predict. The
scarce person is not the one who writes the most code. It is the one whose quiet
corrections are holding the process up.

## Where this actually sits

The vocabulary decision from that work is still in a Slack thread. Searchable,
technically. The next person to touch it will not find it, and neither will the
next agent.

The oldest point in the book, still biting, in the year we automated the typing.

It is also why I am building an AI native software development lifecycle, one that
puts domain context into a knowledge base instead of a chat history. It is work in
progress. I have no results to report yet, and I am not going to pretend
otherwise.

## References

- Frederick P. Brooks Jr, The Mythical Man-Month, 1975, and No Silver Bullet, 1986.
- Jason Gorman, The Bluffer's Guide to The Mythical Man-Month, Codemanship, 2023.
- Wes McKinney, The Mythical Agent-Month, O'Reilly Radar, 2026.
- Murat Demirbas, Agentic AI and The Mythical Agent-Month, January 2026.
- METR, Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer
  Productivity, 2025.
