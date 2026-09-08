---
title: "From chat coding to a harness"
date: 2026-09-08
tags: ["AI", "Coding Agents", "Harness Engineering", "Software Engineering", "Reflection"]
categories: ["AI"]
description: "The chat window stopped working for me on anything large. What replaced it was not a smarter model but a harness that takes state, execution and the definition of done away from the model."
---
## Where the chat window stopped

In June I drew a diagram. It was called an AI-driven end-to-end development process, it had three swim lanes, and the footnote said the harness is the layer that connects everything. The chat window had stopped working for me on anything large. I could not run an engineering method through a turn by turn chat box. The context kept going missing, and a big piece of work would not break down into pieces the model could hold.

Three teams at Tencent and one at Alibaba wrote up the same move this year, from a person driving an agent by hand to a pipeline driving it. Their write-ups carry the comparisons in this post, because they ran more tasks and more agents than one person can. The Yingyongbao activity platform team listed four ways chat coding fails as the work grows. The window fills with pasted rules and background, and long sessions compress them away until the model forgets a rule it was given an hour ago. Nobody carries the business knowledge, so a person explains the services and how they join, every time, and the explanation is single use. Nothing outside writing code is automated, so analysis, deployment and verification stay manual. And one window runs one task, so three independent APIs means three windows and a person switching between them. The more complete, large and repeatable the task, they conclude, the worse chat coding does. Over at QQ Music the same point became a formula: code output is AI capability multiplied by context quality, and when context quality goes to zero the model's strength does not matter.

Mine were about context and decomposition. The context went missing, and large work would not break down. I wrote down a third of my own in July, when the agent kept writing code that was not the way I would write it. There were two causes, and neither was the model. Either the existing code around it was smelly and it copied the smell, or it did not follow the new pattern, which meant my context engineering needed work.

## A harness is a state machine, with files in it

I said in the man-month post that the harness is a state machine and the model is a function it calls. The June design took that literally. Every node handed off to the next by writing a file, not by passing anything in memory, so a run could be killed and restarted from whatever file was written last. The files sat in four layers. Per task: an intent file, the requirement, the design, the verification result. Per round: a state file, a flow status, evidence. Across tasks: lessons that become patterns that become instincts. And across versions of the harness itself: the verification results feed back and grade the harness.

I did not invent the shape. It came out of the references I had been collecting. The Yingyongbao team drive their whole pipeline from two JSON state files, one for a multi-story product change and one for a single story with phases zero to seven. Each sub-agent writes its result into a field, and the orchestrator reads the file rather than its own memory to decide the next step. Three hooks stop the orchestrator quitting early, resume a run across sessions, and clean up after it. At TAB, the experiment platform, thirteen stages run as a relay race, each with its deliverables, its required reading and its send-back rule, kept as checkable assets rather than prose. The Alibaba Qianwen team put the flow in three files, spec, plan and tasks, and size each batch of tasks to what the model can hold without compressing the earlier ones away.

The reason is the same in all four. A model has no memory, only context, and a file outlives a context window in a way a conversation does not.

## Two agents, then five

The first thing I actually ran was much smaller than the diagram. At the end of June it was two agents and a loop in my home folder. A builder that could read, write, edit and run commands. A checker that could read and run commands and could not write. The checker's missing Write tool was enforced at the tool layer, not by asking nicely in a prompt. A build-loop command sent the builder in, sent the checker after it, forwarded the raw failures back to the builder, and stopped after five rounds. The checker found the project's real check commands itself from the project files: build, test and format.

By July the verifier was running two rounds, applying fixes and running again when a check failed, and I had to write a question to myself about why it was two. By September there were five roles: a planner, an implementer, a verifier and a finalizer, plus a handoff agent for when the context fills up. The verifier grades every task on seven checks before anything is accepted. After three failed rounds the harness hands control back to me.

Five is where it landed, not where it was designed to land. The June diagram had three roles. The TAB team wrote the most detailed account of the question in any of the four write-ups. They started with one agent doing everything. It mixed what the ticket said with what it had inferred, it never vetoed its own design, it always found a reason to push on, and it blew through a million tokens of context. They split requirements from design, and the design agent started quietly editing the acceptance criteria in the requirements document. That gave them their heaviest rule: a downstream agent may not edit an upstream artefact, it can only raise a blocker for the controller to send back. They ended at four agents plus a controller, and did not split the developer agent by layer, because a skill loaded at the right moment did the same job without a new context window. If a skill solves it, do not open an agent. Yingyongbao have twelve. Alibaba's rule is that the self-check agent runs in a separate session and a separate workspace, because having the coding agent check itself is a chef rating his own dish.

