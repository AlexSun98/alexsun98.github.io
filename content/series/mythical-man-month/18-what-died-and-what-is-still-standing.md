---
title: "What died, what got delivered, and what is still standing"
chapter: "18"
weight: 18
date: 2026-09-16
status: published
draftSlug: mythical-man-month-18-what-died-and-what-is-still-standing
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Reflection"]
categories: ["Engineering"]
description: "Sort every proposition in the book into dead, delivered and still standing. The line between the piles is the line Brooks drew in 1986, and it did not move."
---
## Sorting rather than answering

Seventeen chapters back I asked whether Brooks's law was outdated in the age of AI. This is where I answer it properly, and the answer is not a yes or a no. It is a sorting exercise.

Every proposition in the book can go into one of four piles. Still standing. Standing after a change of currency. Delivered so completely it stopped being discussed. Dead. Meari-Prototype, who rewrote every chapter of Brooks for the agent era, do this sort at the end of their book, and the shape of the result is their argument. It is the best thing in it and I am going to walk my own version of it.

## The dead

The list is short and tidy.

- **Microfilm as a way of distributing documentation.** The vehicle vanished.
- **Dedicated target machines.** Killed by hardware becoming general.
- **PL/I as the most promising language.** Brooks's own bracket in 1995 says no longer correct. Beaten across the board by the languages that followed.
- **The flowchart.** Less precise than code, less clear than prose. Nowhere left to stand.
- **Counting bytes.** The craft vanished when memory got cheap, though the principle under it came back on a new vehicle, which is the whole of chapter nine.

## The delivered

Just as tidy, and easier to miss, because a proposition that wins completely stops looking like a proposition.

- **Plan to throw one away.** Became prototypes, minimum viable products and beta testing. So thoroughly won that it is not argued about.
- **Version control.** Brooks discussing change slips and revision dates is git, delivered in full.
- **High level languages.** The fivefold advantage over assembly, delivered so completely that assembly has left general programming.
- **Daily builds.** Became continuous integration.
- **The three tier program library.** Became the feature branch, staging and production.
- **Top down design with stepwise refinement.** Became the default working method of anyone with basic training. My generation does not know there was another way.
- **Self documenting techniques.** Type systems, docstrings, executable specifications.

## What is still standing

Now the other pile, and every one of these has had a chapter of this series spent on it.

- **Conceptual integrity, and one mind holding it.** Multiple holders grow multiple private versions. The agent era gave this its cleanest counterexample and I have two date formatters to prove it.
- **Man months are not fungible.** Ten subagents do not divide a judgement. The mechanism did not move.
- **Optimism.** Programmers are optimists, and agent users more so, because stating a thing clearly feels even closer to having done it than writing it correctly did.
- **Communication cost.** Brooks's law and the n squared channels, arriving now as verification and printed on a bill.
- **The surgical team.** A few minds and many hands, and the condition that the chief programmer holds a real scalpel rather than a viewing window.
- **The documentary hypothesis.** Writing forces decisions into the open. Upgraded into documentation as source and code as build output.
- **Places lacking precise definition.** Vyssotsky's proposition, and the one I have least answer to.
- **Milestones and self deception.** A milestone with room in it gets self deceived, and a scoring function is a milestone with room in it.
- **Purpose cannot be expressed in syntax.** True of a high level language in 1975 and true of a prompt now.
- **No silver bullet.** Not one of the four essential difficulties eliminated, and every one of them wearing a new shape.

## The line between the piles

Put the piles next to each other and the pattern is hard to argue with.

Everything dead or delivered is about how to say it. A vehicle, or a way of expressing something.

Everything still standing is about deciding what to say, and who decides.

That line is the one Brooks drew in 1986 between accidental and essential difficulty. Nobody arranged for the piles to sort that way. Fifty years of enormous effort went into removing accidental difficulty, so those propositions either won and became invisible or got replaced along with their vehicle. Wave after wave promised the other side and none of them delivered, so those propositions are still sitting there exactly as written.

The uncomfortable corollary is that progress makes Brooks more right rather than less. Every generation of tooling kills a few more propositions on the expression side, which is good and worth having. What is left over is the part that cannot be killed, and its share of the total keeps going up.

## Could the line move

Someone will ask whether a strong enough model relocates the line, so that holding a standard becomes accidental difficulty rather than essential.

Meari-Prototype answer this in two levels and the first level is the one I respect them for. If it holds, their book needs rewriting, and they say so. The argument rests on a precondition, that an agent cannot hold purpose, and if the precondition fails the argument fails with it.

