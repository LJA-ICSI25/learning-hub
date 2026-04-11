/**
 * Prints a Markdown table of line / byte / character counts for Learn-Hub files.
 * Run from repo root: node scripts/print-learn-hub-manifest.mjs
 * Use to refresh the "File manifest" section in README.md after intentional edits.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const FILES = [
  "README.md",
  "index.html",
  "learn-hub-app.js",
  "learn-hub-courses.js",
  "learn-hub-deep.js",
  "learn-hub-depth.js",
  "learn-hub-playground.js",
  "learn-hub-techplus.js",
  "learn-hub-techplus-md.js",
  "content/techplus-chapters/01_Core_Hardware_Components.md",
  "content/techplus-chapters/02_Peripherals_and_Connectors.md",
  "content/techplus-chapters/03_Computing_Devices_and_the_Internet_of_Things.md",
  "content/techplus-chapters/04_Operating_Systems.md",
  "content/techplus-chapters/05_Software_Applications.md",
  "content/techplus-chapters/06_Software_Development.md",
  "content/techplus-chapters/07_Database_Fundamentals.md",
  "content/techplus-chapters/08_Networking_Concepts_and_Technologies.md",
  "content/techplus-chapters/09_Cloud_Computing_and_Artificial_Intelligence.md",
  "content/techplus-chapters/10_Security_Concepts_and_Threats.md",
  "content/techplus-chapters/11_Security_Best_Practices.md",
  "content/techplus-chapters/12_Data_Continuity_and_Computer_Support.md",
  "add-more-lessons.mjs",
  "build-split.mjs",
  "expand-capstone-and-quiz-bank.mjs",
  "expand-tracks-more.mjs",
  "scripts/build-techplus-from-markdown.mjs",
  "scripts/build-techplus-import.mjs",
  "scripts/apply-techplus-html-polish.mjs",
  "scripts/techplus-html-polish.mjs",
  "scripts/validate-techplus-html.mjs",
  "scripts/fold-depth-into-courses.mjs",
  "scripts/migrate-fcc-deep-playground.mjs",
  "scripts/print-learn-hub-manifest.mjs",
];

function stats(rel) {
  const fp = path.join(root, rel);
  const buf = fs.readFileSync(fp);
  const text = buf.toString("utf8");
  const lines = text.split(/\r\n|\r|\n/).length;
  const bytes = buf.length;
  const chars = [...text].length;
  return { rel: rel.replace(/\\/g, "/"), lines, bytes, chars };
}

const rows = FILES.map((f) => stats(f));
const sumLines = rows.reduce((a, r) => a + r.lines, 0);
const sumBytes = rows.reduce((a, r) => a + r.bytes, 0);
const sumChars = rows.reduce((a, r) => a + r.chars, 0);
const today = new Date().toISOString().slice(0, 10);

let out = "";
out += "| File | Lines | UTF-8 bytes | Unicode scalar values* |\n";
out += "|------|------:|-------------:|-------------------------:|\n";
for (const r of rows) {
  out += `| \`${r.rel}\` | ${r.lines.toLocaleString("en-US")} | ${r.bytes.toLocaleString("en-US")} | ${r.chars.toLocaleString("en-US")} |\n`;
}
out += `| **Total (listed files)** | **${sumLines.toLocaleString("en-US")}** | **${sumBytes.toLocaleString("en-US")}** | **${sumChars.toLocaleString("en-US")}** |\n`;
out += "\n";
out += `*Recorded with \`scripts/print-learn-hub-manifest.mjs\` on ${today} (UTC date).*\n`;
process.stdout.write(out);
