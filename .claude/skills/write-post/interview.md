# The grill

The interview is where the post gets its first person. Everything else in this
skill is plumbing around this step.

## Stance

Adversarial and warm at the same time. Alex asked for this. Do not accept a
vague answer to move things along.

- One question per message. Never a numbered list of five.
- Follow the answer, not the script. A surprising answer is worth three planned
  questions.
- Push back on abstractions. "Made it faster" is not an answer. "Cut the run
  from nine minutes to about ninety seconds" is.
- Push back on hindsight polish. People narrate a clean path they did not walk.
  Ask what happened first.
- Accept "I do not know" and "I did not test that". Write it down and move on.
  Those lines end up in the post and they are worth more than a guess.
- If the answer is short and flat, ask why it mattered. If it is long, ask for
  the one moment inside it.

Use the repository's `grilling` skill for the stance if it is available. This
file supplies the targets.

## Recording

Append every exchange to `03-interview.md` in this shape:

```
### Q7 [no-number] claim-3
Q: You say the harness cut review time. Cut it from what, to what?
A: (Alex, verbatim, unedited)
```

Rules:

- Store the answer verbatim. Do not tidy the grammar. The phrasing is voice
  data as well as content.
- Every answer gets an ID (`A7`). Drafting cites these IDs.
- Tag each question with the gap type and the claim it serves.
- Round two questions continue the same numbering, tagged `[r2]`.

## Question banks

Pick from the bank that matches the gap type on the claim. These are seeds, not
a script.

### no-story: the claim is abstract, nothing was done

- What did you actually run? Give me the command, the repo, and roughly when.
- Walk me through the first time you tried this. What was on the screen?
- Was this at work, on a lab, or in your head? Be honest, the post will say so.
- Who else was in the room, and what did they say?

### no-number: the claim asserts better, faster or cheaper

- Faster than what, measured how, on what machine?
- Give me one real number. Approximate is fine, invented is not.
- How many times did you run it before you believed the number?
- What did it cost? Time, tokens, money, patience.

### no-failure: the happy path only

- What broke first?
- What did you try that did not work, and how long did you stay with it?
- What is still broken about this that you have not fixed?
- If someone copies this, what will bite them that did not bite you?

### no-stakes: true, but the reader does not care

- What was the state of the world before you did this? What annoyed you enough
  to start?
- Who is this for, and what do they already know?
- What happens to them if they ignore this post?
- What would you tell a colleague about this over a coffee, in one sentence?

### borrowed: from research, not tested

- You read this. Did you run it?
- If you did not run it, what would you need to see before you believed it?
- Where does your own experience disagree with the source?
- Is the source's setting anything like yours? Say where it differs.

### Always ask, on every post

- What did you believe before this, and what changed your mind?
- What would you not do again?
- What is the one sentence you want the reader to remember in a month?
- Is there anything here you would not want a colleague at work to read?
  (This feeds the disclosure gate later, so ask it early.)

## Round one stop rule

Round one ends when every claim in the gap map has either:

- at least one concrete story, number or failure attached, or
- an explicit line from Alex saying he has not tested it, which the post will
  state plainly.

Report the remaining gaps before you stop. Do not quietly close a gap that is
still open.

## Round two

Round two runs after the checker. It is short and narrow.

- Only ask about sections the checker flagged as generic or unsourced.
- Show Alex the flagged paragraph, then ask the question. Context makes the
  answer better.
- Cap round two at eight questions. If a section still cannot be personalised
  after that, the honest move is to cut the section, not to pad it.
