/* fuzzyMatch.js
   యూజర్ తెలుగులో కొద్దిగా తప్పుగా టైప్ చేసినా / మాట్లాడినా,
   లేదా వేరే విధంగా చెప్పినా (వేర్వేరు పదాలతో) సరైన లక్షణాన్ని గుర్తించడానికి.
*/

// రెండు స్ట్రింగ్‌ల మధ్య Levenshtein Distance (ఎన్ని అక్షరాలు మారితే సరిపోతుందో)
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// స్పేసులు, ప్రత్యేక చిహ్నాలు తీసేసి పోలిక సులభతరం చేయడం
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[.,!?।॥\-_/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ఒక పదం (phrase) ఒక alias తో ఎంత దగ్గరగా సరిపోతుందో % లో చెప్పే స్కోరు
function similarityScore(input, alias) {
  const a = normalize(input);
  const b = normalize(alias);
  if (a.includes(b) || b.includes(a)) return 1; // నేరుగా ఉంటే perfect match
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length) || 1;
  return 1 - dist / maxLen; // 1 = సరైనది, 0 = సరిపోలేదు
}

/* యూజర్ మాట్లాడిన / రాసిన పూర్తి వాక్యం లోంచి తెలిసిన లక్షణాలను వెతకడం.
   threshold ~0.6 దాటితే మ్యాచ్ అయినట్టు లెక్క. ఇది spelling mistakes,
   వేరే పదాలతో చెప్పడం (aliases) రెండింటినీ కవర్ చేస్తుంది. */
function detectSymptoms(userText, symptomsList, threshold = 0.6) {
  const detected = new Set();
  const words = normalize(userText).split(" ");
  // మొత్తం వాక్యంతో పాటు, 2-3 పదాల చిన్న ముక్కలతో కూడా పోల్చడం
  const chunks = [normalize(userText)];
  for (let size = 1; size <= 3; size++) {
    for (let i = 0; i + size <= words.length; i++) {
      chunks.push(words.slice(i, i + size).join(" "));
    }
  }

  symptomsList.forEach((symptom) => {
    let bestScore = 0;
    symptom.aliases.concat(symptom.label).forEach((alias) => {
      chunks.forEach((chunk) => {
        const score = similarityScore(chunk, alias);
        if (score > bestScore) bestScore = score;
      });
    });
    if (bestScore >= threshold) {
      detected.add(symptom.id);
    }
  });

  return Array.from(detected);
}

/* లక్షణాల ఆధారంగా అనుమానిత వ్యాధులను నిర్ణయించడం */
function predictDiseases(detectedSymptomIds, diseaseRules) {
  const results = [];
  diseaseRules.forEach((rule) => {
    const matchedCount = rule.match.filter((s) =>
      detectedSymptomIds.includes(s)
    ).length;
    if (matchedCount >= rule.minMatch) {
      results.push({ ...rule, matchedCount });
    }
  });
  // ఎక్కువ లక్షణాలు సరిపోయిన వ్యాధిని ముందు చూపించడం
  results.sort((a, b) => b.matchedCount - a.matchedCount);
  return results;
}

if (typeof module !== "undefined") {
  module.exports = { levenshtein, normalize, similarityScore, detectSymptoms, predictDiseases };
}
