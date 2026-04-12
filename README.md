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

Self-hosted, **practice-first** study app (FreeCodeCamp-style): **editor and Run/Check on top**, optional **Reference** fold-out for theory on most tracks.

**Curriculum size (bundled `assets/learn-hub-courses.js`):** **626** lessons — HTML **66**, CSS **64**, JavaScript **64**, Python **85**, SQL **83**, Tech+ **264**. Of those, **190** are **Tech+ study-guide** steps (IDs `tech-sg-01-01` … through chapter **12**); the remaining Tech+ entries are intro, quiz, and non-study-guide learn steps served from **`learn-hub-techplus.js`** and related bundles.

**Tech+ Markdown output** is split for loading: **`assets/learn-hub-techplus-md.js`** is a **loader** (chapter hashes + `loadLearnHubTechplusChapter`). The actual segment HTML lives in **`assets/learn-hub-techplus-md-ch01.js`** … **`ch12.js`** (merged into `window.LEARN_HUB_TECHPLUS_MD` as each chapter loads). Regenerate from **`chapters/*.md`** with **`npm run build:techplus`** (runs **marked** + **`polishTechplusHtml`**). If **`learn-hub-courses.js`** ever lists `tech-sg-*` steps whose HTML is missing from the chunks (for example after a partial build), run **`npm run restore:techplus-md`**, which copies the canonical course list from **`G:\All_Learn-hub\Learn-Hub\learn-hub-courses.js`** and inserts **only missing** study-guide segments from that tree’s monolithic **`learn-hub-techplus-md.js`** into the chapter files—without overwriting segments already present in **`Hubs\Learn-Hub`**.

Segment HTML is passed through **`scripts/techplus-html-polish.mjs`** on build and optionally via **`npm run polish:techplus-md`**. One `index.html` plus scripts under **`assets/`**—no backend.

## Which folder is the working, correct copy?

Use this table so you always know what to open, serve, and edit.

| Path | What it is |
|------|------------|
| **`G:\Hubs\Learn-Hub`** | **Canonical working project.** This is the copy you run (`index.html`), edit, and rebuild. **`assets/learn-hub-courses.js`** must list every lesson id the app can open; **Tech+ study-guide** reading for `tech-sg-*` ids must exist in the **chapter chunk** files (or be loadable after **`restore:techplus-md`**). The small **`assets/learn-hub-techplus-md.js`** loader and each **`learn-hub-techplus-md-chNN.js`** chunk include content hashes—bump **`index.html`** `?v=` on the loader (and **`learn-hub-courses.js`**) after you change bundles. |
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
| Tech+       | Quiz panel on quiz steps          | **Study guide lessons** (`tech-sg-XX-YY`): one section/exercise/review block per step in the main reading column; sidebar **unit** groups steps by book chapter (`Ch N — …`). Optional **On this page** outline when headings allow. Other **Learn** steps: **Lesson reading** (topic excerpts from `learn-hub-techplus.js`). **Continue** / **Skip lesson** / **Check** as usual. |

## Core files

