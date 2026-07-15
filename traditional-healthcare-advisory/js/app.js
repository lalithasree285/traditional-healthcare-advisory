/* app.js — ఇది కేవలం హోమ్ పేజీ (index.html) లో మాత్రమే వాడబడుతుంది.
   వాయిస్ ఫీచర్ ఇక్కడ మాత్రమే ఉంటుంది — ఇతర పేజీలలో వాయిస్ కోడ్ ఉండదు. */

const micBtn = document.getElementById("micBtn");
const statusEl = document.getElementById("status");
const promptEl = document.getElementById("promptText");
const textInput = document.getElementById("textInput");
const askBtn = document.getElementById("askBtn");
const detectedBox = document.getElementById("detectedBox");
const resultsEl = document.getElementById("results");
const langToggle = document.getElementById("langToggle");

// హోమ్ పేజీలో మాత్రమే: వాయిస్ రికగ్నిషన్ భాష (డిఫాల్ట్ తెలుగు).
// దీన్ని English కి మార్చుకునే అవకాశం ఇక్కడ మాత్రమే ఉంటుంది.
let recognitionLang = "te-IN";

// ప్రధాన TTS ప్రాంప్ట్ — ఎప్పుడూ తెలుగులోనే మాట్లాడుతుంది
function speakTelugu(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "te-IN";
  utter.rate = 0.95;
  const voices = window.speechSynthesis.getVoices();
  const teluguVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("te"));
  if (teluguVoice) utter.voice = teluguVoice;
  window.speechSynthesis.speak(utter);
}

function askForSymptoms() {
  const msg = "దయచేసి మీ లక్షణాలు చెప్పండి";
  promptEl.textContent = msg;
  speakTelugu(msg);
}

window.addEventListener("load", () => {
  // కొన్ని బ్రౌజర్లలో వాయిస్ లిస్ట్ ఆలస్యంగా లోడ్ అవుతుంది
  window.speechSynthesis.onvoiceschanged = () => {};
  askForSymptoms();
});

// హోమ్ పేజీలో మాత్రమే: తెలుగు / English రికగ్నిషన్ మార్చుకునే టోగుల్
if (langToggle) {
  langToggle.addEventListener("click", () => {
    recognitionLang = recognitionLang === "te-IN" ? "en-IN" : "te-IN";
    langToggle.textContent =
      recognitionLang === "te-IN" ? "🎙️ తెలుగు (English కి మార్చండి)" : "🎙️ English (తెలుగుకి మార్చండి)";
  });
}

let recognition = null;
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognitionAPI) {
  recognition = new SpeechRecognitionAPI();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  recognition.onstart = () => {
    micBtn.classList.add("listening");
    statusEl.textContent = "వింటున్నాను... మాట్లాడండి 🎧";
  };

  recognition.onerror = (e) => {
    micBtn.classList.remove("listening");
    statusEl.textContent = "క్షమించండి, వినడంలో సమస్య వచ్చింది. మళ్ళీ ప్రయత్నించండి.";
  };

  recognition.onend = () => {
    micBtn.classList.remove("listening");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textInput.value = transcript;
    statusEl.textContent = "మీరు చెప్పింది: “" + transcript + "”";
    processInput(transcript);
  };

  micBtn.addEventListener("click", () => {
    recognition.lang = recognitionLang;
    try {
      recognition.start();
    } catch (e) {
      /* ఇప్పటికే వింటున్నట్టయితే విస్మరించండి */
    }
  });
} else {
  statusEl.textContent = "మీ బ్రౌజర్‌లో వాయిస్ ఫీచర్ లేదు — దయచేసి కింద టైప్ చేయండి.";
  micBtn.disabled = true;
}

askBtn.addEventListener("click", () => {
  const val = textInput.value.trim();
  if (val) processInput(val);
});

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const val = textInput.value.trim();
    if (val) processInput(val);
  }
});

function processInput(userText) {
  const detectedIds = detectSymptoms(userText, SYMPTOMS, 0.6);

  if (detectedIds.length === 0) {
    detectedBox.innerHTML = "";
    resultsEl.innerHTML =
      '<p class="status">క్షమించండి, మీ లక్షణాలు అర్థం కాలేదు. దయచేసి “జ్వరం”, “తలనొప్పి”, “దగ్గు” లాంటి పదాలతో మళ్ళీ చెప్పండి.</p>';
    speakTelugu("క్షమించండి, అర్థం కాలేదు, మళ్ళీ చెప్పండి");
    return;
  }

  const detectedLabels = detectedIds.map(
    (id) => SYMPTOMS.find((s) => s.id === id).label
  );
  detectedBox.innerHTML =
    "గుర్తించిన లక్షణాలు: " +
    detectedLabels.map((l) => `<span class="chip">${l}</span>`).join(" ");

  const diseases = predictDiseases(detectedIds, DISEASE_RULES);
  renderResults(diseases);

  if (diseases.length > 0) {
    speakTelugu("మీ లక్షణాల ఆధారంగా అనుమానిత వ్యాధులను క్రింద చూపించాను");
  } else {
    speakTelugu("మీ లక్షణాలు నమోదు చేసుకున్నాను, కానీ ఖచ్చితమైన అంచనా కుదరలేదు, వైద్యుడిని సంప్రదించండి");
  }
}

function renderResults(diseases) {
  if (diseases.length === 0) {
    resultsEl.innerHTML =
      '<p class="status">మీ లక్షణాలు నమోదయ్యాయి, కానీ ఖచ్చితమైన అంచనా కుదరలేదు — దయచేసి వైద్యుడిని సంప్రదించండి.</p>';
    return;
  }

  resultsEl.innerHTML =
    "<h2>అనుమానిత వ్యాధులు</h2>" +
    diseases
      .map((d) => {
        const urgent = d.disease.includes("గుండె") ? "urgent" : "";
        return `
        <div class="card ${urgent}">
          <h3>${d.disease}</h3>
          <p><strong>సలహా:</strong> ${d.advice}</p>
          <p class="see-doctor">${d.seeDoctor}</p>
          <table class="med-table">
            <thead>
              <tr><th>Condition</th><th>Medicine</th><th>Dosage</th><th>Duration</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>${d.table.condition}</td>
                <td>${d.table.medicine}</td>
                <td>${d.table.dosage}</td>
                <td>${d.table.duration}</td>
              </tr>
            </tbody>
          </table>
        </div>`;
      })
      .join("");
}
