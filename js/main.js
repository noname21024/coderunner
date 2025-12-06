// Global Config
const SITE_URL = 'http://typingrunner.me/';

// Global State
const state = {
    status: 'IDLE', // IDLE, PLAYING, PAUSED, FINISHED
    snippet: null,
    contentType: 'code',
    selectedLanguage: 'JavaScript',
    selectedLessonId: null,
    gameMode: 'STANDARD', // STANDARD, SUDDEN_DEATH, TIME_ATTACK
    timeLimit: 60,
    timeLeft: 60,
    input: '',
    startTime: null,
    elapsedTime: 0,
    combo: 0,
    maxCombo: 0,
    soundEnabled: JSON.parse(localStorage.getItem('soundEnabled') ?? 'true'),
    userName: localStorage.getItem('cr_username') || 'Guest',
    timerInterval: null,
    dailyMockData: [],
    lastResult: null
};

// Aggregate Lessons
const STATIC_LESSONS = [
    ...(window.LESSONS_PART_1 || []),
    ...(window.LESSONS_PART_2 || []),
    ...(window.LESSONS_PART_3 || [])
];


// DOM Elements
const els = {
    spotlight: document.getElementById('spotlight'),
    btnTypeCode: document.getElementById('btn-type-code'),
    btnTypeText: document.getElementById('btn-type-text'),
    btnModeStandard: document.getElementById('btn-mode-standard'),
    btnModeSudden: document.getElementById('btn-mode-sudden'),
    btnModeTime: document.getElementById('btn-mode-time'),
    languageSelect: document.getElementById('language-select'),
    timeSelect: document.getElementById('time-select'),
    lessonTitle: document.getElementById('lesson-title'),
    timerDisplay: document.getElementById('timer-display'),
    wpmDisplay: document.getElementById('wpm-display'),
    accDisplay: document.getElementById('acc-display'),
    comboDisplay: document.getElementById('combo-display'),
    comboContainer: document.getElementById('combo-container'),
    btnSound: document.getElementById('btn-sound'),
    btnPause: document.getElementById('btn-pause'),
    langBadge: document.getElementById('lang-badge'),
    btnRestart: document.getElementById('btn-restart'),
    hiddenInput: document.getElementById('hidden-input'),
    codeDisplay: document.getElementById('code-display'),
    codeContent: document.getElementById('code-content'),
    gutter: document.getElementById('gutter'),
    cursor: document.getElementById('cursor'),
    startPrompt: document.getElementById('start-prompt'),
    pausedOverlay: document.getElementById('paused-overlay'),
    resultsScreen: document.getElementById('results-screen'),
    resWpm: document.getElementById('res-wpm'),
    resAcc: document.getElementById('res-acc'),
    resTime: document.getElementById('res-time'),
    resErrors: document.getElementById('res-errors'),
    btnResRestart: document.getElementById('btn-res-restart'),
    lessonList: document.getElementById('lesson-list'),
    leaderboardList: document.getElementById('leaderboard-list'),
    usernameInput: document.getElementById('username-input'),
    gameControls: document.getElementById('game-controls'),
    liveStats: document.getElementById('live-stats'),
    typingContainer: document.getElementById('typing-container'),
    gameTitleArea: document.getElementById('game-title-area'),
    editorWrapper: document.getElementById('editor-wrapper'),
    shareFeedback: document.getElementById('share-feedback'),
    btnSharePreview: document.getElementById('btn-share-preview'),
    shareModal: document.getElementById('share-modal'),
    shareModalOverlay: document.querySelector('#share-modal .share-modal-overlay'),
    btnCloseShare: document.getElementById('btn-close-share'),
    shareModalWpm: document.getElementById('share-modal-wpm'),
    shareModalAccuracy: document.getElementById('share-modal-accuracy'),
    shareModalLanguage: document.getElementById('share-modal-language'),
    shareModalMode: document.getElementById('share-modal-mode'),
    shareModalDuration: document.getElementById('share-modal-duration'),
    shareModalCaption: document.getElementById('share-modal-caption'),
    shareModalFeedback: document.getElementById('share-modal-feedback'),
    btnShareCopy: document.getElementById('btn-share-copy'),
    btnShareOpen: document.getElementById('btn-share-open'),
    modeBanner: document.getElementById('mode-banner'),
    modeBannerLabel: document.getElementById('mode-banner-label'),
    modeBannerCopy: document.getElementById('mode-banner-copy'),
    modeBannerChip: document.getElementById('mode-banner-chip')
};

// Audio Context
let audioCtx = null;
let shareFeedbackTimeout = null;
let shareModalFeedbackTimeout = null;

function initAudio() {
    if (state.soundEnabled && !audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(isError = false) {
    if (!state.soundEnabled || !audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (isError) {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(50, t + 0.1);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
    } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.05);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    }

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.1);
}

function ensureViewable(el, offset = 96) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const above = rect.top < offset;
    const below = rect.bottom > viewportHeight - offset;

    if (above || below) {
        const target = Math.max(window.scrollY + rect.top - offset, 0);
        window.scrollTo({ top: target, behavior: 'smooth' });
    }
}

