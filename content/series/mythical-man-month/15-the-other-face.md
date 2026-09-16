---
title: "The other face, and the reason the agent made me write better notes"
chapter: "15"
weight: 15
date: 2026-06-17
status: published
draftSlug: mythical-man-month-15-the-other-face
tags: ["Software Engineering", "AI", "Mythical Man-Month", "Coding Agents", "Documentation"]
categories: ["Engineering"]
description: "Fifty years of trying to make programmers enjoy documentation failed. What worked was giving documentation a feedback loop that runs in minutes."
---
## A program has two faces

Brooks runs an image through this chapter. A program has two faces. One points at the machine, which is the source and the running behaviour. One points at the person using it, which is everything that lets it be understood, used and inherited. He says the second face matters as much as the first, and that a program with a poor one can be technically perfect and industrially worthless.

Most of the technical detail is dated. Flowcharts, the typesetting of paper manuals. One observation in it is the reason the chapter still gets read. Training and management, Brooks says, have basically never succeeded in giving programmers a positive attitude towards documentation.

Meari-Prototype's reading fifty years on is that nothing since has changed that, and that documentation quality stays below code quality even in the projects that care most. I cannot audit fifty years of industry on their behalf. I can say I have never worked anywhere it was not true.

Brooks says this is not laziness. It is the mechanism from chapter eleven, which is that writing a decision down means accepting the obligation to justify it, and people resist that. No amount of culture changes it.

## The amnesiac author, at the limit

Brooks says that even a program written entirely for its author's own use needs descriptive text, because it will be forgotten by the author who is also the user.

That was pragmatic advice about human forgetting. Meari-Prototype's extension of it is that the agent is the limiting case of the same thing.

Every agent in my setup starts with a clean memory. Not partial recall, none. Whatever we worked out yesterday is gone, including the alternatives we rejected together, which is usually the expensive part. I traded that away on purpose, because clean memory is what keeps my verifier honest, and I would make the trade again.

What it means is that anything not written down was a single use resource. Used and gone. Written down, it is an asset that loads next time.

So the advice changed category. In 1975 writing for my own later self was insurance against forgetting. Now it is the only channel that survives a session boundary, and skipping it means the next collaboration starts from zero.

## Making it two species

Here is the part that actually solves the fifty year old problem, and it does not solve it by changing anyone's attitude.

Brooks's guess in 1975 was that better tools would fix it. Tools got much better. Markdown, docstrings, generated references, a type system that documents itself. The complaint did not move.

Meari-Prototype, whose reread of the book against agents I have been following, answer it by giving up on the attitude altogether. Make the thing that writes documentation and the thing that writes code different species. The human's main output is documentation. The agent's main output is code. The human decides clearly, the agent builds to the decision.

That routes around the psychology instead of fighting it. The side writing documentation is already doing work that requires judgement, so writing it down makes the judgement visible, which is what that side is for. The side writing code never gets asked to document anything, so it never resists.

It also kills a specific kind of bad documentation that Brooks describes, the verbose kind with no substance that states what the program does and never why. That exists as a coping strategy. It looks like documentation and carries nothing. It has no reason to exist here, because it cannot serve as a basis for an implementation.

## The feedback loop is the actual fix

Meari-Prototype's argument, and the part of their book I find most persuasive on this chapter, is that what fifty years of exhortation could not produce is a fast signal.

Before, bad documentation caused a problem next year, to someone else, in a way nobody traced back. Now it causes the wrong code, in minutes, in front of the person who wrote the document. Whether a document compiles into the right thing is a test of whether it is clear.

What I can add from my own side is that the incentive works on me. I do not have to make myself want to write the document. I have to look at what came back, and the looking is not optional, because the wrong output is sitting there.

My own site runs on this, and the file that proves it is the working notes in the repository root. It is the most useful document I have and every line of it exists because something went wrong once. It says posts go through the writing process rather than around it. It says where work in progress lives. And every rule in it says why rather than what. The chapter ordering rule is in there with the failure that produced it attached, which is the only reason nobody has quietly put the obvious ordering key back.

That is the pattern. What the code does, anyone can read. Why it is not the obvious thing, nobody can.

## Discuss first, act second

Brooks says most key user documentation should be written before the program is coded. His reasoning is that writing the manual forces the author to think through how the thing will actually be used, and that feeds back into the implementation. Leave it until after and the manual becomes a defence of what already exists.

The agent version is discuss first and act second, and the discipline in my own workflow spells it out. When a requirement is unclear, restate it and confirm before writing anything. Do not start on a guess.

