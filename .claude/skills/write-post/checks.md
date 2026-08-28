# Checks

Run by a fresh agent that has not seen the drafting conversation. Fresh eyes are
the point. An agent that just wrote the draft cannot see what is missing from
it.

Write all findings to `06-checks.md`. Do not fix anything during the checks.
Finding and fixing in the same pass produces quiet edits nobody reviews.

## Pass 1: sourcing

The defence against invented experience.

1. List every sentence in `04-draft.md` containing "I", "my", "me" or "we".
2. For each one, find its row in `05-claims.md`.
3. Flag as `UNSOURCED` any that has no row, or whose row points at a line that
   does not exist in `03-interview.md` or `01-source.md`.
4. Flag as `MISATTRIBUTED` any first-person sentence whose row points at a block
   tagged `[research]`. Research is never something Alex did.
5. Flag as `UNCITED` any factual claim taken from research that has no
   attribution in the text and no entry in References.
6. Flag as `DRIFTED` any sentence whose ledger row exists but says something
   materially different from the sentence. Paraphrase is fine. New facts are
   not.

Any `UNSOURCED`, `MISATTRIBUTED` or `DRIFTED` finding blocks publish.

## Pass 2: voice

Read `voice.md` first, then the draft.

Mechanical checks, cheap and absolute:

- The em dash character and the section sign. Both banned. Zero tolerance.
- Banned words from the list in `voice.md`.
- Filler openers: "This post describes", "In this article", "Let's dive in",
  "It's important to note".
- More than two bold spans in one paragraph.
- Any exclamation mark in prose.

Judgement checks, one verdict per section:

- Could only Alex have written this section? If any competent writer with the
  same research could have produced it, mark the section `GENERIC`.
- Does the section contain a concrete noun, a number, or something that
  happened? If not, mark it `ABSTRACT`.
- Does any paragraph make a claim with no qualifier and no concession? Mark it
  `OVERSOLD`.
- Read the last paragraph. If it restates the headings, mark it `SUMMARY-END`.

`GENERIC` and `ABSTRACT` sections become round two questions. They do not block
publish on their own, but a post where more than half the sections are `GENERIC`
should go back to round two before anything else happens.

## Pass 3: disclosure gate

Alex works at Reckon. This gate exists so work material does not leak onto a
public site under his real name.

Scan the draft and the front matter for:

- Ticket keys. Pattern: two or more capitals, a hyphen, digits. `RWR-18263` and
  anything shaped like it.
- Employer and client names, and product names that are not public.
- Colleague names, and any first name attached to a work anecdote.
- Internal URLs and hostnames: anything not reachable from the public internet,
  internal wikis, Jira and Confluence links, private repository names.
- Real production numbers: revenue, customer counts, error rates, incident
  detail, dates of unreleased work.
- Screenshots or code blocks holding internal identifiers, connection strings,
  account IDs or bucket names.

Report every hit as a row: the line, the matched text, and why it is a concern.

Alex resolves each hit as `keep`, `redact` or `generalise`. Record the decision
next to the row. Publish is blocked while any hit is unresolved.

Do not decide on Alex's behalf. A name that looks public may not be, and a name
that looks internal may be fine. Ask.

## Output shape

`06-checks.md`:

```
## Pass 1: sourcing
- BLOCKING UNSOURCED  line 41  "I ran this on my own repo for a week"  no ledger row
- ok                  line 58  "I did not test the multi-agent variant"  -> A12

## Pass 2: voice
- section "Why it matters"  GENERIC   nothing here is specific to Alex
- line 12  banned word  "comprehensive"

## Pass 3: disclosure
- line 77  "RWR-18263"  internal ticket key  -> decision: pending

## Verdict
BLOCKED: 1 unsourced claim, 1 unresolved disclosure hit
```

End with a one-line verdict: `CLEAR` or `BLOCKED` plus the count of each
blocking finding. Never report `CLEAR` while any blocking finding is open.
