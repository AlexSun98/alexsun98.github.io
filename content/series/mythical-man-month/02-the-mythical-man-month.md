---
title: "Ten subagents in an hour is 1975 asking for ten developers in a month"
chapter: "02"
weight: 2
date: 2026-09-23
status: published
draftSlug: mythical-man-month-02-the-mythical-man-month
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Harness"]
categories: ["Engineering"]
description: "Splitting a stuck task across ten subagents feels like a new idea. It is the same equation Brooks took apart in 1975, and the bill now arrives as verification."
---
## The first thing I reach for

The last chapter was about mistaking speed for progress. This one is about the first thing I reach for when speed is not enough. The work is massive and behind, so I split it up. Brooks wrote a whole chapter on why that does not work, but clearly, the version of me that opens three parallel agent sessions at once has not read it carefully enough.

The 1975 sentence was that a job taking ten people a month can be done in a month by ten people. The 2026 sentence is that a job taking one agent session ten hours can be done in an hour by ten subagents. The myth was simple, but nobody writes the second one down as an engineering strategy on paper. It still runs silently underneath every time I decide a refactor is too big for one session.

## Cheap to open, expensive to close

One line of Brooks and Meari keeps echoing in my head, the core curse is to disguise a process that does not add up as a resource that can be allocated. 

Splitting work always costs something. Part of the reason is that starting is so easy. Hiring a person takes a process and a meeting takes a calendar, but ten subagents take one prompt, and when nothing pushes back at the start it feels like free parallel speed. The bill turns up at the merge. Three subagents each finish their piece, and the pieces do not fit. One coded against an interface that another had already changed. Another dropped a convention the third relied on and never said so. By then the tokens are spent, and so is the part that was always scarcer, my attention and my time. Splitting was meant to save attention, and the merge eats it instead, in reading, comparing and deciding between three outputs that never spoke to each other. There is no way back from that point. By the time the diffs conflict and my attention has run dry, the bill is already settled. A stronger model, a well designed harness and engineering methods that fit the work can all shrink this bill, but I still have to count it every time I split a task.


## The one I actually lived

Early on I watched someone propose adding people to a project that was already late. It is a reasonable instinct. Someone else mentioned Brooks, nobody was added, I told that story in the first chapter of this series as a true story about other people. The truth is, it's my story too. I spot the mistake so fast because I do the exact same thing with AI sessions almost every week.

## Optimists, pure thought, now in plain language

Brooks said programmers are optimists because we work in pure thought. There is so little friction between the idea and the code that thinking a solution through feels like having built it. Now I explain the logic in plain language instead of writing it in code, and I trust myself to be clear far more than I should. Agents push that further.

A friend of mine shows how far that trust can go. We became friends because his son and my elder son train and play matches at the same local soccer club every week. He runs his own business in Chatswood and has no background in IT at all. He described what he wanted to ChatGPT in plain language, got back a mobile app for managing the business internally, and posted about it on social media. All of it came out of conversation, and he was very sure of it. His confidence comes from the same place like mine.

I do a more technical version of the same thing. When I decide ten subagents will clear a bottleneck, I am making the 1975 manager's mistake of hiring ten engineers to rescue a late deadline, and mistaking the cost of handing work out for the cost of finishing it. Getting out of that means walking back along Brooks's path. Work does not split without limit, splitting it charges the attention tax, and the tax is highest exactly when I most want to go faster.

## Reflection 1: What splits and what does not

Software work has always come in two kinds. Some tasks can be divided, done in parallel and merged back. In the rest, the parts depend on each other. Agent work splits the same way.

Once I lock down the API contract, two subagents can build the front end and the back end on their own. Ten subagents can add type annotations across a large repo, and a big test suite can fan out across several workers. What these tasks have in common is that the subtasks carry no information for each other, the rule for merging the results is clear, and merging costs little. The task graph is a set of separate nodes joined by clean interfaces. Handing this kind of work to agents pays off, and Brooks would have no quarrel with this part.

Most of the work I care about is not like that, and forcing it apart costs more than it saves. Two cases show why.

Cross module refactoring is the first. Sending three subagents to fix module A, module B and module C sounds clean until it runs. Changing A exposes a hidden convention in B, B relies on an assumption in C that nobody stated, and C is only correct because of an old behaviour in A. These dependencies are about meaning, so no task graph shows them. When the subagents finish, what comes back is three conflicting diffs, and a person or a main agent has to spend the time reconciling them.

