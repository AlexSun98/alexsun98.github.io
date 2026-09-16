---
title: "Every spec I write has a hole I cannot see"
chapter: "13"
weight: 13
date: 2026-09-08
status: published
draftSlug: mythical-man-month-13-the-whole-and-the-parts
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Architecture"]
categories: ["Engineering"]
description: "Vyssotsky says failures come from the places a product was never precisely defined. An agent hitting one of those places does not hesitate, and does not leave a mark."
---
## Does thorough architecture slow a project down

The question this chapter opens with is whether doing the architecture thoroughly slows a project down. It feels like it must. Time on architecture is time not writing code.

Brooks says the opposite, and says it is not speculation but a pattern he and his colleagues watched across many projects. Thorough architecture makes the product easier to use and the development faster and the bugs fewer.

The mechanism is that a project has two kinds of time. Time that moves the work forward, and time patching holes that a thin design dug. Interfaces that do not line up. Two modules with conflicting assumptions. A dependency nobody noticed until integration. Hole patching produces nothing.

So architecture is not slow. It moves the slowness earlier, and the total goes down. This matters more now, because the implementation phase got fast. The only slow parts left are the early design and the late integration.

## The hole I did not know was there

The heaviest line in the chapter is not Brooks's. He cites his colleague Vyssotsky saying that an enormous number of failures come entirely from the places where the product was not precisely defined.

The mechanism is specific. My requirement spells out A, B, C and D. There is an E I never mentioned, not deliberately, but because it went without saying. In my head there is a default answer for E. It was never written down.

The implementer reads the document, follows A to D, reaches E, finds nothing, and uses their own default. Sometimes that matches mine. Usually it does not, because we are different people with different habits.

Then I review it and say that is wrong. They say I never asked for that. I say it is obvious. They say it was not. Brooks's colleague put that exchange at the root of an enormous number of failures.

Vyssotsky's real claim is harder than write more documentation. It is that no amount of documentation finishes the job, because the set of things that need spelling out is open. I think I have covered everything and there is still a part I did not know needed covering.

My own example is the one I have already described twice, and this is the chapter it actually belongs to. My implementer wrote a date formatter because a task needed one. Another task had written the same thing two weeks earlier, three folders away. Nowhere in anything I wrote does it say to look for an existing one first. I did not write it because it goes without saying. It went without saying, and now there are two.

## Why it is worse with an agent

Meari-Prototype, rereading the chapter against agents, name three differences, and all three match what I see.

- **The default answer is an average.** A person's default comes from their industry and their team. An agent's comes from the averaged habits of everything it read. Average taste rarely matches any specific situation, because a specific situation always has its own particular bias.
- **It usually will not ask.** Mine will, because it is told to, and it does. That covers the ambiguity it can detect. It cannot ask about the thing it does not know it is guessing at, and that is the whole category that matters.
- **The guess leaves no mark.** A person who guesses hesitates, slows down, sometimes writes a comment saying they were not sure. An agent guessing looks identical to an agent that is certain. The only place the difference shows up is review.

Put the three together and the conclusion is uncomfortable. Places lacking precise definition were dangerous in 1975 and they are more dangerous now, because in 1975 the ambiguity left a physical trace.

The way out is not a better document. Meari-Prototype's corollary is that a definition can never be precise enough to need no judgement, so the only engineering answer is to keep someone capable of judgement stationed where the definition gets consumed. That is the real reason the chief programmer has to be present, and it is not to write code. It is to be the thing that fills the gap Vyssotsky's proposition leaves in every system.

## Review the spec, not just the output

Brooks cites Vyssotsky again. Before any code is written, the specification goes to the test group to be checked in detail for completeness and clarity, because the developers will not do this themselves.

The important word is before. And the important reason is independence, because an author cannot see the ambiguity they did not notice.

In 1975 that needed a headcount. Now it needs a session. Write the spec, then open a fresh session, hand it only the document, and ask it to point at everything ambiguous, missing or contradictory. No sunk cost, no shared assumptions, none of the private context I had while writing.

This is where I have to be honest about a gap. I do this after, not before. My setup verifies a merge request in fresh sessions, and my writing checker reads a finished draft with no drafting context. Both of those are output review. They are good and they are late. Nothing in my setup reviews the specification before work starts, and Vyssotsky's whole point is that the specification is where the failure is born.

