# Redesign plan — aditya-ta.github.io

Full visual replacement of the personal portfolio site. Product truth lives in `PRODUCT.md`; this file holds the plan and the direction derivation. Written before any code.

**Status:** built. The user was shown the direction below and **took the standing exit — the category standard** — with the steer "keep it professional and simple, should work on phone and a full computer browser," and named **Linear / Vercel / Raycast** as the craft bar. Convention became the commitment: the Bench Instrument direction in §3 was **not built** and is retained here only as the record of the roll. What shipped is the conventional dark portfolio executed at that bar; see the direction contract at the top of `index.html` and `DESIGN.md`.

---

## 1. Confirmed inputs

| | |
|---|---|
| Visitor mode | **Persuade** — a recruiter decides whether to reach out |
| Primary visitor | Technical recruiters and hiring managers, skimming, often on a phone |
| Positioning | A broad, capable engineer — range across embedded, OS/kernel, and ML, proven at each layer |
| Content policy | Curate hard. Qualcomm and the strongest projects lead; coursework collapses; PDFs become links, not iframes |
| Brief constraints | Dark theme. Professional register. Static, buildless, GitHub Pages |
| Preserved | All product truth: employers, dates, specs, project facts. Nothing invented |

## 2. Direction derivation

**Mechanism:** one engineer whose evidence spans the whole stack, from the power rails under a Snapdragon SOC to reinforcement-learning policy models — with something real shipped at each layer.

**Audience's real scene:** a recruiter with thirty tabs open, mid-pipeline, giving this under a minute before deciding.

**Cultural home:** silicon and instrumentation — the objects and graphic traditions of people who bring up hardware. Datasheets, bench equipment, timing captures, board artwork, controlled drawings.

**The rut, excluded from the candidate list:** the dark developer-portfolio with a terminal-prompt hero, monospace everything, and a neon-green or cyan glow accent — this is *the* category default. Its predictable opposite, the white editorial résumé with an oversized serif name and luxurious whitespace, is excluded too. The brief pins *dark*; it does not pin the neon rendition, and near-black-with-one-glowing-accent is a known convergence cluster.

**Seven grounded candidates, ordered by resonance** (families: technical print, instrumentation screen, industrial product, manufacturing artifact, vehicle graphics):

1. Semiconductor datasheet — pin-outs, min/typ/max tables, absolute maximum ratings, revision footer
2. Logic-analyzer timing capture — parallel signal lanes on a shared time axis, cursor deltas
3. **Anodized bench-instrument front panel** — engraved legends, panel seams, indicator lamps, connector collars ← **assigned**
4. PCB fabrication artwork — soldermask ground, silkscreen legend, reference designators, fiducials
5. Controlled engineering drawing — title block, revision letters, sheet N of M, approval boxes
6. Power/thermal telemetry plot sheet — frequency ladders, discharge curves, thermal envelopes
7. Solar-car scrutineering and livery graphics — race numerals, sponsor blocks, tech-inspection stickers

**Roll:** `scope=direction, mode=persuade, key=daa0400a, candidate-count=7` → **assigned index 3**. Reproduced faithfully from `concept-seed.mjs`'s own hash math in python, because node is not installed on this machine. Challengers came from the live roll API (pool `94ff10ff20de`, 281/531 approved).

**Challengers weighed** (each fused product-first, judged on audience identification and product clarity):

| Challenger | Verdict |
|---|---|
| Saturday-morning cartoon title card | Loses both axes. A hiring page as episode bumpers destroys credibility for a kernel role |
| Taller de Gráfica Popular linocut broadside | Loses. Protest-poster register is wrong for hiring; one-demand-per-sheet fights a dense résumé; black-on-manila fights the pinned dark brief |
| Variable font specimen | Loses. Genuinely screen-native craft, but reads "type nerd" not "systems engineer," and the axis gimmick has to carry content it does not naturally hold |
| Darkroom safelight bay | Loses on clarity. Its amber-on-dark materiality is right and worth stealing; its fixed six-station sequential topology is wrong for a skimmable résumé |
| Sleeping city fold | Loses both axes badly |
| Indoor weather sun | Loses on clarity. Beautiful dark amber atmosphere, near-zero information-carrying capacity |

