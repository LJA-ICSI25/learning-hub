// --- Global State ---
let currentObjective = null;
let currentFlashcardIndex = 0;
let currentQuestionIndex = 0;
let quizScore = 0;
let showDefinitionFirst = false;

// XP & Gamification State
let totalXP = parseInt(localStorage.getItem('techPlusXP')) || 0;
const ranks = [
    { name: "Novice", minXP: 0 },
    { name: "Technician", minXP: 500 },
    { name: "Specialist", minXP: 1500 },
    { name: "Expert", minXP: 3000 },
    { name: "Master", minXP: 5000 },
    { name: "Tech Guru", minXP: 10000 }
];

// Activity specific state
let matchedCount = 0;
let selectedTerm = null;
let selectedDefinition = null;
let tfCurrentIndex = 0;
let tfCorrectCount = 0;
let sortCorrectCount = 0;

// Tracks viewed flashcards in current session to prevent XP farming
let viewedCardsInSession = new Set();

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    initNavigation();
    initNavDropdown();
    updateScoreUI();
    
    document.getElementById('back-to-dashboard').addEventListener('click', () => {
        document.getElementById('activity-view').classList.remove('active-view');
        document.getElementById('dashboard-view').classList.add('active-view');
        window.scrollTo(0, 0);
        document.getElementById('domain-selector').value = "";
    });

    // Flashcard Mode Toggle
    const toggleBtn = document.getElementById('toggle-card-mode');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            showDefinitionFirst = !showDefinitionFirst;
            toggleBtn.textContent = showDefinitionFirst ? "Switch to Term First" : "Switch to Definition First";
            updateCardDisplay();
        });
    }

    // Quiz Next Question
    const nextQBtn = document.getElementById('next-question');
    if (nextQBtn) {
        nextQBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentObjective.quiz.length) {
                loadQuestion();
            } else {
                showQuizResults();
            }
        });
    }
});

// --- Score & XP Logic ---
function awardXP(amount, reason) {
    totalXP += amount;
    localStorage.setItem('techPlusXP', totalXP);
    updateScoreUI();
    showXPToast(amount, reason);
}

function updateScoreUI() {
    const xpEl = document.getElementById('total-xp');
    const rankEl = document.getElementById('user-rank');
    const barFill = document.getElementById('xp-bar-fill');
    
    xpEl.textContent = totalXP;
    
    // Calculate Rank
    let currentRank = ranks[0];
    let nextRank = ranks[1];
    
    for (let i = 0; i < ranks.length; i++) {
        if (totalXP >= ranks[i].minXP) {
            currentRank = ranks[i];
            nextRank = ranks[i+1] || null;
        } else {
            break;
        }
    }
    
    rankEl.textContent = currentRank.name;
    
    // Progress bar calculation
    if (nextRank) {
        const progress = ((totalXP - currentRank.minXP) / (nextRank.minXP - currentRank.minXP)) * 100;
        barFill.style.width = `${Math.min(100, progress)}%`;
    } else {
        barFill.style.width = '100%';
    }
}

function showXPToast(amount, reason) {
    const container = document.getElementById('xp-toast-container');
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.textContent = `+${amount} XP: ${reason}`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2500);
}

// --- Navigation Logic ---
function initNavDropdown() {
    const selector = document.getElementById('domain-selector');
    selector.innerHTML = '<option value="" disabled selected>Switch Objective...</option>';
    
    for (const [domainId, domainData] of Object.entries(techPlusData)) {
        const group = document.createElement('optgroup');
        group.label = domainData.domainTitle;
        
        domainData.objectives.forEach(obj => {
            const opt = document.createElement('option');
            opt.value = obj.id;
            opt.textContent = obj.title;
            group.appendChild(opt);
        });
        
        selector.appendChild(group);
    }
    
    selector.addEventListener('change', (e) => {
        const objectiveId = e.target.value;
        // Find objective in data
        for (const domain of Object.values(techPlusData)) {
            const found = domain.objectives.find(o => o.id === objectiveId);
            if (found) {
                loadObjective(found);
                break;
            }
        }
    });
}

function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.activity-section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active-section'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active-section');
        });
    });
}

