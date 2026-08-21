# alexsun98.github.io

My personal blog. A neo-brutalist Hugo theme: cream paper, hard ink borders,
pastel highlight blocks, and a terminal running through everything. Hosted
free on GitHub Pages, deployed automatically on every push.

Live at: https://alexsun98.github.io

## What's inside

- Homepage with hero, pinned posts, latest posts, a /now card, and a stack grid
- A /mirana page: the resident AI agent, her dreams, and a growth log
- Posts with table of contents, front matter card, reading progress, prev/next
- Hand-drawn SVG cover art per post, with a procedural fallback
- Tags (cloud page) and categories (card grid), filter bars on list pages
- Command palette search: press Ctrl+K or Cmd+K anywhere
- No JavaScript frameworks, no tracking, three small JS files total

## Deployment

GitHub Pages, built by the workflow in `.github/workflows/hugo.yml`.
Every push to `main` deploys. There is no manual build step.

## Everyday workflow

Changes go through a pull request:

1. Branch from `main`, commit the change.
2. Open a PR with the `create-pr` skill (`.claude/skills/create-pr/`), which
   formats the title and body.
3. Merge the PR. GitHub builds and deploys on its own.

## Writing a post

One markdown file per post in `content/posts/`:

```markdown
---
title: "My post title"
date: 2026-07-24
tags: ["AI", "dotnet"]
categories: ["Engineering"]
description: "One sentence shown on post cards and in search results."
pinned: true        # optional: features the post on the homepage
---

Write markdown here. Headings become the table of contents.
```

Notes:

- `categories` drive the filter bar on the posts page. Keep the list short
  (AI, Engineering, Meta).
- `tags` are free-form and feed the tag cloud.
- `pinned: true` puts the post in the Featured section on the homepage
  (first two pinned posts show).

## Cover art for a post

Every post card carries an SVG cover.

- Default: a procedural pattern, generated from the title. Zero effort.
- Custom: add `layouts/partials/covers/<post-file-name>.html` containing an
  SVG. Same name as the markdown file. See the existing files in that folder
  for the style: 240x140 viewBox, ink strokes, pastel background.

The fastest way to get a custom cover is to ask an AI agent to read the post
and draw one in the style of the existing covers.

## Editing your profile

Everything personal lives in `hugo.toml` under `[params]`: name, hero text,
pills, stack tiles, the "What I'm up to" card, contact links. One file.

Page content:

- `content/about.md` holds the about page. The tiles (What I do, Ask me
  about, fun fact, quote) are in its front matter.
- `content/now.md` holds the /now page prose. The four status cards come
  from `[[params.now]]` in `hugo.toml` and are shared with the homepage.
- Your logo is `static/images/logo.png`. Replace the file, keep the name.

## Previewing locally

Not required for publishing, but useful:

```bash
winget install Hugo.Hugo.Extended   # once
hugo server                         # then open http://localhost:1313
```

Live reload is on. Edit anything and the browser refreshes.

## Repo layout

```
hugo.toml                  all personal text + site config (edit this first)
content/
  about.md                 about page (tiles in front matter)
  now.md                   /now page
  mirana/_index.md         the /mirana page (status, dreams, growth log)
  posts/                   one markdown file per post
layouts/
  index.html               homepage
  _default/                page templates (posts, lists, tags, categories)
  mirana/                  the /mirana page template
  partials/                header, footer, logo, covers/, terminal card
assets/css/                the theme, one file per page area
static/
  js/                      palette.js (search), progress.js (reading bar)
  images/                  logo.png, alex.png, mirana.png
.github/workflows/hugo.yml the auto-deploy job
```

## Evolving the site

Ideas that fit the theme, roughly in order of effort:

- Replace the two sample posts with real writing
- Add an RSS link check and a proper `description` to every post
- Custom covers for each new post (see above)
- A GitHub contribution heatmap section (CSS for it already exists in
  `main.css`; it was removed from the homepage but is easy to restore)
- Comments via giscus (GitHub Discussions), self-contained and free
- Dark mode: the theme is light-only by design, but `main.css` is variable
  driven, so a dark palette is a contained change

The theme style is inspired by PostHog's design language and the personal
blogs built on it. The stack is deliberately boring: Hugo, one CSS file,
vanilla JS. Keep it that way and it will never break.
