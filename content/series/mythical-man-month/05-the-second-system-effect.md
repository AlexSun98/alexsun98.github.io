---
title: "My second system was the thing I built to stop me writing badly"
chapter: "05"
weight: 5
date: 2026-09-15
status: published
draftSlug: mythical-man-month-05-the-second-system-effect
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Prompting"]
categories: ["Engineering"]
description: "Brooks says an architect's second design is the most dangerous work of their career. In 2026 the second system is a prompt, a framework, or the workflow I built around my own agents."
---
## Cold water on the architect

The last chapter handed one person the authority to design. This one pours cold water on that person, and the person is me.

Brooks's mechanism goes like this. The first system an architect builds is lean, because they are inexperienced and short of time. All the things they wanted to add sit in their head waiting. Then the second system comes along, with resources and credibility behind it, and every held back idea goes in. Each one is defensible on its own. Together they are a feature explosion that fights itself, and it is usually the worst work of that architect's career.

He says OS/360 is the textbook sample. Its designers had built simple disk operating systems before, and OS/360 was the one where they were going to get it right.

The law has not changed. What changed is where it lives. The 2026 hosts are prompts, agent frameworks and the workflow I built for myself, and I am sitting in the third one.

## The five pieces of advice, read in 2026

Before the hosts, the advice. Brooks lists five disciplines for an architect who wants to influence an implementation team. Read them now and they are a prompting guide, almost word for word. Meari-Prototype, the chapter by chapter reread this series leans on, are the ones who spotted that.

- **Leave the creative responsibility with the implementer.** A prompt that specifies every variable name produces the worst output, because it strips out the judgement and leaves mechanical compliance.
- **Always have one workable way to do it, and always accept a different one.** A runnable sample beats an instruction. Saying "in this style, like this file" carries more than a paragraph describing the style.
- **Keep suggestions low key.** Capitals and threats do not help. This has been tested across the industry enough times that it should be settled, and it makes models more cautious rather than more careful.
- **Be ready to give up credit for the improvement.** When the agent proposes something better than what I asked for, my first reaction is that it is not what I wanted. That reaction is wrong and I still have it.
- **Read the architectural suggestions carefully.** It has seen more code than I have. Worth assuming might have merit before deciding.

What Brooks wrote was etiquette for managing an architect and an implementation team. It reads as etiquette for managing anything capable, which is why it survived the change of species.

## The write-post skill is my second system

Here is mine, and it is the reason I recognise the chapter.

The first post in this series was written without any process at all. The branch I was working on had been cut before the tooling existed, so the tooling was not in the tree, and nothing in the repository pointed at its absence. The post came out with ten identically shaped sections, invented example systems, no numbers anywhere, and one first person claim that nothing backed. It read exactly like what it was.

So I built the thing that would stop that happening again. It has six stages. It tags every block of source material by where it came from. It has a claims ledger, where every sentence containing the word I has to cite a line. It has a voice file with rules and a banned word list. It has a checker that runs with no drafting context. It has three gates where I have to say yes. It has a pre-commit hook that refuses the commit if the ledger and the findings are missing.

Every one of those items is there because of a specific failure. Each is defensible. And the whole thing is now heavy enough that starting a post has a cost of its own, which is exactly the symptom Brooks describes.

The proof is this chapter. Seventeen chapters got written in one pass with both interview rounds skipped, because sitting through the full process seventeen times was not going to happen. A pipeline that gets skipped when the work is large is not protecting the work. It is protecting the small work I was never worried about.

That is the second system. It installed everything I failed to guard against the first time, and the cost was the looseness that made the first attempt possible at all.

## The prompt version

The same shape shows up an inch away, in a single prompt.

First time, the prompt is short. It works. The success makes me want it to work every time, so I start adding. Output format, because it came out messy. An edge case, because it missed one. Style, because the tone was off. Error handling. A term definition. Each addition is defensible, and after enough of them the prompt is longer than the thing it is asking for.

Then the behaviour changes. The agent gets literal and cautious. It stops bringing anything of its own, because the prompt has signalled that details matter and rule following is safest. It stops making the twenty mistakes I guarded against and starts making a fresh set I have no guard for, because I have not met them yet.

Brooks's remedy is self restraint, and the question he wants asked is whether the feature is really necessary and what happens if it goes. The version I try to apply is whether the rule is guarding against something rare, and whether a correction in conversation would have handled it instead of a permanent line in the prompt.

## The framework version

The one I am watching rather than living. Meari-Prototype's version of this is the agent framework, where version one is a loop, a few tools and some templates, and version two arrives with planner and critic classes, a task graph, a pluggable memory system, several planning algorithms and a debugging panel. Every item has a reason. Every item is good in a demo. Nobody uses version two.

Their point about why the good version two almost never ships is the sharp one. A simplified version two conflicts with the business logic of shipping a version two at all, because the team has to prove they built more. Subtraction is not a form that proof can take.

## Budgets in tokens and seconds

At the end of the chapter Brooks says to assign every feature a priority weight in bytes and microseconds, and calls it a valuable way of imposing discipline. Memory and cycles were the scarce things.

The 2026 pair is tokens and seconds. It is as easy to overlook as it was in 1975, because any single action looks cheap and only the total is alarming.

My own version of this is a stop loss rather than a budget. My setup caps how many times a line of attack may fail before control comes back to me. It is a round cap and not a token cap, and it exists because my judgement about whether one more attempt will work is least reliable in exactly the moment I need it.

I do not have a token budget. I should. I have never once checked what a task cost me against what I thought it would cost. That is the same gap I admitted at the end of chapter two, where I could not say what running three sessions in parallel had cost me against running one.

And the budget itself can become a second system. Meari-Prototype flag a case where a thinking budget was truncated on top of a model that already had a mechanism for adjusting how hard it thinks. Two mechanisms, fighting, and the crude one wins. Every layer of control goes in for a reason and the stack of them is over design.

## Where restraint actually worked

One place the discipline held, and it cost me seven attempts to get there.

I drew a cover for a post seven times and threw all seven away. The fix, when it arrived, was not a better drawing. It was rendering the thing first and looking at what actually appears on the page. Chapter eleven has the detail, because it belongs to a chapter about reconnaissance rather than one about restraint.

What belongs here is that seven attempts each added something, and none of the seven checked the assumption underneath all of them. Restraint would have been cheaper than any of the additions, and I only know that because the failures were visible enough to count.

## The part I cannot cut

I ask what a rule is for before it goes into a prompt or a skill. If the answer is one bad afternoon, it stays out.

I also treat a skipped process as data. Routing around my own pipeline is the pipeline telling me it is too heavy, and this chapter existing in this form is the clearest version of that signal I have had.

What I do not know is how to cut the skill without losing what it is for. The heavy parts are the sourcing rules, and the sourcing rules are what stopped the first failure. Dropping the gates is what I did here, and the price was seventeen chapters whose first person material comes entirely from what was already on the record, because no interview means no new material. That is a real limit on these chapters and I would rather say it than hide it.