None beat the assigned direction. The two that came closest (darkroom, weather sun) both argue for warm amber against a dark ground, which reinforces the panel's own palette.

## 3. The direction — Bench Instrument

**Thesis.** A career rendered as the front panel of a piece of laboratory test equipment. This site refuses the terminal-prompt developer portfolio; it is not a console you type into, it is an instrument you read.

**Why it fits.** This is the physical object on the bench of every engineer who does the work Aditya does. It is dark by nature — anodized panels are graphite, not near-black-with-neon. It is sober by nature; these objects are built for twenty years of service and none of them are cute. And it carries the range claim structurally: one instrument has several functional sections behind one fascia, the way one engineer has several domains.

**World.** Graphite anodized aluminum ground with a fine directional grain. Engraved legend type — small, tracked caps in a warm off-white, the way panel legends are actually screen-printed. Hairline engraved rules and recessed panel seams grouping functional sections. Content sits in inset "display" wells that read a shade darker than the panel. Warm amber indicator lamps for live state — lamps that glow the way an incandescent indicator does, never a neon halo. Machined punctuation: countersunk screw positions, knurled edges, connector collars. A manufacturer's identity plate.

**First viewport.** The identity plate. Name engraved at panel scale; role, employer, and location as the smaller sub-legend beneath it. A model-line strip states the range claim in the panel's own voice. An indicator cluster shows real status. The primary action sits where a panel's connectors sit — email and LinkedIn as physical jack/button affordances, visible without scrolling.

**Visitor path.** Identity plate → experience as a stack of rack modules, newest at top, Qualcomm largest → selected projects as a labeled bank of six → capability ranges grouped by layer, which is where the range thesis is proven visually → education and early record, compact → contact.

**Signature interaction.** The panel's own motion. Indicator lamps warm up rather than switch. Section headers engage with a detent, not a fade. Nothing bounces; instruments do not bounce.

**Cross-surface reach.** The panel system extends to a project detail page or a writing section later without redesign: another module in the same rack, same legend type, same seams.

**Honest risk.** Skeuomorphism. Pushed too far this becomes a novelty box and costs a recruiter their thirty seconds. The mitigation is that the panel is a *typographic and material* system — legend type, hairline seams, inset wells, lamps — not a 3D render of an object. Content stays flat, high-contrast, and fast to scan. If a section reads as a prop before it reads as information, it gets rebuilt.

## 4. Content architecture

Curated hard, per the confirmed policy. Everything below is real and already in `PRODUCT.md`.

- **Identity** — name, current role, location, range claim, contact affordances
- **Experience** — Qualcomm (SWE, 2023–present), Qualcomm (intern, 2022), Krowd (2021), Robert Bosch (2018). All four kept; all are real employment
- **Selected projects (5 as shipped)**, chosen to span layers rather than to be exhaustive:
  - Audio Beam — MSP430 guitar effects processor, led software in a team of four (embedded/DSP; mounted block diagram)
  - Exploration strategies for DQN in Atari Pong (RL; report links out)
  - ORB feature detection and matching (computer vision; report links out)
  - TADA dietary assessment at Purdue under Prof. Delp (applied research; real external site)
  - Image morphing with a PyQt interface (computational photography; mounted screenshot)
- **Also built** — a compact one-line-each list: compiler and bytecode interpreter, cryptographic primitives, polyphonic keyboard synthesizer, neural architecture search, fake-news classifier selection, deep residual networks, Roomba Mars rover, Huffman codec

  Compiler and Cryptography started as featured entries and were demoted here by the finish review: both are coursework, and carrying them at full weight contradicted the curate-hard policy.
- **Capabilities** — grouped by layer (silicon/firmware · systems/OS · data/ML · languages and tooling) so breadth is visible at a glance
- **Education** — three schools, compact; MS coursework available but not dumped
- **Early record** — PrISUm solar car, one tight entry
- **Contact** — email, LinkedIn

**Dropped from the page:** inline PDF iframes (5 × ~11 MB total, replaced by links) and the full 18-course coursework dumps (a curated selection was later restored under each degree).

