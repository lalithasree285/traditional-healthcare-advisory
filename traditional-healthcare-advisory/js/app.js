/* ============================================================
   Traditional Healthcare Advisory — HOME PAGE LOGIC
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(document.getElementById("navUser"));

  const user = getCurrentUser();
  const greetEl = document.getElementById("greeting");
  if(user){
    greetEl.textContent = `${greetingWord()}, ${user.name}! 🌿`;
    greetEl.style.display = "inline-block";
  } else {
    greetEl.style.display = "none";
  }

  // Render quick-pick symptom chips, each with a small speaker icon
  const chipRow = document.getElementById("chipRow");
  chipRow.innerHTML = HOME_QUICK_SYMPTOMS.map(key => {
    const cat = getCategoryByKey(key);
    return `
      <a class="chip" href="symptoms.html?cat=${cat.key}">
        <span>${cat.icon}</span> ${cat.label}
        <button type="button" class="speaker-btn chip-speaker" aria-label="Listen">🔊</button>
      </a>
    `;
  }).join("");
  chipRow.querySelectorAll(".chip").forEach(chip => {
    const label = chip.textContent.replace("🔊", "").trim();
    const spk = chip.querySelector(".chip-speaker");
    attachSpeaker(spk, `If you have symptoms matching ${label}, please choose this category.`);
  });

  // Search bar
  const form = document.getElementById("searchForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("searchInput").value.trim();
    if(!q) return;
    updateLanguageFromInput(q);
    window.location.href = `symptoms.html?q=${encodeURIComponent(q)}`;
  });

  // Mic button — voice input for the symptom search box
  const micBtn = document.getElementById("micBtn");
  const micStatus = document.getElementById("micStatus");
  const searchInput = document.getElementById("searchInput");

  micBtn.addEventListener("click", () => {
    micStatus.textContent = t("listening");
    micStatus.style.display = "block";
    micBtn.classList.add("listening");

    startVoiceInput(
      (transcript) => {
        searchInput.value = transcript;
        micStatus.style.display = "none";
        micBtn.classList.remove("listening");
        updateLanguageFromInput(transcript);
        window.location.href = `symptoms.html?q=${encodeURIComponent(transcript)}`;
      },
      (isListening) => {
        if(!isListening){
          micBtn.classList.remove("listening");
          micStatus.style.display = "none";
        }
      }
    );
  });

  // Camera / Gallery capture (stored for the session; no AI analysis — see media.js)
  const photoPreview = document.getElementById("photoPreview");
  const photoNote = document.getElementById("photoNote");

  function onPhotoStored(){
    photoNote.style.display = "block";
  }

  document.getElementById("cameraInput").addEventListener("change", (e) => {
    handleImageFile(e.target.files[0], photoPreview, onPhotoStored);
  });
  document.getElementById("galleryInput").addEventListener("change", (e) => {
    handleImageFile(e.target.files[0], photoPreview, onPhotoStored);
  });

  // Translate the static button labels into the detected session language
  document.getElementById("takePhotoLabel").textContent = t("takePhoto");
  document.getElementById("uploadGalleryLabel").textContent = t("uploadGallery");
  document.querySelector(".a11y-toggle").title = t("highContrast");

  // Page narration: the very first prompt of the whole experience
  narratePage(t("welcome"));
});
