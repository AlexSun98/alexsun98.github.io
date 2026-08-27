---
title: "Is The Mythical Man-Month outdated? I reread it in the age of AI"
date: 2026-08-24
tags: ["Software Engineering", "AI", "Books"]
categories: ["Engineering"]
description: "Rereading Brooks in 2026: which of his premises AI actually changed, and which problems just came back wearing different clothes."
---

There is a saying almost every project manager has heard: "Adding people to a
late software project makes it later."

It comes from *The Mythical Man-Month*, published in 1975. Frederick Brooks
wrote it after running the OS/360 project at IBM, in a world with no cloud, no
GitHub, no CI/CD, and certainly no AI coding assistants. His judgments still
get quoted constantly.

The way I write code has changed completely. A page that used to take half a
day can now be generated in minutes. Errors I used to hunt down in
documentation, I now just ask an AI about. Tests I used to grind through by
hand, a model can at least get started for me.

So shouldn't the old questions in this book be retired by now?

I decided to reread it, focusing on the ten points that matter most to me. Not
to write a reverent summary, and not to prove Brooks was always right. The more
interesting question is: **which of his premises has AI actually changed, and
which problems have simply continued in a different form?**

## 1. The "man-month" is a dangerous myth

The unit is seductive. One person working ten months is ten man-months, so
surely ten people can do it in one month?

Not in software. Development is not hauling bricks from A to B. It is
understanding requirements, decomposing the system, defining interfaces,
managing dependencies, and stitching together code written by different people.
More people means more raw output, but also more communication and integration
cost.

Picture building an e-commerce campaign system: campaign configuration, product
pools, discount calculation, inventory locking, payment callbacks, risk checks,
dashboards. Launch is approaching, the project is shaky, so five more people
get added. The newcomers need to learn the rules. The veterans have to explain
the background. Interface boundaries get renegotiated. Some code gets written
fast, and then integration testing reveals everyone had a different
understanding of whether discounts stack.

That is Brooks's Law. It is often misread as "never add people". It is really
about timing and cost: a project that is already late usually has a complex
context, and onboarding into that context makes the existing team busier in the
short term.

AI creates a similar illusion. It used to be "more people means faster". Now it
is "more agents means faster". Without clear task boundaries and acceptance
criteria, AI just produces a pile of code that needs cleanup, faster than ever.

But I cannot leave it there, because AI is not a typical newcomer. It does not
need meetings, has no scheduling conflicts, and does not care about office
politics. For a well-scoped task (migrating an old interface to a new SDK,
filling in a batch of unit tests, normalising page styles) AI genuinely does
reduce the man-month requirement.

So the real question is not "are man-months fungible?". It is more precise:
**which tasks can AI parallelise, and which are still gated by system
boundaries and shared understanding?** Brooks never had to draw that line,
because in his world nearly everything ran through human-to-human
communication.

## 2. Key people matter more than headcount

Software is not a numbers game.

It sounds harsh, but the capability gap between individuals is enormous. Some
engineers write in a day what others cannot produce in three. More importantly,
it is not just speed. It is judgment. They know where to simplify, where not to
cut corners, and where something will blow up after deployment.

Take optimising a recommendation system. One person dives into micro-optimising
a function. The experienced person first asks: is the slowness in recall,
ranking, or network calls? Are we hitting cache? Should we be looking at
average latency or P99? Point yourself in the wrong direction and effort
becomes waste.

AI amplifies this gap. People who can decompose tasks, ask sharp questions, and
verify results get dramatically faster with AI. They know what context to
provide, how to constrain scope, and how to judge whether generated code
belongs on the main branch. People without that judgment also get faster at
producing "working" results. The problems hide in exception handling,
permission boundaries, and data consistency, and surface at integration or in
production.

To be fair, AI has also raised the floor. Developers who previously could not
scaffold a project, configure tests, or navigate documentation can now clear
those hurdles.

But the scarcest resource in a software project was never the number of hands
on keyboards. It is the people who can see the problem clearly and steer the
system in the right direction.

## 3. Why schedules are always optimistic

It is not that anyone plans recklessly. It is that "the code is written" is too
easily mistaken for "the feature is done".

A refund feature looks simple in development: call the refund API, update the
order status, log the transaction, notify the user. Then, right before launch,
the questions arrive. How are partial refunds calculated? Do failed refunds
retry? What about duplicate callbacks from the payment channel? Can shipped
orders be refunded? Which status does finance reconcile against? Does the
support console show the same thing the user sees?

None of these are impossible to write. They just eat time.

AI makes this optimism more subtle. Describe a requirement and it rapidly
produces interfaces, schemas, pages, and test cases. Once something is running
on screen, it is natural to feel "we are basically there". But "basically
there" is still a long way from production.

On the other hand, AI really has changed the internal shape of a schedule.
Projects used to spend a lot of time on the "writing" part. Now research, code
generation, tests, and migration scripts can all be compressed. For small,
well-defined requirements, delivery genuinely goes from days to hours.

