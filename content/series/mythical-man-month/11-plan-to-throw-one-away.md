---
title: "Plan to throw one away, now that throwing one away costs a few cents"
chapter: "11"
weight: 11
date: 2026-08-03
status: published
draftSlug: mythical-man-month-11-plan-to-throw-one-away
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Process"]
categories: ["Engineering"]
description: "This is the chapter Brooks threw away himself. The advice got cheaper to follow and harder to remember, because an agent makes it feel like the first attempt should work."
---
## The pilot plant

Brooks opens on the chemical industry. A reaction that works in a lab cannot go straight to factory scale, so there is a pilot plant in between, bigger than the bench and smaller than the factory, built to surface the problems that only appear at scale. When the factory is built the pilot plant comes down. Its value was never itself, it was what it revealed.

Software is the same, he says. The first system is almost certainly no good, because nobody knows what needs building until it is built. Then the right move is not to patch it. It is to throw it away and write it again with what the first attempt taught.

There is one thing to say before any of this. This is the chapter Brooks himself most publicly revised. In 1995 he moved towards incremental growth rather than a planned discard, on the grounds that growing a system beats building and rebuilding it. The study skill I generated from the 1975 text carries the unrevised position, and it says so in its own notes, because quoting this chapter as his final view would be wrong. So the chapter about planning to throw one away is the one its author partly threw away, which is either funny or the most convincing evidence in the book.

## Reconnaissance is cheap now and I still skip it

The cost of discarding the first attempt has gone from person years to a few dollars. Planning to discard went from a discipline to a routine operation, and there is no reason left not to do it.

Which makes it more embarrassing that I skip it. The reason is the one Meari-Prototype name in their agent era reread, and they are right about the mechanism. An agent makes it feel like the first attempt should work, so the pilot plant mindset of this time is for learning rather than output does not come along for the ride.

My cleanest case is small and visual. I drew a cover for a post and it came back ugly. I drew it again. Seven attempts went in the bin before I found out that the cover canvas is cropped to a narrow band on the page, and that most of what I had been drawing was never on the screen at all.

Seven drawings is not the interesting number. The interesting thing is that a reconnaissance run would have cost one drawing. Render the thing, look at what actually appears, then design. Instead I ran seven production attempts and read each failure as a failure of taste.

That is the whole chapter in one afternoon. The first attempt is not a product, it is a pile of answers to things I did not know. In my case the answer was that the canvas is not the picture, and I paid for it six times more than I needed to.

A good workflow should separate the two modes on purpose. Reconnaissance output can be thrown away at any time and what it taught goes into the record. Production output is meant to be used and is checked at every step. Mixed together and neither works.

## Requirements change because the prototype exists

Brooks says what a developer delivers is user satisfaction rather than the product, which was a jarring claim in 1975. The reasoning is simple. Software is invisible and malleable, so before seeing the thing users often do not know what they want. The requirement they gave was what they thought they needed. Seeing the artefact is new information.

Prototypes used to cost weeks, so nobody prototyped often. Now a prototype is hours, and the cycle of build, show, revise becomes the default rather than a gamble. That is the real reason lean and minimum viable product ideas work, and it is not about the ideas.

The condition Meari-Prototype attach to this is the one worth holding. It only means anything if a user exists. Real client, product manager, or me playing the part honestly. Somebody has to be able to say that they saw it and it should change. Without that role the agent evaluates itself, and every metric reads fine while the thing drifts.

This series is a case of the loop working. The first Mythical Man-Month piece went out as a standalone post. It was wrong in shape, and the reason was that it had been written without any process at all. What it became is chapter zero of this series, rewritten, with a redirect left behind so the old link still resolves. The first version was not wasted. It was the pilot plant, and I did not know that at the time because I thought I was shipping.

## The obligation to justify

Brooks cites an observation I think is the sharpest piece of psychology in the book. Programmers avoid writing documentation not out of laziness but because a decision in writing carries an obligation to justify it.

Once a decision is written down, someone will ask why this way and not that way. Either I thought it through and can answer, which took effort, or I admit it was tentative, which takes a bit of nerve. Both are uncomfortable, so the decision stays in my head where nobody can ask.

The agent version is the report that says fixed.

I ask for a bug fix. A few minutes later, fixed. Not what the root cause was, not how many attempts there were, not why this fix rather than another, not whether the tests now cover it. Just fixed.

