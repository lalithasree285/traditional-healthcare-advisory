/* ============================================================
   Traditional Healthcare Advisory — 7-DAY HEALING PLAN PAGE
   Renders the plan as 7 SEPARATE day-named tables (Monday ...
   Sunday), built from the hour-by-hour schedule in
   buildWeeklyPlan() (weekly-plan.js). Each table lists that
   day's steps top-to-bottom with a Time / Step / What To Do
   column, and each day gets its own page when printed so
   nothing feels cramped.
   ============================================================ */

const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(document.getElementById("navUser"));

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const d = getDiseaseById(id);
  const wrap = document.getElementById("planWrap");
  const backLink = document.getElementById("backLink");

  if(!d){
    wrap.innerHTML = `<div class="empty-state"><div class="big">🤔</div>Condition not found. <a href="index.html">Go back home</a></div>`;
    return;
  }

  backLink.href = `disease.html?id=${d.id}`;
  document.title = `7-Day Healing Plan — ${d.name}`;

  const days = buildWeeklyPlan(d);

  const mainNoteBanner = `
    <div class="main-note-banner">
      ⚠️ <strong>Main Note:</strong> if you are still suffering with the same problem after following
      this healing plan, you must visit the respective doctor near you.
    </div>
  `;

  const introCard = `
    <div class="detail-card no-print-shadow">
      <div class="detail-title">
        <div class="icon">${d.icon}</div>
        <div>
          <span class="section-tag">${d.section} • 7-Day Home Healing Plan</span>
          <h1>${d.name}</h1>
        </div>
      </div>
      <p style="color:var(--muted);font-size:.92rem;margin:6px 0 0;">
        A day-by-day, hour-by-hour routine built from this condition's own Ayurvedic, Homeopathic, food,
        exercise and massage guidance. Each day below has its own table — follow it top to bottom, one
        step at a time.
      </p>
      <button class="btn-primary btn-print no-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
    </div>
  `;

  const prescriptionFormatCard = `
    <div class="detail-card">
      <h2 class="plan-table-title">📝 How To Read The Prescription Format</h2>
      <p style="color:var(--muted);font-size:.9rem;margin:0 0 16px;">
        Ayurvedic and Homeopathic remedies are written down in a specific structure. Knowing the format
        helps you understand what a practitioner's prescription means — the exact remedy, potency and
        dosage for <strong>your</strong> case should always come from a qualified practitioner, not this app.
      </p>
      <div class="rx-format-grid">
        <div class="rx-format-block">
          <div class="label"><span class="ic">🌿</span> Ayurvedic Prescription Format</div>
          <ul class="detail-list">
            <li><strong>Remedy Name</strong> — e.g. Triphala Churna, Ashwagandha Vati</li>
            <li><strong>Form</strong> — Churna (powder), Vati/Gutika (tablet), Kwath (decoction), Taila (oil), Arishta (tonic)</li>
            <li><strong>Anupana (vehicle)</strong> — taken with warm water, honey or milk, as directed</li>
            <li><strong>Dosage</strong> — decided by the doctor based on your body constitution (dosha)</li>
            <li><strong>Timing</strong> — before or after food, as prescribed</li>
            <li><strong>Duration</strong> — length of the course, as prescribed</li>
          </ul>
        </div>
        <div class="rx-format-block">
          <div class="label"><span class="ic">🍃</span> Homeopathic Prescription Format</div>
          <ul class="detail-list">
            <li><strong>Remedy Name</strong> — e.g. Belladonna, Nux Vomica, Arnica Montana</li>
            <li><strong>Potency</strong> — e.g. 30C, 200C, 1M, set by the homeopath based on symptom intensity</li>
            <li><strong>Form</strong> — pills/globules, mother tincture, or liquid dilution</li>
            <li><strong>Dosage & Frequency</strong> — number of drops/pills and how often, as directed</li>
            <li><strong>Timing</strong> — usually on an empty stomach, avoiding coffee/mint around dose time</li>
            <li><strong>Duration / Repetition</strong> — as advised; don't extend or repeat on your own</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  const dayCards = days.map((dayObj, idx) => {
    const dayName = DAY_NAMES[idx % 7];
    const pageBreakClass = idx === 0 ? "" : "page-break";
    const daySpeechText = `${dayName}, Day ${dayObj.day}, ${dayObj.phase.label}. ` +
      dayObj.schedule.map(item => `${item.time}: ${item.title}. ${item.detail}`).join(" ");
    return `
      <div class="detail-card plan-page day-plan-card ${pageBreakClass}">
        <div class="day-plan-head">
          <h2 class="plan-table-title">📅 ${dayName}
            <span style="color:var(--muted);font-weight:600;font-size:.85rem;">— Day ${dayObj.day}</span>
            <button type="button" class="speaker-btn day-speaker" aria-label="Listen to this day's plan" data-day-index="${idx}">🔊</button>
          </h2>
          <span class="day-badge">${dayObj.phase.label}</span>
        </div>
        <div class="phase-banner">${dayObj.phase.blurb}</div>
        <div class="table-scroll">
          <table class="plan-table day-plan-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Step</th>
                <th>What To Do</th>
              </tr>
            </thead>
            <tbody>
              ${dayObj.schedule.map(item => `
                <tr>
                  <td class="time-cell">${item.time}</td>
                  <td class="step-cell">${item.icon} ${item.title}</td>
                  <td>${item.detail}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join("");

  const closingCards = `
    <div class="detail-card plan-page page-break">
      <div class="disclaimer">
        🩺 <strong>Checkpoint:</strong> if this symptom hasn't clearly improved by Day 5, worsens at any
        point, or you notice fever above 102°F (38.9°C), severe pain, bleeding, or breathing difficulty —
        stop the home routine and see a doctor promptly.
      </div>
    </div>

    <div class="detail-card no-print">
      <div class="disclaimer">
        ℹ️ This plan is general educational information based on traditional Ayurvedic and homeopathic
        practice — it is <strong>not a prescription or diagnosis</strong>. Please consult a registered
        Ayurvedic doctor (BAMS) or classical homeopath before starting any remedy, especially for
        children, pregnant/breastfeeding women, the elderly, or if you take other medication.
      </div>
    </div>
  `;

  wrap.innerHTML = mainNoteBanner + introCard + prescriptionFormatCard + dayCards + closingCards;

  // Wire each day's speaker icon to read that whole day's schedule aloud
  wrap.querySelectorAll(".day-speaker").forEach((btn, idx) => {
    const dayObj = days[idx];
    const dayName = DAY_NAMES[idx % 7];
    const text = `${dayName}, Day ${dayObj.day}, ${dayObj.phase.label}. ` +
      dayObj.schedule.map(item => `${item.time}: ${item.title}. ${item.detail}`).join(" ");
    attachSpeaker(btn, text);
  });

  // Also add speaker icons to the intro and prescription-format cards
  addSectionSpeakers(wrap);

  // Narrate the page purpose + the mandated safety warning (Feature 10)
  narratePage(`${t("healingPlanPage")} ${t("safetyWarning")}`);
});
