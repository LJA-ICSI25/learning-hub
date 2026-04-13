# Learn Hub

## Current file paths (for GitHub / uploads)

| Role | Path |
|------|------|
| **Canonical project** (edit here, run `index.html`, run `npm run build:techplus`) | `G:\Hubs\Learn-Hub` |
| **Latest full mirror** (same tree, no `node_modules`; good for drag-and-drop or zip upload) | `G:\All_Learn-hub\Learn-hub_recent` |

Refresh the mirror after you change the canonical copy (PowerShell):

```powershell
robocopy "G:\Hubs\Learn-Hub" "G:\All_Learn-hub\Learn-hub_recent" /MIR /XD node_modules
```

**Flat lists:** see **`PATHS_FOR_GITHUB.txt`** in the project root (absolute + relative paths, one file per line). The same file is copied into the mirror folder when you re-run `robocopy` above.

### Absolute paths — `G:\Hubs\Learn-Hub\…`

```
G:\Hubs\Learn-Hub\add-more-lessons.mjs
G:\Hubs\Learn-Hub\build-split.mjs
G:\Hubs\Learn-Hub\chapters\01_Core_Hardware_Components.md
G:\Hubs\Learn-Hub\chapters\02_Peripherals_and_Connectors.md
G:\Hubs\Learn-Hub\chapters\03_Computing_Devices_and_the_Internet_of_Things.md
G:\Hubs\Learn-Hub\chapters\04_Operating_Systems.md
G:\Hubs\Learn-Hub\chapters\05_Software_Applications.md
G:\Hubs\Learn-Hub\chapters\06_Software_Development.md
G:\Hubs\Learn-Hub\chapters\07_Database_Fundamentals.md
G:\Hubs\Learn-Hub\chapters\08_Networking_Concepts_and_Technologies.md
G:\Hubs\Learn-Hub\chapters\09_Cloud_Computing_and_Artificial_Intelligence.md
G:\Hubs\Learn-Hub\chapters\10_Security_Concepts_and_Threats.md
G:\Hubs\Learn-Hub\chapters\11_Security_Best_Practices.md
G:\Hubs\Learn-Hub\chapters\12_Data_Continuity_and_Computer_Support.md
G:\Hubs\Learn-Hub\expand-capstone-and-quiz-bank.mjs
G:\Hubs\Learn-Hub\expand-tracks-more.mjs
G:\Hubs\Learn-Hub\index.html
G:\Hubs\Learn-Hub\assets\learn-hub-tokens.css
G:\Hubs\Learn-Hub\assets\learn-hub-layout.css
G:\Hubs\Learn-Hub\assets\learn-hub-teach.css
G:\Hubs\Learn-Hub\assets\learn-hub-app.js
G:\Hubs\Learn-Hub\assets\learn-hub-courses.js
G:\Hubs\Learn-Hub\assets\learn-hub-deep.js
G:\Hubs\Learn-Hub\assets\learn-hub-depth.js
G:\Hubs\Learn-Hub\assets\learn-hub-playground.js
G:\Hubs\Learn-Hub\assets\learn-hub-techplus.js
G:\Hubs\Learn-Hub\assets\learn-hub-techplus-md.js
G:\Hubs\Learn-Hub\assets\learn-hub-security-md.js
G:\Hubs\Learn-Hub\assets\learn-hub-kali-md.js
G:\Hubs\Learn-Hub\docs\KALI_HANDS_ON_LAB_CURRICULUM.md
G:\Hubs\Learn-Hub\docs\SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md
G:\Hubs\Learn-Hub\docs\LEARN_HUB_COMPLETE_REFERENCE.html
G:\Hubs\Learn-Hub\scripts\build-kali-from-markdown.mjs
G:\Hubs\Learn-Hub\scripts\build-security-from-markdown.mjs
G:\Hubs\Learn-Hub\scripts\emit-kali-slow-curriculum.mjs
G:\Hubs\Learn-Hub\scripts\kali-lab-rich-procedures.mjs
G:\Hubs\Learn-Hub\package-lock.json
G:\Hubs\Learn-Hub\package.json
G:\Hubs\Learn-Hub\PATHS_FOR_GITHUB.txt
G:\Hubs\Learn-Hub\README.md
G:\Hubs\Learn-Hub\scripts\_dump-segments.mjs
G:\Hubs\Learn-Hub\scripts\apply-techplus-html-polish.mjs
G:\Hubs\Learn-Hub\scripts\apply-techplus-readability-ps1.ps1
G:\Hubs\Learn-Hub\scripts\audit-techplus-consistency.mjs
G:\Hubs\Learn-Hub\scripts\build-techplus-from-markdown.mjs
G:\Hubs\Learn-Hub\scripts\build-techplus-import.mjs
G:\Hubs\Learn-Hub\scripts\fold-depth-into-courses.mjs
G:\Hubs\Learn-Hub\scripts\format-techplus-markdown.mjs
G:\Hubs\Learn-Hub\scripts\migrate-fcc-deep-playground.mjs
G:\Hubs\Learn-Hub\scripts\normalize-techplus-markdown.mjs
G:\Hubs\Learn-Hub\scripts\print-learn-hub-manifest.mjs
G:\Hubs\Learn-Hub\scripts\rebuild-techplus.cmd
G:\Hubs\Learn-Hub\scripts\techplus-html-polish.mjs
G:\Hubs\Learn-Hub\scripts\techplus-pdf-fixes.mjs
G:\Hubs\Learn-Hub\scripts\validate-techplus-html.mjs
G:\Hubs\Learn-Hub\scripts\compare-tech-curriculum.mjs
G:\Hubs\Learn-Hub\scripts\restore-techplus-md-from-reference.mjs
G:\Hubs\Learn-Hub\scripts\vendor\marked.esm.mjs
G:\Hubs\Learn-Hub\WORKING_COPY.txt
```

