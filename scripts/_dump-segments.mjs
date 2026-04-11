import fs from "fs";
const t = fs.readFileSync("learn-hub-techplus-md.js", "utf8");
const fn = new Function("return " + t.replace(/^[\s\S]*?=\s*/, "").replace(/;\s*$/, ""));
const o = fn();
for (const id of ["tech-sg-02-05", "tech-sg-04-09", "tech-sg-06-05", "tech-sg-06-06", "tech-sg-07-08"]) {
  const s = o[id] || "";
  const i = s.indexOf("lh-tg-root");
  console.log("\n========", id, "len", s.length, "========");
  console.log(s.slice(Math.max(0, i), i + 3500));
}
