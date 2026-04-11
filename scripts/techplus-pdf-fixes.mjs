/**
 * Shared PDF/OCR cleanup for Tech+ study-guide Markdown and HTML.
 */

/**
 * @param {string} text
 * @param {{ html?: boolean }} [opts]
 * @returns {string}
 */
export function applyTechPlusReadabilityFixes(text, opts = {}) {
  let t = String(text);
  const html = !!opts.html;

  /** Contractions split across lines */
  t = t.replace(/([A-Za-z]+)'\s*\r?\n\s*(t|s|re|ve|ll|d)\b/g, "$1'$2");
  t = t.replace(
    /\b(isn|doesn|won|don|can|couldn|wouldn|shouldn|wasn|weren|haven|hasn|hadn|aren|didn)\s*'\s*\r?\n\s*t\b/gi,
    "$1't"
  );

  /** Space before apostrophe */
  t = t.replace(/\b(isn|doesn|won|don|can|couldn|wouldn|shouldn|wasn|weren|haven|hasn|hadn|aren|didn)\s+'\s*t\b/gi, "$1't");
  t = t.replace(/\b(it|that|there|here|what|let)\s+'\s*s\b/gi, "$1's");
  t = t.replace(/\b(they|you|we|who)\s+'\s*re\b/gi, "$1're");

  /** Space inside contraction */
  t = t.replace(/\bit'\s+s\b/gi, "it's");
  t = t.replace(/\bdon'\s+t\b/gi, "don't");
  t = t.replace(/\bdoesn'\s+t\b/gi, "doesn't");
  t = t.replace(/\bisn'\s+t\b/gi, "isn't");
  t = t.replace(/\bwasn'\s+t\b/gi, "wasn't");
  t = t.replace(/\bweren'\s+t\b/gi, "weren't");
  t = t.replace(/\bhaven'\s+t\b/gi, "haven't");
  t = t.replace(/\bhasn'\s+t\b/gi, "hasn't");
  t = t.replace(/\bhadn'\s+t\b/gi, "hadn't");
  t = t.replace(/\bwon'\s+t\b/gi, "won't");
  t = t.replace(/\bwouldn'\s+t\b/gi, "wouldn't");
  t = t.replace(/\bcouldn'\s+t\b/gi, "couldn't");
  t = t.replace(/\bshouldn'\s+t\b/gi, "shouldn't");
  t = t.replace(/\bcan'\s+t\b/gi, "can't");
  t = t.replace(/\bdidn'\s+t\b/gi, "didn't");
  t = t.replace(/\baren'\s+t\b/gi, "aren't");
  t = t.replace(/\bisn '\s*t\b/gi, "isn't");
  t = t.replace(/\bthere'\s+s\b/gi, "there's");
  t = t.replace(/\bthat'\s+s\b/gi, "that's");
  t = t.replace(/\bhere'\s+s\b/gi, "here's");
  t = t.replace(/\bIt'\s+s\b/g, "It's");
  t = t.replace(/\bThat'\s+s\b/g, "That's");
  t = t.replace(/\bWhat'\s+s\b/g, "What's");
  t = t.replace(/\bHere'\s+s\b/g, "Here's");
  t = t.replace(/\bThere'\s+s\b/g, "There's");
  t = t.replace(/\bLet'\s+s\b/g, "Let's");
  t = t.replace(/\bDon'\s+t\b/g, "Don't");
  /** Possessive / “it’s” style: word + apostrophe + space + s */
  t = t.replace(/\b([A-Za-z]{4,})'\s+s\b/g, "$1's");
  t = t.replace(/\b(it|she|he|who)'\s+s\b/gi, "$1's");

  /** Explicit hyphen / OCR splits (run before generic fixes) */
  const pairs = [
    [/impor\s*-\s*tant/gi, "important"],
    [/processorto-\s*memory/gi, "processor-to-memory"],
    [/Net\s+-\s*working/gi, "Networking"],
    [/touc hpad/gi, "touchpad"],
    [/rac k-mounted/gi, "rack-mounted"],
    [/e-\s*re\s*aders/gi, "e-readers"],
    [/alw ays/gi, "always"],
    [/singlepurpose/gi, "single-purpose"],
    [/standardlooking/gi, "standard-looking"],
    [/Bluetoothenabled/gi, "Bluetooth-enabled"],
    [/Pla y Store/gi, "Play Store"],
    [/do cumentation/gi, "documentation"],
    [/as sembly/gi, "assembly"],
    [/Set tings/gi, "Settings"],
    [/fieldreplaceable/gi, "field-replaceable"],
    [/Computing Devicesand/gi, "Computing Devices and"],
    [/pur\s+poses/gi, "purposes"],
    [/non-\s*vo\s+latile/gi, "non-volatile"],
    [/long-\s*te\s+rm/gi, "long-term"],
    [/short-\s*te\s+rm/gi, "short-term"],
    [/solid-\s*st\s+ate/gi, "solid-state"],
    [/heatmitigation/gi, "heat mitigation"],
    [/powerand/gi, "power and"],
    [/MotherboardsThe/gi, "Motherboards. The"],
    [/Motherboardsare/gi, "Motherboards are"],
    [/MemoryThese/gi, "Memory. These"],
    [/beginyour/gi, "begin your"],
    [/inyour/gi, "in your"],
    [/all theother/gi, "all the other"],
    [/thispiece/gi, "this piece"],
    [/ofthese/gi, "of these"],
    [/smallform/gi, "small form"],
    [/most commonform/gi, "most common form"],
    [/knowwhat/gi, "know what"],
    [/casesoften/gi, "cases often"],
    [/industry-\s*st\s+andard/gi, "industry-standard"],
    [/Baby-\s*A\s*T\b/gi, "Baby-AT"],
    [/Mini-\s*ITX\s+2\s+001/gi, "Mini-ITX 2001"],
    [/intothe/gi, "into the"],
    [/Ifyou\b/gi, "If you"],
    [/itcan\b/gi, "it can"],
    [/withone\b/gi, "with one"],
    [/wheelisused/gi, "wheel is used"],
    [/carduse\b/gi, "card use"],
    [/subobjec\s*-\s*tive/gi, "subobjective"],
    [/third-\s*party/gi, "third-party"],
    [/byIBM/gi, "by IBM"],
    [/it\s+can make your/gi, "it can make your"],
    [/USB-\s*C\b/gi, "USB-C"],
    [/Wi-\s*Fi\b/gi, "Wi-Fi"],
    [/A\s+C\s+power/gi, "AC power"],
    [/inser\s+tion/gi, "insertion"],
    [/Point\s+stic\s+k/gi, "Point stick"],
    [/stic\s+k\b/gi, "stick"],
    [/Por\s+trait/gi, "Portrait"],
    [/P\s+asscode/gi, "Passcode"],
    [/loc\s+k\b/gi, "lock"],
    [/set\s+tings/gi, "settings"],
    [/Self-\s*Service\b/g, "Self-Service"],
    [/dotted-\s*decimal/gi, "dotted-decimal"],
    [/antispam/gi, "anti-spam"],
    [/Bluetoothen\s*abled/gi, "Bluetooth-enabled"],
    [/longand\b/gi, "long and"],
    [/poweredoff\b/gi, "powered off"],
    [/\bandARM\b/g, "and ARM"],
    [/\bcanmake\b/gi, "can make"],
    [/\bconnectsall\b/gi, "connects all"],
    [/\bhowto\b/gi, "how to"],
    [/\bPCIeEach\b/g, "PCIe. Each"],
    [/Wi-Fi\s*7\s*What/gi, "Wi-Fi 7. What"],
    [/Other Connectors Trying\b/g, "Other Connectors. Trying"],
  ];
  for (const [re, to] of pairs) t = t.replace(re, to);

  /** Common "word- rest" line breaks in PDF (safe merges) */
  t = t.replace(/\b([a-z]{3,})-\s+\n\s*([a-z]{2,12})\b/gim, "$1$2");
  t = t.replace(/\b([a-z]{3,})-\s+([a-z]{2,12})\b/gi, (full, a, b) => {
    const keep = /^(end|multi|single|dual|non|pre|re|co|sub|inter|intra|pseudo|semi|anti|counter|post|mini|micro|macro|full|half|long|short|high|low|cross|well|over|under|self|user|cross)$/i;
    if (keep.test(a)) return full;
    return a + b;
  });

  /** Space before punctuation */
  t = t.replace(/ +([,.;:!?])/g, "$1");

  if (html) {
    t = t.replace(/don&#39;\s+t/gi, "don&#39;t");
    t = t.replace(/it&#39;\s+s/gi, "it&#39;s");
    t = t.replace(/\b(isn|doesn|won|don|can|couldn|wouldn|shouldn|wasn|weren|haven|hasn|hadn|aren|didn)&#39;\s+t/gi, "$1&#39;t");
    t = t.replace(/\b(it|that|there|here|what)&#39;\s+s/gi, "$1&#39;s");
    t = t.replace(/\b([A-Za-z]{4,})&#39;\s+s\b/g, "$1&#39;s");
  }

  return t;
}

/**
 * PDF intro: split chapter title + "THE FOLLOWING…CHAPTER:" banner → real Markdown headings.
 */
export function promoteTechplusChapterIntroBanner(md) {
  /** `---` is never at file start (comes after `# Lesson` + `Source:`). */
  return md.replace(
    /(^Source:[^\n]+\n\n)---\s*\n([\s\S]*?)(?=\n\s*[✓✔]\s*[\d.]+)/m,
    (full, pre, block) => {
      const trimmed = block.trim();
      if (!/\bTHE FOLLOWING COMPTIA\b[\s\S]*\bCHAPTER:\s*$/i.test(trimmed)) return full;
      const m2 = block.match(/^([\s\S]*?)\n(THE FOLLOWING COMPTIA[\s\S]*CHAPTER:)\s*$/i);
      if (!m2) return full;
      const titleJoined = m2[1].replace(/\s+/g, " ").trim();
      const bannerJoined = m2[2].replace(/\s+/g, " ").trim();
      return `${pre}---\n\n## ${titleJoined}\n\n**${bannerJoined}**`;
    }
  );
}

/**
 * After objectives lists, PDF often has "Chapter" + page/chapter number on its own lines (noise).
 */
export function stripOrphanChapterNumberAfterObjectives(md) {
  return md.replace(/\nChapter\s*\n\s*\d{1,2}\s*\n+/g, "\n\n");
}
