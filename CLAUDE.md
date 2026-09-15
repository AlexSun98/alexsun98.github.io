# Working notes for this site

## Posts go through the write-post skill

Any new post, or any rewrite of an existing post, runs through
`.claude/skills/write-post/`. Do not freehand a post into `content/posts/`.

The reason is narrow. Research notes and outlines carry ideas, not experience.
A model asked for a first-person post without an interview will invent the
first person, and this site carries my real name. The skill exists to mine me
for the real material and to block any "I" sentence that nothing backs.

If `.claude/skills/write-post/` is missing from the working tree, stop and say
so. Do not write the post anyway.

That happens more often than it should. Skills are versioned content, so a
branch cut before the skill was committed does not have it. New worktrees
branch from `origin/main` by default, so any skill that has not reached `main`
is invisible inside them. Check for the folder before you start, not after.

## Post workspaces

Work in progress lives in `drafts/<slug>/`, which is gitignored. The claims
ledger (`05-claims.md`) and the checker findings (`06-checks.md`) are the proof
that the skill ran. A pre-commit hook refuses a post commit when they are
missing.

Enable the hook once per clone:

```
git config core.hooksPath .githooks
```

## Series

Long-form work lives in `content/series/<series-slug>/`, one file per chapter,
ordered by the zero padded `chapter` in the front matter. Not by `weight`:
Hugo's `ByWeight` treats `weight: 0` as unweighted and sorts it last, so chapter
00 ends up at the bottom. On the shelf, series sort pinned first and then by
`weight`. A series' own page is its table of contents and the
`/series/` page is the shelf. Layouts are in `layouts/series/`.

A chapter runs through the write-post skill exactly like a post does, and
`.claude/skills/write-post/chapters.md` covers what is different about drafting
one. The pre-commit hook guards `content/series/` as well as `content/posts/`,
and finds the drafts workspace through the `draftSlug` front matter key.

A chapter page is the same width and the same three column grid as a post.
`assets/css/series.css` adds the chapter tree, the sticky rail and the shelf, and
deliberately overrides no widths or type sizes from `post.css`. Keep it that
way: a reader moving between a post and a chapter should not cross a layout
boundary.

Cards in a list are all the same height, and that is held by fixing how many
lines each part gets, not by hoping the copy behaves. On the series shelf the
title and subtitle are one line, the description is always exactly two, clamped
when it runs long and padded when it runs short, and the jump row never wraps.
Apply the same rule to any new card: decide the line count, then clamp to it. A
row of cards at different heights reads as broken rather than as varied.

Body text in `.md` is justified with automatic hyphenation, set in `post.css`.
Hyphenation depends on `lang="en"` in `baseof.html`. Code blocks, tables and
headings stay ragged right, and justification switches off under 640px, where
the line is too short to justify without looking broken.

## Style

`.claude/skills/write-post/voice.md` holds the voice rules and the banned word
list. They apply to every markdown file here, not only to posts. No em dash and
no section sign anywhere.

## Git

Personal identity for this repo. No AI co-author trailer in commits. Push with
the `AlexSun98` GitHub account.
