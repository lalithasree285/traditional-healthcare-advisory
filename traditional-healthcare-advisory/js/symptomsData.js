/* symptomsData.js
   లక్షణాలు (Symptoms) -> వాటికి సంబంధించిన వేరియంట్లు (spelling/spoken variations)
   ఇవి యూజర్ కొద్దిగా తప్పుగా పలికినా / రాసినా పోల్చుకోవడానికి ఉపయోగపడతాయి.
*/

const SYMPTOMS = [
  {
    id: "fever",
    label: "జ్వరం",
    aliases: ["జ్వరం", "జ్వరము", "జరం", "జ్వరమ్", "వళ్ళు వేడి", "ఒళ్ళు వేడిగా ఉంది", "బాడీ హీట్"]
  },
  {
    id: "headache",
    label: "తలనొప్పి",
    aliases: ["తలనొప్పి", "తల నొప్పి", "తలనొప్ప", "తలనొప్పిగా ఉంది", "తల పోట్టు", "తలపోటు"]
  },
  {
    id: "cough",
    label: "దగ్గు",
    aliases: ["దగ్గు", "దగ్గుతోంది", "దగ్గొస్తుంది", "కఫం దగ్గు", "డగ్గు"]
  },
  {
    id: "cold",
    label: "జలుబు",
    aliases: ["జలుబు", "జలుబుగా ఉంది", "ముక్కు కారడం", "నాసల్ కారుతోంది", "జలబు"]
  },
  {
    id: "sorethroat",
    label: "గొంతు నొప్పి",
    aliases: ["గొంతు నొప్పి", "గొంతునొప్పి", "గొంతు మంట", "గొంతు పట్టేసింది", "గొంతు నొప్ప"]
  },
  {
    id: "stomachpain",
    label: "కడుపు నొప్పి",
    aliases: ["కడుపు నొప్పి", "కడుపునొప్పి", "పొట్ట నొప్పి", "కడుపులో నొప్పి", "కడపు నొప్పి"]
  },
  {
    id: "vomiting",
    label: "వాంతులు",
    aliases: ["వాంతులు", "వాంతి అవుతోంది", "వామిటింగ్", "వాంతులు అవుతున్నాయి", "వాంతులు అవుతుంది"]
  },
  {
    id: "diarrhea",
    label: "విరేచనాలు",
    aliases: ["విరేచనాలు", "వదులు విరేచనాలు", "లూజ్ మోషన్స్", "డయేరియా", "విరేచనలు"]
  },
  {
    id: "bodypain",
    label: "ఒళ్ళు నొప్పులు",
    aliases: ["ఒళ్ళు నొప్పులు", "ఒళ్లు నొప్పులు", "శరీర నొప్పులు", "బాడీ పెయిన్స్", "ఒల్లు నొప్పులు"]
  },
  {
    id: "chestpain",
    label: "ఛాతీ నొప్పి",
    aliases: ["ఛాతీ నొప్పి", "ఛాతి నొప్పి", "గుండె దగ్గర నొప్పి", "చాతీ నొప్పి", "చెస్ట్ పెయిన్"]
  },
  {
    id: "breathless",
    label: "శ్వాస ఆడకపోవడం",
    aliases: ["శ్వాస ఆడకపోవడం", "శ్వాస తీసుకోవడం కష్టంగా ఉంది", "ఊపిరి ఆడటం లేదు", "శ్వాస ఆడలేదు", "బ్రీతింగ్ ప్రాబ్లం"]
  },
  {
    id: "jointpain",
    label: "కీళ్ల నొప్పులు",
    aliases: ["కీళ్ల నొప్పులు", "కీళ్ళ నొప్పులు", "కీళ్లనొప్పులు", "జాయింట్ పెయిన్స్", "మోకాళ్ల నొప్పులు"]
  },
  {
    id: "rash",
    label: "చర్మంపై దద్దుర్లు",
    aliases: ["చర్మంపై దద్దుర్లు", "శరీరంపై దద్దుర్లు", "దద్దుర్లు వచ్చాయి", "స్కిన్ రాష్", "దద్దుర్లు"]
  },
  {
    id: "fatigue",
    label: "బలహీనత / అలసట",
    aliases: ["బలహీనత", "అలసట", "నీరసంగా ఉంది", "నీరసం", "ఏమి తోచనట్టు అలసిపోయాను"]
  },
  {
    id: "eyeburn",
    label: "కళ్ళు మంట / ఎర్రబడటం",
    aliases: ["కళ్ళు మంట", "కళ్ళు ఎర్రబడ్డాయి", "కంటి నొప్పి", "కళ్ళు మంటగా ఉన్నాయి", "కళ్లు మంట"]
  }
];

/* లక్షణాల కలయిక ఆధారంగా అనుమానిత వ్యాధి (rule-based prediction).
   ఇది కేవలం ప్రాథమిక అవగాహన కోసం మాత్రమే — వైద్యుల సలహా తప్పనిసరి. */
