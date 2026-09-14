---
title: "Preface"
chapter: "00"
weight: 0
date: 2026-09-14
status: draft
draftSlug: notes-from-the-stack-preface
tags: ["Harness Engineering", "Knowledge Engineering", "Agentic Coding"]
description: "A day in robot valley, then a diagram with two lanes. The top lane is the harness and it fails loudly. The bottom lane is knowledge, and it does not go red."
---
In March I spent a day in the Shenzhen Science and Technology Museum and Robot Valley with my family. What is down there is a mix of working line, dynamic/static display, video wall. A whole day was not enough. Nobody got bored, which I had not expected.

The part I could not put down was simple. A humanoid robot pilot production line that builds robots. Reporting on the Leju Robotics line puts the Longhua pilot at about two hours to assemble one unit, and the follow-on factory in Foshan at one unit every thirty minutes.

The figure that stayed with me was not the speed. Before a robot leaves the building it has to pass 77 inspections and 41 tests that simulate real operating conditions.

Twenty four assembly steps. A hundred and eighteen chances to be told no.

## What the factory already knows

What I was watching was not new. Factories spent a century learning it.

Toyota built its production system on two ideas that pull against each other. Continuous flow keeps parts moving. Jidoka stops the line the moment a defect shows up. Neither idea is worth much alone. Flow without a stop rule ships a thousand bad units quickly. A stop rule without flow is just a queue. The pairing is the whole thing, and the order matters: the right to halt comes first, and the speed is what you are allowed to have once the halt exists.

I am borrowing the vocabulary. I have never worked in a factory. The analogy also has an obvious hole in it. A line makes the same part twice. Software never does.

## Why it is landing now

The analogy still fits better than I want it to. Agentic coding is moving off the chat window and onto something shaped like a line. Specs in, code out, checks that can stop the run.

That move is what this book is about. Not the model that writes the code. The line it runs on, and the checks that are allowed to stop it.

## What I tore down

Earlier this year I tore down my own agentic coding setup and started again. Most of the rebuild was deletion.

The thing I threw away was micromanagement. Turn by turn chat coding, me in the loop on every step, manually driving each thread forward. It works on small things. Past a certain size two things went wrong every time. Context went missing, and the work would not split into pieces the model could hold at once.

Two things stuck. A harness that runs the lifecycle end to end, and a knowledge base that survives the end of a conversation. Everything else went.

## The diagram I should have drawn first

In June I drew one picture of the whole development process. Two lanes.

The top lane is the harness. Specs, requirements and context go in one end. Generation, tests, evaluation and deploy come out the other. It is the lane I found easier to build, and I think that is because a harness fails loudly. A gate goes red. A run stops. You know.

The bottom lane is knowledge engineering. Domain state, context pipelines, and the systems that decide what an agent is allowed to believe.

June was late. I should have drawn it before I started rebuilding, not after.

## The lane that fails quietly

In complex backend systems, an agent's weakness is rarely writing the code. It is the lack of accurate, fresh and complete business context.

Without a knowledge engine, every task needs a human to explain the business rules, the service relationships and the API contracts. That information disappears when the chat closes. The agent starts each task from zero business understanding, and the human pays the cost of reassembling it, every time.

Three things make this hard, and none of them go red when they break.

Cold start scale. A real backend spans several domain areas and a lot of services. Hand writing documentation for every endpoint is not a weekend of work, and nobody volunteers for it twice.

Retrieval that looks right. Given a large pile of documents, keyword and vector search will confidently return something adjacent to what was asked for. The agent gets a prompt full of near misses and writes plausible code against the wrong contract. Nothing in that sequence is an error. There is no exception to catch.

Staleness. Code moves faster than the documents that describe it. A six month old document does not degrade gracefully, it contradicts the system outright, and it does so in a confident tone.

What I settled on borrows from structured wiki practice. A hybrid base, automated code to document pipelines for the parts a machine can derive, and human written documentation for the parts it cannot. I would not call it finished.

That is what I mean by failing quietly. The top lane tells you it broke. The bottom lane just lets the agent be wrong with good grammar.

If you take one thing from this book, take this. I stopped trying to make the agent smarter and started trying to make the line stoppable.

## What I mean by the stack

By the stack I mean two things, and they are harder to separate than I expected.

The technology stack is the obvious half. Harnesses, context engines, MCP servers, evaluation gates, and the plain deterministic code that should never have been handed to a model in the first place.

The organisational stack is teams, ownership, governance, and the habits an engineering group has to change. Conway's Law did not go away. Agents just made it easier to watch happen.

I should be straight about this one. I have not moved an organisation through it. What I can tell you is what it feels like from inside the work: a senior engineer now has to be able to run a fleet of coding agents, and team coordination is a different job from the one it was. That is a feeling, not a finding. Ask me again in a year.

## What this book is not

It is not about picking the best model.

I have swapped models many times this year across my own builds. Haiku, Sonnet, Opus, Fable, older versions through to current. I did not keep a count, and I wish I had.

The model is the component with the shortest life in the whole system. Building your method around which one is currently ahead is building on the part that turns over fastest. The harness and the knowledge base outlive every one of them.

## How to read it

Three parts. Principles, then architecture and capabilities, then implementation. The contents page lists what sits in each one, so I will not repeat it here.

I wrote it for architects, principal engineers and engineering leaders who have got past the chat window. Parts of it will date badly. I have tried to say which parts.

## References

* Toyota Motor Corporation, [Toyota Production System](https://global.toyota/en/company/vision-and-philosophy/production-system/). Jidoka and just-in-time, in Toyota's own words.
* Melvin E. Conway, [How Do Committees Invent?](http://www.melconway.com/Home/Committees_Paper.html), *Datamation*, April 1968.
* Reporting on the Leju Robotics humanoid robot line, the Longhua pilot that opened on 12 April and the follow-on factory in Foshan. The assembly times, the 24 process steps and the 77 inspections and 41 scenario tests all come from that coverage, not from anything I measured or watched. I do not have a link for it.

