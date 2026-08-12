---
name: Aditya Thagarthi Arun — Personal Site
description: A near-black, single-accent engineering portfolio built at modern-SaaS finish on one repeated meta + content grid.
colors:
  ground: "#08090a"
  surface-raised: "#0e0f11"
  surface-hover: "#131417"
  text: "#f7f8f8"
  text-secondary: "#9ca1a9"
  text-muted: "#8a8f98"
  accent: "#6c8cff"
  accent-bright: "#8ba4ff"
  hairline: "rgba(255, 255, 255, 0.08)"
  hairline-strong: "rgba(255, 255, 255, 0.14)"
  # Pure white on screen, used in exactly two places: the sheet mounted behind
  # a white technical drawing, and the text color of a selection. It is never
  # a surface, a fill, or a text color anywhere else.
  paper: "#ffffff"
  # Print is a second medium with its own ink. Pure black exists only here and
  # must never be used on screen.
  print-ground: "#ffffff"
  print-ink: "#000000"
  print-ink-secondary: "#333333"
  print-ink-muted: "#555555"
  print-hairline: "#cccccc"
typography:
  base:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.011em"
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Roboto, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 5.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.032em"
  title-lead:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "1.3125rem"
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: "-0.022em"
  title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "1.0625rem"
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: "-0.018em"
  body-lg:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.014em"
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "-0.011em"
  ui:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.011em"
  meta:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
    fontFeature: "tabular-nums"
  label:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.75rem"
    fontWeight: 550
    lineHeight: 1.6
    letterSpacing: "0.09em"
rounded:
  xs: "3px"
  sm: "6px"
  cta: "7px"
  md: "8px"
  lg: "12px"
  pill: "99px"
spacing:
  hairline-gap: "4px"
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  gutter-page: "32px"
  gutter-grid: "40px"
  row: "32px"
  section: "88px"
  section-wide: "104px"
  meta-col: "180px"
  container: "920px"
components:
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.text}"
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.ground}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.ground}"
  topbar-cta:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.cta}"
    padding: "6px 14px"
  tag:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-muted}"
    typography: "{typography.meta}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  row-lead:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "28px"
  link:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.accent-bright}"
---

# Design System: Aditya Thagarthi Arun — Personal Site

## Overview

**Creative North Star: "The Instrument Panel"**

A near-black instrument face read at a glance: dark ground, one cool indigo signal light, hairline rules that separate without dividing, and dates set in tabular numerals so columns line up like a readout. Nothing on this surface is a metaphor. The register is the category standard — the conventional dark engineering portfolio — and the whole differentiation strategy is execution quality rather than concept. The craft bar is named and standing: Linear, Vercel, Raycast. Tight type scale, near-black with subtle elevation, strict grid, restrained micro-interaction.

The system is built from a single structural idea repeated everywhere: a 180px meta column and a fluid content column, separated by a 40px gutter, stacked under hairline rules. Experience rows, project rows, skill groups, and education rows are all the same object with different content. That repetition is not laziness; it is what makes the page skimmable in the sub-minute window a recruiter gives it, and what keeps the markup hand-editable — adding a job means copying a block.

Density is moderate-tight. Air comes from section padding (88px desktop, 56px on phones) rather than from generous line spacing; measures are capped (52–76ch) so no line ever runs the full 920px container. Depth is nearly absent by design: one raised surface exists on the entire page, and it is spent on the current role. Motion is nearly absent too: exactly one entrance animation, on the hero, and nothing else moves except in direct response to a pointer.