function sanitizeLocalScores(scores) {
    const MAX_WPM = 220;
    const MIN_WPM = 5;
    const MAX_ACC = 100;
    const cleaned = scores.filter(entry => {
        const wpm = Number(entry?.wpm ?? 0);
        const acc = Number(entry?.accuracy ?? 0);
        return Number.isFinite(wpm) && Number.isFinite(acc) && wpm >= MIN_WPM && wpm <= MAX_WPM && acc >= 0 && acc <= MAX_ACC;
    });

    if (cleaned.length !== scores.length) {
        localStorage.setItem('cr_scores', JSON.stringify(cleaned));
    }

    return cleaned;
}

function showShareFeedback(message, isError = false) {
    if (!els.shareFeedback) return;
    els.shareFeedback.textContent = message;
    els.shareFeedback.classList.remove('opacity-0');
    els.shareFeedback.classList.remove('text-red-400', 'text-emerald-400');
    els.shareFeedback.classList.add(isError ? 'text-red-400' : 'text-emerald-400');
    clearTimeout(shareFeedbackTimeout);
    shareFeedbackTimeout = setTimeout(() => {
        els.shareFeedback.classList.add('opacity-0');
    }, 2600);
}

function isShareModalOpen() {
    return !!(els.shareModal && !els.shareModal.classList.contains('hidden'));
}

function getShareSnapshot() {
    if (state.lastResult) {
        return { ...state.lastResult, isDefault: false };
    }
    return {
        wpm: 0,
        accuracy: 100,
        language: state.selectedLanguage || 'JavaScript',
        mode: state.gameMode || 'STANDARD',
        timeLimit: state.timeLimit || 60,
        isDefault: true
    };
}

function getReadableMode(mode) {
    switch (mode) {
        case 'SUDDEN_DEATH':
            return 'Sudden Death';
        case 'TIME_ATTACK':
            return 'Time Attack';
        default:
            return 'Standard';
    }
}

function getShareMessage(snapshot = getShareSnapshot()) {
    if (!snapshot || snapshot.wpm <= 0) {
        return 'Check out typingrunner - The ultimate developer typing test!';
    }
    return `I just hit ${snapshot.wpm} WPM with ${snapshot.accuracy}% accuracy typing ${snapshot.language} on typingrunner!`;
}

const MODE_THEME = {
    STANDARD: {
        label: 'Standard mode',
        chip: 'Standard',
        copy: 'Play steadily and finish the snippet.'
    },
    SUDDEN_DEATH: {
        label: 'Sudden death',
        chip: 'Sudden',
        copy: 'One mistake ends the run. Every keystroke counts.'
    },
    TIME_ATTACK: {
        label: 'Time attack',
        chip: 'Time attack',
        copy: 'Chain accurate inputs to earn bonus seconds.'
    }
};

function applyModeTheme() {
    const theme = MODE_THEME[state.gameMode] || MODE_THEME.STANDARD;
    if (document && document.body) {
        document.body.dataset.mode = state.gameMode || 'STANDARD';
    }

    if (els.modeBannerLabel) els.modeBannerLabel.textContent = theme.label;
    if (els.modeBannerCopy) els.modeBannerCopy.textContent = theme.copy;
    if (els.modeBannerChip) els.modeBannerChip.textContent = theme.chip;
}

function updateShareModalContent() {
    if (!els.shareModal) return;
    const snapshot = getShareSnapshot();
    const caption = snapshot.wpm > 0
        ? `${getShareMessage(snapshot)} Can you beat it?`
        : 'Finish a run to generate a personalized highlight.';

    if (els.shareModalWpm) els.shareModalWpm.textContent = `${snapshot.wpm} WPM`;
    if (els.shareModalAccuracy) els.shareModalAccuracy.textContent = `${snapshot.accuracy}%`;
    if (els.shareModalLanguage) els.shareModalLanguage.textContent = snapshot.language;
    if (els.shareModalMode) els.shareModalMode.textContent = getReadableMode(snapshot.mode);
    if (els.shareModalDuration) els.shareModalDuration.textContent = `${snapshot.timeLimit || 60}s`;
    if (els.shareModalCaption) els.shareModalCaption.textContent = caption;
    hideShareModalFeedback();
}

function openShareModal() {
    if (!els.shareModal) return;
    updateShareModalContent();
    els.shareModal.classList.remove('hidden');
    els.shareModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
}

function closeShareModal() {
    if (!els.shareModal) return;
    els.shareModal.classList.add('hidden');
    els.shareModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    hideShareModalFeedback();
}

function showShareModalFeedback(message, isError = false) {
    if (!els.shareModalFeedback) return;
    els.shareModalFeedback.textContent = message;
    els.shareModalFeedback.classList.remove('opacity-0');
    els.shareModalFeedback.classList.remove('text-emerald-400', 'text-red-400');
    els.shareModalFeedback.classList.add(isError ? 'text-red-400' : 'text-emerald-400');
    clearTimeout(shareModalFeedbackTimeout);
    shareModalFeedbackTimeout = setTimeout(() => {
        hideShareModalFeedback();
    }, 2500);
}