const DISEASE_RULES = [
  {
    match: ["fever", "cough", "sorethroat", "cold"],
    minMatch: 2,
    disease: "సాధారణ జలుబు / ఫ్లూ (Common Cold / Flu)",
    advice: "విశ్రాంతి తీసుకోండి, గోరువెచ్చని నీరు తాగండి, ఆవిరి పట్టండి.",
    seeDoctor: "3 రోజుల తర్వాత కూడా జ్వరం తగ్గకపోతే వైద్యుడిని సంప్రదించండి.",
    table: {
      condition: "Common Cold / Flu",
      medicine: "Paracetamol 500mg",
      dosage: "1 టాబ్లెట్, రోజుకు 2-3 సార్లు (భోజనం తర్వాత)",
      duration: "3-5 రోజులు"
    }
  },
  {
    match: ["fever", "headache", "bodypain"],
    minMatch: 3,
    disease: "వైరల్ ఫీవర్ / డెంగ్యూ అనుమానం (Viral Fever / Possible Dengue)",
    advice: "ద్రవాహారం ఎక్కువగా తీసుకోండి, పూర్తి విశ్రాంతి అవసరం.",
    seeDoctor: "వెంటనే వైద్యుడిని కలిసి రక్త పరీక్ష (Platelet Count) చేయించుకోండి.",
    table: {
      condition: "Viral Fever / Suspected Dengue",
      medicine: "Paracetamol మాత్రమే (Aspirin/Ibuprofen వద్దు)",
      dosage: "వైద్యుడి సలహా మేరకు",
      duration: "వైద్యుడిని కలిసే వరకు"
    }
  },
  {
    match: ["stomachpain", "vomiting", "diarrhea"],
    minMatch: 2,
    disease: "ఫుడ్ పాయిజనింగ్ / గ్యాస్ట్రోఎంటెరైటిస్ (Food Poisoning / Gastroenteritis)",
    advice: "ORS ద్రావణం తాగండి, జిడ్డు, కారం ఆహారం మానుకోండి.",
    seeDoctor: "నిర్జలీకరణ లక్షణాలు కనిపిస్తే వెంటనే ఆసుపత్రికి వెళ్ళండి.",
    table: {
      condition: "Food Poisoning / Gastroenteritis",
      medicine: "ORS + Probiotics",
      dosage: "ప్రతి విరేచనం తర్వాత 1 గ్లాసు ORS",
      duration: "1-2 రోజులు, తగ్గకపోతే వైద్యుడిని కలవండి"
    }
  },
  {
    match: ["chestpain", "breathless"],
    minMatch: 2,
    disease: "గుండె సంబంధిత అత్యవసర పరిస్థితి అనుమానం (Possible Cardiac Emergency)",
    advice: "వెంటనే కదలకుండా విశ్రాంతి తీసుకోండి.",
    seeDoctor: "ఇది అత్యవసర పరిస్థితి కావొచ్చు — వెంటనే 108కి కాల్ చేసి ఆసుపత్రికి వెళ్ళండి.",
    table: {
      condition: "Possible Cardiac Emergency",
      medicine: "స్వీయ చికిత్స వద్దు",
      dosage: "-",
      duration: "వెంటనే అత్యవసర వైద్య సహాయం తీసుకోండి"
    }
  },
  {
    match: ["jointpain", "fever"],
    minMatch: 2,
    disease: "వైరల్ ఆర్థరైటిస్ / చికున్‌గున్యా అనుమానం (Viral Arthritis / Possible Chikungunya)",
    advice: "కీళ్లకు విశ్రాంతి ఇవ్వండి, గోరువెచ్చని కాపడం పెట్టుకోండి.",
    seeDoctor: "నొప్పి, వాపు కొనసాగితే వైద్యుడిని సంప్రదించండి.",
    table: {
      condition: "Viral Arthritis / Possible Chikungunya",
      medicine: "Paracetamol",
      dosage: "వైద్యుడి సలహా మేరకు",
      duration: "5-7 రోజులు"
    }
  },
  {
    match: ["rash", "fever"],
    minMatch: 1,
    disease: "అలర్జీ / చర్మ ఇన్ఫెక్షన్ అనుమానం (Allergy / Skin Infection)",
    advice: "దురద ఉన్న చోట గోకవద్దు, పరిశుభ్రంగా ఉంచుకోండి.",
    seeDoctor: "దద్దుర్లు వ్యాపిస్తే చర్మవైద్యుడిని సంప్రదించండి.",
    table: {
      condition: "Allergy / Skin Infection",
      medicine: "Antihistamine (Cetirizine)",
      dosage: "రాత్రి 1 టాబ్లెట్",
      duration: "3-5 రోజులు"
    }
  },
  {
    match: ["headache"],
    minMatch: 1,
    disease: "సాధారణ తలనొప్పి / మైగ్రేన్ (Tension Headache / Migraine)",
    advice: "చీకటి, నిశ్శబ్ద గదిలో విశ్రాంతి తీసుకోండి, తగినంత నీరు తాగండి.",
    seeDoctor: "తలనొప్పి తరచుగా వస్తుంటే వైద్యుడిని సంప్రదించండి.",
    table: {
      condition: "Tension Headache / Migraine",
      medicine: "Paracetamol 500mg",
      dosage: "1 టాబ్లెట్ అవసరమైనప్పుడు",
      duration: "1-2 రోజులు"
    }
  },
  {
    match: ["fatigue", "bodypain"],
    minMatch: 1,
    disease: "సాధారణ నీరసం / నిద్ర లేమి (General Fatigue / Weakness)",
    advice: "తగినంత నిద్ర, పోషకాహారం తీసుకోండి.",
    seeDoctor: "నీరసం చాలా రోజులు కొనసాగితే రక్త పరీక్షలు చేయించుకోండి.",
    table: {
      condition: "General Fatigue / Weakness",
      medicine: "మల్టీవిటమిన్ సప్లిమెంట్",
      dosage: "రోజుకు 1 టాబ్లెట్",
      duration: "2-4 వారాలు"
    }
  }
];

if (typeof module !== "undefined") {
  module.exports = { SYMPTOMS, DISEASE_RULES };
}
