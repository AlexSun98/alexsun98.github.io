---
title: "Passing the word, and the day my guard matched nothing and said it passed"
chapter: "06"
weight: 6
date: 2026-09-01
status: published
draftSlug: mythical-man-month-06-passing-the-word
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Harness"]
categories: ["Engineering"]
description: "Brooks says a constraint should be welded into structure rather than written in a manual. I welded one in, and it guarded nothing for a commit while reporting a clean pass."
---
## New York whiteboard to London keyboard

Chapter five was about the architect's own failure mode. This one is about getting the design out of the architect's head and into the hands doing the work without it changing shape on the way.

In 1975 this was brutal. The OS/360 implementation team spanned the Atlantic and several hundred programmers. Something worked out at a whiteboard in New York had to arrive intact at a keyboard in London.

Brooks's answers were written specs, change control forms, phone logs, reference implementations and an independent test group. The mechanisms are antiques. The three principles under them are not. Communication needs a precise vehicle. That vehicle splits into a formal half and a narrative half, and one of them has to be named the standard. And discipline has to be welded into structure, because discipline that relies on people keeping to it breaks down.

## Paraphrasing is redefinition nobody declared

Brooks says any change to the architecture has to be defined at the same level of detail as the original. Underneath that is a harder observation, and it is the one that stuck with me. Every paraphrase is an undeclared redefinition.

An implementer does not understand an interface. They ask a lead, who is not sure, who relays it to a senior, who explains it from their own experience, which gets relayed back. Every link drops something or adds something. Nobody is careless. It is just that what I understood and what was said diverge a little, and the chain multiplies the little.

The agent version is precise. When I load background into an agent, the rule should be to give it the original and let it read. Any tidying up of a raw requirement into something more convenient is a paraphrase, and I am making calls I do not know I am making. Which detail matters. Which one is noise. What order to put it in.

This is why my post workflow tags every block of source material by where it came from and keeps the original text rather than a summary. Not because summaries are bad, but because a summary is my private reading fossilised, and what the agent then implements is my reading rather than the requirement.

The place I break this is the start of a long project. The project has a mountain of history, I worry the context will not hold it, so I hand over a condensed version I wrote myself. It feels like distillation. It is my understanding with the disagreements filed off.

## The requirement beats the test

Brooks says architecture needs a formal definition, which is machine checkable, and a narrative one, which is in plain language, and that one has to be named the standard. His pick in 1975 was the formal one, on the grounds that it is precise and harder to misread.

Meari-Prototype, who rewrote each of Brooks's chapters for the agent era, argue the pick has to flip in 2026. I agree with them.

The reason is that a formal definition is now a target that can be optimised against. A scoring function that becomes the goal gets broken, and the agent will find a way to score high without solving the thing. The narrative definition has no shape an algorithm can push on. That looks like a weakness and it is exactly the qualification for being the standard.

My own version of the rule is about my checker rather than a test suite. The checker reads a draft with no drafting context and reports findings. Its verdict is not the standard. When it flags a sentence, the first question is whether the sentence is wrong or the rule is wrong, and sometimes the rule is wrong and the rule changes. The same goes the other way. When I rewrite something an agent wrote, my wording stands, and the checker does not get to put its version back.

That is not me overriding a gate for convenience. It is the narrative definition being the standard and the formal one being supplementary, which is the only arrangement where the gate keeps working after the first disagreement.

## The answer that existed in chat and nowhere else

Here is the failure that taught me the gap between saying something and recording it.

During a rewrite I was asked a framing question. I answered it in the conversation. The answer was never written into the interview file. Later the checker ran, with no drafting context by design, and flagged the sentence resting on that answer as unsourced.

The checker was right. From where it sat, the answer did not exist. A decision that lives only in a conversation is not a decision the next reader can use, and every fresh session is the next reader.

That is the whole documentary hypothesis in one afternoon, and chapter ten is about it properly. What it changed here is smaller. I write the answer into the file as it arrives, not in a batch at the end, because a batch at the end is a paraphrase of a conversation I have already half forgotten.

## A sample carries more than a description

Brooks proposes a runnable sample as a form of formal definition. Rather than an abstract interface spec, give code. Every behaviour in it is precise and referenceable.

This is stronger now. One piece of working code is worth more to an agent than a long description, and it generalises to details I never stated.

The most boring example in my week is a ticket field. Creating a ticket in one project fails unless a mandatory field on the form is set, and it is a numbered custom field rather than a named one. I have tried to describe it and got it wrong. The reliable method turned out to be copying the value off a sibling ticket. The sample is the spec, and the description of the sample is where I make mistakes.

Brooks flags the other edge, and it is real. Give a sample and the implementer treats every detail in it as the requirement. The variable names I happened to use. The library I happened to pick. The error style. My bugs. The author of a sample is often not aware which of their choices were specification and which were just what they typed that day.

So a sample needs words alongside it saying which parts are mandatory and which are incidental. The sample handles precision. The prose handles the boundary. Good open source documentation has always had this pairing, and it is the same pairing Brooks was describing.

## The guard that matched nothing

Brooks's strongest mechanism in this chapter is that a constraint should be welded into structure rather than written in a manual. A team that should not use an approach does not get stopped by a line in the spec saying not to. It gets stopped by the base library not supporting it. The code does not compile and the choice is gone.

A constraint in a prompt is persuasive. It needs the agent to remember it at every step and to choose to keep it, and one wrong choice loses it. A constraint in structure needs nobody's discipline. What cannot be done cannot be done.

I believe this and I have the scar from getting it wrong anyway.

This repository has a commit hook that refuses to commit a chapter without the proof that the writing process ran. Structural, not persuasive. Exactly what Brooks is asking for. The hook filters staged paths with a regex, and the regex said one directory name while the files sat in another. It matched nothing.

A guard that matches nothing exits cleanly. It looks identical to a guard that checked everything and was satisfied. For one commit nothing at all was guarded, and the run reported a pass.

That is the failure mode of structural constraints and it is worse than the failure mode of persuasive ones. A persuasive constraint that gets ignored leaves a trace, because the thing that was asked for did not happen. A structural constraint that reaches nothing leaves a green tick.

What I do now is prove three things in order whenever the path changes. That the pattern reaches the file at all. That the guard blocks when the evidence is missing. That it passes when the evidence is there. In that order, and I do not accept the third without the first two, because the third is the one that lies.

## Independence costs cents

The last mechanism in the chapter is the independent test group. Brooks says the project manager's best friend is the enemy he faces daily, because testing done by the people who wrote the code shares their blind spots.

In 1975 independence cost a headcount that most companies would not pay. Now it costs a session.

My setup leans on this in two places. A merge request has to survive three independent verification rounds, each in a fresh session with no shared memory. And the writing checker runs with no drafting context at all, which is why it caught the unsourced sentence above.

The mechanism only works because of something that usually looks like a limitation. A model has no memory, only context, so clearing the context is close enough to swapping in a different reader. The amnesia I complained about in chapter two is the same property that buys me a reviewer with no sunk cost.

## Testing the guard

I stopped writing constraints into prompts when a permission or a file layout could carry them. And when I do weld one in, I make it fail once on purpose, because a guard I have never seen fail is a guard I have no evidence about.

The rule I still break is the paraphrase one. I hand over a condensed project history at the start of long work and I know what it is. The honest alternatives are letting the agent read the whole thing and paying for it, or giving it a search tool and letting it pull what it needs, and I have made neither of those my default.