Fixing that costs one session and a few minutes. I have not done it.

## Retreating has to be cheap

Brooks introduces top down design, which won so completely that nobody needs it explained. What he also says, and what does not get quoted, is that sometimes a retreat is necessary, overturning the top level design and starting again.

The part that matters now is where the retreat happens. Retreating at the design layer is editing a document and a few hours of rediscussion. Retreating at the implementation layer is redoing work. Those differ by orders of magnitude.

In a conversation I can retreat cheaply. Go back to when we were discussing the other approach and switch. A few dozen rounds lost. In a setup that starts from zero on every run, the retreat is a whole run, and that is expensive enough to make people hesitate over a direction that is obviously wrong.

Meari-Prototype's version of this is the practical one. Keeping the cost of retreat low is a precondition for top down design working at all, rather than a philosophical preference. An architecture that makes retreating expensive will stop people retreating when retreating is the only right answer.

## The desk and the terminal

Brooks cites an observation that every two hours at a terminal corresponds to two hours of desk work. Organising notes, writing, planning, thinking about the next step. His peers expected the ratio to be four to one the other way, because terminal work felt like the real work.

Meari-Prototype argue the ratio has to go up rather than down, because a session advances in minutes what used to take hours, and the quality of what comes out of a session depends on how much thinking went in before it and how much digestion happens after. Their breakdown of the after part is reading the output properly rather than reading the summary, updating what is not done, folding what was learned into the settled layer, and planning the next step.

This series is my own counterexample and I am going to leave it standing as one. The seventeen chapters after the first two were drafted in one pass in an afternoon. The desk work on them, which is me reading every line and deciding whether each claim is one I will put my name to, has not been done at the point these words exist. I read every line of what I ship, so it will get done. The ratio for this piece of work, at the moment of writing, is close to all session and no desk.

Which is exactly the inversion they warn about. I do not think that makes the chapters worthless. It does mean the honest label on them is drafted rather than digested, and that label is in the front matter of every one of them as a date that will not move.

## Check the environment before blaming the code

Brooks says system debugging takes longer than expected and should not begin until every component works on its own. The second half sounds procedural and is a real principle. If the components have not been tested, a component problem cannot be told apart from an integration problem.

The agent version is that the environment has to be checked independently before a task starts. If the external things are genuinely ready, the agent's work is implementation. If they are not, the work becomes a mixture of implementation and environment debugging, and everything it produces is contaminated, because it may misdiagnose an environment problem as a code problem or write a workaround around it.

I have paid for this. I spent an afternoon looking for a bug in a page on this site that was fine. A production build had put the development server into serving from disk mode, so live reload was not being injected and the browser was showing me a stale page. Nothing was wrong with the code. The environment was lying and I was debugging the output.

The version of this I now believe in is boring. Before the work, run a check that the environment is what I think it is. Independently, by a script, not by asking the agent whether it looks fine.

There is a second one I get wrong regularly. One repository I work in exists as two clones, and the deploy runs from one of them while the edits happen in the other. Nothing in either clone says which is which. That is an environment contract held entirely in my head, which is the definition of a place lacking precise definition.

## One component at a time

Brooks says add one component at a time during system testing, because then the problem has only one place to be. Add ten, something breaks, and every combination is in play.

This is an industry default now. One thing per commit, the suite on every commit, one change per review.

It is also the discipline this very series breaks. Seventeen chapters in one change is the opposite of one component at a time. I did it because the alternative was seventeen separate passes through a process heavy enough that I skipped its interviews, which is the second system problem from chapter five arriving with a bill. If something in these chapters is wrong, the diff will not help me find it, because the diff is everything.

I am saying that rather than tidying it away, because a chapter about integrating one piece at a time that shipped as a single seventeen piece drop should admit it.

## Looking for the E

The move I would recommend, and the one this chapter has talked me into, is to name one thing before handing work over that I have not written down because it went without saying. I have no count of how often that turns something up. Vyssotsky's point is that the ones I do not find are the ones that matter, so a count would not settle much anyway.

Reviewing the spec before the work rather than the output after it is one session and a few minutes, and it is on the list of things I have not built.

The deeper one has no fix. There is always another E. The best available answer is a person sitting where the definition gets read, which is where the rest of this series keeps arriving from every direction.