Same mechanism, no psychology required. A light report needs no justification. Saying the cause was A, that B ruled out C, and that under D this fix might not be enough, is a heavier report. It costs more, it needs real thought, and it invites a question. Nothing in the training pushes towards the heavy one.

The countermeasure is the same as it was in 1975, which is to weld the obligation into the structure rather than asking for it. My verifier does this and it is the part of my setup I would keep if I had to throw the rest away. Every task gets a written verdict against seven checks. The verdict is not a yes. It names what passed, what warned, and why. And the warnings it records are the ones I complained about in the last chapter for going unread, which is a fair criticism of my attention and not of the mechanism. The mechanism worked. It wrote down the reasons.

The value of that is not the record. It is that the same agent, under a requirement to explain why, produces better work than the same agent allowed to say fixed. Writing the explanation requires doing the thinking. That was true of programmers in 1975 for exactly the same reason.

## Entropy in a long session

Brooks cites Lehman and Belady. Every change tends to erode a system's structure and increase its disorder, and even skilled maintenance only slows the decay. Past some threshold the system is unmaintainable and starting over is the right move.

Meari-Prototype relocate that law into a single long conversation, and once I read it I could not unsee it. Thirty rounds in, the context holds early assumptions, rejected proposals, temporary rules, half valid conclusions and intermediate thinking. That context is now disordered. Things said early and corrected later are both present. What was decided and what was rejected look the same.

An agent working in that gets worse, and the failures are specific. It tries to satisfy everything at once, including things that contradict. It repeats what it already said. It misses the most recent instruction, because the recent instruction is buried under the oldest.

Brooks's prescription for a system applies to a session. A new session is a redesign. When the current one is getting confused, the move is not to explain again. It is to distil the conclusions into a document, start a new session, load the document, and go.

The instinct against it is strong, and it sounds like an argument about sunk time. An hour in, restarting looks like throwing the hour away. What the instinct misses is that the cost of continuing is not the extra minutes. It is the declining quality of the judgement.

My own two mechanisms are cruder than theirs and they come from the same wall. A handoff agent, for when the context fills up mid task, which exists because the alternative was losing the work. And a hard stop that returns control to me after three failed rounds, which exists because by round three the problem is almost never in the implementation. It is in an assumption near the top, and no amount of continuing will reach it.

## Who pays for maintenance

Brooks puts total maintenance at forty percent or more of development cost, and later data pushed that up. He splits it into fixing design flaws, adding features and adapting to a changing environment. None of the three moved.

Meari-Prototype's observation is that different setups distribute this cost differently, and that one of the distributions is a trick. A conversational setup maintains continuously and incrementally, which compounds. A setup that starts from zero on every run appears to have no maintenance phase at all, and what has actually happened is that maintenance got folded into every run at full price. A bug means a whole new run. The new run redoes the parts that were already right. That is not efficiency, it is the same cost hidden somewhere else.

I recognise the shape from something much smaller. My Brooks study skill covers 16 of 19 chapters. The last three are missing because the edition carrying them was not obtainable in a form I could extract, and the notes on the skill say that plainly rather than pretending the scope was 16. When I eventually get the right text, the correct move will be to regenerate the whole thing rather than fold three chapters in, because the underlying text behind the first fifteen is noisy and a regenerate fixes that too. That is a planned discard, decided in advance, with the reason written down. It is the only piece of this chapter I have actually applied on purpose.

## Every fix can break something

Brooks cites data putting the chance of a fix introducing a new bug somewhere between a fifth and a half. That is a cliché now, and quantifying it was a founding act at the time. His countermeasure, rerunning every previous test after every fix, is one of the earliest origins of regression testing.

Meari-Prototype's reading is that for agent written code the rate is no better and probably worse, because a fix that is locally reasonable breaks an assumption held somewhere the agent cannot see. Their countermeasure is Brooks's, with one advantage he did not have. The regression run is something the agent can do itself, every time, without being asked twice.

## Which one was the pilot plant

I run a reconnaissance pass on anything visual now, because visual is where I have been wrong most cheaply and most often. Render first, then design. And when a session gets confused I close it, on a rule that is not a count of rounds but the moment I notice I am explaining something for the second time.

What I still cannot do is pick the pilot plant in advance. The seven covers felt like seven production attempts at the time, which is exactly why there were seven. The thing that would have told me is the thing I keep not doing, which is writing down what an attempt is for before I start it.
