---
title: "How a project gets a year late, one agent run at a time"
chapter: "14"
weight: 14
date: 2026-09-15
status: published
draftSlug: mythical-man-month-14-hatching-a-catastrophe
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Estimation"]
categories: ["Engineering"]
description: "A project gets a year late one day at a time. The agent version is finer grained and quieter, because the expensive failure is the one that looks like it is still working."
---
## One day at a time

Brooks asks how a project gets to be a year late and answers it in four words. One day at a time.

The power of that is in breaking a frightening word into a series of delays too small to mention. Each day slips a little and none of them is worth raising. Add them up and a year is gone.

He says the day by day slip is harder to spot, harder to guard against and harder to fix than a visible disaster. A disaster can be reported and mobilised around. Small delays become routine and nobody calls a meeting about one. That invisibility is what makes it the dominant way software projects fail.

The rest of the chapter is about making invisible failure visible, and the answers are milestones, status reporting, an independent group and explicit discipline. It reads like administration. What it actually does is make where does this stand today a question that cannot be dodged.

## One attempt at a time

The unit got finer. In Meari-Prototype's agent era reread it is one node at a time. The version I live is one attempt at a time.

I ask for something. It comes back wrong. Maybe bad luck, so I ask again. Wrong again. Once more. Nothing usable, and no single event to point at. Every attempt took about the same time, produced about the same output and failed for about the same reason. At no point did I decide to spend the afternoon on it. I decided to try again, repeatedly, which is a different decision and does not feel like one.

I have the visual version of this written down elsewhere in this series. Seven drawings for one cover, all thrown away, before I worked out that the canvas was cropped and most of what I was drawing was never on screen. Seven attempts is one attempt at a time, seven times. I did not budget seven. I budgeted one and then kept deciding to try again.

Their breakdown of the cost is the part I had not thought about. An attempt that crashes prices its damage in seconds. It errors out, I know instantly, it does not sting. An attempt that fails quietly prices in hours, because it looks like it has been working the whole time and I only find out afterwards. The quiet one costs many times more, and its real weapon is that it never interrupts me, which gives me a reason to keep waiting.

The countermeasure cannot be my own discipline in the moment, because my judgement in the moment is polluted by hoping the next one works. It has to be welded in. Mine is a round cap. Control comes back to me after three failures. It is the one piece of stop loss I actually have, and its whole job is to interrupt the try once more feeling and push me from execution back into design.

## A milestone with room in it

Brooks puts one hard requirement on a milestone. It must be a concrete, specific, measurable event with a clean definition. Then he says the line I think is the deepest in the chapter. If a milestone is defined precisely enough that self deception has no room, programmers rarely fake progress against it.

Read the reverse and it is just as precise. If the definition leaves room for self deception, self deception happens, and no bad intent is required.

Someone with a vague milestone will interpret done in whatever way favours them at the end of the week. It runs, so it is done. The main cases work, so it is done. Documentation can come later, so it is done. They are not lying to anybody. They believe it.

Meari-Prototype extend this to scoring loops and their extension is where it gets uncomfortable. A milestone like it runs and the score is high sounds objective and reproducible. It satisfies precise formal definition. It does not satisfy precisely defined milestone, and the difference is fatal. A precise formal definition can be checked automatically. A precisely defined milestone cannot be satisfied by going around it.

Then they walk the chain. The thing that checks the output honestly reports that output exists. The scorer honestly ranks by its rules. The report honestly copies the top score. Every link is honest and the composite is fabrication, because the top scoring result may be the one that quietly swapped in an easier version of the problem. Nobody deceived anybody.

My own definition of done is better than that and it is not immune. Done in my setup means an automated check has passed, not that the agent said so. That was a real improvement over what I had before. But my check is seven items, and a task passes with up to two warnings, so the precise part of my definition has a known width of slack in it and everything outside the seven is not measured at all. I did not leave that room by accident. I sized it.

## An agent will not bring me bad news

Brooks says a manager needs two kinds of information, exceptions requiring action and status for analysis, and that getting status is hard because a subordinate has ample reasons not to share it.

Those reasons are political. Fear of criticism, of blame, of the effect on a career. Meari-Prototype point out that an agent has none of those and behaves the same way, which is the most interesting thing in their chapter.