The time saved should not just be crossed off the plan, though. It should be
reallocated to the unpredictable parts: edge cases, historical data, external
systems, access boundaries, canary strategies, and production verification. The
progress bar moves faster in the first half, which makes the second half even
harder to ignore.

## 4. System testing is not the final step

Brooks warned long ago: a module that runs on its own says nothing about
whether the system runs.

That still stings. The order module assumes the price is locked. The discount
module assumes it can be recalculated. The payment module assumes the amount is
immutable. Risk control might block the transaction entirely. Each module is
sensible in isolation. Together, they conflict.

System testing is expensive precisely because it does not test whether one
function is correct. It tests whether different modules' assumptions can
coexist.

AI excels at generating individual pieces: coupon validation, order state
machines, admin pages, API mocks. Combine several AI-generated modules, though,
and you get inconsistent field semantics, error-code styles, and assumptions
about state transitions. That is not fixed by prompting the model for a couple
more lines of business logic.

The flip side: AI has made testing feel like less of a chore for the first
time. It can backfill tests from legacy logic, generate boundary cases, write
mocks, even turn a production incident into a regression test. Teams that used
to complain about the cost of testing have one less excuse.

The faster AI gets, the more testing matters. Unit tests cover the parts,
integration tests cover the collaboration, end-to-end tests cover the critical
path, and monitoring covers reality. AI-assisted programming without a
verification system just produces uncertainty faster.

## 5. Conceptual integrity beats feature accumulation

Brooks insisted a system should be designed as if by one mind. It can be large,
but it cannot be a patchwork.

I have watched this play out. A SaaS backend starts with just user management.
Then come permissions, org structures, approval workflows, reports and
notifications, each built by a different team, each to their own understanding.
Eventually some screens say "Members" and others say "Users". Some roles are
"Administrators" and others "Owners". Some filters persist and some vanish on
refresh.

Every feature exists. The experience is in pieces.

AI aggravates this. Ask it for a form, it writes a form. A list page? Done.
Another endpoint? Sure. Without a unified product language, component
standards, data model, and interaction principles, it produces lots of things
that are fine alone and wrong together.

But AI can also work the other way. If the team has a design system, component
library, API conventions, and a glossary, AI will follow them more patiently
than any human. It never decides it wants to restyle a button, and it never
invents a new concept because it is in a hurry.

The precondition is that you have to write the "unity" down first. Code can be
generated. Conceptual integrity does not emerge from randomness.

## 6. The second-system effect

Brooks said the second system is the most dangerous one.

The first system is usually restrained: limited resources, limited experience,
everyone focused on shipping what matters. By the second version, the team has
experience and confidence, and every idea that did not make it into v1 gets
stuffed in.

The second version is not more mature. It is just heavier.

An ops configuration backend starts by configuring campaign names, dates,
products, and discounts. It ships. It solves the problem. Then v2 begins. Can
we support dynamic rules? Multi-level approvals? Abstract it into a generic
campaign engine? Make it pluggable? Each idea is reasonable alone. Together,
the backend becomes a hybrid of rules engine, permission matrix, dynamic forms,
approval flows and plugin system, and then nobody dares touch it.

AI makes the second-system effect easier to fall into, because "add one more
feature", "extract one more generic layer" and "build one more configuration
system" all *look* cheaper now. But cheap code generation does not make
complexity cheap to maintain.

Then again, AI has also made trying things cheap. A generic rules engine used
to be a commitment nobody could back out of once it started. Now you can build
a thin prototype, run it against real scenarios, and *then* decide whether it
deserves to become a platform capability.

The engineering judgment is not whether you *can* make it more generic. It is
whether you can hold back. Once the requirements are actually stable, it is
never too late to abstract.

## 7. No silver bullet

Brooks later wrote *No Silver Bullet*. Strictly speaking it was not a chapter
of the original book, but the two are now inseparable. Its claim: no single
technology will suddenly improve complex software projects by an order of
magnitude.

The reason is that software has two kinds of complexity.

**Accidental complexity**: verbose syntax, painful environments, repetitive
code. The suffering that comes with *writing* code, unrelated to the business
itself. AI is visibly eating this cost. Arguably for the first time, a class of
tools is consuming accidental complexity at scale.

**Essential complexity**: intricate business rules, hard-to-draw system
boundaries, changing requirements, inconsistent understanding across a team.

Building a food-delivery subsidy system, the hard part was never coding "$5 off
orders over $30". It is city-level strategies, new-versus-returning customer
rules, membership benefits, merchant and platform cost-sharing, discount
stacking, financial reconciliation, and arbitrage prevention. No tool
deficiency caused those.

AI can write you a sample rules engine. It will not tell you which subsidy
model fits your business goals, and it will not make the trade-offs on behalf
of finance, operations, and risk.

If "silver bullet" means eliminating all complexity, AI obviously is not one.
If it means dramatically reducing one *category* of complexity, AI is closer
than most tools that came before. It is not just a better editor. It
restructures the cost of requirement clarification, code generation, test
coverage, and knowledge retrieval.

