/**
 * Cleanup for Tech+ chapter Markdown (all lessons).
 * - Removes PDF watermarks, printed page headers/footers, and common OCR splits.
 *
 * Run from Learn-Hub root: node scripts/normalize-techplus-markdown.mjs
 *
 * Writes: content/techplus-chapters/*.md
 * Mirrors to f:/TechPlus_Lessons/*.md when that path exists.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { applyTechPlusReadabilityFixes } from "./techplus-pdf-fixes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const learnHubRoot = path.resolve(__dirname, "..");
const mdDir = path.join(learnHubRoot, "content", "techplus-chapters");
const mirrorRoot = path.resolve("f:/TechPlus_Lessons");

const files = fs.readdirSync(mdDir).filter((f) => f.endsWith(".md")).sort();

function normalizeBody(raw) {
  let t = raw.replace(/\r\n/g, "\n");

  /** Watermark */
  t = t.replace(/^\s*(?:Technet24|technet24)\s*$/gim, "");
  t = t.replace(/\b(?:Technet24|technet24)\b/gi, "");

  /** Printed "618 Chapter 12 ■ …" headers */
  t = t.replace(/^\d+\s+Chapter\s+\d+\s+[▪■\-].+$/gim, "");

  /** Running footers */
  t = t.replace(/^\s*Exploring\s+\S[^.\n]*\s+\d{1,4}\s*$/gim, "");
  t = t.replace(/^\s*Understanding\s+\S[^.\n]*\s+\d{1,4}\s*$/gim, "");

  /** Common PDF line-break / OCR splits */
  t = t.replace(/\bpur\s+poses\b/gi, "purposes");
  /** "their" / "purposes" split across lines in exam objectives */
  t = t.replace(/\btheir\s*\n\s*purposes\b/gi, "their purposes");
  t = t.replace(/Computing Devicesand\b/g, "Computing Devices and");
  t = t.replace(/\bT wenty\b/g, "Twenty");

  t = t.replace(/\n{3,}/g, "\n\n");
  t = applyTechPlusReadabilityFixes(t);
  return t.trimEnd() + "\n";
}

let changed = 0;
for (const name of files) {
  const p = path.join(mdDir, name);
  const before = fs.readFileSync(p, "utf8");
  const after = normalizeBody(before);
  if (after !== before) {
    fs.writeFileSync(p, after, "utf8");
    changed++;
    console.log("updated", name);
  }
  if (fs.existsSync(mirrorRoot)) {
    const mp = path.join(mirrorRoot, name);
    if (fs.existsSync(mp)) {
      const mb = fs.readFileSync(mp, "utf8");
      const ma = normalizeBody(mb);
      if (ma !== mb) {
        fs.writeFileSync(mp, ma, "utf8");
        console.log("mirror updated", name);
      }
    }
  }
}

console.log(`normalize-techplus-markdown: ${changed} / ${files.length} chapter file(s) changed in content/techplus-chapters.`);