Meari-Prototype's claim is that discussing first saves more time than it costs, and that the effect is larger now than in 1975 because rework charges a bill and pollutes a context on top of taking the time. I have no measurement of the trade either way, which by now is a familiar sentence in this series.

## Why the flowchart died

Brooks calls the flowchart the most overrated form of program documentation and says few programs need more than a page of it. In 1986 he goes further and says programmers draw flowcharts after development rather than before, which makes it a decorative diagram rather than a design tool.

It is basically extinct. The cause of death is worth recording, because it is the same cause that runs through the next three chapters.

The flowchart was purely an expression layer technology. Its precise half got taken over by code, because an if statement is more precise, shorter and more maintainable than boxes and lines. Its imprecise half had nowhere to go, because prose conveys a gist better. Meari-Prototype put it on the coordinate system from chapter six and it lands nowhere. As a formal definition it is less precise than code. As a narrative definition it is less clear than prose. It could not hold either slot.

It was not wrong. The medium moved and pulled the ground out from under it.

## Who owns the house

Brooks says documentation has to be merged into the source program rather than kept as a separate document, because otherwise the code changes and the document does not and they end up saying different things.

The rule that they must not live apart has not changed in fifty years. Meari-Prototype's observation is that the direction of the merge has.

In 1975 documentation went into the code, because the code was where authority sat. It was what actually ran. Documentation followed authority, and living inside the code meant it got maintained alongside it.

Under the framing from chapter ten, authority moved. Documentation is where decisions live and code is what gets built from them. So the merge reverses. Code has to be traceable back to the document that generated it, and the two change in the same commit and get reviewed together.

This site enforces that with a commit hook. A chapter cannot be committed unless the evidence that the process ran exists for it. Same repository, same commit, same review. No state where the prose changed and the record did not.

Brooks's rule is unchanged. What changed is who owns the house. Code was the owner and documentation the tenant. Now it is the other way round.

## Purpose does not fit in the syntax

The deepest line in the chapter is that as well as describing how something is done, the reason it is done that way has to be stated, and that even the syntax of a high level language cannot express purpose.

The temptation when writing a comment is to say what the code does, because that is easy to write and easy to check against the code. Why it is done this way cannot be read out of anything. It involves the business background, the choices available at the time, what was rejected and the constraints that applied.

So most comments are worthless. They translate the code into English and add nothing. The valuable ones explain purpose, and those are the rarest.

Meari-Prototype extend the claim to prompts and the extension holds. A prompt can express a requirement. It cannot express the weight of the requirement. What violating it costs, when an exception is fine, what happens to me if this is wrong. That weight lives in my situation, and the reason it cannot be written out completely is not that I am lazy. It is that I am not fully aware of how much detail my own situation contains.

Put next to Vyssotsky from the last chapter, the pair gives a complete statement. Failure comes from the places lacking precise definition. Purpose cannot be precisely defined, because it lives in the situation rather than in the language. So a source of failure will always exist, because the most important information can never be fully expressed.

That is not pessimism. It is the reason the only engineering answer is a person stationed where the standard gets read, and it is why writing the standard out in full is a road that never ends.

## The face I keep neglecting

Chapter ten ends by saying this chapter is about the face that points at people, and that I had been feeding the other one. Here is the fair scorecard.

I have been good at this in one place. The reader facing rules on this site are written down as decisions with reasons attached. Cards in a list are all the same height, held by fixing how many lines each part gets rather than hoping the copy behaves, because a row of cards at different heights reads as broken rather than as varied. Body text is justified with automatic hyphenation, which only works if the page says what language it is in, and justification switches off on a narrow screen because a short line cannot be justified without looking broken. A chapter page is deliberately the same width and grid as a post, so nobody crosses a layout boundary mid read.

Every one of those is the other face, and every one is recorded with its reason rather than just its rule.

And I have been poor at it everywhere else. My source files, ledgers and findings are precise and nobody would enjoy them. They are written for the next session, which is a reader with infinite patience and no taste. The machine facing side of my documentation got cheap and good. The person facing side has not moved, and nothing about an agent helps with it, because the whole point is holding a reader's perspective.

## No loop for the reader

I write the why down rather than the what. If a note could be replaced by reading the code, it does not get written.

The reader is what I have no mechanism for. Everything I have built rewards writing for the next session, because that is the loop that answers in minutes. Writing for a person answers in weeks, from someone who may never tell me. No agent is going to close that one.
