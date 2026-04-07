# Learn Hub

Self-hosted, **practice-first** study app (FreeCodeCamp-style): **editor and Run/Check on top**, optional **Reference** fold-out for theory on most tracks. **Tech+** ships the **FC0-U71 study guide** as many small **learn steps** (IDs `tech-sg-01-01` … through chapter 12). The Markdown build currently emits **110** study-guide segments (**12** chapter sources); you can produce a finer split (e.g. **190** segments) by changing how the build chunks lessons. Content is bundled in **`learn-hub-techplus-md.js`**—**no runtime dependency** on any other drive path. Segment HTML is passed through a **post-build polish** pass (PDF/OCR fixes, safe code samples, list structure) via `scripts/techplus-html-polish.mjs`, both when you run **`npm run build:techplus`** and when you re-run **`npm run polish:techplus-md`** on the existing bundle. One `index.html` plus companion scripts—no backend.

## Which folder is the working, correct copy?

Use this table so you always know what to open, serve, and edit.

| Path | What it is |
|------|------------|
| **`G:\Hubs\Learn-Hub`** | **Canonical working project.** This is the copy you run (`index.html`), edit, and rebuild. The committed **`learn-hub-techplus-md.js`** here must show real English in lesson `tech-sg-01-01` (e.g. **`Lesson 1: Core Hardware Components`** in the `<h1>`). **`learn-hub-courses.js`** must stay in sync with the segment IDs in that file. **`index.html`** `?v=` query strings bust cache for those two scripts. |
| **`G:\Learn-Hub_Backup`** | **Point-in-time mirror** of `Hubs\Learn-Hub` (last full robocopy). Restore from here if the working tree is corrupted; after restoring, redo any edits made after the backup. Re-run a folder mirror when you want an updated snapshot. |
| **`G:\Hubs\TechPlus_Lessons\learning-hub-main`** | **Reference / donor tree** that held a known-good study-guide bundle used to repair Learn-Hub. Unless you maintain that repo on purpose, **do not treat it as your primary app**—day-to-day work lives under **`Hubs\Learn-Hub`**. |

**Sanity check:** Search `learn-hub-techplus-md.js` for `eerroe` or `oorpueoeg`. If either appears, the Tech+ Markdown bundle is corrupted or was built with a broken toolchain—fix Markdown sources and run `npm run build:techplus`, or copy a known-good `learn-hub-techplus-md.js` + matching `learn-hub-courses.js` from `learning-hub-main`, then run **`npm run polish:techplus-md`** and **`npm run validate:techplus-md`**, and refresh `index.html` `?v=` hashes.

**Tag safety:** Run **`npm run validate:techplus-md`** after changing the Tech+ bundle. It flags raw `<body>`, `<script>`, or `<li>…</p>` corruption that would break the host page. The polish script (`apply-techplus-html-polish.mjs`) runs the same checks before writing.

## Quick start