// --- Dashboard Logic ---
function initDashboard() {
    const grid = document.getElementById('domain-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    for (const [domainId, domainData] of Object.entries(techPlusData)) {
        const card = document.createElement('div');
        card.className = 'domain-card';
        
        const title = document.createElement('h3');
        title.textContent = domainData.domainTitle;
        card.appendChild(title);
        
        const list = document.createElement('ul');
        list.className = 'objective-list';
        
        domainData.objectives.forEach(obj => {
            const li = document.createElement('li');
            li.className = 'objective-item';
            li.textContent = obj.title;
            li.addEventListener('click', (e) => {
                e.stopPropagation();
                loadObjective(obj);
            });
            list.appendChild(li);
        });
        
        card.appendChild(list);
        grid.appendChild(card);
    }
}

function loadObjective(objectiveData) {
    currentObjective = objectiveData;
    viewedCardsInSession = new Set();
    
    document.getElementById('objective-title').textContent = objectiveData.title;
    document.getElementById('objective-desc').textContent = objectiveData.description;
    document.getElementById('domain-selector').value = objectiveData.id;
    
    document.getElementById('dashboard-view').classList.remove('active-view');
    document.getElementById('activity-view').classList.add('active-view');
    
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.activity-section');
    navBtns.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active-section'));
    navBtns[0].classList.add('active');
    document.getElementById('flashcards').classList.add('active-section');
    
    initFlashcards();
    initActivity();
    initQuiz();
    
    window.scrollTo(0, 0);
}

// --- Flashcards Logic ---
function initFlashcards() {
    currentFlashcardIndex = 0;
    const prevBtn = document.getElementById('prev-card');
    const nextBtn = document.getElementById('next-card');
    
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    
    newPrevBtn.addEventListener('click', () => {
        if (currentFlashcardIndex > 0) {
            currentFlashcardIndex--;
            updateCardDisplay();
        }
    });

    newNextBtn.addEventListener('click', () => {
        if (currentFlashcardIndex < currentObjective.flashcards.length - 1) {
            currentFlashcardIndex++;
            updateCardDisplay();
        }
    });
    
    updateCardDisplay();
}

function updateCardDisplay() {
    if (!currentObjective || !currentObjective.flashcards) return;
    
    const container = document.getElementById('flashcard-container');
    const counter = document.getElementById('card-counter');
    const cardData = currentObjective.flashcards[currentFlashcardIndex];

    const frontContent = showDefinitionFirst ? cardData.definition : cardData.term;
    const backContent = showDefinitionFirst ? cardData.term : cardData.definition;

    container.innerHTML = `
        <div class="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="flashcard-front">
                <h3>${frontContent}</h3>
                <p class="click-hint">Click to flip</p>
            </div>
            <div class="flashcard-back">
                <p>${backContent}</p>
            </div>
        </div>
    `;

    counter.textContent = `${currentFlashcardIndex + 1} / ${currentObjective.flashcards.length}`;
    
    // XP for viewing all cards
    viewedCardsInSession.add(currentFlashcardIndex);
    if (viewedCardsInSession.size === currentObjective.flashcards.length) {
        awardXP(50, "Full Flashcard Deck Viewed");
        viewedCardsInSession.add(-1); // Mark as rewarded
    }
}

// --- Interactive Activity Factory ---
function initActivity() {
    if (!currentObjective || !currentObjective.activityType) return;
    
    const container = document.getElementById('activity-container');
    const resetBtn = document.getElementById('reset-activity');
    const feedback = document.getElementById('activity-feedback');
    const title = document.getElementById('activity-title');
    
    container.innerHTML = '';
    feedback.textContent = '';
    feedback.className = 'activity-feedback';
    resetBtn.style.display = 'none';
    
    const newResetBtn = resetBtn.cloneNode(true);
    resetBtn.parentNode.replaceChild(newResetBtn, resetBtn);
    newResetBtn.addEventListener('click', initActivity);

    switch(currentObjective.activityType) {
        case "matching":
            title.textContent = "Term Matching";
            renderMatching(container, currentObjective.activityData, feedback, newResetBtn);
            break;
        case "trueFalse":
            title.textContent = "True or False Challenge";
            renderTrueFalse(container, currentObjective.activityData, feedback, newResetBtn);
            break;
        case "sorting":
            title.textContent = "Drag & Drop Categorization";
            renderSorting(container, currentObjective.activityData, feedback, newResetBtn);
            break;
        case "ordering":
            title.textContent = "Sequence Ordering";
            renderOrdering(container, currentObjective.activityData, feedback, newResetBtn);
            break;
        case "fillInBlank":
            title.textContent = "Fill in the Blank";
            renderFillInBlank(container, currentObjective.activityData, feedback, newResetBtn);
            break;
    }
}

