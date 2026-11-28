// Page 06 — Blog index and full article copy, in English and Bahasa Indonesia.
import { defineContent } from "@/lib/content"

const travelHealthKitPost = {
  slug: "personal-travel-health-kit",
  checklist: true,
  category: "TRAVEL HEALTH",
  title: "PERSONAL TRAVEL HEALTH KIT",
  date: "A concise packing guide based on the CDC Yellow Book 2026",
  image: "photo-1505751172876-fa1923c5c528",
  imageAlt: "Travel health and medical preparation",
  excerpt: "A personal travel health kit helps travelers manage common minor illnesses and injuries, treat recurring problems, and continue treatment for chronic conditions while away from home.",
  deck: "A concise packing guide based on the CDC Yellow Book 2026",
  sections: [
    {
      heading: "Purpose",
      paragraphs: ["A personal travel health kit helps travelers manage common minor illnesses and injuries, treat recurring problems, and continue treatment for chronic conditions while away from home."],
    },
    {
      heading: "How to prepare",
      paragraphs: ["Personalize the contents according to your medical history, destination, itinerary, planned activities, trip duration, access to medical care, and available space. Keep medicines and first-aid supplies in a durable, water-resistant container that is readily accessible."],
    },
    {
      heading: "1. Bandages and Wound Care",
      paragraphs: [],
      table: {
        headers: ["ITEMS", "PURPOSE / NOTES"],
        rows: [
          ["Adhesive bandages (various sizes; include waterproof options)", "Minor cuts and scrapes."],
          ["Adhesive felt or gel pads", "Blister prevention and treatment."],
          ["Elastic bandage (2-inch and 4-inch)", "Sprains; can also secure larger dressings."],
          ["Gauze pads and non-stick dressings (2 × 2 and 4 × 4 inches)", "Cleaning and covering larger wounds."],
          ["Medical adhesive tape / self-adhesive bandage wrap", "Securing dressings."],
          ["Small bandage scissors", "Cutting bandages or tape."],
          ["Wound-closure strips (butterfly strips)", "Closing selected small wounds; requires some expertise and a clean wound."],
        ],
      },
    },
    {
      heading: "2. Topical Medicines",
      paragraphs: [],
      table: {
        headers: ["DRUG TYPE", "GENERIC NAME (ACTIVE INGREDIENT)", "INDICATIONS / SYMPTOMS"],
        rows: [
          ["Skin soothing agent", "Aloe vera gel", "Mild sunburn and minor skin irritation."],
          ["Antipruritic", "Calamine", "Itching from minor skin irritation or insect bites."],
          ["Topical antifungal", "Clotrimazole 1% cream", "Localized superficial fungal skin infections."],
          ["Topical antiseptic", "Povidone-iodine", "Antisepsis of minor cuts and superficial wounds; use according to product directions."],
          ["Topical corticosteroid", "Hydrocortisone 1% cream", "Short-term relief of mild, localized inflammatory rashes and itching; avoid use on infected skin unless advised."],
        ],
      },
    },
    {
      heading: "3. Medicines for Common Problems",
      paragraphs: [],
      table: {
        headers: ["DRUG TYPE", "GENERIC NAME (ACTIVE INGREDIENT)", "INDICATIONS / SYMPTOMS"],
        rows: [
          ["Analgesic / antipyretic", "Paracetamol (acetaminophen)", "Mild to moderate pain and fever."],
          ["Non-steroidal anti-inflammatory drug (NSAID)", "Ibuprofen", "Pain, fever, and inflammatory pain; avoid in people with relevant contraindications, including peptic ulcer disease, significant kidney disease, or NSAID allergy."],
          ["Antihistamine", "Cetirizine or chlorpheniramine maleate (CTM)", "Allergic rhinitis, itching, and urticaria; CTM may cause drowsiness."],
          ["Antacid", "Aluminium hydroxide + magnesium hydroxide", "Occasional heartburn, acid indigestion, and dyspepsia."],
          ["Proton-pump inhibitor (PPI)", "Omeprazole", "Frequent acid reflux or gastritis-related symptoms; not for immediate relief."],
          ["Antitussive", "Dextromethorphan", "Dry, non-productive cough; check combination products to avoid duplicate ingredients."],
          ["Decongestant", "Pseudoephedrine", "Nasal congestion; use cautiously and check contraindications such as hypertension."],
          ["Antidiarrheal", "Loperamide", "Symptomatic relief of acute, non-bloody diarrhea; avoid when diarrhea is bloody or accompanied by high fever."],
          ["Antiemetic / motion-sickness medicine", "Dimenhydrinate", "Motion sickness, nausea, and vomiting; may cause drowsiness."],
          ["Stimulant laxative", "Bisacodyl", "Short-term relief of occasional constipation."],
          ["Osmotic laxative", "Lactulose", "Constipation, especially when a stool-softening effect is needed."],
          ["Oral rehydration solution", "Oral rehydration salts (ORS)", "Replacement of fluid and electrolytes lost through diarrhea or vomiting."],
        ],
      },
    },
    {
      heading: "4. Regular and Other Prescription Medicines",
      paragraphs: [],
      afterTable: ["Other prescription-related supplies: Needles and syringes for regularly self-administered injectable medicines (e.g., insulin; carry a copy of the prescription), and spare prescription glasses or contact lenses."],
      checkableParagraph: true,
      table: {
        headers: ["DRUG TYPE", "GENERIC NAME (ACTIVE INGREDIENT)", "INDICATIONS / SYMPTOMS"],
        rows: [
          ["Regular prescription therapy", "All current personal prescription medicines", "Continuation of treatment for chronic conditions; bring an adequate supply."],
          ["Altitude-illness medicine", "Acetazolamide", "Prevention and treatment of acute mountain sickness when indicated."],
          ["Systemic corticosteroid", "Dexamethasone", "Selected cases of altitude illness or other conditions when specifically prescribed."],
          ["Short-acting bronchodilator", "Salbutamol inhaler", "Relief of wheezing or bronchospasm in people with asthma or reversible airway disease."],
          ["Antibiotic for travelers’ diarrhea", "Azithromycin", "Standby treatment for selected moderate-to-severe travelers’ diarrhea, only when prescribed with clear instructions."],
          ["Antimalarial prophylaxis", "Doxycycline (only when appropriate for the destination and traveler)", "Malaria prevention for selected destinations; regimen and suitability must be determined by a travel-medicine clinician."],
        ],
      },
    },
    {
      heading: "5. Instruments and Equipment",
      paragraphs: [],
      table: {
        headers: ["ITEMS", "PURPOSE / NOTES"],
        rows: [
          ["Digital thermometer", "Bring plastic sheaths for oral or rectal use."],
          ["Headlamp", "Useful in remote areas, power outages, or emergencies."],
          ["Tweezers", "Splinter or tick removal."],
        ],
      },
    },
    {
      heading: "6. Important Documents (Hard Copy or Digital)",
      paragraphs: [],
      table: {
        headers: ["ITEMS", "PURPOSE / NOTES"],
        rows: [
          ["Medical summary", "Include diagnoses, regular medicines (generic names), and allergies."],
          ["Advanced medical care directive, if applicable", "Include DNR information where relevant."],
          ["Electrocardiogram, if indicated", "For a previously abnormal ECG, history of heart or lung disease, or age over 50 years."],
          ["Emergency contact card", "Keep essential emergency contact details accessible."],
          ["International Certificate of Vaccination or Prophylaxis (ICVP / Yellow Card)", "Carry when applicable."],
          ["Travel and healthcare insurance information", "Keep policy and assistance details accessible."],
          ["Travel-sized first-aid manual or guide", "A practical reference for basic first aid."],
        ],
      },
    },
    {
      heading: "7. Preventive Items, as Applicable",
      paragraphs: [],
      table: {
        headers: ["ITEMS", "PURPOSE / NOTES"],
        rows: [
          ["Condoms, barrier precautions, or other contraceptives", "As appropriate to the traveler’s needs."],
          ["Examination gloves", "Infection control and personal protection."],
          ["Face mask or N95 respirator", "Respiratory infection protection."],
          ["Insect repellent and mosquito net", "Protection against insect bites and mosquito-borne disease."],
          ["Lip balm with sun protection", "Prevention of dry, cracked lips."],
          ["Personal hygiene supplies", "Hand sanitizer, disinfectant or wet wipes, tissues, and menstrual products."],
          ["Sunscreen (SPF 30 or greater)", "Sun protection; zinc oxide offers broad protection for the nose, lips, and face."],
          ["Water-purification tablets or device", "If safe drinking water may be unavailable or surface water will be used."],
        ],
      },
    },
    {
      heading: "8. Additional Considerations When Traveling with Children",
      paragraphs: [],
      bullets: [
        "Pack age-appropriate products and doses for malaria prevention, travelers’ diarrhea, and insect repellents.",
        "Bring suitable medicines for pain, fever, and allergies, together with an oral syringe or medicine cup for accurate measurement.",
        "Consider appropriate safety equipment, such as a car seat, flotation device, or helmet.",
      ],
    },
    {
      heading: "Note",
      paragraphs: ["The generic ingredients above were adapted to medicines listed in Indonesian Ministry of Health essential-medicine/Formulary references and/or Indonesian regulatory or BPOM product information. Registration and legal classification can differ by strength, dosage form, and pack size; retail stock also varies by location. Check the current BPOM Cek Produk database and consult a pharmacist or clinician before purchase or use. Prescription-only medicines should not be self-started."],
    },
    {
      heading: "Important Notes",
      paragraphs: [],
      bullets: [
        "Prescription medicines should be selected and used according to the traveler's medical history and professional advice. Antibiotics, acetazolamide, dexamethasone, salbutamol (where prescription-classified), and antimalarial prophylaxis require clinician-directed use. Do not self-start antibiotics or corticosteroids.",
        "Carry narcotic and psychoactive medicines in their original prescription containers. Some countries restrict these medicines, often to a 30-day supply or less; check destination-country regulations before departure.",
        "The kit is a suggested list, not a requirement to carry every item. Adapt it to the traveler and the trip.",
      ],
    },
    {
      heading: "Source",
      paragraphs: [
        "Source: Centers for Disease Control and Prevention. CDC Yellow Book 2026: Health Information for International Travel. “Travel Health Kits.” Published April 23, 2025. [https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travel-health-kits.html](https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travel-health-kits.html)",
        "Indonesia adaptation references: Ministry of Health, Republic of Indonesia, Formularium Nasional (KMK HK.01.07/MENKES/2197/2023); Ministry of Health regulations on medicine classification; BPOM product registration information. Verify current registration, dosage form, and pack size before use.",
      ],
    },
  ],
}

