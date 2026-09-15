---
title: "Preface"
chapter: "00"
weight: 0
date: 2026-09-14
status: draft
draftSlug: notes-from-the-stack-preface
tags: ["Harness Engineering", "Knowledge Engineering", "Agentic Coding"]
description: "A hundred and eighteen gates on a robot production line, then a diagram with two lanes. The top lane is the harness and it fails loudly. The bottom lane is knowledge, and it does not go red."
---
Before a humanoid robot leaves the line, it has to pass 77 inspections and 41 tests that simulate real operating conditions. 24 assembly steps to build it. 118 chances to be told no.

That is reporting from March 2026 on the line in Robot Valley of Shenzhen. It puts the line at one robot every 30 minutes.

What I saw was in March, a day with my family in the newly built Shenzhen Science and Technology Museum, not far from the Robot Valley, where working lines and static displays and video walls sit next to each other. The thing I could not put down was a production line that builds robots. A whole day was not enough, and nobody got bored, which I had not expected. The line in that reporting opened a week after that visit.

What stayed with me was not just the speed, but also the number of ways that line is allowed to say no.

## What the factory already knows

None of that is new. Factories spent a century learning it.

Toyota built its production system on two ideas that pull against each other. Continuous flow keeps parts moving. Jidoka stops the line the moment a defect shows up. Neither idea is worth much alone. Flow without a stop rule ships a thousand bad units quickly. A stop rule without flow is just a queue. The pairing is the whole thing, and the order matters, the right to halt comes first, and the speed is what you are allowed to have once the halt exists.

It's similar to software, but the same part is rarely made twice in exactly the same way when building software. Each run has its own context, its own variations, and its own potential for defects. The principles of flow and halt still apply, but they must be adapted to a domain where repetition is the exception rather than the rule.

## Why it is landing now

The analogy still fits better than I want it to. Agentic coding is moving off the chat window and onto something shaped like a line. Specs in, code out, checks that can stop the run.

That move is what this series is about. Not the model that writes the code. The line it runs on, and the checks that are allowed to stop it.

## What I tore down

Earlier this year I tore down my own agentic coding setup and started again. Most of the rebuild was deletion.

The thing I threw away was micromanagement. Turn by turn chat coding, me in the loop on every step, manually driving each thread forward. It works on small things. Past a certain size two things went wrong every time. Context went missing, and the work would not split into pieces the model could hold at once.

Two things stuck. A harness that runs the lifecycle end to end, and a knowledge base that survives the end of a conversation. Everything else went.

## The diagram I should have drawn first

In June I drew one picture of the whole development process. Two lanes.

The top lane is the harness. Specs, requirements and context go in one end. Generation, tests, evaluation and deploy come out the other. It is the lane I found easier to build, and I think that is because a harness fails loudly. A gate goes red. A run stops. You know.

The bottom lane is knowledge engineering. Domain state, context pipelines, and the systems that decide what an agent is allowed to believe.

It took me until June to work out why the bottom lane has to exist. I could not have drawn the picture before that.

## The lane that fails quietly

In complex backend systems, an agent's weakness is rarely writing the code. It is the lack of accurate, fresh and complete business context.

Without a knowledge engine, every task needs a human to explain the business rules, the service relationships and the API contracts. That information disappears when the chat closes. The agent starts each task from zero business understanding, and the human pays the cost of reassembling it, every time.

Three things make this hard, and none of them go red when they break.

Cold start scale. A real backend spans several domain areas and a lot of services. Hand writing documentation for every endpoint is not a weekend of work, and nobody volunteers for it twice.

Retrieval that looks right. Keyword and vector search always return their best match, even when the right document is not in the pile. So the agent asks about one service, gets the next one over, and writes perfectly good code against the wrong contract. Nothing in that sequence failed, which is why there is no exception to catch.

Staleness. Code moves faster than the documents that describe it. A 6 month old document describes a system that has moved on, in the same confident tone it had when it was true.

What I settled on is a hybrid, and it borrows its shape from structured wiki practice. Pipelines turn code into documents for the parts a machine can generate. The rest is written by hand. I would not call it finished.

That is what I mean by failing quietly. The top lane tells you it broke. The bottom lane just lets the agent be wrong with good grammar.

I stopped trying to make the agent smarter and started trying to make the line stoppable.

## What I mean by the stack

By the stack I mean two things, and they are harder to separate than I expected.

The technology stack is the obvious half. Harnesses, context engines, MCP servers, evaluation gates, and the plain deterministic code that should never have been handed to a model in the first place.

The organisational stack is teams, ownership, governance, and the habits an engineering group has to change. Conway's Law says a system comes out shaped like the group that built it. That did not stop being true. Agents just shortened the loop, so the shape shows up sooner.

I should be straight about this one. I have not moved an organisation through it. What I can tell you is what it feels like from inside the work, a senior engineer now has to be able to run a fleet of coding agents, and team coordination is a different job from the one it was. That is a feeling, not a finding. I'll ask myself again in a year.

## What this series is not

It is not about picking the best model.

I have swapped models many times this year across my own builds. Haiku, Sonnet, Opus, Fable, older versions through to current. I did not keep a count, and I wish I had.

The model is the component with the shortest life in the whole system. Build your method around whichever one is ahead today and you have built it on the part that changes most often. The harness and the knowledge base outlive every one of them.

## How to read it

Several parts. The contents page lists what sits in each one, so I will not repeat it here.

I wrote it for engineers who have got past the chat window. Parts of it will date badly. Take what works, filter out what rots.

## References

* Toyota Motor Corporation, [Toyota Production System](https://global.toyota/en/company/vision-and-philosophy/production-system/). Jidoka and just-in-time, in Toyota's own words.
* Melvin E. Conway, [How Do Committees Invent?](http://www.melconway.com/Home/Committees_Paper.html), *Datamation*, April 1968.
* Sujita Sinha, [New humanoid robot factory in China claims it can make one unit every 30 minutes](https://interestingengineering.com/ai-robotics/china-opens-humanoid-robot-factory), *Interesting Engineering*, 31 March 2026. The Leju Robotics line in Guangdong, and where the stages, checks and tests come from.
