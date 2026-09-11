# alexsun98.github.io

My personal blog. A neo-brutalist Hugo theme: cream paper, hard ink borders,
pastel highlight blocks, and a terminal running through everything. Hosted
free on GitHub Pages, deployed automatically on every push.

Live at: https://alexsun98.github.io

## What's inside

- Homepage, pinned posts, latest posts, a /now card, and a stack grid
- A /mirana page: the resident AI agent, her dreams, and a growth log
- Posts with table of contents, front matter card, reading progress, prev/next
- A SVG cover art per post, with a procedural fallback
- Tags (cloud page) and categories (card grid), filter bars on list pages
- Command palette search: press Ctrl+K or Cmd+K anywhere
- Comments under every post, stored as GitHub Discussions by giscus
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

To turn a Notion draft or research notes into a post, use the `write-post`
skill (`.claude/skills/write-post/`). It runs intake, an outline, two interview
rounds that pull in your own experience, a sourced draft, and a check pass with
a disclosure gate. Working files land in a gitignored `drafts/<slug>/` folder.

By hand, it is one markdown file per post in `content/posts/`:

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

## Comments

Every post gets a comment box at the bottom, run by
[giscus](https://giscus.app). A thread is a GitHub Discussion on this repo, so
there is no database, no account system and no tracking script. Readers sign
in with their own GitHub account and can edit or delete what they wrote.

Settings live in `hugo.toml` under `[params.comments]`. The `repoId` and
`categoryId` values come from the configurator at https://giscus.app once you
pick the repo and the category. Both are public identifiers, not secrets.

The box needs two things on the GitHub side, done once:

1. The repo is public and has Discussions turned on, with an `Announcements`
   category. Announcements is the right one: only maintainers can open a
   discussion there by hand, so the threads stay one per post.
2. The giscus GitHub App is installed on the repo:
   https://github.com/apps/giscus

Until step 2 is done the section renders its heading and then nothing.

### Theme

`static/css/giscus.css` is the widget's theme. giscus loads it inside its own
iframe, which is the only way to reach the widget's markup from here. The file
is the stock giscus `light` theme, downloaded from
https://giscus.app/themes/light.css, with a short override block appended at
the end. The override hides the giscus credit line and moves the widget onto
the same paper colour as the card around it.

giscus fetches that file from inside its own iframe and cannot reach
localhost, so `themeUrl` is the deployed URL, not a local path. The dev server
shows the deployed copy of the theme, which means a change to the file only
appears locally after it is merged and GitHub Pages has rebuilt.

To refresh the base theme, download that URL again and keep the override block
at the end of the file.

### Turning it off

Set `enable = false` under `[params.comments]` for the whole site, or
`comments: false` in one post's front matter. Posts marked `sample: true`
never get a box.

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
  css/giscus.css           the comment widget's theme, loaded in its iframe
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
- Dark mode: the theme is light-only by design, but `main.css` is variable
  driven, so a dark palette is a contained change

The theme style is inspired by PostHog's design language and the personal
blogs built on it. The stack is deliberately boring: Hugo, one CSS file,
vanilla JS. Keep it that way and it will never break.
