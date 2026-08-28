# Post covers

The cover is the first thing a reader meets on the list page, and often the only
thing they meet. It has one job: show the claim the post makes. Not the title,
not the topic, not a stock idea of the topic.

The common failure is drawing the words in the title. It looks clever for a
second and says nothing. Work the method instead.

## The method

### 1. Name the idea in one sentence

Take the thesis from `02-outline.md`. Write it out. If you cannot get it into one
sentence, stop and fix the outline, because the cover will only ever be
decoration.

### 2. List the objects

Read the draft and write down every concrete noun the argument actually leans
on. Things the reader will meet inside the post. Not generic tech clip art, not
gears, not a rocket.

### 3. Pick three to five

Keep the ones that do work:

- the subject of the post
- the human, if a person is in the argument
- what changed, usually the new thing the post is testing the subject against
- the object that carries the tension, not just the topic

Drop the rest. Five is the ceiling at this canvas size. Four is usually better.

### 4. Decide the relation

The objects need a verb between them. This is the step that separates a cover
from a sticker sheet.

- an arrow for a flow
- a two-way arrow for an argument that runs both ways
- a slash for a negation
- a split or a facing pair for a before and after
- containment for a part-of

### 5. Draw it to the house style

Below.

### 6. Verify

Below. You cannot see the render, so the checks matter and so does asking.

## Worked example

Post: `mythical-man-month-in-the-age-of-ai`

- Idea: a 1975 book about human collaboration, reread against AI, and what
  survives the reread is human judgment.
- Objects in the draft: the book, man-months, the moon inside "month", a reader,
  the silver bullet, docs, tests, prototypes, the surgical team.
- Picked four and a wink: the book (subject), a reader (the human), a thought
  bubble (the reread itself), a dark AI chip (what changed), a small moon in the
  corner for the pun in the title.
- Relation: an arrow from book into reader, then a two-way arrow between reader
  and machine, because the post argues in both directions.
- Caption: `1975 book, 2026 questions`.

The first attempt drew a moon, a stick figure and a slashed silver bullet. Every
object came from the title and the chapter headings, so the cover said "this
post is about a book called The Mythical Man-Month" and nothing else. That is
the failure mode. The second attempt came from the thesis and reads as an
argument.

## House style

Canvas is 240x140, `preserveAspectRatio="xMidYMid slice"`, height driven by
`{{ $h }}`. Copy the opening two lines from an existing cover rather than
retyping them.

Palette, from `assets/css/base.css`:

| Role | Value |
|---|---|
| backgrounds | `var(--lavender)` #cfc2f1, `var(--peach)` #fbcfb8, `var(--mint)` #a9e6c9, `var(--sky)` #8ed3f0 |
| ink | #151415 |
| paper | #fdfcf5 |
| yellow | #f5dc5a |
| coral | #ef7065 |
| lime | #b5f26a |

Rules:

- Pick a background no neighbouring post uses. Read the other cover files first.
- Every shape carries the ink stroke, 2 to 2.4 wide, `stroke-linejoin="round"`.
  Nothing floats unoutlined.
- Flat fills only. No gradients, no shadows, no filters. Opacity is for muted
  detail lines, .2 to .6, and for the caption.
- Type is `JetBrains Mono, monospace`. Labels 8 to 10, bold on dark chips.
- One caption, lower left, size 8, opacity .6, lowercase and plain. It names the
  idea. It never repeats the title.
- Two or three small accents at most, stars or sparks. They fill dead corners.
  They do not carry meaning.
- Comment each object in the SVG with the job it does, one short line. The next
  person editing the file needs to know why the chip is there.
- No em dash and no section sign, in the caption or anywhere else.

## Verify

1. `hugo --quiet` builds with no errors.
2. `curl -s localhost:1313/posts/<slug>/ | grep -c "<caption text>"` returns 1.
3. The same grep against `/posts/` returns 1. This is the real check: it proves
   `cover.html` chose the custom file over the procedural fallback.
4. Read it at list-card size, not full width. It has to work at about 300px.
5. Tell Alex you cannot see the render, then offer the knobs: swap the
   background, drop an object, resize the focal object, cut the caption.
