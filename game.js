// ============================================================
// STATE
// ============================================================
const state = {
    screen: 'home',
    questionCount: 5,
    questions: [],
    currentIndex: 0,
    answers: [],
    results: [],
    message: '',
    messageKind: '',
    progress: loadProgress(),        // ← loaded from localStorage
    recordedThisQuestion: false,      // ← prevents duplicate recording on repeated Check
    searchQuery: '' 
  };
  
  // ============================================================
  // LOGIC
  // ============================================================
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  function prepareQuestion(q) {
    return {
      english: q.english,
      slots: q.slots.map(slot => {
        if (slot.type === 'fixed') return { ...slot };
        return { ...slot, options: shuffle(slot.options) };
      })
    };
  }
  
  function randomWrongOption(slot) {
    const wrongs = slot.options.filter(o => o !== slot.answer);
    if (wrongs.length === 0) return slot.options[0];
    return wrongs[Math.floor(Math.random() * wrongs.length)];
  }
  
  function startGame(count) {
    state.questionCount = count;
    const picked = shuffle(QUESTIONS).slice(0, count);
    state.questions = picked.map(prepareQuestion);
    state.currentIndex = 0;
    initAnswers();
    state.message = '';
    state.messageKind = '';
    state.screen = 'game';
    render();
  }
  
  function initAnswers() {
    const q = state.questions[state.currentIndex];
    state.answers = q.slots.map(slot =>
      slot.type === 'fixed' ? slot.answer : randomWrongOption(slot)
    );
    state.results = q.slots.map(() => null);
    state.recordedThisQuestion = false;
  }
  
  function changeSlot(slotIndex, delta) {
    const q = state.questions[state.currentIndex];
    const slot = q.slots[slotIndex];
    if (slot.type === 'fixed') return;
  
    const n = slot.options.length;
    if (n === 0) return;
  
    const currentIdx = slot.options.indexOf(state.answers[slotIndex]);
    const newIdx = ((currentIdx + delta) % n + n) % n;
  
    state.answers[slotIndex] = slot.options[newIdx];
    state.results[slotIndex] = null;
    state.message = '';
    state.messageKind = '';
    render();
  }
  
  function isCurrentQuestionCorrect() {
    return state.results.length > 0 &&
           state.results.every(r => r === 'correct');
  }
  
  function checkAnswers() {
    const q = state.questions[state.currentIndex];
    let allCorrect = true;
  
    state.results = q.slots.map((slot, i) => {
      if (slot.type === 'fixed') return 'correct';
      if (state.answers[i] === slot.answer) return 'correct';
      allCorrect = false;
      return 'wrong';
    });
  
    // Record the FIRST check per question only. Subsequent checks after
    // the player fixes mistakes don't count — we want to know what they
    // knew on the first try.
    if (!state.recordedThisQuestion) {
      q.slots.forEach((slot, i) => {
        if (slot.type === 'fixed') return;
        recordAnswer(state.answers[i], state.results[i] === 'correct');
      });
      state.recordedThisQuestion = true;
    }
  
    if (allCorrect) {
      state.message = 'Correct! Click Next or press Enter.';
      state.messageKind = 'success';
    } else {
      state.message = 'Some slots are wrong. Try again!';
      state.messageKind = 'error';
    }
    render();
  }
  
  function nextQuestion() {
    if (!isCurrentQuestionCorrect()) return;
  
    if (state.currentIndex + 1 < state.questions.length) {
      state.currentIndex++;
      initAnswers();
      state.message = '';
      state.messageKind = '';
      render();
    } else {
      state.screen = 'finished';
      render();
    }
  }
  
  function goHome() {
    state.screen = 'home';
    state.message = '';
    state.messageKind = '';
    render();
  }
  
  function goToProgress() {
    state.screen = 'progress';
    render();
  }

  function goToSentences() {
    state.screen = 'sentences';
    state.searchQuery = '';
    render();
  }

  // Re-render only the sentence list, keeping the input focused.
function updateSentencesList() {
  const listEl = document.getElementById('sentences-list');
  if (!listEl) return;
  listEl.innerHTML = renderSentenceList();
}
  
  // ============================================================
  // EVENTS
  // ============================================================
  document.getElementById('app').addEventListener('click', (e) => {
    const slotEl = e.target.closest('.slot[data-slot]');
    if (slotEl) {
      const rect = slotEl.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const slotIndex = parseInt(slotEl.dataset.slot, 10);
      if (y > 180) return;
      changeSlot(slotIndex, y < 90 ? -1 : 1);
      return;
    }
  
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
  
    if (action === 'start') startGame(parseInt(btn.dataset.count, 10));
    else if (action === 'check') checkAnswers();
    else if (action === 'next') nextQuestion();
    else if (action === 'home') goHome();
    else if (action === 'progress') goToProgress();
    else if (action === 'sentences') goToSentences();
    else if (action === 'reset-progress') resetAllProgress();
  });
  
  document.getElementById('app').addEventListener('wheel', (e) => {
    const slotEl = e.target.closest('.slot[data-slot]');
    if (!slotEl) return;
    const rect = slotEl.getBoundingClientRect();
    if (e.clientY - rect.top > 180) return;
    e.preventDefault();
    const slotIndex = parseInt(slotEl.dataset.slot, 10);
    changeSlot(slotIndex, e.deltaY > 0 ? 1 : -1);
  }, { passive: false });

  // Search input — updates only the list, not the whole screen
document.addEventListener('input', (e) => {
  if (e.target && e.target.id === 'sentence-search') {
    state.searchQuery = e.target.value;
    updateSentencesList();
  }
});
  
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (state.screen !== 'game') return;
    if (!isCurrentQuestionCorrect()) return;
    e.preventDefault();
    nextQuestion();
  });
  
  // ============================================================
  // INITIAL RENDER
  // ============================================================
  render();