My own rule from July is blunter than any of those. Multiple agents for intelligence, a single agent for execution.

## Done is a verdict, not an opinion

Done now means an automated check has passed, not that the agent said so. Until a check exists, the task is not finished. The reason is the one I wrote up as Turing's wall. When the model's opinion on whether it should stop is wired into the loop's exit condition, the question becomes undecidable, and the only way out is a finish line that is formal and machine checkable. Rule 4 on my June list was define done, then loop. The June checker reported failures only, and the loop ran until everything was green or a stop condition tripped.

The TAB team took this further than my loop does. They run seven gate scripts, of which only three are hard. Lint plus security scan, sandbox deploy and interface tests block the flow. Coverage, artefact consistency, frontend smoke and log acceptance leave a warning and let it continue. Hard gates, fewer rather than more, is their line, because a flow that is interrupted too often makes the team doubt the whole thing and drift back to vibe coding. They also run a baseline. The gates run before development and snapshot the failures, run again after, and only the new failures block. That removes the agent's favourite excuse, that the failure was already there. They call it taking away the AI's right to explain. A soft gate failure leaves a scar: a warning record, a line in the review conclusion, a line in the delivery report. As they put it, you cannot stop the agent cutting corners, but you can make it visible.

Mine leaks here, and I know where. The gate lets a task through with up to two warnings. They are written into the verdict, but nothing routes them to me and nothing stops the next task starting, so a sprint of twenty tasks can leave forty known small problems recorded and never acted on. The tests are slow as well. Red-green relies on the tests that already exist, and running the full suite eats a lot of the loop's time.

## Scripts run, the model judges

Rule 5 on the June list said the model is for judgement, not routing. The Yingyongbao team got there after their flow was already running. Many of the steps turned out to be deterministic: parsing the state file, creating a worktree, compiling, publishing. Letting the model do them wasted tokens and added variance, wrong shell syntax, wrong flags, a different token bill every run. They wrote about fifteen scripts and a principle: AI for cognition, scripts for execution. Two of their later lessons go further. Orchestration moved out of the agent and into Go, after instruction drift and a cheaper model's sub-agents taking over the main chain. And model-written shell scripts were dropped altogether, because they hid syntax and edge-case bugs that only surfaced at the end of a long chain. TAB wrote almost no natural-language rules at all. Anything decidable became a lint rule or a script, because a rule in prose can be interpreted, and the model will interpret it. If it can be bash, do not let an agent run it.

The place this bit me was the worktree. In July I wrote down what the worktree should be. Not one per user story, since that repackages every task under it and the pull request can get too big and slow integration. One per ticket, with the earlier unmerged task's branch merged in at the start of the next round and rebased when that pull request lands. The procedure for one round is: split into a worktree, finish the loop, commit inside the worktree, switch back, merge into the ticket branch, review the pull request, submit. There is no judgement anywhere in that list. I wrote it down as a numbered list, not as a script. Both Tencent teams write about turning exactly this kind of list into one.

## The ticket is the spec

The other leak was upstream of the harness. In July I wrote: Jira content and task details is very important, if they are too loose, implementation will be less restricted. Then a question: how do we improve this? The TAB team's first pain point was the same. The PRD cannot be trusted. Product hands over one sentence, "add whitelist deletion", and nobody knows whether deletion triggers downstream recycling, how the rollout is staged, or whether the interface is idempotent. Their first move was not a rule or an agent but a design document the whole team agreed. Without the spec, they say, the harness gets built crooked.

What I wrote down as the fix was to put the definition of done in the ticket. The REST and GraphQL schema, the service contract, the DTOs and entities, validation, the read and write handlers, the database change, the unit and integration tests, the desk test, all checked against the story's acceptance criteria. By the third week of July there was an agent-ready ticket template, and the drafting problem had mostly gone. The same ticket fed the generator, the evals and the reviewers. The next step on the list was a grooming agent as a final gate before implementation.

