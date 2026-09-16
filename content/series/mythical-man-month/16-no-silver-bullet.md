---
title: "No silver bullet, and the test I ran my own setup through"
chapter: "16"
weight: 16
date: 2026-09-16
status: published
draftSlug: mythical-man-month-16-no-silver-bullet
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Reflection"]
categories: ["Engineering"]
description: "Brooks set a hard bar for a silver bullet. An order of magnitude in a decade, from one development, on its own. Agents clear it on one side of his line and do not touch the other."
---
## The famous one

This is the famous one. Brooks wrote it as an essay in 1986 and it was added to the book in 1995, and its claim fits in a sentence. There is no single development, in technology or in management technique, that by itself promises even one order of magnitude improvement in productivity, reliability or simplicity within a decade.

That was jarring at the time, because the industry was riding a wave. Artificial intelligence was going to solve programming. Object orientation was going to solve complexity. Fourth generation languages were going to solve expression. Every wave arrived claiming to be the bullet. Brooks said no, and he said why.

I went over his four essential properties briefly in the first chapter of this series. What I want here is the test itself, because the test is the part that is useful, and because I want to run my own setup through it.

## The bar is higher than it sounds

A silver bullet kills the thing in one shot. No combination of weapons, no campaign. One bullet.

Brooks makes that quantitative. An order of magnitude improvement in productivity, reliability or simplicity, within a decade, from one development, independent of other factors. Tenfold. That is a hard bar and it is meant to be.

The argument has two parts. Some of software's difficulty can be cheapened by tools, which he calls accidental. Some cannot be cheapened in principle, which he calls essential. Technology only acts on the first. And by 1986 he judged that most of the accidental difficulty had already been cleared by decades of progress, so most of what remained was essential, so no single development could clear the bar in the next ten years.

The whole argument depends on the division being real. That is why he spends most of the essay drawing it, and why the four properties matter.

## What agents actually removed

Start with the good news, because it is large.

Three things got dramatically cheaper since I started working this way in February 2026. Looking up the syntax of a language, a framework or a library. Writing repetitive scaffolding. Reading unfamiliar code to work out what it does.

Whether that clears Brooks's bar I cannot tell you, and the reason is worth stopping on. His bar is quantitative. Tenfold, on a core metric, within a decade, from one development. To claim agents cleared it I would need before and after figures for my own work, and the running admission of this series is that I have none. So the honest position is that the improvement is large, obviously real, and unmeasured by me. Meari-Prototype are willing to call it an order of magnitude. I am not, on my own evidence.

What the framework asks next does not depend on the size of it. It asks whether any of it touched the other side.

## The four properties, run forward

Brooks's four are complexity, conformity, changeability and invisibility. Here is what each looks like in my week, going past what the first chapter said.

**Complexity.** No repetition. In physical engineering there is a great deal of it, the same beam, the same pipe. In software almost none, because whatever repeats has already been abstracted into a function, and what is left written out is all different. So complexity grows faster than size.

What changed is the rate at which I manufacture it. A load test suite of seventy files arrived on a side project in under an hour, and nothing about producing it made anything simple. My ability to produce complexity went up by a large factor and my ability to manage it went up by nothing, because managing it is judgement and judgement did not get faster. So I carry more than I used to, and the extra is not the good kind.

There is a phrase going around for the low quality output of models in general, and the software version is in front of everyone. It is not deceptive code. It is code produced without any restraint on complexity. Each piece is reasonable and the sum is a system nobody holds.

**Conformity.** This is the one I underrated. A bridge conforms to physical law, which is eternal and derivable. Software conforms to a pile of human conventions, which are historical accidents that cannot be derived, only memorised.

An agent is very good at the published ones, because they were in what it read. It is no better than a new hire at the unpublished ones, and worse in one respect, which is that it cannot tell when it is in unfamiliar territory.

My most boring example is the best one. Creating a ticket in one project fails unless a numbered custom field is set to a particular value. There is no first principle of ticket tracking from which that follows. Somebody decided it, and now it is true. The reliable way to get it right is to copy it off a neighbouring ticket. Cited, not derived.

The pattern is the same every time one of these turns up. Somebody decided something, the decision outlived the reason, and now it is a fact about my environment that no amount of general knowledge produces. My notes on this site are mostly a list of these.

Meari-Prototype, rereading the essay against agents, make a sharper point about this one than mine. The danger is that an agent handles known conventions so well that it feels like the convention problem is solved, while the unknown convention problem is worse than in 1975, because nobody is practising the skill of learning a fresh set from nothing.

**Changeability.** Software gets changed because it can be. The capability manufactures the obligation. Nobody expects a bridge to adapt.

Changing it got cheap, so the expectation went up. And the thing I feel from the other side is that a requirement now changes inside the build rather than before it, because the prototype exists in hours. That is good and it is also the property being demonstrated. Loading a requirement is a snapshot, and the snapshot starts going stale the moment it is frozen.

**Invisibility.** Software has no shape. You can draw a control flow, a data flow, a dependency graph, and each of those is one dimension, and the sum of them is not the thing.

The agent era added a second layer of it. I cannot see what the agent did. I can see output, and I can sometimes see a displayed chain of reasoning, and that displayed chain is a narrative the model produces about its own output rather than a transcript of what happened inside it. So there is now an invisible process producing an invisible artefact.

In my own setup the only visible thing about a run is the verdict file. Everything else I would have to reconstruct.

