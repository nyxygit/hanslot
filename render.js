// ============================================================
// RENDER — dispatcher
// ============================================================
function render() {
  const app = document.getElementById('app');
  const wrapClass = state.rotated ? 'app-wrap rotated' : 'app-wrap';
  let content = '';

  if (state.screen === 'setup')         content = renderSetup();
  else if (state.screen === 'handoff')  content = renderHandoff();
  else if (state.screen === 'game')     content = renderGame();
  else if (state.screen === 'turn-summary') content = renderTurnSummary();
  else if (state.screen === 'results')  content = renderResults();
  else if (state.screen === 'sentences') content = renderSentences();

  app.innerHTML = `<div class="${wrapClass}">${content}</div>`;

  fitSlotRow(); 
}

// Scale the slot row down if it would otherwise wrap to a second line.
// The whole row — slots, pinyin labels, indicators — shrinks together,
// so all slots stay visually aligned on one line.
function fitSlotRow() {
  const viewport = document.querySelector('.slots-viewport');
  const row = document.querySelector('.slots-row');
  if (!viewport || !row) return;

  // Reset from any previous measurement.
  row.style.transform = '';
  viewport.style.height = '';

  const naturalWidth = row.scrollWidth;
  const naturalHeight = row.scrollHeight;
  const available = viewport.clientWidth;

  if (naturalWidth <= available || available === 0) return;

  const scale = available / naturalWidth;
  row.style.transform = `scale(${scale})`;
  viewport.style.height = (naturalHeight * scale) + 'px';
}

window.addEventListener('resize', fitSlotRow);

// ============================================================
// SETUP (unchanged)
// ============================================================
function renderSetup() {
  const cat = state.category;
  const count = state.questionCount;

  const poolCount = countQuestionsInCategory(cat);
  const maxPerPlayer = Math.floor(poolCount / 2);
  const tooFew = poolCount < count * 2;

  const countButtons = [5, 10, 15].map(n => `
    <button class="count-btn ${count === n ? 'count-active' : ''}"
            data-action="set-count"
            data-count="${n}">${n}</button>
  `).join('');

  const categoryChips = Object.entries(CATEGORY_LABELS).map(([key, label]) => `
    <button class="chip ${cat === key ? 'chip-active' : ''}"
            data-action="set-category"
            data-category="${key}">${label}</button>
  `).join('');

  const warning = tooFew ? `
    <div class="setup-warning">
      Only ${poolCount} questions in this category. Playing
      ${Math.max(1, maxPerPlayer)} per player instead of ${count}.
    </div>
  ` : '';

  return `
    <div class="setup-layout">
      <h1>HanziSlot</h1>
      <p class="subtitle">Two-player challenge</p>

      <div class="setup-section">
        <h3>Questions per player</h3>
        <div class="count-buttons">${countButtons}</div>
      </div>

      <div class="setup-section">
        <h3>Category</h3>
        <div class="category-chips">${categoryChips}</div>
      </div>

      ${warning}

      <button class="primary-start" data-action="begin-match">Start Match</button>

      <div class="setup-links">
        <button class="link-btn" data-action="sentences">Browse Sentences</button>
      </div>
    </div>
  `;
}

// ============================================================
// HANDOFF — P1 get-ready, or P2 get-ready (after flip)
// ============================================================
function renderHandoff() {
  const p = state.currentPlayer;
  const count = state.playerQuestions.length;

  if (p === 1) {
    return `
      <div class="handoff-layout">
        <div class="handoff-card">
          <h1>Player 1, get ready!</h1>
          <p class="handoff-sub">${count} questions.</p>
          <p class="handoff-note">Each wrong slot adds <strong>+5 seconds</strong> to your final score.</p>
          <button class="primary-start" data-action="begin-turn">Start</button>
        </div>
      </div>
    `;
  }

  const s1 = state.scores[1];
  return `
    <div class="handoff-layout">
      <div class="handoff-card">
        <h1>Player 2, get ready!</h1>
        <p class="handoff-sub">Player 1 finished in <strong>${s1.total.toFixed(1)}s</strong>.</p>
        <p class="handoff-note">${count} questions. Each wrong slot adds <strong>+5 seconds</strong>.</p>
        <button class="primary-start" data-action="begin-turn">Start</button>
      </div>
    </div>
  `;
}