Their second level is that the precondition will not fail soon, and not because models will stop improving. Because holding purpose is not a matter of capability. It is a matter of identity.

Purpose hangs off a subject. The subject has a situation, a history, a set of relationships and a list of things it is accountable for. Purpose is not a piece of text, it is the whole network holding it. More information, better reasoning and a longer context do not turn a thing into a subject with a situation. They let it simulate one, and simulating is not holding.

Their test for this is the one I would use. Give a top tier model a very long description of a situation, have it play a specific user, and have another agent gather requirements from it. What comes out is adequate in a narrow scenario and much worse than a real user in the general case. What it wants is what that type of user would say according to everything it read, not what this user wants in this situation.

I cannot prove that from my own work, and I am not going to pretend otherwise. What I can say is the smaller version. Everything in my setup that works, works because I am accountable for the result, and nothing in the setup is accountable for anything.

## Three generations

The first chapter of this series said Brooks's book had three generations of readers, and this is where that observation closes.

The first generation managed people, from 1975 to 1995. What they took was the surgical team, Brooks's law, schedule estimation and the independent test group, and they turned it into the bedrock of software management.

The second managed code, from 1995 to about now. What they took was conceptual integrity, modularity, the documentary hypothesis, planning to throw one away, structured design, and they turned it into agile, continuous delivery and test first development.

The third manages agents. What this series has taken is documentation as source, audit rights against correction rights, who holds the standard, Vyssotsky applied to the line between me and an agent, the Parnas argument settled by splitting it in two, and a scoring function turning out to be a milestone with room in it.

Three generations reading one book and taking different things, and every generation's reading was real. Nobody was projecting. The book was speaking to something that spans the eras, which is the only explanation for a management book from 1975 still being useful to whatever this is.

## My own list, sorted the same way

The honest thing to do with a sorting exercise is to run it over my own open items, because I have left one at the end of every chapter in this series. Sorted, they fall into the same two piles, which was not the plan.

On the accidental side, which means I could fix it with a mechanism and have not.

Model tiering, so that not everything runs at one tier. A budget, in tokens and in seconds. Any record keeping at all. Reviewing a specification before the work rather than the output after it. Routing my gate's warnings to me. Pre registering a criterion before running the thing it judges.

Six items. Every one is a mechanism I know how to build, none of them is a research problem, and none of them are done. I cannot tell you what any of them would be worth, which is itself one of the six. Every one has already appeared as a gap at the end of a chapter, which means the pattern is me rather than the problem.

On the essential side, which means no mechanism fixes it.

There is always another thing I did not write down because it went without saying. I cannot make an agent tell me when it does not know it is guessing. I have no gate that grades whether the codebase is still one thing. Nothing gives me feedback about writing for a person rather than for the next session. And the drift, which is that as the output grows I will be tempted to accept a report I have not read, and I have the evidence of it happening in a file I can open.

Five items, and none of them has a mechanism. Four of the five reduce to the same answer, which is a person sitting where the standard gets read, paying attention.

## What the naming actually did

Six months ago I would have said Brooks's law was on its way out. I said that in the first chapter and I said I had changed my mind. Here is the version I would give now, having been through all of it.

The book is not a set of predictions that either aged or did not. It is a naming exercise. Brooks's whole point was that the difficulty of software is not an accident and not a surprise, that it has structure, and that the parts have names. Chapter one put the value of that in one line and I will not improve on it there, so here is the narrower version. A difficulty I can name is one I can put a mechanism against. The rest I walk into.

What changed in my week is small and specific, and all of it came from being able to name things. Done means a check has passed. Control comes back after a cap on failures. The documentation gets written before the work and gets read when the work comes back wrong. Constraints go into structure rather than into a prompt, and I make the structure fail once so I know it fires. I say which side of the 1986 line a new tool attacks before I decide what to expect from it.

And the naming did one thing I did not expect. It made the gaps in my own setup impossible to file away. I can now say exactly what is wrong with my gate, and that has not made me fix it. Naming a difficulty is a precondition for organising around it, not a substitute for doing so.

The water over the tar pit is clearer than it has ever been. The pit is the same depth. What the last seventeen chapters gave me is the ability to say which layer I am standing in, which does not get me out and does tell me which way to move.

## The two I am not sure about

Whether I do the six mechanisms. They have been on the list for the length of a series and the reason they are still there is not difficulty.

And whether I keep reading every line. That is the load bearing habit under everything above, it does not scale with the volume, and I do not know how long I hold it.
