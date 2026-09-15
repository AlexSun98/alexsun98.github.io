---
title: "Sharp tools, and the editor that learned to move itself"
chapter: "12"
weight: 12
date: 2026-09-15
status: published
draftSlug: mythical-man-month-12-sharp-tools
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Harness"]
categories: ["Engineering"]
description: "Brooks called the text editor the tool that saves the most labour. Fifty years later it is still true, and the editor now reads, changes and runs the text without me."
---
## The plainest chapter in the book

This is the plainest chapter in the book. Brooks means actual tools. The editor, the machine, the compiler, the debugger, the library manager. Anything that speeds up a programmer's hands.

Most of the specifics are dead. A lot of the chapter is about how to allocate machine time, which is not a problem anyone has. The methodology is not dead. Brooks says tool strategy is something the project manager has to formulate personally, and that the choice of tools decides the scale of the output. That reads as literally true now, and the name it goes by is harness engineering.

I have a stake in this one. This site lists an agent harness as one of its stack tiles, next to the languages, and the bio says harness engineering is one of the things I write about. So I am not neutral about whether the chapter survived.

## Tool strategy, five slots

Brooks's advice is to formulate a strategy for general tooling while staying aware of the need for specialised tools. Meari-Prototype, whose rewrite of the book for the agent era this series follows, map his vocabulary onto five slots. I am going to walk mine through them, because the honest scorecard is more useful than the list.

- **The tool set the agent can call.** Read and write files, run commands, reach services, search. His general purpose tool collection. I have this and it is the part I have spent most time on.
- **Model tier selection.** His machine time allocation. I do not have this. Everything runs at one tier, which I admitted three chapters ago and have still not fixed.
- **A reference library.** Code and documentation the agent can query. His program library. I have half of it, as a folder of small memory files with a one line index. The numbered specification that should sit beside it is one of the things chapter ten catches me describing as though it existed.
- **A sandbox.** A place to try and fail safely. His debugging machine. I have this weakly. My agents work in a worktree, and chapter seven covers why that is thinner isolation than it looks.
- **Budget and stop losses.** His resource planning. I have one of the three. A cap on rounds, which hands control back to me after three failures. No token cap, no time cap.

Three out of five, and the two missing ones are both about cost. That is not a coincidence. It is the same hole chapter eight is about, which is that I keep no record of what anything costs, so I have no figure to set a budget against.

The part of Brooks's claim that holds hardest is that this is strategic work rather than something to delegate. A bad editor in 1975 slowed a programmer by a factor of two. Meari-Prototype's version is that a bad setup stops an agent doing things it is perfectly capable of, and that the difference is invisible from outside, because what shows on the surface is a model failing.

## The death list

The chapter is full of extinct things, and the pattern of what died is worth more than the list.

Dedicated target machines, gone, killed by hardware becoming general. Machine time booked in blocks, gone, though there is a residue in exclusive access to a card for hours while a person waits. Logical simulators, replaced in concept by containers. And PL/I, which Brooks in 1975 thought was the most promising language, and which he revises in a 1995 bracket to no longer correct.

The three tier program library survives, at least in outline. A private development library, an integration library, a release version. That maps onto a feature branch, a staging branch and production closely enough that the shape looks unchanged, though nobody in 1971 was thinking about who merges what.

Every dead item is about a vehicle. Which machine, which language, which shape of library. Every surviving item is about a principle. Why a strategy is needed, how tools affect output, how to architect around a feedback loop. That pattern is the argument of the last chapter in this series, and this is where it first shows clearly.

The PL/I one is worth keeping for a different reason. It is a sample of a confident prediction from the best informed person in the room, and it was wrong. Whatever I would predict about how this tooling looks in five years is going to age the same way.

## The editor is still the throne

Brooks says the tool that saves the most labour in a programming project is probably the text editing system. That was a real claim in 1975, when some people were still on punch cards and thought an editor was a luxury.

