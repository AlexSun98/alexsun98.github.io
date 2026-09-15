# Where this came from

Vendored from https://github.com/blader/humanizer, MIT licensed, version 3.0.0.
Only `SKILL.md` and `LICENSE` are copied. The upstream repo also ships a
packaging script, a plugin manifest and an OpenAI agent manifest, none of which
this site uses.

The patterns come from Wikipedia's "Signs of AI writing", maintained by
WikiProject AI Cleanup.

## Precedence, when it disagrees with voice.md

`voice.md` wins. Always. It is Alex's voice, written from his own pages, and
this skill is a general rule set written for nobody in particular.

They overlap heavily and mostly agree. Where they do not:

- The em dash. `voice.md` bans it outright, everywhere, with no exception.
  Humanizer treats dash frequency as something a writing sample can override.
  There is no override here. The character does not appear on this site.
- Banned words. `voice.md` has its own list. Treat it as additive to
  humanizer's, not as a replacement for it.
- Humanizer says a supplied writing sample overrides its patterns. On this site
  the sample is `voice.md` plus the existing posts, so that rule points back at
  `voice.md` rather than at anything a prompt supplies.

Use humanizer for the twenty five structural tells `voice.md` does not name:
staged run-ups, one-line closers, forced triads, stacked qualifiers, borrowed
authority, decorative bolding, chat residue. Use `voice.md` for whether a
sentence sounds like Alex.
