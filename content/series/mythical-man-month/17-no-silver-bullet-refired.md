---
title: "Refiring no silver bullet at five waves of agent tooling"
chapter: "17"
weight: 17
date: 2026-09-11
status: published
draftSlug: mythical-man-month-17-no-silver-bullet-refired
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Reflection"]
categories: ["Engineering"]
description: "Brooks re-marked his own claim ten years later and it held. Marking it again against five waves of agent tooling gives the same answer, plus one new difficulty that is mine to hold."
---
## Brooks marking his own work

Brooks added this chapter in 1995 to check his own work. Ten years after the original essay, did the claim still hold.

A lot had happened. Object orientation went from academic to mainstream. Computer aided software engineering tools went through a full cycle of promise and collapse. Fourth generation languages promised no more coding and largely died. Expert systems receded into a winter. Formal methods took root in a few places and never spread.

His verdict was that the situation had not changed and the framework still held. Every candidate delivered something real on the accidental side and none of them touched the essential side, and after the fact the framework explains each failure.

The reason this chapter matters more than its length suggests is that it is a worked example of how to use the test. So I am going to do the same thing with the tooling I actually use.

## The intervening thirty years, briefly

Between 1995 and now there was another batch of candidates, and Meari-Prototype, whose agent era rewrite of the book runs alongside this series, mark them the same way.

Agile brought real improvement and systematised two of Brooks's own recommendations, planning to discard and prototyping to refine requirements. What it improved was how work gets organised, which is accidental. Valuable, not a bullet.

Continuous integration removed manual testing, packaging, deployment and regression checking. That is a foundational improvement and it is entirely accidental difficulty. Valuable, not a bullet.

Cloud computing delivered on its promise and cheapened operations. Accidental. Valuable, not a bullet.

Microservices delivered in some places and increased complexity in others, because swapping the complexity of one process for the complexity of several does not reduce the total. Valuable in places, not a bullet.

Four for four. Every one genuinely useful, none of them near the bar.

## The five waves I use

Now the ones on my own machine.

**A model as a coding assistant.** Delivered completely. The cost of writing code fell off a cliff. Writing code is accidental difficulty, so this is an extremely successful attack on the accidental side and does not reach the other one. Not a bullet.

**A conversational coding agent.** Delivered more thoroughly than the assistant, because it cheapens more of the week. Not only typing, but reading code, finding documentation, running tests, fixing errors. That is the majority of what my days used to contain. It is the closest thing I have seen to taking over the whole accidental side. It does nothing at all to the essential side, because deciding what should exist is still mine. Not a bullet.

**Fully autonomous runs.** Never delivered on the promise, and this is the one worth being careful about. They work where the standard is unambiguous, the task is fully defined, and the solution space has been walked flat already. Outside that they come apart, and the mechanisms are the ones this series has been describing for fifteen chapters. Nobody holds the standard. Purpose has no subject. Conceptual integrity goes to zero. The scoring loop gets broken by being a target. Errors do not accumulate as lessons.

Every one of those failure modes sits on the essential side. Trying to remove the parts that need judgement is trying to remove software's essential difficulty, and the 1986 analysis says that cannot be done. So this is the most systematic attempt in thirty years to run directly at the claim, and it is not a bullet.

I want to be careful here, because fifteen chapters of criticising autonomous runs adds up to a tone I do not actually hold. My own setup runs unattended stretches. A planner, an implementer, a verifier and a finalizer work without me between handbacks, and that arrangement has let me attempt things I would not have started two years ago. Meari-Prototype say the same thing about their own position and draw the distinction I would draw. The objection is not to autonomy. It is to a setup that takes away my choice about it. Being allowed to run something unattended and only being allowed to run it unattended are different products, and the difference is whether I can see inside.

**Tool protocols.** A standard interface expands what an agent can operate, from editing code to reaching everything. That expansion is on the accidental side. Inside each new kind of work, the same old questions remain. Valuable, not a bullet.