const avoidingBitesPost = {
  slug: "avoiding-insect-and-arthropod-bites-indonesia",
  category: "TRAVEL HEALTH",
  title: "AVOIDING INSECT AND ARTHROPOD BITES IN INDONESIA",
  date: "",
  image: "/illustrations/dead-mosquito.jpg",
  imageAlt: "Cute cartoon illustration of a dead mosquito",
  excerpt: "Mosquitoes are the most important biting vectors for travelers in Indonesia. Depending on the region and itinerary, mosquitoes can transmit dengue, chikungunya, Zika, malaria, Japanese encephalitis (JE), and lymphatic filariasis.",
  deck: "A practical travel guide adapted from CDC Travelers’ Health and Indonesian vector information",
  sections: [
    {
      heading: "Why Bite Prevention Matters",
      paragraphs: ["Mosquitoes are the most important biting vectors for travelers in Indonesia. Depending on the region and itinerary, mosquitoes can transmit dengue, chikungunya, Zika, malaria, Japanese encephalitis (JE), and lymphatic filariasis. Ticks and other biting arthropods may also be encountered, particularly during outdoor activities. Risk varies by location, season, accommodation, and activities."],
      images: [{ src: "https://media.istockphoto.com/id/1266937706/id/vektor/nyamuk-mengisap-darah.jpg?s=1024x1024&w=is&k=20&c=Z62kUUYZ7x_wv1WbEPw-wkKbvxb7VPPBIPTvmDxagwI=", alt: "Illustration of a mosquito feeding" }],
    },
    {
      heading: "1. Mosquitoes: The Main Travel Concern",
      paragraphs: [],
      afterTable: ["Note: This is a practical overview, not a complete species checklist. Indonesian Ministry of Health material confirms Aedes aegypti as a vector of dengue, chikungunya, and Zika; Culex quinquefasciatus as a vector associated with lymphatic filariasis and JE; and Culex tritaeniorhynchus as a confirmed JE vector in Indonesia."],
      table: {
        headers: ["MOSQUITO GROUP", "DISEASES OF CONCERN IN INDONESIA", "PRACTICAL RISK CONTEXT"],
        rows: [
          ["Aedes aegypti / Aedes albopictus", "Dengue, chikungunya, and Zika", "Aedes aegypti is widely distributed in Indonesia and commonly bites during the day, particularly in the morning and late afternoon; biting can also occur at night."],
          ["Anopheles species", "Malaria", "Risk is highly location-dependent. Prevention is especially important in malaria-risk areas, including parts of eastern Indonesia and rural areas in several other islands."],
          ["Culex species (including Culex quinquefasciatus and Culex tritaeniorhynchus)", "Japanese encephalitis and lymphatic filariasis", "Culex mosquitoes may bite in and around homes and in environments near rice fields, wetlands, or animal-rearing areas. JE risk is particularly relevant for rural or longer stays."],
        ],
      },
    },
    {
      heading: "2. Other Biting Arthropods to Be Aware Of",
      paragraphs: [],
      subsections: [
        {
          heading: "Ticks and chigger mites",
          paragraphs: ["Ticks may be encountered in grassy, brushy, wooded areas, and on animals. Chiggers are larval mites (not insects) that can occur in vegetation and may cause intensely itchy bites; some chigger mites transmit scrub typhus in parts of Asia. The exact risk depends on the area and exposure. After hiking, camping, gardening, or visiting farms, check your skin, clothing, and gear. Pay particular attention to the waist, armpits, groin, behind the knees, around the ears, and scalp."],
          images: [{ src: "https://today.uconn.edu/wp-content/uploads/2017/06/Tick-Illus-630x420-JB.jpg", alt: "Tick illustration" }],
        },
        {
          heading: "Fleas",
          paragraphs: ["Fleas may be present around animals and in environments where animals rest. Avoid handling stray or infested animals, and avoid sitting or sleeping in areas with visible flea activity. Plague is flea-borne but is geographically focal and not a routine risk for most travelers; seek local health advice if visiting a known risk area."],
          images: [{ src: "https://media.istockphoto.com/id/938422010/id/vektor/kutu-kartun.jpg?s=1024x1024&w=is&k=20&c=-ScoF_V8z2MsZsurbA2wfvzfGLZj1jdsLuxwT4c-pRc=", alt: "Illustration of a flea" }],
        },
      ],
    },
    {
      heading: "3. How to Prevent Bites",
      paragraphs: [],
      emphasizeBulletLead: true,
      images: [{ src: "/illustrations/dead-mosquito.jpg", href: "https://www.magnific.com/free-vector/cute-mosquito-dead-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_28952494.htm#fromView=keyword&page=1&position=11&uuid=6162fb13-0ee7-47b4-a7ff-4229ab822d6b&track=ais_hybrid&query=Cartoon+bug+bite", alt: "Cute cartoon illustration of a dead mosquito" }],
      bullets: [
        "Choose a registered skin-applied repellent. In Indonesia, look for mosquito-repellent lotion or spray with a valid BPOM authorization/notification as applicable. Check the product in the official BPOM Cek Produk database (https://cekbpom.pom.go.id/) and make sure the product name, manufacturer, and registration details match the packaging. Follow the age restrictions, directions, and reapplication interval on the label.",
        "Check the active ingredient and label. Common repellent active ingredients include DEET, picaridin/icaridin, and IR3535; formulations and concentrations available in Indonesia vary. Do not assume that every product contains the same ingredient or offers the same duration of protection. Use a product whose label specifically states that it is intended for application to human skin.",
        "Apply repellent correctly. Apply sunscreen first and insect repellent afterwards. Avoid the eyes, mouth, hands of young children, broken skin, and irritated skin. Adults should apply repellent to their own hands before carefully applying it to a child's face. Wash treated skin when protection is no longer needed.",
        "Use protective clothing. Wear loose-fitting long-sleeved shirts, long trousers, and covered footwear, especially in areas with mosquitoes or dense vegetation.",
        "Use physical barriers. Choose accommodation with intact window and door screens or air conditioning. Use a mosquito net when sleeping outdoors or when screened rooms are unavailable; cover strollers and baby carriers with mosquito netting.",
        "Reduce mosquito breeding sites. Apply Indonesia's 3M Plus approach: drain and scrub water containers regularly (Menguras), cover water-storage containers (Menutup), and reuse or recycle items that can collect rainwater (Memanfaatkan/Mendaur ulang). Additional measures include using repellent, mosquito nets, window screens, larval control where appropriate, and routine environmental checks.",
        "For household insecticide products. Mosquito coils, electric vaporizers, aerosols, and other household insecticides are not the same as skin-applied repellents. Check that the product has the appropriate Indonesian authorization/marketing permit for its product category, follow the label, and use it with adequate ventilation. Do not apply household insecticides to skin or clothing unless the label explicitly permits that use.",
        "For clothing treatment. Do not transfer the CDC/EPA permethrin-clothing advice automatically to products sold in Indonesia. Use a clothing-treatment product only if it is legally marketed for that purpose in Indonesia and its label specifically gives instructions for treating clothing or gear. Never apply agricultural or household insecticide products directly to skin.",
      ],
    },
    {
      heading: "4. Additional Advice for Babies and Children",
      paragraphs: [],
      images: [{ src: "https://thumbs.dreamstime.com/b/cartoon-mosquitoes-vector-cartoon-little-girl-mosquitoes-bite-184370364.jpg?w=768", alt: "Illustration of a child protected by mosquito netting" }],
      bullets: [
        "Dress children in clothing that covers their arms and legs; use mosquito netting over strollers and baby carriers.",
        "Always follow the age restrictions and instructions on the Indonesian product label. Do not use oil of lemon eucalyptus (OLE) or para-menthane-diol (PMD) products on children younger than 3 years, consistent with CDC guidance.",
        "Do not apply repellent to a child's hands, eyes, mouth, cuts, or irritated skin. An adult should apply it to their own hands first, then carefully spread it over the child's face.",
        "Do not apply clothing-treatment insecticides or household insecticides directly to skin. Use only products specifically labeled for human-skin application.",
      ],
    },
    {
      heading: "5. After Outdoor Activities or a Bite",
      paragraphs: [],
      images: [{ src: "https://img.magnific.com/free-vector/mosquito-biting-person-with-flat-design_23-2147934964.jpg?t=st=1795668305~exp=1795671905~hmac=25cd103bc64ae6e56a0d481faac623a78b421ba407ccc49163b5b02709460c1a&w=360", alt: "Illustration of a mosquito bite and skin irritation" }],
      bullets: [
        "Avoid scratching bites. Calamine lotion or an appropriate over-the-counter anti-itch preparation may help relieve itching.",
        "After time in grassy or wooded areas, inspect the entire body, clothing, bags, and pets for ticks. Shower soon after returning indoors and remove attached ticks promptly and carefully.",
        "Seek medical assessment if fever, severe headache, marked muscle or joint pain, rash, or unusual weakness develops during or after travel. Tell the healthcare provider where and when you travelled and mention any insect or tick exposure.",
        "A fever after visiting a malaria-risk area requires prompt medical evaluation, even if preventive measures were used.",
      ],
    },
    {
      heading: "How to check products in Indonesia:",
      paragraphs: ["For mosquito-repellent lotions or sprays intended for direct application to skin, the Indonesian Ministry of Health advises choosing products authorized by BPOM. Verify the product through BPOM's official Cek Produk portal (https://cekbpom.pom.go.id/). For household insecticide products (e.g., aerosol, coils, or electric mosquito repellents), check the relevant Indonesian marketing authorization for that product category; household products may fall under the Ministry of Health's regulatory system rather than the BPOM skin-repellent pathway. Always follow the product label."],
    },
    {
      heading: "Key Takeaway",
      paragraphs: ["For most travelers in Indonesia, mosquito-bite prevention should be the priority: use repellent consistently, cover exposed skin, choose screened or air-conditioned accommodation, and use a bed net when needed. Add tick and flea precautions when the itinerary includes forests, farms, grassland, or close contact with animals."],
    },
    {
      heading: "References",
      paragraphs: [],
      bullets: [
        "1.\tCenters for Disease Control and Prevention (CDC). Avoid Bug Bites. Travelers’ Health. Page last reviewed May 11, 2022. https://wwwnc.cdc.gov/travel/page/avoid-bug-bites",
        "2.\tCenters for Disease Control and Prevention (CDC). Indonesia – Traveler View. https://wwwnc.cdc.gov/travel/destinations/traveler/none/Indonesia/",
        "3.\tMinistry of Health, Republic of Indonesia. Pedoman Penanggulangan Demam Rift Valley di Indonesia. 2024. (Vector distribution and mosquito species information.) https://infeksiemerging.kemkes.go.id/index.php/document/download/M88O",
        "4.\tWorld Health Organization (WHO). Vector-borne diseases. https://www.who.int/news-room/fact-sheets/detail/vector-borne-diseases",
        "5.\tMinistry of Health, Republic of Indonesia. Cara Mencegah DBD dengan Menjaga Lingkungan & Diri Sendiri (3M Plus; repellent lotion certified by BPOM). https://ayosehat.kemkes.go.id/cara-mencegah-dbd",
        "6.\tMinistry of Health, Republic of Indonesia. Musim Penghujan Tiba, Waspada DBD di Lingkungan Kita (3M Plus). https://ayosehat.kemkes.go.id/musim-penghujan-tiba-waspada-dbd",
        "7.\tMinistry of Health, Republic of Indonesia. Regulation and guidance for household health supplies (PKRT), including household insecticide products. https://regalkes.kemkes.go.id/",
      ],
    },
  ],
}

