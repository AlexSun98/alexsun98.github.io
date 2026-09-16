---
title: "The context window is the new five pound sack"
chapter: "09"
weight: 9
date: 2026-07-16
status: published
draftSlug: mythical-man-month-09-ten-pounds-in-a-five-pound-sack
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Context"]
categories: ["Engineering"]
description: "Brooks wrote this chapter off in 1995 because memory got cheap. Scarcity did not die, it moved house, and every principle in the chapter came back on a new vehicle."
---
## The chapter Brooks wrote off himself

Brooks signed this chapter's death warrant himself. In his 1995 look back he says the problem he had to write about in 1975 was that memory was too expensive, that by 1995 memory was nearly free, and that most of the chapter had become an antique. The industry agreed and stopped reading it.

Meari-Prototype, who reread every chapter of Brooks against coding agents, argue the verdict has to be overturned, and this is the most convincing thing in their book. Scarcity as a phenomenon did not die. It moved. In 1975 the scarce thing was memory. Now it is the context window. Swap memory for context, bytes for tokens, a disk access for a tool call, and the principles come back, with three differences that make the new medium harder to manage than the old one.

I find this one persuasive because I did not need convincing. I had already built the machinery. I just had not noticed it was the same machinery.

## The same tradeoff, different vehicle

Resident memory in 1975 was physically limited, fast to reach, and priced by the kilobyte. Programmers decided what lived in memory and what got swapped to disk. Resident was fast and small. Swapped was cheap and slow. That tradeoff dominated two decades of programming, and the whole early Unix philosophy of small tools and pipes comes straight out of it.

A context window is physically limited, fast to reach compared to a tool call, and priced by the token. I decide what lives in the context and what sits in a tool to be pulled when needed. The structure is identical.

Meari-Prototype name three things that make the new one harder than the old one, and those three are what turn the analogy into something I have to manage.

- **Overfilling degrades the result.** Memory that filled up was simply full. The program ran slower and the answer was the same. A context filling towards its cap makes reasoning worse. Attention scatters, early instructions fade, noise in the middle starts to matter. So the useful occupancy of a window is well below its physical size.
- **It is a consumable, not an asset.** Memory was bought once. Tokens are paid on every call. Wasted context is not just space, it is money, repeatedly.
- **It does not persist.** When a session ends, restoring the state means reloading it, and reloading costs tokens. In 1975 the persistence problem was solved. Write to disk, restore. Now the restore has a bill attached.

## The machinery I already had

Meari-Prototype list five techniques as a new manual for the old chapter. Going through them honestly, I have three, half of one, and none of the last.

- **Tiering what goes in.** The most important is always present, the next tier loads on demand, the rest stays out. The test is whether this task needs it, not whether I might want it later. I have this by accident rather than design, because each of my agents is given only the brief for its own step.
- **Retrieval on demand.** The context holds navigation rather than content. How to find a thing rather than the thing. This is the direct descendant of resident against swapped, and it is the one I lean on most.
- **Summaries and indexes.** I have this and it is the piece I am most attached to. The memory I keep for this project is a folder of small files, one fact each, with a one line index that loads at the start of every session. The index is a few hundred bytes and it is enough to decide which file to open. Their warning about it is fair, though. Summaries are effective and not free. An index maintained entirely by a model is a mess somebody has to clean up later.
- **Expiring what landed.** Stripping the finished parts of a discussion out of the context. This is landed means struck from chapter seven, applied one level down. I have half of it. My memory files carry a standing rule that a recalled fact reflects what was true when it was written, so anything it names has to be checked against the repository before being acted on. That is expiry by suspicion rather than expiry by deletion, and it works because the reader is told to distrust it.
- **Tiered models.** Cheap models for search and conversion, the strong one for judgement. I do not do this. Every agent in my setup runs at the same tier, and the only reason is that I never got round to changing it. It is the clearest unclaimed saving in my own design and it has been sitting there for months.

The one thing I have that their list does not name is a handoff agent, which takes over when a task runs out of window. That is the swap from 1975, rebuilt because I hit the same wall, and I did not notice I was rebuilding anything until I read this chapter.

## Local optima add up to a worse whole

