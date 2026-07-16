/* ============================================================
   Traditional Healthcare Advisory - DATA FILE
   All 50 conditions + 26 searchable symptom categories.
   Edit this file to add/change conditions - every page reads
   from here, so one edit updates the whole site.
   ============================================================ */

const DISEASES = [
  {id:1, name:"Headache", section:"Head & Sensory", icon:"🤕",
    symptoms:"Dull or throbbing pain in head, pressure around forehead/temples, sometimes with neck stiffness",
    ayurveda:"Shirodhara (warm oil drip therapy), Brahmi Vati, Sudarshan churna with warm water, massaging temples and forehead with Ksheerabala oil or peppermint oil, a paste of sandalwood on the forehead",
    homeopathy:"Belladonna (throbbing pain, worse with light/noise, 30C potency commonly used), Nux Vomica (from stress/overwork/overeating), Bryonia (worse on movement, better lying still), Gelsemium (band-like pain from tension)",
    eat:"Warm water sipped through the day, ginger tea, coconut water, hydrating fruits (watermelon, orange), a handful of soaked almonds",
    avoid:"Caffeine excess, processed/fried food, skipping meals, strong perfumes/bright screens during an episode",
    exercise:"Neck stretches (chin-to-chest, ear-to-shoulder, 5 reps each side), Anulom Vilom pranayama for 5–10 minutes, Shavasana rest, 7–8 hrs consistent sleep"},
  {id:2, name:"Migraine", section:"Head & Sensory", icon:"🌀",
    symptoms:"One-sided throbbing pain, nausea, light/sound sensitivity, sometimes visual aura",
    ayurveda:"Nasya therapy (a few drops of medicated Anu Taila in each nostril), Shirodhara, Saraswatarishta, Brahmi-Amla juice, avoiding known trigger foods",
    homeopathy:"Sanguinaria (right-sided migraine, better after vomiting), Iris Versicolor (with visual aura + vomiting), Gelsemium (dull, band-like with heaviness), Natrum Muriaticum (from sun exposure or emotional stress)",
    eat:"Magnesium-rich foods (spinach, almonds, pumpkin seeds), regular small meals every 3–4 hours, coconut water, ginger tea at first sign",
    avoid:"Chocolate, aged cheese, alcohol, MSG, processed meats, irregular sleep, skipping meals",
    exercise:"Yoga nidra or Shavasana in a dark quiet room, slow diaphragmatic breathing (4-count inhale, 6-count exhale), regular sleep schedule, scheduled screen breaks every 30–40 minutes"},
  {id:3, name:"Dizziness (Vertigo)", section:"Head & Sensory", icon:"😵",
    symptoms:"Spinning sensation, imbalance, nausea, unsteady walking",
    ayurveda:"Ashwagandha, Brahmi Vati, ginger tea, adequate hydration, Chandraprabha Vati for recurring vertigo",
    homeopathy:"Cocculus Indicus (motion-related, worse riding in vehicles), Conium (turning head worsens it), Gelsemium (with weakness/trembling), Bryonia (worse with any movement)",
    eat:"Iron-rich foods (beetroot, dates, spinach), small frequent meals, fluids like coconut water and electrolyte drinks",
    avoid:"Sudden posture changes, low-salt/low-sugar crash diets, skipping meals, prolonged screen time",
    exercise:"Epley/Brandt-Daroff balance maneuvers if BPPV-related (learn from a physiotherapist), slow head-turn practice, gaze-stabilization exercises, sitting for a minute before standing up"},
  {id:4, name:"Earache", section:"Head & Sensory", icon:"👂",
    symptoms:"Sharp/dull pain in ear, sometimes with reduced hearing or discharge",
    ayurveda:"Warm garlic-infused sesame oil drops (only if eardrum intact), Karna Purana therapy, a warm cloth compress against the ear",
    homeopathy:"Chamomilla (severe pain, irritability, worse at night), Pulsatilla (thick yellow discharge, child clingy), Belladonna (sudden throbbing onset), Hepar Sulph (sharp splinter-like pain)",
    eat:"Warm fluids (soups, herbal tea), vitamin C-rich fruits (oranges, guava)",
    avoid:"Cold drinks, inserting cotton buds/objects in ear, swimming with an active infection, air travel until resolved",
    exercise:"Gentle jaw movements and yawning to relieve pressure, avoid pressure-changing activities (diving, flying) until healed"},
  {id:5, name:"Sore Throat", section:"Head & Sensory", icon:"🗣️",
    symptoms:"Scratchy/painful throat, difficulty swallowing, sometimes redness",
    ayurveda:"Gargling with warm salt water + turmeric (3–4 times daily), Licorice (Yashtimadhu) tea, Sitopaladi churna with honey, clove held in the mouth",
    homeopathy:"Belladonna (bright red, sudden, throbbing), Mercurius Solubilis (with bad breath and excess saliva), Phytolacca (pain radiating to ears on swallowing), Hepar Sulph (splinter-like pain, worse cold)",
    eat:"Warm soups, honey with warm water and lemon, soft foods (khichdi, mashed banana), herbal teas (ginger, tulsi)",
    avoid:"Cold beverages, spicy/fried food, smoking, shouting or straining the voice",
    exercise:"Voice rest, steam inhalation twice daily (5–10 minutes with a towel over the head), gentle humming to soothe the throat"},
  {id:6, name:"Blocked/Runny Nose", section:"Head & Sensory", icon:"🤧",
    symptoms:"Nasal congestion or discharge, reduced smell, mouth breathing",
    ayurveda:"Nasya with Anu Taila (2 drops each nostril), steam inhalation with ajwain/eucalyptus, Trikatu churna with honey",
    homeopathy:"Allium Cepa (watery discharge, burning, worse indoors), Nux Vomica (blocked at night, clear by day), Kali Bichromicum (thick stringy mucus), Pulsatilla (thick yellow-green discharge)",
    eat:"Warm soups, ginger-turmeric tea, vitamin C fruits (amla, orange), black pepper-honey mix",
    avoid:"Dairy (can thicken mucus for some), cold food/drinks, dust exposure, air-conditioning drafts",
    exercise:"Steam inhalation twice daily, Jal Neti (saline nasal rinse), light Kapalabhati breathing once congestion eases"},
  {id:7, name:"Sinusitis", section:"Head & Sensory", icon:"😤",
    symptoms:"Facial pain/pressure, blocked nose, thick discharge, headache",
    ayurveda:"Nasya therapy with medicated oil, Trikatu churna, steam with eucalyptus oil, Sitopaladi churna twice daily",
    homeopathy:"Kali Bichromicum (thick stringy mucus, pressure at nose bridge), Hydrastis (thick yellow discharge, post-nasal drip), Pulsatilla (worse lying down), Silicea (chronic/recurrent cases)",
    eat:"Warm fluids, spicy foods in moderation (helps drainage), turmeric milk at night, ginger tea",
    avoid:"Cold/dairy-heavy foods, dust, smoke, swimming (chlorinated water can irritate sinuses)",
    exercise:"Steam inhalation twice daily, facial massage over sinus points, Jal Neti (nasal rinse), gentle forward-bending yoga poses to ease pressure"},
  {id:8, name:"Toothache", section:"Head & Sensory", icon:"🦷",
    symptoms:"Sharp/throbbing pain in tooth or gums, sensitivity to hot/cold",
    ayurveda:"Clove oil dabbed on the affected tooth, warm salt water rinse, Triphala gargle, a pinch of asafoetida (hing) paste on the gum",
    homeopathy:"Plantago (with sensitivity to touch/cold), Chamomilla (unbearable pain, worse at night), Hypericum (nerve-type pain after dental work), Merc Sol (with excess saliva and bad breath)",
    eat:"Soft foods (mashed potato, curd rice), calcium-rich foods (milk, sesame seeds), lukewarm liquids",
    avoid:"Sugary foods, very hot/cold items, hard/crunchy foods, chewing on the painful side",
    exercise:"Gentle jaw movements, warm (not hot) compress on the cheek; see a dentist if pain persists more than 2 days"},
  {id:9, name:"Bad Breath (Halitosis)", section:"Head & Sensory", icon:"👄",
    symptoms:"Persistent unpleasant mouth odor",
    ayurveda:"Oil pulling with sesame/coconut oil for 10 minutes each morning, chewing fennel/cardamom after meals, Triphala mouth rinse",
    homeopathy:"Merc Sol (excess saliva, metallic taste), Kali Phos (nervous exhaustion related), Nux Vomica (from overeating/indigestion), Chamomilla (bitter taste in mouth)",
    eat:"Fresh fruits, plenty of water through the day, fennel or cardamom seeds after meals, green tea",
    avoid:"Garlic/onion excess, smoking, sugary drinks, dry mouth (stay hydrated)",
    exercise:"Tongue scraping every morning, proper brushing routine (twice daily, 2 minutes each), flossing daily"},
  {id:10, name:"Watery/Itchy Eyes", section:"Head & Sensory", icon:"👁️",
    symptoms:"Eye redness, itching, watering, mild irritation",
    ayurveda:"Triphala eye wash (cooled, strained decoction), rose water drops, cold cucumber slice compress, Netra Tarpana therapy for chronic cases",
    homeopathy:"Euphrasia (watering, burning, feels like sand in eye), Allium Cepa (bland tears with cold), Apis Mellifica (swelling, stinging pain), Pulsatilla (thick discharge, worse in warm rooms)",
    eat:"Vitamin A-rich foods (carrots, spinach, pumpkin), omega-3 foods (walnuts, flaxseed)",
    avoid:"Screen overuse, rubbing eyes, dusty/smoky environments, contact lens overuse during flare-up",
    exercise:"Eye exercises (rolling, focusing near-far), 20-20-20 screen rule (every 20 min, look 20 feet away for 20 sec), blinking exercises to reduce dryness"},
  {id:11, name:"Indigestion", section:"Digestive", icon:"🍽️",
    symptoms:"Fullness, discomfort after eating, mild nausea",
    ayurveda:"Hingvashtak churna before meals, ajwain water (1 tsp ajwain boiled in water), ginger with rock salt before meals, Lavan Bhaskar churna after meals",
    homeopathy:"Nux Vomica (from overeating/spicy food), Carbo Veg (bloating, feels worse lying down), Lycopodium (worse late afternoon/evening), China (gas-related fullness)",
    eat:"Light khichdi, buttermilk with cumin, cumin-ginger tea, ajwain water",
    avoid:"Fried/oily food, overeating, late-night meals, carbonated drinks",
    exercise:"Short walk after meals (Vajrasana/thunderbolt pose for 5–10 minutes is ideal after eating), avoid lying down right after eating"},
  {id:12, name:"Acidity/Heartburn", section:"Digestive", icon:"🔥",
    symptoms:"Burning sensation in chest/throat, sour belching",
    ayurveda:"Avipattikar churna at night, cold milk, coconut water, Amalaki (Amla) powder with water, chewing a few fennel seeds after meals",
    homeopathy:"Robinia (sour belching, worse at night), Nux Vomica (from spicy food/alcohol/stress), Carbo Veg (bloating with burning), Natrum Phos (acid indigestion)",
    eat:"Bananas, melons, oats, coconut water, a glass of cold milk when symptoms strike",
    avoid:"Spicy/fried food, citrus in excess, caffeine, alcohol, eating late at night",
    exercise:"Avoid lying down for at least 2 hours after meals, gentle walking after eating, Vajrasana pose, weight management, elevating the head while sleeping"},
  {id:13, name:"Bloating", section:"Digestive", icon:"🎈",
    symptoms:"Abdominal fullness/swelling, discomfort",
    ayurveda:"Ajwain-jeera water (1/2 tsp each boiled in a cup of water), Hingvashtak churna, warm water with fennel seeds after meals",
    homeopathy:"Carbo Veg (bloating relieved by burping), Lycopodium (worse in the evening, right-sided), China (gas that doesn't relieve with burping)",
    eat:"Fennel seeds, ginger tea, papaya, plain curd/yogurt",
    avoid:"Carbonated drinks, beans/legumes in excess, chewing gum, eating too fast",
    exercise:"Pawanmuktasana (wind-relieving pose, hold 30–60 sec each side), a 10–15 minute walk after meals"},
  {id:14, name:"Gas", section:"Digestive", icon:"💨",
    symptoms:"Flatulence, abdominal discomfort, cramping",
    ayurveda:"Hing (asafoetida) in cooking, ajwain water, Triphala at night with warm water",
    homeopathy:"Carbo Veg (foul-smelling gas, bloating), China (gas without relief from passing it), Lycopodium (worse after eating, evening onset)",
    eat:"Cumin, ginger, buttermilk, small frequent meals",
    avoid:"Cabbage, beans, fizzy drinks, overeating, eating too quickly",
    exercise:"Walking after meals (10–15 minutes), Pawanmuktasana, gentle abdominal massage clockwise"},
  {id:15, name:"Nausea", section:"Digestive", icon:"🤢",
    symptoms:"Queasy stomach, urge to vomit",
    ayurveda:"Ginger tea, lemon with rock salt (small sips), Sitopaladi churna, chewing a small piece of fresh ginger",
    homeopathy:"Ipecac (constant nausea not relieved by vomiting), Nux Vomica (from overeating/rich food), Arsenicum Album (with restlessness and chills), Tabacum (with cold sweats)",
    eat:"Dry toast, ginger, small sips of water, plain crackers",
    avoid:"Heavy/oily meals, strong smells, lying flat right after eating",
    exercise:"Rest, fresh air, slow deep breathing, sitting upright for 20–30 minutes after eating"},
  {id:16, name:"Vomiting", section:"Digestive", icon:"🤮",
    symptoms:"Forceful expulsion of stomach contents, weakness",
    ayurveda:"Ginger + honey (small amounts), pomegranate juice once settled, Kutaja Ghan Vati (for infection-related vomiting)",
    homeopathy:"Ipecac (persistent nausea with vomiting), Arsenicum Album (with weakness and anxiety), Antimonium Crudum (with a thick white-coated tongue), Veratrum Album (with cold sweat and exhaustion)",
    eat:"ORS/electrolyte water sipped slowly, clear soups once tolerated, banana once appetite returns",
    avoid:"Solid/spicy food until settled, dairy, large amounts of liquid at once",
    exercise:"Rest completely, rehydrate gradually with small frequent sips, avoid any exertion until stable"},
  {id:17, name:"Diarrhea", section:"Digestive", icon:"🚽",
    symptoms:"Frequent loose stools, cramping, dehydration risk",
    ayurveda:"Kutaja Ghan Vati, pomegranate peel decoction, buttermilk with roasted cumin and a pinch of salt",
    homeopathy:"Arsenicum Album (with restlessness, worse after midnight), Podophyllum (painless, gushing, worse morning), China (with weakness and gas), Veratrum Album (with cold sweats and exhaustion)",
    eat:"Banana, rice, applesauce, toast (BRAT diet), ORS/coconut water",
    avoid:"Dairy, spicy/oily food, caffeine, raw fruits/salads until recovered",
    exercise:"Rest; resume light activity gradually after recovery once hydration is restored"},
  {id:18, name:"Constipation", section:"Digestive", icon:"🚻",
    symptoms:"Infrequent/hard stools, straining, bloating",
    ayurveda:"Triphala churna at night with warm water, isabgol (psyllium husk) with warm water, castor oil (occasional, not routine use), soaked raisins/figs in the morning",
    homeopathy:"Nux Vomica (frequent ineffectual urge), Bryonia (hard, dry stool, worse in heat), Alumina (stool difficult even when soft), Silicea (stool that recedes back after partial passage)",
    eat:"Fiber-rich foods (fruits, vegetables, whole grains), warm water first thing in the morning, soaked raisins/figs",
    avoid:"Processed food, low fiber diet, insufficient water intake, holding back the urge",
    exercise:"Daily walking (20–30 minutes), Pawanmuktasana, Malasana (squat pose held for 1–2 minutes), abdominal massage clockwise"},
  {id:19, name:"Loss of Appetite", section:"Digestive", icon:"🍴",
    symptoms:"Reduced desire to eat, weakness",
    ayurveda:"Chitrakadi Vati before meals, ginger with rock salt before meals, Triphala at night, Draksharishta as a digestive tonic",
    homeopathy:"Gentiana (bitter tonic action), China (with weakness/gas), Alfalfa tonic (general appetite stimulant), Nux Vomica (if linked to overindulgence/stress)",
    eat:"Small nutrient-dense meals, fresh fruit, soups, a pinch of ginger with rock salt before meals",
    avoid:"Junk food, overly large meals, eating while stressed or distracted",
    exercise:"Light walking before meals to stimulate hunger, fresh air, a short walk in sunlight"},
  {id:20, name:"Stomach Ache", section:"Digestive", icon:"😖",
    symptoms:"Cramping or dull pain in abdomen",
    ayurveda:"Ajwain with warm water, hing (asafoetida) paste on the navel, Hingvashtak churna after meals",
    homeopathy:"Colocynthis (cramping pain, better bending double/pressure), Nux Vomica (from overeating), Magnesia Phosphorica (better with warmth and pressure), Belladonna (sudden sharp pain)",
    eat:"Warm khichdi, ginger tea, easily digestible food",
    avoid:"Heavy/spicy meals, cold drinks, raw salads during a flare-up",
    exercise:"Gentle clockwise abdominal massage, rest, Pawanmuktasana once acute pain settles"},
  {id:21, name:"Acne/Pimples", section:"Skin & External", icon:"🔴",
    symptoms:"Red bumps, whiteheads/blackheads, oily skin",
    ayurveda:"Neem-turmeric paste applied to spots, Panchatikta Ghrita, blood-purifying herbs (Manjistha), Aloe vera gel at night",
    homeopathy:"Hepar Sulph (painful pus-filled pimples), Kali Bromatum (acne on face/chest/back), Silicea (slow-healing, scarring acne), Sulphur (itchy, recurring breakouts)",
    eat:"Water-rich fruits, zinc-rich foods (pumpkin seeds), green leafy vegetables, plenty of water",
    avoid:"Oily/fried/sugary food, dairy in excess, touching/picking at the face",
    exercise:"Regular sweating through moderate exercise (helps detox skin) followed by prompt cleansing, adequate sleep (7–8 hrs)"},
  {id:22, name:"Rashes", section:"Skin & External", icon:"🧴",
    symptoms:"Red, itchy, or bumpy skin patches",
    ayurveda:"Neem paste applied to the area, coconut oil, avoiding known allergens, Manjistha for blood purification internally",
    homeopathy:"Rhus Toxicodendron (intensely itchy, better with warmth), Apis Mellifica (swelling, stinging, better with cold), Urtica Urens (hives-like raised rash with itching)",
    eat:"Cooling foods (cucumber, coconut water), avoid excess spice/heat-producing foods",
    avoid:"Known allergens, synthetic fabrics, harsh soaps, hot showers",
    exercise:"Keep skin dry and ventilated; avoid excess sweating on the affected area; wear loose cotton clothing"},
  {id:23, name:"Dry Skin", section:"Skin & External", icon:"🏜️",
    symptoms:"Flaky, rough, tight-feeling skin",
    ayurveda:"Sesame/almond oil massage (Abhyanga) before bathing, Ghee-based skincare, a spoon of ghee added to warm milk at night",
    homeopathy:"Petroleum (cracked, rough skin, worse in winter), Graphites (dry, thickened skin with sticky discharge), Sulphur (itchy, dry, worse with washing)",
    eat:"Healthy fats (nuts, ghee, avocado), adequate water through the day",
    avoid:"Hot showers, harsh soaps, excess caffeine",
    exercise:"Oil massage before bath (Abhyanga), stay hydrated, moisturize within minutes of bathing"},
  {id:24, name:"Itching (Skin)", section:"Skin & External", icon:"🤚",
    symptoms:"Persistent urge to scratch, sometimes with redness",
    ayurveda:"Neem bath water, aloe vera gel applied to the area, Panchatikta Ghrita internally for recurring itching",
    homeopathy:"Sulphur (worse with heat/bathing), Urtica Urens (hive-like itching), Rhus Tox (better with warmth, worse at rest)",
    eat:"Cooling, hydrating foods; reduce sugar intake",
    avoid:"Excess heat-producing/spicy foods, synthetic clothing, scratching (keep nails trimmed)",
    exercise:"Keep skin cool and dry, avoid scratching, cool compress instead of scratching when the urge arises"},
  {id:25, name:"Minor Cuts/Wounds", section:"Skin & External", icon:"🩹",
    symptoms:"Broken skin, mild bleeding, tenderness",
    ayurveda:"Turmeric paste for its antiseptic action, honey dressing, Neem oil applied around the wound edge",
    homeopathy:"Calendula (as diluted tincture/ointment for healing), Hypericum (for nerve-rich areas like fingertips), Ledum (puncture wounds)",
    eat:"Protein and vitamin C-rich food for healing (citrus, eggs, legumes)",
    avoid:"Dirty/unclean bandaging, picking at scabs, exposing the wound to dirty water",
    exercise:"Keep the wound area protected and clean during activity till healed; change dressing daily"},
  {id:26, name:"Bruises", section:"Skin & External", icon:"🟣",
    symptoms:"Discoloration, tenderness under skin after injury",
    ayurveda:"Turmeric-warm milk paste applied locally, cold compress for the first 24 hours then warm compress after",
    homeopathy:"Arnica Montana (the classic remedy for bruising/trauma, taken as soon as possible after injury)",
    eat:"Vitamin C and K-rich foods (leafy greens, citrus fruits)",
    avoid:"Pressing on the bruised area, blood thinners without doctor advice",
    exercise:"Rest the area; gentle movement once pain reduces to avoid stiffness"},
  {id:27, name:"Sunburn", section:"Skin & External", icon:"☀️",
    symptoms:"Red, warm, tender skin after sun exposure",
    ayurveda:"Aloe vera gel applied generously, sandalwood paste, coconut oil once redness settles",
    homeopathy:"Cantharis (burning, blistering pain), Urtica Urens (stinging, itching skin), Belladonna (throbbing redness and heat)",
    eat:"Hydrating fruits, coconut water, water-rich vegetables (cucumber)",
    avoid:"Further sun exposure, hot showers, oily lotions initially",
    exercise:"Rest indoors till healed; going forward use sun protection (hat, sunscreen, covered clothing during peak hours)"},
  {id:28, name:"Insect Bites", section:"Skin & External", icon:"🦟",
    symptoms:"Localized swelling, itching, redness",
    ayurveda:"Neem paste applied to the bite, tulsi juice application, sandalwood paste for cooling relief",
    homeopathy:"Ledum Palustre (puncture-type bites, cold relieves), Apis Mellifica (swelling/stinging, cold relieves), Staphysagria (itching from mosquito bites)",
    eat:"Regular healthy diet; no special restriction unless an allergic reaction is suspected",
    avoid:"Scratching the bite, stagnant water near living areas (breeding grounds)",
    exercise:"Normal activity; seek help promptly if swelling spreads (possible allergic reaction)"},
  {id:29, name:"Dandruff", section:"Skin & External", icon:"❄️",
    symptoms:"Flaky scalp, itchiness",
    ayurveda:"Neem oil scalp massage twice a week, Bhringraj oil, Reetha (soap nut) wash instead of harsh shampoo",
    homeopathy:"Kali Sulphuricum (yellow flaky dandruff), Natrum Muriaticum (dry scalp, hair loss with dandruff), Sulphur (itchy scalp, worse with heat)",
    eat:"Zinc and omega-3-rich foods (nuts, fish, flaxseed)",
    avoid:"Excess oily food, harsh chemical shampoos, hot water on the scalp",
    exercise:"Regular scalp massage with warm oil (twice weekly), stress management practices (stress worsens dandruff)"},
  {id:30, name:"Hair Fall", section:"Skin & External", icon:"💇",
    symptoms:"Excess hair shedding, thinning",
    ayurveda:"Bhringraj oil massage 2–3 times a week, Amla juice each morning, Ashwagandha for stress-related hair fall",
    homeopathy:"Phosphorus (hair falls in patches/clumps), Natrum Muriaticum (hair fall with dandruff), Lycopodium (premature thinning)",
    eat:"Protein, iron, biotin-rich foods (eggs, spinach, nuts, seeds)",
    avoid:"Crash dieting, excess heat styling, harsh chemical treatments",
    exercise:"Stress-reduction practices (yoga, meditation, 10 minutes daily), warm oil scalp massage"},
  {id:31, name:"Body Ache", section:"Muscle & Body", icon:"💪",
    symptoms:"Generalized muscle soreness/discomfort",
    ayurveda:"Warm sesame oil massage (Abhyanga), Dashmoola decoction, Mahanarayan oil for localized areas",
    homeopathy:"Arnica Montana (soreness from overexertion), Rhus Tox (better with movement, worse at rest), Bryonia (worse with any movement, better lying still)",
    eat:"Warm nourishing foods, turmeric milk at night, ginger tea",
    avoid:"Cold food/drinks, overexertion, prolonged inactivity",
    exercise:"Gentle stretching, warm oil massage before rest, adequate sleep, light walking once soreness begins easing"},
  {id:32, name:"Muscle Cramps", section:"Muscle & Body", icon:"🦵",
    symptoms:"Sudden, painful muscle tightening",
    ayurveda:"Warm sesame oil massage on the cramped muscle, Dashmoolarishta, adequate hydration with electrolytes",
    homeopathy:"Cuprum Metallicum (violent cramping, especially calves), Magnesia Phosphorica (better with warmth/pressure), Nux Vomica (cramps with muscle twitching)",
    eat:"Potassium/magnesium-rich foods (banana, nuts, leafy greens), coconut water",
    avoid:"Dehydration, excess caffeine/alcohol",
    exercise:"Gentle stretching before/after activity, gradual warm-up, calf stretches held 20–30 seconds when a cramp strikes"},
  {id:33, name:"Joint Stiffness", section:"Muscle & Body", icon:"🦴",
    symptoms:"Reduced joint mobility, discomfort on movement",
    ayurveda:"Mahanarayan oil massage on affected joints, Guggulu preparations, warm fomentation with a cloth pouch of heated salt/sand",
    homeopathy:"Rhus Tox (better with continued movement, worse first thing in the morning), Bryonia (worse with any movement, better rest)",
    eat:"Anti-inflammatory foods (turmeric, ginger, omega-3-rich walnuts/flaxseed), warm foods",
    avoid:"Cold/raw food excess, sedentary sitting for long periods",
    exercise:"Gentle joint mobility exercises (ankle/wrist rotations, 10 reps each), warm-up before activity, swimming, easy walking"},
  {id:34, name:"Neck Pain", section:"Muscle & Body", icon:"🙆",
    symptoms:"Stiffness/pain in neck, reduced range of motion",
    ayurveda:"Greeva Basti (localized warm oil pooling therapy), warm compress, Mahanarayan oil massage",
    homeopathy:"Rhus Tox (stiff, better with movement), Bryonia (worse with movement), Actaea Racemosa (muscular neck/shoulder pain)",
    eat:"Calcium and anti-inflammatory foods (milk, turmeric, leafy greens)",
    avoid:"Poor posture, prolonged phone/laptop use without breaks",
    exercise:"Neck stretches (chin tucks, side tilts, 5 reps each), posture correction, ergonomic workstation setup, breaks every 30–45 minutes"},
  {id:35, name:"Back Pain (Mild)", section:"Muscle & Body", icon:"🔙",
    symptoms:"Dull or sharp pain in upper/lower back",
    ayurveda:"Kati Basti therapy (warm oil pooling on lower back), Mahanarayan oil massage, Dashmoolarishta",
    homeopathy:"Rhus Tox (stiffness, better with movement), Bryonia (worse with movement, sharp pain), Kali Carbonicum (weak lower back)",
    eat:"Calcium and vitamin D-rich foods (milk, eggs, sunlight exposure)",
    avoid:"Prolonged sitting, heavy lifting with poor posture",
    exercise:"Core-strengthening exercises (bridge pose, planks), gentle yoga (Bhujangasana/cobra pose held 15–20 sec), posture correction"},
  {id:36, name:"Fatigue/Tiredness", section:"Muscle & Body", icon:"😴",
    symptoms:"Low energy, sluggishness, difficulty concentrating",
    ayurveda:"Ashwagandha, Chyawanprash each morning, adequate sleep routine (Dinacharya), Shatavari for general vitality",
    homeopathy:"China (weakness after fluid loss), Kali Phosphoricum (nervous exhaustion), Phosphoric Acid (fatigue with apathy)",
    eat:"Iron and B-vitamin-rich foods, balanced meals, avoid skipping breakfast",
    avoid:"Excess caffeine/sugar (energy crashes), late nights",
    exercise:"Light daily activity (20–30 minute walk), consistent sleep schedule, morning sunlight exposure"},
  {id:37, name:"Leg Pain", section:"Muscle & Body", icon:"🦿",
    symptoms:"Aching or heaviness in legs, sometimes with cramping",
    ayurveda:"Warm oil massage (sesame or Mahanarayan oil), Dashmoolarishta, leg elevation with a cushion",
    homeopathy:"Rhus Tox (better with movement), Arnica (soreness from exertion), Calcarea Carbonica (heaviness, worse in cold)",
    eat:"Potassium and calcium-rich foods (banana, milk), adequate hydration",
    avoid:"Prolonged standing without breaks, tight footwear",
    exercise:"Leg stretches (calf and hamstring, 20–30 sec holds), walking, elevating legs for 10–15 minutes after long standing"},
  {id:38, name:"Numbness (Temporary)", section:"Muscle & Body", icon:"✋",
    symptoms:"Tingling or \"pins and needles\" sensation, usually from pressure/posture",
    ayurveda:"Warm oil massage to improve circulation, gentle movement of the affected limb",
    homeopathy:"Hypericum (nerve-related tingling), Aconite (sudden onset with anxiety), Calcarea Carbonica (numbness with cold sensitivity)",
    eat:"Vitamin B12-rich foods (dairy, eggs), balanced diet",
    avoid:"Sitting/sleeping in the same position too long, tight clothing",
    exercise:"Regular movement breaks every 30–40 minutes, wrist/ankle stretches, circulation-boosting activity like brisk walking"},
  {id:39, name:"Fever (Mild)", section:"General", icon:"🌡️",
    symptoms:"Raised body temperature, chills, body ache",
    ayurveda:"Tulsi-ginger decoction, Sudarshan churna with warm water, light khichdi diet",
    homeopathy:"Belladonna (sudden high fever, flushed face), Aconite (onset after cold exposure, restless), Bryonia (fever with body ache, worse on movement), Ferrum Phos (early-stage low-grade fever)",
    eat:"Warm fluids, light khichdi, fruits like orange, coconut water",
    avoid:"Heavy/oily food, cold drinks",
    exercise:"Complete rest until fever resolves; resume activity gradually once temperature normalizes for 24 hours"},
  {id:40, name:"Cough", section:"General", icon:"😷",
    symptoms:"Dry or productive cough, throat irritation",
    ayurveda:"Honey with ginger juice, Sitopaladi churna with honey, Talisadi churna, clove-cardamom decoction",
    homeopathy:"Bryonia (dry, painful cough worse with movement), Antimonium Tartaricum (rattling, mucus-filled cough), Drosera (spasmodic, barking cough)",
    eat:"Warm soups, honey-ginger tea, turmeric milk at night",
    avoid:"Cold drinks/food, dairy at night, dust/smoke exposure",
    exercise:"Steam inhalation twice daily, rest, avoid talking loudly or shouting"},
  {id:41, name:"Common Cold", section:"General", icon:"🤒",
    symptoms:"Runny/blocked nose, sneezing, mild sore throat, fatigue",
    ayurveda:"Tulsi-ginger tea, Trikatu churna with honey, steam inhalation with ajwain",
    homeopathy:"Allium Cepa (watery discharge, sneezing), Nux Vomica (blocked nose at night), Aconite (early stage, sudden onset)",
    eat:"Warm fluids, vitamin C-rich fruits, chicken/vegetable soup",
    avoid:"Cold food/drinks, excess dairy, sugar",
    exercise:"Rest, steam inhalation (twice daily, 5–10 minutes), keep warm and avoid drafts"},
  {id:42, name:"Weakness", section:"General", icon:"🪫",
    symptoms:"General lack of strength/energy",
    ayurveda:"Chyawanprash each morning, Ashwagandha, Dashmoolarishta as a general tonic",
    homeopathy:"China (weakness after illness/fluid loss), Kali Phosphoricum (nervous fatigue), Ferrum Metallicum (weakness with paleness)",
    eat:"Iron, protein, and vitamin-rich balanced diet",
    avoid:"Crash diets, excessive fasting, junk food",
    exercise:"Gradual light exercise (short walks) building up as strength returns, adequate rest between activity"},
  {id:43, name:"Dehydration", section:"General", icon:"💧",
    symptoms:"Thirst, dry mouth, dizziness, dark urine",
    ayurveda:"Coconut water, buttermilk with rock salt and roasted cumin, ORS-style rehydration with electrolytes",
    homeopathy:"China (weakness from fluid loss), Veratrum Album (with vomiting/diarrhea loss and cold sweat), Cuprum Met (with cramping)",
    eat:"Water-rich fruits (watermelon, cucumber), clear soups",
    avoid:"Excess caffeine/alcohol, sugary sodas",
    exercise:"Rest in a cool environment, gradual fluid replenishment with small frequent sips rather than large amounts at once"},
  {id:44, name:"Motion Sickness", section:"General", icon:"🚗",
    symptoms:"Nausea, dizziness during travel",
    ayurveda:"Ginger candy/tea before travel, lemon with rock salt sipped slowly, a pinch of dry ginger powder",
    homeopathy:"Cocculus Indicus (the classic motion-sickness remedy), Tabacum (nausea with cold sweat), Petroleum (nausea worse in vehicles)",
    eat:"Light meal before travel, ginger candy, avoid heavy/oily food",
    avoid:"Reading while traveling, strong odors, traveling on an empty stomach",
    exercise:"Sit facing the direction of travel, get fresh air, focus on a fixed point on the horizon"},
  {id:45, name:"Hiccups", section:"General", icon:"😮",
    symptoms:"Involuntary diaphragm spasms causing \"hic\" sound",
    ayurveda:"Sip warm water slowly, hold breath briefly for a few seconds, a pinch of sugar or honey placed on the tongue",
    homeopathy:"Nux Vomica (from overeating), Cyclamen (with stomach upset), Hyoscyamus (persistent nervous hiccups)",
    eat:"Slow eating, avoid carbonated drinks",
    avoid:"Eating too fast, overeating, hot spicy food in excess",
    exercise:"Controlled breathing/breath-holding technique (hold for 10–15 seconds, repeat if needed)"},
  {id:46, name:"Sneezing", section:"General", icon:"🤧",
    symptoms:"Repeated forceful nasal expulsions, often with irritation",
    ayurveda:"Nasya oil (a drop in each nostril), avoiding allergens, steam inhalation with eucalyptus",
    homeopathy:"Allium Cepa (watery discharge with sneezing), Sabadilla (spasmodic sneezing fits), Arsenicum Album (with restlessness, worse at night)",
    eat:"Warm fluids, vitamin C-rich foods",
    avoid:"Dust, strong perfumes, cold air exposure",
    exercise:"Keep nasal passage clean (saline rinse/Jal Neti), avoid known triggers, wear a mask in dusty environments"},
  {id:47, name:"Sleep Issues (Mild Insomnia)", section:"General", icon:"🌙",
    symptoms:"Difficulty falling/staying asleep, restlessness",
    ayurveda:"Warm milk with a pinch of nutmeg at bedtime, Ashwagandha, foot massage with warm sesame oil before bed (Padabhyanga)",
    homeopathy:"Coffea Cruda (racing thoughts, overactive mind), Nux Vomica (sleep disturbed by stress/overwork), Passiflora (herbal-homeopathic, general calming remedy)",
    eat:"Light dinner at least 2–3 hours before bed, warm milk, avoid heavy meals at night",
    avoid:"Caffeine after early afternoon, screen time before bed, heavy late dinners",
    exercise:"Regular sleep schedule, relaxing yoga (Shavasana) or slow breathing (4-7-8 technique) before bed, avoid stimulating exercise late at night"},
  {id:48, name:"Stress/Mild Anxiety", section:"General", icon:"😰",
    symptoms:"Restlessness, racing thoughts, tension, irritability",
    ayurveda:"Ashwagandha, Brahmi, Shirodhara therapy, daily meditation for 10–15 minutes",
    homeopathy:"Aconite (sudden acute anxiety/panic), Argentum Nitricum (anticipatory anxiety before events), Gelsemium (anxiety with weakness/trembling)",
    eat:"Balanced diet, herbal teas (chamomile, tulsi), reduce caffeine",
    avoid:"Excess caffeine/alcohol, skipping meals, overstimulation before bed",
    exercise:"Meditation (10–15 minutes daily), pranayama (Anulom Vilom, Bhramari breathing), regular physical activity, adequate sleep"},
  {id:49, name:"Menstrual Cramps", section:"General", icon:"🩸",
    symptoms:"Lower abdominal pain/cramping during periods",
    ayurveda:"Warm sesame oil massage on the lower abdomen, Ashokarishta, warm ginger tea",
    homeopathy:"Magnesia Phosphorica (cramping, better with warmth and pressure), Colocynthis (severe cramping, better bending double), Pulsatilla (changeable pain, better with gentle movement)",
    eat:"Warm foods, iron-rich foods (spinach, dates), ginger tea",
    avoid:"Cold drinks/food, excess caffeine, salty food (worsens bloating)",
    exercise:"Gentle yoga (Cat-Cow pose, Child's pose held 30–60 sec), warm compress on the abdomen, light walking"},
  {id:50, name:"Hangover", section:"General", icon:"🍺",
    symptoms:"Headache, nausea, fatigue, dehydration after alcohol",
    ayurveda:"Coconut water, Amla juice, sugarcane juice, light khichdi once appetite returns",
    homeopathy:"Nux Vomica (the classic hangover remedy, irritability with nausea), Arsenicum Album (with restlessness and thirst for small sips)",
    eat:"Hydrating fruits, electrolyte-rich fluids, light easily digestible food",
    avoid:"More alcohol, caffeine, heavy/greasy food",
    exercise:"Rest, a gentle walk in fresh air once rehydrated, avoid intense workouts until fully recovered"}
];


