---
title: "Documentation is the source and the code is the build output"
chapter: "10"
weight: 10
date: 2026-09-15
status: published
draftSlug: mythical-man-month-10-the-documentary-hypothesis
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Documentation"]
categories: ["Engineering"]
description: "Brooks says the value of writing documentation is not the record, it is that writing forces hundreds of decisions into the open. Agents turned that from a stance into a workflow."
---
## Why write any of it down

This is the hinge of the book, and the question it answers is the one that sounds most boring. Why write documentation at all.

Brooks describes the relationship as love and hate. Wanted when reading someone else's code, resented when writing your own, because the code is already there and now the logic has to be said again in prose. That tension was there in 1975 and it is still here.

Brooks's answer makes the resentment look like a category error. Documentation is not a record. It is the vehicle for decisions, and the mechanism is that the act of writing forces decisions into the open. The whole chapter turns on that one mechanism.

## The five hinge documents

Brooks starts with a small experiment. He lists the key documents of three completely different organisations, a products division, a university department and a software project, and finds the lists nearly identical. Goals, a manual, a schedule, a budget, an organisation chart, and the specifications.

His claim is that this is not a coincidence. Any organisation of many agents needs those five things to keep existing. Fifty years later not one of them has gone. The vehicle moved from paper to a repository and a tracker, and the skeleton did not move at all.

The agent era shapes them like this, and the mapping is Meari-Prototype's, from their chapter by chapter rewrite of the book.

- **A numbered requirement specification.** Goals and manual fused. Every clause citable, because the conversation will point at clauses.
- **Decision records.** What was decided and why, with corrections appended rather than overwriting the wrong version.
- **A list of what is not done.** The schedule, under the convention that finishing something means deleting a line.
- **The collaboration discipline.** How work gets done here. Written down because the executor changes every session.
- **The budget.** Cost, tokens, time. Not for the agent to read, for me. Most projects skip it until the bill arrives.

Two of those five I can point at on this site. The collaboration discipline is a file in the repository root, and the decision records are the reasons written beside each rule in it. A numbered specification and a live list of what is not done I do not have, though I have described both as though I did. And the budget I do not have at all. I do not track what any of this costs me in money, tokens or time, which is the whole subject of chapter eight, and by now it has come up often enough to stop being an aside.

## Writing is where the decisions happen

This is the part worth reading slowly, because it is the whole argument.

In my head, a plan feels finished. I can talk it through, sketch it, explain it at a whiteboard. Then I sit down to write it out properly and I am forced into dozens of small decisions I did not know were open. How exactly is that term defined. What happens on an empty input. What does this return when the thing is missing.

None of those were decided in my head. What is in my head is elastic and can hold two answers at once without noticing. Words cannot say two things at once, so writing makes me pick.

Brooks says that is documentation's real value. Not letting later readers look things up, which is a byproduct, but forcing the current author to squeeze their thinking into the open. The process matters more than the artefact.

Chapter six tells the story that taught me this, about an answer I gave in conversation that never reached the file and got flagged as unsourced. What that chapter draws from it is about paraphrase. What belongs here is narrower and worse. I had answered the question and I had not made the decision. Those felt identical at the time, and only one of them leaves anything behind.

## Documentation is source, code is output

That mechanism gives a sentence a concrete meaning, and it is the one line of Meari-Prototype's book I have quoted to other people. Documentation is source code and code is a compiled artefact.

The traditional framing is that code is the truth and documentation describes it. The other framing is that decisions are the substance, and code and documentation are two forms that carry decisions. Writing documentation produces decisions. Writing code translates them into syntax. One is upstream of the other.

Before agents this was mostly a stance. Plenty of senior engineers believed it and worked that way, and it never became normal, for a simple reason. Compilation is automatic and translation from document to code was manual. Manual translation is expensive, so most projects wrote the code first and backfilled.

That cost dropped. The translation now has something with an automation level approaching a compiler, and it changes the stance into a method that works at scale.

And it comes with a check that did not exist before. Whether my document compiles into correct code is a test of whether the document is clear. If the output is wrong, I go and look for the ambiguity rather than patching the output. That feedback loop is faster than any review by a person.

