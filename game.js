// ============================================================
// STATE
// ============================================================
const state = {
  screen: 'setup',   // 'setup' | 'handoff' | 'game' | 'turn-summary' | 'results' | 'sentences'
  questionCount: 5,
  category: 'all',
  rotated: false,

  currentPlayer: 1,
  playerQuestions: [],
  matchPool: { 1: [], 2: [] },
  currentIndex: 0,
  answers: [],
  results: [],
  message: '',
  messageKind: '',
  recordedThisQuestion: false,

  turnStartTime: 0,
  penaltySeconds: 0,

  scores: { 1: null, 2: null },

  searchQuery: ''
};

let timerIntervalId = null;

// ============================================================
// CATEGORIES (unchanged)
// ============================================================
const CATEGORY_LABELS = {
  all: 'All',
  family: 'Family & People',
  food: 'Food & Drink',
  time: 'Time & Days',
  places: 'Places & Travel',
  actions: 'Daily Actions',
  numbers: 'Numbers & Counting',
  body: 'Body & Self',
  greetings: 'Greetings',
  descriptions: 'Descriptions',
  connectives: 'Connectives'
};

const CATEGORY_WORDS = {
  family: ["爸爸","妈妈","姐姐","弟弟","妹妹","爷爷","奶奶","妻子","丈夫","儿子","女儿","孩子","朋友","同学","先生","小姐","工人","医生","老师","学生","哥哥"],
  food: ["饭","菜","肉","鱼","鸡蛋","米饭","面条","面包","水果","苹果","香蕉","橘子","西瓜","茶","水","咖啡","牛奶","啤酒","酒","汤"],
  time: ["年","月","日","天","今天","明天","昨天","现在","早上","上午","中午","下午","晚上","星期","分钟","小时","点","今年","去年","明年","时候","岁"],
  places: ["中国","美国","英国","日本","北京","上海","学校","医院","商店","饭店","餐厅","图书馆","教室","办公室","银行","机场","车站","公园","公司","飞机","火车","汽车","出租车","公共汽车","地铁","自行车","船","汉语","英语","家"],
  actions: ["吃","喝","去","来","回","走","跑","坐","站","开","关","拿","放","洗","穿","用","买","卖","找","帮","见","等","送","给","教","学","学习","工作","睡觉","起床","玩","跳","唱","打电话","看电视","听音乐","看书","喜欢","爱","想","要","会","能","可以","认识","知道","觉得","说","读","写","看","听"],
  numbers: ["一","二","三","四","五","六","七","八","九","十","零","百","千","万","两","几","多少","个","本","只","件","块","张","台","条","双"],
  body: ["头","头发","眼睛","耳朵","鼻子","嘴","手","脚","脸","身体","名字","人"],
  greetings: ["你好","您好","再见","谢谢","不客气","对不起","没关系","请问"],
  descriptions: ["好","坏","大","小","高","矮","长","短","新","旧","冷","热","快","慢","对","错","忙","累","高兴","快乐","漂亮","好看","好玩","难","容易","便宜","贵","远","近","红","白","黑","蓝","绿","黄","阴","晴","好吃","下雨","下雪"]
};

const CATEGORY_PRIORITY = [
  'greetings','numbers','family','food','places',
  'time','body','actions','descriptions'
];

function categorizeQuestion(q) {
  if (q.category) return q.category;

  const counts = {};
  for (const cat of CATEGORY_PRIORITY) counts[cat] = 0;

  for (const slot of q.slots) {
    if (slot.type !== 'quiz') continue;
    for (const cat of CATEGORY_PRIORITY) {
      if (CATEGORY_WORDS[cat].includes(slot.answer)) counts[cat]++;
    }
  }

  let best = null;
  let bestScore = 0;
  for (const cat of CATEGORY_PRIORITY) {
    if (counts[cat] > bestScore) {
      bestScore = counts[cat];
      best = cat;
    }
  }
  return best || 'actions';
}

function countQuestionsInCategory(cat) {
  if (cat === 'all') return QUESTIONS.length;
  return QUESTIONS.filter(q => categorizeQuestion(q) === cat).length;
}

// ============================================================
// HELPERS
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

function formatTime(secs) {
  return secs.toFixed(1) + 's';
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  stopTimer();
  timerIntervalId = setInterval(() => {
    const el = document.getElementById('timer-display');
    if (!el) return;
    const elapsed = (performance.now() - state.turnStartTime) / 1000;
    el.textContent = formatTime(elapsed + state.penaltySeconds);
  }, 100);
}

