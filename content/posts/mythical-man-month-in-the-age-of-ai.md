---
title: "The Mythical Man-Month, is this outdated in the age of AI?"
date: 2026-08-24
tags: ["Software Engineering", "AI", "Books", "Reflection", "Mythical Man-Month"]
categories: ["Engineering"]
pinned: true
description: "Brooks’s law was supposed to die in the age of AI. After six months of daily human-agent work, I went back to the book. It hasn’t aged at all."
---
## Why I Went Back To It
I still remember someone proposing to add people to a project that was already
late. It is a reasonable instinct, the work is behind, so find more hands. Someone 
else stepped in and mentioned Brook's *The Mythical Man-Month*. Nobody was added. 
The book won the argument. The project took over a few more months. I cannot remember 
what we said it would take at the start.

I am rereading it now, along with the ten points I noted on the first time.
But this time, I went back with one specific question "Is Brooks’s law outdated in the age of AI"?

Six months ago I would have told you the Brook's law was changing, but after intensive daily 
practice of human-AI collaboration since Feb 2026, I've completely changed my mind. 
The book hasn't aged out, pretty much every single one comes back in a new way, spinning up ten 
subagents to finish in an hour is just 1975’s "add ten developers to finish it in a month", running 
3 parallel AI sessions for multiple approaches is 1975’s "send three teams down different paths", handing 
a project end-to-end to an autonomous agent is exactly "outsource it all and lose conceptual integrity" in 1975.

You can easily get Brooks's big ideas off any summary website in 90 seconds, so I won't walk 
you through them again here. My focus is more on the parts where AI directly impacts his principles.

A major thank-you to *Meari-Prototype*. I’m not trying to pretend I came up with all of this on my own, I honestly borrowed heavily from his work. I was just lucky to find someone who had already laid it out so brilliantly, and his structural framework and core points remains a constant reference in my digital lab notes. It genuinely benefits from another careful read-through for anyone currently in the reality of working or building with AI agents.


## Three Hills To Climb In Context Of 2026.
First: software's difficulty comes from the thing itself, not from its tools. Tools get discarded generation after generation, assemblers in 1975, structured programming in 1985, object orientation in 1995, agile in 2005, containerization in 2015, and at every turnover someone shouts "the silver bullet has arrived, software's difficulty is solved." Speaking of automating typings, I was one of them. However, software's fundamental difficulties live in conceptual construction, specification, and the adjudication of correctness, these difficulties don't live in the tools, they live in the problem being solved. Tools can eliminate accidental complexity, they cannot eliminate essential complexity. As an aside, some complexity is actually manufactured before it gets "solved."

Second: the difficulty of managing software is mainly the difficulty of managing communication and judgment. As a project grows and headcount grows, the most expensive thing stops being coding, testing, or hardware, it becomes getting everyone aligned on the same concept. Brooks spends most of the book discussing organizational forms of communication, the surgical team, the separation of architect from implementer, the workbook, milestones and self-deception, an independent product-testing group. None of these discussions are about technology, they're about how information flows through an organization, where judgment gets made, and who bears responsibility.

Third: documentation isn't a record, it's the vehicle for decisions. Brooks holds that a project's critical documents are the project itself, the project speaks it self, the act of writing documentation forces hundreds of small decisions to become visible, and those small decisions are the project's skeleton. Without documentation, those decisions live only inside a few people's heads and can vanish at any moment, with documentation, you're casting bones for the project.

Therefore, the core of software engineering is the organization of judgment. Technology changes, the discipline of organizing judgment does not. I believe this is the soul of Brook's law.

In the age of agents, what Brook's law changes is where judgment gets made (some of it is now made by AI other than a human), how it gets recorded (some of the record is now a AI prompt), and how it gets communicated (some of the communication is now tokens). The fact that judgment needs to be organized has not changed. Teams that ignore this will re-enact the oldest failure modes with the most advanced agent systems.

## Three Generations of Readers
Brooks's book has had three generations of readers.

The first generation managed people. 1975 to 1995, Brooks's direct audience. The problems they dealt with were how to organize teams of dozens, how to estimate schedules, how to avoid the trap of adding people. Brooks's proposed solutions: the surgical team, chief-architect ownership, an independent test group, "plan to throw one away" are almost entirely aimed at this layer.

The second generation managed code. 1995 to 2025, the agile era. Team sizes shrank, but software complexity exploded. What this generation took from Brooks's book was the structural lessons: conceptual integrity, modularity, iterative development, documentation as equivalent to design. The 1995 twentieth-anniversary edition added "No Silver Bullet" and the self-assessment, filling out this layer of the argument.

