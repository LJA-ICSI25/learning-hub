# Learn Hub Desktop Update Process (v1.0.1)

Use this every release. Keep this order so updates stay reliable.

---

## 0) One-time invariants

Confirm these are unchanged in `package.json`:

- `build.appId = com.logan.learnhub`
- `build.publish.owner = LJA-ICSI25`
- `build.publish.repo = learning-hub`

If `appId` changes, installs and upgrades can break.

---

## 1) Ship changes safely

1. Make app updates (`index.html`, `assets/*`, `main.js`, docs).
2. Run a local check:

```powershell
npm start
```

3. Verify:
   - App loads without startup errors.
   - First-run card appears for a new profile.
   - Version chip is visible in the sidebar.
   - At least one lesson can run + check.
4. Close the app.

---

## 2) Bump version before build

Update `package.json`:

- `1.0.1` -> `1.0.2`
- `1.0.2` -> `1.0.3`

No version bump = no auto-update prompt.

---

## 3) Build installer artifacts

Primary build:

```powershell
npm run dist
```

Fallback (if `dist` has file lock issues):

```powershell
npm run dist:clean
```

Expected artifacts:

- `Learn Hub Setup <version>.exe`
- `latest.yml`
- `Learn Hub Setup <version>.exe.blockmap`

---

## 4) Publish GitHub release

1. Push source updates first (including version bump).
2. Create a release with tag `v<version>` (example: `v1.0.2`).
3. Release title format: `Learn Hub v<version>`.
4. Upload all 3 artifacts:
   - `.exe`
   - `latest.yml`
   - `.blockmap`
5. Publish.

---

## 5) Verify in installed app

1. Open the currently installed version.
2. Confirm internet is on.
3. Wait for the update dialog.
4. Click `Download`, then `Restart now`.
5. Verify new version appears in-app (sidebar version chip).

---

## 6) Rollback plan (if release is bad)

If new update is broken:

1. Unlist/delete broken GitHub release assets (or delete the release).
2. Publish a fixed patch release with higher version (recommended).
3. Never reuse the same version number.

---

## Troubleshooting quick table

- **No update prompt**
  - Version not higher than installed app.
  - Missing `latest.yml` on release.
  - Wrong `owner/repo` in `package.json`.
- **Build fails / files in use**
  - Close all `Learn Hub.exe` processes.
  - Use `npm run dist:clean`.
- **Installer works but update does not**
  - Confirm `.blockmap` uploaded.
  - Confirm release tag matches version (`vX.Y.Z`).
