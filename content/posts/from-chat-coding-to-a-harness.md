---
title: "From chat coding to a harness"
date: 2026-09-08
tags: ["AI", "Coding Agents", "Harness Engineering", "Software Engineering", "Reflection"]
categories: ["AI"]
description: "The chat window stopped working for me on anything large. What replaced it was not a smarter model but a harness that takes state, execution and the definition of done away from the model."
---
## Where the chat window stopped

In June I drew a diagram. It was called an AI-driven end-to-end development process, it had three swim lanes, and the footnote said the harness is the layer that connects everything. The chat window had stopped working for me on anything large. I could not run an engineering method through a turn by turn chat box. The context kept going missing, and a big piece of work would not break down into pieces the model could hold.

I was not the only one. Several engineering teams published write-ups this year of the same move, from a person driving an agent by hand to a pipeline driving it. They are in my notes now. The clearest of them gives four reasons chat coding stops scaling, and they are close to the ones I had.

1. Context window inflation. Background, standards and rules get pasted into every session, and a long session compresses them away until the model forgets a rule it was given earlier.
2. Missing business knowledge. Nobody carries it, so a person explains the services and how they join, every time, and the explanation is single use.
3. No automated loop outside coding. Requirement analysis, deployment, verification and testing stay manual, so the speed gain stops at the code.
4. No parallelism. One window runs one task, so three independent APIs means three windows and a person switching between them.

Their summary is that the more complex, large and repeatable the task, the less chat coding gives back. Another write-up put it as a formula. Code output is AI capability multiplied by context quality, so when context quality goes to zero the model's strength does not matter.

Mine were the first two, context and decomposition. I wrote down a third of my own in July, when the agent kept writing code that was not the way I would write it. I gave it two causes. Either the existing code around it was smelly and it copied the smell, or it did not follow the new pattern, or the context engineering needed work.

## A harness is a state machine, with files in it

The harness is a state machine and the model is a function it calls. I put it that way in the man-month post in August, but the June design already worked like that. Every node handed off to the next by writing a file, not by passing anything in memory, so a run could be killed and restarted from whatever file was written last. The files sat in four layers. Per task: an intent file, the requirement, the design, the verification result. Per round: a state file, a flow status, evidence. Across tasks: lessons that become patterns that become instincts. And across versions of the harness itself: the verification results feed back and grade the harness.

I did not invent the shape. It came out of the references I had been collecting. The teams I read later use the same trick. State lives in a JSON file, and an orchestrator reads the file rather than its own memory to decide the next step. Hooks stop the run quitting early or resume it in a new session. The reason looks the same in all of them. A model has no memory, only context, and a file outlives a context window in a way a conversation does not.

The same write-up splits a harness into two halves. A knowledge layer holds what the business knows, generated from code and corrected by hand. An end-to-end pipeline runs on top of it and consumes that knowledge at every step. Mine has the second half. The first half is a box on my diagram, and the last section of this post is about what that costs.

## Two agents, then five

The first thing I actually ran was much smaller than the diagram. At the end of June it was two agents and a loop in my home folder. A builder that could read, write, edit and run commands. A checker that could read and run commands and could not write. The checker's missing Write tool was enforced at the tool layer, not by asking nicely in a prompt. A build-loop command sent the builder in, sent the checker after it, forwarded the raw failures back to the builder, and stopped after five rounds. The checker found the project's real check commands itself from the project files: build, test and format. The stop rules and the escalation protocol went into the instructions file every agent reads. Those were the brakes.

In early July I moved the harness into one root folder shared by three projects, recloned the projects, and regenerated the OpenSpec seed file for it. By the middle of the month the verifier was running two rounds, applying fixes and running again when a check failed. I had to write a question to myself about why it was two. By September there were five roles: a planner, an implementer, a verifier and a finalizer, plus a handoff agent for when the context fills up. The verifier grades every task on seven checks before anything is accepted. After three failed rounds the harness hands control back to me.

Five is where it landed, not where it was designed to land. The June diagram had three roles. One team I read started with a single agent doing everything. It mixed what the ticket said with what it had inferred, it never vetoed its own design, and it always found a reason to push on. They ended at four agents plus a controller, with one rule they call their heaviest: a downstream agent may not edit an upstream artefact, it can only raise a blocker. Another team runs twelve. My own rule from July is blunter than either. Multiple agents for intelligence, a single agent for execution.

## Done is a verdict, not an opinion

Done now means an automated check has passed, not that the agent said so. Until a check exists, the task is not finished. The reason is the one I wrote up as Turing's wall. When the model's opinion on whether it should stop is wired into the loop's exit condition, the question becomes undecidable. The only way out is a finish line that is formal and machine checkable. Rule 4 on my June list was define done, then loop. The June checker reported failures only, and the loop ran until everything was green or a stop condition tripped.

One of the write-ups runs seven gate scripts and makes only three of them hard. A flow that blocks on everything gets routed around. It also snapshots the gate failures before a task starts, so that only new failures block. They call that taking away the AI's right to explain.

Mine leaks here, and I know where. The gate lets a task through with up to two warnings. They are written into the verdict, but nothing routes them to me and nothing stops the next task starting, so a sprint of twenty tasks can leave forty known small problems recorded and never acted on. The tests were slow too, as of July. Red-green relied on the tests that already existed, and running the full suite ate a lot of the loop's time.

## Scripts run, the model judges

Rule 5 on the June list said the model is for judgement, not routing. The teams I read landed on the same split, thinking to the model and deterministic steps to scripts. One of them wrote almost no natural-language rules at all. Anything decidable became a lint rule or a script, because a rule in prose can be argued with, and the model will argue with it.