**Key Characteristics:**
- Near-black ground (#08090a) with two barely-lifted surface steps, not a gray scale
- Exactly one chromatic accent, reserved for links and the interface's own signal surfaces
- Hairlines at 8% white doing all the structural separation work
- One repeated meta + content grid across every section
- System font stack only; no webfont, no network font request
- Tabular numerals on every date and meta value
- One authored motion moment on the whole page
- Complete and readable with JavaScript disabled; print is a maintained fallback

## Colors

A near-black ground with a very short tonal climb and a single cool indigo signal; everything else is achromatic.

### Primary
- **Signal Indigo** (`{colors.accent}`): The only chromatic color in the system. It carries links (`.link`, inline report links), the selection highlight at 28% alpha, the caret, the focus-visible ring, and the favicon glyph. It never fills a button, never tints a surface, and never appears as a decorative wash.
- **Signal Indigo Bright** (`{colors.accent-bright}`): Hover state for indigo links only, paired with an underline at 3px offset. It exists solely so a link hover reads without introducing a second hue.

### Neutral
- **Ground** (`{colors.ground}`): The page. Also the scrollbar track, the theme-color meta, and the text color of the primary button (inverted).
- **Raised Surface** (`{colors.surface-raised}`): The lead row's card, tag chips, and the figure mount. A ~1.5% lift — visible as separation, never as a panel.
- **Hover Surface** (`{colors.surface-hover}`): Fill for secondary buttons and the top-bar CTA on hover. Interactive-only; never a resting background.
- **Primary Text** (`{colors.text}`): Headings, row titles, the current-section nav item, `strong` in the compact list, and the primary button's fill.
- **Secondary Text** (`{colors.text-secondary}`): Body prose, the hero lede, row descriptions, and subtitles. This is where most of the page's words live.
- **Muted Text** (`{colors.text-muted}`): Meta and chrome — section labels, dates, tags, figcaptions, the footer, resting nav links, the location line.
- **Hairline** (`{colors.hairline}`): Every structural rule: between sections, between rows, under the stuck header, around cards, tags, and figures.
- **Hairline Strong** (`{colors.hairline-strong}`): Borders that must read as an edge you can act on — button outlines, the CTA outline, the portrait ring. Lifts to 24% white on hover.

### Named Rules
**The One Signal Rule.** Indigo means "this is a link or the browser is talking to you" and nothing else. If a new element wants color for emphasis, it gets weight or a surface step instead.

**The Two-Step Ground Rule.** The dark ramp has exactly three resting values (ground, raised, hover). Do not introduce a fourth gray to solve a contrast problem; solve it with a hairline or with text-color role.

**The No-Status-Color Rule.** There is no green, amber, or red in this system, and no colored status dot. An accent status dot was built and removed because it implied an availability claim the site does not make.

### Print palette

Paper is a second medium, not a variant of the screen, and it gets its own four values. They are deliberately outside the screen palette and must not be reintroduced into it. Pure black never appears on screen at all; pure white appears only as `paper`, the sheet mounted behind a white technical drawing, and as the text color of a selection.

| Token | Screen | Print |
|---|---|---|
| `--text` | `#f7f8f8` | `#000` |
| `--text-secondary` | `#9ca1a9` | `#333` |
| `--text-muted` | `#8a8f98` | `#555` |
| `--border` | `rgba(255,255,255,0.08)` | `#ccc` |
| body ground | `#08090a` | `#fff` |

The lead card additionally drops its raised background, shadow, and negative inline margin so it prints as a hairline-ruled block rather than a dark box, and `.tags` lose their fill for the same reason.

### Named Rules (structure)

**The No-Contact-Section Rule.** There is no contact section. Email and LinkedIn appear above the fold in the hero, persist in the sticky bar, and close the page in the footer; a dedicated section restating them was built, judged redundant, and removed. The footer carries `id="contact"` so the nav anchor still resolves.

## Typography

**Display Font:** system UI stack (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Helvetica Neue`, `Roboto`, `Arial`, sans-serif)
**Body Font:** the same stack — the system is single-family by commitment
**Label/Mono Font:** none. Numeric alignment comes from `font-variant-numeric: tabular-nums`, not from a mono face.
**Root base:** `16px` on `body`. Every step below is expressed in `rem` against it, so the ramp scales with the reader's browser setting. The print stylesheet re-anchors to `11pt`.

**Character:** Neutral, native, and fast — the type reads as the operating system's own voice rather than as branding, which is exactly the register a hiring reader expects. Personality is carried entirely by the scale and the negative tracking: sizes step in small increments and letter-spacing tightens as size grows (-0.011em at body, -0.032em at display), which is what gives headings their engineered snap.

### Hierarchy
- **Display** (600, `clamp(2.125rem, 5.5vw, 3.25rem)`, 1.08, `text-wrap: balance`): The name in the hero. One instance per page.
- **Title (lead)** (550, 1.3125rem, tracking -0.022em): The current-role row's title only.
- **Title** (550, 1.0625rem, 1.4): Every other row title — employer, project name, school.
- **Body Large** (400/500, 1.0625rem, 1.65): The hero lede and hero role. Capped at 60ch.
- **Body** (400, 0.9375rem, 1.7): Row descriptions, subtitles, buttons, links, compact-list items. Capped at 68ch in rows and 76ch in the compact list.
- **UI** (400/500/550, 0.875rem): Page chrome only — the top bar's name, nav links, and CTA, the skip link, and the hero's location line. It is the one step that never appears inside content, which is what keeps the chrome from competing with the record.
- **Meta** (400, 0.8125rem, tracking 0, tabular numerals): Dates, tags, figcaptions, the footer.
- **Label** (550, 0.75rem, uppercase, tracking +0.09em): Section titles and the "Also built" subhead. This is the only uppercase in the system and the only positive letter-spacing.

### Named Rules
**The Tabular Date Rule.** Every date, year range, and meta value in the left column is set in tabular numerals with letter-spacing reset to 0. Dates in adjacent rows must align digit-for-digit down the column.

**The System Stack Rule.** No webfont is loaded and none should be. The stack is the identity; a font request is a network dependency the site does not take.

**The Two Weights Rule.** The scale uses 400, 500, and 550 for text and 600 only at display sizes. 550 is the load-bearing "this is a heading in body-sized type" weight; do not substitute 600 or bold for it at row scale.

## Layout

**Container.** One shell, 920px max-width, centered, with 32px inline padding (20px below 720px). The header, hero, every section, and the footer all use it, so every left edge on the page is the same left edge.

**The repeated grid.** Every content block is a `row`: a 180px meta column plus `minmax(0, 1fr)` content, gap 40px, 32px vertical padding, and a 1px hairline on top. Sections stack these in a flex column. This grid is the system's structural signature — new content types adopt it rather than inventing a layout.

**Vertical rhythm.** Sections are 88px block padding (hero 104px top / 88px bottom, footer 40px top / 48px bottom); rows are 32px; internal spacing moves in 3, 4, 6, 8, 12, 14, 16, 24, 28, 36, 64px steps. Section-to-section separation is a hairline `border-top` on `.section + .section`, never a background change.

**Measure.** Body text is always capped: 60ch hero lede, 68ch row text, 76ch compact list. Nothing runs the full container width.

**Responsive.** Two breakpoints only.
- **≤860px:** the row grid collapses to one column with a 10px gap, and the meta column reorders *above* the content (`order: -1`) so a date still precedes its entry.
- **≤720px:** page padding drops to 20px; section padding to 56px; the sticky bar drops the name and two lower-payoff nav items (Skills, Education) so the remaining three plus the Email CTA fit without a hidden scroll; the nav can still scroll horizontally with its scrollbar hidden; the hero portrait shrinks to 72px; the lead card's outdent shrinks to 14px.

**Sticky offset.** `scroll-padding-top: 88px` with smooth scrolling, so an anchor jump never lands a heading under the 60px bar.

### Named Rules
**The One Grid Rule.** Meta left at 180px, content right, 40px gutter — for experience, projects, skills, and education alike. A section that needs a different layout is a section that hasn't been thought through yet.

**The Aligned Outdent Rule.** A raised surface may outdent past the text measure only by cancelling its own interior padding with an equal negative inline margin, so its contents stay on the shared grid. Padding 28px / margin-inline -28px on desktop, 14px / -14px on phone.

## Elevation & Depth

The system is nearly flat and layers tonally. Depth is produced by three ordered devices, in order of preference: a hairline rule, a one-step surface lift (#0e0f11), and only then a shadow. Exactly one shadow token exists and it appears on four elements in the entire build — the portrait, the primary button, the lead row, and the figure mount. There are no hard offset shadows, no glows, and no colored shadows anywhere.

The sticky header is the one place using translucency: 72% ground with `saturate(180%) blur(16px)`, with a transparent bottom border that transitions to a hairline once the page has scrolled past 8px. The hairline appearing is the header's entire elevation story.

### Shadow Vocabulary
- **Ambient lift** (`box-shadow: 0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -8px rgba(0,0,0,0.55)`): the only shadow in the system. A tight contact shadow plus a wide, negative-spread ambient. Use it on the single lead surface, the primary button, the portrait, and mounted figures. Nothing else earns it.

### Named Rules
**The Hairline-First Rule.** Reach for a 1px 8%-white rule before a surface change, and for a surface change before a shadow. If a boundary reads with a hairline, it is done.

**The One Card Rule.** Exactly one element on the page carries the raised treatment (`.row--lead`): the current role, because it is the strongest evidence a recruiter needs. Promoting a second row to it destroys the hierarchy it exists to create.

## Shapes

Soft-rectangular and consistent. Radii come from a short scale: 3px on the focus ring, 6px on tag chips, 7px on the top-bar CTA, 8px on buttons and the skip link, 12px on cards and figure mounts, 99px on the scrollbar thumb, and a full circle on the portrait. Nested corners are computed (`calc(var(--radius-lg) - 1px)`) rather than guessed, so an image inside a card sits concentric with its border.

Borders are always 1px and always one of the two hairline values; there is no 2px border anywhere except the focus ring's outline. The recurring silhouette is a wide, low, hairline-topped band — the row — repeated down the page, interrupted once by a rounded raised card.

Icons are inline SVG line drawings on a 16px viewBox: `fill: none`, `stroke: currentColor`, 1.5 stroke width, round caps and joins, with a 13px `--sm` variant for inline use. Every icon inherits its color from its text.

## Components

### Buttons
- **Shape:** 8px radius (`{rounded.md}`), fixed 40px height, 16px inline padding, 8px icon-to-label gap.
- **Primary:** inverted — near-white fill on near-black text, carrying the ambient lift shadow. Reserved for the single most important action on a surface (Email, in the hero). Hovers to pure white.
- **Secondary:** transparent fill with a strong hairline border and primary text (LinkedIn). Hovers to the hover surface with the border lifting to 24% white.
- **Both:** 0.18s transitions on background, border-color, and transform; `translateY(1px)` on `:active` for a press. Buttons are `<a>` elements; they inherit the body font explicitly.

### Chips (tags)
- **Style:** raised surface fill, hairline border, muted text at meta size, 6px radius, 6px/10px padding, 6px gap, wrapping freely.
- **State:** static. Tags are labels, not filters — no hover, no selection, no link behavior.

### Cards / Containers
- **Corner Style:** 12px (`{rounded.lg}`).
- **Background:** raised surface on ground.
- **Shadow:** the single ambient lift.
- **Border:** 1px hairline.
- **Internal Padding:** 28px desktop, 22px/14px/24px on phone — always cancelled by an equal negative inline margin (see The Aligned Outdent Rule).

### Navigation
- **Style:** a 60px sticky bar (54px on phone) with a translucent, saturated, blurred ground and no border until scrolled. Name at left (0.875rem, 550), section links pushed right at 0.875rem in muted text, then an outlined CTA.
- **States:** links go muted → primary on hover and on `.is-current`; the current-section state is set by an IntersectionObserver with a `-60px 0px -55%` root margin and also writes `aria-current`.
- **Mobile:** name hidden, Skills and Education hidden, nav horizontally scrollable with the scrollbar suppressed, CTA pushed right and reduced to 0.8125rem.

### Browser Surfaces
A first-class component of this system, not an afterthought: indigo selection at 28% alpha with white text, an indigo caret, a thin white scrollbar (11px, 14% thumb inset by a 3px ground border, rising to 24% on hover), and a 2px indigo `:focus-visible` outline at 3px offset with a 3px radius. `:focus:not(:focus-visible)` is cleared so mouse users never see a ring. A skip link sits off-screen above the fold and slides to 16px on focus.

### Row (signature component)
The page's structural atom. Meta column (date, or a wrapping `.label` for skill groups) beside a content column of title, subtitle, prose, tags, links, and optionally a mounted figure. `.row--lead` is its one variant: no top border, raised surface, larger title, secondary-text subtitle, and the outdent. Figures mount white technical drawings on a padded raised sheet with a hairline-topped caption, so a white image reads as a document on the page rather than a hole in the ground.

### Motion
One authored moment: a `settle` keyframe (opacity 0 → 1, `translateY(10px)` → 0) over 0.65s on the six hero elements, staggered 0.05s apart. Everything below the hero renders immediately. State transitions are 0.18s (color, background, border, transform), 0.2s (skip link), and 0.25s (header border), all on `cubic-bezier(0.16, 1, 0.3, 1)`. `prefers-reduced-motion` collapses all animation and transition durations to 0.01ms and disables smooth scrolling.

### Named Rules
**The One Entrance Rule.** The page has exactly one entrance animation, and it is the hero settling on load. An earlier build had 17 scroll-triggered row reveals; they were deliberately removed. A reader scrolling fast must never wait on an animation to read a date.

**The Enhancement-Only Rule.** JavaScript adds two things: the header hairline and the current-section state. With scripts disabled the page must remain complete, styled, and readable. Never move layout, content, or the entrance animation into JS.

## Do's and Don'ts

### Do:
- **Do** put every new content block on the 180px meta + 1fr grid with the 40px gutter, under a hairline top border.
- **Do** set every date and numeric meta value in tabular numerals with letter-spacing reset to 0.
- **Do** reach for a hairline first, a surface step second, and the single ambient shadow last.
- **Do** keep body measures capped (52–76ch); text should never run the container's full 920px.
- **Do** theme the browser's own surfaces — selection, caret, scrollbar, focus ring — as part of any new work. They are load-bearing finish, not extras.
- **Do** keep the system font stack; the identity is native type at a tight scale.
- **Do** maintain the print stylesheet alongside any structural change: it inverts to black-on-white, drops the header, actions, and figures, flattens the lead card, and sets `break-inside: avoid` on rows.
- **Do** curate hard. "Selected projects" stays short; weaker or older work belongs in the compact "Also built" list or nowhere.
- **Do** stay buildless — hand-editable HTML, one stylesheet, one enhancement script, deployed by pushing to `master`.

### Don't:
- **Don't** reintroduce a metaphor, concept world, or novelty interaction. The user chose the category standard over a dealt concept direction; the differentiation is finish, benchmarked to Linear / Vercel / Raycast.
- **Don't** add per-section or scroll-triggered entrance animations. One entrance, on the hero, is the whole motion budget.
- **Don't** promote a second row to the raised `.row--lead` treatment. Exactly one row carries it.
- **Don't** outdent a surface without cancelling the outdent with equal interior padding — the meta column must stay on the shared grid.
- **Don't** make or imply an availability claim: no "open to work" badge, no status dot, no colored availability signal. None is established.
- **Don't** introduce a second accent hue, a status color palette, or a fourth resting gray.
- **Don't** use the accent as a fill. Indigo is a signal color for links and browser surfaces only.
- **Don't** load a webfont or an icon font. Icons are inline 16px SVG line drawings at 1.5 stroke, inheriting `currentColor`.
- **Don't** ship a feature that requires JavaScript to be readable, and don't add a build step, package manager, or dependency.
- **Don't** use hard offset shadows, glows, or colored shadows. There is one shadow token and it is ambient.