The third generation manages agents. Post-2024. This generation faces a new problem: alongside themselves in the project there is now one or several agents capable of acting autonomously. You're not managing people, and you're not entirely writing code either, you're orchestrating a group of non-human executors while holding the whole thing together. The thing being managed is, one could say, an entirely new species, but the management principles are startlingly familiar, because what Brooks was ever discussing was never the peculiarity of the species "human"， it's the general law of "multiple agents collaborating to complete a large conceptual construction."

## Glossary
A handful of terms need explaining up front.

**Agent:** An AI system that can pick its own tools, take actions, see the results, and decide what to do next, without a human guiding every step or a fixed script telling it exactly what to do.

**Harness:** The supporting setup that runs the agent. It controls which tools the agent gets, what information it sees, how long it runs, when it stops, and how success is judged. The same AI can act very differently depending on its harness.

**Subagent:** A smaller agent that a main agent creates to handle a specific sub-task. The main agent stays in charge and gets the results back.

**Human-in-the-loop:** A setup where a person checks the agent’s work every step (or every few steps) and can step in to change things. The opposite is a fully automatic “set it and forget it” run.

**Context window:** The hard limit on how much text the AI can see at one time (usually 200K–1M tokens today). Even that amount can feel tight on big projects.

**Token:** The basic chunk the AI uses to process text. Roughly one English word characters equals one token. Everything about cost, speed, and memory is measured in tokens.

**Criterion / milestone:** The clear standard that decides “is the job finished?” Good criteria (sometimes called scoring or reward functions) are what make an agent system trustworthy.

## AI = Looping Harness + LLM.

The Harness is a state machine, not a Scaffolding. Calling the harness “scaffolding” makes it sound like the AI is the smart brain and the harness just supplies helpful tools, but that’s totally wrong, the LLM is merely a function that gets called, while the real driver is the harness itself, which is a kind of sytem, a state machine that is always in one clear state (waiting for input, deciding the next step, calling a tool, asking the AI, or finishing) and moves to the next state based on what happens (the AI’s reply, a tool’s result, your new message, or an error). Everyday things like traffic lights, ATMs, and elevators work the same way, without a looping process the AI is just a one-shot answer, and with it it's a true agent, which is why an agent’s quality and its most common failures depend far more on how the harness is designed than on how smart the underlying model is.

LLMs have no memory, only context. Every time you talk to an AI, each message is a completely separate API call with no built-in memory. The model only sees whatever text the harness packs into that single call. The feeling that “it remembers our conversation” comes entirely from the harness, which gathers earlier messages (or a summary of them) and stuffs them into the context before every new request. That means the quality of what the AI produces depends almost completely on the quality of the context it is given. A clean, relevant, well-organized context yields good answers. A noisy or contradictory context yields messy ones. Building good context is therefore the entire job of agent engineering. Tools, the state machine, prompts, and documentation are all just ways of deciding what goes into the next call. And the central question today is how to use fifty years of software-engineering wisdom to keep high-quality context inside the model’s limited window.


## Turing’s Wall: Why Agents Can’t Decide When to Quit
The harness has a “task complete” state, but unlike a traffic light or ATM that stops on an external signal like a timer or button press, it asks the LLM itself whether the task is done. This setup runs straight into what we can call Turing’s Wall, the hard theoretical limit Turing proved in 1936, which states that no program can reliably decide whether any given program will eventually stop. This is a limit in principle, not a matter of insufficient computing power or clever enough algorithms. 

An agent is just software made of an LLM plus a looping harness, so the same rule applies, when the LLM’s judgment of “should I stop?” is wired directly into the loop’s exit condition, “should it stop” and “will it halt” become the same undecidable question. The only exception is when the finishing line is fully formalized and machine-checkable (pass these tests, solve this equation), then the harness can simply verify the criterion without needing the LLM to decide. e.g., a merge request in a CI/CD pipeline that demands the same result survive three independent verification rounds, each started in a completely fresh session with no shared memory, only outcomes that hold up under this external, repeatable check can be trusted as truly done. On every other kind of task, where “done” is fuzzy or contextual, no LLM-powered system can independently and reliably know when to quit. That is why any claim of fully autonomous agents is only realistic on clear, formal goals, and why every practical agent system must hard-wire external circuit-breakers (maximum rounds, token budgets, repeated-error limits) into the harness instead of trusting the model to stop itself.

Looking back after finishing the whole book, the 1975 original has not aged at all. It was simply waiting for its third generation of readers. The following eighteen chapters are the unfolding of that sentence. 

Next: *The Tar Pit - Why software engineering is uniquely difficult*.

## References

- Frederick P. Brooks Jr, The Mythical Man-Month, 1975, and No Silver Bullet,
  1986.
- Meari-Prototype, [The Mythical Man-Month in the Age of Agents](https://github.com/Meari-Prototype/agent-mythical-man-month-2026/blob/main/README-en.md),
  2026.