**Correction:** `banner.jpg` and `pic01–03.jpg` were initially deleted from the repo on the assumption they were template stock. That was wrong and unverified — `banner.jpg` is a landscape photograph and `pic01.jpg` is a real photo of the PrISUm solar car. All four were restored at the user's request and are kept on disk; none are referenced by the page. Only `pic02.jpg` and `pic03.jpg` turned out to be genuine template filler.

**Needs from Aditya:** a GitHub profile URL if he wants one linked (the old site had it commented out), and a résumé PDF if he wants one downloadable. Neither will be invented.

## 5. Technical approach

- Single `index.html`, hand-editable, one repeated block pattern per repeated content type
- One authored `assets/css/site.css`. The HTML5 UP `main.css`, `sass/`, and the jQuery bundle are removed — the redesign inherits nothing from the template
- Vanilla JS only, and only where it earns its place (nav state, reveal-on-scroll). No jQuery, no framework, no build
- System font stack plus one deliberate face for panel legends, self-hosted or system — no render-blocking third-party font fetch
- Dark by commitment, not by media query. Contrast verified against WCAG AA for body text
- `prefers-reduced-motion` honored; all content visible without JS
- Semantic landmarks, real heading order, keyboard-reachable controls, visible focus
- Existing `documents/` and the four real images stay; unused template assets deleted

## 6. Execution record

1. ✅ Direction presented — user took the standing exit (category standard), craft bar Linear/Vercel/Raycast
2. ✅ Template stripped — HTML5 UP CSS/Sass/webfonts, jQuery and its four plugins, and four stock template images deleted
3. ✅ `index.html`, `assets/css/site.css`, `assets/js/site.js` authored from scratch
4. ✅ Batched screenshot inspection, desktop + mobile; three defects found and fixed (wrong intrinsic image dimensions, factually wrong alt text, unmounted white figure)
5. ✅ Finish review by a fresh reviewer — disposition **fix**, eight material findings, all applied in one batch
6. ✅ Verdict pass on the applied fixes
7. ✅ `DESIGN.md` written from the built world
8. ⏸ Commit and push — **not done without your say-so**, since a push deploys live

### What the finish review changed

- Current Qualcomm role raised into a lead card so the strongest evidence outweighs coursework
- Compiler and Cryptography demoted to "Also built"; Image morphing promoted with its real screenshot
- Container narrowed 1080 → 920 so the top bar stops overhanging the content measure
- 17 identical scroll-reveals replaced by one authored hero entrance
- Hero "status" dot removed — it implied an availability claim the page never makes
- Mobile nav restored as a scrollable row with a Contact link, instead of vanishing entirely
- Skills labels made real headings with `aria-labelledby`; unreachable `"Inter"` removed from the font stack

## 7. Still open — needs you

- **A GitHub profile URL**, if you want one linked. The old site had it commented out and I would not invent one.
- **A résumé PDF**, if you want it downloadable. None is in the repo.
- `images/gogogophers_encoding.png` (the Huffman encoding figure) is now unreferenced. I left it on disk rather than deleting it — say the word and it goes, or it can be mounted into the Huffman entry if you'd rather show it.

## 8. Direction contract — as dealt, NOT as built

Retained as the record of the roll. The contract that actually ships is at the top of `<body>` in `index.html` and describes the category-standard build the user chose instead.

```
THESIS: A career read as a laboratory instrument's front panel; refuses the
  terminal-prompt developer portfolio and its neon-on-black default.
OWN-WORLD: Graphite anodized panel with directional grain; engraved off-white
  legend caps, small and tracked; hairline seams and inset display wells;
  warm amber indicator lamps; machined screw and connector punctuation.
STORY: A recruiter places Aditya in one viewport, sees range proven layer by
  layer, and finds contact without hunting.
FIRST VIEWPORT: Identity plate — engraved name at panel scale, role/employer/
  location sub-legend, model-line range claim, live indicator cluster, and
  email + LinkedIn as panel connector affordances above the fold.
FORM: Anodized bench-instrument front panel; candidate 3 of 7; seed daa0400a.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, and DESIGN.md.
```
