---
title: "The surgical team finally got the support staff nobody would pay for"
chapter: "03"
weight: 3
date: 2026-11-27
status: published
draftSlug: mythical-man-month-03-the-surgical-team
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Harness"]
categories: ["Engineering"]
description: "Mills drew a team of nine people around one programmer in 1971. Almost nobody built it, because it cost too much. Agents now fill most of those seats for a monthly bill, and the one seat they cannot fill is still the one that matters."
---
## A roster nobody could afford

The last chapter showed that splitting work up does not add up the way it looks. That sounds like a case for small teams, and Brooks admits the other side straight away. Big systems cannot be built by a small team. The real dilemma is scale versus conceptual integrity. So how do you bring in enough hands to finish the work without breaking up a design that only holds together while it lives in one brain?

His answer is Harlan Mills's surgical team from 1971. One brain holds the scalpel. Around that one chief programmer, Mills put nine specialists, among them a copilot, a tester, an administrator and a toolsmith. Their only job is to protect that brain's focus. Readers at the time thought it was wasteful. Brooks says it only looks that way. Each job goes to the person who fits it best, so the surgeon spends no time on schedules or document formats and puts all of it into the design.

All that staff exists because a single design does not come out of a committee. A group can agree on a schedule or an interface. It cannot vote its way to the core design. When several people own the core idea, the codebase ends up with several mental models that do not fit together. Brooks's fix is simple. In the surgical team, the surgeon settles every difference of judgement alone, and the design stays in one piece.

Almost nobody built it. The idea was sound. It needed nine salaries and one rare person, and few engineers want to spend a career as someone else's instrument nurse. Agents remove both problems. They do not want credit, a promotion or a say in the design, so they take the supporting work without friction, and one engineer can run them for a monthly bill instead of nine salaries. Mills had the right chart fifty years too early. He only had people to build it from. Meari call the agent era the most elegant answer this problem has had in fifty years, and say it arrived by accident. I think they are right, and my own setup is my evidence.

## Reflection 1: More hands, one design

Meari say that almost every seat except the chief programmer's can now be filled by an agent, so the roster has come back to life. I wanted to check that against what I actually run, and the honest answer is messier.

My setup has five agent roles. A planner, an implementer, a verifier, a finalizer, and a handoff agent for when the context fills up.

Against Mills's nine, they only partly line up.

- **Chief programmer.** Me. I hold the concept, make the calls and carry the result.
- **Tester.** The verifier, and it does the job well. It grades every task on seven checks before anything is accepted.
- **Program clerk and administrator.** The planner and the finalizer share some of this. They decide what happens in what order, and they close a task out.
- **Copilot.** Half filled. Agents can talk a design through with me and review it. Taking over from me is the other half, nobody can do it, and I come back to that at the end.
- **Editor, toolsmith, language lawyer, secretaries.** No named seat. The agents and the harness do this work along the delivery line, as part of each task.

So the roster has come back, with a caveat. I do not run nine seats around one brain. I run five roles on a delivery line, and the harness picks up the other seats without naming them. The cost is far lower than anything Mills could have hoped for in 1971, but the team is laid out differently from his.

What surprises me is that nobody did this on purpose. The people building agent harnesses were not copying Mills. They were trying to make a better product, and they ended up close to his team anyway.

The more useful question is how the setup handles the dilemma from the top of this chapter, scale versus conceptual integrity. The scale comes from the agents. Adding agents adds hands without adding minds that own the design, because every agent starts with a clean memory and none of them carries its own version of the system from one task to the next. The design stays in one brain, which is mine. Mills had the same limit. Every design call still goes through that one brain, so what caps the scale is no longer salaries. It is me.

Mustr, the ADE I mentioned in chapter one and am building now, is where I am drawing the roster again. This time every seat gets a role and an animal. An org chart is easy to forget. A zoo is not, and nobody argues with a honey badger.

| Role | Animal | Why it fits |
| --- | --- | --- |
| Founder (me) | Zookeeper | Feeds ideas. Opens the gate. |
| Chief of Staff | Capybara ("Capy") | Calm. Friends with all. Soaks up 90% of the noise. |
| Product Director | Raccoon | Washes food first. Washes messy ideas into clean specs. |
| Engineering Director | Beaver | Builds the dam. Ships on time. |
| Architect | Octopus ("Octo") | One arm in every system. Knows all the borders. |
| Designer | Peacock | Opens the tail last. Polish after the prototype. |
| Coding squad | Otters | Work as a pack. Hold hands so nobody drifts off. |
| QA and DQA | Honey Badger ("Badger") | Fears nothing. Bites bad code. Has the veto. |