const vaccinationGuidePost = {
  slug: "vaccination-guide-terban-yogyakarta",
  category: "TRAVEL HEALTH",
  title: "VACCINATION GUIDE",
  date: "",
  image: "photo-1505751172876-fa1923c5c528",
  imageAlt: "Travel health and medical preparation",
  excerpt: "There is no special vaccination requirement just to visit Kota Yogyakarta.",
  deck: "For Visitors to Terban, Kota Yogyakarta, Indonesia",
  sections: [
    {
      heading: "Before Your Visit",
      paragraphs: ["There is no special vaccination requirement just to visit Kota Yogyakarta."],
      bullets: [
        "For a typical short city holiday, check that your routine vaccinations are up to date.",
        "Additional travel vaccines depend on your age, previous doses, health, length of stay, food and water exposure, and planned activities. This guide is specific to Kota Yogyakarta; it does not assume that every risk reported elsewhere in Indonesia applies equally to a short urban visit.",
      ],
    },
    {
      heading: "1. Routine Vaccinations",
      paragraphs: ["These are vaccines people should receive according to their age and vaccination history, whether or not they are traveling. Tourists should check their records before departure."],
      table: {
        headers: ["VACCINE", "WHO SHOULD CHECK IT?", "WHY IT MATTERS"],
        rows: [
          ["MMR (measles, mumps, rubella)", "Children and adults without evidence of immunity; international travelers should generally have 2 documented doses or accepted evidence of immunity.", "Measles spreads easily in crowded places such as airports, public transport and tourist attractions."],
          ["Diphtheria, tetanus and pertussis (DTP/Tdap/Td)", "All age groups according to childhood schedule and adult booster history.", "Protects against respiratory infection (diphtheria/pertussis) and tetanus after wounds."],
          ["Polio", "Children should complete routine doses; adults should check if their primary series is complete.", "Prevents poliomyelitis.\nExtra doses depend on outbreak or destination-specific advice."],
          ["Influenza", "Everyone aged 6 months and older, especially young children, pregnant people, older adults and people with chronic illness.", "Annual protection against seasonal influenza, particularly useful during flights and crowded activities."],
          ["Varicella (chickenpox)", "People aged 12 months and older without evidence of immunity, if eligible.", "Prevents chickenpox and complications.\nNot suitable for some pregnant or immunocompromised people."],
        ],
      },
      bullets: [
        "Children should also have their Indonesian routine immunizations reviewed using their Buku KIA/immunization record: https://www.halodoc.com/artikel/ini-jadwal-imunisasi-dasar-lengkap-anak-rekomendasi-idai-berdasarkan-usia-dan-jenis?srsltid=AYCX9vL7wGpjiHNfd0w67BS6nqASc5_S5ywV5Ig-a6WnYEFGCsXFmvLk",
        "Adults can compare their history with the PAPDI Adult Immunization Schedule 2026: https://satgasimunisasipapdi.com/jadwal-imunisasi-dewasa-2026/",
      ],
    },
    {
      heading: "2. Travel Vaccinations",
      paragraphs: ["These are additional vaccines considered because of travel-related exposure. They are not automatically needed by every tourist."],
      table: {
        headers: ["VACCINE", "AGE / WHO", "WHEN TO CONSIDER IT FOR KOTA YOGYAKARTA"],
        rows: [
          ["Hepatitis A", "Unvaccinated travelers ≥1 year; infants 6–11 months may receive an early travel dose.", "• Consider if eating widely at local food stalls, staying with local households, or visiting for an extended period.\n• Spreads through contaminated food and water.\n• Usual adult series: 2 doses, 6–12 months apart; infant travel dose does not count toward routine series."],
          ["Typhoid", "Most travelers; injectable vaccine commonly used from age 2 years (confirm product label).", "• Consider for longer stays or frequent local-food/street-food exposure.\n• Usual injectable schedule: 1 dose at least 2 weeks before exposure; booster depends on product and ongoing risk."],
          ["Hepatitis B", "Unvaccinated travelers of all ages.", "• Consider if not previously vaccinated, particularly if medical/dental procedures, tattoos/piercings, sexual contact or blood exposure may occur.\n• Common adult schedule: 0, 1 and 6 months."],
          ["Rabies (pre-exposure)", "Children or adults with increased animal exposure risk.", "• Not usually needed for ordinary city sightseeing.\n• Consider for animal handlers, veterinary work, or frequent contact with dogs/cats/monkeys.\n• Common schedule: 2 doses on days 0 and 7. Any bite/scratch still needs urgent medical care."],
          ["Japanese encephalitis (JE)", "Long-stay travelers (usually ≥1 month), frequent visitors to endemic areas, or selected short-stay travelers with rural exposure; product age limits apply.", "• Usually not needed for a short trip limited to central Kota Yogyakarta.\n• Consider only if the itinerary includes extended rural/outdoor exposure in JE-risk areas."],
          ["Yellow fever", "Travelers ≥9 months arriving from a country with yellow-fever transmission risk, if entry rules require it.", "• Not needed for protection in Yogyakarta.\n• May be required for entry depending on the country visited before Indonesia."],
        ],
      },
    },
    {
      heading: "3. Nearest Health Facilities",
      paragraphs: ["Kota Yogyakarta has a wide range of healthcare facilities, including hospitals, community health centres (Puskesmas), and private clinics. This list focuses on facilities located specifically in Kelurahan Terban, Gondokusuman District, to help visitors identify nearby options for vaccinations and medical care."],
      table: {
        headers: ["HEALTHCARE FACILITY", "TYPE", "OFFICIAL WEBSITE"],
        rows: [
          ["RS Panti Rapih", "General hospital", "https://pantirapih.or.id/"],
          ["RS Mata Dr. YAP", "Specialist eye hospital", "https://yap.or.id/"],
          ["Puskesmas Gondokusuman II", "Community health centre", "https://gondokusuman2pusk.jogjakota.go.id/"],
        ],
      },
      afterTable: ["This is a directory, not a ranking or endorsement."],
      bullets: [
        "Some hospitals provide specialist services rather than a full range of emergency care.",
        "In a medical emergency, contact local emergency services or go to the nearest hospital emergency department.",
        "Confirm the hospital’s current emergency and service availability directly.",
      ],
    },
    {
      heading: "4. Before Getting a Vaccine",
      paragraphs: [],
      bullets: [
        "Bring your vaccination record (vaccine card).",
        "Ask the clinic whether the vaccine is available, what age it is licensed for, how many doses are needed, and the total cost.",
        "Check the product's Indonesian authorization through BPOM Cek Produk: https://cekbpom.pom.go.id/",
        "Some vaccines are not stocked at every Puskesmas. For international certificates (e-ICV) or special travel vaccines, ask whether referral to an authorized international vaccination center is needed.",
      ],
    },
    {
      heading: "Trusted References",
      paragraphs: [],
      bullets: [
        "1.\tCDC. Indonesia – Traveler View. https://wwwnc.cdc.gov/travel/destinations/traveler/none/indonesia",
        "2.\tSatgas Imunisasi Dewasa PAPDI. Jadwal Imunisasi Dewasa 2026. https://satgasimunisasipapdi.com/jadwal-imunisasi-dewasa-2026/",
        "3.\tKementerian Kesehatan RI. Jadwal Imunisasi Program (KMK HK.01.07/MENKES/1098/2024 and applicable amendments). https://jdih.kemkes.go.id/",
        "4.\tDinas Kesehatan Kota Yogyakarta. Official Puskesmas directory. https://kesehatan.jogjakota.go.id/pages/kontak/direktori /",
        "5.\tBPOM. Cek Produk. https://cekbpom.pom.go.id/",
      ],
    },
  ],
}

