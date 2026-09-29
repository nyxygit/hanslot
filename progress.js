// ============================================================
// PROGRESS — per-word tracking, persisted to localStorage
// ============================================================
const STORAGE_KEY = 'hanzislot_progress_v1';
const MASTERY_THRESHOLD = 3; // correct answers needed to master a word

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Could not load progress:', e);
  }
  return {};
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
}

// Called when a slot is checked. hanzi = the Chinese word currently shown.
function recordAnswer(hanzi, correct) {
  if (!hanzi) return;
  if (!state.progress[hanzi]) {
    state.progress[hanzi] = { correct: 0, wrong: 0, lastSeen: 0 };
  }
  const entry = state.progress[hanzi];
  if (correct) entry.correct++;
  else entry.wrong++;
  entry.lastSeen = Date.now();
  saveProgress();
}

function getProgressFor(hanzi) {
  return state.progress[hanzi] || { correct: 0, wrong: 0, lastSeen: 0 };
}

function isMastered(hanzi) {
  return getProgressFor(hanzi).correct >= MASTERY_THRESHOLD;
}

function getMasteredCount() {
  return Object.keys(WORD_DATA).filter(isMastered).length;
}

function getTotalWordCount() {
  return Object.keys(WORD_DATA).length;
}

function resetAllProgress() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  state.progress = {};
  saveProgress();
  render();
}