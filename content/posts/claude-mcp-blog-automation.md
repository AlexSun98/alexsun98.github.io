---
title: "One-command blogging with Claude and MCP: from idea to deployed post"
date: 2026-07-10
tags: ["AI", "Claude", "MCP", "Automation"]
categories: ["AI"]
pinned: true
description: "Wiring Claude to a set of MCP servers so a single prompt drafts a post, commits it, deploys the site, and verifies the result in a real browser."
---

> Just a sample post for test, here so the post layout has something real to render.
> Replace it with your own writing.

Publishing a post on a static site is a chain of small chores: draft the
markdown, fix the front matter, commit, push, wait for the build, then click
around to make sure nothing broke. None of it is hard. All of it is friction.

With Claude and a few MCP servers, the whole chain collapses into one prompt.
This post walks through the setup.

## What MCP brings to the table

The Model Context Protocol (MCP) lets an AI assistant call external tools:
filesystem access, git, shell commands, even a browser. Claude stops being a
text generator and becomes the operator of your publishing pipeline.

For a blog workflow you need three capabilities:

- **Filesystem**: write the markdown file into `content/posts/`
- **Git**: commit and push, which triggers the GitHub Actions build
- **Browser**: open the deployed page and verify it renders

Each one is a small MCP server. Claude coordinates them.

## The pipeline, end to end

### 1. Draft

The prompt carries the topic and any constraints. Claude drafts the post and
writes it straight to disk through the filesystem server:

```bash
# what Claude effectively does
cat > content/posts/my-new-idea.md << 'EOF'
---
title: "My new idea"
date: 2026-07-10
tags: ["AI"]
---
...
EOF
```

The important part is front matter discipline. Give the model an explicit
schema (title, date, tags, description) and it stops inventing fields.

### 2. Commit and push

The git MCP server stages the file, commits with a sensible message, and
pushes:

```bash
git add content/posts/my-new-idea.md
git commit -m "Post: my new idea"
git push
```

GitHub Actions takes it from there. The Hugo build is the same one that runs
for a human commit; the agent gets no special path to production.

### 3. Verify in a real browser

This is the step most automations skip, and the one that matters. After the
deploy finishes, a Playwright MCP server opens the live URL and checks:

- the post appears on the list page
- the title and date render correctly
- code blocks are highlighted
- no console errors

If a check fails, Claude reads the error and either fixes the markdown and
pushes again, or reports what it could not solve.

## Guardrails worth keeping

Full autonomy over your published site deserves some brakes:

1. **Branch protection.** Let the agent push to a branch and open a PR
   instead of committing to `main` when the content is anything sensitive.
2. **Dry-run first.** A local `hugo server` render catches template errors
   before they reach CI.
3. **Human reads the diff.** The agent verifies rendering; a human still
   verifies the writing says what you meant.

## What this actually changes

The point is not saving ten minutes. It is that the cost of publishing drops
to near zero, so ideas stop dying in the drafts folder. The pipeline is
boring, deterministic, and checked by a browser at the end. The human keeps
the only job that matters: deciding what is worth saying.

## References

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Hugo](https://gohugo.io/)
- [Playwright](https://playwright.dev/)
