/**
 * Writes build/icon.ico (NSIS / electron-builder) and build/icon.png (BrowserWindow)
 * from build/icon.svg. Run from repo root: node scripts/generate-build-icons.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = path.join(root, "build", "icon.svg");
const tmpPng = path.join(root, "build", "_tmp256.png");
const icoPath = path.join(root, "build", "icon.ico");
const pngPath = path.join(root, "build", "icon.png");

await sharp(svgPath).resize(256, 256).png().toFile(tmpPng);
const pngBuf = fs.readFileSync(tmpPng);
fs.writeFileSync(icoPath, await pngToIco(pngBuf));
fs.writeFileSync(pngPath, pngBuf);
fs.unlinkSync(tmpPng);
console.log("Wrote", icoPath, "and", pngPath);
