/**
 * After `npm run dist`, lists the Windows installer files to share (Drive, GitHub Release, etc.).
 * Run from update_v1.0.4:  npm run upload:exe
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const version = pkg.version || "0.0.0";
const product = pkg.build?.productName || "Learn Hub";
const outDir = path.join(root, pkg.build?.directories?.output || "exe-build");

const setupName = `${product} Setup ${version}.exe`;
const setupPath = path.join(outDir, setupName);
const blockmapPath = `${setupPath}.blockmap`;

console.log("Windows installer — files to share (after: npm run dist)\n");
console.log(`  Output folder:  ${outDir}\n`);

if (fs.existsSync(setupPath)) {
  const st = fs.statSync(setupPath);
  console.log(`  INSTALLER (upload this for end users):`);
  console.log(`    ${setupPath}`);
  console.log(`    (${Math.round(st.size / 1024 / 1024)} MB)\n`);
} else {
  console.log(`  INSTALLER (not built yet — run npm run dist):`);
  console.log(`    ${setupPath}\n`);
}

if (fs.existsSync(blockmapPath)) {
  console.log(`  Optional (auto-updates / delta):`);
  console.log(`    ${blockmapPath}\n`);
}

const unpacked = path.join(outDir, "win-unpacked", `${product}.exe`);
if (fs.existsSync(unpacked)) {
  console.log(`  Dev / testing only (unpacked app, not for most users):`);
  console.log(`    ${unpacked}\n`);
}

process.exit(0);
