---
title: "The tower fell because checking cost more than assuming"
chapter: "07"
weight: 7
date: 2026-05-15
status: published
draftSlug: mythical-man-month-07-why-the-tower-of-babel-fell
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Documentation"]
categories: ["Engineering"]
description: "Brooks says projects die of communication rather than resources. The agent version is cheaper to trigger, because an agent that does not know it is guessing looks exactly like one that knows."
---
## Materials, technology, headcount, all sufficient

Chapter six was about getting the design out intact. This one is about what happens when it does not, and why the structure of an organisation decides that rather than the care of the people in it.

Brooks opens on the Tower of Babel. Materials, technology, height, headcount, all sufficient. The tower did not get built because everyone started speaking different languages. He says five thousand years later the mechanism has not changed. Projects rarely die of resources. They die of communication, and once communication fails every team starts building on its own assumptions, and what comes together is a set of modules that each run and do not run together.

## Checking has to be cheaper than assuming

Brooks pins the mechanism to assumptions about other people. Team A needs to call Team B's module. A is not sure how one behaviour works, has no time to look it up, does not want to look like they do not know. So A assumes X, writes it, ships it. B's behaviour was Y. It blows up at integration.

His point is that this is not anyone's fault. It is structural. Assuming costs nothing and lets the work start immediately. Checking costs time, a wait, and a small amount of face. The shape of that cost decides the behaviour, and the behaviour decides how the organisation fails.

My planner is told to ask when a requirement is vague, and it does. That part works. What it cannot do is ask when it does not know it is guessing, and that is the whole problem. A stale document reads exactly like a current one. The code that comes back looks finished either way, with nothing in it saying where the confidence came from.

Meari-Prototype, whose reread of Brooks against agents runs alongside this one, put this better than I can. When a person guesses wrong they usually hesitate, work a bit slower, leave a comment saying they were not sure. The guess leaves a physical trace. An agent guessing looks identical to an agent that is right.

So the remedy has to be structural, the same as the last chapter. Discuss first and act second is not politeness, it is an artificial toll on starting. If the requirement cannot be restated clearly, work does not begin. That makes checking part of the process instead of a separate act that costs extra.

## The workbook is now onboarding material

Brooks spends a long stretch on the project workbook. It is not a document, it is the structure that organises all the documents, so that everything written knows where it belongs and what has to change when it changes.

The vehicle has moved from paper to a repository, and none of his requirements moved. All project documentation is part of the structure. The structure is designed early, because designing a skeleton after the documents pile up is too late. Everyone can see everything. It is updated in real time. A reader's attention goes to what changed since last time.

The new use in the agent era is that the workbook is the onboarding material for a fresh session. A new session knows nothing and has to be working in minutes, and the workbook is what makes that possible. Done well, a few thousand words and it is up to speed. Done badly, tens of thousands of words and it still has to ask about every step.

Meari-Prototype's list of what good onboarding material holds is the part I have actually copied.

- **A numbered requirement specification.** Clauses that can be cited. Pointing at clause four is cheaper than restating the requirement and it does not distort in the restating.
- **Decision records.** One entry per decision, what was decided and why, with the corrections appended rather than the wrong version deleted.
- **A current list of what is not done.** What is in flight, what is left.
- **The collaboration discipline.** The customs of this project. On a human team those spread by working next to people. On an agent team they have to be written down and loaded fresh every session.

This site has the last one as a file in the root, and it is the single most useful document in the repository. It says posts go through the writing process and not around it. It says where work in progress lives. It says what the series ordering rule is and why the obvious ordering rule was wrong. It says no em dash anywhere. Every line of it exists because something went wrong once.

## Landed means struck

Brooks wants the workbook updated in real time, with attention on what changed. The part of Meari-Prototype's reading I adopted immediately is the convention they call landed means struck. Once something is done it comes off the list of what is not done, and the record of having done it lives in version control instead.

The reasoning is that the reader of that list has one question, which is where to pick up. What has already been done contributes nothing to that answer. Keeping it there dilutes the only thing the document is for.

This is counterintuitive to do, because finishing something makes me want to record it. The instinct is right and the location is wrong. The record goes in the commit. The list gets shorter.

## The Parnas dispute, split in two

The most human passage in the book is where Brooks says he was wrong.

Parnas proposed information hiding in 1971. Modules know each other's interfaces and not each other's internals, so either side can change inside without breaking the other. Brooks's 1975 position was that this was a recipe for disaster, because an implementer who cannot see the whole system will build something that does not fit. He reversed himself twenty years later, in a bracketed line the industry has quoted ever since. Parnas was right and he was wrong. I am taking that reversal from Meari-Prototype rather than from the page, because the edition carrying it is the one I could never get hold of.

Meari-Prototype's verdict is finer and I think it is the correct one. Both were right, on different layers.

At the execution layer Parnas wins, and the context window enforces it whether anyone likes it or not. A subagent that sees only the interface it needs performs better, because irrelevant information in a context dilutes judgement. The window is a harder constraint than a human brain's bandwidth, so the case for hiding is stronger now than it was in 1971.

At the accountability layer the 1975 Brooks wins. An auditor cannot diagnose an implementation through an interface. Working out why a thing is the way it is needs all of it.

Their rule is to use information hiding while doing the work and revoke it while assigning accountability. Different users, different needs, different answers. That is the cleanest resolution of a fifty year old argument I have read.

## What is not on the diagram

The chapter's last idea is that the formal organisation is a tree because power is a tree, and the real flow of information is a network. Information needs to go from one branch to another without travelling up and back down, and a good organisation lays direct channels over the tree.

The agent version is a shared store rather than a message path. If one branch needs what another learned, bubbling it up to the lead and back down is too long and the middle nodes may not understand it. What is needed is common state every branch can read and write.

Two things in my own week are exactly this, and both are things I have got wrong.

One repository I work in exists as two clones. Edits go in one and the deploy runs from the other. Nothing about either clone says which is which, and getting it the wrong way round wastes a deploy.

And I work on this site in a worktree, which is a separate checkout of the same repository. The stash stack is shared across every worktree. That is real shared state with no representation anywhere in the mental model of a worktree as an isolated copy, which is how everyone describes it, including the documentation.

Neither of those is on any diagram. Both are the network under the tree, and both bite by looking like nothing.

## Reducing communication, and cutting too far

Brooks says the goal of organising a team is to reduce the amount of communication needed, and he means two things by it. Reduce the unnecessary part through clear responsibility. And watch out for cutting so far that the necessary part goes with it.

The interesting extreme is a set of parallel runs that share nothing and accumulate nothing. Communication there is not reduced, it is zero, and what gets saved is called amnesia. An organisation with no communication produces repetition rather than accumulation. That is the mechanism under the version of Brooks's law I described in chapter two, where adding runs does not even buy lateness.

The right target is not less communication. It is that every piece of it is necessary. Which means answering two questions on purpose. What information must be shared, at what point and in what form. What information can be hidden, where, and when that hiding gets revoked. Those two answers are the architecture.

## Two things I stopped assuming

The first is that the isolated thing is isolated. A worktree, a clone, a session. Each one has shared state I did not choose, and finding it is cheaper before than after.

The second is that a record belongs where the work happened. The list of what is not done gets shorter now instead of longer, because finishing something means deleting a line and the trace lives in the commit.

What I have no answer for is the first half of this chapter. There is no way to make an agent tell me when it does not know it is guessing, and I do not think one exists. The toll on starting only catches the ambiguities I notice, and the ones I think are obvious are the ones that go through. That is chapter thirteen, and it is the part of this series I am least able to fix.
