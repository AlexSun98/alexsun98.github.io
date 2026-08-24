# Design: the write-post skill

Date: 2026-08-24
Status: approved, ready to build

## Problem

Draft material lives in Notion notes and research notes. Turning it into a post
on this site currently means writing the whole thing by hand, or asking a model
for a draft and getting back competent, faceless explainer prose.

The faceless result is not a prompt problem. Research notes hold ideas, not
experience. First person cannot be synthesised from a source that does not
contain it. The only place the personal material exists is in Alex's head, so
the pipeline has to mine the human, not the notes.

There is a second problem that follows from the first. A model asked for a
first-person post will invent first-person claims. On a public blog under a
real name, invented experience is the worst possible failure.

## Two things that get called "voice"

Keep them apart, because they come from different places and change at
different rates.

- Voice DNA: how Alex writes. Short declaratives, dry understatement, warmth,
  plain words. Stable across posts. Derived once from the site, stored in a
  file, edited by hand as it improves.
- Experience payload: what only Alex knows. What he ran, what broke, the number
  that surprised him, what he believed before. Different for every post. Comes
  from an interview.

## Source separation

Two input types that must never blend.

- `[mine]`: Alex's own thinking, usually from Notion. Can become an "I"
  sentence.
- `[research]`: other people's work. Must carry attribution and land in a
  References section. Never becomes an "I" sentence.

Blocks are tagged at intake. The tag is what stops a research idea appearing in
the post as something Alex did.

## Pipeline

Six stages, resumable. State lives in `drafts/<slug>/00-state.md`.

1. Intake. Pull the Notion page and any local research notes. Write
   `01-source.md` with every block tagged `[mine]`, `[research]` or `[unknown]`.
   Ask about anything unknown.
2. Outline and gap map. Extract the thesis, the three to six claims that carry
   it, the reader, and what changes for that reader. Then mark what each claim
   lacks: `no-story`, `no-number`, `no-failure`, `no-stakes`, `borrowed`.
   Human gate: Alex confirms the thesis before any interview time is spent.
3. Grill round one. Interview driven by the gap map, not a fixed questionnaire.
   One question at a time. Answers stored verbatim with line IDs, because the
   phrasing is voice data as well as content.
4. Draft. Every first-person sentence cites an interview line or a `[mine]`
   source line. The citation is recorded in `05-claims.md`.
5. Checks. A fresh agent with no drafting context runs three passes: sourcing,
   voice, and a disclosure gate for employer-identifying detail.
6. Grill round two and publish. Round two asks only about sections the checker
   called generic or unsourced. Revise, re-check, then front matter, build, and
   hand off to the create-pr skill.

## Why two grill rounds

You cannot know which parts of a post are hollow until you read the draft. One
pre-draft round gets the raw material. The checker then finds the paragraphs
that still read like anyone could have written them, and round two asks only
about those. This is the difference between a post with a personal opening and
a post that is personal all the way through.

## The claims ledger

`05-claims.md` holds one row per first-person claim: the sentence, and the
interview line or source line it came from. The checker fails any "I", "we" or
"my" sentence with no row.

Without the ledger this skill is a nicer prompt. The ledger is the whole
defence against invented experience.

## Disclosure gate

Alex works at Reckon. Posts that draw on work experience can leak things that
should not be public. The gate scans for client names, internal ticket keys,
colleague names, unreleased product behaviour, real production numbers, internal
URLs and internal repository names. Each hit is listed. Alex approves or
redacts each one. Publish is blocked while any hit is open.

## Files

Skill, tracked in git:

```
.claude/skills/write-post/
  SKILL.md        stages, gates, resume rules
  voice.md        voice DNA, hand editable
  interview.md    question banks keyed by gap type
  checks.md       sourcing, voice and disclosure checklists
```

Workspace, gitignored:

```
drafts/<slug>/
  00-state.md     stage pointer
  01-source.md    tagged source material
  02-outline.md   thesis, claims, gap map
  03-interview.md answers, verbatim, line IDs
  04-draft.md     the post in progress
  05-claims.md    claims ledger
  06-checks.md    checker findings
```

## Decisions and the options rejected

- One staged skill, not one skill per stage. A grill session on a real post
  takes half an hour. Alex will stop partway. Resume has to be one command.
- Not the Workflow tool. Workflows run in batch with no human in the loop, and
  the human in the loop is the entire point.
- Working files gitignored, not committed. Raw interview answers and unfinished
  thinking do not belong in a public repository.
- Voice DNA derived from the site, not written from scratch. The voice on
  `about.md` and `content/mirana/_index.md` is already distinct. Alex adds one
  instruction on top: talk like a simple, warm person.

## Done

Not "the skill exists". Done is one real Notion note carried through all six
stages, checks green, and Alex reads the result and says it sounds like him.

## Known risks

- Voice DNA derived from three short pages is thin. It should get better after
  two or three posts, and the file is meant to be edited by hand.
- Grill round one costs Alex twenty to forty minutes per post. That is the price
  of the voice. There is no way around it.
- The Notion MCP token was invalid on 2026-08-24. Intake supports a Notion
  markdown export file and a paste fallback so the pipeline is not blocked on
  it.
