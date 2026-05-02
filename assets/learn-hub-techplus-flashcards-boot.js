/**
 * Append Tech+ flashcard deck lesson after GimKit injection (runs right after learn-hub-app.js parse).
 */
(function () {
  var cards = typeof window !== "undefined" ? window.LEARN_HUB_TECHPLUS_FLASHCARDS : null;
  var courses = typeof window !== "undefined" ? window.LEARN_HUB_COURSES : null;
  if (!courses || !Array.isArray(cards) || !cards.length) return;
  var tech = null;
  for (var i = 0; i < courses.length; i++) {
    if (courses[i] && courses[i].id === "tech" && Array.isArray(courses[i].lessons)) {
      tech = courses[i];
      break;
    }
  }
  if (!tech) return;
  for (var j = 0; j < tech.lessons.length; j++) {
    if (tech.lessons[j] && tech.lessons[j].id === "tech-gimkit-flashcards") return;
  }
  var lesson = {
    unit: "GimKit question sets",
    id: "tech-gimkit-flashcards",
    kind: "quiz",
    title: "Tech+ Flashcards",
    narrative: "",
    lhFlashcardDeck: true,
    questions: [],
  };
  var ins = tech.lessons.findIndex(function (L) {
    return L && typeof L.id === "string" && L.id.indexOf("tech-gimkit-") === 0;
  });
  if (ins < 0) tech.lessons.push(lesson);
  else tech.lessons.splice(ins, 0, lesson);
})();
