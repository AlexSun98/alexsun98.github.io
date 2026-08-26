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

## Style

`.claude/skills/write-post/voice.md` holds the voice rules and the banned word
list. They apply to every markdown file here, not only to posts. No em dash and
no section sign anywhere.

## Git

Personal identity for this repo. No AI co-author trailer in commits. Push with
the `AlexSun98` GitHub account.