In the middle of the chapter Brooks makes a point that has little to do with size and is one of the sharpest in the book. In a large team every group keeps optimising for its own goal and gives little thought to the effect on the user. The compiler group wants a fast compiler, so the output gets hard to debug. The interface group wants fast response, so it caches everything and eats the memory. Every group excels and the product is a mess.

The composite of local optima is not the global optimum. It is frequently global degradation.

I have this in my own harness and I described the symptom in chapter four without naming the cause. Every gate I have grades one task, and each task comes out correct, tested and to standard. Nothing grades the codebase. So the duplication I complained about there was never a failure of any gate. It was every gate working, locally, with nothing holding the whole.

Brooks's remedy was that the architect stays vigilant and cultivates in developers an attitude that starts from the whole system. The first half still works. The second half does not survive the change of species, because an agent has nowhere to keep an attitude. Every session starts clean, which is the property I keep trading things for.

So the attitude has to be written down and loaded, and what used to take years of working next to someone becomes a file. That is what a collaboration discipline document is. The cost is that it only applies to the session that read it, and next time it starts again.

## Fast and slow versions, in models

Brooks proposes that important library components should come in a fast version that takes more space and a slow version that saves it, and that the programmer picks.

The exchange rate for that in 2026 is model tiers, and this is where the admission two sections back bites. I run everything at one tier. Meari-Prototype's account of the two failure modes is that running everything at the top tier wastes money and context, and can make simple tasks less stable because the strong model overthinks them, while running everything low means the hard tasks do not land. I can only vouch for the shape of the argument, not for either symptom, because I have never run a tier other than the one I am on.

Meari-Prototype have two cautionary cases from the other side. A setup that used the cheapest model uniformly handed back a type annotation task with everything typed as any, which had to be thrown away. A setup that used the strongest model uniformly for every subagent burned half a five hour quota on one review. Both failures are the same failure. The tier was a default rather than a decision.

The part I take from this is that tiering cannot be automatic. Which task gets which tier, how to escalate, what happens when the choice was wrong. Those are design decisions and they are mine.

## The representation is the thing

The line from this chapter that has travelled fifty years is that the representation of the data is the essence of programming. Brooks is talking about strategic breakthroughs, the changes that suddenly make a program smaller and faster, and his claim is that they come more often from changing how the data is expressed than from a better algorithm. The classic case is set membership. Stored as an array, every check is a scan. Stored as a hash, every check is constant, the code gets shorter, and every metric improves at once. That is not an optimisation, it is making a class of operation unnecessary.

My own clearest case of this is small and it is in this site.

Series chapters used to be ordered by a numeric weight in the front matter. Chapter zero kept ending up at the bottom of every list. The reason is that Hugo treats a weight of zero as unweighted and sorts it last, which is defensible behaviour and completely invisible until there is a chapter numbered zero.

The fix was to stop ordering by weight and order by the zero padded chapter string instead. That removed the bug, and it also collapsed two sources of truth into one, because the chapter number is the thing the page displays. Before, the display and the ordering could drift apart. After, they cannot, because they are the same field. One representation change, two problems gone, and the code got shorter.

The agent version of the same idea is that the form information arrives in decides the behaviour. A table instead of prose. Constraints before the goal instead of after. Meari-Prototype's example is asking for extraction in natural language against asking for the same extraction as a table with named columns. Same job, and the second one comes back consistent and parseable. When a task keeps going wrong, changing the representation is usually a better move than pushing harder on the wording. I have not been disciplined about reaching for it first.

## The next sack

I stopped treating the context as free space and started treating it as a budget with a sensible occupancy well under the cap, which mostly means giving each agent its own brief and nothing else. And when something keeps failing, my first question is whether the information is in the wrong shape rather than whether the instruction was too soft.

Model tiering is still undone. It is the obvious saving, it is entirely in my control, and I do not even know what it would be worth, because of the record keeping problem from the last chapter. I have never written down what a task cost, so I have nothing to compare a saving against.

The larger question is what the next scarce medium turns out to be. Meari-Prototype guess at three, and the one I feel is review bandwidth. How long it takes me to read one piece of agent output, which grows with volume and never gets cheaper. If that is the next sack, this chapter gets reread in a few years with a different vehicle in the slot.