/* Quick-pick symptom categories shown on the Home page + used by the
   Symptoms results page. "items" = [diseaseId, matchPercent] */
const CATEGORIES = [
  {key:"head-pain", label:"Head Pain", icon:"🤕", items:[[1,45],[2,30],[7,15],[43,10]]},
  {key:"dizziness", label:"Dizziness", icon:"😵", items:[[3,50],[43,25],[44,25]]},
  {key:"sore-throat", label:"Sore Throat", icon:"🗣️", items:[[5,55],[41,30],[40,15]]},
  {key:"stomach-pain", label:"Stomach Pain", icon:"😖", items:[[20,35],[11,25],[13,20],[14,20]]},
  {key:"acidity-heartburn", label:"Acidity / Heartburn", icon:"🔥", items:[[12,70],[11,30]]},
  {key:"nausea-vomiting", label:"Nausea & Vomiting", icon:"🤢", items:[[15,40],[16,35],[44,25]]},
  {key:"diarrhea", label:"Loose Motion", icon:"🚽", items:[[17,100]]},
  {key:"constipation", label:"Constipation", icon:"🚻", items:[[18,100]]},
  {key:"skin-rash", label:"Skin Rash / Itching", icon:"🧴", items:[[22,35],[24,30],[21,20],[28,15]]},
  {key:"acne", label:"Acne / Pimples", icon:"🔴", items:[[21,100]]},
  {key:"hair-scalp", label:"Hair & Scalp", icon:"💇", items:[[29,50],[30,50]]},
  {key:"body-pain", label:"Body Pain", icon:"💪", items:[[31,40],[32,25],[35,20],[37,15]]},
  {key:"joint-neck-pain", label:"Joint & Neck Pain", icon:"🦴", items:[[33,40],[34,35],[35,25]]},
  {key:"fever-cold", label:"Fever, Cold & Cough", icon:"🌡️", items:[[39,35],[41,35],[40,30]]},
  {key:"fatigue", label:"Fatigue & Weakness", icon:"😴", items:[[36,50],[42,50]]},
  {key:"sleep-stress", label:"Sleep & Stress", icon:"🌙", items:[[47,50],[48,50]]},
  {key:"menstrual", label:"Menstrual Cramps", icon:"🩸", items:[[49,100]]},
  {key:"hangover", label:"Hangover", icon:"🍺", items:[[50,100]]},
  {key:"eye", label:"Eye Irritation", icon:"👁️", items:[[10,100]]},
  {key:"ear", label:"Ear Pain", icon:"👂", items:[[4,100]]},
  {key:"tooth-breath", label:"Tooth Pain / Bad Breath", icon:"🦷", items:[[8,60],[9,40]]},
  {key:"nose-sneeze", label:"Blocked Nose / Sneezing", icon:"🤧", items:[[6,40],[46,30],[7,30]]},
  {key:"minor-injury", label:"Cuts, Bruises & Bites", icon:"🩹", items:[[25,35],[26,35],[27,15],[28,15]]},
  {key:"numbness", label:"Numbness", icon:"✋", items:[[38,100]]},
  {key:"dry-skin", label:"Dry Skin", icon:"🏜️", items:[[23,100]]},
  {key:"appetite", label:"Loss of Appetite", icon:"🍴", items:[[19,100]]},
  {key:"hiccups", label:"Hiccups", icon:"😮", items:[[45,100]]}
];