function hideShareModalFeedback() {
    if (!els.shareModalFeedback) return;
    els.shareModalFeedback.classList.add('opacity-0');
    clearTimeout(shareModalFeedbackTimeout);
}

function focusEditorIfIdle(triggerKey = '') {
    if (isShareModalOpen()) return false;
    if (!els.hiddenInput || els.hiddenInput.disabled) return false;
    if (state.status === 'FINISHED' || state.status === 'PAUSED') return false;

    const activeEl = document.activeElement;
    if (activeEl === els.hiddenInput) return false;
    const interactiveTags = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];
    if (activeEl && (interactiveTags.includes(activeEl.tagName) || activeEl.isContentEditable)) {
        return false;
    }

    const ignoredKeys = ['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Escape', 'Tab'];
    if (ignoredKeys.includes(triggerKey)) return false;

    els.hiddenInput.focus({ preventScroll: true });
    return true;
}

// Onboarding
function runOnboarding() {
    try {
        if (localStorage.getItem('cr_onboard_seen')) return;
        if (!window.introJs) return;

        const steps = [
            {
                element: '#game-controls',
                title: 'Pick your setup',
                intro: 'Choose code/text, mode, time, and language before you start typing.'
            },
            {
                element: '#typing-container',
                title: 'Just start typing',
                intro: 'Click the code area and type; the timer starts automatically and tracks WPM/accuracy.'
            },
            {
                element: 'footer',
                title: 'Share or replay',
                intro: 'Share your run, copy the link, or restart to climb your leaderboard.'
            }
        ];

        const tour = window.introJs();
        tour.setOptions({
            steps,
            showProgress: true,
            nextLabel: 'Next',
            prevLabel: 'Back',
            skipLabel: '✕',
            doneLabel: 'Done',
            hidePrev: true,
            scrollTo: true,
            scrollToElement: true,
            scrollPadding: 120
        });

        const markSeen = () => localStorage.setItem('cr_onboard_seen', '1');
        // Also hide tooltip on first user click or escape for convenience
        tour.onbeforeexit(markSeen);
        tour.oncomplete(markSeen);
        tour.onexit(markSeen);
        tour.start();
    } catch (err) {
        console.error('Onboarding failed', err);
    }
}