Debugging is the second. Splitting it looks organised, with one subagent on the logs, one on the stack traces and one writing a script to reproduce the bug. Gathering evidence in parallel is fine. What does not split is the loop that uses it, where I form a hypothesis, test it and revise it, and each turn depends on what the last one showed. Three agents working without a shared hypothesis hand me three piles of context that do not join up, and joining them was the actual work.

What these two have in common is that the finish line moves while I work. What I find in step one changes what step two is supposed to do, and I cannot hand out pieces of a job when the lines between the pieces keep shifting.

The links between the pieces are hidden. They are not on any plan I could draw up front, because they only show up once the work is under way. Someone has to keep the whole job in their head and keep adjusting as things change. In a subagent setup the lead is the only one who could do that, and it only sees each piece once it is finished. The subagents cannot see each other at all, so nobody notices one change breaking another until everything comes back.

Brooks saw two costs in forcing work like this into parallel. Some steps simply have to wait for others, and everyone involved has to keep talking. With agents the talking costs more. They cannot hop on a quick call, so everything goes through written notes or prompts passed along by the lead, and every one of those burns tokens just to keep everyone on the same page.

Even a lifecycle built for agents writes the boundaries down before it splits. AWS's [AI-DLC](https://github.com/awslabs/aidlc-workflows) has three phases called inception, construction and operations. Inception turns intent into requirements and splits the work into units, and a later step pins down the contracts between those units, the same move as locking the API contract above, so that teams can build in parallel. Construction only fans out after that. So even here the split comes after the hard part. Someone has to draw the lines first, and that work does not split. Adding subagents only speeds up the part that was already easy.

## Reflection 2: The bill arrives as verification

Brooks noticed that every new person has to talk to everyone already on the team, so the talking grows much faster than the headcount. Subagents pay the same price. With them it just shows up as checking their work.

A subagent finishes and reports done, and the lead either believes it or reads the whole output. Believing it is a gamble, because the gap between an agent saying done and being done is the largest error category I deal with. Reading the whole output throws away the one thing the subagent structure was for, which was keeping the main context clean.

My own harness pays this cost in full, and I can watch the money leave. A merge request in my setup has to survive three independent verification rounds, each in a fresh session with no shared memory. I built it that way on purpose, because a verifier that remembers writing the code is not independent any more. It also means the same diff gets read three times, and those three reads are what it costs not to trust a report.

Each cheaper option leaks somewhere. Spot checking is the first. It works on a production line because the items are identical, and agent output is not. Each subtask goes wrong in its own way, so three clean samples tell me nothing about the fourth.

A verifier layer is the second, and I have one. It grades every task on seven checks before anything is accepted. It is a good gate, but it only moves the adjudicator up a level, because the verifier still needs verifying and the chain ends with the person who knows what the work is for.

Tests are the third, and the one I lean on hardest. They hold only while they are thorough, and deciding whether they are thorough is a judgement I have to make myself. An agent asked to pass tests can also edit them. That happens because the metric is within reach, and malice has nothing to do with it.

None of the three makes the work faster for free. Adding subagents adds communication, and the meeting is just called reading output now.

## Where my own gate short pays it

There is a place in my harness where I let the bill go unpaid, and I designed it.

The gate lets a task through with up to two warnings. They get written into the verdict. Nothing routes them to me and nothing stops the next task starting. Across a sprint of twenty tasks that can be forty recorded small problems, all known, none acted on. The verification happened. The reading did not.

That is the modern shape of Brooks's point, and it is more embarrassing than the parallel sessions thing, because the information exists and I built the path that drops it.

## Parallel sessions lose the accumulation

Meari describe the mild form, and it is the one that plays out for solo developers. A feature has been stuck for two days, so three sessions get opened to try three approaches. Judgement was already the bottleneck, which is why the thing was stuck, and now it is split three ways.

Their accounting of it is that either one session happens to be right, in which case triple the effort bought a small speedup, or all three get halfway and the merge is slower than starting over, because the reasons behind each choice have to be reconstructed.

The part of their argument I would put my own weight behind is what a single session gives you for free. Understanding accumulates in the context, so a later round knows more than the first. Parallel sessions each start from zero.

