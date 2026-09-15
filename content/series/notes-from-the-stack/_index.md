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
description: "How to build an agentic coding system that can stop itself, the harness that runs the end-to-end lifecycle, the knowledge layer that decides what an agent may believe, and the teams around both, which are not a separate problem."
---
A production line is only worth its speed because it can halt itself. This series is about building an agentic coding system that works the same way with some mental frameworks, and about its architecture of the two lanes that run through one, the harness that carries work from an idea to a deliverable via AI-driven end-to-end SDLC pipeline, and the knowledge layer underneath it that decides what an agent is allowed to believe, which I called it the agentic knowledge foundation.

The stack in the title is the technology and the organisation both. They do not come apart, so it does not treat them as two subjects.

It runs in three parts.

**Part I, principles. The why and the mental frameworks.** Fifty years of software engineering did not
stop counting when agents arrived. It started counting for more, because an
agent runs the fundamentals faster in whichever direction you point it. I will systematically analyze today’s most defining methodologies and practices in agentic engineering.
After contrasting and integrating these mental frameworks, then I'll dive deep into Harness Engineering, the discipline of building secure, controllable execution environments for AI coding agents, and examine practical strategies for orchestrating agentic workflows using Kanban. Ultimately, this roadmap equips you to build your own robust AI-driven development ecosystem.

**Part II, system architecture and capabilities. The how.** Harness design,
context engineering, orchestration patterns and the toolchain around them. This
is where the two lanes get drawn properly: the top lane running the delivery
loops from spec to deploy, the bottom lane holding knowledge, retrieval and
state.

**Part III, implementation. The what.** Repository layout, the harness assembled
a step at a time, control loops, running it day to day, and real source. Most
writing on this stops at a prompt. This part is the working thing, and it is
where the scars are.

Written for people who have already got past the chat window and now have a setup that mostly works, without being able to say why it fails when it fails.

It goes up a chapter at a time while it is still being written. Chapters change under you, and the front matter on each one says whether it is a draft. The preface is the place to start.