Maybe the accurate framing is: **AI is not a silver bullet for software
engineering, but it may be heavy artillery against accidental complexity.** It
solves a large chunk of "how to write", and pushes "what to write, why, and to
what standard" into sharper relief.

## 8. Plan to throw one away

*The Mythical Man-Month* advises: plan to throw away a version, because you
will anyway.

It sounds wasteful. It is actually honest. Many requirements only reveal their
flaws once built. Things that look settled in a document deform on contact with
real users.

Building an AI customer-service bot sounds smooth in theory: user asks, AI
answers, complex cases escalate to humans. The first version reveals reality.
Users phrase things chaotically, the knowledge base is uneven, the AI is
sometimes overconfident, and the support team does not fully trust it.

That first version is not a failure. It is the first time the team truly *sees*
the problem.

AI has made prototypes cheap. What took two weeks can now appear in two days.
Cheapness has a side effect: prototypes get mistaken for products more easily.
The AI-generated pages run, the endpoints respond, the demo is smooth, and
permissions, security, exception handling, performance, and maintainability may
all be missing.

Prototypes are for learning. Products are for bearing responsibility. Do not
confuse them.

What AI has genuinely changed is feedback speed. A team that used to argue over
a design for two weeks can now build two versions in a day and put them in
front of support, ops, or real users. The first version may still get thrown
away, but earlier, cheaper, and possibly several at once.

The important thing is not to enshrine the experiment.

## 9. The surgical team

One of the book's most controversial ideas is the surgical team. Brooks argued
that complex projects may not suit fully egalitarian design participation.
Better, perhaps, for a small number of core people to hold the system's
direction while others support them.

It sounds undemocratic, but it is not about status. It is about design
consistency.

In a collaborative-docs product, if the editor, permissions, comments,
notifications, and version history are each designed independently, collisions
arrive fast. Should comments follow a paragraph when it moves? Do share links
break when permissions change? Does a version rollback affect comment state?
These need one unified judgment.

AI gives this idea a new reading. A strong engineer with AI is, in some sense,
already leading a small team. The AI researches, writes boilerplate, backfills
tests, tweaks UI details. The "chief surgeon" still matters, because AI
executes local tasks well but has no idea what the system should look like in
six months. Which requirements to refuse, which complexity is worth admitting,
which abstractions will become debt: those calls remain human.

But AI also makes the core designer's role less sealed off. Their judgment used
to be tacit, and everyone waited for the sign-off. Now the principles,
constraints, and review standards can be written into docs, tests, and prompts,
so more people can work to the same judgment *through* the AI. Design intent
stops being implicit knowledge in one head and becomes context that can be
read, cited, and checked.

Teams may get smaller and more distributed. The design core will not disappear,
but it has to become transferable.

## 10. Documentation is not bureaucracy

Most people hate writing docs, and I get it. Docs go unread, drift out of sync
with the code, and sometimes exist purely to look "process-compliant".

Brooks valued documentation because it is the carrier of shared team
understanding. Without it, the same questions recur forever. What does this
field mean? Does this call retry on failure? Why was this rule designed this
way? Is this constraint a business requirement or historical baggage? When the
answers live in one person's head, the team pays the same communication cost
over and over.

With AI, documentation deserves even less to be treated as a burden, because
docs are not just for people anymore. They are for the AI. When you ask an AI
to modify a system, it needs to know module responsibilities, interface
contracts, business rules, core tests, and design principles. Without them, it
can only guess from the code.

Architecture decision records, domain glossaries, interface contracts,
runbooks: things that once felt "heavy" are becoming **context assets**.

AI is also changing the cost of documentation itself. Docs used to be squeezed
out of people by force and were painful to keep current. Now the AI can draft
from code, commit history, tests, and incident retros, with humans confirming.

Good documentation is not a status report. It is the working memory a team
leaves for itself, and for its AI.

## Closing

Looking back, the most impressive thing about *The Mythical Man-Month* is not
any technical prediction. It is that Brooks captured the parts of software
projects that tools struggle to erase.

Requirements change. Systems couple. Communication costs. Quality needs
verification. Teams need shared understanding. The stronger the tools, the less
these problems disappear on their own.

Calling AI a mere "accelerator" undersells it. It has genuinely changed some of
Brooks's premises: context can be read faster, code generated cheaper, tests
completed more easily, prototypes validated earlier. These are not minor
adjustments.

They just did not turn software engineering into a code-generation problem.

The faster you can write code, the more visible the truly scarce things become:
problem definition, a sense of boundaries, quality awareness, architectural
judgment, and a bit of restraint.

So, is *The Mythical Man-Month* outdated?

As a set of lessons from 1970s mainframe projects, of course it is. As a book
about complex collaboration, this might be exactly the right moment to reread
it.

Because AI has raised our execution speed, it has put an old question back in
front of us:

**Can we upgrade our judgment and our engineering discipline to match?**
