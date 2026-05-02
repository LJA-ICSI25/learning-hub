(function () {
  "use strict";

  var EXAM_LEN = 75;
  var DURATION_MS = 60 * 60 * 1000;

  var bank = typeof window.TP_QUESTION_BANK === "object" && Array.isArray(window.TP_QUESTION_BANK)
    ? window.TP_QUESTION_BANK
    : null;

  var examQuestions = [];
  var answers = {};
  var currentIndex = 0;
  var startedAt = 0;
  var deadline = 0;
  var submitted = false;
  var savedThisRound = false;
  var timerId = null;
  var score = 0;

  function $(id) {
    return document.getElementById(id);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function formatMs(ms) {
    if (ms < 0) ms = 0;
    var totalSec = Math.floor(ms / 1000);
    var m = Math.floor(totalSec / 60);
    var s = totalSec % 60;
    return String(m) + ":" + (s < 10 ? "0" : "") + String(s);
  }

  function showScreen(name) {
    var screens = ["tp-screen-welcome", "tp-screen-exam", "tp-screen-results"];
    for (var i = 0; i < screens.length; i++) {
      var el = $(screens[i]);
      if (!el) continue;
      el.classList.toggle("tp-hidden", screens[i] !== name);
    }
    var top = $("tp-top");
    var foot = $("tp-footer");
    if (top)
      top.classList.toggle(
        "tp-hidden",
        name === "tp-screen-welcome" || name === "tp-screen-results"
      );
    if (foot) foot.classList.toggle("tp-hidden", name !== "tp-screen-exam" || submitted);
  }

  function pickExamSet() {
    if (!bank || !bank.length) return;
    examQuestions = shuffle(bank).slice(0, Math.min(EXAM_LEN, bank.length));
    answers = {};
    currentIndex = 0;
    startedAt = Date.now();
    deadline = startedAt + DURATION_MS;
    submitted = false;
    savedThisRound = false;
    score = 0;
    if ($("tp-btn-save")) $("tp-btn-save").disabled = true;
    if ($("tp-btn-new")) $("tp-btn-new").disabled = true;
    if ($("tp-save-hint")) $("tp-save-hint").classList.add("tp-hidden");
    showScreen("tp-screen-exam");
    renderQuestion();
    updateTimerDisplay();
    startTimer();
    if ($("tp-footer-submit")) $("tp-footer-submit").disabled = false;
  }

  function startTimer() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(tickTimer, 250);
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function tickTimer() {
    if (submitted) return;
    updateTimerDisplay();
    var left = deadline - Date.now();
    if (left <= 0) {
      submitExam(true);
    }
  }

  function updateTimerDisplay() {
    var el = $("tp-timer");
    if (!el) return;
    if (submitted) return;
    var left = deadline - Date.now();
    el.textContent = formatMs(left);
    el.classList.remove("tp-low", "tp-critical");
    if (left <= 5 * 60 * 1000) el.classList.add("tp-low");
    if (left <= 60 * 1000) el.classList.add("tp-critical");
  }

  function renderQuestion() {
    var q = examQuestions[currentIndex];
    if (!q) return;
    var prog = $("tp-progress");
    if (prog) prog.textContent = "Question " + String(currentIndex + 1) + " of " + String(examQuestions.length);
    var stem = $("tp-stem");
    if (stem) stem.textContent = q.stem;
    var wrap = $("tp-choices");
    if (!wrap) return;
    wrap.innerHTML = "";
    var picked = answers[currentIndex];
    var letters = ["A", "B", "C", "D"];
    for (var i = 0; i < letters.length; i++) {
      var L = letters[i];
      var lab = document.createElement("label");
      lab.className = "tp-choice" + (picked === L ? " tp-picked" : "");
      if (submitted) lab.classList.add("tp-locked");
      var inp = document.createElement("input");
      inp.type = "radio";
      inp.name = "tp-ans";
      inp.value = L;
      inp.checked = picked === L;
      inp.disabled = submitted;
      inp.setAttribute("aria-label", "Answer " + L);
      inp.addEventListener("change", function () {
        if (submitted) return;
        answers[currentIndex] = this.value;
        renderQuestion();
      });
      var span = document.createElement("span");
      span.innerHTML = "<strong>" + L + ".</strong> " + escapeHtml(q.choices[L] || "");
      lab.appendChild(inp);
      lab.appendChild(span);
      wrap.appendChild(lab);
    }
    var prev = $("tp-prev");
    var next = $("tp-next");
    if (prev) prev.disabled = currentIndex === 0;
    if (next) next.disabled = currentIndex >= examQuestions.length - 1;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function submitExam(fromTimer) {
    if (submitted) return;
    submitted = true;
    stopTimer();
    score = 0;
    for (var i = 0; i < examQuestions.length; i++) {
      var pick = answers[i];
      if (pick && pick === examQuestions[i].correct) score++;
    }
    if ($("tp-footer-submit")) $("tp-footer-submit").disabled = true;
    if ($("tp-timer")) {
      $("tp-timer").textContent = fromTimer ? "0:00" : formatMs(Math.max(0, deadline - Date.now()));
      $("tp-timer").classList.remove("tp-low", "tp-critical");
    }
    showScreen("tp-screen-results");
    renderResults();
    if ($("tp-btn-save")) $("tp-btn-save").disabled = false;
    if ($("tp-save-hint")) $("tp-save-hint").classList.remove("tp-hidden");
  }

  function renderResults() {
    var sum = $("tp-result-summary");
    if (sum) {
      var pct = examQuestions.length ? Math.round((100 * score) / examQuestions.length) : 0;
      sum.innerHTML =
        "<p class='tp-score-big'>" +
        String(score) +
        " / " +
        String(examQuestions.length) +
        "</p>" +
        "<p>" +
        String(pct) +
        "% correct</p>" +
        "<p class='tp-lead'>Your answers are locked below. Save this result to start a new random exam.</p>";
    }
    var list = $("tp-review-list");
    if (!list) return;
    list.innerHTML = "";
    for (var i = 0; i < examQuestions.length; i++) {
      var q = examQuestions[i];
      var pick = answers[i] || null;
      var ok = pick && pick === q.correct;
      var item = document.createElement("div");
      item.className = "tp-review-item";
      var meta = document.createElement("div");
      meta.className = "tp-review-meta";
      meta.textContent = "#" + String(i + 1) + " · " + q.ref + " · " + (ok ? "Correct" : "Incorrect");
      var st = document.createElement("p");
      st.className = "tp-review-stem";
      st.textContent = q.stem;
      var cw = document.createElement("div");
      cw.className = "tp-choices";
      var letters = ["A", "B", "C", "D"];
      for (var li = 0; li < letters.length; li++) {
        var L = letters[li];
        var lab = document.createElement("div");
        lab.className = "tp-choice tp-locked";
        if (L === q.correct) lab.classList.add("tp-correct");
        else if (pick === L && L !== q.correct) lab.classList.add("tp-wrong");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.disabled = true;
        radio.checked = pick === L;
        var span = document.createElement("span");
        span.innerHTML = "<strong>" + L + ".</strong> " + escapeHtml(q.choices[L] || "");
        lab.appendChild(radio);
        lab.appendChild(span);
        cw.appendChild(lab);
      }
      item.appendChild(meta);
      item.appendChild(st);
      item.appendChild(cw);
      list.appendChild(item);
    }
  }

  function formatDuration(ms) {
    ms = Math.max(0, Math.floor(ms / 1000));
    var h = Math.floor(ms / 3600);
    var m = Math.floor((ms % 3600) / 60);
    var s = ms % 60;
    var parts = [];
    if (h) parts.push(String(h) + "h");
    parts.push(String(m) + "m");
    parts.push(String(s) + "s");
    return parts.join(" ");
  }

  function buildSaveReport() {
    var ended = Date.now();
    var usedMs = Math.min(DURATION_MS, ended - startedAt);
    var pct = examQuestions.length ? Math.round((100 * score) / examQuestions.length) : 0;
    var lines = [];
    lines.push("TECH+ PRACTICE EXAM — RESULT REPORT");
    lines.push("========================================");
    lines.push("");
    lines.push("Saved:     " + new Date().toString());
    lines.push("Score:     " + String(score) + " / " + String(examQuestions.length) + " (" + String(pct) + "%)");
    lines.push("Time cap:  60 minutes");
    lines.push("Time used: " + formatDuration(usedMs));
    lines.push("");
    lines.push("========================================");
    lines.push("QUESTION-BY-QUESTION");
    lines.push("========================================");
    var letters = ["A", "B", "C", "D"];
    for (var i = 0; i < examQuestions.length; i++) {
      var q = examQuestions[i];
      var pick = answers[i] || null;
      var ok = pick && pick === q.correct;
      lines.push("");
      lines.push("--- Question " + String(i + 1) + " of " + String(examQuestions.length) + " — " + q.ref + " — " + (ok ? "CORRECT" : "INCORRECT") + " ---");
      lines.push("");
      lines.push(q.stem);
      lines.push("");
      for (var li = 0; li < letters.length; li++) {
        var L = letters[li];
        var mark = L === q.correct ? " (correct)" : pick === L && L !== q.correct ? " (your answer)" : "";
        lines.push("  " + L + ". " + String(q.choices[L] || "") + mark);
      }
      lines.push("");
      lines.push("Your answer:    " + (pick || "(no answer)"));
      lines.push("Correct answer: " + q.correct);
    }
    lines.push("");
    lines.push("========================================");
    lines.push("END OF REPORT");
    lines.push("");
    return lines.join("\n");
  }

  function saveResult() {
    if (!submitted) return;
    var text = buildSaveReport();
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    var stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    a.download = "tech-plus-exam-result-" + stamp + ".txt";
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
    savedThisRound = true;
    if ($("tp-btn-new")) $("tp-btn-new").disabled = false;
    if ($("tp-btn-save")) $("tp-btn-save").disabled = true;
    if ($("tp-save-hint")) {
      $("tp-save-hint").textContent = "Result saved. You can start a new exam.";
      $("tp-save-hint").className = "tp-msg tp-msg-ok";
      $("tp-save-hint").classList.remove("tp-hidden");
    }
  }

  function tryNewExam() {
    if (!savedThisRound) {
      alert("Save your result first (download the text report), then start a new exam.");
      return;
    }
    pickExamSet();
  }

  function wire() {
    var bw = $("tp-begin");
    if (bw) bw.addEventListener("click", pickExamSet);
    var prev = $("tp-prev");
    if (prev)
      prev.addEventListener("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          renderQuestion();
        }
      });
    var next = $("tp-next");
    if (next)
      next.addEventListener("click", function () {
        if (currentIndex < examQuestions.length - 1) {
          currentIndex++;
          renderQuestion();
        }
      });
    var sub = $("tp-footer-submit");
    if (sub) sub.addEventListener("click", function () { submitExam(false); });
    var save = $("tp-btn-save");
    if (save) save.addEventListener("click", saveResult);
    var neu = $("tp-btn-new");
    if (neu) neu.addEventListener("click", tryNewExam);
  }

  function boot() {
    wire();
    if (!bank || bank.length < EXAM_LEN) {
      var err = $("tp-bank-error");
      if (err) {
        err.classList.remove("tp-hidden");
        err.innerHTML =
          "<p><strong>Question bank not loaded.</strong> Open this folder from a local web server, or run:</p>" +
          "<pre style='overflow:auto'>python scripts/build_tech_plus_exam_bank.py</pre>" +
          "<p>Then ensure <code>questions-bank.js</code> sits next to this page and reload.</p>";
      }
      var bw = $("tp-begin");
      if (bw) bw.disabled = true;
      return;
    }
    showScreen("tp-screen-welcome");
  }

  boot();
})();