Self-hosted, **practice-first** study app (FreeCodeCamp-style): **editor and Run/Check on top**, optional **Reference** fold-out for theory on most tracks. **Eight courses** ship in `learn-hub-courses.js`: HTML, CSS, JavaScript, Python, SQL, **Security** (workplace Security+ prep + quizzes), **Labs** (slow Kali VM hands-on curriculum), and **Tech+** (CompTIA Tech+ study guide + quizzes).

**Curriculum size (bundled `assets/learn-hub-courses.js`):** **875** lessons — HTML **66**, CSS **64**, JavaScript **64**, Python **85**, SQL **83**, Tech+ **264**, Security **146**, Labs **93** (welcome plus **one lesson per Kali lab** from `docs/KALI_HANDS_ON_LAB_CURRICULUM.md`). To **regenerate** that Markdown from the emitter, run `npm run emit:kali-slow` (pulls phased lab text from **`scripts/kali-lab-rich-procedures.mjs`** into **`scripts/emit-kali-slow-curriculum.mjs`**), then `npm run build:kali`. You can also edit **`docs/KALI_HANDS_ON_LAB_CURRICULUM.md`** directly and only run **`npm run build:kali`**. Of those, **190** are **Tech+ study-guide** steps (IDs `tech-sg-01-01` … through chapter **12**); the remaining Tech+ entries are intro, quiz, and non-study-guide learn steps served from **`learn-hub-techplus.js`** and related bundles.

**Tech+ Markdown output** is split for loading: **`assets/learn-hub-techplus-md.js`** is a **loader** (chapter hashes + `loadLearnHubTechplusChapter`). The actual segment HTML lives in **`assets/learn-hub-techplus-md-ch01.js`** … **`ch12.js`** (merged into `window.LEARN_HUB_TECHPLUS_MD` as each chapter loads). Regenerate from **`chapters/*.md`** with **`npm run build:techplus`** (runs **marked** + **`polishTechplusHtml`**). If **`learn-hub-courses.js`** ever lists `tech-sg-*` steps whose HTML is missing from the chunks (for example after a partial build), run **`npm run restore:techplus-md`**, which copies the canonical course list from **`G:\All_Learn-hub\Learn-Hub\learn-hub-courses.js`** and inserts **only missing** study-guide segments from that tree’s monolithic **`learn-hub-techplus-md.js`** into the chapter files—without overwriting segments already present in **`Hubs\Learn-Hub`**.

Segment HTML is passed through **`scripts/techplus-html-polish.mjs`** on build and optionally via **`npm run polish:techplus-md`**. One `index.html` plus scripts under **`assets/`**—no backend.

## Which folder is the working, correct copy?

Use this table so you always know what to open, serve, and edit.

| Path | What it is |
|------|------------|
| **`G:\Hubs\Learn-Hub`** | **Canonical working project.** This is the copy you run (`index.html`), edit, and rebuild. **`assets/learn-hub-courses.js`** must list every lesson id the app can open; **Tech+ study-guide** reading for `tech-sg-*` ids must exist in the **chapter chunk** files (or be loadable after **`restore:techplus-md`**). **Security** (`learn-hub-security-md.js`) and **Labs** (`learn-hub-kali-md.js`) lesson ids must match their bundles after **`build:security`** / **`build:kali`**. The small **`assets/learn-hub-techplus-md.js`** loader and each **`learn-hub-techplus-md-chNN.js`** chunk include content hashes—bump **`index.html`** `?v=` on the loader, **Security**, **Kali**, and **`learn-hub-courses.js`** after you change bundles. |
| **`G:\Learn-Hub_Backup`** | **Point-in-time mirror** of `Hubs\Learn-Hub` (last full robocopy). Restore from here if the working tree is corrupted; after restoring, redo any edits made after the backup. Re-run a folder mirror when you want an updated snapshot. |
| **`G:\All_Learn-hub\Learn-hub_recent`** | **Upload-friendly mirror** of **`G:\Hubs\Learn-Hub`** (same files and folders, **`node_modules` excluded**). Regenerate with `robocopy "G:\Hubs\Learn-Hub" "G:\All_Learn-hub\Learn-hub_recent" /MIR /XD node_modules` before zipping or pointing GitHub Desktop at a clean tree. |
| **`G:\Hubs\TechPlus_Lessons\learning-hub-main`** | **Reference / donor tree** that held a known-good study-guide bundle used to repair Learn-Hub. Unless you maintain that repo on purpose, **do not treat it as your primary app**—day-to-day work lives under **`Hubs\Learn-Hub`**. |

