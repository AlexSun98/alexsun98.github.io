---
name: write-post
description: Turn a Notion draft or research notes into a first-person post for this blog. Runs intake, an outline with a gap map, two grill interviews, a sourced draft, and a fresh-eyes check with a disclosure gate before publishing. Use when the user wants to write, draft or publish a blog post, or points at a Notion page or notes to turn into a post.
---

# Write a post

Research notes hold ideas. They do not hold experience. A model given notes and
asked for a first-person post will invent the first person, and this site
carries Alex's real name. So this skill mines the human for the personal
material and refuses to ship a first-person claim that nothing backs.

Six stages. Resumable. The human is in the loop at three gates.

## Invocation

- `/write-post <notion-url>` starts a new post from a Notion page.
- `/write-post <path>` starts from local notes.
- `/write-post <slug>` resumes an existing post.

If a `drafts/<slug>/` folder already exists, read `00-state.md` and continue
from the stage it names. Never restart a post that has interview answers in it.

## Workspace

Everything in progress lives in `drafts/<slug>/`, which is gitignored.

```
00-state.md      current stage, decisions taken, what to do next
01-source.md     source material, every block tagged by origin
02-outline.md    thesis, claims, reader, gap map
03-interview.md  questions and verbatim answers, with line IDs
04-draft.md      the post
05-claims.md     claims ledger
06-checks.md     checker findings and disclosure decisions
```

Update `00-state.md` at the end of every stage. Alex will stop partway through
and come back days later.

## Stage 1: intake

Get the source material in, and tag where every piece came from.

Notion, in order of preference:

1. The Notion MCP tools, `API-post-search` then `API-retrieve-page-markdown`.
   Read only. Never write back to Notion.
2. A Notion markdown export that Alex saves into the drafts folder.
3. Paste into the chat.

If the MCP call returns 401, say so plainly and offer options 2 and 3 rather
than retrying.

Local research notes: read the paths Alex gives.

Then write `01-source.md`. Every block carries a tag:

- `[mine]` Alex's own thinking. Can become an "I" sentence later.
- `[research]` someone else's work. Carries a source URL. Never becomes an "I"
  sentence.
- `[unknown]` cannot tell.

Ask Alex about every `[unknown]` block before moving on. This tagging is what
stops a borrowed idea appearing in the post as something Alex did.

## Stage 2: outline and gap map

Read the source. Write `02-outline.md` with:

- The thesis, one sentence.
- The three to six claims that carry it.
- Who the reader is and what they already know.
- What the reader should do differently after reading.
- The gap map: for each claim, what it lacks.

Gap types: `no-story`, `no-number`, `no-failure`, `no-stakes`, `borrowed`.
Defined in `interview.md`.

**Gate 1.** Show Alex the thesis, the claims and the gap map. Get agreement
before spending his time on an interview. If the thesis is wrong, the whole
interview is wasted.

## Stage 3: grill, round one

Read `interview.md` and follow it. Use the `grilling` skill for the stance if
available.

One question at a time. Questions come from the gap map, not from a generic
questionnaire. Answers go into `03-interview.md` verbatim with line IDs.

Stop when every claim has a story, a number, a failure, or an explicit "I have
not tested this" from Alex. Report any gap still open.

## Stage 4: draft

Read `voice.md`, then `01-source.md`, `02-outline.md` and `03-interview.md`.

Write `04-draft.md`. The hard rule:

> Every sentence containing "I", "my", "me" or "we" must cite an interview line
> ID or a `[mine]` source line, recorded as a row in `05-claims.md`.

If a sentence needs a citation you do not have, do not write the sentence. Add
the gap to `00-state.md` and raise it.

Research claims get attribution in the text and an entry in a References
section at the end, matching the style of the existing posts.

Structure follows the site: a short opening that lands the stakes, H2 sections
that become the table of contents, code blocks only where the code is real, and
a closing section on what changed rather than a summary.

## Stage 5: checks

Spawn a fresh agent with no drafting context. Give it `checks.md`, the draft,
the ledger, the interview and the source. It runs three passes: sourcing, voice,
and the disclosure gate. Findings go to `06-checks.md`.

**Gate 2.** Walk Alex through every disclosure hit. He decides `keep`, `redact`
or `generalise` on each. Do not decide for him.

Publish stays blocked while any sourcing finding or any disclosure hit is open.

## Stage 6: grill round two, then publish

Round two asks only about sections the checker marked `GENERIC` or `ABSTRACT`,
and about anything `UNSOURCED`. Show Alex the flagged paragraph, then ask. Cap
at eight questions.

Revise the draft, update the ledger, re-run the checks. Cap the whole loop at
three rounds. If the verdict is still `BLOCKED` after three, stop and report
what is failing and what each round tried. Never weaken a check to reach a clear
verdict.

Once the verdict is `CLEAR`:

1. Write the post to `content/posts/<slug>.md` with front matter:

   ```yaml
   ---
   title: "Sentence case, no trailing period"
   date: YYYY-MM-DD
   tags: ["free form", "several"]
   categories: ["AI"]        # keep to AI, Engineering, Meta
   description: "One sentence for post cards and search results."
   pinned: true              # optional
   ---
   ```

2. Run `hugo --quiet`. It must build with no errors.
3. Draw the cover at `layouts/partials/covers/<slug>.html`. Read `cover.md` and
   work through it in order: name the idea in one sentence, list the objects the
   argument actually leans on, pick three to five, decide the relation between
   them, then draw to the house style and run the checks in that file. The
   procedural fallback works, so a cover is optional. A cover that illustrates
   the title instead of the claim is worse than no cover.
4. Commit on a branch named `post/<slug>`.

**Gate 3.** Ask Alex before opening a pull request. Never open one unprompted.
When he says yes, hand off to the `create-pr` skill, which owns the title
format, the body template and the squash merge.

## Rules that hold across every stage

- Never invent a first-person claim. Missing citation means the sentence does
  not get written.
- Never blend `[research]` into an "I" sentence.
- Never report a stage complete with a gap still open. Say what is open.
- The cover argues the post's claim, not its title.
- No em dash, no section sign, anywhere.
- Notion is read only.
- The checker never edits. The drafter never grades its own work.