// Spotlight Effect
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        els.spotlight.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99,102,241,0.06), transparent 40%)`;
    });
});

// Logic
function init() {
    updateLanguageOptions();
    loadContent();
    renderLeaderboard();
    setupEventListeners();
    runOnboarding();
}

function updateLanguageOptions() {
    const langs = LANGUAGES[state.contentType];
    els.languageSelect.innerHTML = langs.map(l => `<option value="${l}">${l}</option>`).join('');
    els.languageSelect.value = state.selectedLanguage;
}

function loadContent() {
    state.status = 'IDLE';
    state.input = '';
    state.combo = 0;
    state.elapsedTime = 0;
    state.startTime = null;
    clearInterval(state.timerInterval);

    // Find lesson
    let lesson = STATIC_LESSONS.find(l => l.id === state.selectedLessonId);
    if (!lesson || lesson.language !== state.selectedLanguage || lesson.type !== state.contentType) {
        lesson = STATIC_LESSONS.find(l => l.language === state.selectedLanguage && l.type === state.contentType);
    }
    if (!lesson) lesson = STATIC_LESSONS.find(l => l.type === state.contentType);

    let templateSourceId = null;
    if (lesson && lesson.id.startsWith('gen-')) {
        templateSourceId = lesson.id;
        if (lesson.type === 'text') {
            const wordCount = lesson.id.includes('100') ? 100 : (lesson.id.includes('50') ? 50 : 60);
            lesson = generateLesson(lesson.language, state.gameMode, { type: 'text', wordCount });
        } else {
            lesson = generateLesson(lesson.language, state.gameMode, { type: 'code' });
        }
    } else if (!lesson) {
        templateSourceId = `gen-${state.selectedLanguage}-fallback`;
        lesson = generateLesson(
            state.selectedLanguage,
            state.gameMode,
            {
                type: state.contentType === 'text' ? 'text' : 'code',
                wordCount: state.contentType === 'text' ? 60 : undefined
            }
        );
    }

    if (lesson) {
        state.snippet = lesson;
        state.selectedLessonId = templateSourceId || lesson.id;

        state.selectedLanguage = lesson.language;
        state.contentType = lesson.type;
        state.timeLimit = lesson.timeLimit;
        state.timeLeft = lesson.timeLimit;

        // Update UI
        els.lessonTitle.textContent = lesson.title;
        els.langBadge.textContent = lesson.language;
        els.timerDisplay.textContent = Math.floor(state.timeLeft) + 's';
        els.languageSelect.value = state.selectedLanguage;
        els.timeSelect.value = state.timeLimit;

        // Render Code
        renderCode();
        renderLessonList();
        updateStatsUI();

        // Reset UI states
        els.resultsScreen.classList.add('hidden');
        els.resultsScreen.classList.remove('flex');
        els.typingContainer.classList.remove('hidden');
        els.gameControls.classList.remove('opacity-0', 'pointer-events-none');
        els.gameTitleArea.classList.remove('opacity-0', 'translate-y-[-20px]');
        els.startPrompt.classList.remove('hidden');
        els.pausedOverlay.classList.add('hidden');
        els.pausedOverlay.classList.remove('flex');
        els.lessonList.classList.remove('opacity-0', 'pointer-events-none');
        document.getElementById('left-aside').classList.remove('opacity-0');
        document.getElementById('right-aside').classList.remove('opacity-0');
        els.hiddenInput.disabled = false;
        els.hiddenInput.value = '';
        els.hiddenInput.focus();

        // Reset Pause Button
        els.btnPause.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i>';
        els.btnPause.disabled = true;
        applyModeTheme();
        lucide.createIcons();
        if (state.status === 'IDLE') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            ensureViewable(els.typingContainer);
        }
    }
}

function renderCode() {
    const code = state.snippet.code;
    const lines = code.split('\n');

    // Gutter
    els.gutter.innerHTML = lines.map((_, i) => `<div class="pr-3 leading-relaxed">${i + 1}</div>`).join('');

    // Content
    els.codeContent.innerHTML = '';
    // Re-add cursor
    els.codeContent.appendChild(els.cursor);

    // Create spans
    const fragment = document.createDocumentFragment();
    code.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'text-zinc-600 transition-colors duration-200';
        span.dataset.index = i;
        fragment.appendChild(span);
    });
    els.codeContent.appendChild(fragment);

    updateCursor(0);
}

function updateCursor(index) {
    const spans = els.codeContent.querySelectorAll('span[data-index]');
    const span = spans[index];

    if (span) {
        els.cursor.style.display = 'block';
        els.cursor.style.top = span.offsetTop + 'px';
        els.cursor.style.left = span.offsetLeft + 'px';

        // Scroll if needed
        const container = els.codeDisplay;
        const cursorY = span.offsetTop;
        const targetScroll = Math.max(0, cursorY - (container.clientHeight / 2) + 24);
        container.scrollTo({ top: targetScroll, behavior: 'smooth' });
    } else if (index >= state.snippet.code.length) {
        // End of code
        const lastSpan = spans[spans.length - 1];
        if (lastSpan) {
            els.cursor.style.top = lastSpan.offsetTop + 'px';
            els.cursor.style.left = (lastSpan.offsetLeft + lastSpan.offsetWidth) + 'px';
        }
    }
}

function startGame() {
    state.status = 'PLAYING';
    state.startTime = Date.now();
    initAudio();

    ensureViewable(els.typingContainer);

    els.startPrompt.classList.add('hidden');
    els.gameControls.classList.add('opacity-0', 'pointer-events-none');
    els.gameTitleArea.classList.add('opacity-0', 'translate-y-[-20px]');
    els.lessonList.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('left-aside').classList.add('opacity-0');
    document.getElementById('right-aside').classList.add('opacity-0');

    els.btnPause.disabled = false;

    state.timerInterval = setInterval(() => {
        const now = Date.now();
        const delta = (now - state.startTime) / 1000;
        state.elapsedTime = delta;

        if (state.gameMode !== 'TIME_ATTACK') {
            state.timeLeft = Math.max(0, state.timeLimit - delta);
            if (state.timeLeft <= 0) finishGame();
        } else {
            // Time attack logic handled in input
            state.timeLeft -= 1; // Rough decrement
            if (state.timeLeft <= 0) finishGame();
        }

        els.timerDisplay.textContent = Math.floor(state.timeLeft) + 's';
        if (state.timeLeft < 10) els.timerDisplay.classList.add('text-red-400');
        else els.timerDisplay.classList.remove('text-red-400');

        updateStatsUI();
    }, 1000);
}

function handleInput(e) {
    if (state.status === 'FINISHED' || state.status === 'PAUSED') return;

    const val = els.hiddenInput.value;

    if (state.status === 'IDLE') {
        startGame();
        ensureViewable(els.typingContainer);
        setTimeout(() => els.hiddenInput.focus(), 50);
    }

    // Handle backspace or typing
    if (val.length > state.input.length) {
        const charIndex = val.length - 1;
        const typedChar = val[charIndex];
        const expectedChar = state.snippet.code[charIndex];

        if (typedChar === expectedChar) {
            playSound(false);
            state.combo++;
            if (state.combo > state.maxCombo) state.maxCombo = state.combo;

            if (state.gameMode === 'TIME_ATTACK') {
                state.timeLeft = Math.min(state.timeLeft + 0.5, 120);
            }
        } else {
            playSound(true);
            state.combo = 0;
            if (state.gameMode === 'SUDDEN_DEATH') {
                state.input = val;
                finishGame();
                return;
            }
        }
    } else {
        playSound(false); // Backspace sound
    }

    state.input = val;

    // Update UI
    const spans = els.codeContent.querySelectorAll('span[data-index]');
    spans.forEach((span, i) => {
        if (i < state.input.length) {
            if (state.input[i] === state.snippet.code[i]) {
                span.className = 'text-zinc-100';
            } else {
                span.className = 'text-red-400 bg-red-500/10 rounded-sm';
            }
        } else {
            span.className = 'text-zinc-600 transition-colors duration-200';
        }
    });

    updateCursor(state.input.length);
    updateStatsUI();

    // Combo UI
    els.comboDisplay.textContent = state.combo + 'x';
    if (state.combo > 5) {
        els.comboContainer.classList.remove('opacity-50', 'scale-100');
        els.comboContainer.classList.add('opacity-100', 'scale-110');
    } else {
        els.comboContainer.classList.add('opacity-50', 'scale-100');
        els.comboContainer.classList.remove('opacity-100', 'scale-110');
    }

    // Check finish
    if (state.input.length === state.snippet.code.length) {
        finishGame();
    }
}

function updateStatsUI() {
    const stats = calculateStats();
    els.wpmDisplay.textContent = Math.round(stats.wpm);
    els.accDisplay.textContent = Math.round(stats.accuracy) + '%';
}

function calculateStats() {
    if (!state.snippet) return { wpm: 0, accuracy: 0 };

    let correct = 0;
    let errors = 0;
    for (let i = 0; i < state.input.length; i++) {
        if (state.input[i] === state.snippet.code[i]) correct++;
        else errors++;
    }

    // Calculate precise time
    let timeMins;
    if (state.status === 'PLAYING' && state.startTime) {
        const currentElapsed = (Date.now() - state.startTime) / 1000;
        timeMins = Math.max(currentElapsed / 60, 0.0001);
    } else {
        timeMins = Math.max(state.elapsedTime / 60, 0.0001);
    }

    const netWpm = (correct / 5) / timeMins;
    const accuracy = state.input.length > 0 ? ((state.input.length - errors) / state.input.length) * 100 : 100;

    return {
        wpm: Math.max(0, netWpm),
        accuracy: Math.max(0, accuracy),
        errors,
        time: state.elapsedTime
    };
}

function finishGame() {
    if (state.startTime) {
        const finalElapsed = (Date.now() - state.startTime) / 1000;
        state.elapsedTime = Math.max(state.elapsedTime, finalElapsed);
    }

    state.status = 'FINISHED';
    clearInterval(state.timerInterval);
    els.hiddenInput.disabled = true;

    const stats = calculateStats();
    state.lastResult = {
        wpm: Math.round(stats.wpm),
        accuracy: Math.round(stats.accuracy),
        language: state.selectedLanguage,
        mode: state.gameMode,
        timeLimit: state.timeLimit
    };

    // Save score
    if (stats.wpm > 0) {
        const score = {
            id: Date.now().toString(),
            name: state.userName,
            wpm: Math.round(stats.wpm),
            accuracy: Math.round(stats.accuracy),
            language: state.selectedLanguage,
            mode: state.gameMode,
            date: new Date().toISOString()
        };

        const scores = JSON.parse(localStorage.getItem('cr_scores') || '[]');
        scores.push(score);
        scores.sort((a, b) => b.wpm - a.wpm);
        localStorage.setItem('cr_scores', JSON.stringify(scores.slice(0, 50)));
        renderLeaderboard();
    }

    // Show Results
    els.resWpm.textContent = Math.round(stats.wpm);
    els.resAcc.textContent = Math.round(stats.accuracy) + '%';
    els.resTime.textContent = Math.round(stats.time) + 's';
    els.resErrors.textContent = stats.errors;

    els.typingContainer.classList.add('hidden');
    els.resultsScreen.classList.remove('hidden');
    els.resultsScreen.classList.add('flex');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Restore UI elements visibility
    els.gameControls.classList.remove('opacity-0', 'pointer-events-none');
    els.gameTitleArea.classList.remove('opacity-0', 'translate-y-[-20px]');
    document.getElementById('left-aside').classList.remove('opacity-0');
    document.getElementById('right-aside').classList.remove('opacity-0');
}

function togglePause() {
    if (state.status === 'PLAYING') {
        state.status = 'PAUSED';
        clearInterval(state.timerInterval);
        els.hiddenInput.disabled = true;
        els.pausedOverlay.classList.remove('hidden');
        els.pausedOverlay.classList.add('flex');
        els.btnPause.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i>';

        // Show UI elements
        els.gameControls.classList.remove('opacity-0', 'pointer-events-none');
        els.gameTitleArea.classList.remove('opacity-0', 'translate-y-[-20px]');
        els.lessonList.classList.remove('opacity-0', 'pointer-events-none');
        document.getElementById('left-aside').classList.remove('opacity-0');
        document.getElementById('right-aside').classList.remove('opacity-0');

        lucide.createIcons();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (state.status === 'PAUSED') {
        state.status = 'PLAYING';
        els.hiddenInput.disabled = false;
        els.hiddenInput.focus();
        els.pausedOverlay.classList.add('hidden');
        els.pausedOverlay.classList.remove('flex');
        els.btnPause.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i>';

        // Hide UI elements
        els.gameControls.classList.add('opacity-0', 'pointer-events-none');
        els.gameTitleArea.classList.add('opacity-0', 'translate-y-[-20px]');
        els.lessonList.classList.add('opacity-0', 'pointer-events-none');
        document.getElementById('left-aside').classList.add('opacity-0');
        document.getElementById('right-aside').classList.add('opacity-0');

        lucide.createIcons();
        ensureViewable(els.typingContainer);

        // Resume timer
        const now = Date.now();
        state.startTime = now - (state.elapsedTime * 1000);
        state.timerInterval = setInterval(() => {
            const currentNow = Date.now();
            const delta = (currentNow - state.startTime) / 1000;
            state.elapsedTime = delta;

            if (state.gameMode !== 'TIME_ATTACK') {
                state.timeLeft = Math.max(0, state.timeLimit - delta);
                if (state.timeLeft <= 0) finishGame();
            } else {
                state.timeLeft -= 1;
                if (state.timeLeft <= 0) finishGame();
            }

            els.timerDisplay.textContent = Math.floor(state.timeLeft) + 's';
            updateStatsUI();
        }, 1000);
    }
}

function renderLessonList() {
    const lessons = STATIC_LESSONS.filter(l => l.type === state.contentType && l.language === state.selectedLanguage);
    els.lessonList.innerHTML = lessons.map(l => {
        const charLabel = l.id.startsWith('gen-') ? 'dynamic' : `${l.code.length} chars`;
        return `
        <div class="group relative flex flex-col gap-2 rounded-xl border border-white/5 bg-zinc-900/40 p-4 transition-all hover:bg-zinc-800/60 hover:border-white/10 cursor-pointer ${l.id === state.selectedLessonId ? 'ring-1 ring-indigo-500/50 bg-zinc-800/60' : ''}" onclick="selectLesson('${l.id}')">
            <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-zinc-200">${l.title}</span>
                <span class="rounded bg-zinc-950 px-2 py-0.5 text-[10px] font-medium text-zinc-500 border border-white/5">${l.difficulty}</span>
            </div>
            <div class="flex items-center gap-4 text-xs text-zinc-500">
                <div class="flex items-center gap-1">
                    <i data-lucide="clock" class="w-3 h-3"></i>
                    <span>${l.timeLimit}s</span>
                </div>
                <div class="flex items-center gap-1">
                    <i data-lucide="align-left" class="w-3 h-3"></i>
                    <span>${charLabel}</span>
                </div>
            </div>
        </div>
    `; }).join('');
    lucide.createIcons();
}

window.selectLesson = (id) => {
    state.selectedLessonId = id;
    loadContent();
};

function getLocalScores() {
    const localScores = sanitizeLocalScores(JSON.parse(localStorage.getItem('cr_scores') || '[]'));
    return localScores.map(s => ({
        ...s,
        name: s.name || state.userName,
        isUser: true
    }));
}

function renderLeaderboard() {
    if (state.dailyMockData.length === 0) {
        state.dailyMockData = generateDailyLeaderboard();
    }

    const localScores = getLocalScores();
    const allScores = [...state.dailyMockData, ...localScores];
    allScores.sort((a, b) => b.wpm - a.wpm);

    els.leaderboardList.innerHTML = allScores.slice(0, 10).map((s, i) => `
        <div class="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-white/5 ${s.isUser ? 'bg-white/5 border border-white/5' : ''}">
            <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-bold text-zinc-600 w-4">${i + 1}</span>
                <div class="flex flex-col">
                    <span class="text-xs font-medium ${s.isUser ? 'text-indigo-300' : 'text-zinc-300'}">${s.name}</span>
                    <span class="text-[10px] text-zinc-500">${s.language || 'Unknown'}</span>
                </div>
            </div>
            <span class="font-mono text-sm font-bold text-indigo-400">${s.wpm}</span>
        </div>
    `).join('');
}

function setupEventListeners() {
    // Content Type
    els.btnTypeCode.onclick = () => {
        state.contentType = 'code';
        state.selectedLanguage = LANGUAGES.code[0];
        state.selectedLessonId = null;
        updateLanguageOptions();
        loadContent();
        updateTypeButtons();
    };
    els.btnTypeText.onclick = () => {
        state.contentType = 'text';
        state.selectedLanguage = LANGUAGES.text[0];
        state.selectedLessonId = null;
        updateLanguageOptions();
        loadContent();
        updateTypeButtons();
    };

    function updateTypeButtons() {
        if (state.contentType === 'code') {
            els.btnTypeCode.className = 'flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium bg-zinc-800 text-zinc-100 shadow-sm transition-all';
            els.btnTypeText.className = 'flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-all';
        } else {
            els.btnTypeText.className = 'flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium bg-zinc-800 text-zinc-100 shadow-sm transition-all';
            els.btnTypeCode.className = 'flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-all';
        }
        lucide.createIcons();
    }

    // Game Mode
    const modeBtns = {
        STANDARD: els.btnModeStandard,
        SUDDEN_DEATH: els.btnModeSudden,
        TIME_ATTACK: els.btnModeTime
    };

    Object.keys(modeBtns).forEach(mode => {
        modeBtns[mode].onclick = () => {
            state.gameMode = mode;
            // Reset styles
            Object.values(modeBtns).forEach(btn => {
                btn.className = 'flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-all';
            });
            // Active style
            const activeClass = mode === 'SUDDEN_DEATH' ? 'bg-red-900/30 text-red-200' : (mode === 'TIME_ATTACK' ? 'bg-amber-900/30 text-amber-200' : 'bg-zinc-800 text-zinc-100');
            modeBtns[mode].className = `flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium shadow-sm transition-all ${activeClass}`;

            loadContent();
        };
    });

    // Selects
    els.languageSelect.onchange = (e) => {
        state.selectedLanguage = e.target.value;
        state.selectedLessonId = null;
        loadContent();
    };

    els.timeSelect.onchange = (e) => {
        state.timeLimit = parseInt(e.target.value);
        state.timeLeft = state.timeLimit;
        els.timerDisplay.textContent = state.timeLeft + 's';
    };

    // Controls
    els.btnRestart.onclick = loadContent;
    els.btnResRestart.onclick = loadContent;
    els.btnPause.onclick = togglePause;

    els.btnSound.onclick = () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('soundEnabled', state.soundEnabled);
        els.btnSound.className = `rounded p-2 transition-colors ${state.soundEnabled ? 'text-indigo-400 bg-indigo-500/10' : 'text-zinc-600 hover:text-zinc-400'}`;
        els.btnSound.innerHTML = state.soundEnabled ? '<i data-lucide="volume-2" class="w-4 h-4"></i>' : '<i data-lucide="volume-x" class="w-4 h-4"></i>';
        lucide.createIcons();
    };

    // Share preview modal
    if (els.btnSharePreview) {
        els.btnSharePreview.onclick = () => openShareModal();
    }
    if (els.btnCloseShare) {
        els.btnCloseShare.onclick = () => closeShareModal();
    }
    if (els.shareModalOverlay) {
        els.shareModalOverlay.onclick = () => closeShareModal();
    }
    if (els.btnShareCopy) {
        els.btnShareCopy.onclick = () => {
            const message = getShareMessage();
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(message)
                    .then(() => showShareModalFeedback('Message copied'))
                    .catch(() => showShareModalFeedback('Unable to copy', true));
            } else {
                window.prompt('Copy this message and share it anywhere:', message);
            }
        };
    }
    if (els.btnShareOpen) {
        els.btnShareOpen.onclick = () => {
            closeShareModal();
            handleShare('native');
        };
    }

    // Input
    els.hiddenInput.addEventListener('input', handleInput);

    // Focus wrapper
    els.editorWrapper.onclick = () => {
        if (state.status !== 'FINISHED' && state.status !== 'PAUSED') {
            els.hiddenInput.focus();
        }
    };

    // Keyboard Logic
    const KEYBOARD_ROWS = [
        [
            { label: '`', code: 'Backquote' },
            { label: '1', code: 'Digit1' },
            { label: '2', code: 'Digit2' },
            { label: '3', code: 'Digit3' },
            { label: '4', code: 'Digit4' },
            { label: '5', code: 'Digit5' },
            { label: '6', code: 'Digit6' },
            { label: '7', code: 'Digit7' },
            { label: '8', code: 'Digit8' },
            { label: '9', code: 'Digit9' },
            { label: '0', code: 'Digit0' },
            { label: '-', code: 'Minus' },
            { label: '=', code: 'Equal' },
            { label: 'bksp', code: 'Backspace', width: 'w-16' },
        ],
        [
            { label: 'tab', code: 'Tab', width: 'w-14' },
            { label: 'q', code: 'KeyQ' },
            { label: 'w', code: 'KeyW' },
            { label: 'e', code: 'KeyE' },
            { label: 'r', code: 'KeyR' },
            { label: 't', code: 'KeyT' },
            { label: 'y', code: 'KeyY' },
            { label: 'u', code: 'KeyU' },
            { label: 'i', code: 'KeyI' },
            { label: 'o', code: 'KeyO' },
            { label: 'p', code: 'KeyP' },
            { label: '[', code: 'BracketLeft' },
            { label: ']', code: 'BracketRight' },
            { label: '\\', code: 'Backslash', width: 'w-12' },
        ],
        [
            { label: 'caps', code: 'CapsLock', width: 'w-16' },
            { label: 'a', code: 'KeyA' },
            { label: 's', code: 'KeyS' },
            { label: 'd', code: 'KeyD' },
            { label: 'f', code: 'KeyF' },
            { label: 'g', code: 'KeyG' },
            { label: 'h', code: 'KeyH' },
            { label: 'j', code: 'KeyJ' },
            { label: 'k', code: 'KeyK' },
            { label: 'l', code: 'KeyL' },
            { label: ';', code: 'Semicolon' },
            { label: "'", code: 'Quote' },
            { label: 'enter', code: 'Enter', width: 'w-[4.5rem]' },
        ],
        [
            { label: 'shift', code: 'ShiftLeft', width: 'w-20' },
            { label: 'z', code: 'KeyZ' },
            { label: 'x', code: 'KeyX' },
            { label: 'c', code: 'KeyC' },
            { label: 'v', code: 'KeyV' },
            { label: 'b', code: 'KeyB' },
            { label: 'n', code: 'KeyN' },
            { label: 'm', code: 'KeyM' },
            { label: ',', code: 'Comma' },
            { label: '.', code: 'Period' },
            { label: '/', code: 'Slash' },
            { label: 'shift', code: 'ShiftRight', width: 'w-20' },
        ],
        [
            { label: 'ctrl', code: 'ControlLeft', width: 'w-12' },
            { label: 'alt', code: 'AltLeft', width: 'w-12' },
            { label: 'cmd', code: 'MetaLeft', width: 'w-12' },
            { label: '', code: 'Space', width: 'w-64' },
            { label: 'cmd', code: 'MetaRight', width: 'w-12' },
            { label: 'alt', code: 'AltRight', width: 'w-12' },
            { label: 'fn', code: 'Fn', width: 'w-12' },
            { label: 'ctrl', code: 'ControlRight', width: 'w-12' },
        ]
    ];

    function renderKeyboard() {
        const keyboardContainer = document.getElementById('virtual-keyboard');
        if (!keyboardContainer) return;

        keyboardContainer.innerHTML = KEYBOARD_ROWS.map(row => `
            <div class="flex gap-1.5">
                ${row.map(key => `
                    <div id="key-${key.code}" class="flex h-10 items-center justify-center rounded-md border border-white/5 bg-zinc-900 text-zinc-500 shadow-sm text-xs font-medium transition-all duration-75 ${key.width || 'w-10'}">
                        ${key.label}
                    </div>
                `).join('')}
            </div>
        `).join('');
    }

    function highlightKey(code, isActive) {
        const keyEl = document.getElementById(`key-${code}`);
        if (keyEl) {
            if (isActive) {
                keyEl.className = keyEl.className.replace('border-white/5 bg-zinc-900 text-zinc-500 shadow-sm', 'border-indigo-500/50 bg-indigo-500/20 text-indigo-300 shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] translate-y-[1px]');
            } else {
                keyEl.className = keyEl.className.replace('border-indigo-500/50 bg-indigo-500/20 text-indigo-300 shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] translate-y-[1px]', 'border-white/5 bg-zinc-900 text-zinc-500 shadow-sm');
            }
        }
    }

    // Keyboard Listeners
    document.addEventListener('keydown', (e) => {
        if (isShareModalOpen()) {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeShareModal();
            }
            return;
        }

        highlightKey(e.code, true);

        const forcedFocus = focusEditorIfIdle(e.key);
        if (forcedFocus) {
            const isPrintable = e.key.length === 1;
            if (isPrintable || e.key === 'Enter' || e.key === 'Backspace') {
                e.preventDefault();
                if (isPrintable) {
                    els.hiddenInput.value += e.key;
                } else if (e.key === 'Enter') {
                    els.hiddenInput.value += '\n';
                } else if (e.key === 'Backspace') {
                    els.hiddenInput.value = els.hiddenInput.value.slice(0, -1);
                }
                handleInput();
                return;
            }
        }

        if (e.key === 'Escape') togglePause();
        if (e.key === 'Tab') {
            e.preventDefault();
            if (state.status === 'PLAYING') {
                const start = els.hiddenInput.selectionStart;
                const end = els.hiddenInput.selectionEnd;
                els.hiddenInput.value = els.hiddenInput.value.substring(0, start) + "  " + els.hiddenInput.value.substring(end);
                els.hiddenInput.selectionStart = els.hiddenInput.selectionEnd = start + 2;
                handleInput();
            }
        }
    });

    document.addEventListener('keyup', (e) => {
        if (isShareModalOpen()) return;
        highlightKey(e.code, false);
    });

    // Share Logic
    window.handleShare = (platform) => {
        const shareText = getShareMessage();
        const encodedUrl = encodeURIComponent(SITE_URL);
        const encodedText = encodeURIComponent(shareText);

        switch (platform) {
            case 'x':
                window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}&hashtags=typingrunner`, '_blank');
                showShareFeedback('Opening X to post your run');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
                showShareFeedback('Share it with your crew on Facebook');
                break;
            case 'copy':
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(SITE_URL)
                        .then(() => showShareFeedback('Link copied — tag #typingrunner'))
                        .catch(() => showShareFeedback('Unable to copy link', true));
                } else {
                    window.prompt('Copy this link and share it anywhere:', SITE_URL);
                }
                break;
            case 'native':
                if (navigator.share) {
                    navigator.share({
                        title: 'typingrunner',
                        text: shareText,
                        url: SITE_URL
                    }).then(() => {
                        showShareFeedback('Shared from your device!');
                    }).catch(() => {});
                } else if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(SITE_URL)
                        .then(() => showShareFeedback('Link copied — tag #typingrunner'))
                        .catch(() => showShareFeedback('Unable to copy link', true));
                } else {
                    window.prompt('Copy this link and share it anywhere:', SITE_URL);
                }
                break;
        }
    };

    // Username
    els.usernameInput.onchange = (e) => {
        state.userName = e.target.value;
        localStorage.setItem('cr_username', state.userName);
    };

    renderKeyboard();
}

// Start
init();
