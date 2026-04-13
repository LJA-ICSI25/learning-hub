document.documentElement.setAttribute("data-lh-data", "ok");
const XP_PER = 10;
var COURSES;
(function loadCoursesJson() {
  try {
    if (typeof window !== "undefined" && Array.isArray(window.LEARN_HUB_COURSES)) {
      COURSES = window.LEARN_HUB_COURSES;
    } else {
      const node = document.getElementById("learn-hub-courses");
      COURSES = node ? JSON.parse(node.textContent.trim()) : [];
    }
    if (!Array.isArray(COURSES) || COURSES.length === 0) throw new Error("Empty curriculum");
  } catch (err) {
    console.error("Learn Hub curriculum:", err);
    COURSES = [
      {
        id: "setup",
        name: "Setup",
        ws: "tech",
        lessons: [
          {
            unit: "Help",
            id: "setup-1",
            kind: "learn",
            title: "Curriculum did not load",
            narrative:
              "<h2>What happened</h2><p>The curriculum could not be read. You can still use the <strong>SQL Path</strong> course, which uses the same layout.</p><p><a href=\"../../SQL/index.html\">Open SQL/index.html</a> (interactive SQL lessons).</p><h3>Fix Learn Hub</h3><ul><li>Hard-refresh (Ctrl+F5). Keep the <code>assets/</code> folder beside <code>index.html</code> and check the Network tab for 404s on <code>learn-hub-courses.js</code>.</li><li>Open DevTools (F12) → Console: a <strong>SyntaxError</strong> in <code>learn-hub-courses.js</code> means that file is corrupted or truncated—restore it from a backup or re-run your build script.</li><li>Open <code>Learn-Hub/index.html</code> from your drive (not an old copy).</li><li>Use Chrome or Edge with JavaScript enabled.</li></ul>",
          },
        ],
      },
    ];
  }
  try {
    const Dstub = typeof window !== "undefined" && window.LEARN_HUB_DEPTH && typeof window.LEARN_HUB_DEPTH === "object" ? window.LEARN_HUB_DEPTH : null;
    const T = typeof window !== "undefined" && window.LEARN_HUB_TECHPLUS && typeof window.LEARN_HUB_TECHPLUS === "object" ? window.LEARN_HUB_TECHPLUS : null;
    const Tmd =
      typeof window !== "undefined" && window.LEARN_HUB_TECHPLUS_MD && typeof window.LEARN_HUB_TECHPLUS_MD === "object"
        ? window.LEARN_HUB_TECHPLUS_MD
        : null;
    const SecMd =
      typeof window !== "undefined" && window.LEARN_HUB_SECURITY_MD && typeof window.LEARN_HUB_SECURITY_MD === "object"
        ? window.LEARN_HUB_SECURITY_MD
        : null;
    const KaliMd =
      typeof window !== "undefined" && window.LEARN_HUB_KALI_MD && typeof window.LEARN_HUB_KALI_MD === "object"
        ? window.LEARN_HUB_KALI_MD
        : null;
    const Deep = typeof window !== "undefined" && window.LEARN_HUB_DEEP && typeof window.LEARN_HUB_DEEP === "object" ? window.LEARN_HUB_DEEP : null;
    if (Array.isArray(COURSES)) {
      for (const c of COURSES) {
        if (!c.lessons) continue;
        for (const L of c.lessons) {
          let read = L.narrative || "";
          if (Dstub) {
            const d0 = Dstub[L.id];
            if (d0) read += d0;
          }
          if (Deep) {
            const d1 = Deep[L.id];
            if (d1) read += d1;
          }
          if (T) {
            const addT = T[L.id];
            if (addT) read += addT;
          }
          L.readHtmlBase = read;
          if (Tmd) {
            const addMd = Tmd[L.id];
            if (addMd) read += addMd;
          }
          if (SecMd) {
            const addSec = SecMd[L.id];
            if (addSec) read += addSec;
          }
          if (KaliMd) {
            const addKali = KaliMd[L.id];
            if (addKali) read += addKali;
          }
          L.readHtml = read;
          L.narrative = "";
        }
      }
    }
  } catch (mergeErr) {
    console.warn("Learn Hub: merging DEEP / TECHPLUS / Security / Kali reading failed for some lessons.", mergeErr);
  }
})();
if (!Array.isArray(COURSES) || COURSES.length === 0) {
  COURSES = [{ id: "setup", name: "Setup", ws: "tech", lessons: [{ unit: "Help", id: "setup-1", kind: "learn", title: "Curriculum did not load", narrative: "<p>Open DevTools (F12) → Console. Hard-refresh this file (Ctrl+F5).</p>" }] }];
}
window.addEventListener("error", function (ev) {
  var m = document.getElementById("lh-fatal");
  if (!m) {
    m = document.createElement("div");
    m.id = "lh-fatal";
    m.style.cssText = "position:fixed;left:0;right:0;top:0;z-index:9999;background:#3d1515;color:#fecaca;padding:12px 16px;font:14px system-ui;border-bottom:2px solid #f87171;";
    document.body.insertBefore(m, document.body.firstChild);
  }
  m.textContent = "Learn Hub script error: " + (ev && ev.message ? ev.message : "unknown") + " (see Console)";
});
function learnHubRunApp() {
  "use strict";

  const ACCOUNTS_KEY = "learn-hub-accounts-v1";
  const SESSION_KEY = "learn-hub-session-v1";
  var currentUsername = null;

  function lhProgressStorageKey() {
    if (!currentUsername) throw new Error("Learn Hub: no signed-in user for progress storage.");
    return "learn-hub-progress-v9-u-" + encodeURIComponent(String(currentUsername).toLowerCase());
  }

  const TEACH_COLLAPSED_KEY = "learn-hub-teach-collapsed";
  const A11Y_CONTRAST_KEY = "learn-hub-a11y-contrast-v1";
  const A11Y_MOTION_KEY = "learn-hub-a11y-reduce-motion-v1";
  const A11Y_SIDEBAR_HIDDEN_KEY = "learn-hub-a11y-hide-sidebar-v1";
  const INDENT = "  ";

  function prefersReducedNavMotion() {
    return (
      document.body.classList.contains("lh-force-reduce-motion") ||
      (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    );
  }

  function syncMenuToggleExpanded() {
    var mt = document.getElementById("menu-toggle");
    if (mt && el.sidebar) mt.setAttribute("aria-expanded", el.sidebar.classList.contains("open") ? "true" : "false");
  }

  const el = {
    pills: document.getElementById("course-pills"),
    lessonNav: document.getElementById("sidebar-lesson-nav"),
    sidebarTrackName: document.getElementById("sidebar-track-name"),
    teach: document.getElementById("teach"),
    title: document.getElementById("lesson-title"),
    progressFill: document.getElementById("progress-fill"),
    xpBar: document.getElementById("xp-bar"),
    xpFill: document.getElementById("xp-fill"),
    xpLabel: document.getElementById("xp-label"),
    footerHint: document.getElementById("footer-hint"),
    btnContinue: document.getElementById("btn-continue"),
    btnSkipChapter: document.getElementById("btn-skip-chapter"),
    sidebar: document.getElementById("sidebar"),
    menuToggle: document.getElementById("menu-toggle"),
    btnToggleTeach: document.getElementById("btn-toggle-teach"),
    lessonPicker: document.getElementById("lesson-picker"),
    contentGrid: document.getElementById("content-grid"),
    wsWeb: document.getElementById("ws-web"),
    wsPy: document.getElementById("ws-py"),
    wsSql: document.getElementById("ws-sql"),
    wsTech: document.getElementById("ws-tech"),
    webHtml: document.getElementById("web-html"),
    webCss: document.getElementById("web-css"),
    webJs: document.getElementById("web-js"),
    webIframe: document.getElementById("web-iframe"),
    webPreviewHint: document.getElementById("web-preview-hint"),
    webStatus: document.getElementById("web-status"),
    pyInput: document.getElementById("py-input"),
    pyOutput: document.getElementById("py-output"),
    pyStatus: document.getElementById("py-status"),
    pyLoadNote: document.getElementById("py-load-note"),
    sqlInput: document.getElementById("sql-input"),
    sqlStatus: document.getElementById("sql-status"),
    output: document.getElementById("output"),
    techQuiz: document.getElementById("tech-quiz"),
    techFeedback: document.getElementById("tech-feedback"),
    techStatus: document.getElementById("tech-status"),
    lessonFilter: document.getElementById("lesson-filter"),
    lessonPlace: document.getElementById("lh-lesson-place"),
    announcer: document.getElementById("lh-announcer"),
    userLabel: document.getElementById("lh-user-label"),
  };

  let SQL = null;
  let lessonDb = null;
  let pyodideInstance = null;
  let pyodidePromise = null;
  let pyodideScriptPromise = null;
  let sqlScriptPromise = null;
  let sqlInitPromise = null;

  function loadSqlJsScript() {
    if (typeof initSqlJs === "function") return Promise.resolve();
    if (sqlScriptPromise) return sqlScriptPromise;
    sqlScriptPromise = new Promise(function (resolve, reject) {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/sql.js@1.11.0/dist/sql-wasm.js";
      s.async = true;
      s.onload = function () {
        if (typeof initSqlJs === "function") resolve();
        else reject(new Error("sql.js loaded but initSqlJs is missing."));
      };
      s.onerror = function () {
        reject(new Error("Could not load sql.js (offline, blocked CDN, or network issue)."));
      };
      document.head.appendChild(s);
    });
    return sqlScriptPromise;
  }

  function loadPyodideScript() {
    if (typeof loadPyodide === "function") return Promise.resolve();
    if (pyodideScriptPromise) return pyodideScriptPromise;
    pyodideScriptPromise = new Promise(function (resolve, reject) {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
      s.async = true;
      s.onload = function () {
        if (typeof loadPyodide === "function") resolve();
        else reject(new Error("Pyodide loaded but loadPyodide is missing."));
      };
      s.onerror = function () {
        reject(new Error("Could not load Pyodide (network, firewall, or offline)."));
      };
      document.head.appendChild(s);
    });
    return pyodideScriptPromise;
  }

  function ensureSqlJs() {
    if (SQL) return Promise.resolve(SQL);
    return loadSqlJsScript().then(function () {
      if (!sqlInitPromise) {
        sqlInitPromise = initSqlJs({
          locateFile: function (f) {
            return "https://cdn.jsdelivr.net/npm/sql.js@1.11.0/dist/" + f;
          },
        }).then(function (Module) {
          SQL = Module;
          return Module;
        });
      }
      return sqlInitPromise;
    });
  }

  const courseById = Object.fromEntries(COURSES.map((c) => [c.id, c]));
  let activeCourseId = COURSES[0].id;
  let lessonIndex = 0;

  let progress = {
    activeCourseId: COURSES[0].id,
    courses: {},
  };

  function courseXpFromDone(courseId) {
    var c = courseById[courseId];
    var row = progress.courses[courseId];
    if (!c || !Array.isArray(c.lessons) || !row || !row.done) return 0;
    var total = 0;
    for (var i = 0; i < c.lessons.length; i++) {
      if (row.done[c.lessons[i].id]) total += XP_PER;
    }
    return total;
  }

  function maxXpForCourse(courseId) {
    var c = courseById[courseId];
    var len = c && Array.isArray(c.lessons) ? c.lessons.length : 0;
    return len * XP_PER;
  }

  function ensureLearnProgressShape(cp) {
    if (!cp.learnVisited) cp.learnVisited = {};
    if (!cp.learnOutcome) cp.learnOutcome = {};
  }

  function courseProgress(id) {
    var row0 = progress.courses[id];
    if (!row0 || typeof row0 !== "object" || Array.isArray(row0)) {
      progress.courses[id] = { done: {}, idx: 0 };
    }
    var cp = progress.courses[id];
    ensureLearnProgressShape(cp);
    if (typeof cp.xp !== "number") cp.xp = courseXpFromDone(id);
    return cp;
  }

  function normalizeUsername(s) {
    return String(s || "")
      .trim()
      .toLowerCase();
  }

  function readAccounts() {
    try {
      var raw = localStorage.getItem(ACCOUNTS_KEY);
      if (!raw) return {};
      var o = JSON.parse(raw);
      if (!o || typeof o !== "object" || Array.isArray(o)) return {};
      return o;
    } catch (_) {
      return {};
    }
  }

  function writeAccounts(obj) {
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) return;
    try {
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(obj));
    } catch (e) {
      console.warn("Learn Hub: could not save accounts.", e);
    }
  }

  function encodePw(plain) {
    try {
      return btoa(unescape(encodeURIComponent(String(plain))));
    } catch (_) {
      return btoa(String(plain));
    }
  }

  function passwordMatches(stored, plain) {
    return stored != null && String(stored) === encodePw(plain);
  }

  function clearSession() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (_) {}
  }

  function saveSession(username) {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ username: username }));
    } catch (e) {
      console.warn("Learn Hub: could not save session.", e);
    }
  }

  /** First time the user opens this learn step in the sidebar (persisted). */
  function markLearnLessonVisited(lessonId) {
    if (!lessonId) return;
    var cp = courseProgress(activeCourseId);
    if (cp.learnVisited[lessonId]) return;
    cp.learnVisited[lessonId] = true;
    saveProgress();
  }

  /** Gold “pending” row: visited learn not finished with Continue, or re-opened after Skip. */
  function learnPendingFromProgress(learn, Ls) {
    if (!learn || !Ls || !Ls.id) return false;
    var cp = courseProgress(activeCourseId);
    if (!cp.learnVisited[Ls.id]) return false;
    var done = !!cp.done[Ls.id];
    if (!done) return true;
    return cp.learnOutcome[Ls.id] === "skip";
  }

  function lessons() {
    const c = courseById[activeCourseId];
    return (c && Array.isArray(c.lessons)) ? c.lessons : [];
  }

  function currentLesson() {
    return lessons()[lessonIndex];
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Decode entities like &#39; in curriculum titles so the UI shows apostrophes, not raw entities. */
  function decodeLessonTitle(s) {
    if (s == null || s === "") return "";
    var t = String(s);
    if (typeof document !== "undefined") {
      var ta = document.createElement("textarea");
      ta.innerHTML = t;
      return ta.value;
    }
    return t;
  }

  /** One line for Tech+ lh-tg-source <strong>: prefer real subsection headings inside the segment body. */
  function stripBannerTitle(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .replace(/\s+([.,;:!?])/g, "$1")
      .trim();
  }

  function deriveTechplusBannerTitleFromMd(html, lessonTitle) {
    var fb = stripBannerTitle(decodeLessonTitle(lessonTitle || ""));
    /** Ch 1 “Overview & exam objectives”: body has only h2 chapter title + objectives list — keep curriculum title, not the h2. */
    if (
      /^overview\b/i.test(fb) &&
      /\bTHE FOLLOWING COMPTIA\b/i.test(html) &&
      /<ul\b/i.test(html)
    ) {
      return fb;
    }
    var i = html.indexOf("lh-tg-root");
    var slice = i >= 0 ? html.slice(i) : html;
    var h3 = slice.match(/<h3[^>]*>([^<]*)<\/h3>/i);
    if (h3) return stripBannerTitle(decodeLessonTitle(h3[1]));
    var h2 = slice.match(/<h2[^>]*>([^<]*)<\/h2>/i);
    if (h2) return stripBannerTitle(decodeLessonTitle(h2[1]));
    var ex = slice.match(/<p>\s*EXERCISE\s+([\d.]+)\s*<\/p>\s*<p>([^<]+)<\/p>/i);
    if (ex) return "Exercise " + ex[1] + " — " + stripBannerTitle(decodeLessonTitle(ex[2]));
    var h1 = slice.match(/<h1[^>]*>([^<]*)<\/h1>/i);
    if (h1) {
      var ht = stripBannerTitle(decodeLessonTitle(h1[1])).replace(/^Lesson\s+\d+\s*:\s*/i, "").trim();
      if (ht) return ht;
    }
    return stripBannerTitle(decodeLessonTitle(lessonTitle || ""));
  }

  function normalizeTechplusSourceBanner(html, Ls) {
    if (!html || html.indexOf("lh-tg-source") < 0) return html;
    var title = deriveTechplusBannerTitleFromMd(html, Ls.title || "");
    if (!title) return html;
    return html.replace(/(<p class="lh-tg-source"><strong>)([^<]*)(<\/strong>)/, function (_, a, _old, c) {
      return a + escapeHtml(title) + c;
    });
  }

  /** Plain text for filtering when titles contain HTML snippets. */
  function plainTextFromHtml(s) {
    var d = decodeLessonTitle(s);
    if (typeof document === "undefined") return String(d).replace(/<[^>]+>/g, " ");
    var el = document.createElement("div");
    el.innerHTML = d;
    return (el.textContent || el.innerText || "").replace(/\s+/g, " ").trim();
  }

  /** Book chapter index (1–12) for Tech+ study-guide ids, or curriculum level (1–5) for Security <code>lh-sec-lN-…</code>; or from a `Ch N — …` unit label; otherwise null. */
  function chapterNumberForLesson(lesson, courseId) {
    if (!lesson) return null;
    var id = String(lesson.id || "");
    var idm = id.match(/^tech-sg-(\d{2})-/i);
    if (idm) return parseInt(idm[1], 10);
    if (courseId === "security") {
      var sm = id.match(/^lh-sec-l(\d+)-/i);
      if (sm) return parseInt(sm[1], 10);
    }
    var u = plainTextFromHtml(lesson.unit || "");
    var um = u.match(/^\s*Ch\s*(\d{1,2})\s*[—\-–]/);
    if (um) return parseInt(um[1], 10);
    return null;
  }

  function buildLessonSearchHaystack(lesson, courseId) {
    var title = plainTextFromHtml((lesson && lesson.title) || "");
    var unit = plainTextFromHtml((lesson && lesson.unit) || "");
    var parts = [title, unit];
    var ch = chapterNumberForLesson(lesson, courseId);
    if (ch != null) {
      parts.push("chapter " + ch);
      parts.push("ch " + ch);
      parts.push("book " + ch);
      parts.push("ch" + ch);
      parts.push("unit " + ch);
    }
    return parts.join("\n").toLowerCase();
  }

  function parseLessonFilterQuery(q, courseId) {
    var q0 = String(q || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
    if (!q0) return { empty: true };
    var tech = courseId === "tech";
    var chapters = [];
    var rest = q0;

    if (tech) {
      var lead = rest.match(/^(\d{1,2})\s+(.+)$/);
      if (lead) {
        chapters.push(parseInt(lead[1], 10));
        rest = lead[2];
      }
    }

    rest = rest.replace(/\b(?:ch|chapter|book|unit)\s*(\d{1,2})\b/g, function (_, d) {
      chapters.push(parseInt(d, 10));
      return " ";
    });
    rest = rest.replace(/\bch(\d{1,2})\b/g, function (_, d) {
      chapters.push(parseInt(d, 10));
      return " ";
    });
    rest = rest.replace(/\s+/g, " ").trim();

    if (tech && /^\d{1,2}$/.test(q0)) {
      var only = parseInt(q0, 10);
      if (only >= 1 && only <= 12) {
        return { empty: false, chapters: [only], tokens: [], chapterOnly: true };
      }
    }

    var tokens = rest.split(/\s+/).filter(Boolean);
    return { empty: false, chapters: chapters, tokens: tokens, chapterOnly: false };
  }

  function chapterConstraintsMatch(wanted, lessonCh) {
    if (!wanted || wanted.length === 0) return true;
    /* Tracks without book chapters (Security, Labs, …) yield null — do not hide every lesson when the filter still contains e.g. "ch 8" from Tech+ browsing. */
    if (lessonCh == null) return true;
    var seen = {};
    for (var i = 0; i < wanted.length; i++) seen[wanted[i]] = true;
    var keys = Object.keys(seen);
    if (keys.length > 1) return false;
    var need = parseInt(keys[0], 10);
    return lessonCh === need;
  }

  function tokenMatchesFilterToken(tok, hay, lessonCh, courseId) {
    if (!tok) return true;
    if (tok.length === 1 && !/\d/.test(tok)) return true;

    if (/^\d{1,2}$/.test(tok) && courseId === "tech") {
      var n = parseInt(tok, 10);
      if (n >= 1 && n <= 12) return lessonCh === n;
    }

    if (hay.indexOf(tok) !== -1) return true;

    if (tok.length >= 3) {
      var words = hay.split(/[^a-z0-9_]+/);
      for (var w = 0; w < words.length; w++) {
        if (words[w].length >= tok.length && words[w].indexOf(tok) === 0) return true;
      }
    }
    return false;
  }

  function lessonMatchesFilterQuery(query, lesson, courseId) {
    var parsed = parseLessonFilterQuery(query, courseId);
    if (parsed.empty) return true;
    var lessonCh = chapterNumberForLesson(lesson, courseId);
    if (!chapterConstraintsMatch(parsed.chapters, lessonCh)) return false;
    if (parsed.chapterOnly) return true;
    if (parsed.tokens.length === 0) return true;
    var hay = buildLessonSearchHaystack(lesson, courseId);
    for (var t = 0; t < parsed.tokens.length; t++) {
      if (!tokenMatchesFilterToken(parsed.tokens[t], hay, lessonCh, courseId)) return false;
    }
    return true;
  }

  function lessonTitleAsUiHtml(s) {
    return escapeHtml(decodeLessonTitle(s));
  }

  function parseUrlLessonState() {
    try {
      var q = new URLSearchParams(location.search);
      return {
        courseId: q.get("course") || q.get("c") || "",
        lessonId: q.get("lesson") || q.get("l") || "",
        idxRaw: q.get("li") != null ? q.get("li") : q.get("idx"),
      };
    } catch (e) {
      return { courseId: "", lessonId: "", idxRaw: null };
    }
  }

  function applyUrlLessonOverride() {
    var spec = parseUrlLessonState();
    if (!spec.courseId || !courseById[spec.courseId]) return;
    activeCourseId = spec.courseId;
    progress.activeCourseId = activeCourseId;
    var list = courseById[activeCourseId].lessons || [];
    var j = -1;
    if (spec.lessonId) {
      j = list.findIndex(function (x) {
        return x.id === spec.lessonId;
      });
    } else if (spec.idxRaw != null && spec.idxRaw !== "") {
      var n = parseInt(String(spec.idxRaw), 10);
      if (Number.isFinite(n) && n >= 0 && n < list.length) j = n;
    }
    if (j >= 0) lessonIndex = j;
  }

  function syncUrlFromLesson() {
    try {
      var Ls = currentLesson();
      var c = courseById[activeCourseId];
      if (!Ls || !c) return;
      var u = new URL(location.href);
      u.searchParams.set("course", activeCourseId);
      u.searchParams.set("lesson", Ls.id);
      u.searchParams.delete("c");
      u.searchParams.delete("l");
      u.searchParams.delete("li");
      u.searchParams.delete("idx");
      var next = u.toString();
      if (location.href.split("#")[0] !== next) history.replaceState(null, "", next);
    } catch (e) {}
  }

  function getResolvedReadHtml(Ls) {
    if (!Ls) return "";
    var base = Ls.readHtmlBase != null ? Ls.readHtmlBase : "";
    if (/^tech-sg-\d{2}-\d{2}$/.test(Ls.id)) {
      var md = typeof window !== "undefined" && window.LEARN_HUB_TECHPLUS_MD && window.LEARN_HUB_TECHPLUS_MD[Ls.id];
      var full = base + (md ? md : "");
      return normalizeTechplusSourceBanner(full, Ls);
    }
    return (Ls.readHtml != null ? Ls.readHtml : Ls.narrative) || "";
  }

  function techSgChapterFromLessonId(lessonId) {
    var m = typeof lessonId === "string" && lessonId.match(/^tech-sg-(\d{2})-\d{2}$/);
    return m ? parseInt(m[1], 10) : 0;
  }

  var chapterSearchState = {
    query: "",
    chapter: 0,
    matches: [],
    curIdx: 0,
    runId: 0,
    searchTimer: null,
  };

  function segmentPlainForSearch(Lx) {
    if (!Lx) return "";
    var html = getResolvedReadHtml(Lx);
    return plainTextFromHtml(html)
      .replace(/\s+/g, " ")
      .trim();
  }

  function buildChapterMatchList(ch, q) {
    var matches = [];
    if (!ch || !q) return matches;
    var list = lessons();
    var prefix = "tech-sg-" + String(ch).padStart(2, "0") + "-";
    var ql = q.toLowerCase();
    for (var i = 0; i < list.length; i++) {
      var L = list[i];
      if (String(L.id).indexOf(prefix) !== 0) continue;
      var plain = segmentPlainForSearch(L);
      var pl = plain.toLowerCase();
      var pos = 0;
      var idx;
      var occ = 0;
      while ((idx = pl.indexOf(ql, pos)) >= 0) {
        matches.push({ lessonIndex: i, occInLesson: occ });
        occ++;
        pos = idx + ql.length;
      }
    }
    return matches;
  }

  function waitForReadingThen(fn) {
    var tries = 0;
    function tick() {
      var r = el.teach && el.teach.querySelector(".lh-tech-reading");
      if (r) {
        fn(r);
        return;
      }
      if (tries++ > 160) return;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function prefersReducedMotion() {
    return (
      document.body.classList.contains("lh-force-reduce-motion") ||
      (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    );
  }

  function focusOccurrenceInReading(root, query, occurrenceIndex) {
    if (!root || !query || occurrenceIndex < 0) return false;
    var ql = query.toLowerCase();
    var qLen = query.length;
    var seen = 0;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    var reduceMotion = prefersReducedMotion();
    while ((node = walker.nextNode())) {
      var text = node.nodeValue;
      if (!text) continue;
      var tl = text.toLowerCase();
      var pos = 0;
      var idx;
      while ((idx = tl.indexOf(ql, pos)) >= 0) {
        if (seen === occurrenceIndex) {
          var range = document.createRange();
          range.setStart(node, idx);
          range.setEnd(node, idx + qLen);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          var elScroll = node.parentElement;
          if (elScroll && elScroll.scrollIntoView) {
            elScroll.scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
          }
          return true;
        }
        seen++;
        pos = idx + ql.length;
      }
    }
    return false;
  }

  function updateChapterSearchControlsDisabled() {
    var prev = document.getElementById("lh-ch-search-prev");
    var next = document.getElementById("lh-ch-search-next");
    var has = chapterSearchState.matches.length > 0;
    if (prev) prev.disabled = !has;
    if (next) next.disabled = !has;
  }

  function updateChapterSearchStatusText() {
    var st = document.getElementById("lh-ch-search-status");
    if (!st) return;
    var n = chapterSearchState.matches.length;
    var q = chapterSearchState.query;
    if (!q) {
      st.textContent = "Search all segments in this chapter (loads chapter text once).";
      return;
    }
    if (n === 0) {
      st.textContent = "No matches in this chapter.";
      return;
    }
    st.textContent = "Match " + (chapterSearchState.curIdx + 1) + " of " + n + " in chapter";
  }

  function runChapterSearchFromInput() {
    var inp = document.getElementById("lh-ch-search-input");
    var q = inp && inp.value ? String(inp.value).trim() : "";
    var Lcur = currentLesson();
    var chFromLesson = techSgChapterFromLessonId(Lcur && Lcur.id);
    if (chFromLesson) chapterSearchState.chapter = chFromLesson;
    chapterSearchState.query = q;
    chapterSearchState.runId++;
    var myRun = chapterSearchState.runId;
    var ch = chapterSearchState.chapter;
    if (!q) {
      chapterSearchState.matches = [];
      chapterSearchState.curIdx = 0;
      try {
        window.getSelection().removeAllRanges();
      } catch (_) {}
      updateChapterSearchControlsDisabled();
      updateChapterSearchStatusText();
      return;
    }
    var loadP =
      typeof window.loadLearnHubTechplusChapter === "function" ? window.loadLearnHubTechplusChapter(ch) : Promise.resolve();
    loadP
      .then(function () {
        if (myRun !== chapterSearchState.runId) return;
        var matches = buildChapterMatchList(ch, q);
        chapterSearchState.matches = matches;
        if (matches.length) {
          chapterSearchState.curIdx = 0;
          var m0 = matches[0];
          if (lessonIndex !== m0.lessonIndex) {
            goLesson(m0.lessonIndex);
            waitForReadingThen(function (r) {
              if (myRun !== chapterSearchState.runId) return;
              focusOccurrenceInReading(r, q, m0.occInLesson);
              updateChapterSearchControlsDisabled();
              updateChapterSearchStatusText();
              if (el.announcer) el.announcer.textContent = "Jumped to first match in chapter.";
            });
          } else {
            requestAnimationFrame(function () {
              if (myRun !== chapterSearchState.runId) return;
              var r = el.teach && el.teach.querySelector(".lh-tech-reading");
              if (r) focusOccurrenceInReading(r, q, m0.occInLesson);
              updateChapterSearchControlsDisabled();
              updateChapterSearchStatusText();
            });
          }
        } else {
          chapterSearchState.curIdx = -1;
          updateChapterSearchControlsDisabled();
          updateChapterSearchStatusText();
        }
      })
      .catch(function () {
        if (myRun !== chapterSearchState.runId) return;
        chapterSearchState.matches = [];
        chapterSearchState.curIdx = -1;
        updateChapterSearchControlsDisabled();
        updateChapterSearchStatusText();
      });
  }

  function refreshChapterSearchAfterLessonRender() {
    var q = chapterSearchState.query;
    var ch = chapterSearchState.chapter;
    if (!q || !ch) return;
    var loadP =
      typeof window.loadLearnHubTechplusChapter === "function" ? window.loadLearnHubTechplusChapter(ch) : Promise.resolve();
    loadP.then(function () {
      chapterSearchState.matches = buildChapterMatchList(ch, q);
      if (chapterSearchState.curIdx >= chapterSearchState.matches.length) {
        chapterSearchState.curIdx = Math.max(0, chapterSearchState.matches.length - 1);
      }
      updateChapterSearchControlsDisabled();
      updateChapterSearchStatusText();
      requestAnimationFrame(function () {
        var m = chapterSearchState.matches[chapterSearchState.curIdx];
        var r = el.teach && el.teach.querySelector(".lh-tech-reading");
        if (m && r && m.lessonIndex === lessonIndex && chapterSearchState.query) {
          focusOccurrenceInReading(r, chapterSearchState.query, m.occInLesson);
        }
      });
    });
  }

  function chapterSearchNavigate(delta) {
    if (!chapterSearchState.matches.length || !chapterSearchState.query) return;
    var n = chapterSearchState.matches.length;
    chapterSearchState.curIdx = (chapterSearchState.curIdx + delta + n) % n;
    var m = chapterSearchState.matches[chapterSearchState.curIdx];
    var q = chapterSearchState.query;
    if (lessonIndex !== m.lessonIndex) {
      goLesson(m.lessonIndex);
      waitForReadingThen(function (r) {
        focusOccurrenceInReading(r, q, m.occInLesson);
        updateChapterSearchStatusText();
        if (el.announcer) el.announcer.textContent = "Match " + (chapterSearchState.curIdx + 1) + " of " + n + " in chapter.";
      });
    } else {
      var r = el.teach && el.teach.querySelector(".lh-tech-reading");
      if (r) focusOccurrenceInReading(r, q, m.occInLesson);
      updateChapterSearchStatusText();
      if (el.announcer) el.announcer.textContent = "Match " + (chapterSearchState.curIdx + 1) + " of " + n + " in chapter.";
    }
  }

  function bindChapterSearchControls() {
    var inp = document.getElementById("lh-ch-search-input");
    var prev = document.getElementById("lh-ch-search-prev");
    var next = document.getElementById("lh-ch-search-next");
    if (!inp) return;
    var Ls = currentLesson();
    var ch = techSgChapterFromLessonId(Ls && Ls.id);
    if (chapterSearchState.chapter && chapterSearchState.chapter !== ch) {
      chapterSearchState.query = "";
      chapterSearchState.matches = [];
      chapterSearchState.curIdx = 0;
    }
    chapterSearchState.chapter = ch;
    inp.value = chapterSearchState.query;

    function onInput() {
      clearTimeout(chapterSearchState.searchTimer);
      chapterSearchState.searchTimer = setTimeout(function () {
        runChapterSearchFromInput();
      }, 220);
    }

    inp.removeEventListener("input", inp.__lhChSearchInput);
    inp.removeEventListener("keydown", inp.__lhChSearchKeydown);
    if (prev && prev.__lhChSearchClick) prev.removeEventListener("click", prev.__lhChSearchClick);
    if (next && next.__lhChSearchClick) next.removeEventListener("click", next.__lhChSearchClick);

    inp.__lhChSearchInput = onInput;
    inp.__lhChSearchKeydown = function (ev) {
      if (ev.key === "Enter") {
        ev.preventDefault();
        clearTimeout(chapterSearchState.searchTimer);
        runChapterSearchFromInput();
      }
    };
    inp.addEventListener("input", onInput);
    inp.addEventListener("keydown", inp.__lhChSearchKeydown);

    if (prev) {
      prev.__lhChSearchClick = function () {
        chapterSearchNavigate(-1);
      };
      prev.addEventListener("click", prev.__lhChSearchClick);
    }
    if (next) {
      next.__lhChSearchClick = function () {
        chapterSearchNavigate(1);
      };
      next.addEventListener("click", next.__lhChSearchClick);
    }

    updateChapterSearchControlsDisabled();
    updateChapterSearchStatusText();
    if (chapterSearchState.query) refreshChapterSearchAfterLessonRender();
  }

  function updateLessonPlaceLine() {
    var c = courseById[activeCourseId];
    var list = lessons();
    var Ls = currentLesson();
    if (el.lessonPlace && c && list.length && Ls) {
      var t = Ls.title ? decodeLessonTitle(String(Ls.title)) : "";
      if (t.length > 52) t = t.slice(0, 49) + "…";
      el.lessonPlace.textContent = c.name + " · " + (lessonIndex + 1) + "/" + list.length + (t ? " — " + t : "");
    }
  }

  /** Study-guide readings from Markdown: tech-sg-01-01 … (was full chapters tech-sg-01 …). */
  function isFullChapterTechLesson(lessonId) {
    return typeof lessonId === "string" && /^tech-sg-\d{2}(?:-\d{2})?$/.test(lessonId);
  }

  /**
   * Insert “On this page” links for long chapter HTML (h1–h3 inside the reading pane).
   */
  function buildChapterToc(readingRoot, lessonId) {
    if (!readingRoot || !lessonId) return;
    const old = readingRoot.querySelector(".lh-chapter-toc");
    if (old) old.remove();
    const headings = readingRoot.querySelectorAll("h1, h2, h3");
    if (headings.length < 2) return;
    const nav = document.createElement("nav");
    nav.className = "lh-chapter-toc";
    nav.setAttribute("aria-label", "On this page");
    const cap = document.createElement("strong");
    cap.textContent = "On this page";
    nav.appendChild(cap);
    const ul = document.createElement("ul");
    let n = 0;
    const max = 48;
    headings.forEach(function (h) {
      if (n >= max) return;
      const text = (h.textContent || "").replace(/\s+/g, " ").trim();
      if (text.length < 2) return;
      if (!h.id) h.id = "lh-ch-" + lessonId + "-" + n;
      n++;
      const li = document.createElement("li");
      li.className = h.tagName === "H3" ? "lh-toc-h3" : h.tagName === "H2" ? "lh-toc-h2" : "lh-toc-h1";
      const a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = text.length > 110 ? text.slice(0, 107) + "…" : text;
      li.appendChild(a);
      ul.appendChild(li);
    });
    if (!ul.childElementCount) return;
    nav.appendChild(ul);
    readingRoot.insertBefore(nav, readingRoot.firstChild);
  }

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  function loadProgress() {
    if (!currentUsername) return;
    try {
      const raw = localStorage.getItem(lhProgressStorageKey());
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          progress = parsed;
        }
      }
    } catch (_) {}
    if (!progress || typeof progress !== "object" || Array.isArray(progress)) {
      progress = { activeCourseId: COURSES[0].id, courses: {} };
    }
    if (typeof progress.xp === "number") delete progress.xp;
    if (!progress.courses || typeof progress.courses !== "object" || Array.isArray(progress.courses)) {
      progress.courses = {};
    }
    Object.keys(progress.courses).forEach(function (cid) {
      var row = progress.courses[cid];
      if (!row || typeof row !== "object" || Array.isArray(row)) {
        delete progress.courses[cid];
        return;
      }
      if (!row.done || typeof row.done !== "object" || Array.isArray(row.done)) row.done = {};
      if (!row.learnVisited || typeof row.learnVisited !== "object" || Array.isArray(row.learnVisited)) row.learnVisited = {};
      if (!row.learnOutcome || typeof row.learnOutcome !== "object" || Array.isArray(row.learnOutcome)) row.learnOutcome = {};
      if (typeof row.idx !== "number" || !Number.isFinite(row.idx) || row.idx < 0) row.idx = 0;
    });
    if (progress.activeCourseId && courseById[progress.activeCourseId]) activeCourseId = progress.activeCourseId;
    else activeCourseId = COURSES[0].id;
    progress.activeCourseId = activeCourseId;
    const cp = courseProgress(activeCourseId);
    let saved = Number(cp.idx);
    if (!Number.isFinite(saved) || saved < 0) saved = 0;
    lessonIndex = Math.floor(saved);
  }

  function saveProgress() {
    if (!currentUsername) return;
    progress.activeCourseId = activeCourseId;
    courseProgress(activeCourseId).idx = lessonIndex;
    try {
      localStorage.setItem(lhProgressStorageKey(), JSON.stringify(progress));
    } catch (e) {
      console.warn("Learn Hub: could not save progress (storage blocked or full).", e);
    }
  }

  function awardIfNew(lessonId) {
    const cp = courseProgress(activeCourseId);
    if (cp.done[lessonId]) return;
    cp.done[lessonId] = true;
    cp.xp += XP_PER;
    saveProgress();
    toast("+" + XP_PER + " XP · " + (courseById[activeCourseId] && courseById[activeCourseId].name ? courseById[activeCourseId].name : "this track"));
  }

  function lessonLocked(i) {
    /* Tracks with ws "tech" (Tech+, Security, Labs, …): open navigation — any lesson any time. */
    const cNav = courseById[activeCourseId];
    if (cNav && cNav.ws === "tech") return false;
    if (i === 0) return false;
    const Ls = lessons()[i - 1];
    if (!Ls || !Ls.id) return false;
    return !courseProgress(activeCourseId).done[Ls.id];
  }

  function tagForKind(k) {
    if (k === "learn") return "learn";
    if (k === "quiz") return "quiz";
    if (k === "challenge") return "mini-lab";
    return "practice";
  }

  function buildLessonNavHtml() {
    const list = lessons();
    const units = [];
    let u = null;
    for (let i = 0; i < list.length; i++) {
      const unitName = list[i].unit || "Lessons";
      if (!u || u.name !== unitName) {
        u = { name: unitName, start: i };
        units.push(u);
      }
    }
    let html = "";
    for (const block of units) {
      const start = block.start;
      let end = start;
      while (end + 1 < list.length && (list[end + 1].unit || "Lessons") === block.name) end++;
      html += `<div class="unit"><div class="unit-title">${escapeHtml(block.name)}</div>`;
      for (let i = start; i <= end; i++) {
        const Ls = list[i];
        const locked = lessonLocked(i);
        const done = !!courseProgress(activeCourseId).done[Ls.id];
        const tag = tagForKind(Ls.kind);
        html += `<button type="button" class="lesson-btn ${i === lessonIndex ? "active" : ""} ${done ? "done" : ""} ${locked ? "locked" : ""}" data-i="${i}" ${locked ? "disabled" : ""}>
          <span class="idx">${i + 1}</span><span class="dot"></span>
          <span class="lbl">${lessonTitleAsUiHtml(Ls.title)}</span>
          <span class="tag ${Ls.kind === "challenge" ? "challenge" : ""} ${Ls.kind === "quiz" ? "quiz" : ""}">${tag}</span>
        </button>`;
      }
      html += "</div>";
    }
    return html;
  }

  function attachNavHandlers(root) {
    root.querySelectorAll(".lesson-btn:not(.locked)").forEach((b) => {
      b.addEventListener("click", function () {
        goLesson(+b.getAttribute("data-i"));
        if (el.sidebar) el.sidebar.classList.remove("open");
      });
    });
  }

  function applyLessonFilter(query) {
    if (!el.lessonNav) return;
    var q = query || "";
    var list = lessons();
    el.lessonNav.querySelectorAll(".lesson-btn").forEach(function (btn) {
      var i = parseInt(btn.getAttribute("data-i"), 10);
      var item = list[i];
      var match = !String(q).trim() || lessonMatchesFilterQuery(q, item, activeCourseId);
      btn.style.display = match ? "" : "none";
    });
    el.lessonNav.querySelectorAll(".unit").forEach(function (unitEl) {
      var any = false;
      unitEl.querySelectorAll(".lesson-btn").forEach(function (btn) {
        if (btn.style.display !== "none") any = true;
      });
      unitEl.style.display = any ? "" : "none";
    });
  }

  function renderNav() {
    const html = buildLessonNavHtml();
    if (el.lessonNav) {
      el.lessonNav.innerHTML = html;
      attachNavHandlers(el.lessonNav);
      applyLessonFilter(el.lessonFilter ? el.lessonFilter.value : "");
    }
    if (el.lessonPicker) {
      const list = lessons();
      el.lessonPicker.innerHTML = "";
      for (let i = 0; i < list.length; i++) {
        const opt = document.createElement("option");
        opt.value = String(i);
        opt.textContent = i + 1 + ". " + decodeLessonTitle(String(list[i].title || "Lesson"));
        el.lessonPicker.appendChild(opt);
      }
      if (list.length === 0) {
        const opt0 = document.createElement("option");
        opt0.value = "0";
        opt0.textContent = "No lessons in this track";
        el.lessonPicker.appendChild(opt0);
      }
      const cap = Math.max(0, list.length - 1);
      el.lessonPicker.value = String(Math.min(Math.max(0, lessonIndex), cap));
      el.lessonPicker.onchange = function () {
        goLesson(+el.lessonPicker.value);
      };
    }
    if (el.sidebarTrackName) el.sidebarTrackName.textContent = courseById[activeCourseId] ? courseById[activeCourseId].name : "—";
    if (el.lessonNav) {
      requestAnimationFrame(function () {
        const b = el.lessonNav.querySelector(".lesson-btn.active");
        if (b) b.scrollIntoView({ block: "nearest", behavior: prefersReducedNavMotion() ? "auto" : "smooth" });
      });
    }
    syncMenuToggleExpanded();
  }

  function renderPills() {
    if (!el.pills) return;
    el.pills.innerHTML = COURSES.map(
      (c) =>
        `<button type="button" class="course-pill${c.id === activeCourseId ? " active" : ""}" data-c="${escapeHtml(c.id)}" data-course="${escapeHtml(c.id)}">${escapeHtml(c.name)}</button>`
    ).join("");
    el.pills.querySelectorAll(".course-pill").forEach((p) => {
      p.addEventListener("click", () => switchCourse(p.getAttribute("data-course")));
    });
  }

  /** Scroll reading/main panes to top when changing lessons — do not reset sidebar lesson list scroll (avoids jump-to-top then scroll-down). */
  function scrollLessonToTop() {
    requestAnimationFrame(function () {
      if (el.teach) el.teach.scrollTop = 0;
      var appRoot = document.getElementById("app-root");
      if (appRoot) appRoot.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  }

  function updateChrome() {
    const list = lessons();
    const c = courseById[activeCourseId];
    const cp = courseProgress(activeCourseId);
    const doneCount = list.filter((l) => cp.done[l.id]).length;
    if (el.progressFill) el.progressFill.style.width = list.length ? Math.round((doneCount / list.length) * 100) + "%" : "0%";
    const maxThis = maxXpForCourse(activeCourseId);
    const xpThis = typeof cp.xp === "number" ? cp.xp : courseXpFromDone(activeCourseId);
    const xpPct = Math.min(100, Math.round((xpThis / Math.max(maxThis, 1)) * 100));
    if (el.xpFill) el.xpFill.style.width = xpPct + "%";
    if (el.xpBar) el.xpBar.setAttribute("aria-valuenow", String(xpPct));
    if (el.xpLabel) {
      const name = c ? c.name : "—";
      el.xpLabel.textContent =
        name + " · " + xpThis + " / " + maxThis + " XP · " + doneCount + "/" + list.length + " lessons in this track";
    }
  }

  function workspaceForCourse(c) {
    if (c.ws === "web") return "web";
    if (c.ws === "py") return "py";
    if (c.ws === "sql") return "sql";
    return "tech";
  }

  function showWorkspaces(which) {
    if (el.wsWeb) el.wsWeb.classList.toggle("hidden", which !== "web");
    if (el.wsPy) el.wsPy.classList.toggle("hidden", which !== "py");
    if (el.wsSql) el.wsSql.classList.toggle("hidden", which !== "sql");
    if (el.wsTech) el.wsTech.classList.toggle("hidden", which !== "tech");
  }

  function syncTeachCollapsedUi() {
    if (!el.btnToggleTeach) return;
    const on = document.body.classList.contains("teach-collapsed");
    el.btnToggleTeach.setAttribute("aria-pressed", on ? "true" : "false");
    el.btnToggleTeach.textContent = on ? "Show This step" : "Hide This step";
  }

  function applyTeachCollapsedPreference(isTechLearn) {
    if (isTechLearn) {
      document.body.classList.remove("teach-collapsed");
      if (el.btnToggleTeach) el.btnToggleTeach.style.display = "none";
      return;
    }
    if (el.btnToggleTeach) el.btnToggleTeach.style.display = "";
    try {
      document.body.classList.toggle("teach-collapsed", localStorage.getItem(TEACH_COLLAPSED_KEY) === "1");
    } catch (_) {}
    syncTeachCollapsedUi();
  }

  function buildSrcdoc(html, css, js) {
    const safeJs = String(js || "").replace(/<\/script>/gi, "<\\/script>");
    return (
      "<!DOCTYPE html><html><head><meta charset='utf-8'><style>" +
      String(css || "") +
      "</style></head><body>" +
      String(html || "") +
      "<script>(function(){try{" +
      safeJs +
      "}catch(e){console.error(e);}})();<\\/script></body></html>"
    );
  }

  function updateWebPreviewHint() {
    if (!el.webPreviewHint) return;
    const h = el.webHtml && el.webHtml.value.trim();
    const c = el.webCss && el.webCss.value.trim();
    const j = el.webJs && el.webJs.value.trim();
    el.webPreviewHint.hidden = !!(h || c || j);
  }

  function refreshWebPreview() {
    if (!el.webIframe || !el.webHtml || !el.webCss || !el.webJs) return;
    el.webIframe.srcdoc = buildSrcdoc(el.webHtml.value, el.webCss.value, el.webJs.value);
    if (el.webStatus) el.webStatus.textContent = "Preview updated";
    updateWebPreviewHint();
  }

  function normalizeCell(v) {
    if (v === null || v === undefined) return "NULL";
    if (typeof v === "number" && Number.isFinite(v)) return String(v);
    return String(v);
  }

  function resultMatch(actual, expected, ignoreRowOrder) {
    if (!actual || actual.length === 0) return expected.length === 0;
    const a = actual[0];
    const exp = expected[0];
    if (!exp) return true;
    if (JSON.stringify(a.columns) !== JSON.stringify(exp.columns)) return false;
    const va = (a.values || []).map((r) => r.map(normalizeCell));
    const ve = (exp.values || []).map((r) => r.map(normalizeCell));
    if (va.length !== ve.length) return false;
    if (ignoreRowOrder) {
      const sa = va.map((r) => JSON.stringify(r)).sort();
      const se = ve.map((r) => JSON.stringify(r)).sort();
      return JSON.stringify(sa) === JSON.stringify(se);
    }
    return JSON.stringify(va) === JSON.stringify(ve);
  }

  function execAll(db, sql) {
    return db.exec(sql);
  }

  function renderTable(block) {
    if (!block || !block.columns || block.columns.length === 0) return "";
    let h = "<table class='result'><thead><tr>";
    for (const c of block.columns) h += "<th>" + escapeHtml(c) + "</th>";
    h += "</tr></thead><tbody>";
    for (const row of block.values || []) {
      h += "<tr>";
      for (const cell of row) h += "<td>" + escapeHtml(normalizeCell(cell)) + "</td>";
      h += "</tr>";
    }
    return h + "</tbody></table>";
  }

  function freshLessonDb(seedSql) {
    if (lessonDb) try { lessonDb.close(); } catch (_) {}
    lessonDb = null;
    if (!SQL) return;
    lessonDb = new SQL.Database();
    if (seedSql && seedSql.trim()) lessonDb.exec(seedSql);
  }

  function clearSqlOut() {
    el.output.innerHTML = "";
  }

  function appendSql(html) {
    el.output.insertAdjacentHTML("beforeend", html);
  }

  function runSqlOnLessonDb(sql, append) {
    if (!append) clearSqlOut();
    if (!SQL || !lessonDb) {
      appendSql("<div class='msg info'>Loading SQLite engine…</div>");
      ensureSqlJs()
        .then(function () {
          var Ls = currentLesson();
          freshLessonDb((Ls && Ls.seed) || "");
          clearSqlOut();
          runSqlOnLessonDb(sql, false);
        })
        .catch(function (e) {
          clearSqlOut();
          appendSql("<div class='msg err'>" + escapeHtml(e.message || String(e)) + "</div>");
          el.sqlStatus.textContent = "Error";
        });
      return;
    }
    const trimmed = sql.trim();
    if (!trimmed) {
      appendSql("<div class='msg info'>Nothing to run.</div>");
      return;
    }
    try {
      const results = lessonDb.exec(trimmed);
      if (results.length === 0) appendSql("<div class='msg ok'>OK (no result set).</div>");
      else for (const b of results) appendSql(renderTable(b));
      el.sqlStatus.textContent = "Ran · " + new Date().toLocaleTimeString();
    } catch (e) {
      appendSql("<div class='msg err'>" + escapeHtml(e.message || String(e)) + "</div>");
      el.sqlStatus.textContent = "Error";
    }
  }

  function buildDbFromUserScript(seed, userSql) {
    const d = new SQL.Database();
    try { d.exec("PRAGMA foreign_keys = ON;"); } catch (_) {}
    if (seed && seed.trim()) d.exec(seed);
    d.exec(userSql);
    return d;
  }

  function checkSqlSelect(seed, userSql, expectSql, ignoreOrder, failMsg) {
    const d = new SQL.Database();
    if (seed && seed.trim()) d.exec(seed);
    let got;
    try {
      got = d.exec(userSql);
    } catch (e) {
      d.close();
      return { ok: false, msg: e.message || String(e) };
    }
    let exp;
    try {
      exp = d.exec(expectSql);
    } catch (e) {
      d.close();
      return { ok: false, msg: "Verification query failed internally." };
    }
    d.close();
    if (!got.length) return { ok: false, msg: "Your query produced no result set." };
    if (!resultMatch(got, exp, !!ignoreOrder)) return { ok: false, msg: failMsg || "Columns, rows, or order do not match the assignment." };
    return { ok: true };
  }

  function checkSqlSchema(db, spec) {
    const tables = spec.tables || {};
    for (const tname of Object.keys(tables)) {
      const t = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='" + tname.replace(/'/g, "''") + "'");
      if (!t.length || !t[0].values.length) return { ok: false, msg: "Missing table: " + tname };
      const info = db.exec("PRAGMA table_info(" + tname + ")");
      const rows = info[0].values || [];
      const byName = Object.fromEntries(
        rows.map((r) => [r[1], { type: String(r[2]).toUpperCase(), notnull: r[3], pk: r[5], dflt: r[4] }])
      );
      const want = tables[tname].columns || {};
      for (const col of Object.keys(want)) {
        const w = want[col];
        const g = byName[col];
        if (!g) return { ok: false, msg: "Column missing: " + tname + "." + col };
        if (w.pk != null && g.pk !== w.pk) return { ok: false, msg: "PK mismatch: " + col };
        if (w.notNull != null && g.notnull !== w.notNull) return { ok: false, msg: "NOT NULL mismatch: " + col };
        if (w.typeIncludes && !g.type.includes(w.typeIncludes.toUpperCase())) return { ok: false, msg: "Type mismatch: " + col };
      }
    }
    return { ok: true };
  }

  async function ensurePyodide() {
    await loadPyodideScript();
    if (typeof loadPyodide !== "function") throw new Error("Pyodide is not available.");
    if (pyodideInstance) return pyodideInstance;
    if (!pyodidePromise) {
      el.pyLoadNote.textContent = "Loading Python runtime (first time may take a minute)…";
      pyodidePromise = loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
      })
        .then((p) => {
          pyodideInstance = p;
          el.pyLoadNote.textContent = "";
          return p;
        })
        .catch((err) => {
          pyodidePromise = null;
          pyodideInstance = null;
          el.pyLoadNote.textContent = "";
          throw err;
        });
    }
    return pyodidePromise;
  }

  function pyStreamSink(chunks) {
    const dec = new TextDecoder("utf-8");
    return {
      write: function (buf) {
        chunks.push(dec.decode(buf));
        return buf.length;
      },
    };
  }

  async function runPythonCode(code) {
    const py = await ensurePyodide();
    const chunks = [];
    const sink = pyStreamSink(chunks);
    py.setStdout(sink);
    py.setStderr(sink);
    try {
      await py.runPythonAsync(code);
      return { out: chunks.join(""), err: null };
    } catch (e) {
      return { out: chunks.join(""), err: e.message || String(e) };
    }
  }

  async function captureUserPython(userCode) {
    const py = await ensurePyodide();
    const wrapped =
      "import sys, io, json\n" +
      "_buf = io.StringIO()\n" +
      "_old_out, _old_err = sys.stdout, sys.stderr\n" +
      "sys.stdout = sys.stderr = _buf\n" +
      "_user_err = None\n" +
      "try:\n" +
      "    exec(" +
      JSON.stringify(userCode) +
      ", {})\n" +
      "except Exception as _e:\n" +
      "    _user_err = repr(_e)\n" +
      "finally:\n" +
      "    sys.stdout, sys.stderr = _old_out, _old_err\n" +
      "OUT = _buf.getvalue()\n" +
      "_lh_cap = json.dumps({\"out\": OUT, \"userErr\": _user_err})\n" +
      "_lh_cap\n";
    let capRaw;
    try {
      capRaw = await py.runPythonAsync(wrapped);
    } catch (e) {
      return { out: "", userErr: e.message || String(e) };
    }
    const capStr = typeof capRaw === "string" ? capRaw : capRaw != null ? String(capRaw) : "";
    let cap;
    try {
      cap = JSON.parse(capStr);
    } catch (_) {
      return { out: "", userErr: "Could not read captured Python output." };
    }
    const out = cap && cap.out != null ? String(cap.out) : "";
    const userErr = cap && cap.userErr != null && cap.userErr !== "" ? String(cap.userErr) : null;
    return { out, userErr };
  }

  function normalizeOut(s, mode) {
    let t = String(s);
    if (mode === "trim") t = t.trim();
    if (mode === "lines") t = t.trim().replace(/\r\n/g, "\n");
    return t;
  }

  async function runCheck(lesson) {
    const chk = lesson.check;
    if (!chk) return { ok: true };

    if (chk.type === "web") {
      refreshWebPreview();
      if (chk.cssIncludes && chk.cssIncludes.length) {
        const css = el.webCss.value;
        for (const frag of chk.cssIncludes) {
          if (!css.includes(frag)) return { ok: false, msg: "CSS must include fragment: " + frag };
        }
      }
      if (chk.jsIncludes && chk.jsIncludes.length) {
        const js = el.webJs.value;
        for (const frag of chk.jsIncludes) {
          if (!js.includes(frag)) return { ok: false, msg: "JavaScript must include fragment: " + frag };
        }
      }
      const doc = el.webIframe.contentDocument;
      if (!doc) return { ok: false, msg: "Preview not ready." };
      if (chk.dom) {
        for (const r of chk.dom) {
          const nodes = doc.querySelectorAll(r.selector);
          const min = r.minCount != null ? r.minCount : 1;
          if (nodes.length < min) return { ok: false, msg: "Missing element(s): " + r.selector };
          if (r.textIncludes) {
            let ok = false;
            nodes.forEach((n) => {
              if ((n.textContent || "").includes(r.textIncludes)) ok = true;
            });
            if (!ok) return { ok: false, msg: "Text not found inside " + r.selector + ": " + r.textIncludes };
          }
        }
      }
      if (chk.computed) {
        for (const r of chk.computed) {
          const n = doc.querySelector(r.selector);
          if (!n) return { ok: false, msg: "Missing for style check: " + r.selector };
          const cs = doc.defaultView.getComputedStyle(n);
          const val = cs.getPropertyValue(r.property);
          if (r.includes && !String(val).includes(r.includes)) return { ok: false, msg: "Expected " + r.property + " to include " + r.includes + " (got " + val + ")." };
        }
      }
      if (chk.click) {
        for (const step of chk.click) {
          const btn = doc.querySelector(step.selector);
          if (!btn) return { ok: false, msg: "Missing clickable: " + step.selector };
          btn.click();
          const then = step.then || {};
          const target = doc.querySelector(then.selector);
          if (!target) return { ok: false, msg: "After click, missing: " + then.selector };
          if (then.textIncludes && !(target.textContent || "").includes(then.textIncludes))
            return { ok: false, msg: "After click, expected text in " + then.selector };
          if (then.textEquals != null && (target.textContent || "").trim() !== then.textEquals)
            return { ok: false, msg: "After click, wrong text in " + then.selector };
        }
      }
      return { ok: true };
    }

    if (chk.type === "sqlSelect") {
      return checkSqlSelect(chk.seed || "", el.sqlInput.value.trim(), chk.expectSql, !!chk.ignoreOrder, chk.failMsg);
    }

    if (chk.type === "sqlScalar") {
      let db;
      try {
        db = buildDbFromUserScript(chk.seed || "", el.sqlInput.value.trim());
      } catch (e) {
        return { ok: false, msg: e.message || String(e) };
      }
      let got;
      try {
        const rows = db.exec(chk.sql);
        if (!rows.length || !rows[0].values || !rows[0].values.length) {
          db.close();
          return { ok: false, msg: "Scalar query returned nothing." };
        }
        got = rows[0].values[0][0];
      } catch (e) {
        db.close();
        return { ok: false, msg: e.message || String(e) };
      }
      db.close();
      const norm = (v) => (v == null ? null : typeof v === "number" ? v : normalizeCell(v));
      const g = norm(got);
      const e = chk.equals;
      if (g !== e && String(g) !== String(e)) return { ok: false, msg: chk.failMsg || "Unexpected query result." };
      return { ok: true };
    }

    if (chk.type === "sqlSchema") {
      let testDb;
      try {
        testDb = buildDbFromUserScript(lesson.seed || "", el.sqlInput.value.trim());
      } catch (e) {
        return { ok: false, msg: e.message || String(e) };
      }
      const res = checkSqlSchema(testDb, chk);
      try { testDb.close(); } catch (_) {}
      return res;
    }

    if (chk.type === "sqlAll") {
      let db;
      try {
        db = buildDbFromUserScript(lesson.seed || "", el.sqlInput.value.trim());
      } catch (e) {
        return { ok: false, msg: e.message || String(e) };
      }
      for (const part of chk.parts || []) {
        if (part.view) {
          const vn = String(part.view).replace(/'/g, "''");
          const v = db.exec("SELECT name FROM sqlite_master WHERE type='view' AND name='" + vn + "'");
          if (!v.length || !v[0].values.length) {
            db.close();
            return { ok: false, msg: "Missing view: " + part.view };
          }
        }
        if (part.foreignKeyOn) {
          const t = String(part.foreignKeyOn).replace(/[^a-zA-Z0-9_]/g, "") || "x";
          const fk = db.exec("PRAGMA foreign_key_list(" + t + ")");
          if (!fk.length || !fk[0].values.length) {
            db.close();
            return { ok: false, msg: "Expected foreign keys on " + part.foreignKeyOn + "." };
          }
        }
        if (part.schema) {
          const r = checkSqlSchema(db, part.schema);
          if (!r.ok) {
            db.close();
            return r;
          }
        }
        if (part.scalar) {
          let got;
          try {
            const rows = db.exec(part.sql);
            if (!rows.length || !rows[0].values || !rows[0].values.length) {
              db.close();
              return { ok: false, msg: part.failMsg || "Scalar query returned nothing." };
            }
            got = rows[0].values[0][0];
          } catch (e) {
            db.close();
            return { ok: false, msg: e.message || String(e) };
          }
          if (part.equals != null && Number(got) !== Number(part.equals) && String(got) !== String(part.equals)) {
            db.close();
            return { ok: false, msg: part.failMsg || "Unexpected scalar result." };
          }
          if (part.min != null && Number(got) < Number(part.min)) {
            db.close();
            return { ok: false, msg: part.failMsg || "Value too small." };
          }
        }
        if (part.compareQueries) {
          let truth, got;
          try {
            truth = db.exec(part.truthSql);
            got = db.exec(part.userSql);
          } catch (e) {
            db.close();
            return { ok: false, msg: e.message || String(e) };
          }
          if (!resultMatch(got, truth, !!part.ignoreOrder)) {
            db.close();
            return { ok: false, msg: part.failMsg || "Query mismatch." };
          }
        }
      }
      try { db.close(); } catch (_) {}
      return { ok: true };
    }

    if (chk.type === "pyStdout") {
      const cap = await captureUserPython(el.pyInput.value);
      if (cap.userErr) return { ok: false, msg: cap.userErr };
      const got = normalizeOut(cap.out, chk.normalize || "trim");
      if (chk.equals != null) {
        const g = chk.normalize === "lines" ? got : got.trim();
        const e = String(chk.equals).trim();
        if (g !== e) return { ok: false, msg: "Output does not match. Got: " + JSON.stringify(g) };
      }
      if (chk.includes && !got.includes(chk.includes)) return { ok: false, msg: "Output missing: " + chk.includes };
      if (chk.regex) {
        const re = new RegExp(chk.regex, chk.flags || "");
        if (!re.test(got)) return { ok: false, msg: "Output does not match required pattern." };
      }
      return { ok: true };
    }

    return { ok: false, msg: "Unknown check type." };
  }

  function quizRadioGroupPrefix(lesson) {
    const raw = lesson && lesson.id != null ? String(lesson.id) : "quiz";
    return "lh_" + raw.replace(/[^a-zA-Z0-9_-]+/g, "_");
  }

  function renderTechQuiz(lesson) {
    if (!el.techQuiz) return;
    const qs = lesson.questions || [];
    if (!qs.length) {
      el.techQuiz.innerHTML = "<p class='msg info'>No questions for this step.</p>";
      return;
    }
    const gPrefix = quizRadioGroupPrefix(lesson);
    let h =
      "<p class=\"msg info\" style=\"font-size:0.78rem;margin:0 0 0.65rem;line-height:1.45\">Local curriculum only — answers are checked in your browser. On <strong>Learn</strong> steps, re-read the chapter or topic notes in the right column if you miss a question.</p>";
    qs.forEach((q, qi) => {
      h += `<div class="quiz-q" data-q="${qi}"><p>${escapeHtml(q.q)}</p>`;
      (q.choices || []).forEach((c, ci) => {
        const id = gPrefix + "_q" + qi + "c" + ci;
        h += `<label><input type="radio" name="${gPrefix}_quiz_${qi}" value="${ci}" id="${id}"/> ${escapeHtml(c)}</label>`;
      });
      h += "</div>";
    });
    el.techQuiz.innerHTML = h;
  }

  function gradeTechQuiz(lesson) {
    const qs = lesson.questions || [];
    const gPrefix = quizRadioGroupPrefix(lesson);
    let wrong = 0;
    if (!el.techQuiz) return { ok: false, msg: "Quiz panel is not available." };
    for (let qi = 0; qi < qs.length; qi++) {
      const sel = el.techQuiz.querySelector(`input[name="${gPrefix}_quiz_${qi}"]:checked`);
      if (!sel || +sel.value !== qs[qi].correct) wrong++;
    }
    const secHint =
      activeCourseId === "security"
        ? "review the matching <strong>level lessons</strong> in the sidebar, then try again."
        : "go back to the matching <strong>study guide lesson</strong> or <strong>Lesson reading</strong> step and study it again.";
    return {
      ok: wrong === 0,
      msg: wrong === 0 ? "All correct." : wrong + " answer(s) need work — " + secHint,
    };
  }

  function fccLessonStrip(Ls, c) {
    const unit = escapeHtml(Ls.unit || "Lessons");
    const kind = Ls.kind || "learn";
    const ws = c.ws || "";
    let hint = "";
    if (kind === "learn" && ws === "tech") {
      if (c.id === "security") {
        hint =
          "Open <strong>Notes</strong> for the workplace curriculum reading (from <code>docs/SECURITY_CONCEPTS_WORKPLACE_CURRICULUM.md</code>). After each level you will see <strong>Quiz</strong> steps in the sidebar — same layout as Tech+ check-ins: answer in the left column, then <strong>Check answers</strong>.";
      } else if (c.id === "labs") {
        hint =
          "These steps are a <strong>hands-on lab script</strong> for your <strong>Kali Linux VM</strong>. Nothing in the left column runs on the VM—open a terminal on Kali and follow <strong>Notes</strong> step by step. When you are done with this lab, press <strong>Continue</strong>.";
      } else if (isFullChapterTechLesson(Ls.id)) {
        hint =
          "This step is a <strong>study guide lesson</strong> (one section of the book) bundled inside Learn Hub. Use <strong>On this page</strong> when it appears to jump headings. When you are done reading, press <strong>Continue</strong>. If you already know this material, use <strong>Skip lesson</strong> in the footer—it marks the step complete and moves on (same progress as Continue).";
      } else {
        hint =
          "Your <strong>lesson reading</strong> is expanded below (topic notes, tables, and drills from the study guide). Read it completely before Continuing. Later steps use the <strong>Check-in</strong> quiz column.";
      }
    } else if (kind === "learn") {
      if (ws === "sql") {
        hint =
          "Open <strong>Reference</strong> when a term is new. Try <strong>Run</strong> on any sample queries shown there — this step is not graded. When the ideas make sense, press <strong>Continue</strong>.";
      } else if (ws === "py") {
        hint =
          "Expand <strong>Reference</strong> (right column) when a keyword confuses you. Try <strong>Run</strong> on examples from the notes. Press <strong>Continue</strong> when you are ready — nothing to grade here.";
      } else if (ws === "web") {
        hint =
          "Use the <strong>HTML / CSS / JavaScript</strong> tabs on the left and <strong>Run</strong> (Ctrl+Enter). The full explanation lives under <strong>Reference</strong> in this column — then <strong>Continue</strong>.";
      } else {
        hint = "Use <strong>Run</strong> in the left panel. No autograde here — open <strong>Reference</strong> if you need help. Then <strong>Continue</strong>.";
      }
    } else if (kind === "practice") {
      if (ws === "sql") {
        hint =
          "Use <strong>Reference</strong> for the task wording. Write SQL on the left, <strong>Run</strong> to see results, then <strong>Check</strong>. If data looks wrong, use <strong>Reset lesson DB</strong> and try again.";
      } else if (ws === "py") {
        hint =
          "Read the <strong>Task</strong> in <strong>Reference</strong>, write code on the left, <strong>Run</strong> to test, then <strong>Check</strong>.";
      } else if (ws === "web") {
        hint =
          "Follow the <strong>Reference</strong> task. Edit the tabs on the left, <strong>Run</strong> the preview, then <strong>Check</strong>. Use <strong>Reset starter</strong> if you need the original files back.";
      } else {
        hint = "Meet the requirements in <strong>Reference</strong> (task block), then press <strong>Check</strong>.";
      }
    } else if (kind === "challenge") {
      if (ws === "sql") {
        hint =
          "Solo lab: work in small steps (tables → inserts → views), <strong>Run</strong> after each step, then <strong>Check</strong> when you meet the spec.";
      } else if (ws === "py" || ws === "web") {
        hint =
          "Solo step: treat <strong>Reference</strong> as the spec. Work in small slices, <strong>Run</strong> often, then <strong>Check</strong>.";
      } else {
        hint = "Solo lab — <strong>Check</strong> is strict. Use Reference for the spec.";
      }
    } else if (kind === "quiz") {
      hint = "Answer from what you studied; everything runs locally in the browser.";
    } else {
      hint = "Pick the best answer for the scenario.";
    }
    const kindLabel =
      kind === "learn" ? "Learn" : kind === "practice" ? "Practice" : kind === "challenge" ? "Challenge" : kind === "quiz" ? "Quiz" : kind;
    const chapterStrip =
      kind === "learn" && ws === "tech" && isFullChapterTechLesson(Ls.id) ? " fcc-strip-studyguide" : "";
    return (
      '<section class="fcc-strip' +
      chapterStrip +
      '">' +
      '<div class="fcc-strip-top">' +
      '<span class="fcc-kind-pill">' +
      escapeHtml(kindLabel) +
      "</span>" +
      '<span class="fcc-unit-pill" title="Unit">' +
      unit +
      "</span></div>" +
      '<h2 class="fcc-title">' +
      lessonTitleAsUiHtml(Ls.title || "Lesson") +
      "</h2>" +
      '<p class="fcc-hint">' +
      hint +
      "</p>" +
      "</section>"
    );
  }

  function applyLessonUI() {
    const c = courseById[activeCourseId];
    const Ls = currentLesson();
    if (!c || !Ls) {
      if (el.title) el.title.textContent = "Lesson unavailable";
      if (el.teach) el.teach.innerHTML = '<p class="msg err">Missing lesson data for this track or index.</p>';
      const cc = courseById[activeCourseId];
      document.body.classList.toggle("lh-compact-teach", !!(cc && cc.ws !== "tech"));
      document.body.classList.remove("lh-learn-pending");
      return;
    }

    const needSg =
      /^tech-sg-\d{2}-\d{2}$/.test(Ls.id) &&
      typeof window.loadLearnHubTechplusChapter === "function" &&
      (!window.LEARN_HUB_TECHPLUS_MD || !window.LEARN_HUB_TECHPLUS_MD[Ls.id]);
    if (needSg) {
      const ch = techSgChapterFromLessonId(Ls.id) || 1;
      if (el.teach) {
        el.teach.innerHTML =
          '<div class="lesson-shell">' +
          '<header class="lesson-shell-head"><span class="lesson-shell-badge">Loading</span>' +
          '<span class="lesson-shell-sub">' +
          escapeHtml(c.name || "") +
          '</span></header><div class="lesson-shell-body">' +
          '<p class="msg info" role="status" aria-live="polite">Loading study guide (chapter ' +
          ch +
          ")…</p></div></div>";
      }
      document.body.setAttribute("data-lh-track", c.id || "");
      document.body.classList.toggle("lh-compact-teach", c.ws !== "tech");
      if (el.title) el.title.textContent = (Ls.title && decodeLessonTitle(Ls.title)) || "Loading…";
      if (el.lessonPlace) el.lessonPlace.textContent = (c.name || "") + " · loading chapter " + ch + "…";
      document.body.classList.toggle("learn-only", Ls.kind === "learn");
      const pc0 = document.getElementById("practice-column");
      if (pc0) pc0.classList.toggle("is-hidden", Ls.kind === "learn");
      const cg0 = document.getElementById("content-grid");
      if (cg0) cg0.classList.toggle("single-pane", Ls.kind === "learn");
      if (Ls.kind === "learn") markLearnLessonVisited(Ls.id);
      document.body.classList.toggle("lh-learn-pending", learnPendingFromProgress(Ls.kind === "learn", Ls));
      window
        .loadLearnHubTechplusChapter(ch)
        .then(function () {
          applyLessonUI();
        })
        .catch(function (e) {
          const msg = e && e.message ? e.message : String(e);
          if (el.teach)
            el.teach.innerHTML =
              '<div class="lesson-shell"><div class="lesson-shell-body"><p class="msg err">Could not load this chapter’s study guide.</p><p class="msg info">' +
              escapeHtml(msg) +
              "</p></div></div>";
        });
      return;
    }

    document.body.setAttribute("data-lh-track", c.id || "");
    document.body.classList.toggle("lh-compact-teach", c.ws !== "tech");
    if (el.title) el.title.textContent = decodeLessonTitle(Ls.title || "");
    const isTech = c.ws === "tech";
    const learn = Ls.kind === "learn";
    const isTechLearn = isTech && learn;
    const isFullChapterTechLearn = isTechLearn && isFullChapterTechLesson(Ls.id);
    if (learn) markLearnLessonVisited(Ls.id);
    document.body.classList.toggle("lh-learn-pending", learnPendingFromProgress(learn, Ls));
    const read = getResolvedReadHtml(Ls);
    const refBody = isTech ? '<div class="tech-prose lh-ref-body lh-notes-prose">' + read + "</div>" : read;
    let refBlock = "";
    if (read && String(read).trim()) {
      if (isFullChapterTechLearn) {
        refBlock =
          '<div class="lh-full-chapter">' +
          '<div class="lh-chapter-search-wrap" role="search" aria-label="Search in this book chapter">' +
          '<label class="lh-ch-search-label" for="lh-ch-search-input">Search in chapter</label>' +
          '<div class="lh-ch-search-row">' +
          '<input type="search" id="lh-ch-search-input" class="lh-ch-search-input" placeholder="Word or phrase…" autocomplete="off" spellcheck="false" />' +
          '<button type="button" class="tool ghost lh-ch-search-btn" id="lh-ch-search-prev" disabled aria-label="Previous match in chapter">Prev</button>' +
          '<button type="button" class="tool ghost lh-ch-search-btn" id="lh-ch-search-next" disabled aria-label="Next match in chapter">Next</button>' +
          "</div>" +
          '<p class="lh-ch-search-status" id="lh-ch-search-status" aria-live="polite"></p>' +
          "</div>" +
          '<article class="lh-tech-reading lh-full-chapter-body lh-notes-surface" aria-label="Study guide reading">' +
          refBody +
          "</article></div>";
      } else if (isTech) {
        refBlock =
          '<details class="lh-reference lh-reference-tech" open>' +
          '<summary><span class="lh-ref-cue" aria-hidden="true">▶</span> Notes</summary>' +
          '<div class="lh-reference-inner lh-reference-inner-tech lh-notes-surface">' +
          refBody +
          "</div></details>";
      } else {
        refBlock =
          '<details class="lh-reference" open><summary><span class="lh-ref-cue" aria-hidden="true">▶</span> Reference — full lesson notes</summary><div class="lh-reference-inner">' +
          refBody +
          "</div></details>";
      }
    }
    if (!el.teach) return;
    el.teach.classList.remove("tech-prose");
    el.teach.classList.toggle("teach-full-chapter", !!isFullChapterTechLearn);
    el.teach.classList.toggle("teach-notes", !!isTechLearn);
    const stepBadge = isFullChapterTechLearn ? "Reading" : !isTech ? "This step" : "Notes";
    el.teach.innerHTML =
      '<div class="lesson-shell">' +
      '<header class="lesson-shell-head"><span class="lesson-shell-badge">' +
      stepBadge +
      '</span><span class="lesson-shell-sub">' +
      escapeHtml(c.name) +
      "</span></header>" +
      '<div class="lesson-shell-body">' +
      (isFullChapterTechLearn ? "" : fccLessonStrip(Ls, c)) +
      refBlock +
      "</div></div>";

    document.body.classList.toggle("learn-only", isTechLearn);
    document.body.classList.toggle("quiz-tech", isTech);

    const pc = document.getElementById("practice-column");
    if (pc) pc.classList.toggle("is-hidden", !!isTechLearn);
    const cg = document.getElementById("content-grid");
    if (cg) cg.classList.toggle("single-pane", !!isTechLearn);

    applyTeachCollapsedPreference(!!isTechLearn);

    const strict = Ls.kind === "challenge" || (Ls.check && Ls.check.strict);
    var footerLearnTech = "";
    if (learn && isTech) {
      if (isFullChapterTechLearn)
        footerLearnTech = "Scroll the reading below. Continue or Skip lesson when you are ready—both complete this step.";
      else if (c.id === "labs")
        footerLearnTech =
          "Labs run on your Kali VM—this browser only shows the script. Read Notes, work in the VM, then Continue.";
      else footerLearnTech = "Lesson reading is open below—study it, then Continue.";
    }
    if (el.footerHint)
      el.footerHint.textContent = learn && !isTech
        ? c.ws === "sql"
          ? "Open Reference when a term is new. Try Run on sample SQL, then Continue."
          : c.ws === "py"
            ? "Reference on the right has the notes. Use Run to experiment, then Continue."
            : c.ws === "web"
              ? "Reference on the right has the full lesson. Use Run on the left, then Continue."
              : "Experiment in the editor, then Continue."
        : learn && isTech
          ? footerLearnTech
          : isTech && Ls.kind === "quiz"
            ? "Select the best answer for each question, then Check."
            : strict
              ? "Solo check: the grader will not teach the solution."
              : "Run freely, then Check when you are ready.";

    if (el.btnContinue) el.btnContinue.style.display = learn ? "inline-flex" : "none";
    if (el.btnSkipChapter) el.btnSkipChapter.style.display = learn && isFullChapterTechLearn ? "inline-flex" : "none";

    const w = workspaceForCourse(c);
    const PG = typeof window !== "undefined" && window.LEARN_HUB_PLAYGROUND && typeof window.LEARN_HUB_PLAYGROUND === "object" ? window.LEARN_HUB_PLAYGROUND : null;
    const pg = PG && PG[Ls.id] ? PG[Ls.id] : null;
    if (isTechLearn) {
      if (el.wsWeb) el.wsWeb.classList.add("hidden");
      if (el.wsPy) el.wsPy.classList.add("hidden");
      if (el.wsSql) el.wsSql.classList.add("hidden");
      if (el.wsTech) el.wsTech.classList.add("hidden");
    } else {
      showWorkspaces(w);
      if (w === "web") {
        const st = Ls.starter || {};
        el.webHtml.value = st.html != null ? st.html : pg && pg.html != null ? pg.html : "";
        el.webCss.value = st.css != null ? st.css : pg && pg.css != null ? pg.css : "";
        el.webJs.value = st.js != null ? st.js : pg && pg.js != null ? pg.js : "";
        refreshWebPreview();
      }
      if (w === "py") {
        el.pyInput.value = Ls.starterPy != null ? Ls.starterPy : pg && pg.py != null ? pg.py : "";
        el.pyOutput.textContent = "";
        el.pyStatus.textContent = "Ready";
      }
      if (w === "sql") {
        el.sqlInput.value = Ls.starterSql != null ? Ls.starterSql : pg && pg.sql != null ? pg.sql : "";
        clearSqlOut();
        el.sqlStatus.textContent = "Loading…";
        ensureSqlJs()
          .then(function () {
            freshLessonDb(Ls.seed || "");
            el.sqlStatus.textContent = "Ready";
          })
          .catch(function (e) {
            appendSql("<div class='msg err'>" + escapeHtml(e.message || String(e)) + "</div>");
            el.sqlStatus.textContent = "Unavailable";
          });
      }
      if (w === "tech" && Ls.kind === "quiz") {
        renderTechQuiz(Ls);
        el.techFeedback.innerHTML = "";
        el.techStatus.textContent = "—";
      }
    }

    const noAutocheck = learn && !Ls.check;
    const wb = document.getElementById("btn-web-check");
    const pb = document.getElementById("btn-py-check");
    const sb = document.getElementById("btn-sql-check");
    if (wb) wb.disabled = !!(noAutocheck && w === "web");
    if (pb) pb.disabled = !!(noAutocheck && w === "py");
    if (sb) sb.disabled = !!(noAutocheck && w === "sql");

    updateChrome();
    syncUrlFromLesson();
    updateLessonPlaceLine();

    if (isFullChapterTechLearn) {
      requestAnimationFrame(function () {
        const reading = el.teach && el.teach.querySelector(".lh-tech-reading");
        if (reading) buildChapterToc(reading, Ls.id);
        bindChapterSearchControls();
      });
    }
  }

  function goLesson(i) {
    const n = Math.floor(Number(i));
    const len = lessons().length;
    if (!Number.isFinite(n) || len === 0) return;
    let nn = n;
    if (nn < 0 || nn >= len) nn = 0;
    if (lessonLocked(nn)) {
      const first = lessons().findIndex(function (_, j) { return !lessonLocked(j); });
      nn = first >= 0 ? first : 0;
    }
    lessonIndex = nn;
    saveProgress();
    renderNav();
    applyLessonUI();
    scrollLessonToTop();
    if (el.sidebar) el.sidebar.classList.remove("open");
  }

  function switchCourse(id) {
    if (!courseById[id]) return;
    courseProgress(activeCourseId).idx = lessonIndex;
    activeCourseId = id;
    progress.activeCourseId = id;
    if (el.lessonFilter) el.lessonFilter.value = "";
    let nx = Number(courseProgress(id).idx);
    if (!Number.isFinite(nx) || nx < 0) nx = 0;
    lessonIndex = Math.floor(nx);
    if (lessonIndex >= lessons().length) lessonIndex = 0;
    if (lessonLocked(lessonIndex)) {
      const first = lessons().findIndex((_, i) => !lessonLocked(i));
      lessonIndex = first >= 0 ? first : 0;
    }
    saveProgress();
    renderPills();
    renderNav();
    applyLessonUI();
    scrollLessonToTop();
  }

  function completeLearn(viaSkip) {
    const Ls = currentLesson();
    if (!Ls || Ls.kind !== "learn") return;
    var cp = courseProgress(activeCourseId);
    cp.learnOutcome[Ls.id] = viaSkip ? "skip" : "continue";
    saveProgress();
    awardIfNew(Ls.id);
    if (lessonIndex + 1 < lessons().length) goLesson(lessonIndex + 1);
    else {
      toast("Track complete — try another subject!");
      scrollLessonToTop();
    }
    renderNav();
    updateChrome();
  }

  async function completePractice() {
    const Ls = currentLesson();
    if (!Ls || Ls.kind === "learn") return;
    const c = courseById[activeCourseId];
    if (!c) return;
    if (c.ws === "tech" && Ls.kind === "quiz") {
      const g = gradeTechQuiz(Ls);
      /* Error copy includes <strong> for emphasis — do not escape (message is app-authored only). */
      if (el.techFeedback)
        el.techFeedback.innerHTML = g.ok
          ? "<div class='msg ok'>" + escapeHtml(g.msg) + "</div>"
          : "<div class='msg err'>" + g.msg + "</div>";
      if (el.techStatus) el.techStatus.textContent = g.ok ? "Passed" : "Try again";
      if (el.announcer) el.announcer.textContent = g.ok ? "Quiz check passed." : "Quiz check: " + (g.msg || "Try again");
      if (!g.ok) return;
      awardIfNew(Ls.id);
      if (lessonIndex + 1 < lessons().length) goLesson(lessonIndex + 1);
      else {
        toast("Track complete!");
        scrollLessonToTop();
      }
      renderNav();
      updateChrome();
      return;
    }

    if (c.ws === "sql") {
      try {
        await ensureSqlJs();
      } catch (e) {
        clearSqlOut();
        appendSql("<div class='msg err'>" + escapeHtml(e.message || String(e)) + "</div>");
        el.sqlStatus.textContent = "Error";
        return;
      }
    }

    let res;
    try {
      res = await runCheck(Ls);
    } catch (e) {
      res = { ok: false, msg: e.message || String(e) };
    }
    if (c.ws === "sql") {
      clearSqlOut();
      if (!res.ok) appendSql("<div class='msg err'>" + escapeHtml(res.msg) + "</div>");
      else appendSql("<div class='msg ok'><strong>Correct!</strong></div>");
      el.sqlStatus.textContent = res.ok ? "Solved" : "Try again";
    } else if (c.ws === "py") {
      el.pyOutput.textContent = "";
      if (!res.ok) el.pyOutput.textContent = res.msg;
      else el.pyOutput.textContent = "Check passed.";
      el.pyStatus.textContent = res.ok ? "Solved" : "Try again";
    } else if (c.ws === "web") {
      el.webStatus.textContent = res.ok ? "Solved" : res.msg || "Try again";
    }

    if (el.announcer) {
      el.announcer.textContent = res.ok ? "Check passed." : "Check did not pass. " + (res.msg || "");
    }

    if (!res.ok) return;
    awardIfNew(Ls.id);
    if (lessonIndex + 1 < lessons().length) goLesson(lessonIndex + 1);
    else {
      toast("Track complete!");
      scrollLessonToTop();
    }
    renderNav();
    updateChrome();
  }

  function bindTabIndent(textarea) {
    if (!textarea) return;
    textarea.addEventListener("keydown", (ev) => {
      if (ev.key === "Tab") {
        ev.preventDefault();
        const ta = textarea;
        const val = ta.value;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        if (ev.shiftKey) {
          const before = val.slice(0, start);
          const sel = val.slice(start, end);
          const after = val.slice(end);
          const out = sel
            .split("\n")
            .map((line) => {
              if (line.startsWith(INDENT)) return line.slice(INDENT.length);
              if (line.startsWith("\t")) return line.slice(1);
              return line;
            })
            .join("\n");
          ta.value = before + out + after;
          ta.selectionStart = start;
          ta.selectionEnd = start + out.length;
        } else if (start === end) {
          ta.value = val.slice(0, start) + INDENT + val.slice(end);
          ta.selectionStart = ta.selectionEnd = start + INDENT.length;
        } else {
          const before = val.slice(0, start);
          const sel = val.slice(start, end);
          const after = val.slice(end);
          const out = sel.split("\n").map((line) => INDENT + line).join("\n");
          ta.value = before + out + after;
          ta.selectionStart = start;
          ta.selectionEnd = start + out.length;
        }
      }
    });
  }

  function wire() {
    function on(nodeOrId, ev, fn) {
      const n = typeof nodeOrId === "string" ? document.getElementById(nodeOrId) : nodeOrId;
      if (n) n.addEventListener(ev, fn);
    }

    function applyA11yFromStorage() {
      try {
        var c = localStorage.getItem(A11Y_CONTRAST_KEY) === "1";
        var m = localStorage.getItem(A11Y_MOTION_KEY) === "1";
        var h = localStorage.getItem(A11Y_SIDEBAR_HIDDEN_KEY) === "1";
        document.body.classList.toggle("lh-high-contrast", c);
        document.body.classList.toggle("lh-force-reduce-motion", m);
        document.body.classList.toggle("lh-sidebar-hidden", h);
        var ce = document.getElementById("lh-a11y-contrast");
        var me = document.getElementById("lh-a11y-reduce-motion");
        var he = document.getElementById("lh-a11y-hide-sidebar");
        if (ce) ce.checked = c;
        if (me) me.checked = m;
        if (he) he.checked = h;
        if (h && el.sidebar) el.sidebar.classList.remove("open");
      } catch (_) {}
    }
    applyA11yFromStorage();
    on("lh-a11y-contrast", "change", function (ev) {
      var onCh = ev.target && ev.target.checked;
      document.body.classList.toggle("lh-high-contrast", !!onCh);
      try {
        localStorage.setItem(A11Y_CONTRAST_KEY, onCh ? "1" : "0");
      } catch (_) {}
    });
    on("lh-a11y-reduce-motion", "change", function (ev) {
      var onCh = ev.target && ev.target.checked;
      document.body.classList.toggle("lh-force-reduce-motion", !!onCh);
      try {
        localStorage.setItem(A11Y_MOTION_KEY, onCh ? "1" : "0");
      } catch (_) {}
    });
    on("lh-a11y-hide-sidebar", "change", function (ev) {
      var hide = !!(ev.target && ev.target.checked);
      document.body.classList.toggle("lh-sidebar-hidden", hide);
      if (hide && el.sidebar) el.sidebar.classList.remove("open");
      try {
        localStorage.setItem(A11Y_SIDEBAR_HIDDEN_KEY, hide ? "1" : "0");
      } catch (_) {}
    });

    document.querySelectorAll("#editor-tabs button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        document.querySelectorAll("#editor-tabs button").forEach((b) => {
          const on = b === btn;
          b.classList.toggle("active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
          b.tabIndex = on ? 0 : -1;
        });
        document.querySelectorAll(".web-ta-wrap").forEach((w) => w.classList.toggle("active", w.getAttribute("data-pane") === tab));
        var ta =
          tab === "html" ? el.webHtml : tab === "css" ? el.webCss : tab === "js" ? el.webJs : null;
        if (ta) requestAnimationFrame(() => ta.focus());
      });
    });
    var editorTablist = document.getElementById("editor-tabs");
    if (editorTablist) {
      editorTablist.addEventListener("keydown", function (ev) {
        var tabs = [].slice.call(editorTablist.querySelectorAll('button[role="tab"]'));
        if (!tabs.length) return;
        var i = tabs.indexOf(ev.target);
        if (i < 0) return;
        var ni = -1;
        if (ev.key === "ArrowRight") ni = (i + 1) % tabs.length;
        else if (ev.key === "ArrowLeft") ni = (i - 1 + tabs.length) % tabs.length;
        else if (ev.key === "Home") ni = 0;
        else if (ev.key === "End") ni = tabs.length - 1;
        if (ni < 0) return;
        ev.preventDefault();
        tabs[ni].click();
      });
    }
    on("btn-web-run", "click", refreshWebPreview);
    on("btn-web-reset", "click", () => {
      const Ls = currentLesson();
      const st = (Ls && Ls.starter) || {};
      if (el.webHtml) el.webHtml.value = st.html != null ? st.html : "";
      if (el.webCss) el.webCss.value = st.css != null ? st.css : "";
      if (el.webJs) el.webJs.value = st.js != null ? st.js : "";
      refreshWebPreview();
    });
    on("btn-web-check", "click", () => completePractice());

    on("btn-py-run", "click", async () => {
      if (el.pyOutput) el.pyOutput.textContent = "Running…";
      if (el.pyStatus) el.pyStatus.textContent = "…";
      try {
        const r = await runPythonCode(el.pyInput ? el.pyInput.value : "");
        if (el.pyOutput) el.pyOutput.textContent = r.err ? r.out + (r.out ? "\n" : "") + r.err : r.out || "(no output)";
        if (el.pyStatus) el.pyStatus.textContent = r.err ? "Error" : "Done";
      } catch (e) {
        const msg = e && e.message ? e.message : String(e);
        if (el.pyOutput)
          el.pyOutput.textContent =
            "Could not run Python.\n\n" +
            msg +
            "\n\nIf you opened this page as a file, use a local server (e.g. python -m http.server) and try again, or check your network for the Pyodide CDN.";
        if (el.pyStatus) el.pyStatus.textContent = "Error";
        console.error("Learn Hub Python:", e);
      }
    });
    on("btn-py-reset", "click", () => {
      const Ls = currentLesson();
      if (el.pyInput) el.pyInput.value = Ls && Ls.starterPy != null ? Ls.starterPy : "";
      if (el.pyOutput) el.pyOutput.textContent = "";
    });
    on("btn-py-check", "click", () => completePractice());

    on("btn-sql-run", "click", () => runSqlOnLessonDb(el.sqlInput ? el.sqlInput.value : "", false));
    on("btn-sql-clear", "click", () => {
      if (el.sqlInput) {
        el.sqlInput.value = "";
        el.sqlInput.focus();
      }
    });
    on("btn-sql-reset-db", "click", () => {
      const Ls = currentLesson();
      if (!Ls) return;
      ensureSqlJs()
        .then(function () {
          freshLessonDb(Ls.seed || "");
          clearSqlOut();
          appendSql("<div class='msg ok'>Lesson database reset.</div>");
        })
        .catch(function (e) {
          clearSqlOut();
          appendSql("<div class='msg err'>" + escapeHtml(e.message || String(e)) + "</div>");
        });
    });
    on("btn-sql-check", "click", () => completePractice());

    on("btn-tech-check", "click", () => completePractice());

    on(el.btnContinue, "click", function () {
      completeLearn(false);
    });
    on(el.btnSkipChapter, "click", function () {
      completeLearn(true);
    });

    on(el.menuToggle, "click", () => {
      if (document.body.classList.contains("lh-sidebar-hidden")) {
        document.body.classList.remove("lh-sidebar-hidden");
        try {
          localStorage.setItem(A11Y_SIDEBAR_HIDDEN_KEY, "0");
        } catch (_) {}
        var he = document.getElementById("lh-a11y-hide-sidebar");
        if (he) he.checked = false;
        if (el.sidebar) el.sidebar.classList.remove("open");
        syncMenuToggleExpanded();
        return;
      }
      if (el.sidebar) el.sidebar.classList.toggle("open");
      syncMenuToggleExpanded();
    });

    on("btn-toggle-teach", "click", () => {
      document.body.classList.toggle("teach-collapsed");
      try {
        localStorage.setItem(TEACH_COLLAPSED_KEY, document.body.classList.contains("teach-collapsed") ? "1" : "0");
      } catch (_) {}
      syncTeachCollapsedUi();
    });

    on("btn-reset-all", "click", () => {
      if (!confirm("Reset ALL progress and XP for the signed-in profile on this site?")) return;
      try {
        if (currentUsername) localStorage.removeItem(lhProgressStorageKey());
      } catch (_) {}
      location.reload();
    });

    on("btn-lh-logout", "click", () => {
      clearSession();
      location.reload();
    });

    if (el.lessonFilter) {
      var filterTimer = null;
      function runFilter() {
        clearTimeout(filterTimer);
        filterTimer = setTimeout(function () {
          applyLessonFilter(el.lessonFilter.value);
        }, 50);
      }
      el.lessonFilter.addEventListener("input", runFilter);
      el.lessonFilter.addEventListener("search", runFilter);
    }

    function bindRunCheck(ta, runFn, checkFn) {
      if (!ta) return;
      ta.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && ev.ctrlKey && ev.shiftKey) {
          ev.preventDefault();
          checkFn();
        } else if (ev.key === "Enter" && ev.ctrlKey) {
          ev.preventDefault();
          runFn();
        }
      });
    }
    bindRunCheck(el.webHtml, refreshWebPreview, () => completePractice());
    bindRunCheck(el.webCss, refreshWebPreview, () => completePractice());
    bindRunCheck(el.webJs, refreshWebPreview, () => completePractice());
    bindRunCheck(el.sqlInput, () => runSqlOnLessonDb(el.sqlInput.value, false), () => completePractice());
    bindRunCheck(el.pyInput, () => {
      const b = document.getElementById("btn-py-run");
      if (b) b.click();
    }, () => completePractice());

    [el.webHtml, el.webCss, el.webJs, el.sqlInput, el.pyInput].forEach(bindTabIndent);

    document.addEventListener("keydown", function (ev) {
      if (ev.defaultPrevented) return;
      if (ev.key === "Escape") {
        if (el.sidebar && el.sidebar.classList.contains("open")) {
          ev.preventDefault();
          el.sidebar.classList.remove("open");
          syncMenuToggleExpanded();
        }
      }
      /* Ctrl+/ focuses filter (plain / is reserved for Quick Find in Firefox). */
      if (ev.key === "/" && ev.ctrlKey && !ev.metaKey && !ev.altKey) {
        var tag = ev.target && ev.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (ev.target && ev.target.isContentEditable)) return;
        if (el.lessonFilter) {
          ev.preventDefault();
          el.lessonFilter.focus();
          try {
            el.lessonFilter.select();
          } catch (_) {}
        }
      }
    });
    syncMenuToggleExpanded();
  }

  let bootOk = false;

  function syncUserLabel() {
    var lab = el.userLabel || document.getElementById("lh-user-label");
    var line = document.getElementById("lh-user-line");
    if (lab) {
      if (currentUsername) lab.textContent = "Signed in as " + currentUsername;
      else lab.textContent = "";
    }
    if (line) line.style.display = currentUsername ? "" : "none";
  }

  function runInitialBootAfterAuth() {
    if (bootOk) return;
    try {
      loadProgress();
      applyUrlLessonOverride();
      renderPills();
      wire();

      renderNav();
      const len = lessons().length;
      let idx = Math.floor(Number(lessonIndex));
      if (!Number.isFinite(idx) || idx < 0 || idx >= len) idx = 0;
      if (len > 0 && lessonLocked(idx)) {
        const first = lessons().findIndex((_, i) => !lessonLocked(i));
        idx = first >= 0 ? first : 0;
      }
      if (len === 0) {
        if (el.title) el.title.textContent = "No lessons";
        if (el.teach)
          el.teach.innerHTML =
            "<p class='msg err'>This track has no lessons in the loaded curriculum.</p><p class='msg info'>Try resetting progress or redownloading <code>Learn-Hub</code>.</p>";
        if (el.sidebarTrackName) el.sidebarTrackName.textContent = courseById[activeCourseId] ? courseById[activeCourseId].name : "—";
        const cEmpty = courseById[activeCourseId];
        document.body.classList.toggle("lh-compact-teach", !!(cEmpty && cEmpty.ws !== "tech"));
      } else {
        goLesson(idx);
        if (el.title && el.title.textContent === "Loading…") {
          lessonIndex = 0;
          goLesson(0);
        }
        if (el.title && el.title.textContent === "Loading…") {
          try {
            lessonIndex = 0;
            courseProgress(activeCourseId).idx = 0;
            renderNav();
            applyLessonUI();
          } catch (_) {}
        }
      }
      bootOk = true;
      try {
        window.__LH_BOOT_OK = true;
      } catch (_) {}
      requestAnimationFrame(function () {
        try {
          var nLess = lessons().length;
          if (nLess > 0) {
            if (el.lessonPicker && el.lessonPicker.options.length === 0) renderNav();
            if (el.lessonNav && el.lessonNav.childElementCount === 0) renderNav();
          }
        } catch (_) {}
      });
      syncUserLabel();
    } catch (bootErr) {
      console.error("Learn Hub boot:", bootErr);
      if (el.title) el.title.textContent = "Startup error";
      if (el.teach)
        el.teach.innerHTML =
          "<p class='msg err'>The app hit an error while starting: " +
          escapeHtml(bootErr && bootErr.message ? bootErr.message : String(bootErr)) +
          "</p><p class='msg info'>Open DevTools (F12) → Console for the full stack. If the page was opened as a downloaded copy, use the original <code>index.html</code> from your Learn-Hub folder.</p>";
      if (el.lessonNav) el.lessonNav.innerHTML = "";
    }

    if (bootOk) {
      ensureSqlJs()
        .then(function () {
          const c = courseById[activeCourseId];
          if (c && c.ws === "sql" && currentLesson()) {
            freshLessonDb(currentLesson().seed || "");
            clearSqlOut();
            if (el.sqlStatus) el.sqlStatus.textContent = "Ready";
          }
        })
        .catch(function (err) {
          console.warn("Learn Hub: SQLite optional load failed:", err);
          var bc = courseById[activeCourseId];
          if (bc && bc.ws === "sql") {
            clearSqlOut();
            appendSql(
              "<div class='msg err'><strong>SQLite did not load.</strong> " +
                escapeHtml(err.message || String(err)) +
                "</div><div class='msg info'>HTML, CSS, JavaScript, Python, and Tech+ still work. Try opening this file through a local server (e.g. <code>python -m http.server</code>) or check your connection.</div>"
            );
            if (el.sqlStatus) el.sqlStatus.textContent = "Unavailable";
          }
        });
    }
  }

  function hideAuthOverlay() {
    var ov = document.getElementById("lh-auth-overlay");
    if (!ov) return;
    ov.classList.remove("is-open");
    ov.setAttribute("aria-hidden", "true");
  }

  function setAuthMsg(text, kind) {
    var m = document.getElementById("lh-auth-msg");
    if (!m) return;
    m.textContent = text || "";
    m.className = "lh-auth-msg" + (kind === "err" ? " lh-auth-err" : kind === "ok" ? " lh-auth-ok" : "");
  }

  function tryLogin(username, password) {
    var u = normalizeUsername(username);
    if (!u) {
      setAuthMsg("Enter a username.", "err");
      return false;
    }
    if (!password || String(password).length < 4) {
      setAuthMsg("Enter your password (at least 4 characters).", "err");
      return false;
    }
    var accounts = readAccounts();
    if (!accounts[u] || typeof accounts[u] !== "object") {
      setAuthMsg("Unknown username.", "err");
      return false;
    }
    if (accounts[u].p == null) {
      setAuthMsg("This account’s saved data is incomplete. Create a new username or clear site data.", "err");
      return false;
    }
    if (!passwordMatches(accounts[u].p, password)) {
      setAuthMsg("Wrong password.", "err");
      return false;
    }
    currentUsername = u;
    saveSession(u);
    setAuthMsg("Signed in.", "ok");
    hideAuthOverlay();
    runInitialBootAfterAuth();
    syncUserLabel();
    return true;
  }

  function tryRegister(username, password, password2) {
    if (String(password) !== String(password2)) {
      setAuthMsg("Passwords do not match.", "err");
      return false;
    }
    var u = normalizeUsername(username);
    if (!/^[a-z0-9_-]{2,24}$/.test(u)) {
      setAuthMsg("Username must be 2–24 characters: letters, digits, underscore, or hyphen.", "err");
      return false;
    }
    if (!password || String(password).length < 4) {
      setAuthMsg("Password must be at least 4 characters.", "err");
      return false;
    }
    var accounts = readAccounts();
    if (accounts[u] && typeof accounts[u] === "object") {
      setAuthMsg("That username is already taken.", "err");
      return false;
    }
    accounts[u] = { p: encodePw(password) };
    writeAccounts(accounts);
    currentUsername = u;
    saveSession(u);
    progress = { activeCourseId: COURSES[0].id, courses: {} };
    activeCourseId = progress.activeCourseId;
    lessonIndex = 0;
    saveProgress();
    setAuthMsg("Account created.", "ok");
    hideAuthOverlay();
    runInitialBootAfterAuth();
    syncUserLabel();
    return true;
  }

  function resumeSessionIfValid() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return false;
      var o = JSON.parse(raw);
      if (!o || !o.username) return false;
      var u = normalizeUsername(o.username);
      if (!u) {
        clearSession();
        return false;
      }
      var accounts = readAccounts();
      if (u === "default" && !accounts[u]) {
        currentUsername = u;
        return true;
      }
      if (!accounts[u] || typeof accounts[u] !== "object") {
        clearSession();
        return false;
      }
      currentUsername = u;
      return true;
    } catch (_) {
      return false;
    }
  }

  var authWired = false;
  function prepareAuthOverlay() {
    var ov = document.getElementById("lh-auth-overlay");
    if (!ov) {
      currentUsername = "default";
      saveSession("default");
      runInitialBootAfterAuth();
      return;
    }
    ov.classList.add("is-open");
    ov.setAttribute("aria-hidden", "false");
    if (authWired) return;
    authWired = true;

    function switchAuthTab(which) {
      var up = which === "up";
      var tin = document.getElementById("lh-auth-tab-in");
      var tup = document.getElementById("lh-auth-tab-up");
      var pin = document.getElementById("lh-auth-panel-in");
      var pup = document.getElementById("lh-auth-panel-up");
      if (tin) {
        tin.classList.toggle("active", !up);
        tin.setAttribute("aria-selected", !up ? "true" : "false");
      }
      if (tup) {
        tup.classList.toggle("active", up);
        tup.setAttribute("aria-selected", up ? "true" : "false");
      }
      if (pin) pin.classList.toggle("lh-auth-panel-hidden", up);
      if (pup) pup.classList.toggle("lh-auth-panel-hidden", !up);
      setAuthMsg("", "");
    }

    var tinBtn = document.getElementById("lh-auth-tab-in");
    var tupBtn = document.getElementById("lh-auth-tab-up");
    if (tinBtn) tinBtn.addEventListener("click", () => switchAuthTab("in"));
    if (tupBtn) tupBtn.addEventListener("click", () => switchAuthTab("up"));

    var fin = document.getElementById("lh-auth-form-in");
    if (fin)
      fin.addEventListener("submit", function (e) {
        e.preventDefault();
        var uEl = document.getElementById("lh-auth-in-user");
        var pEl = document.getElementById("lh-auth-in-pass");
        tryLogin(uEl && uEl.value, pEl && pEl.value);
      });

    var fup = document.getElementById("lh-auth-form-up");
    if (fup)
      fup.addEventListener("submit", function (e) {
        e.preventDefault();
        var uEl = document.getElementById("lh-auth-up-user");
        var pEl = document.getElementById("lh-auth-up-pass");
        var p2El = document.getElementById("lh-auth-up-pass2");
        tryRegister(uEl && uEl.value, pEl && pEl.value, p2El && p2El.value);
      });

    syncUserLabel();
  }

  if (resumeSessionIfValid()) {
    runInitialBootAfterAuth();
  } else if (!document.getElementById("lh-auth-overlay")) {
    currentUsername = "default";
    saveSession("default");
    runInitialBootAfterAuth();
  } else {
    prepareAuthOverlay();
  }
}