1. Keep every file listed under [Core files](#core-files) in the **same folder** as `index.html`.
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
| `index.html` | Shell, styles, script tags. |
| `learn-hub-courses.js` | `window.LEARN_HUB_COURSES` — lesson list, kinds, titles, starters, checks, quiz questions. Lesson `narrative` fields are kept **empty** for most lessons; reading is supplied by merged bundles (see below). |
| `learn-hub-depth.js` | Stub: `window.LEARN_HUB_DEPTH = {}` (reserved for optional future append-only snippets). |
| `learn-hub-techplus.js` | `window.LEARN_HUB_TECHPLUS` — HTML excerpts from the local Tech+ study guide for selected Tech+ lesson IDs (topic notes, tables, drills). |
| `learn-hub-techplus-md.js` | `window.LEARN_HUB_TECHPLUS_MD` — **segment HTML** for each study-guide lesson id (`tech-sg-01-01`, …), generated from **`content/techplus-chapters/*.md`** via **`marked`** (see `package.json`) and split in the build script, then **`polishTechplusHtml`** (OCR/spacing, figure text, escaped sample markup, structural fixes). **Large file (~1.3MB)**—keep beside `index.html`; use a local server if the browser is slow to parse it. Re-apply polish only with **`npm run polish:techplus-md`** (for example after hand-editing this file or copying a donor bundle). |
| `learn-hub-deep.js` | `window.LEARN_HUB_DEEP` — per-lesson **full reference HTML** plus shared drill blocks and external doc links. |
| `learn-hub-playground.js` | `window.LEARN_HUB_PLAYGROUND` — default **sandbox starters** for **learn** steps on web / Python / SQL. |
| `learn-hub-app.js` | UI, progress, merging `readHtml`, workspaces, Run/Check logic, Tech+ study-guide layout (TOC, full-pane reading, Skip lesson). |

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

Rebuilding or re-ordering **Tech+** steps changes total lesson count and lesson IDs; if progress feels “off,” use **Reset all saved progress** in the sidebar (the app may bump its storage key when the Tech+ shape changes).

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

| Script | What it does |
|--------|----------------|
| `scripts/techplus-html-polish.mjs` | **`export function polishTechplusHtml(html)`** — shared post-pass used by the Markdown **build** and by **`apply-techplus-html-polish.mjs`**. |
| `scripts/print-learn-hub-manifest.mjs` | Prints the **line / byte / character** Markdown table used in [File manifest](#file-manifest-integrity-reference). Run after intentional changes, paste over the README table, re-run once more if `README.md` counts shift. |
| `scripts/build-techplus-from-markdown.mjs` | Reads **`content/techplus-chapters/*.md`**, preprocesses PDF-style line breaks and objective bullets, runs **marked** (GFM **without** hard line breaks — avoids a wall of `<br>` tags), applies **`polishTechplusHtml`**, writes **`learn-hub-techplus-md.js`**. If chapter lesson IDs are missing from the Tech+ course, it **prepends** `tech-sg-01` … `tech-sg-12` to `learn-hub-courses.js`. **Re-run after you edit any bundled chapter `.md` file.** |
| `scripts/build-techplus-import.mjs` | Reads `../../TechPlus-Stuff/TechPlus/TechPlus_Study_Guide.html`, writes **`learn-hub-techplus.js`** (condensed excerpts for mapped lesson IDs). |
| `scripts/migrate-fcc-deep-playground.mjs` | Reads `learn-hub-courses.js`, moves any non-empty `narrative` into `learn-hub-deep.js` (plus expansion/footer blocks), clears narratives, regenerates `learn-hub-playground.js` learn-step sandboxes. **Re-run after you edit lesson text inside the courses file.** |
| `scripts/fold-depth-into-courses.mjs` | Legacy helper: merged old `learn-hub-depth.js` scaffolding into courses (only useful if you restore historical depth data from git). |

Other repo tools (curriculum expansion / capstones):

- `expand-tracks-more.mjs`
- `expand-capstone-and-quiz-bank.mjs`
- `add-more-lessons.mjs`
- `build-split.mjs`

Read each file’s header comment for exact usage.

## Tech+ source material

| Source | Role |
|--------|------|
| `content/techplus-chapters/*.md` | Twelve **chapter sources** (Markdown) stored **inside Learn Hub**. Edit here, then run **`npm run build:techplus`** to regenerate segments and the Tech+ lesson list (polish runs inside that pipeline). |
| `learn-hub-techplus-md.js` | Bundled **per-lesson HTML** for study-guide ids `tech-sg-01-01`, … — **this is what the browser loads** for those steps; no other paths required at runtime. If this file is replaced without a rebuild, run **`npm run polish:techplus-md`** and update **`index.html`** cache-bust query strings. |
| `learn-hub-techplus.js` | Shorter **topic excerpts** (regenerate with `scripts/build-techplus-import.mjs`, which reads a copy of the study guide HTML from your materials — **build-time only**). |
| *(optional)* `TechPlus_Study_Guide.html` | Separate interactive guide (quizzes, practice exam) if you keep it alongside this project — not required for Learn Hub to run. |

## Requirements

- Modern browser with JavaScript enabled.
- **Network** for Python (Pyodide) and SQL (sql.js) CDN loads on first use; **`npm install`** in this folder for the **marked** devDependency (used by `build-techplus-from-markdown.mjs`).
- All core `.js` files must be **same-origin** with `index.html` (local server or static host such as GitHub Pages).

## Troubleshooting

- **Blank or stuck UI** — Hard refresh (Ctrl+Shift+R), confirm no 404s in DevTools → Network, verify every script file is beside `index.html` (including **`learn-hub-techplus-md.js`**).
- **Slow first load on Tech+** — The Markdown bundle is large; prefer Chrome/Edge and a local server; avoid IDE embedded preview for this page if it struggles.
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

Paste the command output **over the table below** (from the header row through the **Total** row). The script lists core Learn-Hub files, Tech+ polish/validate scripts, and all **`content/techplus-chapters/*.md`** sources.

| File | Lines | UTF-8 bytes | Unicode scalar values* |
|------|------:|-------------:|-------------------------:|
| `README.md` | 209 | 17,801 | 17,699 |
| `index.html` | 170 | 10,312 | 10,270 |
| `learn-hub-app.js` | 1,537 | 60,107 | 60,034 |
| `learn-hub-courses.js` | 2 | 339,011 | 338,531 |
| `learn-hub-deep.js` | 439 | 996,504 | 986,700 |
| `learn-hub-depth.js` | 3 | 160 | 158 |
| `learn-hub-playground.js` | 3 | 71,367 | 70,539 |
| `learn-hub-techplus.js` | 3 | 128,256 | 127,156 |
| `learn-hub-techplus-md.js` | 194 | 1,275,897 | 1,273,103 |
| `content/techplus-chapters/01_Core_Hardware_Components.md` | 1,453 | 107,303 | 107,018 |
| `content/techplus-chapters/02_Peripherals_and_Connectors.md` | 1,434 | 106,096 | 105,873 |
| `content/techplus-chapters/03_Computing_Devices_and_the_Internet_of_Things.md` | 1,395 | 106,676 | 106,509 |
| `content/techplus-chapters/04_Operating_Systems.md` | 1,649 | 124,818 | 124,616 |
| `content/techplus-chapters/05_Software_Applications.md` | 1,607 | 120,315 | 120,024 |
| `content/techplus-chapters/06_Software_Development.md` | 815 | 61,199 | 61,041 |
| `content/techplus-chapters/07_Database_Fundamentals.md` | 829 | 62,297 | 62,143 |
| `content/techplus-chapters/08_Networking_Concepts_and_Technologies.md` | 1,561 | 119,482 | 119,203 |
| `content/techplus-chapters/09_Cloud_Computing_and_Artificial_Intelligence.md` | 787 | 59,203 | 59,073 |
| `content/techplus-chapters/10_Security_Concepts_and_Threats.md` | 1,338 | 105,226 | 104,978 |
| `content/techplus-chapters/11_Security_Best_Practices.md` | 1,243 | 90,981 | 90,703 |
| `content/techplus-chapters/12_Data_Continuity_and_Computer_Support.md` | 1,565 | 121,553 | 121,347 |
| `add-more-lessons.mjs` | 751 | 30,172 | 30,138 |
| `build-split.mjs` | 64 | 2,724 | 2,722 |
| `expand-capstone-and-quiz-bank.mjs` | 527 | 22,791 | 22,764 |
| `expand-tracks-more.mjs` | 517 | 29,791 | 29,725 |
| `scripts/build-techplus-from-markdown.mjs` | 1,060 | 46,467 | 46,174 |
| `scripts/build-techplus-import.mjs` | 126 | 4,759 | 4,757 |
| `scripts/apply-techplus-html-polish.mjs` | 38 | 1,661 | 1,659 |
| `scripts/techplus-html-polish.mjs` | 230 | 24,671 | 24,611 |
| `scripts/validate-techplus-html.mjs` | 66 | 2,337 | 2,335 |
| `scripts/fold-depth-into-courses.mjs` | 81 | 3,353 | 3,351 |
| `scripts/migrate-fcc-deep-playground.mjs` | 155 | 6,501 | 6,469 |
| `scripts/print-learn-hub-manifest.mjs` | 75 | 3,174 | 3,174 |
| **Total (listed files)** | **21,926** | **4,262,965** | **4,244,597** |

\*Same as “Unicode scalar values” column header above. Last aligned with `node scripts/print-learn-hub-manifest.mjs` on **2026-04-07** (UTC calendar date).

## License / data

Curriculum JSON and generated bundles are **local educational content** for personal/self-hosted use. External links (MDN, Python docs, SQLite, CompTIA) point to third-party sites under their own terms.