His reasoning is that a programmer spends most of their time changing code rather than writing new code. Their own from this morning, someone else's, their own from six months ago, the few lines a failing test points at. Changing code needs three things. Finding the spot, changing it precisely, seeing the result. An editor is the one tool that does all three, and the difference between a good one and a bad one is not typing speed. It is how short the loop is.

This proposition aged better than Brooks could have known. Meari-Prototype's reading is that a conversational coding tool is a closed loop text editing system, and once I saw it that way it was hard to see it any other way. Read text, change text, run text, read the output, loop. The same four actions. The difference is that all four used to be done by a person and most of them are not now.

So the editor is still on the throne. What changed is that it moves itself.

The part of their reading I can speak to is what it did to the object, and the clearest case I have is this series. What I edited across seventeen chapters was structure, argument and wording. The formatting pass, the syntax, the mechanical sweep over a file, none of that was mine. The line the work divided along was whether the change needed judgement, and it fell in the same place every time.

That division is why the previous chapter's framing works at all. Documentation is where I edit, so documentation is where the decisions are.

## Batch processing came back

Brooks handles a debate of his day about whether interactive programming would replace batch. He says some workloads will never be replaced by interactivity, and in 1995 he adds that it still holds. His reasoning is that some work is run it and look at the result, and a person standing by adds nothing. Compiling overnight, running a full suite, a simulation.

Meari-Prototype's version of this is the observation I enjoyed most in their whole book. A fully autonomous agent run is batch processing, revived. Submit a job, it queues, it runs for an hour, it produces a result, and I go and read the log. That is a 1960s machine room with the cards swapped for a prompt and the printout swapped for a log. Even the experience of having nothing to do after submitting is the same.

That is not an insult. Batch has a proper domain and the domain is work that needs no judgement along the way. Their point is that people choose it for work that does need judgement, because it looks advanced.

My own setup sits on both sides of the line and I did not design it that way on purpose. Between handbacks it is batch. A planner, an implementer, a verifier and a finalizer run without me. Every three failed rounds it becomes interactive, because control comes back. What that means in practice is that the interactive part is rationed, and the ration is set by a failure count rather than by whether judgement was needed. That is the wrong variable and I have not found a better one.

## The gap widened

Brooks cites limited data putting interactive productivity at twice batch, and he flags that the data is limited while being confident about the direction.

The direction widened. Meari-Prototype's account of why is that batch holds your attention without letting you use it. The next step depends on the result, so it cannot be started, and the task is still occupying the foreground. That stretch is waste. Interactive has almost no wait.

In 1975 the gap was hours against minutes. Now interactive can be seconds and an autonomous run can be hours, so the gap in feedback cycle got larger rather than smaller, and the productivity gap went with it.

I have one small case of choosing the wrong loop and paying for it. I ran a production build into the output directory of this site while the development server was up. The server switched to serving from disk, live reload stopped, and my browser stopped refreshing without saying anything. I spent an afternoon looking for a bug in a page that was fine. The fix was to build into a scratch directory instead and start the server with fast rendering disabled.

That is a tool strategy failure, in Brooks's exact sense. Two tools, both working correctly, in an arrangement that quietly broke my feedback loop. And the cost was not the broken build. It was an afternoon of looking at a stale page and believing it.

## Two empty slots

I stopped treating the setup as plumbing. When the output is poor my first question is which of the five slots is empty rather than which model I am on. And I check that my feedback loop is alive before trusting what I am looking at, because a page that does not refresh looks exactly like a page that did not change.

Tiering and budget are the two slots still empty. Both cost me money every day I leave them and both are entirely mine to fix. I have admitted each of them more than once across this series, which is starting to read as the answer rather than as a gap.

I also do not have a better rule than a failure count for deciding when a run should become a conversation. Three failures is a proxy for judgement being needed and it is a poor one, because the runs that most needed me were the ones that did not fail.
