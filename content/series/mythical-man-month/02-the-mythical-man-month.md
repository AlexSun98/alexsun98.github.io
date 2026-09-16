---
title: "Ten subagents in an hour is 1975 asking for ten developers in a month"
chapter: "02"
weight: 2
date: 2026-06-10
status: published
draftSlug: mythical-man-month-02-the-mythical-man-month
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Harness"]
categories: ["Engineering"]
description: "Splitting a stuck task across ten subagents feels like a new idea. It is the same equation Brooks took apart in 1975, and the bill now arrives as verification."
---
## The first thing I reach for

The last chapter was about mistaking speed for progress. This one is about the first thing I reach for when speed is not enough. The work is behind, so I split it up. Brooks wrote a whole chapter on why that does not work, and the version of me that opens three sessions at once has not read it carefully enough.

The 1975 sentence was that a job taking ten people a month can be done in a month by ten people. The 2026 sentence is that a job taking one agent session ten hours can be done in an hour by ten subagents. Nobody writes the second one down as a belief. It still runs underneath every time I decide a refactor is too big for one session.

Meari-Prototype took Brooks's chapter apart against agents before I did, and I am following their reading here. Their line is the one I keep coming back to. The grammar of the curse is to disguise a process that does not add up as a resource that can be allocated.

## The one I actually lived

Early on I watched someone propose adding people to a project that was already late. It is a reasonable instinct. Someone else mentioned Brooks, nobody was added, and the book won the argument. The project took a few more months anyway, and I cannot remember what we said it would take at the start.

I told that story in the first chapter of this series as a story about other people. It is not. The reason I recognise the shape of it so fast is that I do the agent version of it most weeks.

## What splits and what does not

Some work genuinely divides. A few hundred type annotations across a repo is one file each and nobody has to talk. A test run is one case each. Front end and back end split cleanly once the contract is already agreed. The property these share is that the subtasks carry no information for each other, the rule for putting the results back together is obvious, and putting them back together is cheap.

Most of the work I care about is not like that. A cross module refactor looks divisible on a dependency graph and is not, because the dependencies that bite are semantic. Module A leans on a convention inside B that nobody wrote down. C is correct only because of an old behaviour in A. None of that is an edge on the graph, so nothing declares it in advance, and three parallel diffs come back standing on each other.

Debugging is worse, because it is a chain. Hypothesise, check, revise the hypothesis. Three agents running in parallel hand me three sets of observations that do not join up, and then I do the joining, which was the actual work.

The shape underneath all of it is that the dependency lives in the situation rather than in the interface, so it needs a subject holding the whole picture. In a subagent tree that subject is usually missing. The lead does not watch the middle of each subtask, and the children do not talk.

## The bill arrives as verification

Brooks priced communication at n times n minus one over two. Double the people, quadruple the channels. In a subagent tree the same bill arrives under a different name.

A subagent finishes and reports done. The lead either believes it or reads the whole output. Believing it is a gamble, because the gap between an agent saying done and being done is the largest error category I deal with. Reading the whole output throws away the one thing the subagent structure was for, which was keeping the main context clean.

My own harness pays this bill in full and I can watch the money leave. A merge request in my setup has to survive three independent verification rounds, each in a fresh session with no shared memory. That is deliberate. A verifier that remembers writing the code is not a verifier. It also means the same diff gets read three times, and those three reads are the cost of not trusting a report.

The cheaper options all leak somewhere.

- **Spot checking.** This works on a production line because the items are the same. Agent output is not. Each subtask goes wrong in its own way, so three clean samples tell me nothing about the fourth.
- **A verifier layer.** I have one. It grades every task on seven checks before anything is accepted. It is a good gate and it does not remove the adjudicator, it moves it up one level. The verifier still needs verifying, and the chain ends at the person holding the purpose.
- **Tests as the gate.** This is the one I lean on hardest, and it holds only while the tests are thorough. Whether they are thorough is itself a judgement, and it is mine. An agent asked to pass tests can also edit tests, and that is not malice, it is the metric being reachable.

So none of the three is free acceleration. Adding subagents is adding communication. The meeting is just called reading output now.

## Where my own gate short pays it

There is a place in my harness where I let the bill go unpaid, and I designed it.

The gate lets a task through with up to two warnings. They get written into the verdict. Nothing routes them to me and nothing stops the next task starting. Across a sprint of twenty tasks that can be forty recorded small problems, all known, none acted on. The verification happened. The reading did not.

That is the modern shape of Brooks's point, and it is more embarrassing than the parallel sessions thing, because the information exists and I built the path that drops it.

## Parallel sessions lose the accumulation

Meari-Prototype describe the mild form, and it is the one that plays out for solo developers. A feature has been stuck for two days, so three sessions get opened to try three approaches. Judgement was already the bottleneck, which is why the thing was stuck, and now it is split three ways.

Their accounting of it is that either one session happens to be right, in which case triple the effort bought a small speedup, or all three get halfway and the merge is slower than starting over, because the reasons behind each choice have to be reconstructed.

The part of their argument I would put my own weight behind is what a single session gives you for free. Understanding accumulates in the context, so a later round knows more than the first. Parallel sessions each start from zero.

I get taught this by my own design. Every agent in my harness starts with a clean memory, and that is exactly what keeps the verifier honest. It is also why nothing in the pipeline carries a picture of the codebase from one change to the next. Amnesia bought me an independent check and cost me accumulation. I would make the same trade again, but it is a trade, not a free win.

## The three costs, renamed

Brooks split the cost of adding a person into three parts, and Meari-Prototype's rename of them for agents is the clearest thing in their chapter.

- **Redividing the task is now partitioning context.** What the lead keeps, what the child takes, how the result folds back. No tool does this. I do it, and doing it means holding the main task, the subtask and the context mechanics at once.
- **Training the newcomer is now background loading.** Every fresh session loads the project from zero. In 1975 that cost sat inside someone's memory and never appeared on a ledger. Now it is on the bill, by the token.
- **Extra communication is now reading output.** Triple the parallel work is triple the output, triple the verification and triple the switching.

The useful part of the rename is that the cost became visible. I can see it on an invoice, which is more than 1975 could do with a conference room. The unhelpful part is that a visible cost is easy to file as a fixed overhead of working this way, and then nobody tries to reduce it.

## What I do differently

Their rule for when a parallel track is worth opening has three conditions. The subtasks are genuinely independent, the rule for merging them is clear, and the lead can merge them without reading the middle of each one. Miss any one of the three and it is one session. I have not tested that rule against my own work, so I am repeating it rather than confirming it.

The exception I do keep is searching. When the corpus is too big to read at all, sending several agents to filter it and report a few lines each is pure profit, because the middle was always going to be thrown away. That is different in kind from splitting up a piece of my own project, where the lead reading it once is faster and avoids the distortion of a relay.

## The number I never wrote down

I cannot tell in advance which dependencies are semantic. The refactor that looked divisible and was not looked exactly like the one that was. I catch it by having been wrong before, which is not a method.

And there is no figure anywhere in my notes for any of it. Nothing I have written down says what one approach cost against another on the same task, because I have never run the pair and recorded both. Everything above is either Brooks, or Meari-Prototype, or a mechanism in my own setup that I can point at. None of it is a measurement. That gap is the subject of chapter eight.