The place this bit me was the worktree. In July I wrote down what the worktree should be. Not one per user story, since that repackages every task under it and the pull request can get too big and slow integration. One per ticket, with the earlier unmerged task's branch merged in at the start of the next round and rebased when that pull request lands. The procedure for one round is: split into a worktree, finish the loop, commit inside the worktree, switch back, merge into the ticket branch, review the pull request, submit. There is no judgement anywhere in that list. I wrote it down as a numbered list, not as a script. It is exactly the kind of step the write-ups hand to a shell file.

## The ticket is the spec

The other leak was upstream of the harness. In July I wrote: Jira content and task details is very important, if they are too loose, implementation will be less restricted. Then a question: how do we improve this? One of the write-ups lists the untrusted PRD as its first pain point. Product hands over one sentence and nobody knows what deletion triggers downstream, how the rollout is staged, or whether the endpoint is idempotent.

What I wrote down as the fix was to put the definition of done in the ticket. The REST and GraphQL schema, the service contract, the DTOs and entities, validation, the read and write handlers, the database change, the unit and integration tests, the desk test, all checked against the story's acceptance criteria. By the third week of July there was an agent-ready ticket template, and the drafting problem had mostly gone. The same ticket fed the generator, the evals and the reviewers. The next step on the list was a grooming agent as a final gate before implementation. An intention classifier is on the same list, because an escalation, a bug fix, a chore, a spike and a feature linked to an epic each want a different amount of process.

On one payroll feature at work in June, automating super payments when a batch is lodged, I ran the front half step by step and wrote each step down. An intention step first: is this a query, a bug fix, or a feature, and how big. Then requirement analysis split two ways, a horizontal feature summary and vertical thin slices. Then a grill on the raw PRD and the technical notes, a spec, a grill on the spec, a plan, a cross-check of the plan against every acceptance criterion, decision records and a glossary, tickets with dependencies, and a human approval before any code. On the grill on the spec, the model went into the codebase before its first question and verified four things on its own. Then it asked question one of about eight, with two options and a recommendation.

The spec and plan steps come from Addy Osmani's agent-skills. Its main device is an anti-rationalisation table. Next to each step sits the excuse the agent is statistically likely to make, "this is too simple to need a spec", "tests later", and a pre-written rebuttal. The line the chapter quotes from Osmani is that the work of a senior engineer, revealing assumptions, controlling the size of a change, leaving evidence, is exactly what an agent skips unless you make it impossible to skip. That is the theory. On my side of it, one feature is one data point.

## What leaks between tasks

The harness checks each task on its own. Nothing in it asks whether the codebase is still in one piece after the task landed. Take a date formatter. The implementer writes one because the task needs it. Two weeks ago a different task wrote the same thing three folders over. The verifier passes the new one on every check because it is correct, tested and to standard. This is not a made up case. One codebase I work in has two of them, and they were there before my time.

One team I read hit the mirror image. Their model called an old interface because their knowledge base had gone stale, the whole chain ran, the results were wrong, and it took them a long time to find out why. Stale knowledge, they say, is more dangerous than no knowledge. Another keeps its map of the repo in the repository rather than in the tool's memory feature. A repo document is team consensus that can be audited. Four engineers' private memories will contradict each other.

My June diagram had a layer for this: lessons that become patterns that become instincts, promoted across tasks. In July I put "session journal entries and use memory to avoid same mistakes" on the list of things to build. In September nothing in my pipeline carries a picture of the codebase from one change to the next. The box is still on the diagram.

## What changed

Between June and September the harness went from a diagram to two agents to five, and the agent count is the least of it. "Done" moved out of the model's reply and into a check that runs the real build and tests. The ticket started carrying the definition of done. The loop hands back to me after three failed rounds, because I would rather be in the run than watching it. And I stopped reading speed as progress. Before I hand a task over I say which cell of Brooks's grid from the tar-pit post it belongs in, and if it is not the cheap one I decide who will read the output before the agent writes it.

The things that did not change are the gaps. Two warnings still pass. Nothing remembers between tasks. The worktree procedure, as of July, was a numbered list. Still on my July list are the intention classifier and turning the whole thing into a plugin, so it leans less on any one tool. Half my commits are co-authored by an agent, and I still read every line. The harness exists so that reading is the last check, not the only one.

## References

* Three engineering write-ups on moving from chat coding to a harness, all
  2026 and in Chinese: [one](https://mp.weixin.qq.com/s/UE-RZH9hnbBd06CVapFGrA),
  [two](https://mp.weixin.qq.com/s/LGo7daiYYRf1r_YY3r-cXw) and
  [three](https://mp.weixin.qq.com/s/yw3DvqKBIV5fIZkSG12zdA). The four
  failure modes, the state files and hooks, the twelve agents and the stale
  knowledge incident are from the first. The one-agent-to-four story, the
  seven gates, the failure snapshot and the repo map are from the second. The
  capability times context formula is from the third.
* Addy Osmani, [agent-skills](https://github.com/addyosmani/agent-skills),
  2026, read through the chapter on it in
  [Software Engineering in the AI Era](https://se.rpcx.io/). The
  anti-rationalisation table and the quoted line come from that chapter.
* Earlier posts on this site: [The Mythical Man-Month, is this outdated in the age of AI?](/posts/mythical-man-month-in-the-age-of-ai/)
  for the harness as a state machine and Turing's wall, and
  [The new software tar pit](/posts/the-new-software-tar-pit/) for the seven
  checks, the two warnings and the date formatters.