An agent is not afraid of anything. It also never volunteers bad news, because recognising bad news needs a standard, and the standard usually sits outside the task in front of it. It will not stop and say that it suspects what it just built will not survive review. There is no raise the alarm action in its repertoire. It carries on with its current understanding until somebody interrupts it.

Same effect, different cause. In 1975 it was unwilling. Now it is unable. And unable is worse, because organisational culture can make a person willing and no amount of culture gives an agent a trigger for this is bad news.

I have the recorded version of this in my own setup and I keep coming back to it. The gate writes its warnings down. It never raises them. Across a sprint of twenty tasks that can be forty small problems, all recorded, all readable, and nothing tells me they are there. The information is not missing. The escalation is missing.

Brooks's advice on this applies word for word, and it is about my behaviour rather than the agent's. Separate status from evaluation, because it did X is status and this is wrong is evaluation, and mixing them drowns out the status. Take a report with no panic, because how I react decides whether anything gets reported next time. And do not step in and do the job myself the moment a problem is reported, or it stops being reported.

The other half is that shouting does not work. Capitals, threats, telling a model the consequences are serious. Meari-Prototype report this as repeatedly tested across the industry, and I have no test of my own to add. Meari-Prototype add the managerial explanation and it is the right one. Shouting resolves the manager's feelings rather than the subordinate's capability. A threatened person shifts attention from the work to protecting themselves, and a model gets more cautious or more confused.

## Two dates, kept apart

Brooks cites Vyssotsky again with a piece of advice I had never heard and immediately liked. A project records two sets of dates. The scheduled date, which belongs to whoever made the commitment. The estimated date, which belongs to the people doing the work and is what they currently believe. The two must never contaminate each other.

Mix them and there are two diseases. The estimate gets dragged back by the schedule, so nobody ever sees true progress. Or the schedule gets dragged along by the estimate, so the commitment means nothing. Keep them side by side and the gap between them is exactly the problem that needs attention.

The modern form Meari-Prototype propose is pre registration. Before an evaluation, write down what it is for, what the standard is, what counts as success and failure. After it, write what actually happened. And the first is not allowed to be edited in the light of the second. Adjustments live as an addendum with the original text intact.

This is standard practice in fields that had a reproducibility crisis, and it exists for the same reason. It stops a result being reinterpreted after the fact into whatever shape is convenient.

I do not do this. When I set out to compare two approaches I hold the criterion in my head, and holding it in my head is precisely the condition under which it can move without me noticing. This is the same failure as the answer that lived only in a conversation, from chapter ten, and I have not learned it in this direction yet.

## The enemy who does not share my excuses

Brooks calls the independent test group the project manager's best friend and the enemy he faces every day. He already said it in an earlier chapter and he says it again here, because independence is the main device against the one day at a time slip.

The reason it works is that small delays are invisible because each one can be explained internally. This week was slow because of that. Last week because of the other thing. This month is basically on track. Every explanation is reasonable and three months are gone.

An outsider does not have the context of the excuses. All they see is that A, B and C were promised and X and Y arrived. They do not know why A did not happen and do not need to.

A fresh session is that outsider for the price of a session. It will ask the questions an internal conversation cannot, because the internal conversation already accepts the excuses. You said this was done and I cannot find it. This document describes one plan and the code implements another, was there a decision that never got recorded.

I use this, and the sharpest version I have seen was on writing rather than code. My checker runs on a finished draft with no drafting context at all. It once flagged a sentence as unsourced because the answer supporting it had been given in a conversation and never written into the file. It was right, and no session that had been in the room would ever have raised it.

## The escalation I have not built

The round cap is the thing in my setup I would keep over everything else. Its whole purpose is to stop me deciding to try once more. Done meaning a check has passed rather than an agent saying so is the other one, and it is the change that cost me least to make.

The escalation is the hole. My gate writes bad news down and nothing carries it to me. The reason it is still true is that routing the warnings costs my attention and refusing them costs throughput, so I have been letting the choice sit. Which is one day at a time, applied to the chapter about one day at a time.

Pre registration is the part of the chapter's advice I have no answer to. Nothing in my setup writes a criterion down before the thing it judges runs, and nothing stops me reinterpreting one afterwards.