I get taught this by my own design. Every agent in my harness starts with a clean memory, and that is exactly what keeps the verifier honest. It is also why nothing in the pipeline carries a picture of the codebase from one change to the next. Context reset bought me an independent check and cost me accumulation. I would make the same trade again, but it is a trade-off, not a free win.

## The three costs, renamed

Brooks split the cost of adding a person into three parts. Meari renamed all three for agents, and it is the clearest thing in their chapter. None of the three went away.

Dividing up the work is now dividing up what each agent knows, the context. Instead of repartitioning responsibilities among people, I'm partitioning context across agents. I decide what the lead keeps, what each subagent gets and how the results come back together. Get it wrong and a subagent either does not know enough to do the job or hands back something that does not fit. A human has to design and then do it, and it means keeping the whole task, the small task and what each agent can take in, all in my head at once, and finding someone who deeply understands the system architecture, the domain, and agent context mechanics is exceptionally expensive on 2026.

Training a new person is now loading context into a new session. Every fresh session starts knowing nothing about the project, and the bigger the codebase, the more I have to give it before it can start. In 1975 that cost lived in people's heads and never showed up anywhere. Now it is on the bill, by the token.

Communication overhead is now output verification. Instead of sitting in status meetings, I spend my time reviewing, checking, and merging agent output. Fanning out three sub-agents doesn't give me 3x speed, it gives me 3x volume, 3x review load, and 3x context switching overhead. Because human review bandwidth is constant, most of my time only gets consumed chasing down output rather than driving real progress sometimes. Three subagents do not make me three times faster. They give me three times the output to read, check and merge, and I am still one person reading it.

The good part is that the cost is now visible. I can see it on an invoice, which is more than anyone could do with a meeting in 1975. The bad part is that a visible cost is easy to treat as the normal price of working this way, and then nobody tries to bring it down because of too many teams treat it as inevitable system tax and stop trying to optimize it

## Relfection 3: Holding back

For work that needs one continuous line of thinking, I would rather run one strong model in order than a crowd of weaker ones side by side. One long session keeps reusing what it has already read, and providers bill that repeat reading at a discount due to prompt cache. It also keeps what it has worked out so far, so each step builds on the last. Parallel sessions give up both, or pay to rebuild them.

So my default is one session until something forces a split. The harness I use is a custom AI-DLC and runs several loops across the product side and the engineering side, so the lines get drawn before anything splits. Meari's rule for when a parallel track is worth opening has three conditions. The subtasks are genuinely independent, the rule for merging them is clear, and the lead can merge them without reading the middle of each one. Miss any one of the three and it stays one session. I use that rule too, but I'm measuring it against my own work.

Before opening a subagent, the question worth asking is whether the work really splits into separate pieces, or whether it is one line of thinking dressed up as several.

Deeply understanding a problem happens along a single intent driven reasoning chain in human brain, and a crowd of agents cannot take that over.

Brooks opens the chapter by saying software projects rarely fail from bad tech or poor talent, they fail because of flawed estimates and impossible commitments, and then more people thrown at the slipping date, which makes it later. In 2026 only the last step has changed. It is no longer another engineer. It is another parallel session, another verifier, another round of asking several agents and keeping the best answer.

The mechanism is the same and so is the result. What changed is that I can now make the mistake in seconds, which makes holding back harder than it was in 1975.


## References

* Frederick P. Brooks Jr, *The Mythical Man-Month*, 1975. Chapter 2, The
  Mythical Man-Month, on optimism, the man-month and the cost of communication.
* Meari-Prototype, [The Mythical Man-Month in the Age of Agents, chapter 2](https://github.com/Meari-Prototype/agent-mythical-man-month-2026/blob/main/agent-era-mythical-man-month/02-the-mythical-man-month.md),
  2026. The curse line, the three renamed costs and the rule for opening a
  parallel track are theirs.
* AWS, [AI-DLC workflows](https://github.com/awslabs/aidlc-workflows). The
  contract design stage that pins the contracts between units so teams can
  build in parallel.
* Raja SP, [AI-Driven Development Life Cycle](https://aws.amazon.com/blogs/devops/ai-driven-development-life-cycle),
  AWS DevOps Blog, 2025.
