# Book chapters

A chapter is not a post. Same sourcing rules, same voice, different shape and a
different place on disk. Read this before drafting anything under
`content/books/`.

## Where it goes

```
content/books/<book-slug>/_index.md        the book
content/books/<book-slug>/NN-<slug>.md     a chapter
layouts/partials/covers/<book-slug>-NN-<slug>.html
```

Chapter front matter:

```yaml
---
title: "Preface"
chapter: "00"
weight: 0                                  # the ordering, not the date
date: 2026-09-14
status: draft                              # draft | published
draftSlug: notes-from-the-stack-preface    # names the drafts/ workspace
part: "I"                                  # optional, groups the contents page
description: "One sentence for the contents row and the card."
---
```

Chapters sort by `weight`. The pre-commit hook guards `content/books/` the same
way it guards `content/posts/`, and it finds the workspace through `draftSlug`,
so the workspace keeps its subject name while the file keeps its chapter name.

## The shape is different

A post argues one thing and ends on what changed. A chapter sits inside a
structure that already exists, so it has to say where it sits.

The failure this file exists to stop: drafting a chapter with a blog post's arc.
Argument, argument, argument, then the book's structure crammed into the last
paragraph, where nobody is still looking for it. It reads fine on its own and
badly as chapter three of nineteen.

### A preface

The arc that works, in order:

1. **Scene.** Something concrete that happened. No thesis yet.
2. **The borrowed idea.** What the book leans on that is not the author's, said
   plainly, with the hole in it named.
3. **Why now.** What changed in the world to make the book necessary.
4. **Why the author.** Credibility earned through a story, never claimed.
5. **The thesis.** The one sentence the reader should carry. End this section on
   it, do not save it for the close.
6. **The title, explained.** If the title carries an idea, unpack it here, not
   in the last paragraph.
7. **What the book is not.** The scope limit. What the reader should not come
   here for.
8. **How to read it.** The parts, the reader, and what will date.

A preface ends on the contract with the reader. It does not end on "what
changed", which is a post ending.

### A body chapter

1. **Where this sits.** One or two sentences tying back to the last chapter.
2. **The problem, concretely.** Something that broke.
3. **The work.** What was tried, in the order it was tried, failures included.
4. **What generalises.** The part the reader can take.
5. **What is still open.** What the author has not solved.

### What never changes

Everything in `SKILL.md` and `voice.md` applies unchanged. The claims ledger,
both grill rounds, the checker, the disclosure gate. A chapter carries Alex's
real name exactly like a post does.

## Connective tissue is still a claim

New in this file because it nearly shipped.

When a chapter is restructured, the drafter writes short sentences to join the
new sections. Those sentences feel like formatting. They are not. Watch for:

- Claims about the book's contents. "The model is the one thing this book spends
  the least time on." Nobody said that. It is a page-count claim.
- Claims about dependencies. "Part II only makes sense against Part I." That is
  an assertion about the book's structure, invented to sound helpful.
- Claims about the reader. "Most teams get this wrong." No source, no number.

Every joining sentence gets a ledger row like any other. If it has no row it
does not get written, even when it contains no "I".

Second person advice is allowed, per voice rule 7. "Read it in order" is advice.
"Part III assumes both" is a claim.

## Cross-chapter duplication

Chapters and posts on this site draw on the same notes, so the same sentence can
reach two files. Before publishing, grep the other chapters and the posts for
any distinctive phrase the new draft shares with them.

```
git grep -F "manually driving each thread forward" -- content/
```

Reword the newer one. Two pages on the same site shipping an identical paragraph
reads as padding, and a reader who finds both loses trust in the rest.

## Verifying the pre-commit hook

The hook filters staged paths by a regex. A guard that matches nothing exits
zero and looks exactly like a guard that passed. That has already happened here
once: the regex said `content/(posts|book)` while the file sat in
`content/books`, so for one commit nothing was guarded and the run reported a
pass.

Whenever the content path changes, prove three things in order, and do not
accept the third without the first two:

```
# 1. the regex reaches the file at all
printf 'content/books/<book>/<NN-slug>.md\n' | grep -E '^content/(posts|books)/.*[.]md$'

# 2. it blocks when the evidence is gone. Stage a real change first, or the
#    staged diff is empty and the test proves nothing.
mv drafts/<slug> drafts/_hidden && sh .githooks/pre-commit; echo "want exit 1, got $?"
mv drafts/_hidden drafts/<slug>

# 3. it passes when the evidence is there
sh .githooks/pre-commit; echo "want exit 0, got $?"
```

The filter is `--diff-filter=AMR`. The R matters. A chapter often arrives by
rename, and `AM` alone skips every renamed file.