/* Shown as the quick-pick chips on the Home page (a subset of CATEGORIES) */
const HOME_QUICK_SYMPTOMS = [
  "head-pain","stomach-pain","skin-rash","body-pain",
  "fever-cold","fatigue","sleep-stress","menstrual"
];

function getDiseaseById(id){
  return DISEASES.find(d => d.id === Number(id));
}

function getCategoryByKey(key){
  return CATEGORIES.find(c => c.key === key);
}

/* ============================================================
   MULTILINGUAL SYMPTOM KEYWORDS (free tier)
   The disease/treatment content stays English-only (see
   translations.js note — full translation needs a paid API),
   but the SEARCH itself needs to understand what the person
   typed or spoke in their own language. This maps common
   symptom phrases in each supported language to a category key,
   the same categories used by the quick-pick chips.

   Best-effort, not reviewed by a native speaker of each
   language — please have someone fluent check/extend these,
   especially before relying on them in production.
   ============================================================ */
const CATEGORY_KEYWORDS = {
  "head-pain":         ["सिरदर्द","सिर दर्द","తలనొప్పి","தலைவலி","ತಲೆನೋವು","തലവേദന"],
  "dizziness":         ["चक्कर","తలతిరగడం","తల తిరుగుట","தலைச்சுற்றல்","ತಲೆ ತಿರುಗುವಿಕೆ","ತಲೆಸುತ್ತು","തലകറക്കം"],
  "sore-throat":       ["गले में खराश","गला दर्द","గొంతు నొప్పి","தொண்டை வலி","ಗಂಟಲು ನೋವು","തൊണ്ടവേദന"],
  "stomach-pain":      ["पेट दर्द","पेट में दर्द","కడుపు నొప్పి","வயிற்று வலி","ಹೊಟ್ಟೆ ನೋವು","വയറുവേദന"],
  "acidity-heartburn": ["एसिडिटी","सीने में जलन","గుండెల్లో మంట","నெఞ்செரிச்சல்","నెంజెరిచల్","ಎದೆಯುರಿ","നെഞ്ചെരിച്ചിൽ"],
  "nausea-vomiting":   ["उल्टी","जी मिचलाना","వాంతులు","வாந்தி","ವಾಂತಿ","ഛർദ്ദി","ഓക്കാനം"],
  "diarrhea":          ["दस्त","విరేచనాలు","வயிற்றுப்போக்கு","ಭೇದಿ","ವಾಂತಿ ಭೇದಿ","വയറിളക്കം"],
  "constipation":      ["कब्ज","మలబద్ధకం","மலச்சிக்கல்","ಮಲಬದ್ಧತೆ","മലബന്ധം"],
  "skin-rash":         ["त्वचा पर चकत्ते","खुजली","చర్మంపై దద్దుర్లు","దురద","தோல் அரிப்பு","சொறி","ಚರ್ಮದ ದದ್ದು","ತುರಿಕೆ","ചർമ്മത്തിൽ ചൊറിച്ചിൽ"],
  "acne":              ["मुंहासे","మొటిమలు","முகப்பரு","ಮೊಡವೆ","മുഖക്കുരു"],
  "hair-scalp":        ["बाल झड़ना","జుట్టు రాలడం","முடி உதிர்தல்","ಕೂದಲು ಉದುರುವಿಕೆ","മുടി കൊഴിച്ചിൽ"],
  "body-pain":         ["शरीर में दर्द","బాడీ నొప్పి","శరీర నొప్పులు","உடல் வலி","ಮೈಕೈ ನೋವು","ശരീരവേദന"],
  "joint-neck-pain":   ["जोड़ों का दर्द","गर्दन दर्द","కీళ్ల నొప్పులు","மூட்டு வலி","ಕೀಲು ನೋವು","സന്ധിവേദന"],
  "fever-cold":        ["बुखार","जुकाम","खांसी","జ్వరం","జలుబు","దగ్గు","காய்ச்சல்","சளி","இருமல்","ಜ್ವರ","ಶೀತ","ಕೆಮ್ಮು","പനി","ജലദോഷം","ചുമ"],
  "fatigue":           ["थकान","कमजोरी","అలసట","బలహీనత","சோர்வு","பலவீனம்","ಆಯಾಸ","ದೌರ್ಬಲ್ಯ","ക്ഷീണം","ബലക്ഷയം"],
  "sleep-stress":      ["नींद न आना","तनाव","నిద్ర లేకపోవడం","ఒత్తిడి","தூக்கமின்மை","மன அழுத்தம்","ನಿದ್ರೆ ಇಲ್ಲದಿರುವುದು","ಒತ್ತಡ","ഉറക്കമില്ലായ്മ","സമ്മർദ്ദം"],
  "menstrual":         ["मासिक धर्म में दर्द","पीरियड्स दर्द","పీరియడ్స్ నొప్పి","மாதவிடாய் வலி","ಋತುಚಕ್ರ ನೋವು","ആർത്തവ വേദന"],
  "hangover":          ["हैंगओवर","హ్యాంగోవర్","ஹேங்ஓவர்","ಹ್ಯಾಂಗೋವರ್","ഹാങ്ഓവർ"],
  "eye":               ["आंखों में जलन","కళ్ళలో మంట","கண் எரிச்சல்","ಕಣ್ಣಿನ ಉರಿ","കണ്ണിൽ പുകച്ചിൽ"],
  "ear":               ["कान में दर्द","చెవి నొప్పి","காது வலி","ಕಿವಿ ನೋವು","ചെവിവേദന"],
  "tooth-breath":      ["दांत दर्द","పంటి నొప్పి","பல் வலி","ಹಲ್ಲು ನೋವು","പല്ലുവേദന"],
  "nose-sneeze":       ["नाक बंद","छींक","ముక్కు దిబ్బడ","తుమ్ములు","மூக்கடைப்பு","தும்மல்","ಮೂಗು ಕಟ್ಟುವಿಕೆ","ಸೀನು","മൂക്കടപ്പ്","തുമ്മൽ"],
  "minor-injury":      ["चोट","కటना","గాయం","காயம்","ಗಾಯ","മുറിവ്"],
  "numbness":          ["सुन्नपन","తిమ్మిరి","மரத்துப்போதல்","ಜೋಮು","മരവിപ്പ്"],
  "dry-skin":          ["रूखी त्वचा","పొడి చర్మం","வறண்ட தோல்","ಒಣ ಚರ್ಮ","വരണ്ട ചർമ്മം"],
  "appetite":          ["भूख न लगना","ఆకలి లేకపోవడం","பசியின்மை","ಹಸಿವಿಲ್ಲದಿರುವುದು","വിശപ്പില്ലായ്മ"],
  "hiccups":           ["हिचकी","ఎక్కిళ్ళు","விக்கல்","ಬಿಕ್ಕಳಿಕೆ","കിക്ക്"]
};

