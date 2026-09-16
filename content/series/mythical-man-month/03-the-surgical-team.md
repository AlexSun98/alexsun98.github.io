---
title: "The surgical team finally got the support staff nobody would pay for"
chapter: "03"
weight: 3
date: 2026-06-18
status: published
draftSlug: mythical-man-month-03-the-surgical-team
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Harness"]
categories: ["Engineering"]
description: "Mills drew a team of nine people orbiting one programmer in 1971. Almost nobody built it, because it was too expensive. My harness is that roster, and the support staff costs a monthly bill."
---
## A roster nobody could afford

The last chapter argued that splitting work up does not add up. That reads like an argument for a small team, and Brooks immediately concedes the other half. Big systems cannot be built small. So the question is how to organise many hands without losing the one thing many hands destroy.

His answer is Harlan Mills's surgical team from 1971. One brain holds the scalpel. Everyone else exists to protect that brain's judgement. Mills listed nine supporting roles around one chief programmer, and readers at the time thought it was wasteful.

Almost nobody built it. Not because it was wrong, but because it needed nine salaries and one rare person. Meari-Prototype, who reread the whole book against coding agents before I did, claim that the agent era is the most elegant answer the problem has had in fifty years, and that it arrived by accident rather than by design. I think they are right, and I can point at my own setup as the evidence.

## The roster, filled in

Meari-Prototype's version of this is that almost every seat except the chief programmer can now be filled by an agent, and that the roster has come back to life as a result. I wanted to check that against what I actually run, so here is the honest comparison rather than the tidy one.

My setup has five agent roles. A planner, an implementer, a verifier, a finalizer, and a handoff agent for when the context fills up. That is it.

Lined up against Mills's nine, the overlap is partial.

- **Chief programmer.** Me. Holds the concept, makes the calls, carries the result.
- **Tester.** The verifier covers this, and covers it well. It grades every task on seven checks before anything is accepted.
- **Program clerk and administrator.** The planner and the finalizer between them do some of this, which is deciding what happens in what order and closing a task out.
- **Copilot, editor, toolsmith, language lawyer, secretaries.** No counterpart. I use a conversational agent for all of these, and none of them is a role in my harness.

So the claim that the roster came back needs qualifying. What I run is not nine seats orbiting one brain. It is five roles on a line, plus a conversation on the side that covers the rest informally. The economics did change beyond anything Mills could have argued for in 1971, and the shape is not his shape.

The part I find genuinely surprising is that nobody set out to revive it. Conversational coding tools arrived near this shape by optimising a product experience rather than by reading Mills.

## What the tenfold gap is attached to now

Brooks cites a 1968 study putting the gap between the best and worst programmer at ten times. The study has been picked apart since, but the order of magnitude never left the folklore.

Meari-Prototype's reading is that the gap did not shrink, it split into three. Which person, which model tier, which harness. And that the three multiply.

I believe the harness one because I have watched a good model do poor work inside a weak setup. The bit I would add from my own side is that the harness gap is the only one of the three I can actually move. I do not train the model. I do not get to swap myself out. I can change the setup, and changing the setup has bought me more than anything else I did in the last six months.

There are numbers going around for the person part of this, and I met them in 鸟窝's notes on AI era software engineering rather than at the source. Garry Tan compared his own output in 2013 and 2026 and put it at 810 times the logical lines. Boris Cherny described running about a thousand agents and merging 150 pull requests in a day. Those are their figures, collected by someone else, and I have not tried to reproduce either. What I take from them is direction, not magnitude.

## The four duties that did not change

Mills's job description for the chief programmer lifts into 2026 without editing.

Hold the concept of the whole system. Make the key design decisions. Write the core code, meaning the critical path and the creative parts. Carry the final product.

None of the four moved. How I carry them out moved entirely. I do it through discussion, instruction and review rather than typing. Half my commits are co-authored by an agent. I still read every line, and that reading is the fourth duty, not a courtesy.

Salvatore Sanfilippo, in the same collection of notes, says something similar about his own work. He built a project with a model and reviewed every line it wrote, and he holds to the difference between that and handing the whole thing over. I read him as describing the same seat.

## Audit rights and correction rights

This is the part of the chapter I keep thinking about, and it is Meari-Prototype's distinction rather than Brooks's.

In 1975 the chief programmer's ability to change the artefact was assumed. If the code was wrong he rewrote it. Nobody separated seeing from fixing, because they always came together.

They come apart now.

- **Audit rights.** I can see the artefact, read the logs, follow the chain.
- **Correction rights.** I can fix the wrong part without rerunning the whole thing.

A long autonomous run gives me the first and not the second. I can read every log line and my only lever is the initial prompt, which changes the next run rather than this one. I pay for a whole run to buy one correction, and the new run redoes the parts that were already right.

Their test for it is a good one. Can the artefact be changed partway through without rerunning everything. If it can, I am holding the scalpel. If it cannot, I am watching a recording of the surgery.

My setup caps how many times a line of attack may fail before control comes back to me, and I put that cap in for exactly this reason. What I get back at that point is both rights at once, the logs and the ability to edit, and the reason it matters is that by then the problem is usually one bad assumption near the top rather than a bad implementation near the bottom.

## Having the scalpel is not using it

Having the right is not the same as exercising it, and this is where the surgical team stops being an organisational chart and becomes a habit.

What makes my correction rights real is not the tooling. It is that I read every line of what gets committed under my name. That habit is the whole mechanism. Take it away and I still have every log, every diff and every gate, and the codebase cannot tell the difference between a chief programmer who is reading and one who is not.

My own setup does have a place where I hold the right and never use it. It is a quiet enough failure that it belongs to chapter fourteen rather than this one. What belongs here is the general shape. Correction rights that nobody exercises look identical to not having them.

## The one thing that cannot move

Every seat except the first can be filled by something that is not a person. The first cannot, and the reason is not sentiment.

The chief programmer is where the purpose sits. Trace any standard for what counts as correct back up the chain and every step has a more upstream reason behind it, and the chain ends at somebody wanting something. If nobody is wanting anything, there is no standard, and without a standard nothing that comes out is a product. It is a sample.

I get shown this in small ways. When I rewrite a sentence an agent wrote, my wording stands. Not because I am always right about the sentence, but because I am the one who has to live with the piece having my name on it. The agent's job at that point is to tell me if it thinks I have broken something, not to put its version back.

## The empty chair

I stopped describing my setup as tools. It is a roster, and the roles in it map onto a list written in 1971. Naming it that way changed two things I do. I stopped adding capability to the support seats, and when I design a stretch of autonomy I check what I can fix mid run rather than only what I can see.

What the naming also did was show me the hole. Mills gave the copilot a second duty, which was being able to take over, and I have no answer for that. If I am away the roster has eight filled seats and an empty chair, and the eight cannot start.

The other thing I am avoiding is my own gate. I know the recorded warnings are sitting there. Routing them to me costs my attention and making the gate refuse them costs throughput, both of those are real, and I have been settling the question by not settling it.
