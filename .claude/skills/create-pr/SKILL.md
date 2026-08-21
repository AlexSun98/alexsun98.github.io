---
name: create-pr
description: Open a well-formatted pull request for this Hugo blog. Use when the user asks to create a PR, open a pull request, ship a change, or publish work on a branch.
---

# Create a PR

Every change to this site goes to `main` through a pull request with a
consistent shape: one branch per change, conventional title, templated body,
squash merge. That keeps `main` history one clean line per change.

## Preconditions

1. Work must sit on a branch, never on `main`. If the change is still on
   `main` or uncommitted, create a branch first: `git checkout -b <branch>`.
2. `hugo --quiet` must build with no errors. Run it before opening the PR.
3. `gh auth status` must show the AlexSun98 account.

## Branch naming

`<type>/<short-slug>` in kebab-case. Types:

- `post/` new or edited blog post
- `feat/` new site feature or section
- `fix/` bug fix
- `style/` visual or CSS change
- `chore/` config, tooling, dependencies

Example: `style/mirana-hero-alignment`.

## Commit and PR title format

`<type>: <imperative summary, 60 chars max>`

- Types: `post`, `feat`, `fix`, `style`, `chore` (match the branch type).
- Imperative mood: "add", "fix", "move", not "added" or "fixes".
- No trailing period.

Example: `style: align hero terminal cards on home and mirana pages`

## PR body template

```markdown
## Summary

One or two sentences: what changed and why.

## Changes

- Bullet per meaningful change, file or area first
- Example: `layouts/mirana/list.html`: move terminal card into the hero

## Testing

- [ ] `hugo --quiet` builds clean
- [ ] Checked the affected pages at http://localhost:1313

## Screenshots

Before/after images for visual changes. Delete this section otherwise.
```

## Workflow

1. Confirm the branch, build, and auth preconditions above.
2. Push the branch: `git push -u origin <branch>`.
3. Open the PR:

   ```bash
   gh pr create --base main --title "<type>: <summary>" --body-file <tmpfile>
   ```

   Write the filled template to a temp file first; do not inline multi-line
   bodies in the shell.
4. Merge with squash only, so `main` gets exactly one commit per PR:

   ```bash
   gh pr merge --squash --delete-branch
   ```

   Only merge when the user asks. GitHub Pages deploys on merge.