/* ============================================================
   ROMANIZED SYMPTOM KEYWORDS (free tier)
   People very often type or speak Indian-language symptoms using
   English letters — phonetic spelling — rather than the native
   script (e.g. "thalanoppi" instead of "తలనొప్పి" for headache).
   Voice recognition set to listen in English also tends to
   transcribe non-English speech this way.

   Unlike the native-script map above, a romanized word gives no
   script-based clue about which language it is (it's just Latin
   letters) — so each word here is tagged with its language (hi/
   te/ta/kn/ml) explicitly. That tag is what lets the site switch
   its narration language to match what the person actually said,
   even when it was transcribed in English letters.

   Best-effort phonetic spellings, not reviewed by a native
   speaker — please have someone fluent check/extend these.
   ============================================================ */
const ROMANIZED_KEYWORDS = {
  "head-pain":         { hi:["sar dard","sir dard"], te:["thalanoppi","thala noppi"], ta:["thalaivali","thalai vali"], kn:["tale novu"], ml:["thalavedana"] },
  "dizziness":         { hi:["chakkar"], te:["thala tirugudam"], ta:["thalaichuttal"], kn:["tale tirugu"], ml:["thalakarakkam"] },
  "sore-throat":       { hi:["gale mein kharash","gala dard"], te:["gontu noppi"], ta:["thondai vali"], kn:["gantalu novu"], ml:["thondavedana"] },
  "stomach-pain":      { hi:["pet dard"], te:["kadupu noppi"], ta:["vayiru vali"], kn:["hotte novu"], ml:["vayaru vedana"] },
  "acidity-heartburn": { hi:["acidity","seene mein jalan"], te:["gundello manta"], ta:["nenjerichal"], kn:["edeyuri"], ml:["nenjerichil"] },
  "nausea-vomiting":   { hi:["ulti","jee michlana"], te:["vantulu"], ta:["vaandhi"], kn:["vaanti"], ml:["chardi"] },
  "diarrhea":          { hi:["dast"], te:["virechanalu"], ta:["vayitrupokku"], kn:["bhedi"], ml:["vayarilakkam"] },
  "constipation":      { hi:["kabj"], te:["malabaddhakam"], ta:["malachikkal"], kn:["malabaddhate"], ml:["malabandham"] },
  "skin-rash":         { hi:["khujli","twacha par chakatte"], te:["charmam paina dadurlu","durada"], ta:["thol arippu"], kn:["charmada daddu","turike"], ml:["chorichil"] },
  "acne":              { hi:["muhase"], te:["motimalu"], ta:["mugaparu"], kn:["modave"], ml:["mukhakkuru"] },
  "hair-scalp":        { hi:["baal jhadna"], te:["juttu raladam"], ta:["mudi udhirthal"], kn:["koodalu uduruvike"], ml:["mudi kozhichil"] },
  "body-pain":         { hi:["sharir mein dard"], te:["sharira noppulu"], ta:["udal vali"], kn:["mayikai novu"], ml:["shareeravedana"] },
  "joint-neck-pain":   { hi:["jodo ka dard","gardan dard"], te:["keellu noppulu","nadumu noppi"], ta:["moottu vali"], kn:["kilu novu"], ml:["sandhivedana"] },
  "fever-cold":        { hi:["bukhar","jukam","khansi"], te:["jwaram","jalubu","daggu"], ta:["kaichal","sali","irumal"], kn:["jwara","sheeta","kemmu"], ml:["pani","jaladosham","chuma"] },
  "fatigue":           { hi:["thakan","kamzori"], te:["alasata","balaheenata"], ta:["sorvu","palaveenam"], kn:["aayasa","dourbalya"], ml:["kshinam"] },
  "sleep-stress":      { hi:["neend na aana","tanav"], te:["nidra lekapovadam","ottidi"], ta:["thookkaminmai","mana azhutham"], kn:["nidre illadiruvudu","ottada"], ml:["urakkamillayma","sammardham"] },
  "menstrual":         { hi:["periods dard","masik dharm dard"], te:["periods noppi"], ta:["mathavidai vali"], kn:["rutuchakra novu"], ml:["arthava vedana"] },
  "hangover":          { hi:["hangover"] },
  "eye":               { hi:["aankhon mein jalan"], te:["kallalo manta"], ta:["kan erichal"], kn:["kannina uri"], ml:["kannil pukachal"] },
  "ear":               { hi:["kaan mein dard"], te:["chevi noppi"], ta:["kaadhu vali"], kn:["kivi novu"], ml:["chevivedana"] },
  "tooth-breath":      { hi:["daant dard"], te:["panti noppi"], ta:["pal vali"], kn:["hallu novu"], ml:["palluvedana"] },
  "nose-sneeze":       { hi:["naak band","cheenk"], te:["mukku dibbeda","tummulu"], ta:["mookadaippu","thummal"], kn:["moogu kattuvike","seenu"], ml:["mookadappu","thummal"] },
  "minor-injury":      { hi:["chot"], te:["gayam"], ta:["kaayam"], kn:["gaaya"], ml:["muriv"] },
  "numbness":          { hi:["sunnapan"], te:["thimmiri"], ta:["marathuppodhal"], kn:["jomu"], ml:["maravippu"] },
  "dry-skin":          { hi:["rukhi twacha"], te:["podi charmam"], ta:["varanda thol"], kn:["ona charma"], ml:["varanda charmam"] },
  "appetite":          { hi:["bhookh na lagna"], te:["aakali lekapovadam"], ta:["pasiyinmai"], kn:["hasivilladiruvudu"], ml:["vishappillayma"] },
  "hiccups":           { hi:["hichki"], te:["ekkillu"], ta:["vikkal"], kn:["bikkalike"], ml:["kikku"] }
};

