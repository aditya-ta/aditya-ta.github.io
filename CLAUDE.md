# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio/résumé site for Aditya Thagarthi Arun, hosted on GitHub Pages (`aditya-ta.github.io`). Plain static HTML/CSS/vanilla JS — no build system, no package manager, no tests, no dependencies.

**Its job:** a recruiter or hiring manager should be able to place Aditya correctly within one viewport, see real evidence of range across firmware / OS / ML, and reach him without hunting. Design and content decisions serve that, not completeness.

## Development

No build, lint, or test commands. Preview with any static server:

```
python3 -m http.server 8000
```

Published by pushing to `master` — GitHub Pages serves it directly, so **a push is a deploy to a live public site.**

Node is not installed on this machine; anything requiring `node`/`npm` will fail. Python 3 and Google Chrome are available (Chrome is useful headless for screenshots — note it clamps `--window-size` to a 500px minimum, so render mobile through a 390px iframe rather than trusting a narrow window).

## Architecture

Three authored files, nothing else:

- **`index.html`** — the whole site. Anchor-linked sections: hero (`#top`), `#experience`, `#projects`, `#skills`, `#education`, plus the footer (`#contact`, which the nav points at — there is no separate contact section). Content is edited directly here; there is no templating or data file.
- **`assets/css/site.css`** — the entire design system, token-driven from `:root`.
- **`assets/js/site.js`** — enhancement only: the sticky header's hairline and the nav's current-section state. **The site must remain complete and readable with JS disabled.**

`documents/` holds project PDFs (linked, never iframed — inline embeds cost ~11 MB). `images/` holds the portrait and two project figures.

## Design system

Read the direction contract in the HTML comment at the top of `<body>` before changing anything visual — it records what this design committed to and why. `DESIGN.md` holds the full system.

Load-bearing rules:

- **One repeated grid.** Every section uses the same `.row` = `--meta-col` (180px) + content. Adding a section means reusing that grid, not inventing a layout.
- **Near-black `#08090a`, one accent `#6c8cff`.** The accent is for links, focus rings, and selection only. Dark is a commitment, not a media query — there is no light theme.
- **One authored motion moment**: the hero's CSS `settle` stagger on load. Do not add scroll-reveal or per-section entrances; that was deliberately removed.
- **Browser surfaces are themed** (selection, caret, scrollbar, focus-visible ring, tabular numerals on dates). Preserve this.
- Curate hard. The "Selected projects" list is deliberately short; weaker or older work belongs in the "Also built" compact list. Adding entries to Selected projects dilutes it.

## Content conventions

- Experience and Education rows follow one pattern: `.row` → `.row__meta` (dates) + `.row__body` (`.row__title` / `.row__sub` / `.row__text` / `.tags`). Copy an existing block.
- The current role carries `.row--lead`, which gives it the raised surface and larger title. Only one row should have it — move it when the job changes.
- Project figures use `.row__figure`: a linked `<img>` with **correct intrinsic `width`/`height`** (wrong values cause layout shift) plus a `<figcaption>`.

## Factual integrity

`PRODUCT.md` is the source of truth for every claim on the page. Do not add a metric, employer, date, technology, or capability that isn't there. Known absences that must not be invented: no published papers with venues, no open-source projects, no testimonials, no GitHub link, no résumé PDF in the repo. The only metric on the site is the "roughly 30%" figure from the Krowd work.
