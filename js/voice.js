/* ============================================================
   Traditional Healthcare Advisory — VOICE & LANGUAGE MODULE
   100% free / browser-only:
     - "Automatic" language detection = the device/browser's own
       language setting (no dropdown). Later, recognized speech
       can update it. This is a free stand-in for a paid
       speech-language-ID service.
     - Text-to-Speech narration via the Web Speech API.
     - Speech-to-Text voice input via the Web Speech API.
     - High-contrast / larger-text accessibility toggle.
   Language choice is remembered for the whole browser session
   (sessionStorage) — no need to re-detect on every page.
   ============================================================ */

const THCA_LANG_KEY = "thca_lang";

const SUPPORTED_LANGS = {
  en: { name: "English",  speechLang: "en-IN" },
  hi: { name: "हिंदी",     speechLang: "hi-IN" },
  te: { name: "తెలుగు",    speechLang: "te-IN" },
  ta: { name: "தமிழ்",     speechLang: "ta-IN" },
  kn: { name: "ಕನ್ನಡ",     speechLang: "kn-IN" },
  ml: { name: "മലയാളം",   speechLang: "ml-IN" }
};

/* Detects the language once per session from the browser/device's
   own language setting, and remembers it for every later page. */
function detectLanguage(){
  const saved = sessionStorage.getItem(THCA_LANG_KEY);
  if(saved && SUPPORTED_LANGS[saved]) return saved;

  const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  const lang = SUPPORTED_LANGS[browserLang] ? browserLang : "en";
  sessionStorage.setItem(THCA_LANG_KEY, lang);
  return lang;
}

/* Lets recognized speech override the detected language — e.g. if
   the browser is set to English but the person actually speaks in
   Telugu, we can update it once speech recognition tells us so. */
function setDetectedLanguage(langKey){
  if(SUPPORTED_LANGS[langKey]){
    sessionStorage.setItem(THCA_LANG_KEY, langKey);
  }
}

/* Unicode script ranges for each supported non-English language.
   Since the browser's OS-level locale (navigator.language) often
   stays English even when someone types/speaks in Hindi, Telugu,
   Tamil, Kannada or Malayalam, we look at the actual characters
   the person typed or the speech engine transcribed instead. */
const THCA_SCRIPT_RANGES = {
  hi: /[\u0900-\u097F]/, // Devanagari
  te: /[\u0C00-\u0C7F]/, // Telugu
  ta: /[\u0B80-\u0BFF]/, // Tamil
  kn: /[\u0C80-\u0CFF]/, // Kannada
  ml: /[\u0D00-\u0D7F]/  // Malayalam
};

/* Looks at a piece of typed/spoken text and returns the matching
   supported language key, or null if it looks like plain English/Latin. */
function detectLanguageFromText(text){
  const str = String(text || "");
  for(const lang in THCA_SCRIPT_RANGES){
    if(THCA_SCRIPT_RANGES[lang].test(str)) return lang;
  }
  return null;
}

/* Convenience: detects the language directly from typed/spoken text
   and, if it's one of our supported scripts, saves it as the session
   language so every later page's narration matches what the person
   actually used — not just the device's default locale. */
function updateLanguageFromInput(text){
  const detected = detectLanguageFromText(text);
  if(detected) setDetectedLanguage(detected);
  return detected;
}

function getSpeechLangCode(){
  return SUPPORTED_LANGS[detectLanguage()].speechLang;
}

/* ---------- Text-to-Speech ---------- */
function speak(text){
  if(!("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel(); // stop anything already talking
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = getSpeechLangCode();
  utter.rate = 0.95;
  window.speechSynthesis.speak(utter);
}

/* Attaches a click-to-speak handler to a speaker-icon button,
   without triggering whatever click behavior sits underneath it
   (e.g. a result row that's also a link). */
function attachSpeaker(el, text){
  if(!el) return;
  el.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    speak(text);
  });
}

/* Adds a small 🔊 button next to every .label inside .section-block
   elements found in containerEl, reading that whole block aloud.
   Used on the Condition Details and Healing Plan pages so each
   section can be listened to individually. */
function addSectionSpeakers(containerEl){
  if(!containerEl) return;
  containerEl.querySelectorAll(".section-block").forEach(block => {
    const label = block.querySelector(".label");
    if(!label || label.querySelector(".speaker-btn")) return;
    const spk = document.createElement("button");
    spk.type = "button";
    spk.className = "speaker-btn";
    spk.setAttribute("aria-label", "Listen to this section");
    spk.textContent = "🔊";
    label.appendChild(spk);
    attachSpeaker(spk, block.textContent.replace("🔊", "").trim());
  });
}

/* ---------- Speech-to-Text (voice input) ---------- */
function startVoiceInput(onResult, onListening){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition){
    alert("Voice input isn't supported in this browser. Please try Chrome, or type your symptom instead.");
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = getSpeechLangCode();
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  if(onListening) onListening(true);

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    if(onResult) onResult(transcript);
  };
  recognition.onerror = () => { if(onListening) onListening(false); };
  recognition.onend = () => { if(onListening) onListening(false); };

  recognition.start();
}

/* ---------- Floating "replay page audio" button ----------
   Browsers vary on whether they allow audio to auto-play on page
   load without a click first, so every page also gets a small
   floating button the person can tap to hear the narration again. */
function renderReplayButton(getTextFn){
  if(document.getElementById("thcaReplayBtn")) return;
  const btn = document.createElement("button");
  btn.id = "thcaReplayBtn";
  btn.type = "button";
  btn.className = "replay-audio-btn no-print";
  btn.innerHTML = "🔊";
  btn.title = t("replayAudio");
  btn.setAttribute("aria-label", t("replayAudio"));
  btn.addEventListener("click", () => speak(getTextFn()));
  document.body.appendChild(btn);
}

/* Narrates the page and wires the replay button in one call. */
function narratePage(text){
  renderReplayButton(() => text);
  speak(text);
}

/* ---------- Accessibility: high-contrast + larger text ---------- */
const THCA_A11Y_KEY = "thca_a11y";

function applyA11yFromStorage(){
  if(localStorage.getItem(THCA_A11Y_KEY) === "on"){
    document.documentElement.classList.add("a11y-mode");
  }
}

function toggleA11y(){
  const on = document.documentElement.classList.toggle("a11y-mode");
  localStorage.setItem(THCA_A11Y_KEY, on ? "on" : "off");
}

applyA11yFromStorage();
