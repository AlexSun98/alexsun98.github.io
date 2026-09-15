---
# title is the short name, used by the nav tree, the breadcrumb, the chapter
# rail and the title page heading, because the full name is 95 characters and
# wraps to four lines in all of them. fullTitle is the formal name, joined from
# title and subtitle. It goes in the browser tab, where search engines read it.
title: "Notes from the Stack"
fullTitle: "Notes from the Stack: Principles, Architecture, Implementation, and Coordination for Agentic Engineering"
subtitle: "Principles, architecture, implementation, and coordination for agentic engineering"
weight: 1
status: "in progress"
accent: "var(--aqua)"
description: "How to build an agentic coding system that can stop itself, the harness that runs the end-to-end lifecycle, the knowledge layer that decides what an agent may believe, and the teams around both, which are not a separate problem."
---
A production line is only worth its speed because it can halt itself. This series is about building a coding system that works the same way.

Two lanes run through it. The top lane is the harness, carrying work from an idea to something delivered, through an AI-driven pipeline that covers the whole lifecycle. The bottom lane decides what an agent is allowed to believe. I call it the agentic knowledge foundation.

The stack in the title is the technology and the organisation both. They do not come apart, so the series does not treat them as two subjects.

It runs in several parts.

**Part I, methodologies and mental frameworks.** Fifty years of software engineering did not stop counting when agents arrived. It started counting for more, because an agent runs the fundamentals faster in whichever direction you point it. This part works through the methodologies people are using in agentic engineering now, sets them against each other, and keeps what holds. Ways of thinking about the work, before any of it touches a tool. By the end you should be able to build your own.

**Part II, tools and technical capabilities.** The bridge from methodology to daily practice. Anthropic's official plugins for putting domain knowledge and engineering workflows into agents. Understand-Anything for building code knowledge graphs. Modern UML for reading and parsing a codebase an agent wrote. Refactoring methods meant for code written alongside a model. Go toolchains built for this way of working. autoreview and Crabbox for automated code review and remote verification.

**Part III, system architecture, design and implementation.** The two lanes, drawn properly and then built. The top lane runs the delivery loops from spec to deploy. The bottom lane holds knowledge, retrieval and state. Harness design, context engineering, repository layout, control loops, running it day to day, and real source. Most writing on this stops at a prompt. This is the part with the scars in it.

**Part IV, human and AI coordination.** Still taking shape. Self-evolving coding agents, making the work visible, how a team actually uses this, what an organisation has to change, and what happens when you scale past one person. I will say which of it I have done and which I am guessing at.

Written for people who have already got past the chat window and now have a setup that mostly works, without being able to say why it fails when it fails.

It goes up a chapter at a time while it is still being written. Chapters change under you, and the front matter on each one says whether it is a draft. The preface is the place to start.
