/* ============================================================
   Traditional Healthcare Advisory — 7-DAY HEALING PLAN GENERATOR
   Builds a timed, day-by-day routine (wake time → bedtime) for
   ANY of the 50 diseases, using that disease's own Ayurveda,
   Homeopathy, Eat, Avoid and Exercise data — so every plan is
   specific to the condition, not generic filler.

   Structure: 3 week-phases
     Days 1-2  -> "Relief Phase"        (calm the acute symptom)
     Days 3-5  -> "Recovery Phase"      (steady daily routine)
     Days 6-7  -> "Strengthening Phase" (build resilience/prevent repeat)
   ============================================================ */

/* Splits on commas EXCEPT commas that fall inside parentheses, so
   "Belladonna (throbbing pain, worse with light/noise)" stays whole
   instead of being cut in half. */
function splitItems(str){
  const s = String(str || "");
  const parts = [];
  let depth = 0, current = "";
  for(const ch of s){
    if(ch === "(") depth++;
    if(ch === ")") depth--;
    if(ch === "," && depth <= 0){
      parts.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if(current.trim()) parts.push(current.trim());
  return parts.filter(Boolean);
}

/* Picks a different item from the list each day so the week doesn't
   repeat the exact same line 7 times, while never inventing new facts. */
function rotate(list, day){
  if(!list.length) return "";
  return list[(day - 1) % list.length];
}

/* Pulls out something drink-shaped from the "eat" field if present,
   otherwise falls back to a universal hydration suggestion. */
function extractDrink(eatList){
  const drinkWords = ["tea","water","juice","milk","buttermilk","soup","coconut water","ors"];
  const found = eatList.find(item => drinkWords.some(w => item.toLowerCase().includes(w)));
  return found || "Warm water";
}

/* Pulls out something massage/therapy-shaped from the "ayurveda" field
   (oil massage, Abhyanga, Basti, Shirodhara, Nasya, compress, etc.),
   otherwise falls back to a universal Ayurvedic self-massage routine. */
function extractMassage(ayurList, day){
  const massageWords = ["massage","oil","abhyanga","basti","shirodhara","nasya","compress","fomentation","therapy"];
  const matches = ayurList.filter(item => massageWords.some(w => item.toLowerCase().includes(w)));
  if(matches.length) return rotate(matches, day);
  return "Warm sesame oil self-massage (Abhyanga), 10 minutes before bathing";
}

/* Builds one row per day for the printable TABLE-format healing plan.
   Unlike buildWeeklyPlan() (hour-by-hour timeline), this returns compact
   per-day fields ready to drop straight into <td> cells. */
function buildTablePlan(d){
  const ayur = splitItems(d.ayurveda);
  const homeo = splitItems(d.homeopathy);
  const eat = splitItems(d.eat);
  const avoid = splitItems(d.avoid);
  const exercise = splitItems(d.exercise);
  const drink = extractDrink(eat);

  const rows = [];
  for(let day = 1; day <= 7; day++){
    const phase = phaseForDay(day);
    rows.push({
      day,
      phase,
      breakfast: rotate(eat, day),
      lunch: rotate(eat, day + 1) || eat[0] || d.eat,
      dinner: rotate(eat, day + 2) || eat[0] || d.eat,
      drinks: `${drink}; also ${rotate(eat, day + 3) || "plenty of warm water through the day"}`,
      ayurveda: rotate(ayur, day) || d.ayurveda,
      homeopathy: rotate(homeo, day) || d.homeopathy,
      exercise: rotate(exercise, day) || d.exercise,
      massage: extractMassage(ayur, day),
      avoid: rotate(avoid, day) || d.avoid
    });
  }
  return rows;
}

const PHASES = [
  { days:[1,2], key:"relief",        label:"Relief Phase",        blurb:"Focus on calming the main symptom and resting the body." },
  { days:[3,4,5], key:"recovery",    label:"Recovery Phase",      blurb:"Settle into a steady daily rhythm that supports healing." },
  { days:[6,7], key:"strengthen",    label:"Strengthening Phase", blurb:"Build resilience and prevent the problem from returning." }
];

function phaseForDay(day){
  return PHASES.find(p => p.days.includes(day));
}

/* Builds the full 7-day plan object for a disease record from data.js */
function buildWeeklyPlan(d){
  const ayur = splitItems(d.ayurveda);
  const homeo = splitItems(d.homeopathy);
  const eat = splitItems(d.eat);
  const avoid = splitItems(d.avoid);
  const exercise = splitItems(d.exercise);
  const drink = extractDrink(eat);

  const days = [];
  for(let day = 1; day <= 7; day++){
    const phase = phaseForDay(day);
    const exerciseFraming = phase.key === "relief"
      ? "Go gently — short and easy"
      : phase.key === "recovery"
      ? "Build up steadily"
      : "Full routine, at a comfortable pace";

    const schedule = [
      { time:"6:00 AM", icon:"💧", title:"Wake & Hydrate",
        detail:`Drink a glass of ${drink.toLowerCase()}. Avoid checking your phone for the first 10 minutes.` },
      { time:"6:30 AM", icon:"🌿", title:"Morning Ayurvedic Care",
        detail: rotate(ayur, day) || "Follow your practitioner's morning routine." },
      { time:"7:00 AM", icon:"🧘", title:"Movement / Exercise",
        detail:`${exerciseFraming}: ${rotate(exercise, day) || "light stretching and deep breathing"}.` },
      { time:"8:00 AM", icon:"🍽️", title:"Breakfast",
        detail: rotate(eat, day) || "A light, easily digestible breakfast." },
      { time:"11:00 AM", icon:"🥤", title:"Mid-Morning Drink",
        detail:`${drink}, sipped slowly. Avoid ${rotate(avoid, day) || "processed snacks"} at this time.` },
      { time:"1:00 PM", icon:"🥗", title:"Lunch",
        detail:`${rotate(eat, day + 1) || d.eat}. Keep portions moderate — don't overeat.` },
      { time:"4:00 PM", icon:"🍃", title:"Homeopathic Care",
        detail:`${rotate(homeo, day) || d.homeopathy} — take only as advised by a classical homeopath.` },
      { time:"6:00 PM", icon:"🚶", title:"Light Activity",
        detail:"A relaxed 10-15 minute walk or gentle stretching, avoiding overexertion." },
      { time:"8:00 PM", icon:"🍲", title:"Dinner",
        detail:`Keep it light: ${rotate(eat, day + 2) || d.eat}. Avoid ${rotate(avoid, day + 1) || d.avoid} at night.` },
      { time:"9:30 PM", icon:"🌙", title:"Night Routine",
        detail:"Dim the lights, avoid screens, and settle into 7-8 hours of sleep. This is when the body repairs itself." }
    ];

    days.push({ day, phase, schedule });
  }
  return days;
}
