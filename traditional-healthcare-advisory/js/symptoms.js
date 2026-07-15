/* ============================================================
   Traditional Healthcare Advisory — SYMPTOM RESULTS PAGE LOGIC
   Reads ?cat=<key> or ?q=<text> from the URL and renders a
   VERTICAL list of matching diseases ranked by match percentage.
   Each row also gets a speaker icon to read it aloud.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(document.getElementById("navUser"));

  const params = new URLSearchParams(window.location.search);
  const catKey = params.get("cat");
  const q = params.get("q");
  if(q) updateLanguageFromInput(q);

  let label = "", icon = "🔎", results = [];

  if(catKey){
    const cat = getCategoryByKey(catKey);
    if(cat){
      label = cat.label; icon = cat.icon;
      results = cat.items.map(([id,percent]) => ({id,percent}));
    }
  } else if(q){
    const found = searchDiseases(q);
    if(found){
      label = found.label; icon = found.icon; results = found.results;
      // This catches romanized input (e.g. "thalanoppi") that the
      // earlier script-based check above couldn't identify, since it
      // knows exactly which language's word list matched.
      if(found.lang) setDetectedLanguage(found.lang);
    }
    else { label = q; }
  }

  document.getElementById("symptomTitle").textContent = label ? `Results for "${label}"` : "Choose a symptom";
  document.getElementById("symptomIcon").textContent = icon;

  const listEl = document.getElementById("resultList");

  if(results.length === 0){
    listEl.innerHTML = "";
    document.getElementById("emptyState").style.display = "block";
    narratePage(t("resultReady"));
    return;
  }
  document.getElementById("emptyState").style.display = "none";

  // sort descending by match percent so the most likely condition is first
  results.sort((a,b) => b.percent - a.percent);

  listEl.innerHTML = results.map(r => {
    const d = getDiseaseById(r.id);
    if(!d) return "";
    return `
      <a class="result-row" href="disease.html?id=${d.id}">
        <div class="result-icon">${d.icon}</div>
        <div class="result-info">
          <h3>${d.name}</h3>
          <p>${d.symptoms}</p>
        </div>
        <div class="result-pct">
          <div class="num">${r.percent}%</div>
          <div class="bar"><span style="width:${r.percent}%"></span></div>
        </div>
        <button type="button" class="speaker-btn result-speaker" aria-label="Listen to this result">🔊</button>
      </a>
    `;
  }).join("");

  // Wire each row's speaker icon to read that condition's name + match + symptoms
  listEl.querySelectorAll(".result-row").forEach((row, idx) => {
    const r = results[idx];
    const d = getDiseaseById(r.id);
    const spk = row.querySelector(".result-speaker");
    attachSpeaker(spk, `${d.name}. ${r.percent} percent match. Symptoms: ${d.symptoms}`);
  });

  narratePage(t("resultReady"));
});