// 1. Matching Game
function renderMatching(container, data, feedbackEl, resetBtn) {
    matchedCount = 0;
    selectedTerm = null;
    selectedDefinition = null;

    container.innerHTML = `
        <div class="matching-container">
            <div class="terms-column" id="terms-column"></div>
            <div class="definitions-column" id="definitions-column"></div>
        </div>
    `;

    const termsCol = document.getElementById('terms-column');
    const defsCol = document.getElementById('definitions-column');
    const shuffledTerms = [...data].sort(() => Math.random() - 0.5);
    const shuffledDefs = [...data].sort(() => Math.random() - 0.5);

    shuffledTerms.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item term-item';
        div.textContent = item.term;
        div.dataset.id = item.id;
        div.addEventListener('click', () => handleTermClick(div, data, feedbackEl, resetBtn));
        termsCol.appendChild(div);
    });

    shuffledDefs.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item def-item';
        div.textContent = item.definition;
        div.dataset.id = item.id;
        div.addEventListener('click', () => handleDefClick(div, data, feedbackEl, resetBtn));
        defsCol.appendChild(div);
    });
}

function handleTermClick(element, data, feedbackEl, resetBtn) {
    if (element.classList.contains('matched')) return;
    document.querySelectorAll('.term-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedTerm = element;
    checkMatch(data, feedbackEl, resetBtn);
}

function handleDefClick(element, data, feedbackEl, resetBtn) {
    if (element.classList.contains('matched')) return;
    document.querySelectorAll('.def-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedDefinition = element;
    checkMatch(data, feedbackEl, resetBtn);
}

function checkMatch(data, feedbackEl, resetBtn) {
    if (selectedTerm && selectedDefinition) {
        if (selectedTerm.dataset.id === selectedDefinition.dataset.id) {
            selectedTerm.classList.remove('selected');
            selectedDefinition.classList.remove('selected');
            selectedTerm.classList.add('matched');
            selectedDefinition.classList.add('matched');
            feedbackEl.textContent = "Correct Match!";
            feedbackEl.className = "activity-feedback success";
            
            matchedCount++;
            if (matchedCount === data.length) {
                feedbackEl.textContent = "Congratulations! You matched all terms.";
                awardXP(100, "Matching Game Mastery");
                resetBtn.style.display = 'inline-block';
            }
        } else {
            feedbackEl.textContent = "Incorrect match, try again.";
            feedbackEl.className = "activity-feedback error";
            setTimeout(() => {
                if(selectedTerm) selectedTerm.classList.remove('selected');
                if(selectedDefinition) selectedDefinition.classList.remove('selected');
                selectedTerm = null;
                selectedDefinition = null;
                feedbackEl.textContent = "";
            }, 1000);
            return;
        }
        selectedTerm = null;
        selectedDefinition = null;
    }
}

// 2. True/False Game
function renderTrueFalse(container, data, feedbackEl, resetBtn) {
    tfCurrentIndex = 0;
    tfCorrectCount = 0;
    container.innerHTML = `
        <div class="tf-container">
            <div class="tf-card" id="tf-card"></div>
            <div class="tf-controls">
                <button class="tf-btn true-btn" id="tf-true">True</button>
                <button class="tf-btn false-btn" id="tf-false">False</button>
            </div>
        </div>
    `;
    document.getElementById('tf-true').addEventListener('click', () => handleTfAnswer(true, data, container, feedbackEl, resetBtn));
    document.getElementById('tf-false').addEventListener('click', () => handleTfAnswer(false, data, container, feedbackEl, resetBtn));
    loadTfQuestion(data);
}

function loadTfQuestion(data) {
    document.getElementById('tf-card').textContent = data[tfCurrentIndex].statement;
}

function handleTfAnswer(answer, data, container, feedbackEl, resetBtn) {
    const isCorrect = data[tfCurrentIndex].isTrue === answer;
    if (isCorrect) {
        tfCorrectCount++;
        feedbackEl.textContent = "Correct!";
        feedbackEl.className = "activity-feedback success";
    } else {
        feedbackEl.textContent = "Incorrect!";
        feedbackEl.className = "activity-feedback error";
    }
    setTimeout(() => {
        feedbackEl.textContent = "";
        tfCurrentIndex++;
        if (tfCurrentIndex < data.length) {
            loadTfQuestion(data);
        } else {
            container.innerHTML = `<div class="tf-card" style="flex-direction: column;"><h3>Complete!</h3><p>Score: ${tfCorrectCount}/${data.length}</p></div>`;
            if (tfCorrectCount === data.length) awardXP(100, "Perfect True/False Run");
            else awardXP(50, "Activity Completed");
            resetBtn.style.display = 'inline-block';
        }
    }, 1000);
}

// 3. Sorting Game
function renderSorting(container, data, feedbackEl, resetBtn) {
    sortCorrectCount = 0;
    let bucketsHtml = '';
    data.categories.forEach(cat => {
        bucketsHtml += `<div class="sort-bucket" data-category="${cat}"><h4>${cat}</h4></div>`;
    });
    container.innerHTML = `
        <div class="sorting-container">
            <div class="sorting-buckets" id="sorting-buckets">${bucketsHtml}</div>
            <div class="sort-items-pool" id="sort-items-pool"></div>
        </div>
    `;
    const pool = document.getElementById('sort-items-pool');
    const shuffledItems = [...data.items].sort(() => Math.random() - 0.5);
    shuffledItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'sortable-item';
        div.draggable = true;
        div.textContent = item.text;
        div.dataset.category = item.category;
        div.id = 'sort-item-' + index;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', div.id);
            setTimeout(() => div.style.opacity = '0.5', 0);
        });
        div.addEventListener('dragend', () => div.style.opacity = '1');
        pool.appendChild(div);
    });
    const buckets = document.querySelectorAll('.sort-bucket');
    buckets.forEach(bucket => {
        bucket.addEventListener('dragover', e => { e.preventDefault(); bucket.classList.add('drag-over'); });
        bucket.addEventListener('dragleave', () => bucket.classList.remove('drag-over'));
        bucket.addEventListener('drop', e => {
            e.preventDefault();
            bucket.classList.remove('drag-over');
            const id = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(id);
            if (draggable.dataset.category === bucket.dataset.category) {
                draggable.draggable = false;
                draggable.classList.add('correct');
                bucket.appendChild(draggable);
                feedbackEl.textContent = "Correct!";
                feedbackEl.className = "activity-feedback success";
                sortCorrectCount++;
                if (sortCorrectCount === data.items.length) {
                    setTimeout(() => {
                        feedbackEl.textContent = "All items sorted correctly!";
                        awardXP(100, "Sorting Master");
                        resetBtn.style.display = 'inline-block';
                    }, 500);
                }
            } else {
                feedbackEl.textContent = "Incorrect category!";
                feedbackEl.className = "activity-feedback error";
            }
            setTimeout(() => { if (feedbackEl.textContent !== "All items sorted correctly!") feedbackEl.textContent = ""; }, 1000);
        });
    });
}

