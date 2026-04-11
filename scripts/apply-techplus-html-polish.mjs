/**
 * Applies scripts/techplus-html-polish.mjs to learn-hub-techplus-md.js in place,
 * then prints the SHA256 fragment to paste into index.html (?v=) if you want cache busting.
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { polishTechplusHtml } from "./techplus-html-polish.mjs";
import { validateTechplusSegments } from "./validate-techplus-html.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const jsPath = path.join(root, "learn-hub-techplus-md.js");

let s = fs.readFileSync(jsPath, "utf8");
const m = s.match(/^(\/\*[\s\S]*?\*\/\r?\n)window\.LEARN_HUB_TECHPLUS_MD = (\{[\s\S]*\});\s*$/);
if (!m) {
  console.error("Unexpected learn-hub-techplus-md.js format (expected banner + window.LEARN_HUB_TECHPLUS_MD = {...};)");
  process.exit(1);
}
const banner = m[1];
const map = JSON.parse(m[2]);
for (const key of Object.keys(map)) {
  map[key] = polishTechplusHtml(map[key]);
}
const vIssues = validateTechplusSegments(map);
if (vIssues.length) {
  console.error("Polish produced HTML that failed validation:");
  for (const x of vIssues) console.error(`  ${x.id}: ${x.kind}`);
  process.exit(1);
}
const out = `${banner}window.LEARN_HUB_TECHPLUS_MD = ${JSON.stringify(map, null, 2)};\n`;
fs.writeFileSync(jsPath, out, "utf8");
const hash = crypto.createHash("sha256").update(out, "utf8").digest("hex").slice(0, 12);
console.log("Polished", Object.keys(map).length, "segments →", jsPath);

const indexPath = path.join(root, "index.html");
let indexHtml = fs.readFileSync(indexPath, "utf8");
const nextIndex = indexHtml.replace(
  /(<script src="learn-hub-techplus-md\.js)(\?[^"]*)?("><\/script>)/,
  `$1?v=${hash}$3`
);
if (nextIndex !== indexHtml) {
  fs.writeFileSync(indexPath, nextIndex, "utf8");
  console.log("Updated index.html: learn-hub-techplus-md.js?v=" + hash);
} else {
  console.log("index.html already has learn-hub-techplus-md.js?v=" + hash);
}