/* Checks the query against the native-script keyword map, and
   returns the category (language is inferred separately, from the
   script of the raw text itself — see searchDiseases). */
function matchMultilingualCategory(rawQuery){
  const q = String(rawQuery || "").trim().toLowerCase();
  if(!q) return null;
  for(const key in CATEGORY_KEYWORDS){
    if(CATEGORY_KEYWORDS[key].some(p => q.includes(p.toLowerCase()) || p.toLowerCase().includes(q))){
      return getCategoryByKey(key);
    }
  }
  return null;
}

/* Checks the query against the romanized keyword map. Unlike native
   script, a Latin-letter word carries no clue about its language on
   its own — so this returns BOTH the matched category AND the
   language tag the matching word was filed under, e.g.
   { category: {...Stomach Pain...}, lang: "te" } for "kadupu noppi". */
function matchRomanizedCategory(rawQuery){
  const q = String(rawQuery || "").trim().toLowerCase();
  if(!q) return null;
  for(const key in ROMANIZED_KEYWORDS){
    const byLang = ROMANIZED_KEYWORDS[key];
    for(const lang in byLang){
      if(byLang[lang].some(p => q.includes(p) || p.includes(q))){
        return { category: getCategoryByKey(key), lang };
      }
    }
  }
  return null;
}