// 4. Ordering Game
function renderOrdering(container, data, feedbackEl, resetBtn) {
    container.innerHTML = `<div class="ordering-container" id="ordering-container"></div><button class="btn primary-btn order-check-btn" id="check-order">Check Sequence</button>`;
    const orderContainer = document.getElementById('ordering-container');
    const shuffledItems = [...data.items].sort(() => Math.random() - 0.5);
    shuffledItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'order-item';
        div.draggable = true;
        div.dataset.id = item.id;
        div.innerHTML = `<span class="order-handle">☰</span><span class="order-text">${item.text}</span>`;
        div.addEventListener('dragstart', () => div.classList.add('dragging'));
        div.addEventListener('dragend', () => div.classList.remove('dragging'));
        orderContainer.appendChild(div);
    });
    orderContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(orderContainer, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) orderContainer.appendChild(draggable);
        else orderContainer.insertBefore(draggable, afterElement);
    });
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.order-item:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) return { offset: offset, element: child };
            else return closest;
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    document.getElementById('check-order').addEventListener('click', () => {
        const currentOrder = [...orderContainer.querySelectorAll('.order-item')].map(el => el.dataset.id);
        const correctOrder = data.correctOrderIds;
        let isCorrect = true;
        for(let i = 0; i < currentOrder.length; i++) {
            if(currentOrder[i] !== correctOrder[i].toString()) { isCorrect = false; break; }
        }
        if (isCorrect) {
            feedbackEl.textContent = "Correct Sequence!";
            feedbackEl.className = "activity-feedback success";
            orderContainer.querySelectorAll('.order-item').forEach(el => el.classList.add('correct'));
            awardXP(100, "Sequence Master");
            resetBtn.style.display = 'inline-block';
        } else {
            feedbackEl.textContent = "Incorrect sequence. Try again!";
            feedbackEl.className = "activity-feedback error";
            setTimeout(() => { feedbackEl.textContent = ""; }, 2000);
        }
    });
}

