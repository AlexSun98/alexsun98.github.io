---
title: "Cheap democracy still cannot hold a concept together"
chapter: "04"
weight: 4
date: 2026-07-06
status: published
draftSlug: mythical-man-month-04-aristocracy-and-democracy
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Architecture"]
categories: ["Engineering"]
description: "Ten agents proposing ten designs and a scorer picking the best sounds like the scientific version of design. It is the OS/360 coordination meeting with a faster clock."
---
## Design by vote

Chapter three put one person in the chief programmer's seat. This chapter is about the thing that seat exists to hold, and about why making the alternative cheap did not make it work.

Brooks says system design must be done by one person and that he owes nobody an apology for it not being democratic. That landed badly in 1975, when the industry was learning teamwork and peer review. His evidence was OS/360. IBM, trying not to be dictatorial, had several teams propose architectures and coordinated them in meetings. What came out had committee written through it. One module's interface style switches to another halfway. The same command means different things in different places. Error codes contradict each other across the system. Each one is trivial. Together they are unmaintainable.

## What conceptual integrity actually is

It is the most quoted term in the book and the one I used loosely for years.

It is not the absence of bugs. A buggy system can have it, if one mind conceived all of it and got a few things wrong. A nearly bug free system can lack it entirely.

It is not good documentation. Documentation can describe every inconsistency clearly and the system is still fractured.

It is the property that lets me derive the rest of a system from a few core ideas. If I learn how one part handles errors, I can predict the others. If I learn the naming of one API, I can guess its neighbours. The system has one personality, and that personality comes from one mind treating the whole thing consistently.

The value is not taste, it is how much I have to remember. A system with conceptual integrity costs me a few dozen concepts plus a handful of exceptions. A fractured one costs me every detail separately, because nothing predicts anything else. In a small system that gap hides. In a large one it decides everything.

## Why one mind, mechanically

One mind adjudicates consistency without trying. It does not need to write down that error codes use scheme Y, because it remembers, and the next decision factors in the last one automatically.

Two minds have to externalise that, and every channel for externalising it leaks. Documentation cannot hold the conventions nobody was conscious of. A meeting covers the disagreements people can name. A review catches the loud inconsistencies and not the drift in style.

I have the cleanest example of this I am ever going to get, and it is in my own harness.

The implementer wrote a date formatter because a task needed one. A different task had written the same thing three folders over, two weeks earlier. The verifier passed the new one on all seven checks, because it was correct, tested and written to standard. Nothing was wrong with either of them. There was just nobody holding the concept across the two tasks. Nothing in that pipeline carries a picture of the codebase from one task to the next, and that is deliberate, because the independence that makes a verifier worth having is the same property that stops anything accumulating.

One codebase I work in has two date formatters. They were there before my time, so people have been doing this to each other for years without any agents involved. Next quarter someone fixes a timezone bug in one and not the other. That is what conceptual fracture costs, paid late, by someone who was not there when it was made.

## Democracy got cheap and got worse

Meari-Prototype, whose agent era rewrite of Brooks I keep open beside the original, make the argument I could not have made on my own here. So it is theirs.

Give ten agents a complex task, have them each propose a design, and pick the winner with a scorer. It looks scientific. Diversity plus objective judgement. It runs every day in automated research setups.

It works if the scoring standard covers every implicit requirement. In practice the standard has a few measurable dimensions and the rest of the requirement is not in it. Which dataset convention. Which code style. Which deployment condition. So the scorer picks whatever scored highest on the measurable part, and that proposal is frequently the worst on the unmeasured part, because scoring high was easier for whatever simplified the data or skirted an edge case.

The scorer does not know what it is missing. The proposal's author does not know it took a shortcut, because it optimised the objective it could see. Eleven private understandings of the problem, no two the same, and none of them the right one.

Their line is that OS/360's failure landed at integration and this one lands at evaluation, and the root is identical. Nobody holds the concept, so the concept drifts among its holders, and what gets assembled is the sum of the drift.

## Goodhart, in my own gate

My verifier is a scoring function. Seven checks per task, and I wrote the seven.

That is a measure that became a target, and I built it. The checks are good checks. The problem is not what they measure, it is what they do not. Anything outside the seven does not exist to the gate, and the gate reports a pass without mentioning it, because from where the gate stands there is nothing to mention.

A vaguer gate would actually be harder to slip past, because a rule nobody can see cannot be optimised against. The more precise I make the checks, the better they work and the more exactly they define what I am not looking at. I do not have a way out of that. The best I have is knowing where the edge of the gate is, and reading the diffs near it myself.

## The second mind is usually me

There is a small daily version of this that I set off myself most days.

When I rewrite a sentence an agent wrote, my wording stands. That is deliberate. I am the one whose name is on the piece, and the agent's job at that point is to tell me if I have broken something, not to put its version back.

What I did not think about for a long time is what that edit does to the agent's picture of the file. It made a decision it does not know about. It can read a diff, and a diff records the change rather than the reason. It cannot tell a bug fix from a convention change, or a deliberate deletion from a slip. So it either stops and asks, which costs my time, or it carries on with a guess, which is where drift starts.

Meari-Prototype draw the counterintuitive corollary that even a one line change is better made by the agent, because the cost of a small change was never the typing, it was whether the decision reached the mind holding the project state. I only half follow that. For wording I keep the pen. For anything structural I say what I changed and why, which is a two line alignment meeting, and it is cheaper than letting it guess.

The exception they name is the right one. Secrets, credentials, private data. That does not go to the agent to change, it does not go into its view at all, and the way to guarantee that is a mechanism rather than care.

## The line between architecture and implementation

Brooks separates the two completely. Architecture is one person spelling out what the system looks like from outside. Implementation is many hands building to that shape. In 1975 that was an organisational problem, getting hundreds of programmers at IBM to work to one architecture.

The line has never had a more natural place to sit than it does now. Architecture is judgement, and judgement needs purpose, situation and a feel for how the thing will have to change. Implementation is execution, and execution needs patience, care and recall of the pitfalls. One of those I am better at. The other is not close.

The part worth holding is that the line does not move. Push architecture down to the agents and I grow the fractured system from two sections ago. Keep implementation up with me and I waste the execution while pulling myself off the seat where the judgement happens.

## Constraints are a gift to the implementer

Brooks argues that external architectural rules increase an implementer's creativity rather than limiting it, and I did not believe this until I watched it.

With no constraints, effort goes on decisions that are not worth thinking about. What to call the interface. How to shape the error. Whether to parameterise. None of that is creative, it is just an offhand call that becomes permanent.

Give an agent a settled interface, a settled error style and a settled naming convention, and the effort goes where it belongs. Without them it makes something up every time, and each made up decision is an undeliberated design decision in my system. The sum of those is the fracture.

That is the real reason the documentation first pattern works on my own blog, and the whole of chapter ten is about it. When the requirement is settled, the agent implements. When the requirement is loose, the agent designs, and nobody asked it to.

## What I stopped trusting

I stopped reading my verifier's pass as evidence about the codebase. It is evidence about the task, and those are different questions with only one automated answer between them.

I also write the convention down before I hand anything over. Not because the agent cannot invent one, but because it can, and then the convention is mine without my ever having chosen it.

What I have not built is a gate that asks whether the codebase is still one thing after a change landed. Every gate I have grades a task on its own, which is the hole the two date formatters went through. Reading the diffs myself is the whole of my answer, and it stops working at exactly the volume that made me want a gate.