/* Free-text search fallback used when the typed query doesn't match a
   category label exactly - scores diseases by keyword overlap.
   Also returns `lang` — the detected language of the query, when we
   can tell — so the caller can switch the site's narration to match
   what the person actually typed/spoke. */
function searchDiseases(query){
  const rawQuery = String(query || "").trim();
  const q = rawQuery.toLowerCase();
  if(!q) return null;

  // 0a) native-script keyword match (Hindi/Telugu/Tamil/Kannada/Malayalam
  //     typed or spoken directly in their own script). The language is
  //     inferred straight from the script of the raw text itself.
  const mlCat = matchMultilingualCategory(rawQuery);
  if(mlCat){
    const lang = (typeof detectLanguageFromText === "function") ? detectLanguageFromText(rawQuery) : null;
    return { label: mlCat.label, icon: mlCat.icon, results: mlCat.items.map(([id,percent]) => ({id,percent})), lang };
  }

  // 0b) romanized keyword match (Indian-language words spelled in
  //     English letters, e.g. "thalanoppi" or "kadupu noppi" — common
  //     when typing without a native keyboard, or when speech
  //     recognition transcribes non-English speech phonetically).
  //     The language tag comes from which language's list the word
  //     was found under, since Latin letters alone don't tell us.
  const romanized = matchRomanizedCategory(rawQuery);
  if(romanized){
    const cat = romanized.category;
    return { label: cat.label, icon: cat.icon, results: cat.items.map(([id,percent]) => ({id,percent})), lang: romanized.lang };
  }

  // 1) direct category label match
  const cat = CATEGORIES.find(c => c.label.toLowerCase().includes(q) || q.includes(c.label.toLowerCase()));
  if(cat){
    return { label: cat.label, icon: cat.icon, results: cat.items.map(([id,percent]) => ({id,percent})), lang: "en" };
  }

  // 2) keyword scoring across all disease names + symptom text
  const words = q.split(/\s+/).filter(w => w.length > 2);
  const scored = DISEASES.map(d => {
    const text = (d.name + " " + d.symptoms).toLowerCase();
    let score = 0;
    words.forEach(w => { if(text.includes(w)) score += 1; });
    if(text.includes(q)) score += 2; // whole phrase bonus
    return {d, score};
  }).filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0,6);

  if(scored.length === 0) return null;
  const total = scored.reduce((s,x) => s + x.score, 0);
  let results = scored.map(x => ({id: x.d.id, percent: Math.round(x.score/total*100)}));
  // normalize rounding so it reads cleanly (sorted desc already)
  return { label: query, icon: "🔎", results, lang: "en" };
}
