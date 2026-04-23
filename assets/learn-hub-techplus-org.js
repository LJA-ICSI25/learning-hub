/**
 * Tech+ (FC0-U71) sidebar organization: book chapters vs exam objective labels.
 * Chapter ↔ objective mapping follows the study guide / exam objective crosswalk.
 */
window.LEARN_HUB_TECHPLUS_ORG = {
  STORAGE_KEY: "learn-hub-techplus-org-mode-v1",
  MODE_CHAPTERS: "chapters",
  MODE_OBJECTIVES: "objectives",
  MODE_QUESTIONS: "questions",

  /** Book chapter strip titles (chapter view) */
  CHAPTER_NAV_TITLE: {
    1: "Chapter 1 — Core hardware & components",
    2: "Chapter 2 — Peripherals & connectors",
    3: "Chapter 3 — Computing devices & IoT",
    4: "Chapter 4 — Operating systems",
    5: "Chapter 5 — Software applications",
    6: "Chapter 6 — Software development",
    7: "Chapter 7 — Database fundamentals",
    8: "Chapter 8 — Networking concepts & technologies",
    9: "Chapter 9 — Cloud computing & AI",
    10: "Chapter 10 — Security concepts & threats",
    11: "Chapter 11 — Security best practices",
    12: "Chapter 12 — Data continuity & computer support",
  },

  /**
   * Objective view: labels tie lessons to FC0-U71 objective numbers; chapter in parentheses for cross-reference.
   * Where one chapter spans multiple objective domains, the primary teaching domain is listed first.
   */
  OBJECTIVE_NAV_TITLE: {
    1: "1.0 · Hardware, components & installation (Ch 1)",
    2: "2.0 · Peripherals, ports & connectors (Ch 2)",
    3: "3.0 · Computing devices & IoT (Ch 3)",
    4: "3.1–3.2 · OS components & operating system purpose (Ch 4)",
    5: "3.3–3.4 · Software, apps & browser features (Ch 5)",
    6: "4.1–4.4 · Programming languages, data types & logic (Ch 6)",
    7: "5.2–5.3 · Database concepts & structures (Ch 7)",
    8: "6.5 · Wireless network security settings (Ch 8)",
    9: "3.5 · Artificial intelligence uses (Ch 9)",
    10: "5.1 & 6.1 · Data value & security concepts (Ch 10)",
    11: "6.2–6.4 · Device security, passwords & encryption (Ch 11)",
    12: "5.4 · Backup concepts (Ch 12)",
  },
};