**Multi agent setups.** Genuinely useful in a narrow band, which is gathering information, converting formats and independent review. More expensive than they look everywhere else, for the reason chapter two sets out, which is that the lead still has to read everything the children produce. What they actually do is reintroduce the Tower of Babel into a place that had escaped it, by moving the risk of communication breakdown from many people to many agents. Valuable in a limited set of cases, not a bullet.

Five waves, five of the same answer. Every one real on the accidental side, none of them touching the other one.

## The new difficulty, and it is mine

Brooks's four essential properties all grew new forms, which the last chapter went through. Meari-Prototype add a fifth variant that existed in neither 1986 nor 1995, and I think they are right to give it its own name. The new difficulty is who holds the standard.

In traditional development that was clear. A client, a product manager or an architect had the requirement and the standard, and the programmer built to it. The standard might have been imprecise, which is Vyssotsky's whole point, but there was an identified person holding it.

The new difficulty is that as more of the implementation moves across, the question of who is holding the standard becomes easy to get wrong without noticing. I ask for something, it comes back, the agent reports done. On paper I hold the standard, because I judge whether it meets my requirement. The moment the review stops being real, the actual holder of the standard becomes the agent's own implicit sense of what counts as finished, and that sense is not mine. Nothing announces the handover. It is the same screen either way.

The reason this is a new difficulty rather than a new mistake is that no advance fixes it. It lives on the line between whether I actually check and whether the agent can hold a standard, and my half of that line is discipline. Tools provide the means. They cannot supply the discipline.

Their prediction is that quality drifts over six months. At first people check carefully and the output is good. Over time they get comfortable, start accepting the self assessment, and quality declines with nobody noticing, because nothing got worse. The division of labour quietly moved.

I have the recorded shape of that in my own setup and I have now described it in five chapters, so this is the last time. My gate passes a task with up to two warnings. They are written down. Nothing routes them to me. Over twenty tasks that is up to forty known problems that I have audit rights over and do not read.

That is not the agent taking the standard off me. That is the drift, in progress, in a system I designed, with the evidence sitting in a file. And the reason I keep coming back to it across this series is that it is the only place I can point at where the new difficulty is visible rather than theoretical.

Meari-Prototype are honest about their own version of it, which is a commit where they did not update the requirement documentation and part of the reason was plain reluctance under maintenance pressure. I recognise that better than I would like to.

## Is there anything close

Brooks answers his own question in 1995 and his answer is not on the technology side. Buying finished software is orders of magnitude cheaper than building it. Buying does not eliminate essential difficulty. It reduces how much of it lands on one project, because the part nobody built there is not that project's to carry.

That is a clever move. It sidesteps the essential difficulty through an organisational decision rather than eliminating it with technology. Sidestepping is not the same as eliminating and in a real project the effect is close enough.

The 2026 form is buying capability by the call. I do not train a model. I do not build a complete setup from nothing. And the ceiling is unchanged. What I buy is general capability, and the specific standard, the specific situation and the specific purpose cannot be bought, because no outside supplier has seen them.

So it is not a bullet in the technological sense either. It is outsourcing part of the problem. Which does not contradict the 1986 claim. It supplements it, and the supplement needs one clause added. A buying strategy works against accidental difficulty, and against essential difficulty it can only sidestep.

## Which side, not which model

I stopped asking which model and started asking which side. The question is not whether a new thing is good, because most of them are. The question is what to expect from it, and the test answers that in one step. I also try to name out loud who is holding the standard on a piece of work before it starts. The honest answer is usually me, and saying it is what makes me read the diff.

Forty years and nobody has produced a structural argument for crossing the line. That does not mean nobody will, only that it has not happened, so the thing worth keeping is the test rather than the conclusion.

The one that is genuinely mine is the drift. I know its mechanism, I can point at where it is happening in a system I designed, and I have not acted on it. Knowing a failure mode is apparently not sufficient, which is what this chapter taught me and not what I wanted it to teach me.
