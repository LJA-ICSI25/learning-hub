# Learn Hub (v1.0.7)

Self-hosted learning app with interactive tracks (web/Python/SQL) and read-first tracks (Tech+, Network+, Security, Labs), plus built-in quiz flows and desktop packaging.

This README is scoped to this folder:

- `update_v1.0.7/`

---

## Project Goals

- Keep one runnable app folder that works locally and on GitHub.
- Keep curriculum source and generated bundles organized.
- Make release and source upload paths explicit.

---

## Quick Start

### Browser run

1. Install dependencies:
   - `npm install`
2. Start a local static server from this folder:
   - `python -m http.server`
   - or `npx serve .`
3. Open:
   - `http://localhost:8000/index.html` (or server URL)

### Desktop app run (Electron)

- `npm start`

### Build installer

- `npm run dist`
- Output goes to:
  - `exe-build/`

---

## Current Structure (Important)

### Core app shell

- `index.html` - main app shell
- `main.js` - Electron entry
- `study-secret.html` - optional protected study page

### Runtime assets

- `assets/learn-hub-app.js` - main client runtime
- `assets/learn-hub-courses.js` - track/lesson registry
- `assets/learn-hub-*.js` - curriculum, quiz, and helper bundles
- `assets/learn-hub-*.css` - UI styling system

### Curriculum source

- `chapters/` - Tech+ chapter markdown (build input)
- `docs/SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md` - Security source
- `docs/KALI_HANDS_ON_LAB_CURRICULUM.md` - Labs source

### Generated/guide docs

- `Study.md` - primary full Tech+ guide markdown
- `techplus_study_guide.md` - post-test review guide markdown
- `docs/guides/Study.html` - rendered full guide with topic sidebar
- `docs/guides/techplus_study_guide.html` - rendered post-test guide with topic sidebar

### Feature areas

- `study-space/` - study tools
- `tech-plus-exam/` - exam area

### Build and packaging

- `build/` - icons/resources for Electron packaging
- `scripts/` - all build/update tooling
- `exe-build/` - installer output
- `dist/` - legacy/packaging artifacts (if present)
- `docs/project/` - project operations docs (upload checklist, path map, working-copy note)
- `archive/` - legacy files kept for reference but not app runtime

---

## Tech+ Custom Lessons Added

The app now injects custom Study Plan lessons in Tech+ from `assets/learn-hub-app.js`:

- `Complete FC0-U71 Study Guide`
- `Logan's post test review`

Both open:

- `docs/guides/Study.html`
- `docs/guides/techplus_study_guide.html`

These pages include:

- Back button to Learn Hub
- Sticky topic sidebar
- Topic filter
- Learn Hub-aligned styling

---

## Build Commands (Curriculum)

- `npm run build:techplus` - rebuild Tech+ markdown bundle/chunks
- `npm run build:security` - rebuild Security bundle
- `npm run build:kali` - rebuild Labs bundle
- `npm run emit:kali-slow` - regenerate Kali markdown source, then build

Quality and repair:

- `npm run validate:techplus-md`
- `npm run polish:techplus-md`
- `npm run verify:techplus`
- `npm run qa:techplus`
- `npm run restore:techplus-md`

---

## GitHub Upload Guidance

For source-control uploads, keep:

- app runtime files (`index.html`, `main.js`, `assets/`, `docs/`, `scripts/`)
- curriculum markdown (`chapters/`, `Study.md`, `techplus_study_guide.md`)
- package metadata (`package.json`, `package-lock.json`)

Do not commit generated/binary-heavy folders:

- `node_modules/`
- `exe-build/`
- `dist/`
- `exe-build-fresh/`
- `*.exe`, `*.msi`, `*.zip`, `*.blockmap`

Use:

- `docs/project/WHAT_TO_UPLOAD.txt` for source/release checklist
- `docs/project/PATHS_FOR_GITHUB.txt` for concise relative path map
- `docs/project/WORKING_COPY.txt` for working-copy/run notes

---

## Maintenance Notes

- If new lesson IDs are added, ensure they exist in `learn-hub-courses.js` and associated bundles.
- After moving docs or guides, update links in `assets/learn-hub-app.js`.
- If UI appears stale, hard refresh (`Ctrl+F5`) after bundle changes.

---

## License / Usage

Project content is for personal/self-hosted educational use. External linked references keep their own licenses.