**Sanity check:** Search **`assets/learn-hub-techplus-md-ch*.js`** (or the loader) for `eerroe` or `oorpueoeg`. If either appears, a chunk is corrupted or the build toolchain mangled text—fix **`chapters/*.md`** and run **`npm run build:techplus`**, or run **`npm run restore:techplus-md`** if only segment *coverage* is wrong. Then **`npm run polish:techplus-md`** / **`npm run validate:techplus-md`** as needed, and refresh **`index.html`** cache-bust query strings.

**Tag safety:** Run **`npm run validate:techplus-md`** after changing the Tech+ bundle. It flags raw `<body>`, `<script>`, or `<li>…</p>` corruption that would break the host page. The polish script (`apply-techplus-html-polish.mjs`) runs the same checks before writing.

## Quick start

1. Keep `index.html` at the project root and the [Core files](#core-files) bundle under **`assets/`** (same folder tree as this README).
2. Open `index.html` in **Chrome or Edge** (recommended), ideally via a **local server** so large scripts load reliably:
   - Example: `npx serve .` or `python -m http.server` from this directory.
3. Pick a **track** in the sidebar, then a **lesson**. Use **Continue** on read-only learn steps; use **Check** on graded practice/challenge/quiz steps.

**Optional:** For SQL-only with a similar layout, see [`../../SQL/index.html`](../../SQL/index.html) (Learn-Hub is under `Hubs/` on your drive).

## Tracks

| Track        | Workspace                         | Notes |
|-------------|-----------------------------------|--------|
| HTML        | HTML / CSS / JS + live preview    | Learn steps include sandbox starters. |
| CSS         | Same                              | |
| JavaScript  | Same                              | |
| Python      | Pyodide (downloads on first run)  | Needs network for the runtime CDN. |
| SQL         | sql.js + per-lesson DB seed       | Needs network for the wasm CDN. |
| Security    | Quiz panel on quiz steps          | Long-form reading from `docs/SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md` → **`learn-hub-security-md.js`** (run `npm run build:security`). Same **Notes** / **Check-in** layout as Tech+ for learn vs quiz steps. |
| Labs        | No editor (read-only **Notes**)   | **Kali VM lab curriculum**: one sidebar lesson per lab, slow pace. Source **`docs/KALI_HANDS_ON_LAB_CURRICULUM.md`**. Regenerating from code: **`npm run emit:kali-slow`** (Markdown from **`emit-kali-slow-curriculum.mjs`** + **`kali-lab-rich-procedures.mjs`**), then **`npm run build:kali`** → **`learn-hub-kali-md.js`** + Labs rows in **`learn-hub-courses.js`**. |
| Tech+       | Quiz panel on quiz steps          | **Study guide lessons** (`tech-sg-XX-YY`): one section/exercise/review block per step in the main reading column; sidebar **unit** groups steps by book chapter (`Ch N — …`). Optional **On this page** outline when headings allow. Other **Learn** steps: **Lesson reading** (topic excerpts from `learn-hub-techplus.js`). **Continue** / **Skip lesson** / **Check** as usual. |

## Core files

Load **order matters** (see `index.html`; **Security** and **Kali** MD bundles load before `learn-hub-deep.js` / `learn-hub-app.js` so `readHtml` merge sees them):

| File | Purpose |
|------|---------|
| `index.html` | Shell; links to CSS/JS under `assets/`. |
| `assets/learn-hub-tokens.css` | Design tokens + high-contrast variable overrides. |
| `assets/learn-hub-layout.css` | Shell, sidebar, practice column, workspaces, utilities. |
| `assets/learn-hub-teach.css` | Lesson shell, strips, reference, Tech+ reading prose. |
| `assets/learn-hub-courses.js` | `window.LEARN_HUB_COURSES` — lesson list, kinds, titles, starters, checks, quiz questions. Lesson `narrative` fields are kept **empty** for most lessons; reading is supplied by merged bundles (see below). |
| `assets/learn-hub-depth.js` | Stub: `window.LEARN_HUB_DEPTH = {}` (reserved for optional future append-only snippets). |
| `assets/learn-hub-techplus.js` | `window.LEARN_HUB_TECHPLUS` — HTML excerpts from the local Tech+ study guide for selected Tech+ lesson IDs (topic notes, tables, drills). |
| `assets/learn-hub-techplus-md.js` | **Loader** for Tech+ Markdown segments: defines `loadLearnHubTechplusChapter` and per-chapter **`?v=`** hashes. Actual HTML lives in **`learn-hub-techplus-md-ch01.js`** … **`ch12.js`** (each assigns into `window.LEARN_HUB_TECHPLUS_MD`). Generated by **`npm run build:techplus`** from **`chapters/*.md`** via **`marked`** + **`polishTechplusHtml`** (see `scripts/techplus-chapter-io.mjs`). |
| `assets/learn-hub-security-md.js` | **`window.LEARN_HUB_SECURITY_MD`** — per-lesson HTML for Security track ids (`lh-sec-*`, quizzes). Generated by **`npm run build:security`** from **`docs/SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md`**. Large single-line JSON payload; edit the Markdown source or build script, not by hand. |
| `assets/learn-hub-kali-md.js` | **`window.LEARN_HUB_KALI_MD`** — per-lesson HTML for **Labs** track ids (`labs-kali-*`). Generated by **`npm run build:kali`**, which parses **`docs/KALI_HANDS_ON_LAB_CURRICULUM.md`** for `<!-- id: … -->` blocks. Optional full Markdown regen: **`npm run emit:kali-slow`** (uses **`scripts/kali-lab-rich-procedures.mjs`** for long **Procedure** sections). |
| `assets/learn-hub-techplus-md-ch01.js` … `ch12.js` | **Study-guide segment HTML** (~**190** `tech-sg-*` keys total across chapters). Not listed individually in [File manifest](#file-manifest-integrity-reference)—sizes change when you rebuild. |
| `assets/learn-hub-deep.js` | `window.LEARN_HUB_DEEP` — per-lesson **full reference HTML** plus shared drill blocks and external doc links. |
| `assets/learn-hub-playground.js` | `window.LEARN_HUB_PLAYGROUND` — default **sandbox starters** for **learn** steps on web / Python / SQL. |
| `assets/learn-hub-app.js` | UI, progress, merging `readHtml`, workspaces, Run/Check logic, Tech+ study-guide layout (TOC, full-pane reading, Skip lesson). For **`tech-sg-*`** steps, **normalizes** the study-guide **source** line so the bold title matches headings inside that segment (avoids PDF/chapter bleed in the stored HTML). |
| `package.json` / `package-lock.json` | Node metadata and lockfile; **`npm install`** pulls **`marked`** for `npm run build:techplus`. Not loaded by the browser. |

## How content is merged at runtime

For each lesson, the app builds:

```text
readHtml = (narrative from course, usually "")
         + (LEARN_HUB_DEPTH[id] if any)
         + (LEARN_HUB_DEEP[id] if any)
         + (LEARN_HUB_TECHPLUS[id] if any)
         + (LEARN_HUB_TECHPLUS_MD[id] if any)
         + (LEARN_HUB_SECURITY_MD[id] if any)
         + (LEARN_HUB_KALI_MD[id] if any)
```

The **teach** column shows:

1. A short **strip** (track, unit, kind, title, hint).
2. **Reading content** — behavior depends on track and lesson:
   - **Tech+ study guide readings** (`tech-sg-XX-YY`): the merged HTML is the **main lesson** for that step (scroll the column). Includes a short **source** line (lesson title + chapter), and when there are enough headings, an **On this page** outline with in-page links. Use **Skip lesson** to mark a step done without re-reading.
   - **Other Tech+ learn** steps: content is inside **`<details open>`** labeled **Lesson reading — notes, tables & drills** so excerpts stay visible without an extra click. The inner panel is **not** height-capped so long notes read like a normal page.
   - **Other tracks** (HTML/CSS/JS/Python/SQL): theory stays in a **Reference** `<details>` (collapsed by default) with a scroll region for long pages.
   - **Security** and **Labs**: long-form content is merged from **`LEARN_HUB_SECURITY_MD`** / **`LEARN_HUB_KALI_MD`** into the same **Notes** / full-reading column as Tech+ (practice column hidden on learn steps). **Security** quizzes use the **Check-in** panel like Tech+.

**Tech+ learn** steps hide the code workspace; use **Continue** after reading. **Tech+ quiz** steps use the **Check-in** panel. **Labs** learn steps are read-only in the browser (real commands run on your **Kali VM**, not inside Learn Hub).

## Lesson kinds

- **`learn`** — Explore the editor (HTML/CSS/JS/Python/SQL) or read the lesson text (**Tech+**, **Security**, **Labs**). **Check** is disabled when there is no `check` object. **Continue** advances.
- **`practice` / `challenge`** — Graded with **Check** (DOM/CSS/JS/SQL/Python checks as defined in the lesson).
- **`quiz`** — Multiple choice; **Tech+** and **Security** use the in-page **Check-in** quiz panel.

## Keyboard shortcuts (web / SQL)

- **Ctrl+Enter** — Run (preview or SQL execute).
- **Shift+Ctrl+Enter** — Check (where applicable).

## Progress and XP

Progress is stored in **browser `localStorage`** (key managed inside `learn-hub-app.js`). Use **Reset all saved progress** in the sidebar to clear it.

The sidebar shows **XP** and progress vs **all tracks combined** (currently **875** lessons in the bundled curriculum). Rebuilding **Tech+**, **Security**, or **Labs** bundles changes lesson counts and ids; if progress feels “off,” use **Reset all saved progress** in the sidebar (the app may bump its storage key when bundle shapes change).

## Maintenance scripts (Node)

Run from `Hubs/Learn-Hub` or adjust paths (this project lives at `G:\Hubs\Learn-Hub`). Install dev dependencies once (`npm install`) so **`marked`** is available for Tech+ builds.

**npm shortcuts** (see `package.json`):

| Command | What it does |
|--------|----------------|
| `npm run build:techplus` | Runs **`scripts/build-techplus-from-markdown.mjs`** — regenerates **`learn-hub-techplus-md.js`** from chapter Markdown (includes **polish** on each segment). |
| `npm run polish:techplus-md` | Runs **`scripts/apply-techplus-html-polish.mjs`** — re-applies **`polishTechplusHtml`** to the **current** `learn-hub-techplus-md.js` in place, validates, prints a suggested **`?v=`** hash for `index.html`. Use after copying a donor bundle or tweaking polish rules. |
| `npm run validate:techplus-md` | Runs **`scripts/validate-techplus-html.mjs`** — read-only checks (raw `<body>` / `<script>` / bad list markup outside `<pre>`, etc.). |
| `npm run rebuild:techplus` | Runs **`normalize:techplus`** then **`build:techplus`** (full Markdown normalize + regenerate bundle). |
| `npm run normalize:techplus` | Runs **`scripts/normalize-techplus-markdown.mjs`** — optional chapter Markdown cleanup before a build. |
| `npm run audit:techplus-md` | Runs **`audit-techplus-markdown-quality.mjs`** — scans **`chapters/*.md`** for common PDF artifacts (exam code spacing, page headers, split words). Use before stakeholder review. |
| `npm run qa:techplus` | **Full gate:** **`normalize:techplus`** → **`build:techplus`** → **`verify:techplus`** → **`audit:techplus-md`**. Run after bulk chapter edits. |
| `npm run verify:techplus` | Runs **`audit-techplus-consistency.mjs`**, **`validate-techplus-html.mjs`**, and **`audit-techplus-segment-foreign-ids.mjs`** — course ids vs segments, HTML safety, no stray other-lesson ids in a segment’s HTML. |
| `npm run restore:techplus-md` | Runs **`scripts/restore-techplus-md-from-reference.mjs`** — copies **`learn-hub-courses.js`** from **`G:\All_Learn-hub\Learn-Hub`**, merges **missing** `tech-sg-*` HTML from that folder’s monolithic **`learn-hub-techplus-md.js`** into **`Hubs`** chapter chunks, regenerates loader hashes. Use when study-guide steps are listed but chunk HTML is incomplete. |
| `npm run fix:techplus-banners` | Runs **`scripts/fix-techplus-source-banner-titles.mjs`** — optional **disk** repair when a banner’s **`Ch N —`** text disagrees with the chapter span (rare; render-time normalization usually suffices). |
| `npm run build:security` | Runs **`scripts/build-security-from-markdown.mjs`** — regenerates **`learn-hub-security-md.js`** and patches the **Security** lesson list in **`learn-hub-courses.js`**. Edit **`docs/SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md`** first. (Re-run **`scripts/build-security-quizzes.mjs`** separately if your workflow regenerates quiz steps from the same Markdown.) |
| `npm run emit:kali-slow` | Runs **`scripts/emit-kali-slow-curriculum.mjs`** — overwrites **`docs/KALI_HANDS_ON_LAB_CURRICULUM.md`**. Imports **`scripts/kali-lab-rich-procedures.mjs`** (per-lab focus strings and phased wrappers: Apache mapping/reload/verify, Python/SQL/Security/Tech templates). Use for a full regen from source tables; otherwise edit the Markdown and run **`build:kali`** only. |
| `npm run build:kali` | Runs **`scripts/build-kali-from-markdown.mjs`** — parses **`docs/KALI_HANDS_ON_LAB_CURRICULUM.md`** (`<!-- id: labs-kali-… -->`), writes **`assets/learn-hub-kali-md.js`**, patches the **Labs** lesson list in **`learn-hub-courses.js`**. Bump **`index.html`** `learn-hub-kali-md.js?v=` after changes. |

| Script | What it does |
|--------|----------------|
| `scripts/techplus-html-polish.mjs` | **`export function polishTechplusHtml(html)`** — shared post-pass used by the Markdown **build** and by **`apply-techplus-html-polish.mjs`**. |
| `scripts/print-learn-hub-manifest.mjs` | Prints the **line / byte / character** Markdown table used in [File manifest](#file-manifest-integrity-reference). Run after intentional changes, paste over the README table, re-run once more if `README.md` counts shift. |
| `scripts/build-techplus-from-markdown.mjs` | Reads **`chapters/*.md`**, preprocesses PDF-style line breaks and objective bullets, runs **marked** (GFM **without** hard line breaks — avoids a wall of `<br>` tags), applies **`polishTechplusHtml`**, writes **`learn-hub-techplus-md.js`**. If chapter lesson IDs are missing from the Tech+ course, it **prepends** `tech-sg-01` … `tech-sg-12` to `learn-hub-courses.js`. **Re-run after you edit any bundled chapter `.md` file.** |
| `scripts/build-techplus-import.mjs` | Reads `../../TechPlus-Stuff/TechPlus/TechPlus_Study_Guide.html`, writes **`learn-hub-techplus.js`** (condensed excerpts for mapped lesson IDs). |
| `scripts/migrate-fcc-deep-playground.mjs` | Reads `assets/learn-hub-courses.js`, moves any non-empty `narrative` into `assets/learn-hub-deep.js` (plus expansion/footer blocks), clears narratives, regenerates `assets/learn-hub-playground.js` learn-step sandboxes. **Re-run after you edit lesson text inside the courses file.** |
| `scripts/fold-depth-into-courses.mjs` | Legacy helper: merged old `learn-hub-depth.js` scaffolding into courses (only useful if you restore historical depth data from git). |
| `scripts/kali-lab-rich-procedures.mjs` | Exports phased **Procedure** Markdown for Kali labs (`apachePhasesPreamble` / `apachePhasesEpilogue`, `fullApacheCssLikeProcedure`, `pythonLabProcedure`, `sqlLabProcedure`, `secLabProcedure`, `techLabProcedure`, and per-track **`_*_LAB_FOCUS`** arrays). Consumed only by **`emit-kali-slow-curriculum.mjs`**. |

Other repo tools (curriculum expansion / capstones):

- `expand-tracks-more.mjs`
- `expand-capstone-and-quiz-bank.mjs`
- `add-more-lessons.mjs`
- `build-split.mjs`

Read each file’s header comment for exact usage.

## Tech+ source material

**Editorial standard (terminology, hyphenation, code examples):** `docs/TECHPLUS_EDITORIAL_STANDARD.md`. **Chapter sign-off checklist:** `docs/TECHPLUS_CHAPTER_REVIEW_CHECKLIST.md`.

| Source | Role |
|--------|------|
| `chapters/*.md` | Twelve **chapter sources** (Markdown) stored **inside Learn Hub**. Edit here, then run **`npm run build:techplus`** to regenerate segments and the Tech+ lesson list (polish runs inside that pipeline). Each chapter has **`### Introduction`** immediately **after** the exam-objectives list so the first study-guide step (**Chapter overview & objectives**) is **objectives-only**; chapter intro prose starts in the next lesson. Add **`### Section Title`** lines at every major topic boundary (see chapter 1 for density): the build splits lessons on `<h3>` headings, **`EXERCISE`**, and **Review Questions** — without enough `###` headings, one sidebar step can swallow unrelated book sections. Optional: **`npm run restore:techplus-md`** merges **only missing** `tech-sg-*` HTML from the **`G:\All_Learn-hub\Learn-Hub`** monolith into chapter chunks — it does **not** replace `learn-hub-courses.js` (sidebar titles must stay in sync with the build). |
| `docs/SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md` | **Security** track source Markdown. Lesson markers use `<!-- id: lh-sec-… -->` style comments (see repo **`scripts/build-security-from-markdown.mjs`**). Run **`npm run build:security`** after edits. |
| `docs/KALI_HANDS_ON_LAB_CURRICULUM.md` | **Labs** track source Markdown: `<!-- id: labs-kali-… -->` + optional `<!-- unit: … -->` per lesson. Run **`npm run build:kali`** after any edit. For a **full regen** of lab prose from the emitter, run **`npm run emit:kali-slow`** first (updates this file from **`emit-kali-slow-curriculum.mjs`** + **`kali-lab-rich-procedures.mjs`**), then **`npm run build:kali`**. |
| `learn-hub-techplus-md.js` + `learn-hub-techplus-md-ch01.js` … `ch12.js` | **Per-lesson HTML** for study-guide ids `tech-sg-01-01`, … — the browser loads the **loader** first, then **lazy-loads** each chapter chunk. No runtime path outside this repo. After replacing or hand-editing chunks, run **`npm run polish:techplus-md`** / **`npm run verify:techplus`** and update **`index.html`** `?v=` strings. |
| `learn-hub-techplus.js` | Shorter **topic excerpts** (regenerate with `scripts/build-techplus-import.mjs`, which reads a copy of the study guide HTML from your materials — **build-time only**). |
| *(optional)* `TechPlus_Study_Guide.html` | Separate interactive guide (quizzes, practice exam) if you keep it alongside this project — not required for Learn Hub to run. |

## Requirements

- Modern browser with JavaScript enabled.
- **Network** for Python (Pyodide) and SQL (sql.js) CDN loads on first use; **`npm install`** in this folder for the **marked** devDependency (used by **`build:techplus`**, **`build:security`**, **`build:kali`**, and **`emit:kali-slow`**).
- All core `.js` files under **`assets/`** must be **same-origin** with `index.html` (local server or static host such as GitHub Pages).

## Troubleshooting

- **Blank or stuck UI** — Hard refresh (Ctrl+Shift+R), confirm no 404s in DevTools → Network, verify every script under **`assets/`** loaded (including **`learn-hub-techplus-md.js`**, **`learn-hub-security-md.js`**, **`learn-hub-kali-md.js`**).
- **Labs or Security reading missing** — Confirm `index.html` loads **`learn-hub-kali-md.js`** / **`learn-hub-security-md.js`** before **`learn-hub-app.js`**. Re-run **`npm run build:kali`** or **`npm run build:security`** after editing the source Markdown; bump the matching **`?v=`** cache-bust query on those script tags if the browser keeps old bundles.
- **Slow first load on Tech+** — The first chapter chunk still parses a large script; prefer Chrome/Edge and a local server; avoid IDE embedded preview if it struggles. Subsequent chapters load on demand.
- **IDE preview issues** — Open the same folder in Chrome/Edge with a local server; some embedded previews mishandle large single-file apps.
- **SQLite / Python errors** — Check connectivity; HTML/CSS/JS/Tech+ reading still work offline once scripts are loaded.
- **Tech+ layout looks wrong or DevTools shows stray `<body>` / `<script>`** — Run **`npm run validate:techplus-md`**. If it fails, run **`npm run polish:techplus-md`** (or a full **`npm run build:techplus`** from clean Markdown), then hard-refresh with an updated **`learn-hub-techplus-md.js?v=`** in `index.html`.

## File manifest (integrity reference)

Use this table to spot **accidental truncation**, **copy/paste mistakes**, or **missing files** after merges or moving folders. Compare **UTF-8 bytes** and **line count** first; those should match exactly if nothing material changed.

| Column | Meaning |
|--------|--------|
| **Lines** | Number of lines when split on `\n` / `\r\n` (includes a final line even when the file has no trailing newline). |
| **UTF-8 bytes** | Raw file length on disk — the most reliable single number for “did half the bundle disappear?”. |
| **Unicode scalar values** | Count of Unicode code points (via string iteration). Mostly matches “characters”; can differ from **bytes** when text is non-ASCII. |

**Refresh after intentional edits** (including edits to this README section):

```bash
cd Hubs/Learn-Hub
node scripts/print-learn-hub-manifest.mjs
```

Paste the command output **over the table below** (from the header row through the **Total** row). The script lists core Learn-Hub bundles, **Security** / **Kali** outputs, **`docs/KALI_HANDS_ON_LAB_CURRICULUM.md`**, Kali emitter helpers (**`kali-lab-rich-procedures.mjs`**), Tech+ polish/validate scripts, and all **`chapters/*.md`** sources.

| File | Lines | UTF-8 bytes | Unicode scalar values* |
|------|------:|-------------:|-------------------------:|
| `README.md` | 338 | 33,349 | 33,183 |
| `index.html` | 208 | 12,458 | 12,417 |
| `assets/learn-hub-tokens.css` | 143 | 4,810 | 4,795 |
| `assets/learn-hub-layout.css` | 1,408 | 30,785 | 30,767 |
| `assets/learn-hub-teach.css` | 1,222 | 28,698 | 28,680 |
| `assets/learn-hub-app.js` | 2,309 | 89,873 | 89,744 |
| `assets/learn-hub-courses.js` | 2 | 426,502 | 424,975 |
| `assets/learn-hub-deep.js` | 439 | 996,504 | 986,700 |
| `assets/learn-hub-depth.js` | 3 | 160 | 158 |
| `assets/learn-hub-playground.js` | 3 | 71,367 | 70,539 |
| `assets/learn-hub-techplus.js` | 3 | 128,256 | 127,156 |
| `assets/learn-hub-techplus-md.js` | 37 | 1,305 | 1,303 |
| `assets/learn-hub-security-md.js` | 9 | 1,849,671 | 1,823,458 |
| `assets/learn-hub-kali-md.js` | 9 | 372,445 | 368,633 |
| `docs/KALI_HANDS_ON_LAB_CURRICULUM.md` | 6,377 | 264,221 | 260,873 |
| `scripts/learn-hub-paths.mjs` | 19 | 554 | 554 |
| `scripts/techplus-chapter-io.mjs` | 120 | 4,750 | 4,750 |
| `chapters/01_Core_Hardware_Components.md` | 1,675 | 107,181 | 106,925 |
| `chapters/02_Peripherals_and_Connectors.md` | 1,717 | 104,636 | 104,497 |
| `chapters/03_Computing_Devices_and_the_Internet_of_Things.md` | 1,689 | 105,970 | 105,773 |
| `chapters/04_Operating_Systems.md` | 1,946 | 123,337 | 123,083 |
| `chapters/05_Software_Applications.md` | 1,894 | 118,930 | 118,683 |
| `chapters/06_Software_Development.md` | 1,070 | 61,153 | 60,929 |
| `chapters/07_Database_Fundamentals.md` | 1,039 | 61,838 | 61,702 |
| `chapters/08_Networking_Concepts_and_Technologies.md` | 1,918 | 118,674 | 118,407 |
| `chapters/09_Cloud_Computing_and_Artificial_Intelligence.md` | 978 | 58,702 | 58,556 |
| `chapters/10_Security_Concepts_and_Threats.md` | 1,566 | 104,459 | 104,257 |
| `chapters/11_Security_Best_Practices.md` | 1,475 | 89,900 | 89,730 |
| `chapters/12_Data_Continuity_and_Computer_Support.md` | 1,838 | 120,827 | 120,541 |
| `scripts/add-more-lessons.mjs` | 753 | 30,289 | 30,255 |
| `scripts/build-split.mjs` | 66 | 2,867 | 2,865 |
| `scripts/expand-capstone-and-quiz-bank.mjs` | 529 | 22,908 | 22,881 |
| `scripts/expand-tracks-more.mjs` | 519 | 29,908 | 29,842 |
| `scripts/build-techplus-from-markdown.mjs` | 1,436 | 61,251 | 60,802 |
| `scripts/build-techplus-import.mjs` | 126 | 4,769 | 4,767 |
| `scripts/apply-techplus-html-polish.mjs` | 47 | 1,958 | 1,954 |
| `scripts/techplus-html-polish.mjs` | 293 | 31,848 | 31,760 |
| `scripts/validate-techplus-html.mjs` | 68 | 2,481 | 2,479 |
| `scripts/fold-depth-into-courses.mjs` | 81 | 3,393 | 3,391 |
| `scripts/migrate-fcc-deep-playground.mjs` | 155 | 6,541 | 6,509 |
| `scripts/print-learn-hub-manifest.mjs` | 93 | 3,895 | 3,895 |
| `scripts/audit-techplus-consistency.mjs` | 135 | 4,826 | 4,788 |
| `scripts/audit-techplus-segment-foreign-ids.mjs` | 49 | 1,473 | 1,469 |
| `scripts/compare-tech-curriculum.mjs` | 61 | 2,253 | 2,253 |
| `scripts/fix-techplus-source-banner-titles.mjs` | 129 | 4,416 | 4,400 |
| `scripts/restore-techplus-md-from-reference.mjs` | 99 | 3,487 | 3,479 |
| `scripts/build-security-from-markdown.mjs` | 143 | 6,699 | 6,684 |
| `scripts/build-kali-from-markdown.mjs` | 139 | 5,559 | 5,548 |
| `scripts/emit-kali-slow-curriculum.mjs` | 883 | 41,907 | 41,667 |
| `scripts/kali-lab-rich-procedures.mjs` | 509 | 42,675 | 42,341 |
| **Total (listed files)** | **37,767** | **5,806,718** | **5,755,797** |

\*Same as “Unicode scalar values” column header above. Last aligned with `node scripts/print-learn-hub-manifest.mjs` on **2026-04-13** (UTC calendar date). The manifest still omits **`learn-hub-techplus-md-ch01.js` … `ch12.js`** (very large generated bundles), **`docs/SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md`** (large Security source Markdown), `package.json`, `PATHS_FOR_GITHUB.txt`, and other helpers; see [Current file paths](#current-file-paths-for-github--uploads) for upload-oriented lists.

## License / data

Curriculum JSON and generated bundles are **local educational content** for personal/self-hosted use. External links (MDN, Python docs, SQLite, CompTIA) point to third-party sites under their own terms.