// 5. Fill in the Blank Game
function renderFillInBlank(container, data, feedbackEl, resetBtn) {
    container.innerHTML = `<div class="fib-container"><div class="fib-sentence" id="fib-sentence"></div></div>`;
    const sentenceContainer = document.getElementById('fib-sentence');
    const parts = data.sentence.split('___');
    sentenceContainer.innerHTML = `${parts[0]}<input type="text" class="fib-input" id="fib-input" autocomplete="off" spellcheck="false" />${parts[1] || ''}`;
    const inputEl = document.getElementById('fib-input');
    inputEl.focus();
    inputEl.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const answer = inputEl.value.trim().toLowerCase();
            const correctAnswers = data.answers.map(a => a.toLowerCase());
            if (correctAnswers.includes(answer)) {
                inputEl.classList.add('correct');
                inputEl.readOnly = true;
                feedbackEl.textContent = "Correct!";
                feedbackEl.className = "activity-feedback success";
                awardXP(100, "Quick Recall Bonus");
                resetBtn.style.display = 'inline-block';
            } else {
                inputEl.classList.add('incorrect');
                feedbackEl.textContent = "Incorrect. Try again!";
                feedbackEl.className = "activity-feedback error";
                setTimeout(() => {
                    inputEl.classList.remove('incorrect');
                    inputEl.value = '';
                    feedbackEl.textContent = "";
                    inputEl.focus();
                }, 1000);
            }
        }
    });
}

// --- Quiz Logic ---
function initQuiz() {
    if (!currentObjective || !currentObjective.quiz) return;
    currentQuestionIndex = 0;
    quizScore = 0;
    const restartBtn = document.getElementById('restart-quiz');
    const newRestartBtn = restartBtn.cloneNode(true);
    restartBtn.parentNode.replaceChild(newRestartBtn, restartBtn);
    newRestartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        quizScore = 0;
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('quiz-question-container').style.display = 'block';
        loadQuestion();
    });
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-question-container').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const explanationContainer = document.getElementById('explanation-container');
    
    explanationContainer.style.display = 'none';
    const qData = currentObjective.quiz[currentQuestionIndex];
    questionEl.textContent = `Question ${currentQuestionIndex + 1} of ${currentObjective.quiz.length}: ${qData.question}`;
    optionsEl.innerHTML = '';
    
    qData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.addEventListener('click', () => handleAnswer(index, btn));
        optionsEl.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btnElement) {
    const qData = currentObjective.quiz[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const explanationContainer = document.getElementById('explanation-container');
    const explanationText = document.getElementById('quiz-explanation');

    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (selectedIndex === qData.correctIndex) {
        btnElement.classList.add('correct');
        quizScore++;
        awardXP(50, "Correct Quiz Answer");
    } else {
        btnElement.classList.add('incorrect');
        options[qData.correctIndex].classList.add('correct');
    }

    // Show Explanation
    explanationText.textContent = qData.explanation || "No explanation available.";
    explanationContainer.style.display = 'block';
}

function showQuizResults() {
    document.getElementById('quiz-question-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    document.getElementById('score').textContent = quizScore;
    document.getElementById('total-questions').textContent = currentObjective.quiz.length;
    
    if (quizScore === currentObjective.quiz.length) {
        awardXP(200, "Perfect Quiz Bonus!");
    }
}
