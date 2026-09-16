---
title: "Nobody can estimate agent work yet, and I am part of the reason"
chapter: "08"
weight: 8
date: 2026-08-12
status: published
draftSlug: mythical-man-month-08-calling-the-shot
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Estimation"]
categories: ["Engineering"]
description: "Software estimation took fifty years to become a discipline. Agents reset the ledger, and the only honest method left is to run a small real slice and look."
---
## How long will it take

The last two chapters were about getting intent through a team intact. This one is about the question everyone asks before any of that starts. How long will it take.

In 1975 the answer was dire. Managers estimated by feel, programmers by optimism, clients by hope, and everyone was wrong. Some projects ran to twice the estimate, some to ten times. That was the norm rather than the outlier.

Brooks's move is to say that a discipline cannot estimate until somebody keeps records. Not headline records, detailed ones. How many hours each step took, how big each module was, what share of a programmer's day was actually spent coding. He then lists every data point he could find, by name, and those crude numbers are the first cornerstone of the field. Everything that came later grew out of them.

Fifty years on, traditional estimation works well enough. A medium feature is roughly so many days. A mid size project is roughly so many months. Imprecise and inside a tolerable margin.

Then agents reset the ledger. Meari-Prototype put it plainly: over the past two years nobody has been able to reliably estimate how long doing something with an agent takes. A three hour guess becomes a day, a one day guess finishes in three hours, and that is not a failure of anyone's estimating ability. The baseline is gone.

## You cannot multiply up from the typing

Brooks says the whole job cannot be estimated by estimating the coding and applying a coefficient, because the coding share varies too much from project to project.

The 2026 version of the problem is worse, because the coding share tends towards nothing.

This series is my own example. These chapters were drafted in one pass in an afternoon. If I estimate from the typing, the series took an afternoon, which is absurd. The typing was the cheapest part. What it actually costs me is deciding what each chapter argues, reading every line of what came back, and deciding whether a claim in it is one I will put my name to. I have not finished paying that, and the reason I am saying that rather than quoting a total is that the total does not exist yet.

The same shape shows up on smaller things. The agent's part of a feature finishes while I am still reading the ticket. Then I have to work out what should have been written, check that it was, and fit it into the system, and those three are the work. No multiple of the agent's time gets me to the total, because the agent's time is not a fraction of it. It is a different quantity.

## The toy task trap

Brooks says data from small standalone programs does not transfer to a real product. In Meari-Prototype's agent era reread of the book, this is the single biggest estimation accident in the industry right now, and they are right.

Getting something that runs out of a single prompt takes me under an hour, and the short demo of exactly that is everywhere. The trap is estimating a real piece of work from one.

Meari-Prototype's explanation is that every step of a demo sits inside the model's training distribution, because a demo uses the most mainstream stack and the most standard patterns, while a real project carries private conventions that were never published anywhere. Their claim is that the efficiency gap between the two can reach tenfold, and that no demo shows it.

The small version of this from my own week is a scan I went looking for. I set out to read a specific edition of Brooks and found a file labelled as that edition. It was the 1975 first edition under the wrong label. What should have been a download became a hunt, because the metadata was wrong and nothing inside the file said so.

That is not a hard problem. It is the kind of thing that is never in a demo and always in a week.

The remedy Meari-Prototype give is the best estimation method I know of, and it is not clever. Run a real slice first. Give the agent a small piece of the actual project, not a toy version, and watch. Their claim is that this costs very little and saves a great deal of estimating error, and that few people do it because extrapolating from a demo costs nothing at all. I have no figure for either side of that, which is the problem this whole chapter is about.

## Judgement compresses, sampling does not

Brooks cites data putting effort growth at a power law in program size, with an exponent above one. The exact value has been argued about ever since. The part that matters is only that it is greater than one, so complexity grows faster than size.

Meari-Prototype's reading of this for agents is the most useful thing in their chapter and it changed how I think about cost. A project has some number of judgement calls, and they are not independent, because each answer changes the options for the ones after it. So the space grows with depth.

There are two ways to cope. Make the big calls early and prune most of the branches, which lowers the base. Or sample widely and hope to hit a good combination, which runs straight at the exponent.

In 1975 only the first was affordable. Both are affordable now, and the two have completely different estimation properties. If I am compressing with judgement, I can estimate how many good calls I need to make. If I am sampling, I cannot estimate how many samples it will take, because I do not know before I start. All I can do is run until it works or the budget goes.

That is why I bounded the thing I could bound instead of estimating the thing I could not. My setup caps how many times a line of attack may fail before it comes back to me. It is not an estimate, it is an admission that I cannot produce one.

## What actually fills the time

Brooks cites data putting a full time programmer at about half their time programming and debugging, and the other half on everything else. That shocked managers who were paying for a programmer and expected programming. His schedule rule of thumb gives coding a sixth of the total, and his peers at the time thought a sixth was far too little.

I cannot give you my own fraction, for the reason the next section is about. What I can say is which activities fill the week, and they are roughly the ones that filled 1975. Working out what is wanted. Agreeing the approach. Reading what came back. Fixing what the reading found. Fitting it into an environment. Typing is not on that list any more.

There are people quoting startling numbers on the other side of this. Andrej Karpathy said on a podcast in March that he had not typed a line of code since December. Garry Tan put his own output at 810 times his 2013 figure, same person, different tooling. Boris Cherny described merging 150 pull requests in a day. Those are their numbers and I have not tried to reproduce any of them. What I notice is that all three are describing output, and none of them is describing the estimate that preceded it.

The corollary for estimating is the one that changed my behaviour. Do not estimate how long it takes the agent to write the code. Estimate how long it takes me to understand what the code should do and to verify that it does. The first number is close to meaningless. The second is the work.

## The record keepers

The specific figures Brooks lists are all dated. The act of listing them is not.

His tone is what gets me. He is not saying the data proves anything. He is saying somebody was willing to keep records, and that is where a discipline starts. He names them one at a time.

Agent work in 2026 sits exactly where software engineering sat in 1975. No baseline, no model, and every claim about how long something takes is somebody's feeling.

I am part of that. I have never kept a record. Not one. I have said twice already in this series that I do not know what my own choices cost me, and both times the reason is the same. I have never written down the start time, the finish time, the token bill and what I decided in between.

Two smaller failures on this site make the same point from the other direction, and chapter eleven tells both properly. Seven covers thrown away over an assumption none of the seven checked. A study skill that stopped at 16 of 19 chapters because of a source I could not get. Neither overran because the work was hard. Both overran because the shape of the work was not what I thought it was. And I know that only because the failures were visible enough to remember, which is the weakest form of knowing there is. Nothing about either is written down as a number.

So the recommendation I would give is the one I have not yet followed. A spreadsheet. Task, start, finish, what it cost, what I decided, what came out. A few minutes a week. In a year that is a baseline for my own work that beats any industry report, because it is about my codebase and my conventions.

## The spreadsheet I have not started

I stopped quoting the typing time as the estimate out loud to other people. When someone asks how long an agent will take, the answer I give is about the reading rather than the writing. And I say I do not know more often, followed by an offer to run a small real slice and look. That sounds worse than a confident number. Whether it is more accurate I cannot tell you, because I do not keep the record that would settle it.

The record keeping is the part I have not started. I know exactly what to do, it costs a few minutes a week, and there is nothing standing in the way. Writing this chapter is the closest I have come to a reason, so the honest ending is that this one is open because of me rather than because the problem is hard.