const sunProtectionPost = {
  slug: "sun-and-eye-protection-terban",
  category: "TRAVEL HEALTH",
  title: "Beneath The Sun: A Quick Guide to Skin And Eye Protection for Visitors Enjoying Outdoor Activities in Indonesia",
  date: "",
  image: "/images/article-4/online-doctor-recommending-sunscreen.jpg",
  imageAlt: "Online doctor recommending sunscreen. Phone screen, bottle of sunblock, tube of lotion flat illustration. Skin protection.",
  excerpt: "Indonesia’s tropical location means UV exposure can be high throughout the year. Too much UV can cause sunburn, premature skin ageing, eye damage and skin cancer.",
  deck: "THE RESONEGARAN VISITOR'S GUIDE #4",
  sections: [
    {
      heading: "1. Why Sun Protection Matters?",
      paragraphs: ["Indonesia’s tropical location means UV exposure can be high throughout the year. Too much UV can cause sunburn, premature skin ageing, eye damage and skin cancer. UV rays can still reach you on cloudy days. UVB mainly causes sunburn and direct DNA damage; UVA penetrates deeper and contributes to skin ageing and skin damage. Protection matters for every skin tone."],
      images: [{ src: "/images/article-4/weather.gif", alt: "Weather illustration for sun protection" }],
      imagesBeforeText: true,
    },
    {
      heading: "2. Check The UV Index",
      paragraphs: ["The UV Index estimates the strength of skin-damaging UV radiation. The higher the number, the greater the need for protection."],
      images: [{ src: "/images/article-4/sunny-day-cuate.png", alt: "Sunny day illustration" }],
      imagesBeforeText: true,
      beforeTableBullets: ["💕 Check the daily forecast from BMKG: https://cews.bmkg.go.id/dashboard-custom/prediksi-UVI-indonesia/"],
      table: {
        headers: ["UV Index", "Risk", "What to Do?"],
        rows: [
          ["0–2", "Low", "Basic protection for prolonged outdoor exposure."],
          ["3–5", "Moderate", "Seek shade, wear protective clothing and apply sunscreen."],
          ["6–7", "High", "Reduce time in direct sun; use full sun protection."],
          ["8–10", "Very high", "Avoid midday sun as much as possible; protect skin and eyes."],
          ["11+", "Extreme", "Minimise outdoor exposure during peak UV hours."],
        ],
      },
    },
    {
      heading: "3. Your Sun-Protection Checklist",
      paragraphs: [],
      images: [{ src: "/images/article-4/checklist.gif", alt: "Checklist illustration" }],
      imagesBeforeText: true,
      bullets: [
        "Limit prolonged direct sun, especially between 10 a.m. and 4 p.m.",
        "Find shade → use trees, buildings, umbrellas or shaded rest areas.",
        "Cover up by choosing lightweight, long-sleeved clothing and trousers. UPF 50 clothing blocks about 98% of UV.",
        "Wear a wide-brimmed hat that shades the face, ears and neck.",
        "Protect your eyes with sunglasses labelled UV400 or 100% UVA/UVB protection.",
        "Apply broad-spectrum sunscreen (SPF 30 or higher); SPF 50+ is a useful choice for long outdoor activities.",
        "Use SPF 30+ lip balm.",
      ],
    },
    {
      heading: "4. Sunscreen: Use It Properly",
      paragraphs: [],
      images: [{ src: "/images/article-4/sun-rise.gif", alt: "Sunrise illustration" }],
      imagesBeforeText: true,
      bullets: [
        "Choose broad-spectrum protection against both UVA and UVB, SPF 30 or higher.",
        "Apply generously and evenly to all exposed skin. Do not forget the ears, neck, backs of hands and tops of feet.",
        "Apply about 15–20 minutes before going outdoors when using chemical-filter sunscreen. Mineral-only sunscreen works immediately.",
        "Reapply every 2 hours, and after swimming, heavy sweating or towel-drying.",
        "For a full-body application, adults generally need about 30–35 mL (roughly a shot glass).",
        "Sunscreen is only one layer of protection. It does not make prolonged sunbathing safe.",
      ],
    },
    {
      heading: "5. Protect Your Eyes: Choose Sunglasses Wisely",
      paragraphs: [],
      images: [{ src: "/images/article-4/happy-sun.gif", alt: "Happy sun illustration" }],
      imagesBeforeText: true,
      bullets: [
        "Look for “100% UVA/UVB protection”, “100% UV protection” or “UV400”.",
        "Large lenses and wraparound frames reduce UV entering from the sides.",
        "Polarized lenses reduce glare from water and roads, but polarization alone does not block UV. Check the UV label.",
        "Darker lenses, mirror coatings, colour and a high price do not guarantee UV protection.",
        "For sports, consider impact-resistant polycarbonate or Trivex lenses.",
        "⚠ UV exposure can cause painful photokeratitis (an eye “sunburn”) and is associated with cataracts and other eye conditions. Ordinary sunglasses are not safe for looking directly at the sun, solar eclipses, welding or tanning lamps.",
      ],
    },
    {
      heading: "6. Skin Cancer/Melanoma: Know The Warning Signs",
      paragraphs: ["UV exposure can damage skin-cell DNA. Intense exposure during childhood is an important risk factor for melanoma later in life. People with darker skin can also develop skin cancer."],
      images: [{ src: "/images/article-4/dna.gif", alt: "DNA illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["ABCDE", "What to Look For?"],
        rows: [
          ["A – Asymmetry", "One half does not match the other."],
          ["B – Border", "Irregular, blurred or poorly defined edges."],
          ["C – Colour", "Uneven colour or several shades."],
          ["D – Diameter", "Often over 6 mm, but can be smaller."],
          ["E – Evolving", "A spot changes in size, shape or colour, or starts itching, bleeding or becoming tender."],
        ],
      },
      afterTable: ["Melanoma may occur on the palms, soles or beneath nails.", "Not every melanoma follows the ABCDE pattern.", "⚠ Get a new, unusual or changing spot checked by a healthcare professional. Also seek assessment for a sore that does not heal or a new dark streak under a nail."],
    },
    {
      heading: "7. Extra Care For Children",
      paragraphs: [],
      images: [{ src: "/images/article-4/happy-baby.gif", alt: "Happy baby illustration" }],
      imagesBeforeText: true,
      bullets: [
        "<6 months: keep infants out of direct sunlight; use shade, light covering clothing, a hat and a stroller sunshade.",
        "≥ 6 months: use an age-appropriate sunscreen. Mineral filters such as zinc oxide and titanium dioxide are often preferred for sensitive skin.",
        "Use hats and protective clothing, and avoid prolonged outdoor activity during intense midday sun.",
      ],
    },
    {
      heading: "8. Medicines, Citrus And Sun Sensitivity",
      paragraphs: [
        "Some medicines can make skin more sensitive to sunlight. Examples: doxycycline and other tetracyclines, some fluoroquinolones and sulfonamides, certain NSAIDs (such as ibuprofen, naproxen and ketoprofen), retinoids, furosemide, methotrexate and some cancer treatments. Ask a healthcare professional about extra precautions; do not stop prescribed medicines yourself.",
        "Lime juice and some citrus oils can react with UVA and cause phytophotodermatitis.",
        "Redness, pain or blisters may appear 1–2 days later, followed by brown marks that can last weeks or months.",
        "⚠ Wash citrus juice off the skin promptly before going outdoors.",
      ],
      images: [{ src: "/images/article-4/virtual-reality.gif", alt: "Virtual reality illustration" }],
      imagesBeforeText: true,
    },
    {
      heading: "9. If You Get Sunburned",
      paragraphs: [],
      images: [{ src: "/images/article-4/refreshing-from-summer-heat.gif", alt: "Refreshing from summer heat illustration" }],
      imagesBeforeText: true,
      bullets: [
        "Move to a cool, shaded place and avoid further sun exposure.",
        "Cool the skin with cool water or a cool, wet compress.",
        "Apply a gentle moisturiser and drink fluids.",
        "Do not pop blisters.",
        "Seek medical care for extensive blistering, severe pain, fever, chills, nausea, vomiting or headache.",
      ],
    },
    {
      heading: "10. Sunscreen & Sunglasses: Quick Myth Check",
      paragraphs: [],
      images: [{ src: "/images/article-4/specs.gif", alt: "Glasses illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["Myth", "Fact"],
        rows: [
          ["“Darker sunscreen or sunglasses protect better.”", "Lens darkness does not indicate UV protection. For sunscreen, check broad-spectrum SPF; for glasses, check UV400/100% UVA-UVB."],
          ["“Polarized means UV-protective.”", "Polarization reduces glare; it does not automatically block UV."],
          ["“Only fair skin needs sun protection.”", "All skin tones can experience UV damage and skin cancer."],
          ["“Sunscreen alone is enough.”", "Shade, clothing, hats and sunglasses are also important."],
        ],
      },
    },
    {
      heading: "References",
      paragraphs: [],
      bullets: [
        "[1] Fivenson D, Norton SA. Sun exposure in travelers. In: Halsey ES, Angelo KM, Barnett ED, et al., editors. CDC Yellow Book 2026: Health Information for International Travel [Internet]. Atlanta (GA): Centers for Disease Control and Prevention. Available from: https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/sun-exposure-in-travelers.html",
        "[2] Morriss S, Scardamaglia L. Sun protection: a practical guide for health professionals. Aust Prescr. 2025;48(5):173-178. doi:10.18773/austprescr.2025.046. https://pubmed.ncbi.nlm.nih.gov/41164102/",
        "[3] American Academy of Ophthalmology. How to choose the best sunglasses to avoid sun damage [Internet]. San Francisco: American Academy of Ophthalmology; 2026 Jul 20. Available from: https://www.aao.org/eye-health/diseases/sunglasses-3",
        "[4] American Academy of Ophthalmology. Recommended types of sunglasses [Internet]. San Francisco: American Academy of Ophthalmology; 2015 Dec 12. Available from: https://www.aao.org/eye-health/glasses-contacts/sunglasses-recommended-types",
        "[5] American Optometric Association. Ultraviolet (UV) protection [Internet]. St. Louis (MO): American Optometric Association; [date unknown]. Available from: https://www.aoa.org/healthy-eyes/caring-for-your-eyes/uv-protection",
        "[6] American Academy of Dermatology Association. What to look for: ABCDEs of melanoma [Internet]. Rosemont (IL): AAD; [date unknown]. Available from: https://www.aad.org/public/diseases/skin-cancer/abcdes-melanoma",
        "[7] Badan Meteorologi, Klimatologi, dan Geofisika. Prediksi indeks UV harian [Internet]. Jakarta: BMKG; [date unknown]. Available from: https://cews.bmkg.go.id/dashboard-custom/prediksi-UVI-indonesia/",
      ],
    },
  ],
}

const safeFoodWaterPost = {
  slug: "around-the-table-safe-food-water",
  category: "TRAVEL HEALTH",
  title: "Around The Table: A Quick Guide to Safe Food And Drinking Water for Visitors in Kampung Resonegaran, Yogyakarta, Indonesia",
  date: "",
  image: "/images/article-5/rotten-food.jpg",
  imageAlt: "Rotten food 2x2 design concept set of four compositions consisting of toxic moldy expired products isolated vector illustration",
  excerpt: "Heritage walks, museum tours, batik workshops, and traditional wellness experiences are wonderful ways to explore Resonegaran. Stay comfortable throughout your visit by choosing safer food and drinks, keeping your hands clean, and knowing when to seek help!",
  deck: "THE RESONEGARAN VISITOR'S GUIDE #5",
  intro: "Heritage walks, museum tours, batik workshops, and traditional wellness experiences are wonderful ways to explore Resonegaran. Stay comfortable throughout your visit by choosing safer food and drinks, keeping your hands clean, and knowing when to seek help!",
  sections: [
    {
      heading: "1. Choose Food Safely",
      paragraphs: ["Choose food that is thoroughly cooked, served hot, and handled hygienically."],
      images: [{ src: "/images/article-5/eating-healthy-food.gif", alt: "Eating healthy food illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["SAFER CHOICES", "AVOID/USE CAUTION"],
        rows: [
          ["✅ Freshly cooked food served hot or steaming.", "❌ Cooked food left at room temperature for a long time or served lukewarm."],
          ["✅ Meat, fish, seafood, and eggs cooked thoroughly.", "❌ Raw or undercooked meat, seafood, or eggs."],
          ["✅ Whole fruit that you can wash with safe water and peel yourself.", "❌ Pre-cut fruit, salads, raw vegetables, and uncooked garnishes of uncertain hygiene."],
          ["✅ Pasteurized milk and dairy products in sealed packaging.", "❌ Unpasteurized dairy products or products stored open without refrigeration."],
          ["✅ Dry snacks or factory-packaged food in intact, sealed packaging.", "❌ Uncovered food exposed to dust, insects, or frequent handling."],
        ],
      },
      subsections: [
        {
          heading: "🥗 Street Food & Local Snacks",
          paragraphs: [],
          bullets: [
            "Choose vendors with clean food-preparation areas and utensils.",
            "Prefer food cooked to order and served piping hot.",
            "Avoid food displayed uncovered, exposed to flies, or left at room temperature for an extended period.",
          ],
          afterBullets: ["⚠ Remember: perishable food should not be left at room temperature for more than 2 hours. When the outdoor temperature is above 32°C (90°F), limit this to 1 hour."],
        },
      ],
    },
    {
      heading: "2. Drink Safely",
      paragraphs: [],
      images: [{ src: "/images/article-5/hydratation.gif", alt: "Hydration illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["CHOOSE", "AVOID"],
        rows: [
          ["✅ Factory-sealed bottled water; check the seal and open it yourself.", "❌ Bottles with damaged seals or drinks from an unknown water source."],
          ["✅ Hot drinks freshly prepared and served steaming hot.", "❌ Lukewarm or room-temperature drinks when water safety is uncertain."],
          ["✅ Drinks without ice, unless the ice is known to be made from safe water.", "❌ Ice of unknown origin."],
          ["✅ Drinking water from a dispenser or source confirmed to be safe.", "❌ Tap water that has not been confirmed safe for drinking or brushing your teeth."],
        ],
      },
      afterTable: ["☕ Water may look clear and still contain harmful germs. Make sure to:"],
      bullets: [
        "Check the bottle seal and cap before drinking.",
        "Avoid freshly squeezed juice prepared by others if the cleanliness of the fruit, washing water, or equipment cannot be confirmed.",
        "Use safe water to wash fruit that will be eaten raw.",
      ],
    },
    {
      heading: "3. Jamu & Traditional Wellness Experience",
      paragraphs: ["Watching how jamu (traditional herbal drinks) and other herbal preparations are made is a cultural and educational experience. You are not required to taste or consume any preparation!"],
      images: [{ src: "/images/article-5/gut-health.gif", alt: "Gut health illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["DO", "DON'T"],
        rows: [
          ["✅ Observe the process and ask whether tasting is optional.", "❌ Do not taste unidentified plants, roots, leaves, powders, liquids, or herbal mixtures."],
          ["✅ If you wish to taste, ask about the ingredients and make sure it is served with clean utensils.", "❌ Avoid products stored uncovered or prepared and stored under unclear conditions."],
          ["✅ Tell the host about any allergies or dietary restrictions before tasting.", "❌ Do not assume that natural ingredients are always safe or that jamu can replace prescribed medication."],
        ],
      },
      subsections: [
        {
          heading: "⚠ Remember:",
          paragraphs: ["Pregnant or breastfeeding visitors, people with allergies or chronic conditions, and those taking regular medication should avoid trying herbal preparations unless they have checked with a healthcare professional. Herbal products can cause allergic reactions or interact with medicines."],
        },
      ],
    },
    {
      heading: "4. Keep Your Hands Clean",
      paragraphs: [],
      images: [{ src: "/images/article-5/handwashing.gif", alt: "Handwashing illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["WASH WITH SOAP AND RUNNING WATER", "IF SOAP AND WATER ARE NOT AVAILABLE"],
        rows: [[
          "• Before eating or handling food\n• After using the toilet\n• After handling rubbish or touching animals\n• After batik activities\n• Whenever your hands are visibly dirty",
          "• Use an alcohol-based hand sanitizer containing at least 60% alcohol.\n• Wash with soap and water as soon as possible, especially if your hands are visibly dirty or greasy.",
        ]],
      },
      subsections: [
        {
          heading: "⚠ Remember:",
          paragraphs: ["Hand sanitizer is not as effective as handwashing for removing some germs. Soap and running water remain the preferred option."],
        },
      ],
    },
    {
      heading: "5. If You Feel Unwell",
      paragraphs: ["Illness from contaminated food or water may cause symptoms during your visit or after you return home."],
      images: [{ src: "/images/article-5/hospital-patient.gif", alt: "Hospital patient illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["COMMON SYMPTOMS", "WARNING SIGNS — SEEK MEDICAL HELP IMMEDIATELY 📞"],
        rows: [[
          "• Diarrhea\n• Nausea or vomiting\n• Stomach cramps or pain\n• Fever\n• Feeling weak",
          "• Bloody or black stools\n• High fever\n• Severe abdominal pain\n• Persistent vomiting\n• Inability to keep fluids down\n• Signs of severe dehydration\n• Sudden confusion\n• Fainting\n• Seizures",
        ]],
      },
      subsections: [
        {
          heading: "⚠ What to Do?",
          paragraphs: [],
          bullets: [
            "Stop the activity and inform your tour guide or companion.",
            "Rest in a cool, shaded place and drink small amounts of safe fluids frequently.",
            "If you have diarrhea or vomiting, use oral rehydration salts (ORS) according to the packet instructions. Mix with the exact amount of safe water stated on the package.",
            "Do not take antibiotics or anti-diarrheal medicines without appropriate medical advice, especially if you have bloody diarrhea or a high fever.",
            "Do not delay seeking medical care if warning signs appear.",
            "Young children, older adults, pregnant people, and people with weakened immune systems or chronic illnesses should seek medical advice earlier if symptoms develop.",
          ],
        },
      ],
    },
    {
      heading: "6. Your Quick Visitor Checklist:",
      paragraphs: [],
      images: [{ src: "/images/article-5/to-do-list.gif", alt: "To-do list illustration" }],
      imagesBeforeText: true,
      table: {
        headers: ["BEFORE AND DURING YOUR VISIT, CHECK THAT:"],
        rows: [
          ["I have access to safe drinking water."],
          ["I choose thoroughly cooked food served hot."],
          ["I avoid ice or drinks from uncertain water sources."],
          ["I clean my hands before eating and after using the toilet."],
          ["I only taste jamu if its ingredients and preparation are clear."],
          ["I know how to contact my tour guide if I feel unwell."],
        ],
      },
      afterTable: ["EAT WELL. DRINK SAFE. KEEP HANDS CLEAN. ENJOY RESONEGARAN!"],
    },
    {
      heading: "References",
      paragraphs: [],
      bullets: [
        "[1] Chard AN, Hill V. Food and Water Precautions for Travelers. In: Halsey ES, Angelo KM, Barnett ED, et al., editors. CDC Yellow Book 2026: Health Information for International Travel [Internet]. Atlanta (GA): Centers for Disease Control and Prevention; 2025 Apr 23. Available from:[ https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/food-and-water-precautions-for-travelers.html](https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/food-and-water-precautions-for-travelers.html)",
        "[2] Centers for Disease Control and Prevention. Avoid Contaminated Water During Travel [Internet]. Available from:[ https://wwwnc.cdc.gov/travel/page/water-disinfection](https://wwwnc.cdc.gov/travel/page/water-disinfection)",
        "[3] Centers for Disease Control and Prevention. About Water Treatment Options When Hiking, Camping, or Traveling [Internet]. Reviewed 2026 Nov 10. Available from:[ https://www.cdc.gov/drinking-water/prevention/water-treatment-hiking-camping-traveling.html](https://www.cdc.gov/drinking-water/prevention/water-treatment-hiking-camping-traveling.html)",
        "[4] Centers for Disease Control and Prevention. Food and Drink Considerations When Traveling [Internet]. Reviewed 2026 Jan 6. Available from:[ https://wwwnc.cdc.gov/travel/page/food-water-safety](https://wwwnc.cdc.gov/travel/page/food-water-safety)",
      ],
    },
  ],
}

export const blogs = defineContent({
  en: {
    kicker: "FIELD NOTES FROM TERBAN",
    title: "Stories through\n*three local doors.*",
    lead: "A closer look at the history, hand skills, and traditional knowledge behind the proposed Resonegaran visitor route.",
    archiveBack: "All field notes",
    homeLabel: "Back to Kastaraya",
    articleLabel: "A FIELD NOTE FROM RESONEGARAN",
    continueReading: "Keep exploring",
    posts: [
      {
        slug: "museum-dharma-wiratama",
        category: "HERITAGE",
        title: "From colonial residence to Army museum",
        date: "A place on the heritage walk",
        image: "photo-1518005020951-eccb494ad742",
        imageAlt: "Historic architecture in Yogyakarta",
        excerpt: "The 1904 building now used by Museum TNI AD Dharma Wiratama has held several chapters of Yogyakarta’s history. Today, its collections interpret the history and service of the Indonesian Army.",
        deck: "One historic building carries stories of changing power, independence, and the way a city remembers its past.",
        sections: [
          {
            heading: "A building with more than one chapter",
            paragraphs: [
              "The building now used by Museum TNI AD Dharma Wiratama was built in 1904 as a residence for a colonial-era plantation administrator. Its purpose changed as Yogyakarta moved through occupation and independence.",
              "After Indonesia proclaimed independence, the building became a headquarters for the People’s Security Army (TKR). It was later used by the regional military command before becoming a museum.",
            ],
          },
          {
            heading: "A museum for military history",
            paragraphs: [
              "Today the museum presents the history and service of the Indonesian Army through military objects, photographs, documents, and other collections. A guided visit gives those objects a wider story and context.",
              "The museum’s current visitor information lists opening hours Tuesday to Sunday, 08:00–15:00, and asks groups to reserve in advance. Check with the museum before planning a visit, since schedules can change.",
            ],
          },
          {
            heading: "A stop in a wider neighborhood story",
            paragraphs: [
              "The Resonegaran proposal places the museum alongside Batik Sekar Rinonce and the Prof. Sardjito house and jamu enterprise. Together, the stops connect built heritage, batik craft, and traditional knowledge in one guided neighborhood route.",
              "The heritage walk is still a proposed itinerary. Ask the local organizer about the route, access, and meeting point before setting out.",
            ],
          },
        ],
      },
      {
        slug: "batik-and-jamu",
        category: "CULTURE & WELLNESS",
        title: "Batik, jamu, and knowledge passed along",
        date: "Meet the proposed route’s local partners",
        image: "photo-1528459801416-a9e53bbf4e17",
        imageAlt: "A close-up of handmade textile and craft materials",
        excerpt: "At Sekar Rinonce, visitors can learn the steps of batik tulis with artisans. A nearby jamu stop adds another layer of heritage, with every visit arranged directly with its host.",
        deck: "The proposed Resonegaran route makes room for learning by doing, while keeping local hosts at the center of the experience.",
        sections: [
          {
            heading: "Learning the rhythm of batik tulis",
            paragraphs: [
              "At Batik Sekar Rinonce, the proposed workshop begins with an introduction to batik tulis, its tools, and the craft’s meaning. Visitors then try canting on a small cotton cloth with an artisan’s guidance.",
              "The sample activity continues with colour, setting the dye, and nglorod—the hot-water step that removes the wax. The proposal’s example schedule takes about 3 hours 50 minutes, but drying can change the timing. Confirm the session and group size with the studio before visiting.",
            ],
          },
          {
            heading: "A second kind of inherited knowledge",
            paragraphs: [
              "The route also proposes a stop at the Prof. Sardjito house and family jamu enterprise on Jl. Cik Di Tiro. The visit is an opportunity to hear about the home’s history and traditional jamu knowledge from its host or a local resource person.",
              "The residence is private property, so it is not a walk-in attraction. Access, any production visit, and a possible tasting must all be confirmed with the host. The experience shares cultural knowledge; it is not medical advice.",
            ],
          },
          {
            heading: "Let the hosts shape the visit",
            paragraphs: [
              "These are hands-on experiences led by local partners, not fixed attractions with a guaranteed daily schedule. Advance arrangements help hosts prepare, set a comfortable group size, and explain what is available on the day.",
              "The idea is simple: arrive curious, take time to learn, and leave space for the people who keep these skills and stories alive.",
            ],
          },
        ],
      },
      travelHealthKitPost,
      avoidingBitesPost,
      vaccinationGuidePost,
      sunProtectionPost,
      safeFoodWaterPost,
    ],
    readStory: "Read the story",
    signoffEyebrow: "A COMMUNITY-ROOTED VISIT",
    signoffTitle: "Come with curiosity.",
    signoffText: "Plan ahead, meet the local hosts, and give each place the time and respect it deserves.",
    signoffButton: "Plan a visit",
  },
  id: {
    kicker: "CATATAN LAPANGAN DARI TERBAN",
    title: "Cerita dari\n*tiga pintu lokal.*",
    lead: "Mengenal lebih dekat sejarah, keterampilan, dan pengetahuan tradisional di balik rancangan rute wisata Resonegaran.",
    archiveBack: "Semua catatan lapangan",
    homeLabel: "Kembali ke Kastaraya",
    articleLabel: "CATATAN LAPANGAN DARI RESONEGARAN",
    continueReading: "Jelajahi lagi",
    posts: [
      {
        slug: "museum-dharma-wiratama",
        category: "HERITAGE",
        title: "Dari rumah kolonial menjadi museum TNI AD",
        date: "Salah satu titik heritage walk",
        image: "photo-1518005020951-eccb494ad742",
        imageAlt: "Arsitektur bersejarah di Yogyakarta",
        excerpt: "Gedung tahun 1904 yang kini digunakan Museum TNI AD Dharma Wiratama menyimpan beberapa bab sejarah Yogyakarta. Kini, koleksinya mengisahkan sejarah dan pengabdian TNI Angkatan Darat.",
        deck: "Satu bangunan bersejarah menyimpan kisah perubahan kekuasaan, kemerdekaan, dan cara sebuah kota mengenang masa lalu.",
        sections: [
          {
            heading: "Bangunan dengan banyak babak",
            paragraphs: [
              "Gedung yang kini digunakan Museum TNI AD Dharma Wiratama dibangun pada 1904 sebagai rumah pejabat administratur perkebunan pada masa kolonial. Fungsinya berubah seiring Yogyakarta melewati masa pendudukan dan kemerdekaan.",
              "Setelah Indonesia memproklamasikan kemerdekaan, gedung ini menjadi markas Tentara Keamanan Rakyat (TKR). Setelah itu, gedung digunakan oleh komando militer daerah sebelum menjadi museum.",
            ],
          },
          {
            heading: "Museum untuk mengenal sejarah militer",
            paragraphs: [
              "Kini museum menyajikan sejarah dan pengabdian TNI Angkatan Darat melalui benda militer, foto, dokumen, dan koleksi lainnya. Kunjungan berpemandu membantu pengunjung memahami cerita dan konteks di balik koleksi tersebut.",
              "Informasi pengunjung museum saat ini mencantumkan jam buka Selasa–Minggu, pukul 08.00–15.00, dan meminta rombongan untuk reservasi terlebih dahulu. Hubungi museum sebelum merencanakan kunjungan karena jadwal dapat berubah.",
            ],
          },
          {
            heading: "Satu titik dalam kisah kawasan",
            paragraphs: [
              "Proposal Resonegaran menempatkan museum bersama Batik Sekar Rinonce dan rumah Prof. Sardjito serta usaha jamu. Ketiganya menghubungkan heritage bangunan, kerajinan batik, dan pengetahuan tradisional dalam satu rute kampung berpemandu.",
              "Heritage walk ini masih berupa rancangan itinerary. Tanyakan rute, akses, dan titik temu kepada pengelola lokal sebelum berangkat.",
            ],
          },
        ],
      },
      {
        slug: "batik-and-jamu",
        category: "BUDAYA & KESEHATAN",
        title: "Batik, jamu, dan pengetahuan yang diwariskan",
        date: "Mengenal mitra dalam rancangan rute",
        image: "photo-1528459801416-a9e53bbf4e17",
        imageAlt: "Kain dan bahan kerajinan buatan tangan dari dekat",
        excerpt: "Di Sekar Rinonce, pengunjung dapat mengenal tahapan batik tulis bersama perajin. Persinggahan jamu menambah lapisan kisah heritage, dengan seluruh kunjungan diatur langsung bersama tuan rumah.",
        deck: "Rute Resonegaran yang dirancang memberi ruang untuk belajar sambil berkarya, dengan tuan rumah lokal sebagai pusat pengalaman.",
        sections: [
          {
            heading: "Mengenal irama batik tulis",
            paragraphs: [
              "Di Batik Sekar Rinonce, lokakarya yang diusulkan dimulai dengan pengenalan batik tulis, alat yang digunakan, dan makna kerajinannya. Pengunjung kemudian mencoba mencanting pada kain katun kecil dengan bimbingan perajin.",
              "Contoh kegiatan berlanjut dengan pewarnaan, penguncian warna, dan nglorod—tahap menggunakan air panas untuk melepaskan malam. Jadwal contoh dalam proposal berlangsung sekitar 3 jam 50 menit, tetapi pengeringan dapat mengubah durasinya. Konfirmasikan sesi dan jumlah peserta kepada sanggar sebelum berkunjung.",
            ],
          },
          {
            heading: "Pengetahuan warisan lainnya",
            paragraphs: [
              "Rute ini juga mengusulkan persinggahan di rumah Prof. Sardjito dan usaha jamu keluarga di Jl. Cik Di Tiro. Kunjungan memberi kesempatan untuk mendengar kisah rumah dan pengetahuan jamu tradisional dari tuan rumah atau narasumber lokal.",
              "Rumah tersebut merupakan properti pribadi, bukan tempat wisata yang menerima kunjungan langsung. Akses, kunjungan ke tempat produksi, dan kemungkinan mencicipi jamu harus dikonfirmasi kepada tuan rumah. Pengalaman ini berbagi pengetahuan budaya, bukan saran medis.",
            ],
          },
          {
            heading: "Biarkan tuan rumah membentuk kunjungan",
            paragraphs: [
              "Pengalaman ini dipandu mitra lokal, bukan atraksi dengan jadwal harian yang selalu tersedia. Pengaturan sebelumnya membantu tuan rumah bersiap, menentukan jumlah peserta yang nyaman, dan menjelaskan kegiatan yang tersedia pada hari kunjungan.",
              "Gagasannya sederhana: datang dengan rasa ingin tahu, luangkan waktu untuk belajar, dan beri ruang bagi orang-orang yang menjaga keterampilan serta cerita ini tetap hidup.",
            ],
          },
        ],
      },
      travelHealthKitPost,
      avoidingBitesPost,
      vaccinationGuidePost,
      sunProtectionPost,
      safeFoodWaterPost,
    ],
    readStory: "Baca ceritanya",
    signoffEyebrow: "KUNJUNGAN BERBASIS MASYARAKAT",
    signoffTitle: "Datang dengan rasa ingin tahu.",
    signoffText: "Rencanakan lebih dahulu, temui tuan rumah lokal, dan hormati waktu serta nilai setiap tempat.",
    signoffButton: "Rencanakan kunjungan",
  },
})
