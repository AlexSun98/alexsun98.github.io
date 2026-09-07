---
title: "The Mythical Man-Month, is this outdated in the age of AI?"
date: 2026-08-24
tags: ["Software Engineering", "AI", "Books", "Reflection", "Mythical Man-Month"]
categories: ["Engineering"]
pinned: true
description: "Brooks's law was supposed to die in the age of AI. After six months of daily work alongside agents, I went back to the book. It has not aged at all."
---
## Why I went back to it

I still remember someone proposing to add people to a project that was already late. It is a reasonable instinct, the work is behind, so find more hands. Someone else stepped in and mentioned Brooks's *The Mythical Man-Month*. Nobody was added. The book won the argument. The project took a few more months anyway, and I cannot remember what we said it would take at the start.

I am rereading it now, along with the ten points I noted the first time. This time I went back with one question. Is Brooks's law outdated in the age of AI?

Six months ago I would have told you it was changing. After daily work with AI agents since February 2026, I have changed my mind completely. The book has not aged out. Pretty much every idea in it comes back in a new shape. Spinning up ten subagents to finish in an hour is 1975's "add ten developers to finish in a month". Running three AI sessions in parallel to try different approaches is 1975's "send three teams down different paths". Handing a project end to end to an autonomous agent is 1975's "outsource it all and lose conceptual integrity".

You can get Brooks's big ideas off any summary site in ninety seconds, so I will not walk through them again. I want to look at the places where AI lands directly on his principles.

A big thank you to Meari-Prototype. I am not going to pretend I came up with all of this on my own. I borrowed heavily from their work, and their structure and core points are a standing reference in my lab notes. Anyone building with agents today would get something out of a careful read of it.

## Three hills to climb in 2026

The first hill. Software is hard because of the thing being built, not because of the tools. Tools get thrown away generation after generation, assemblers in 1975, structured programming in 1985, object orientation in 1995, agile in 2005, containers in 2015, and at every turn someone announces that the silver bullet has arrived and the difficulty is solved. When the typing got automated, I was one of them. But the real difficulty of software lives in working out the concept, writing the specification, and deciding what counts as correct. None of that lives in the tools. It lives in the problem. Tools can remove accidental complexity. They cannot remove essential complexity. As an aside, some complexity is manufactured first and then "solved".

The second hill. Managing software is mostly managing communication and judgement. As a project and its headcount grow, the most expensive thing stops being coding, testing or hardware. It becomes getting everyone to hold the same idea in their heads. Brooks spends most of the book on the forms that communication takes, the surgical team, the split between architect and implementer, the workbook, milestones and the ways people fool themselves about them, an independent product testing group. None of it is about technology. It is about how information moves through an organisation, where judgement gets made, and who carries the responsibility.

The third hill. Documentation is not a record, it is how decisions get made. Brooks holds that a project's key documents are the project. Writing them forces hundreds of small decisions into the open, and those small decisions are the skeleton. Without the documents, the decisions live in a few people's heads and can vanish at any moment. With them, the project has bones.

So the core of software engineering is the organisation of judgement. Technology changes. The discipline of organising judgement does not. I think that is the soul of Brooks's law.

In the age of agents, what changes is where judgement gets made (some of it now by an AI rather than a person), how it gets recorded (some of the record is now a prompt), and how it gets communicated (some of the communication is now tokens). The fact that judgement has to be organised has not changed at all. A team that ignores this will replay the oldest failures with the newest agent systems.

## Three generations of readers

The book has had three generations of readers.

The first generation managed people. 1975 to 1995, Brooks's direct audience. Their problems were how to organise teams of dozens, how to estimate a schedule, and how to avoid the trap of adding people. Brooks's answers, the surgical team, one chief architect who owns the design, an independent test group, "plan to throw one away", are almost all aimed at this layer.

The second generation managed code. 1995 to 2025, the agile era. Teams got smaller and software complexity exploded. What this generation took from the book was the structural lessons, conceptual integrity, modularity, iterative development, documentation as a form of design. The 1995 twentieth anniversary edition added "No Silver Bullet" and Brooks's own look back, and filled out this layer of the argument.

