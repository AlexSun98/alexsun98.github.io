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
description: "How to build an agentic coding system that can stop itself: the harness that runs the lifecycle, the knowledge layer that decides what an agent may believe, and the teams around both, which are not a separate problem."
---

A production line is only worth its speed because it can halt itself. This book
is about building a coding system that works the same way, and about the two
lanes that run through one: the harness that carries work from a spec to a
deploy, and the knowledge layer underneath it that decides what an agent is
allowed to believe.

The stack in the title is the technology and the organisation both. They do not
come apart, so the book does not treat them as two subjects.

It runs in three parts.

**Part I, principles.** Golden eval sets, modularity, domain driven design,
jidoka. Old ideas that matter more now, not less.

**Part II, architecture and capabilities.** The harness blueprint, context
pipelines, telemetry, and keeping the two lanes in step.

**Part III, implementation.** Repository layouts, control loops, running the
thing day to day, and real source. That is the part with the scars in it.

Written for people who have already got past the chat window and now have a
setup that mostly works, without being able to say why it fails when it fails.

It goes up a chapter at a time while it is still being written. Chapters change
under you, and the front matter on each one says whether it is a draft. The
preface is the place to start.
