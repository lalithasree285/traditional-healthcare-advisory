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

  // Render quick-pick symptom chips
  const chipRow = document.getElementById("chipRow");
  chipRow.innerHTML = HOME_QUICK_SYMPTOMS.map(key => {
    const cat = getCategoryByKey(key);
    return `<a class="chip" href="symptoms.html?cat=${cat.key}"><span>${cat.icon}</span> ${cat.label}</a>`;
  }).join("");

  // Search bar
  const form = document.getElementById("searchForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("searchInput").value.trim();
    if(!q) return;
    window.location.href = `symptoms.html?q=${encodeURIComponent(q)}`;
  });
});
