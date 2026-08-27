# Outline and gap map

## Thesis

Brooks's premises about writing code have moved. His premises about shared
understanding have not, and now they bind harder, because the writing got fast
enough that everything else became the bottleneck.

## Reader

An engineer or a tech lead who already runs AI agents daily and has stopped
being impressed by generated code. They know the Brooks quote about adding
people. They do not need the book summarised. They want to know which parts
still cost them money in 2026.

## What the reader should do differently

Move the effort they used to spend writing code to the two things that now
decide throughput: writing intent down where an agent can read it, and building
verification they trust more than they trust the output.

## Structural change from v1

v1 walks all ten points of the book in order, at equal weight, each with an
invented example. That shape is why it reads as machine-written: the template
repeats, and no section has a reason to exist beyond completeness.

v2 keeps only the claims Alex has lived. Five or six sections, each anchored to
one real thing he did. The rest of the book gets a short paragraph or gets cut.
A point with no story is cut, not padded.

## Claims

Candidates. Each survives only if the interview gives it a story, a number or a
failure.

**C1. More agents is the new more people.**
Brooks's Law reappears as agent fan-out. Adding parallel agents to a task with
no clear boundary or acceptance criterion makes the task later, for the same
reason adding people did: the coordination and integration cost lands on the
person who already had the context.

**C2. The scarce resource is judgment, and it is now writable.**
The capability spread between engineers widened rather than closed. But the
judgment that used to sit in one senior head can now be written into rules,
checks and gates that an agent follows.

**C3. Conceptual integrity finally has a mechanism.**
Brooks wanted a system designed as if by one mind and had no way to enforce it.
Written conventions, glossaries and review rules give agents something to
follow, and agents follow them more patiently than people do.

**C4. Verification is the bottleneck, not generation.**
Once generation is cheap, throughput is set by how fast and how honestly you
can check the output. A check you do not trust is worse than no check.

**C5. Prototypes get mistaken for products faster than ever.**
Plan to throw one away still holds. The danger changed: the throwaway version
now looks finished.

**C6. Documentation is context, not bureaucracy.**
Docs are read by the agent on every run. That changes what a good doc is: short
enough to carry, specific enough to act on.

## Gap map

| Claim | Gap types | What it needs |
| --- | --- | --- |
| C1 | no-story, no-number, no-failure | One time Alex ran parallel agents and it cost more than doing it serially. What the fan-out was, what came back, how long the cleanup took. |
| C2 | no-story, borrowed | The specific piece of judgment he wrote down, and whether writing it down actually worked. Does an agent behave differently after the rule exists? |
| C3 | no-story, no-failure | A case where written conventions held, and a case where the agent followed the written rule straight into a wrong outcome. |
| C4 | no-number, no-failure | What his checks catch, what they miss, and one thing that got through anyway. A number on how long a verification cycle takes. |
| C5 | no-story, no-stakes | A prototype of his that was treated as finished, and what it cost. If there is none, C5 gets cut. |
| C6 | no-story, no-number | The docs he actually maintains for agents, how long they are, and evidence they change behaviour. |
| All | no-stakes | What he believed about Brooks before the reread and what changed. |

## Open, must be answered before drafting

1. Was there an original Notion page or notes behind v1, or is v1 the only
   input?
2. Are the work examples usable in public? The disclosure gate needs to know
   which employer, product and customer names can appear.
3. v1 uses generic e-commerce and food-delivery examples that appear to come
   from nowhere. Confirm they are not from Alex's own work in disguised form.