This site runs on that pattern, applied to prose rather than code. A post has a source file with every block tagged by where it came from, an outline, a claims ledger, and a findings file. The prose is the compiled artefact. When a draft comes back wrong, the useful question is which line of the source was unclear, and usually the answer is that the line was not there.

## Fix the source, not the output

The corollary is about bugs and it changed how I handle them.

The traditional move is to find the wrong line and fix the line. The problem is that one conceptual error usually appears in several places, so I fix it wherever I trip over it and never get it clean.

The other move is to ask which decision was wrong or missing, fix that, and then bring the code back into line with it. Once the source is fixed, everything grown from the source is right next time.

The clearest case of this on my own site is the guard I broke in chapter six. A commit hook filtered paths with a regex, the regex named the wrong directory, and for one commit it guarded nothing while reporting a pass.

I could have fixed the regex. Fixing the regex would have taken a minute and it would have taught me nothing, because the failure was not a bad regex. The failure was that I had no way of telling a guard that passed from a guard that matched nothing.

So the fix went into the documentation instead. The working notes for this repository now carry the three step proof chapter six sets out, in a fixed order, for any time the guarded path changes.

That is a source level fix. The regex was the output, and a regex I corrected once would have taught me nothing.

## Documentation drifting is the alarm

Brooks says keeping the key documents current gives status oversight and an early warning. What he means is that documentation drifting out of step with reality is itself the alarm. Something is not being tracked.

Reading it and finding it does not match is the signal. So documentation is a checksum on the current state.

In 1975 this depended on people. Now there are sharper versions. Numbered clauses, cited by the change that implements them, so a clause nobody ever cites is a requirement nobody built. A list of what is not done, under landed means struck, so it always equals the current state and any mismatch is a thing that slipped. Decision records with an explicit status, so an overturned decision stays visibly overturned rather than quietly still there.

The one I have seen pay off is the last. The working notes on this site explain why series chapters are ordered by a padded chapter string rather than by weight, and they explain it by naming the thing that went wrong. Ordering by weight put chapter zero at the bottom of every list, because a weight of zero reads as unweighted. Without that note, the obvious ordering key looks obviously right and someone puts it back.

## The dashboard illusion

The last section of the chapter is the one I did not expect to hit me.

Brooks says a project manager's main daily work is communication rather than deciding. Making the call is a moment. Making the call land is a day. That matches what I do now almost exactly. Most of my time goes into expressing something outward, and gathering information from outside my own head is the smaller share, because reading and summarising got cheap while saying clearly what I want did not.

Then he takes a swing at the information management systems of his day, the ones promising a manager a panoramic view. His objection is that they are not built on a model of how managers actually behave. They assume the manager needs more information, when the bottleneck is elsewhere.

Meari-Prototype call the modern version the dashboard illusion, and it landed on my own setup.

My verifier writes a verdict against seven checks, and a verdict can carry warnings and still pass. Chapter two treats that as an unpaid verification bill. Here the interesting part is the reporting rather than the reading.

The verdicts are accurate. Every one of them is true about the task it graded. A run of them reports clean while carrying a growing list of known small problems, and nothing in the reporting is wrong. The failure is on the narrative side, which is whether the codebase is still in one piece, and there is no panel for that.

I have described this fact three times in this series now, from three angles, and this is the one that bothers me most. It is not a gap in my instrumentation. It is a gap between instrumentation and attention, and more instrumentation makes it worse.

## What the reordering bought

The documentation gets written before the work now, and when the work comes back wrong I go and read the documentation rather than the output. I cannot tell you what that reordering is worth, because measuring it would need the records chapter eight is about. What I can say is what it changed mechanically. A wrong output now sends me upstream instead of into a patch, and a patch is the thing that used to come back.

I also write an answer into the file as it arrives rather than at the end, because the end is a paraphrase of a conversation I have already half forgotten. That is the whole of what the story in chapter six cost me.

## A reader with infinite patience

A document good enough to compile is not the same as a document worth reading. My source files and ledgers are precise and nobody would enjoy them. Brooks's five hinge documents include a manual, and a manual is for a person, and I have been writing everything for the next session instead. Chapter fifteen is about the face that points at people, and I go into it knowing which of the two I have been feeding.
