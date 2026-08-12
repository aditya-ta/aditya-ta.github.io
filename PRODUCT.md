# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS/JS, no build step, no package manager. Inferred from the existing repository (GitHub Pages user site `aditya-ta.github.io`, served directly from `master`), not asked. Any redesign must remain buildless and deployable by pushing to `master`.

## Users

Primary: technical recruiters and hiring managers evaluating Aditya Thagarthi Arun for a software engineering role. They arrive from LinkedIn or a résumé link, skim on desktop or phone between other candidates, and spend well under a minute before deciding whether to keep reading or reach out. Secondary: engineering peers who found a specific project and want depth.

## Product Purpose

A personal professional site that lets a hiring decision-maker place Aditya quickly and correctly, see credible evidence behind the placement, and contact him. Success is a recruiter forming an accurate impression fast and having an obvious path to email or LinkedIn.

## Positioning

A broad, capable engineer: someone who has shipped across embedded firmware, OS-level systems, and machine learning rather than a specialist in one layer. The range is the claim, and it is backed by work at each layer — a shipping Windows kernel driver, USB-PD firmware on a PMIC, graph clustering on real credit-card transactions, and graduate ML/RL research.

## Operating Context

The site is one link among many in a hiring pipeline. It is opened alongside a résumé PDF and a LinkedIn profile, often on a phone, often by a non-specialist recruiter first and a specialist engineer second. It must survive both readings: fast placement for the skimmer, real technical substance for the engineer who goes deeper.

## Capabilities and Constraints

- Static site only: no server, no database, no build tooling. Assets are committed to the repo.
- Existing site is an HTML5 UP "Read Only" template; the visual world is being replaced, and the template CSS/JS is not authority over the redesign.
- Content is curated hard in this redesign: Qualcomm work and the strongest projects lead; older coursework projects collapse into a compact list or drop; the five PDF reports become links rather than inline `<iframe>` embeds.
- Site owner maintains it by hand-editing HTML, so the markup must stay legible and repetitive-by-pattern rather than clever.

## Brand Commitments

No existing logo, wordmark, or color identity worth preserving — the current look comes from an off-the-shelf template.

Standing preference, confirmed by the user: **the conventional register, executed at high craft.** Offered a distinctive concept direction and the category standard side by side, the user chose the category standard, with the steer "keep it professional and simple, should work on phone and a full computer browser." Future visual work honors this: dark, clean, conventional structure; no concept-led metaphor, no novelty interaction. The craft bar is modern SaaS product sites — Linear, Vercel, Raycast: tight type scale, near-black with subtle elevation, strict grid, restrained micro-interaction. Match that level of finish; do not reintroduce a metaphor.

## Evidence on Hand

Real, verifiable, and usable:

- **Qualcomm, Software Engineer, San Diego (July 2023 – present):** Windows kernel-mode driver for power management and performance on Snapdragon compute platforms (X Elite, X2 Elite and successors); CPU/DDR DVFS; Windows Power Framework (PoFx).
- **Qualcomm, Software Engineering Intern (May – Aug 2022):** USB Type-C / Power Delivery dock features on Snapdragon compute SOC, PMIC-HLOS team; Wake-on-LAN, power button operation, power-state-change features to PD spec rev 3.1; C and FreeRTOS.
- **Krowd, Data Science Research Intern, remote (May – July 2021):** merchant graph clustering to target credit-card offers; filtered ~30% of customers unlikely to use a given offer.
- **Robert Bosch, Software Engineering Intern, Bengaluru (June – July 2018):** embedded C for a predictive-maintenance device; Coulomb-meter battery measurement; accelerometer data verification.
- **Education:** Texas A&M, MS Computer Science (2021–2023); Purdue, BS Computer Engineering (2018–2020); Iowa State, BS Computer Engineering (2016–2018, transferred).
- **Projects with written reports** (`documents/`, 5 PDFs): DQN exploration strategies in Atari Pong; ORB feature detection and matching; neural architecture search for policy-learning models; classifier selection for fake-news detection; deep residual networks on MNIST/CIFAR-10.
- **Hardware/embedded projects:** Audio Beam senior design (MSP430 guitar effects processor, led software in a team of four; SPI/DMA codec interfacing, RN4020 BLE over UART); polyphonic keyboard synthesizer (STM32, MIDI, wavetables); Roomba Mars rover (TI MCU, sonar/IR sensing, WiFi control).
- **Other software projects:** TADA dietary-assessment Android app at Purdue under Prof. Edward J. Delp; Huffman encoder/decoder in C; compiler (Java) plus bytecode interpreter (C++); cryptography implementations (DES, AES, X9.31 PRNG, SHA-512, RSA); PyQt image morphing.
- **Campus:** PrISUm solar car team at Iowa State (Aug 2016 – May 2018), electrical team, project Penumbra, World Solar Challenge; prototyped photodetector + servo sun-tracking for the array.
- **Assets in repo:** `images/` — portrait `avatar2.jpeg`; `audio_beam.jpg` (Audio Beam system block diagram); `imgMorphGUI.JPG` (the PyQt morphing interface); `gogogophers_encoding.png` (Huffman encoding diagram); `banner.jpg`, a landscape photograph of a mountain lake, most likely the owner's own; and `pic01.jpg`, a photograph of the PrISUm solar car *Penumbra* on the road in Australia with Iowa State and sponsor livery. `pic02.jpg` and `pic03.jpg` are blurred grey gradients left over from the HTML5 UP template and carry no subject. All are kept on disk; only the portrait, the block diagram, and the morphing screenshot are currently shown on the page. `documents/` holds 5 project PDFs, ~11 MB total.
- **Contact:** adityata98@gmail.com; linkedin.com/in/adityata/.

Absences future work must not fabricate: no published papers with venues, no open-source projects with stars, no named testimonials or references, no GitHub profile link currently on the site, no metrics beyond the ~30% figure above, no current résumé PDF in the repo.

## Product Principles

1. **Placement before depth.** A recruiter must be able to say what Aditya is and where he works within one viewport; everything else is earned scroll.
2. **Range is the thesis, evidence is the proof.** Every claim of breadth is anchored to a specific shipped thing at that layer, never asserted as an adjective.
3. **Curate rather than accumulate.** The site's credibility comes from what it leaves out; an unpruned archive reads as a student page regardless of its contents.
4. **Truthful specificity.** Real platform names, real specs, real dates. No invented metrics, employers, or outcomes.
5. **Hand-maintainable.** Adding a job or project a year from now should mean copying an existing block and editing text.

## Accessibility & Inclusion

No product-specific standard was established. Baseline expectation: keyboard-navigable, real semantic landmarks, and text contrast that survives the requested dark theme — recruiters read this on phones in poor lighting.