The third generation manages agents. This is us, after 2024. The new problem is that alongside you on the project there are now one or more agents that can act on their own. You are not managing people, and you are not fully writing the code either. You are directing a group of executors that are not human, while trying to hold the whole thing together. The thing being managed is a new species, but the principles feel familiar, because Brooks was never really writing about humans in particular. He was writing about the general problem of many agents working together on one large conceptual construction.

## Glossary

A few terms I use below.

**Agent.** An AI system that picks its own tools, acts, looks at the result, and decides what to do next, without a person guiding every step or a fixed script telling it exactly what to do.

**Harness.** The setup that runs the agent. It decides which tools the agent gets, what information it sees, how long it runs, when it stops, and how success is judged. The same model behaves very differently under different harnesses.

**Subagent.** A smaller agent that a main agent creates to handle one specific piece of work. The main agent stays in charge and gets the result back.

**Human in the loop.** A setup where a person checks the agent's work every step, or every few steps, and can step in to change things. The opposite is a fully automatic, set it and forget it run.

**Context window.** The hard limit on how much text the model can see at once, usually somewhere between 200K and 1M tokens today. On a big project even that feels tight.

**Token.** The unit the model processes text in. Roughly one English word is one token. Cost, speed and memory are all measured in tokens.

**Criterion, or milestone.** The clear standard that decides whether the job is finished. Good criteria, sometimes called scoring or reward functions, are what make an agent system trustworthy.

## An agent is a looping harness plus an LLM

The harness is a state machine, not scaffolding. Calling it scaffolding makes it sound as if the model is the brain and the harness just hands it tools. That is backwards. The model is a function that gets called. The harness is the thing doing the driving. It is always in one clear state, waiting for input, deciding the next step, calling a tool, asking the model, or finishing, and it moves to the next state based on what comes back, the model's reply, a tool's result, your new message, or an error. Traffic lights, ATMs and lifts work the same way. Without the loop, the model gives you one answer and stops. With the loop, it is an agent. That is why an agent's quality, and its most common failures, depend far more on how the harness is designed than on how smart the model is.

A model has no memory, only context. Every message you send is a separate API call with nothing carried over. The model sees only the text the harness packs into that one call. The feeling that it remembers the conversation comes entirely from the harness, which collects the earlier messages, or a summary of them, and puts them into the context before each new request. So the quality of what comes out depends almost completely on the quality of the context that went in. Clean, relevant, well organised context gives good answers. Noisy or contradictory context gives messy ones. Building good context is the whole job of agent engineering. Tools, the state machine, prompts and documentation are all just ways of deciding what goes into the next call. The central question today is how to use fifty years of software engineering to keep good context inside a window that is never quite big enough.

## Turing's wall, why an agent cannot decide when to stop

The harness has a "task complete" state. A traffic light or an ATM leaves that state on an outside signal, a timer or a button press. The harness asks the model whether the task is done. That runs straight into what I call Turing's wall, the limit Turing proved in 1936, that no program can reliably decide whether any given program will eventually stop. It is a limit in principle, not a matter of more computing power or a cleverer algorithm.

An agent is software made of a model plus a loop, so the same limit applies. When the model's opinion on "should I stop" is wired straight into the loop's exit condition, "should it stop" and "will it halt" become the same undecidable question. The one exception is a finish line that is fully formal and machine checkable, pass these tests, solve this equation. Then the harness checks the criterion itself and the model does not have to decide. A merge request that has to survive three independent verification rounds, each in a fresh session with no shared memory, is an example. Only a result that holds up under that kind of outside, repeatable check can be trusted as actually done. On every other kind of task, where "done" is fuzzy or depends on context, no system built on a model can reliably know when to quit on its own. That is why fully autonomous agents are only realistic on clear, formal goals, and why every practical agent system wires outside circuit breakers into the harness, a maximum number of rounds, a token budget, a limit on repeated errors, instead of trusting the model to stop itself.

Looking back after finishing the whole book, the 1975 original has not aged at all. It was waiting for its third generation of readers.

Next, [the tar pit, and why software engineering is uniquely difficult](/posts/the-new-software-tar-pit/).

## References

* Frederick P. Brooks Jr, The Mythical Man-Month, 1975, and No Silver Bullet,
  1986.
* Meari-Prototype, [The Mythical Man-Month in the Age of Agents](https://github.com/Meari-Prototype/agent-mythical-man-month-2026/blob/main/README-en.md),
  2026.