It sits closer to Mills's chart than my current harness does. The zookeeper is the surgeon. The badger is the tester, and it holds a veto. The capybara does what Mills wanted from the administrator and the secretaries, which is to soak up the noise before it reaches the one brain. The otters are the part Mills never had, a whole squad of hands writing code, and that only works because none of them owns the design. I will say more about Mustr in [Notes from the Stack](/series/notes-from-the-stack/).

## Reflection 2: What the 10X gap is attached to now

Brooks cites a 1968 study by Sackman and colleagues that put the gap between the best and worst programmer at ten times. People have since pointed out the small sample and the shaky method. The idea of the ten times programmer stuck around anyway.

Meari read it differently. The gap did not shrink. It split into three, which person, which model tier and which harness, and the three multiply. The person gap also changed what it measures. It used to be the programmer who writes ten times the code. Now it is the one who can run a system that does ten times the work.

I believe the harness one because I have watched a good model do poor work inside a weak setup. I do not get to swap myself out. I could move the model tier, and I don't, which chapter nine owns up to. The harness is the one I actually work on, and changing it has bought me more than anything else I did in the last six months.

There are numbers going around for the person part of this. Garry Tan compared his own output in 2013 and 2026 and put it at 810 times the logical lines. Boris Cherny described running about a thousand agents and merging 150 pull requests in a day. Those are their figures, and I have not tried to reproduce either. I take them as a sign of which way things are moving, and I would not lean on the size.

I don't follow Meari all the way here. They multiply the three gaps and get up to a thousand times, in theory, and the proof they offer is the best agent products set next to the worst agent toys. Setting two things side by side does not measure the gap between them. They also say most of the industry's secret sauce now sits in the harness. I have not seen anyone show that. All I claim for the harness is that it is the gap I can work on, and I leave it there.

Even so, Meari end on a line I agree with. Mills claimed in 1971 that how you staff a team decides what it produces. In 2026 that is literally true, because the team now includes the model and the harness.

## Reflection 3: Same job, fewer keystrokes

Meari point out that Mills's job description for the chief programmer still works in 2026 without a single edit.

1. **Hold the concept of the whole system.**
2. **Make the key design decisions.**
3. **Write the core code, meaning the critical path and the creative parts.**
4. **Carry the final product.**

All four still hold, they say. What changed is how they get done, through talking the design through, giving instructions and reviewing what comes back. That matches my own work. Half my commits are co-authored by an agent, and I still read every line, because reading it is how I carry the final product.

Salvatore Sanfilippo says much the same about his own work. He built a project with a model and reviewed every line it wrote, and he keeps that separate from handing the whole thing over. He is sitting in the same seat, and so am I.

## Audit rights and correction rights

This idea comes from Meari, not from Brooks, and it is the one in this chapter I think about most.

In 1975 the chief programmer could always change the artefact. If the code was wrong, he rewrote it. Nobody treated seeing and fixing as two separate things, because they always came together. Today they can come apart.

- **Audit rights.** I can see the artefact, read the logs and follow what happened.
- **Correction rights.** I can fix the wrong part without running the whole thing again.

Say I give an agent one job, build the signup feature, and it runs alone for twenty steps. At step three it guesses the wrong date format, and every step after builds on that guess. Afterwards I can read the logs and find step three. That is audit rights. Correction rights would let me fix step three and carry on from there.

A long autonomous run gives me audit rights only. I can read every log line, but the only thing I can change is the first prompt, the initial intention, and that only affects the next run. So I pay for a whole new run to fix one thing, and it redoes all the parts that were already right.

Meari put it well. With audit rights alone, I can find the problem but I cannot fix it. It is like a doctor who can read the scan but cannot treat the patient, so they write a note and pass the patient to the next shift. The next run is that next shift, and it starts again from the first scan. A lot of tools sold as "human in the loop" stop here. I can watch the agent, read its reasoning and read its code, but the only thing I can change is the prompt. So I am not really in the loop. I am standing next to it, waiting.

Meari's test is simple. Can the artefact be changed partway through without running everything again? If yes, I am holding the scalpel. If no, I am watching a recording of the surgery.

So how do you keep the scalpel? The cheapest fix is to look before the work starts. Most runs go wrong on an early guess, like that date format, so ask the agent to write down its plan and its assumptions first, and read them before it builds anything. Changing a line in a plan takes seconds. Changing step three after step twenty costs a whole new run. After that, keep the middle of the run open. Save each step's output where you can see it, keep the spec and the plan in plain files you can edit, and let the agent pick up from your edited version instead of starting from the top. Keep runs short, so there is less to throw away when something goes wrong. And give the run a clear signal to stop and call a person.