// ============================================================
// TURN SUMMARY — shown to P1 at end of their turn, unrotated
// ============================================================
function renderTurnSummary() {
  const s1 = state.scores[1];
  return `
    <div class="handoff-layout">
      <div class="handoff-card">
        <h1>Player 1 — Turn Complete!</h1>
        <div class="summary-time">${s1.raw.toFixed(1)}s</div>
        <div class="summary-penalty">+ ${s1.penalty}s penalty</div>
        <div class="summary-total">Total: ${s1.total.toFixed(1)}s</div>
        <button class="primary-start" data-action="pass-to-p2">Pass to Player 2 →</button>
      </div>
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
  const q = state.playerQuestions[state.currentIndex];
  const slotsHtml = q.slots.map((slot, i) => renderSlot(slot, i)).join('');
  const allCorrect = isCurrentQuestionCorrect();
  const isLast = state.currentIndex + 1 >= state.playerQuestions.length;

  let actionButton;
  if (allCorrect) {
    const label = isLast ? 'Finish' : 'Next Question →';
    actionButton = `<button class="next-btn" data-action="next">${label}</button>`;
  } else {
    actionButton = `<button data-action="check">Check</button>`;
  }

  const elapsed = state.turnStartTime > 0
    ? (performance.now() - state.turnStartTime) / 1000
    : 0;
  const total = elapsed + state.penaltySeconds;
  const penaltyText = state.penaltySeconds > 0
    ? `<span class="penalty-badge">+${state.penaltySeconds}s</span>`
    : '';

  return `
    <div class="layout">
      <header class="header">
        <button class="back-btn" data-action="quit-match">← Quit</button>
        <span class="progress">Player ${state.currentPlayer} · ${state.currentIndex + 1} / ${state.playerQuestions.length}</span>
        <span class="timer-box">
          ${penaltyText}
          <span id="timer-display" class="timer">${formatTime(total)}</span>
        </span>
      </header>
      <main class="main">
        <div class="screen">
          <div class="english">${q.english}</div>
          <div class="slots-viewport">
  <div class="slots-row">${slotsHtml}</div>
</div>
          <div class="check-wrap">${actionButton}</div>
          <div class="message ${state.messageKind}">${state.message}</div>
        </div>
      </main>
    </div>
  `;
}

function renderSlot(slot, slotIndex) {
  if (slot.type === 'fixed') {
    const info = WORD_DATA[slot.answer];
    const showInfo = info && state.results.some(r => r !== null);
    const pinyinHtml = showInfo ? `
      <div class="pinyin-area">
        <div class="pinyin">${info.pinyin}</div>
        <div class="translation">${info.english}</div>
      </div>
    ` : '';
    return `
      <div class="slot-wrap">
        <div class="slot fixed">
          <div class="item pos-1">${slot.answer}</div>
        </div>
        ${pinyinHtml}
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
    <div class="slot-wrap">
      <div class="slot ${resultClass}" data-slot="${slotIndex}">
        <div class="item pos-0">${prev}</div>
        <div class="item pos-1">${curr}</div>
        <div class="item pos-2">${next}</div>
        <div class="indicator"></div>
      </div>
      ${pinyinHtml}
    </div>
  `;
}

// ============================================================
// RESULTS — both views stacked, buttons sidebar on physical left
// ============================================================
function renderResults() {
  const s1 = state.scores[1];
  const s2 = state.scores[2];

  let winner = 0;
  if (s1.total < s2.total) winner = 1;
  else if (s2.total < s1.total) winner = 2;

  const scoreBlock = (p) => {
    const s = state.scores[p];
    const isWinner = winner === p;
    return `
      <div class="score-block ${isWinner ? 'score-winner' : ''}">
        <div class="score-name">Player ${p}${isWinner ? ' 🏆' : ''}</div>
        <div class="score-total">${s.total.toFixed(1)}s</div>
        <div class="score-detail">${s.raw.toFixed(1)}s + ${s.penalty}s penalty</div>
      </div>
    `;
  };

  // Container is rotated 180°.
  //  - p1-view has its own 180° counter-rotation → readable by P1 (physical bottom)
  //  - p2-view has no extra rotation → readable by P2 (physical top)
  // Each view shows both scores, with the viewer's own score on top.
  return `
    <div class="results-layout">
      <div class="scores-column">
        <div class="view p1-view">
          <div class="view-inner">
            ${scoreBlock(1)}
            ${scoreBlock(2)}
          </div>
        </div>
        <div class="view p2-view">
          <div class="view-inner">
            ${scoreBlock(2)}
            ${scoreBlock(1)}
          </div>
        </div>
      </div>
      <div class="buttons-sidebar">
        <button class="action-btn primary" data-action="rematch">Rematch</button>
        <button class="action-btn secondary" data-action="back-setup">Return to Home</button>
      </div>
    </div>
  `;
}

// ============================================================
// SENTENCE BROWSER (unchanged)
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
        <button class="back-btn" data-action="back-setup">← Back</button>
        <span class="progress">Sentence Browser</span>
        <span class="sentence-count">${total} sentences</span>
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
  const cat = categorizeQuestion(question);
  const catLabel = CATEGORY_LABELS[cat] || cat;

  const chipsHtml = info.words.map(w => {
    if (!w.pinyin && !w.english) {
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
        <span class="sentence-tag">${catLabel}</span>
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