/* ============================================================
   Traditional Healthcare Advisory — DISEASE DETAIL PAGE LOGIC
   Shows: Symptoms, Precautions, Conventional Care note,
   a dedicated step-by-step Medicine List (Ayurvedic +
   Homeopathic medicine names), full Ayurvedic treatment,
   full Homeopathic treatment, Foods to Eat, Foods to Avoid,
   Exercise — each as a VERTICAL list (one item per line).
   Also links out to the dedicated 7-Day Healing Plan page
   (healing-plan.html).
   ============================================================ */

/* Turns a comma-separated field like:
     "Belladonna (throbbing pain), Nux Vomica (from stress)"
   into a <ul><li> vertical list, one item per line. */
function renderList(fieldText){
  const items = splitItems(fieldText);
  if(!items.length) return `<div class="body">${fieldText}</div>`;
  return `<ul class="detail-list">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

/* Same as renderList, but numbered (1, 2, 3...) — used for the
   step-by-step Medicine List so each remedy reads as a clear step. */
function renderNumberedList(fieldText){
  const items = splitItems(fieldText);
  if(!items.length) return `<div class="body">${fieldText}</div>`;
  return `<ol class="detail-list numbered">${items.map(item => `<li>${item}</li>`).join("")}</ol>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(document.getElementById("navUser"));

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const d = getDiseaseById(id);
  const wrap = document.getElementById("detailWrap");

  if(!d){
    wrap.innerHTML = `<div class="empty-state"><div class="big">🤔</div>Condition not found. <a href="index.html">Go back home</a></div>`;
    return;
  }

  document.title = `${d.name} — Traditional Healthcare Advisory`;

  wrap.innerHTML = `
    <div class="detail-card">
      <div class="detail-title">
        <div class="icon">${d.icon}</div>
        <div>
          <span class="section-tag">${d.section}</span>
          <h1>${d.name}</h1>
        </div>
      </div>

      <div class="section-block">
        <div class="label"><span class="ic">🩺</span> Symptoms</div>
        ${renderList(d.symptoms)}
      </div>

      <div class="section-block avoid">
        <div class="label"><span class="ic">⚠️</span> Precautions — Avoid</div>
        ${renderList(d.avoid)}
        <div class="body" style="padding-left:26px;font-size:.85rem;color:var(--muted);">
          Seek a doctor if symptoms last more than 3–5 days, worsen, or recur often.
        </div>
      </div>

      <div class="section-block note">
        <div class="label"><span class="ic">💊</span> Conventional / OTC Care</div>
        <div class="body">This app does not recommend specific tablets or dosages. For over-the-counter medication, please consult a pharmacist or physician based on your exact symptoms and health history.</div>
      </div>

      <div class="section-block">
        <div class="label"><span class="ic">💊</span> Medicine List — Step by Step</div>
        <div class="body" style="padding-left:26px;">Named one by one, in the order you'd typically consider them. Confirm the exact medicine, form and potency with a qualified practitioner before use.</div>
        <div class="rx-format-grid" style="margin-top:10px;padding-left:26px;">
          <div class="rx-format-block">
            <div class="label"><span class="ic">🌿</span> Ayurvedic Medicines</div>
            ${renderNumberedList(d.ayurveda)}
          </div>
          <div class="rx-format-block">
            <div class="label"><span class="ic">🍃</span> Homeopathic Medicines</div>
            ${renderNumberedList(d.homeopathy)}
          </div>
        </div>
      </div>

      <div class="section-block">
        <div class="label"><span class="ic">🌿</span> Ayurvedic Treatment</div>
        ${renderList(d.ayurveda)}
      </div>

      <div class="section-block">
        <div class="label"><span class="ic">🍃</span> Homeopathic Treatment</div>
        ${renderList(d.homeopathy)}
      </div>

      <div class="section-block">
        <div class="label"><span class="ic">🥗</span> Foods & Drinks to Take</div>
        ${renderList(d.eat)}
      </div>

      <div class="section-block avoid">
        <div class="label"><span class="ic">🚫</span> Foods to Avoid</div>
        ${renderList(d.avoid)}
      </div>

      <div class="section-block">
        <div class="label"><span class="ic">🧘</span> Exercise & Lifestyle</div>
        ${renderList(d.exercise)}
      </div>

      <div class="section-block">
        <div class="label"><span class="ic">🌞</span> Overall Life Management</div>
        <ul class="detail-list">
          <li>7–8 hours of quality sleep every night</li>
          <li>2.5–3 litres of water through the day</li>
          <li>Whole-grain & seasonal-produce meals</li>
          <li>Minimal processed/fried food</li>
          <li>30 minutes of daily movement</li>
          <li>Simple breathing/meditation for stress control</li>
        </ul>
      </div>
    </div>

    <div class="detail-card plan-cta-card">
      <div style="font-size:2.2rem;">📅</div>
      <h2 style="color:var(--teal-900);margin:6px 0 4px;font-size:1.3rem;">Your 7-Day Healing Plan</h2>
      <p style="color:var(--muted);margin:0 0 16px;font-size:.92rem;">
        A day-by-day home-care table for <strong>${d.name}</strong> — diet, drinks, Ayurvedic remedies,
        Homeopathic remedies, exercises, and massages, named one by one for each day.
      </p>
      <a class="btn-primary btn-plan" href="healing-plan.html?id=${d.id}">📅 View 7-Day Healing Plan →</a>
    </div>

    <div class="detail-card">
      <div class="disclaimer">
        ℹ️ This is general educational information based on traditional Ayurvedic and homeopathic
        practice — it is <strong>not a prescription or diagnosis</strong>. Ayurvedic dosage depends on
        your body constitution (dosha) and homeopathic remedy selection depends on your exact symptom
        pattern. Please consult a registered Ayurvedic doctor (BAMS) or classical homeopath before
        starting any remedy — especially for children, pregnant/breastfeeding women, the elderly, or
        if you take other medication.
      </div>
    </div>
  `;

  // Add a speaker icon to every info section, so each one can be listened to individually
  addSectionSpeakers(wrap);

  // Narrate the page purpose, then let the "🌞 Overall Life Management" tips card
  // read Feature 8's per-section pattern (the report is ready, tap a section to hear more)
  narratePage(t("resultReady"));
});