On one payroll feature at work in June, automating super payments when a batch is lodged, I ran the front half step by step and wrote each step down. An intention step first: is this a query, a bug fix, or a feature, and how big. Then requirement analysis split two ways, a horizontal feature summary and vertical thin slices. Then a grill on the raw PRD and the technical notes, a spec, a grill on the spec, a plan, a cross-check of the plan against every acceptance criterion, decision records and a glossary, tickets with dependencies, and a human approval before any code. On the grill on the spec, before its first question the model went into the codebase and verified four things on its own, then asked question one of about eight, with two options and a recommendation. One feature is one data point.

The spec and plan steps come from Addy Osmani's agent-skills. Its main device is an anti-rationalisation table. Next to each step sits the excuse the agent is statistically likely to make, "this is too simple to need a spec", "tests can come later", and a pre-written rebuttal. The line the chapter quotes from Osmani is that the work of a senior engineer, revealing assumptions, controlling the size of a change, leaving evidence, is exactly what an agent skips unless you make it impossible to skip.

## What leaks between tasks

The harness checks each task on its own. Nothing in it asks whether the codebase is still in one piece after the task landed, which is how one codebase I work in came to have two date formatters three folders apart, both correct, both tested, both passed. The Yingyongbao team hit the mirror image. Their model called an old interface because the knowledge base had not been updated, the whole chain ran, the results were wrong, and it took a long time to find out why. Stale knowledge, they say, is more dangerous than no knowledge, and they now compare the git hash stored with each document against HEAD and regenerate when it drifts. Their knowledge base is more than 800 structured documents over more than 90 services, generated from code and corrected by hand. TAB keep a 26 KB navigation map of the repo, maintained by the developer agent, and a cross-ticket task board. Both live in the repository rather than in the tool's memory feature. Repo documents are team consensus that can be audited and handed over, and four engineers' private memories will contradict each other. Yingyongbao went the other way on memory and switched project-level memory off in automated runs, because cross-talk between sessions broke idempotency.

My June diagram had a layer for this: lessons that become patterns that become instincts, promoted across tasks. In July I put "session journal entries and use memory to avoid same mistakes" on the list of things to build. In September nothing in my pipeline carries a picture of the codebase from one change to the next. The box is still on the diagram.

## What changed

Between June and September the harness went from a diagram to two agents to five, and the agent count is the least of it. "Done" moved out of the model's reply and into a check that runs the real build and tests. The ticket started carrying the definition of done. The loop hands back to me after three failed rounds, because I would rather be in the run than watching it. And I stopped reading speed as progress. Before I hand a task over I say which cell of Brooks's grid it belongs in, and if it is not the cheap one I decide who will read the output before the agent writes it.

The things that did not change are the gaps. Two warnings still pass. Nothing remembers between tasks. The worktree procedure, as of July, was a numbered list. Half my commits are co-authored by an agent, and I still read every line. The harness exists so that reading is the last check, not the only one.

## References

* zimingxing, kinglongli and yifhao, [应用宝活动平台 Harness Engineering 实践](https://mp.weixin.qq.com/s/UE-RZH9hnbBd06CVapFGrA)
  (Harness engineering on the Yingyongbao activity platform), Tencent, 2026.
  The four failure modes, the state files and hooks, the twelve agents, the
  stale interface incident and "AI for cognition, scripts for execution" are
  theirs.
* fitchzheng and leoshli, [TAB 实验平台 Harness 实战](https://mp.weixin.qq.com/s/LGo7daiYYRf1r_YY3r-cXw)
  (Harness in practice on the TAB experiment platform), Tencent, 2026. The
  four agents, the seven gates, the baseline comparison and the navigation
  map are theirs.
* 黄欣欣, [QQ音乐 Harness Engineering](https://mp.weixin.qq.com/s/yw3DvqKBIV5fIZkSG12zdA),
  Tencent Cloud Developer, 2026. The capability times context formula is
  theirs.
* Wu Ke, End-to-end delivery 2.0, Qianwen AI Platform, Alibaba, July 2026.
  WeChat article. The spec, plan and tasks files and the separate-session
  self-check are theirs.
* Addy Osmani, [agent-skills](https://github.com/addyosmani/agent-skills),
  2026, read through the chapter on it in
  [Software Engineering in the AI Era](https://se.rpcx.io/). The
  anti-rationalisation table and the quoted line come from that chapter.
* Earlier posts on this site: [The Mythical Man-Month, is this outdated in the age of AI?](/posts/mythical-man-month-in-the-age-of-ai/)
  for the harness as a state machine and Turing's wall, and
  [The new software tar pit](/posts/the-new-software-tar-pit/) for the seven
  checks, the two warnings and the date formatters.
