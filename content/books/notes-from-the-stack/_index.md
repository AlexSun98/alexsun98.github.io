---
# title is the short name, used by the nav tree, the breadcrumb, the chapter
# rail and the title page heading, because the full name is 95 characters and
# wraps to four lines in all of them. fullTitle is the formal name, joined from
# title and subtitle. It goes in the browser tab, where search engines read it.
title: "Notes from the Stack"
fullTitle: "Notes from the Stack: Principles, Architecture, and Implementation for Agentic Engineering"
subtitle: "Principles, architecture, and implementation for agentic engineering"
weight: 1
status: "in progress"
accent: "var(--aqua)"
description: "How to build an agentic coding system that can stop itself: the harness that runs the lifecycle, the knowledge layer that decides what an agent may believe, and the teams and habits that have to change around both."
---

Agentic coding is moving off the chat window and onto something shaped like a
production line. Specs in, code out, checks that can stop the run. A line earns
its speed from being able to halt itself, and the checks are what buy the speed
rather than what slow it down.

This book is about building that line. Two lanes run through it. The harness
runs the lifecycle end to end, from specs, requirements and context through
generation, tests, evaluation and deploy. Knowledge engineering sits underneath
it, holding domain state and context pipelines and deciding what an agent is
allowed to believe. The top lane fails loudly, a gate goes red and a run stops.
The bottom lane does not, which is why it is the one that hurts.

The stack in the title means two things. The technology, and the organisation
around it. They are harder to separate than I expected.

It runs in three parts.

**Part I, principles.** Golden eval sets, modularity, domain driven design,
jidoka. Old ideas that matter more now, not less.

**Part II, architecture and capabilities.** The harness blueprint, context
pipelines, telemetry, and keeping the two lanes in step.

**Part III, implementation.** Repository layouts, control loops, running the
thing day to day, and real source. That is the part with the scars in it.

It is for architects, principal engineers and engineering leaders who are
already past the chat window. It is not about picking the best model, which is
the component you will replace most often.

I am writing it in the open, one chapter at a time. Chapters go up when they are
readable, not when they are finished, and the front matter on each one says
which it is.
