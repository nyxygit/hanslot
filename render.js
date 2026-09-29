// ============================================================
// RENDER
// ============================================================
function render() {
  const app = document.getElementById('app');

  if (state.screen === 'home') {
    app.innerHTML = renderHome();
  } else if (state.screen === 'game') {
    app.innerHTML = renderGame();
  } else if (state.screen === 'sentences') {
    app.innerHTML = renderSentences();
  } else if (state.screen === 'progress') {
    app.innerHTML = renderProgress();
  } else if (state.screen === 'finished') {
    app.innerHTML = renderFinished();
  }
}

function renderHome() {
  const mastered = getMasteredCount();
  const total = getTotalWordCount();
  const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;

  return `
    <div class="centered-layout">
      <div class="screen">
        <h1>HanziSlot</h1>
        <p class="subtitle">Learn HSK 1 Chinese through slots</p>

        <div class="progress-card">
          <div class="progress-label">
            <span>HSK 1 Vocabulary</span>
            <span>${mastered} / ${total} mastered</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${pct}%"></div>
          </div>
          <div class="progress-percent">${pct}%</div>
        </div>

        <p class="prompt">How many questions?</p>
        <div class="buttons">
          <button data-action="start" data-count="5">5 Questions</button>
          <button data-action="start" data-count="10">10 Questions</button>
          <button data-action="start" data-count="20">20 Questions</button>
          <button class="secondary-btn" data-action="sentences">Browse Sentences</button>
          <button class="secondary-btn" data-action="progress">View Word Progress</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// SENTENCE BROWSER
// ============================================================
function getSentenceInfo(question) {
  const fullHanzi = [];
  const fullPinyin = [];
  const words = [];

  for (const slot of question.slots) {
    const hanzi = slot.answer;
    const info = WORD_DATA[hanzi];
    const pinyin = info ? info.pinyin : '';
    const english = info ? info.english : '';

    words.push({ hanzi, pinyin, english });
    fullHanzi.push(hanzi);
    if (pinyin) fullPinyin.push(pinyin);
  }

  return {
    fullHanzi: fullHanzi.join(''),
    fullPinyin: fullPinyin.join(' '),
    words
  };
}

function renderSentences() {
  const total = QUESTIONS.length;

  return `
    <div class="layout">
      <header class="header">
        <button class="back-btn" data-action="home">← Back</button>
        <span class="progress">Sentence Browser</span>
        <span class="sentence-count" id="sentence-count">${total} sentences</span>
      </header>
      <main class="main">
        <div class="screen">
          <input
            type="text"
            id="sentence-search"
            class="sentence-search"
            placeholder="Search by English, Chinese, or pinyin…"
            value="${escapeHtml(state.searchQuery)}"
            autocomplete="off"
          >
          <div id="sentences-list">${renderSentenceList()}</div>
        </div>
      </main>
    </div>
  `;
}

function renderSentenceList() {
  const q = state.searchQuery.trim().toLowerCase();

  const indexed = QUESTIONS.map((question, i) => ({ question, i }));

  const filtered = q
    ? indexed.filter(({ question }) => {
        if (question.english.toLowerCase().includes(q)) return true;
        const info = getSentenceInfo(question);
        if (info.fullHanzi.includes(state.searchQuery.trim())) return true;
        if (info.fullPinyin.toLowerCase().includes(q)) return true;
        return info.words.some(w =>
          w.hanzi.includes(state.searchQuery.trim()) ||
          w.pinyin.toLowerCase().includes(q) ||
          w.english.toLowerCase().includes(q)
        );
      })
    : indexed;

  if (filtered.length === 0) {
    return `<p class="empty-state">No sentences match "${escapeHtml(state.searchQuery)}".</p>`;
  }

  return filtered.map(({ question, i }) => renderSentenceCard(question, i)).join('');
}

function renderSentenceCard(question, index) {
  const info = getSentenceInfo(question);

  const chipsHtml = info.words.map(w => {
    if (!w.pinyin && !w.english) {
      // Punctuation — show hanzi inline without a chip
      return `<span class="word-punct">${w.hanzi}</span>`;
    }
    return `
      <div class="word-chip">
        <div class="chip-hanzi">${w.hanzi}</div>
        ${w.pinyin ? `<div class="chip-pinyin">${w.pinyin}</div>` : ''}
        ${w.english ? `<div class="chip-english">${w.english}</div>` : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="sentence-card">
      <div class="sentence-header">
        <span class="sentence-number">#${index + 1}</span>
        <span class="sentence-english">${escapeHtml(question.english)}</span>
      </div>
      <div class="sentence-hanzi">${info.fullHanzi}</div>
      <div class="sentence-pinyin">${info.fullPinyin}</div>
      <div class="word-chips">${chipsHtml}</div>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============================================================
// PROGRESS (unchanged)
// ============================================================
function renderProgress() {
  const entries = Object.entries(WORD_DATA);
  const mastered = getMasteredCount();
  const total = entries.length;
  const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;

  const sorted = entries.slice().sort((a, b) => {
    const pa = getProgressFor(a[0]);
    const pb = getProgressFor(b[0]);
    if (pb.correct !== pa.correct) return pb.correct - pa.correct;
    return a[1].pinyin.localeCompare(b[1].pinyin);
  });

  const cardsHtml = sorted.map(([hanzi, info]) => {
    const p = getProgressFor(hanzi);
    const cls = p.correct >= MASTERY_THRESHOLD ? 'mastered'
              : p.correct > 0 ? 'learning'
              : 'unseen';
    return `
      <div class="word-card ${cls}">
        <div class="word-hanzi">${hanzi}</div>
        <div class="word-pinyin">${info.pinyin}</div>
        <div class="word-english">${info.english}</div>
        <div class="word-count">${p.correct} correct</div>
      </div>
    `;
  }).join('');

  return `
    <div class="layout">
      <header class="header">
        <button class="back-btn" data-action="home">← Back</button>
        <span class="progress">${mastered} / ${total} mastered (${pct}%)</span>
        <button class="reset-btn" data-action="reset-progress">Reset</button>
      </header>
      <main class="main">
        <div class="screen">
          <div class="words-grid">${cardsHtml}</div>
        </div>
      </main>
    </div>
  `;
}

// ============================================================
// GAME (unchanged)
// ============================================================
function isCurrentQuestionCorrect() {
  return state.results.length > 0 &&
         state.results.every(r => r === 'correct');
}

function renderGame() {
  const q = state.questions[state.currentIndex];
  const slotsHtml = q.slots.map((slot, i) => renderSlot(slot, i)).join('');
  const allCorrect = isCurrentQuestionCorrect();
  const isLast = state.currentIndex + 1 >= state.questions.length;

  let actionButton;
  if (allCorrect) {
    const label = isLast ? 'Finish' : 'Next Question →';
    actionButton = `<button class="next-btn" data-action="next">${label}</button>`;
  } else {
    actionButton = `<button data-action="check">Check</button>`;
  }

  return `
    <div class="layout">
      <header class="header">
        <button class="back-btn" data-action="home">← Back</button>
        <span class="progress">Question ${state.currentIndex + 1} / ${state.questions.length}</span>
      </header>
      <main class="main">
        <div class="screen">
          <div class="english">${q.english}</div>
          <div class="slots-row">${slotsHtml}</div>
          <div class="check-wrap">${actionButton}</div>
          <div class="message ${state.messageKind}">${state.message}</div>
        </div>
      </main>
    </div>
  `;
}

function renderSlot(slot, slotIndex) {
  if (slot.type === 'fixed') {
    return `
      <div class="slot fixed">
        <div class="item pos-1">${slot.answer}</div>
      </div>
    `;
  }

  const n = slot.options.length;
  const idx = slot.options.indexOf(state.answers[slotIndex]);
  const prev = n > 0 ? slot.options[(idx - 1 + n) % n] : '';
  const curr = slot.options[idx] || '';
  const next = n > 0 ? slot.options[(idx + 1) % n] : '';

  const resultClass = state.results[slotIndex] === 'correct' ? 'correct'
                    : state.results[slotIndex] === 'wrong' ? 'wrong' : '';

  let pinyinHtml = '';
  if (state.results[slotIndex] === 'correct' && WORD_DATA[curr]) {
    const info = WORD_DATA[curr];
    pinyinHtml = `
      <div class="pinyin-area">
        <div class="pinyin">${info.pinyin}</div>
        <div class="translation">${info.english}</div>
      </div>
    `;
  }

  return `
    <div class="slot ${resultClass}" data-slot="${slotIndex}">
      <div class="item pos-0">${prev}</div>
      <div class="item pos-1">${curr}</div>
      <div class="item pos-2">${next}</div>
      <div class="indicator"></div>
      ${pinyinHtml}
    </div>
  `;
}

function renderFinished() {
  const mastered = getMasteredCount();
  const total = getTotalWordCount();

  return `
    <div class="centered-layout">
      <div class="screen">
        <h1>🎉</h1>
        <p class="subtitle">All questions completed!</p>
        <p class="finished-stat">${mastered} / ${total} HSK 1 words mastered</p>
        <div class="buttons">
          <button data-action="progress">View Word Progress</button>
          <button class="secondary-btn" data-action="home">Back to Home</button>
        </div>
      </div>
    </div>
  `;
}