function stopTimer() {
  if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

// ============================================================
// MATCH FLOW
// ============================================================
function setCategory(cat) {
  state.category = cat;
  render();
}

function setQuestionCount(n) {
  state.questionCount = n;
  render();
}

function beginMatch() {
  const pool = QUESTIONS.filter(q =>
    state.category === 'all' || categorizeQuestion(q) === state.category
  );
  const shuffled = shuffle(pool);

  let perPlayer = state.questionCount;
  if (shuffled.length < perPlayer * 2) {
    perPlayer = Math.max(1, Math.floor(shuffled.length / 2));
  }

  const p1Raw = shuffled.slice(0, perPlayer);
  const p2Raw = shuffled.slice(perPlayer, perPlayer * 2);

  state.matchPool = {
    1: p1Raw.map(prepareQuestion),
    2: p2Raw.map(prepareQuestion)
  };

  state.questionCount = perPlayer;
  state.currentPlayer = 1;
  state.playerQuestions = state.matchPool[1];
  state.currentIndex = 0;
  state.answers = [];
  state.results = [];
  state.message = '';
  state.messageKind = '';
  state.penaltySeconds = 0;
  state.scores = { 1: null, 2: null };
  state.rotated = false;
  state.screen = 'handoff';
  render();
}

function beginTurn() {
  state.currentIndex = 0;
  initAnswers();
  state.message = '';
  state.messageKind = '';
  state.penaltySeconds = 0;
  state.turnStartTime = performance.now();
  startTimer();
  state.screen = 'game';
  render();
}

function initAnswers() {
  const q = state.playerQuestions[state.currentIndex];
  state.answers = q.slots.map(slot =>
    slot.type === 'fixed' ? slot.answer : randomWrongOption(slot)
  );
  state.results = q.slots.map(() => null);
  state.recordedThisQuestion = false;
}

function changeSlot(slotIndex, delta) {
  const q = state.playerQuestions[state.currentIndex];
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

function checkAnswers() {
  const q = state.playerQuestions[state.currentIndex];
  let allCorrect = true;
  let wrongSlots = 0;

  state.results = q.slots.map((slot, i) => {
    if (slot.type === 'fixed') return 'correct';
    if (state.answers[i] === slot.answer) return 'correct';
    allCorrect = false;
    wrongSlots++;
    return 'wrong';
  });

  if (wrongSlots > 0) {
    state.penaltySeconds += wrongSlots * 5;
  }

  if (allCorrect) {
    state.message = 'Correct! Click Next or press Enter.';
    state.messageKind = 'success';
  } else {
    const pen = wrongSlots * 5;
    state.message = `${wrongSlots} slot${wrongSlots > 1 ? 's' : ''} wrong. +${pen}s penalty.`;
    state.messageKind = 'error';
  }
  render();
}

function nextQuestion() {
  if (!isCurrentQuestionCorrect()) return;

  if (state.currentIndex + 1 < state.playerQuestions.length) {
    state.currentIndex++;
    initAnswers();
    state.message = '';
    state.messageKind = '';
    render();
  } else {
    endTurn();
  }
}

function endTurn() {
  stopTimer();
  const elapsed = (performance.now() - state.turnStartTime) / 1000;
  const penalty = state.penaltySeconds;

  state.scores[state.currentPlayer] = {
    raw: elapsed,
    penalty: penalty,
    total: elapsed + penalty
  };

  if (state.currentPlayer === 1) {
    // Show P1 their score. Flip only when they press "Pass to Player 2".
    state.rotated = false;
    state.screen = 'turn-summary';
  } else {
    // P2 finished — show results, still rotated.
    state.rotated = true;
    state.screen = 'results';
  }
  render();
}

function passToPlayer2() {
  state.currentPlayer = 2;
  state.playerQuestions = state.matchPool[2];
  state.currentIndex = 0;
  state.answers = [];
  state.results = [];
  state.message = '';
  state.messageKind = '';
  state.penaltySeconds = 0;
  state.rotated = true;
  state.screen = 'handoff';
  render();
}

function backToSetup() {
  stopTimer();
  state.screen = 'setup';
  state.rotated = false;
  state.currentPlayer = 1;
  state.playerQuestions = [];
  state.matchPool = { 1: [], 2: [] };
  state.currentIndex = 0;
  state.answers = [];
  state.results = [];
  state.message = '';
  state.messageKind = '';
  state.penaltySeconds = 0;
  state.scores = { 1: null, 2: null };
  state.searchQuery = '';
  render();
}

function rematch() {
  // Same settings (question count + category), fresh questions.
  beginMatch();
}

function quitMatch() {
  if (!confirm('Quit this match? Progress will be lost.')) return;
  backToSetup();
}

function goToSentences() {
  state.screen = 'sentences';
  state.searchQuery = '';
  render();
}

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

    // Flip the intent when the screen is rotated so "click the visual
    // top of the wheel" always means "previous" for both players.
    const clickedTop = y < rect.height / 2;
    const changeBy = clickedTop ? -1 : 1;
    const delta = state.rotated ? -changeBy : changeBy;

    changeSlot(slotIndex, delta);
    return;
  }

  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;

  if (action === 'set-count') setQuestionCount(parseInt(btn.dataset.count, 10));
  else if (action === 'set-category') setCategory(btn.dataset.category);
  else if (action === 'begin-match') beginMatch();
  else if (action === 'begin-turn') beginTurn();
  else if (action === 'check') checkAnswers();
  else if (action === 'next') nextQuestion();
  else if (action === 'pass-to-p2') passToPlayer2();
  else if (action === 'rematch') rematch();
  else if (action === 'back-setup') backToSetup();
  else if (action === 'quit-match') quitMatch();
  else if (action === 'sentences') goToSentences();
});

document.getElementById('app').addEventListener('wheel', (e) => {
  const slotEl = e.target.closest('.slot[data-slot]');
  if (!slotEl) return;
  e.preventDefault();
  const slotIndex = parseInt(slotEl.dataset.slot, 10);
  const scrollDelta = e.deltaY > 0 ? 1 : -1;
  const delta = state.rotated ? -scrollDelta : scrollDelta;
  changeSlot(slotIndex, delta);
}, { passive: false });

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