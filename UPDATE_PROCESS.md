# Learn Hub Desktop Update Process (Exact Steps)

Use this checklist every time you release an updated desktop app.

---

## 0) One-time setup check (do once, then skip)

1. Open `package.json`.
2. Confirm `build.publish.owner` and `build.publish.repo` are set to your real GitHub values (not placeholders).
3. Confirm `build.appId` stays the same (`com.logan.learnhub`).

Do not change `appId` between releases.

---

## 1) Make your app changes

1. Edit your app files (`index.html`, `assets/*`, etc.).
2. Save all files.
3. Quick test locally:

```powershell
npm start
```

4. Close the app after testing.

---

## 2) Bump version in `package.json`

1. Open `package.json`.
2. Change `"version"` to the next version.

Example:
- `1.0.0` -> `1.0.1`
- `1.0.1` -> `1.0.2`

You must increase the version every release or auto-update will not trigger.

---

## 3) Build the Windows installer

From the `EXE Testing` folder, run:

```powershell
npm run dist
```

If Windows file-lock errors happen on `dist`, run:

```powershell
npx electron-builder --win nsis --config.directories.output=dist-branded
```

Expected output installer:
- `dist/Learn Hub Setup <version>.exe`
or
- `dist-branded/Learn Hub Setup <version>.exe`

---

## 4) Create a GitHub Release

1. Push your updated source code to GitHub (including updated `package.json` version).
2. On GitHub, open your repository.
3. Go to **Releases** -> **Draft a new release**.
4. Set **Tag version** to `v<version>` (example: `v1.0.1`).
5. Set release title (example: `Learn Hub v1.0.1`).
6. Upload release assets from your build output folder:
   - `Learn Hub Setup <version>.exe`
   - `latest.yml` (required for electron-updater)
   - `Learn Hub Setup <version>.exe.blockmap`
7. Publish the release.

`latest.yml` and `.blockmap` are required for auto-update metadata.

---

## 5) Verify auto-update works

1. Install/open your current app version.
2. Ensure internet is available.
3. Launch the app.
4. Wait for update prompt:
   - Click **Download**
   - After download, click **Restart now**
5. Confirm app relaunches on the new version.

---

## 6) Repeat for every future update

Always do this order:

1. Make code/content changes
2. Bump version
3. Build installer
4. Publish GitHub Release with `.exe` + `latest.yml` + `.blockmap`
5. Verify update prompt in installed app

---

## Troubleshooting

- **No update prompt appears**
  - Check that GitHub owner/repo in `package.json` is correct.
  - Confirm release tag/version is newer than installed version.
  - Confirm `latest.yml` was uploaded to the release.

- **Installer does not replace old version**
  - Confirm `appId` did not change.
  - Install using the new setup `.exe`.

- **Build fails because files are in use**
  - Close all running `Learn Hub.exe` windows/processes.
  - Re-run the build command.