Not one of the four got smaller. Every one of them grew a new form.

## Reading the curve

The strongest counterargument is the scaling law. Model capability keeps rising with compute and data, the curve is real, and the claim is that a strong enough model will handle the essential side too.

Meari-Prototype's answer is structural rather than empirical, and it is the one I find convincing. If an advance improves a secondary task, then however many times over it improves it, the primary task only takes up a larger share, and the order of magnitude on the whole stays out of reach.

Their analogy is a car whose engine doubles in speed every year and a destination of the moon. The engine curve never gets there, not because it is too slow, but because the moon is not in a direction the road goes. Getting there needs a different kind of machine.

I would put my own version next to it. Every model upgrade I have taken has improved the code that comes back. None of them has changed who decides whether the code should exist. That is not a capability gap that a bigger model closes. It is a different axis.

There is a second half to their reading that I had not thought about. The evaluation of these systems is frequently automated too, which means a model scoring a model. Inside that loop there is nothing that can distinguish getting better at the work from getting better at producing the thing a scorer likes. No fraud is required. It is the same structure as the scoring function problem from chapter four, scaled up, and scaling it up does not add a link that holds whether the work is actually right.

## Automatic programming, forty years on

Brooks spends a section on the term automatic programming, and calls it an incantation. A word that sounds like it solves something. He cites Parnas saying that what is usually furnished is a technical description of a solution method rather than a description of the problem.

Forty years later that is a precise description of the loading problem. When I write a task brief for an autonomous run, I am standing on the edge of Parnas's blade. Add one more piece of specification and the specification becomes the solution, so what I am testing is whether the agent can copy my answer. Take one away and it dies on a situation outside the definition, filling the gap with the average default from everything it read.

The distance between being able to write the brief well enough for an automated system to succeed, and having already solved the problem, is the entire workload of judgement.

Brooks gives an exception list. Automatic programming makes sense when the problem has few enough parameters, when known solutions abound, and when there are clear rules for choosing among them. That list circles exactly the domain where autonomous runs work today. Standard data processing, format conversion, templated work in a mature area, exercises with unambiguous tests.

Meari-Prototype's footnote on this is the one I would want remembered. The list has not grown. What has grown is the speed of execution inside it.

## The expert system arrived, just not where they looked

The most unsettling passage in the essay is where Brooks discusses expert systems, because four of his restrained sentences turned into a prophecy.

The difficulty is deciding what to say rather than how to say it, so simplifying expression gives a modest boost. An expert system's capability comes from accumulated knowledge rather than a new mechanism of derivation. Building one requires having an expert. Its strongest contribution is putting the experience of the best practitioners in the hands of people without it.

Expert systems as a technology died in the winter that followed. Those four sentences did not, because they were never about the technology. They were about any system that distributes expert knowledge at scale, and a large language model is that system in completed form. Its capability comes from a corpus. Its best contribution is exactly the fourth sentence.

The third one is the one that will not leave me alone. Having an expert is the precondition. Without an expert there is no knowledge to load, and what comes out is an average answer. Which gives a concrete answer to the replacement question. What a model provides is a distribution of the average of human expertise. It cannot produce new expertise. When nobody in the field is producing new knowledge, there is nothing new to learn from.

The same model in a setup with no expert in it, and in a setup with a person holding the concept, behaves completely differently. Same corpus both times. In one the knowledge is activated by judgement and in the other it is sampled. Removing the expert does not remove the precondition. It leaves a hole where the precondition should be, and a hole does not solve anything.

## The four approaches, marked

Brooks closes with four directions he thought promising. Forty years is long enough to mark them.

- **Buy rather than build.** The most thoroughly delivered of the four. Most systems are now more bought than built. Its 2026 form is buying model capability by the call, which inherits the strategy's ceiling exactly. What I buy is general capability. I cannot buy judgement about my problem, because the thing I bought has never seen my situation.
- **Rapid prototyping to refine requirements.** Mostly delivered, and partly reversed. Agile and prototyping delivered it. A setup that loads a task once and runs to completion with no intervention is the waterfall assumption back from the dead, and every failed run of one is another piece of evidence for Brooks.
- **Grow software, do not build it.** Fully delivered in ordinary development. Version control, continuous integration, staged rollout. Also reversed by anything that starts from zero on every run, because building in parallel is not growing, and growing is what accumulates.
- **Cultivate great designers.** The least delivered of the four, and it is not for lack of trying. No method has been found that scales, and the ability still passes on by working next to someone.

The fourth one got more urgent rather than less. Agents raised the output of an ordinary developer a long way, which widened the gap between a good designer and an ordinary one rather than closing it, because the same support team amplifies whatever judgement is driving it. The gap is not in the agent.

## Using the test

When something arrives claiming to change everything, I ask which side of the line it attacks. Accidental side, it is probably real and worth adopting and it is not a bullet. Essential side, the claim needs a structural argument for why this time is different, and I have not seen one.

That reads as dismissive and it is the opposite. Almost everything I have adopted in the last six months is on the accidental side, and it has been the biggest change in how I work in my career. Knowing which side it sits on is what stops me expecting the wrong thing from it.

The item I have not addressed is my own complexity ledger. My ability to produce went up and my ability to hold did not, and nothing I run grades the whole codebase rather than a task. Chapter four ends on the same admission, which makes it the clearest thing I know about my own setup and have not fixed.