setTimeout(function __lhWatchdog() {
  try {
    if (!window.__LH_BOOT_OK) {
      var authOv = document.getElementById("lh-auth-overlay");
      if (authOv && authOv.classList.contains("is-open")) return;
      var ph = document.getElementById("teach-boot-placeholder");
      if (ph) {
        ph.innerHTML =
          '<p class="msg err"><strong>Learn Hub stalled.</strong> Curriculum decoded but the UI did not start. Hard-refresh (Ctrl+Shift+R), try another browser, or disable extensions that block large inline scripts.</p>' +
          '<p class="msg info">If you edit this file in an IDE preview, open the same URL in Chrome/Edge instead — some embedded browsers choke on big single-file apps.</p>';
      }
    }
  } catch (_) {}
}, 3000);

function learnHubKick() {
  try {
    learnHubRunApp();
  } catch (e) {
    console.error("Learn Hub:", e);
    var root = document.getElementById("teach");
    if (root) {
      root.innerHTML =
        "<p class=\"msg err\"><strong>Learn Hub could not start.</strong> " +
        (e && e.message ? e.message : String(e)) +
        "</p><p class=\"msg info\">Try Chrome or Edge, open via Live Server or GitHub Pages (scripts load from the same folder).</p>";
    }
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", learnHubKick);
} else {
  learnHubKick();
}

