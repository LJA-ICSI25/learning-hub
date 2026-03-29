# Learn Hub

Self-hosted, **practice-first** study app (FreeCodeCamp-style): **editor and Run/Check on top**, optional **Reference** fold-out for theory, tables, drills, and doc links. One `index.html` plus a small set of JavaScript bundles—no backend.

## Quick start

1. Keep every file listed under [Core files](#core-files) in the **same folder** as `index.html`.
2. Open `index.html` in **Chrome or Edge** (recommended), ideally via a **local server** so large scripts load reliably:
   - Example: `npx serve .` or `python -m http.server` from this directory.
3. Pick a **track** in the sidebar, then a **lesson**. Use **Continue** on read-only Tech+ learn steps; use **Check** on graded practice/challenge/quiz steps.

**Optional:** For SQL-only with a similar layout, see [`../SQL/index.html`](../SQL/index.html) in this repo.

## Tracks

| Track        | Workspace                         | Notes |
|-------------|-----------------------------------|--------|
| HTML        | HTML / CSS / JS + live preview    | Learn steps include sandbox starters. |
| CSS         | Same                              | |
| JavaScript  | Same                              | |
| Python      | Pyodide (downloads on first run)  | Needs network for the runtime CDN. |
| SQL         | sql.js + per-lesson DB seed       | Needs network for the wasm CDN. |
| Tech+       | Quiz panel on quiz steps          | Learn steps: Reference only + **Continue**. |

## Core files

Load **order matters** (see `index.html`):

| File | Purpose |
|------|---------|
| `index.html` | Shell, styles, script tags. |
| `learn-hub-courses.js` | `window.LEARN_HUB_COURSES` — lesson list, kinds, titles, starters, checks, quiz questions. Lesson `narrative` fields are kept **empty**; reading is supplied elsewhere. |
| `learn-hub-depth.js` | Stub: `window.LEARN_HUB_DEPTH = {}` (reserved for optional future append-only snippets). |
| `learn-hub-techplus.js` | `window.LEARN_HUB_TECHPLUS` — HTML excerpts from the local Tech+ study guide for selected Tech+ lesson IDs. |
| `learn-hub-deep.js` | `window.LEARN_HUB_DEEP` — per-lesson **full reference HTML** plus shared drill blocks and external doc links. |
| `learn-hub-playground.js` | `window.LEARN_HUB_PLAYGROUND` — default **sandbox starters** for **learn** steps on web / Python / SQL. |
| `learn-hub-app.js` | UI, progress, merging `readHtml`, workspaces, Run/Check logic. |

## How content is merged at runtime

For each lesson, the app builds:

```text
readHtml = (narrative from course, usually "")
         + (LEARN_HUB_DEPTH[id] if any)
         + (LEARN_HUB_DEEP[id] if any)
         + (LEARN_HUB_TECHPLUS[id] if any)
```

The **teach** column shows:

1. A short **strip** (track, unit, kind, title, hint).
2. A **`<details>`** block labeled **Reference** — collapsed by default — containing `readHtml`.

**Tech+ learn** steps hide the workspace and rely on Reference (study guide excerpt + drills) and **Continue**.

## Lesson kinds

- **`learn`** — Explore the editor (HTML/CSS/JS/Python/SQL) or read Reference (Tech+). **Check** is disabled when there is no `check` object. **Continue** advances.
- **`practice` / `challenge`** — Graded with **Check** (DOM/CSS/JS/SQL/Python checks as defined in the lesson).
- **`quiz`** — Multiple choice; **Tech+** uses the in-page quiz panel.

## Keyboard shortcuts (web / SQL)

- **Ctrl+Enter** — Run (preview or SQL execute).
- **Shift+Ctrl+Enter** — Check (where applicable).

## Progress and XP

Progress is stored in **browser `localStorage`** (key managed inside `learn-hub-app.js`). Use **Reset all saved progress** in the sidebar to clear it.

## Maintenance scripts (Node)

Run from the repo root or adjust paths; examples assume `Learn-Hub` as cwd.

| Script | What it does |
|--------|----------------|
| `scripts/migrate-fcc-deep-playground.mjs` | Reads `learn-hub-courses.js`, moves any non-empty `narrative` into `learn-hub-deep.js` (plus expansion/footer blocks), clears narratives, regenerates `learn-hub-playground.js` learn-step sandboxes. **Re-run after you edit lesson text inside the courses file.** |
| `scripts/build-techplus-import.mjs` | Reads `../TechPlus/TechPlus_Study_Guide.html`, writes `learn-hub-techplus.js`. |
| `scripts/fold-depth-into-courses.mjs` | Legacy helper: merged old `learn-hub-depth.js` scaffolding into courses (only useful if you restore historical depth data from git). |

Other repo tools (curriculum expansion / capstones):

- `expand-tracks-more.mjs`
- `expand-capstone-and-quiz-bank.mjs`
- `add-more-lessons.mjs`
- `build-split.mjs`

Read each file’s header comment for exact usage.

## Tech+ source material

- Bundled excerpts: `learn-hub-techplus.js` (generated).
- Full interactive guide (quizzes, acronym tools): `TechPlus/TechPlus_Study_Guide.html` next to this folder in the repo.

## Requirements

- Modern browser with JavaScript enabled.
- **Network** for Python (Pyodide) and SQL (sql.js) CDN loads on first use.
- All core `.js` files must be **same-origin** with `index.html` (local server or static host such as GitHub Pages).

## Troubleshooting

- **Blank or stuck UI** — Hard refresh (Ctrl+Shift+R), confirm no 404s in DevTools → Network, verify every script file is beside `index.html`.
- **IDE preview issues** — Open the same folder in Chrome/Edge with a local server; some embedded previews mishandle large scripts.
- **SQLite / Python errors** — Check connectivity; HTML/CSS/JS/Tech+ Reference still work offline once scripts are loaded.

## License / data

Curriculum JSON and generated bundles are **local educational content** for personal/self-hosted use. External links (MDN, Python docs, SQLite, CompTIA) point to third-party sites under their own terms.