In my setup that signal comes from the verifier, the role that grades every task on seven checks before anything is accepted. The checks look at evidence the verifier gathers itself. It starts the local stack, drives a real browser through Playwright and the Chrome DevTools Protocol, runs the end to end tests and queries the database. In the signup example, that means signing up in a browser and reading the date straight out of the stored row, instead of taking the agent's word that it works. Next to the verifier sits an independent code review that holds the code to a set of bars.

When a check fails, the verifier sends the problem back to the implementer, which tries to fix it on its own. That loop runs until it hits a limit of three failed rounds, and then it stops and hands the problem to me. That is why I added the limit. When it stops, I get both rights back, the logs and the power to edit. By then the cause is usually something like the wrong date format at step three, an early guess that every later step trips over. A small bug in step seventeen is the rarer case.

Building the checks, the evidence gathering and the bars is the work I now call verification engineering. Audit rights are only worth having if a check points me straight at step three. Without one, I am digging through a thousand log lines. And the loop only knows when to stop because a check tells it.

## Reflection 4: Having the scalpel is not using it

Holding a right and using it are two different things. This is where the surgical team turns from a chart on a wall into a daily habit.

I am the human gate in my own setup. My correction rights are real only because I read every line that gets committed under my name. The tooling helps, but the reading does the work. If I stopped, I would still have every log, every diff and every gate, and the codebase would look the same whether I was reading or not. A human gate that stops reading turns into a rubber stamp, and from the outside nobody can tell.

The other way to lose the right is never to be asked. There is one place in my setup like that, the warnings my gate writes down and never sends me. I come back to them in chapter fourteen. That one is not a rubber stamp. No human is in it at all, so the warnings sit there unread.

Using a correction right does not mean fixing everything. Some warnings are fine to leave. It means someone looks and decides. A rubber stamp skips the looking, and a warning that is never sent reaches nobody. Either way nobody decides, and a right that nobody uses is the same as not having one.

## Judgement stays with a person

Every seat except the chief programmer's can now be filled by an agent. That one cannot, and I don't say that out of sentiment.

The chief programmer holds the purpose, the reason we want this and not that. Take any rule for what counts as correct and ask why. Each answer points to another reason further up, and if you keep asking, you end at somebody who wants something. Take that person away and nothing is left to judge the work against. What comes out might run, but nobody can say whether it is right.

Go back to the signup form. Is DD/MM the right date format? The agent can guess, but it cannot know. The answer is "because our users are in Australia", and that answer only exists because someone chose to build for Australian users in the first place. Every check the verifier runs has a chain like that behind it.

Tradeoffs make it plainer. Say the verifier passes a task with one warning, and fixing it means another day. Ship now, or wait? The agent can tell you what the warning is and roughly what the fix costs. It cannot tell you whether the day matters more than the warning, because that depends on what the work is for. A demo for a client tomorrow and a payroll run that pays real people's rent give opposite answers to the same question. Only the person who holds the purpose knows which one this is.

You can write the purpose down, and you should. A good spec carries a lot of it to the agent. But a spec runs out at the first case nobody thought of, and at that point someone has to want something again.

That is why the decision sits with a person. An agent can work to a standard very well, but it cannot pick the standard, because picking one means wanting something.

## The empty chair

I no longer think of my setup as a set of tools. It is a roster, and its roles line up with a list written in 1971. Seeing it that way changed two things I do. I stopped adding more to the support seats. And when I plan a stretch of work the agents run alone, I check what I can fix halfway through, not only what I can see.

It also showed me the gap. Mills gave the copilot a second duty, which was to take over when the surgeon is away, and I have nothing for that. When I am away, every seat around me is filled and the chair next to mine is empty. Nothing starts until I come back.

That is part of why I started building [Mirana](/mirana/), a personal agent meant to work unattended while I am away, and Mustr, with its roster of animals. They do not fill the empty chair. They change who does the waiting. The agents do what they can on their own, put aside the decisions that need judgement, and wait for me. An agent waiting overnight loses very little. Me waiting on a pile of agents eats my focus, and protecting that focus is the reason the roster exists. There is a limit, though. If the waiting decisions pile up faster than I can read them, I am back to waiting, just in a different place.

The gate warnings are the other loose end. Sending them to me costs my attention, and making the gate refuse them costs speed. Both costs are real, and so far I have put off choosing.

## References

* Frederick P. Brooks Jr, *The Mythical Man-Month*, 1975. Chapter 3, The
  Surgical Team, on Mills's chief programmer team, the 10X gap between
  programmers and the surgeon settling differences of judgement alone.
* Meari, [The Mythical Man-Month in the Age of Agents, chapter 3](https://github.com/Meari-Prototype/agent-mythical-man-month-2026/blob/main/agent-era-mythical-man-month/03-the-surgical-team.md),
  2026. The roster coming back to life, the gap splitting into person, model
  tier and harness, the four duties surviving unedited, and the split between
  audit rights and correction rights are theirs.
