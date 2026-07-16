/* ============================================================
   Traditional Healthcare Advisory — TRANSLATIONS (free tier)
   Fixed navigational / narration phrases only (buttons, page
   intros, the safety warning). The disease/treatment content
   itself stays in English — translating that fully and
   accurately needs a paid translation API and is out of scope
   for the free build.

   NOTE: these translations are a best-effort starting point,
   not reviewed by a native speaker of each language. Please
   have someone fluent check them before relying on them in
   production, especially the safety warning.
   ============================================================ */

const T = {
  en: {
    welcome: "Please tell me your health problem in your own language.",
    micHint: "Tap the microphone and speak",
    listening: "Listening... please speak now",
    categoryPage: "Please choose the category that best matches your symptoms.",
    resultReady: "Your advisory report is ready. Tap any section to listen to more information.",
    healingPlanPage: "This page provides your daily healing plan.",
    safetyWarning: "If your symptoms are severe, worsening, or do not improve, please consult a qualified healthcare professional or visit your nearest hospital immediately. This advisory system provides educational and supportive information only and does not replace professional medical advice, diagnosis, or treatment.",
    takePhoto: "Take Photo",
    uploadGallery: "Upload from Gallery",
    highContrast: "High Contrast",
    replayAudio: "Replay page audio"
  },
  hi: {
    welcome: "कृपया अपनी स्वास्थ्य समस्या अपनी भाषा में बताएं।",
    micHint: "माइक्रोफ़ोन दबाएं और बोलें",
    listening: "सुन रहे हैं... कृपया अभी बोलें",
    categoryPage: "कृपया वह श्रेणी चुनें जो आपके लक्षणों से सबसे अच्छी तरह मेल खाती हो।",
    resultReady: "आपकी सलाह रिपोर्ट तैयार है। अधिक जानकारी सुनने के लिए किसी भी भाग पर टैप करें।",
    healingPlanPage: "यह पृष्ठ आपकी दैनिक उपचार योजना प्रदान करता है।",
    safetyWarning: "यदि आपके लक्षण गंभीर हैं, बढ़ रहे हैं, या ठीक नहीं हो रहे हैं, तो कृपया तुरंत किसी योग्य चिकित्सक से सलाह लें या नज़दीकी अस्पताल जाएं। यह प्रणाली केवल शैक्षिक और सहायक जानकारी देती है और यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है।",
    takePhoto: "फ़ोटो लें",
    uploadGallery: "गैलरी से अपलोड करें",
    highContrast: "हाई कॉन्ट्रास्ट",
    replayAudio: "पेज ऑडियो फिर से सुनें"
  },
  te: {
    welcome: "దయచేసి మీ ఆరోగ్య సమస్యను మీ సొంత భాషలో చెప్పండి.",
    micHint: "మైక్రోఫోన్ నొక్కి మాట్లాడండి",
    listening: "వింటున్నాము... దయచేసి ఇప్పుడు మాట్లాడండి",
    categoryPage: "దయచేసి మీ లక్షణాలకు సరిపోయే వర్గాన్ని ఎంచుకోండి.",
    resultReady: "మీ సలహా నివేదిక సిద్ధంగా ఉంది. మరింత సమాచారం వినడానికి ఏదైనా విభాగాన్ని నొక్కండి.",
    healingPlanPage: "ఈ పేజీ మీ రోజువారీ చికిత్సా ప్రణాళికను అందిస్తుంది.",
    safetyWarning: "మీ లక్షణాలు తీవ్రంగా ఉంటే, పెరుగుతుంటే లేదా తగ్గకపోతే, దయచేసి వెంటనే అర్హత కలిగిన వైద్యుడిని సంప్రదించండి లేదా సమీప ఆసుపత్రిని సందర్శించండి. ఈ వ్యవస్థ కేవలం విద్యా మరియు సహాయక సమాచారాన్ని మాత్రమే అందిస్తుంది మరియు వృత్తిపరమైన వైద్య సలహా, నిర్ధారణ లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు.",
    takePhoto: "ఫోటో తీయండి",
    uploadGallery: "గ్యాలరీ నుండి అప్‌లోడ్ చేయండి",
    highContrast: "అధిక కాంట్రాస్ట్",
    replayAudio: "పేజీ ఆడియో మళ్లీ వినండి"
  },
  ta: {
    welcome: "தயவுசெய்து உங்கள் உடல்நல பிரச்சினையை உங்கள் சொந்த மொழியில் கூறுங்கள்.",
    micHint: "மைக்ரோஃபோனை அழுத்தி பேசவும்",
    listening: "கேட்கிறோம்... தயவுசெய்து இப்போது பேசுங்கள்",
    categoryPage: "உங்கள் அறிகுறிகளுக்கு பொருந்தும் வகையை தேர்ந்தெடுக்கவும்.",
    resultReady: "உங்கள் ஆலோசனை அறிக்கை தயாராக உள்ளது. மேலும் தகவலுக்கு எந்த பகுதியையும் தட்டவும்.",
    healingPlanPage: "இந்தப் பக்கம் உங்கள் தினசரி குணப்படுத்தும் திட்டத்தை வழங்குகிறது.",
    safetyWarning: "உங்கள் அறிகுறிகள் கடுமையாக இருந்தால், மோசமடைந்தால் அல்லது குணமடையவில்லை என்றால், உடனடியாக ஒரு தகுதி வாய்ந்த மருத்துவரை அணுகவும் அல்லது அருகிலுள்ள மருத்துவமனையை பார்வையிடவும். இந்த அமைப்பு கல்வி மற்றும் ஆதரவு தகவல்களை மட்டுமே வழங்குகிறது, தொழில்முறை மருத்துவ ஆலோசனை, நோய் கண்டறிதல் அல்லது சிகிச்சைக்கு மாற்றாக இல்லை.",
    takePhoto: "புகைப்படம் எடு",
    uploadGallery: "கேலரியிலிருந்து பதிவேற்று",
    highContrast: "அதிக மாறுபாடு",
    replayAudio: "பக்க ஆடியோவை மீண்டும் கேளுங்கள்"
  },
  kn: {
    welcome: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಯನ್ನು ನಿಮ್ಮ ಸ್ವಂತ ಭಾಷೆಯಲ್ಲಿ ಹೇಳಿ.",
    micHint: "ಮೈಕ್ರೊಫೋನ್ ಒತ್ತಿ ಮಾತನಾಡಿ",
    listening: "ಕೇಳುತ್ತಿದ್ದೇವೆ... ದಯವಿಟ್ಟು ಈಗ ಮಾತನಾಡಿ",
    categoryPage: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಲಕ್ಷಣಗಳಿಗೆ ಹೊಂದುವ ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    resultReady: "ನಿಮ್ಮ ಸಲಹಾ ವರದಿ ಸಿದ್ಧವಾಗಿದೆ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಯಾವುದೇ ವಿಭಾಗವನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
    healingPlanPage: "ಈ ಪುಟವು ನಿಮ್ಮ ದೈನಂದಿನ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    safetyWarning: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳು ತೀವ್ರವಾಗಿದ್ದರೆ, ಹೆಚ್ಚುತ್ತಿದ್ದರೆ ಅಥವಾ ಸುಧಾರಿಸದಿದ್ದರೆ, ದಯವಿಟ್ಟು ತಕ್ಷಣ ಅರ್ಹ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ. ಈ ವ್ಯವಸ್ಥೆಯು ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸಹಾಯಕ ಮಾಹಿತಿಯನ್ನು ಮಾತ್ರ ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆ, ರೋಗನಿರ್ಣಯ ಅಥವಾ ಚಿಕಿತ್ಸೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
    takePhoto: "ಫೋಟೋ ತೆಗೆಯಿರಿ",
    uploadGallery: "ಗ್ಯಾಲರಿಯಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    highContrast: "ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್",
    replayAudio: "ಪುಟದ ಆಡಿಯೋ ಮತ್ತೆ ಕೇಳಿ"
  },
  ml: {
    welcome: "ദയവായി നിങ്ങളുടെ ആരോഗ്യ പ്രശ്നം നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ പറയുക.",
    micHint: "മൈക്രോഫോൺ അമർത്തി സംസാരിക്കുക",
    listening: "കേൾക്കുന്നു... ദയവായി ഇപ്പോൾ സംസാരിക്കുക",
    categoryPage: "നിങ്ങളുടെ ലക്ഷണങ്ങളുമായി ഏറ്റവും യോജിക്കുന്ന വിഭാഗം തിരഞ്ഞെടുക്കുക.",
    resultReady: "നിങ്ങളുടെ ഉപദേശ റിപ്പോർട്ട് തയ്യാറാണ്. കൂടുതൽ വിവരങ്ങൾ കേൾക്കാൻ ഏതെങ്കിലും വിഭാഗത്തിൽ ടാപ്പ് ചെയ്യുക.",
    healingPlanPage: "ഈ പേജ് നിങ്ങളുടെ ദൈനംദിന രോഗശാന്തി പദ്ധതി നൽകുന്നു.",
    safetyWarning: "നിങ്ങളുടെ ലക്ഷണങ്ങൾ ഗുരുതരമാണെങ്കിൽ, വർദ്ധിക്കുകയാണെങ്കിൽ, അല്ലെങ്കിൽ ഭേദമാകുന്നില്ലെങ്കിൽ, ദയവായി ഉടൻ ഒരു യോഗ്യതയുള്ള ഡോക്ടറെ സമീപിക്കുക അല്ലെങ്കിൽ അടുത്തുള്ള ആശുപത്രി സന്ദർശിക്കുക. ഈ സംവിധാനം വിദ്യാഭ്യാസപരവും സഹായകരവുമായ വിവരങ്ങൾ മാത്രമേ നൽകുന്നുള്ളൂ, ഇത് പ്രൊഫഷണൽ വൈദ്യോപദേശത്തിനോ രോഗനിർണയത്തിനോ ചികിത്സയ്ക്കോ പകരമല്ല.",
    takePhoto: "ഫോട്ടോ എടുക്കുക",
    uploadGallery: "ഗാലറിയിൽ നിന്ന് അപ്‌ലോഡ് ചെയ്യുക",
    highContrast: "ഹൈ കോൺട്രാസ്റ്റ്",
    replayAudio: "പേജ് ഓഡിയോ വീണ്ടും കേൾക്കുക"
  }
};

/* Looks up a phrase in the currently detected session language,
   falling back to English if that language or key is missing. */
function t(key){
  const lang = (typeof detectLanguage === "function") ? detectLanguage() : "en";
  return (T[lang] && T[lang][key]) || T.en[key] || "";
}
