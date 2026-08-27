# State

Slug: mythical-man-month-in-the-age-of-ai
Stage: 5 complete at the three-round cap. Draft at revision 3, published to
content/posts for local review only. Verdict still BLOCKED. Publish requires
Alex.

## Situation

v1 was published to the post branch without the skill. It is snapshotted at
`00-published-v1.md` and is being treated as source material, not as a draft to
edit. v2 is a rewrite, not a tone pass.

## Decisions taken

- v1 is tagged `[unknown]` in full. No sentence in it becomes an "I" sentence
  in v2 without an interview line.
- The ten-point structure is dropped. v2 keeps only claims with lived material,
  five or six sections.
- Two unbacked first-person sentences in v1 are marked for removal.

## Next

Gate 1: Alex agrees or corrects the thesis, the claims and the gap map in
`02-outline.md`. Then stage 3, round one interview, one question at a time,
recorded in `03-interview.md`.

## Gate 1 outcome, 2026-08-26

- No source material exists behind v1. v1 stands alone and is not trusted.
- Disclosure rule for this post: high level only. No employer, product,
  customer or ticket detail. Say what happened and what it cost, not where.
- v1's invented examples are all replaced from the interview.
- The thesis and claim C2 were written in abstract language and did not land.
  They are held open and re-tested against the interview answers instead of
  being agreed in advance.

## Where it got to

Round one ran to A11. The draft was written, the checker returned BLOCKED with
3 unsourced claims, 6 drifted claims, 2 GENERIC sections and 6 disclosure rows
pending.

Revision 2 resolved every sourcing finding by cutting back to what the interview
supports. Nothing was invented to fill a gap. The list of cuts is in
`05-claims.md`.

## Check loop, three rounds, all findings

Round 1: BLOCKED. 3 unsourced, 6 drifted, 2 GENERIC sections, 6 disclosure rows.
Tried: cutting every unsourced and drifted claim back to what the interview
supports, inventing no replacements.

Round 2: BLOCKED. 0 unsourced, 2 drifted. 9 of 11 earlier findings confirmed
resolved. The two survivors were the same invented reread motive living on in the
front matter, and the "surfaces early" synthesis returning in softer wording.
Tried: cutting both, and correcting a factual error the checker found about
Brooks and the surgical team.

Round 3: BLOCKED. 0 unsourced, 1 drifted. Both round 2 blockers confirmed gone by
grep, not merely reworded. The new drift was an aside added during the format
rewrite, "the kind of deadline that does not negotiate", which asserts a hard
deadline A2 does not contain. Cut after the round closed.

The loop is capped at three rounds and the cap is reached. Nothing further is
resolvable by revision. What remains needs Alex.

## Next, in order

1. Round two answers, Q12 to Q19 in `03-interview.md`. Two sections are still
   thin because Alex has not given a concrete instance for either: the
   decomposition section and the brief section. Cutting made them shorter, not
   better.
2. The disclosure gate. Six rows in `06-checks.md`. Alex rules keep, redact or
   generalise on each. Two need thought: the combination of the batch job, the
   account vocabulary and the API contract, and whether the AI native SDLC is
   personal work or employer work.
3. Re-run the checks. Publish only on a CLEAR verdict.
4. Then `hugo --quiet`, the cover offer, and the commit. Gate 3 before any pull
   request.

## Process note worth keeping

A11 was answered in the session and never written into `03-interview.md`. The
checker correctly flagged the sentence resting on it as unsourced. The record is
the only thing the checker can see. An answer that does not reach the file did
not happen.

## Environment note

This worktree does not carry `.claude/skills/write-post/`. The branch was cut
from `origin/main` before the skill existed, which is the reason v1 was written
without it. The skill was read from the main checkout for this run. Once the
skill reaches `main`, rebase or merge this branch so the folder is present here.