Load **order matters** (see `index.html`):

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
```

The **teach** column shows:

1. A short **strip** (track, unit, kind, title, hint).
2. **Reading content** — behavior depends on track and lesson:
   - **Tech+ study guide readings** (`tech-sg-XX-YY`): the merged HTML is the **main lesson** for that step (scroll the column). Includes a short **source** line (lesson title + chapter), and when there are enough headings, an **On this page** outline with in-page links. Use **Skip lesson** to mark a step done without re-reading.
   - **Other Tech+ learn** steps: content is inside **`<details open>`** labeled **Lesson reading — notes, tables & drills** so excerpts stay visible without an extra click. The inner panel is **not** height-capped so long notes read like a normal page.
   - **Other tracks**: theory stays in a **Reference** `<details>` (collapsed by default) with a scroll region for long pages.

**Tech+ learn** steps hide the code workspace; use **Continue** after reading. **Tech+ quiz** steps use the **Check-in** panel.

## Lesson kinds

- **`learn`** — Explore the editor (HTML/CSS/JS/Python/SQL) or read the lesson text (Tech+). **Check** is disabled when there is no `check` object. **Continue** advances.
- **`practice` / `challenge`** — Graded with **Check** (DOM/CSS/JS/SQL/Python checks as defined in the lesson).
- **`quiz`** — Multiple choice; **Tech+** uses the in-page quiz panel.

## Keyboard shortcuts (web / SQL)

- **Ctrl+Enter** — Run (preview or SQL execute).
- **Shift+Ctrl+Enter** — Check (where applicable).

## Progress and XP

Progress is stored in **browser `localStorage`** (key managed inside `learn-hub-app.js`). Use **Reset all saved progress** in the sidebar to clear it.

The sidebar shows **XP** and progress vs **all tracks combined** (currently **626** lessons in the bundled curriculum). Rebuilding or re-ordering **Tech+** steps changes total lesson count and lesson IDs; if progress feels “off,” use **Reset all saved progress** in the sidebar (the app may bump its storage key when the Tech+ shape changes).

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

| Script | What it does |
|--------|----------------|
| `scripts/techplus-html-polish.mjs` | **`export function polishTechplusHtml(html)`** — shared post-pass used by the Markdown **build** and by **`apply-techplus-html-polish.mjs`**. |
| `scripts/print-learn-hub-manifest.mjs` | Prints the **line / byte / character** Markdown table used in [File manifest](#file-manifest-integrity-reference). Run after intentional changes, paste over the README table, re-run once more if `README.md` counts shift. |
| `scripts/build-techplus-from-markdown.mjs` | Reads **`chapters/*.md`**, preprocesses PDF-style line breaks and objective bullets, runs **marked** (GFM **without** hard line breaks — avoids a wall of `<br>` tags), applies **`polishTechplusHtml`**, writes **`learn-hub-techplus-md.js`**. If chapter lesson IDs are missing from the Tech+ course, it **prepends** `tech-sg-01` … `tech-sg-12` to `learn-hub-courses.js`. **Re-run after you edit any bundled chapter `.md` file.** |
| `scripts/build-techplus-import.mjs` | Reads `../../TechPlus-Stuff/TechPlus/TechPlus_Study_Guide.html`, writes **`learn-hub-techplus.js`** (condensed excerpts for mapped lesson IDs). |
| `scripts/migrate-fcc-deep-playground.mjs` | Reads `assets/learn-hub-courses.js`, moves any non-empty `narrative` into `assets/learn-hub-deep.js` (plus expansion/footer blocks), clears narratives, regenerates `assets/learn-hub-playground.js` learn-step sandboxes. **Re-run after you edit lesson text inside the courses file.** |
| `scripts/fold-depth-into-courses.mjs` | Legacy helper: merged old `learn-hub-depth.js` scaffolding into courses (only useful if you restore historical depth data from git). |

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
| `learn-hub-techplus-md.js` + `learn-hub-techplus-md-ch01.js` … `ch12.js` | **Per-lesson HTML** for study-guide ids `tech-sg-01-01`, … — the browser loads the **loader** first, then **lazy-loads** each chapter chunk. No runtime path outside this repo. After replacing or hand-editing chunks, run **`npm run polish:techplus-md`** / **`npm run verify:techplus`** and update **`index.html`** `?v=` strings. |
| `learn-hub-techplus.js` | Shorter **topic excerpts** (regenerate with `scripts/build-techplus-import.mjs`, which reads a copy of the study guide HTML from your materials — **build-time only**). |
| *(optional)* `TechPlus_Study_Guide.html` | Separate interactive guide (quizzes, practice exam) if you keep it alongside this project — not required for Learn Hub to run. |

## Requirements

- Modern browser with JavaScript enabled.
- **Network** for Python (Pyodide) and SQL (sql.js) CDN loads on first use; **`npm install`** in this folder for the **marked** devDependency (used by `build-techplus-from-markdown.mjs`).
- All core `.js` files under **`assets/`** must be **same-origin** with `index.html` (local server or static host such as GitHub Pages).

## Troubleshooting

- **Blank or stuck UI** — Hard refresh (Ctrl+Shift+R), confirm no 404s in DevTools → Network, verify every script under **`assets/`** loaded (including **`learn-hub-techplus-md.js`**).
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

Paste the command output **over the table below** (from the header row through the **Total** row). The script lists core Learn-Hub files, Tech+ polish/validate scripts, and all **`chapters/*.md`** sources.

| File | Lines | UTF-8 bytes | Unicode scalar values* |
|------|------:|-------------:|-------------------------:|
| `README.md` | 295 | 24,138 | 24,018 |
| `index.html` | 188 | 11,335 | 11,295 |
| `assets/learn-hub-tokens.css` | 143 | 4,810 | 4,795 |
| `assets/learn-hub-layout.css` | 1,397 | 30,486 | 30,472 |
| `assets/learn-hub-teach.css` | 1,171 | 27,513 | 27,495 |
| `assets/learn-hub-app.js` | 1,916 | 73,992 | 73,885 |
| `assets/learn-hub-courses.js` | 2 | 339,067 | 338,581 |
| `assets/learn-hub-deep.js` | 439 | 996,504 | 986,700 |
| `assets/learn-hub-depth.js` | 3 | 160 | 158 |
| `assets/learn-hub-playground.js` | 3 | 71,367 | 70,539 |
| `assets/learn-hub-techplus.js` | 3 | 128,256 | 127,156 |
| `assets/learn-hub-techplus-md.js` | 38 | 1,419 | 1,417 |
| `scripts/learn-hub-paths.mjs` | 19 | 554 | 554 |
| `scripts/techplus-chapter-io.mjs` | 120 | 4,750 | 4,750 |
| `chapters/01_Core_Hardware_Components.md` | 1,709 | 107,207 | 106,604 |
| `chapters/02_Peripherals_and_Connectors.md` | 1,729 | 105,095 | 104,470 |
| `chapters/03_Computing_Devices_and_the_Internet_of_Things.md` | 1,699 | 106,382 | 105,775 |
| `chapters/04_Operating_Systems.md` | 1,959 | 124,886 | 124,148 |
| `chapters/05_Software_Applications.md` | 1,919 | 119,737 | 118,968 |
| `chapters/06_Software_Development.md` | 1,079 | 61,451 | 60,993 |
| `chapters/07_Database_Fundamentals.md` | 1,041 | 62,106 | 61,744 |
| `chapters/08_Networking_Concepts_and_Technologies.md` | 1,959 | 119,148 | 118,425 |
| `chapters/09_Cloud_Computing_and_Artificial_Intelligence.md` | 984 | 58,982 | 58,616 |
| `chapters/10_Security_Concepts_and_Threats.md` | 1,590 | 104,979 | 104,269 |
| `chapters/11_Security_Best_Practices.md` | 1,515 | 91,399 | 90,831 |
| `chapters/12_Data_Continuity_and_Computer_Support.md` | 1,848 | 121,618 | 120,574 |
| `scripts/add-more-lessons.mjs` | 753 | 30,289 | 30,255 |
| `scripts/build-split.mjs` | 66 | 2,867 | 2,865 |
| `scripts/expand-capstone-and-quiz-bank.mjs` | 529 | 22,908 | 22,881 |
| `scripts/expand-tracks-more.mjs` | 519 | 29,908 | 29,842 |
| `scripts/build-techplus-from-markdown.mjs` | 1,324 | 57,510 | 57,085 |
| `scripts/build-techplus-import.mjs` | 126 | 4,769 | 4,767 |
| `scripts/apply-techplus-html-polish.mjs` | 47 | 1,958 | 1,954 |
| `scripts/techplus-html-polish.mjs` | 293 | 31,848 | 31,760 |
| `scripts/validate-techplus-html.mjs` | 68 | 2,481 | 2,479 |
| `scripts/fold-depth-into-courses.mjs` | 81 | 3,393 | 3,391 |
| `scripts/migrate-fcc-deep-playground.mjs` | 155 | 6,541 | 6,509 |
| `scripts/print-learn-hub-manifest.mjs` | 81 | 3,290 | 3,290 |
| `scripts/audit-techplus-consistency.mjs` | 135 | 4,826 | 4,788 |
| `scripts/compare-tech-curriculum.mjs` | 61 | 2,253 | 2,253 |
| `scripts/restore-techplus-md-from-reference.mjs` | 96 | 3,308 | 3,304 |
| **Total (listed files)** | **28,834** | **3,098,284** | **3,077,474** |

\*Same as “Unicode scalar values” column header above. Last aligned with `node scripts/print-learn-hub-manifest.mjs` on **2026-04-11** (UTC calendar date). The manifest omits **`learn-hub-techplus-md-ch01.js` … `ch12.js`** (large generated bundles), `package.json`, `PATHS_FOR_GITHUB.txt`, and other helpers; see [Current file paths](#current-file-paths-for-github--uploads) for upload-oriented lists.

## License / data

Curriculum JSON and generated bundles are **local educational content** for personal/self-hosted use. External links (MDN, Python docs, SQLite, CompTIA) point to third-party sites under their own terms.
