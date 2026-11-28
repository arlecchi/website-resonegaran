// Page 06 — Blog index and full article copy, in English and Bahasa Indonesia.
import { defineContent } from "@/lib/content"

const travelHealthKitPost = {
  slug: "personal-travel-health-kit",
  checklist: true,
  category: "TRAVEL HEALTH",
  title: "PERSONAL TRAVEL HEALTH KIT",
  date: "A concise packing guide based on the CDC Yellow Book 2026",
  image: "/images/blog-covers/tourism-items-set.jpg",
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
  image: "/images/blog-covers/mosquito-suitcase.avif",
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
  image: "/images/blog-covers/female-doctor-vaccine.jpg",
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
  deck: "THE RESONEGARAN VISITOR'S GUIDE",
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
  deck: "THE RESONEGARAN VISITOR'S GUIDE",
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

function localizedPost(post: any, fields: Record<string, any>, sections: Record<string, any>[]) {
  return {
    ...post,
    ...fields,
    sections: sections.map((section, index) => {
      const original = post.sections[index] ?? {}
      const localized: Record<string, any> = {
        heading: section.heading,
        paragraphs: section.paragraphs ?? [],
        images: original.images,
        imagesBeforeText: original.imagesBeforeText,
      }
      for (const key of ["table", "bullets", "afterTable", "beforeTableBullets", "checkableParagraph", "emphasizeBulletLead", "afterBullets"]) {
        if (key in section) localized[key] = section[key]
      }
      if (section.subsections) {
        localized.subsections = section.subsections.map((subsection: Record<string, any>, subsectionIndex: number) => ({
          ...subsection,
          images: original.subsections?.[subsectionIndex]?.images,
        }))
      }
      return localized
    }),
  }
}

const travelHealthKitPostId = localizedPost(travelHealthKitPost, {
  category: "KESEHATAN PERJALANAN",
  title: "Beyond The Journey: Panduan Penting untuk Perjalanan yang Aman dan Sehat di Indonesia",
  date: "Disusun berdasarkan rekomendasi CDC Yellow Book 2026 mengenai perlengkapan kesehatan untuk bepergian",
  excerpt: "Membantu wisatawan menangani keluhan kesehatan ringan, cedera, dan kebutuhan pengobatan rutin selama perjalanan.",
  deck: "Disusun berdasarkan rekomendasi CDC Yellow Book 2026 mengenai perlengkapan kesehatan untuk bepergian.",
  imageAlt: "Ilustrasi perlengkapan perjalanan",
}, [
  { heading: "Tujuan", paragraphs: ["Membantu wisatawan menangani keluhan kesehatan ringan, cedera, dan kebutuhan pengobatan rutin selama perjalanan."] },
  { heading: "Persiapan", paragraphs: ["Sesuaikan isi perlengkapan dengan kondisi kesehatan, destinasi, aktivitas, durasi perjalanan, dan akses fasilitas kesehatan. Simpan dalam wadah yang kuat, tahan air, dan mudah dijangkau."] },
  { heading: "1. Perawatan Luka", table: { headers: ["PERLENGKAPAN", "FUNGSI/KETERANGAN"], rows: [
    ["Plester luka berbagai ukuran, termasuk yang tahan air", "Menutup luka sayat dan lecet ringan."], ["Bantalan perekat berbahan felt atau gel", "Mencegah dan mengatasi lepuh akibat gesekan."], ["Elastic bandage (ukuran 3 & 4 inci)", "Menyangga bagian tubuh yang keseleo dan membantu membalut luka."], ["Kasa steril dan balutan luka longgar (ukuran 2 × 2 dan 4 × 4 inci)", "Membersihkan dan menutup luka yang lebih besar."], ["Plester medis atau perban perekat", "Mempertahankan balutan agar tetap pada posisinya."], ["Gunting perban kecil", "Memotong perban atau plester sesuai kebutuhan."],
  ] } },
  { heading: "2. Obat-obatan Oles/Topikal", table: { headers: ["JENIS OBAT", "NAMA GENERIK/BAHAN AKTIF", "INDIKASI PENGGUNAAN"], rows: [
    ["Pereda iritasi kulit", "Gel lidah buaya", "Meredakan sengatan matahari ringan dan iritasi kulit."], ["Pereda gatal", "Kalamin", "Meredakan gatal akibat iritasi kulit ringan atau gigitan serangga."], ["Antijamur topikal", "Krim klotrimazol 1%", "Mengatasi infeksi jamur superfisial pada area kulit tertentu."], ["Antiseptik topikal", "Povidon iodin", "Membersihkan dan mengurangi risiko infeksi pada luka ringan."], ["Kortikosteroid topikal", "Krim hidrokortison 1%", "Meredakan ruam peradangan ringan dan gatal untuk penggunaan jangka pendek. Hindari pada kulit yang terinfeksi kecuali atas anjuran tenaga medis."],
  ] } },
  { heading: "3. Obat Sesuai Keluhan Umum", table: { headers: ["JENIS OBAT", "NAMA GENERIK/BAHAN AKTIF", "INDIKASI PENGGUNAAN"], rows: [
    ["Penurun panas; antinyeri", "Parasetamol", "Meredakan nyeri ringan hingga sedang dan demam."], ["Obat antiinflamasi nonsteroid (OAINS)", "Ibuprofen", "Meredakan nyeri, demam, dan peradangan. Hindari jika memiliki riwayat tukak lambung, gangguan ginjal berat, atau alergi OAINS."], ["Antihistamin", "Cetirizine atau klorfeniramin maleat (CTM)", "Mengatasi alergi, gatal, dan biduran. CTM dapat menyebabkan kantuk."], ["Antasida", "Aluminium hidroksida + magnesium hidroksida", "Meredakan nyeri ulu hati dan gangguan pencernaan akibat asam lambung."], ["Penghambat pompa proton (PPI)", "Omeprazol", "Mengatasi refluks asam lambung dan keluhan terkait gastritis yang sering berulang. Bukan untuk meredakan gejala secara langsung."], ["Antitusif", "Dekstrometorfan", "Meredakan batuk kering."], ["Dekongestan", "Pseudoefedrin", "Meredakan hidung tersumbat. Gunakan dengan hati-hati, terutama pada penderita hipertensi."], ["Antidiare", "Loperamid", "Meredakan diare akut yang tidak berdarah. Hindari jika diare disertai darah atau demam tinggi."], ["Antimual/obat antimabuk perjalanan", "Dimenhidrinat", "Mengatasi mabuk perjalanan, mual, dan muntah. Dapat menyebabkan kantuk."], ["Laksatif stimulan", "Bisakodil", "Mengatasi sembelit sesekali dalam jangka pendek."], ["Laksatif osmotik", "Laktulosa", "Mengatasi sembelit dengan membantu melunakkan tinja."], ["Larutan rehidrasi oral", "Oralit", "Menggantikan cairan dan elektrolit yang hilang akibat diare atau muntah."],
  ] } },
  { heading: "4. Obat dengan Resep Khusus", checkableParagraph: true, table: { headers: ["JENIS OBAT", "NAMA GENERIK/BAHAN AKTIF", "INDIKASI PENGGUNAAN"], rows: [
    ["Obat resep rutin", "Seluruh obat resep yang saat ini rutin dikonsumsi", "Lanjutkan pengobatan selama perjalanan sesuai resep dokter. Bawa persediaan yang cukup."], ["Obat untuk penyakit terkait ketinggian", "Asetazolamid", "Mencegah dan menangani penyakit ketinggian akut (acute mountain sickness) jika diperlukan."], ["Kortikosteroid sistemik", "Deksametason", "Digunakan pada kondisi tertentu terkait penyakit ketinggian atau kondisi lain sesuai resep dokter."], ["Bronkodilator kerja singkat", "Inhaler salbutamol", "Meredakan mengi dan penyempitan saluran napas pada penderita asma atau gangguan saluran napas reversibel."], ["Antibiotik untuk diare pelancong", "Azitromisin", "Obat cadangan untuk diare wisatawan derajat sedang hingga berat pada kondisi tertentu, sesuai resep dan petunjuk dokter."], ["Obat pencegahan malaria", "Doksisiklin", "Mencegah malaria di destinasi tertentu jika sesuai dengan kondisi wisatawan dan rekomendasi dokter."],
  ] }, afterTable: ["Kebutuhan lainnya: Jarum dan alat suntik untuk penggunaan obat injeksi mandiri secara rutin, seperti insulin. Sertakan salinan resep dokter. Bawa kacamata resep atau lensa kontak cadangan."] },
  { heading: "5. Peralatan Kesehatan", table: { headers: ["PERLENGKAPAN", "FUNGSI/KETERANGAN"], rows: [["Termometer digital", "Siapkan pelindung plastik sekali pakai untuk pengukuran suhu melalui mulut atau rektal."], ["Headlamp", "Membantu penerangan di area terpencil, saat listrik padam, atau dalam keadaan darurat."], ["Pinset", "Membantu mengeluarkan serpihan benda asing dari kulit atau melepaskan serangga."]] } },
  { heading: "6. Dokumen Penting", table: { headers: ["PERLENGKAPAN", "FUNGSI/KETERANGAN"], rows: [["Ringkasan riwayat kesehatan", "Berisi diagnosis, obat rutin (nama generik), dan riwayat alergi."], ["Dokumen arahan perawatan medis lanjutan (Advanced Medical Care Directive), jika ada", "Sertakan informasi DNR (Do Not Resuscitate) jika diperlukan."], ["Elektrokardiogram (EKG), jika diperlukan", "Terutama bagi wisatawan dengan hasil EKG abnormal sebelumnya, riwayat penyakit jantung atau paru, atau berusia di atas 50 tahun."], ["Kartu kontak darurat", "Memudahkan akses ke nomor kontak penting dalam keadaan darurat."], ["Sertifikat Vaksinasi atau Profilaksis Internasional (ICVP/Yellow Card)", "Bawa jika dipersyaratkan oleh negara tujuan."], ["Dokumen asuransi perjalanan dan kesehatan", "Memuat informasi polis dan kontak layanan bantuan asuransi."], ["Buku panduan pertolongan pertama berukuran praktis", "Sebagai panduan untuk melakukan pertolongan pertama dasar."]] } },
  { heading: "7. Perlengkapan Perlindungan Diri", table: { headers: ["PERLENGKAPAN", "FUNGSI/KETERANGAN"], rows: [["Kondom dan alat kontrasepsi lainnya", "Sesuai kebutuhan masing-masing wisatawan."], ["Sarung tangan pemeriksaan", "Membantu mencegah penularan infeksi dan melindungi diri."], ["Masker atau respirator N95", "Melindungi dari paparan infeksi saluran pernapasan."], ["Losion antinyamuk dan kelambu", "Mencegah gigitan serangga dan penyakit yang ditularkan melalui nyamuk."], ["Pelembap bibir dengan SPF", "Menjaga kelembapan bibir dan mencegah bibir pecah-pecah."], ["Perlengkapan mandi dan kebersihan diri", "Meliputi hand sanitizer, tisu basah atau disinfektan, tisu kering, dan produk menstruasi seperti pembalut."], ["Tabir surya (SPF minimal 30)", "Melindungi kulit dari paparan sinar matahari; kandungan zinc oxide juga dapat melindungi area hidung, bibir, dan wajah."], ["Tablet atau alat untuk menjernihkan air", "Berguna jika air minum bersih sulit diperoleh atau menggunakan air dari sumber yang keamanannya belum dipastikan."]] } },
  { heading: "8. Persiapan Khusus untuk Anak", bullets: ["Pilih obat dan produk pencegahan malaria, diare wisatawan, serta repelan serangga yang sesuai dengan usia anak.", "Siapkan obat untuk nyeri, demam, dan alergi. Sertakan spuit oral atau gelas takar agar dosis obat dapat diberikan dengan tepat.", "Lengkapi kebutuhan keselamatan anak, seperti car seat, pelampung, atau helm, sesuai aktivitas selama perjalanan."] },
  { heading: "Catatan", paragraphs: ["Bahan aktif obat telah disesuaikan dengan referensi Formularium Nasional dan informasi produk BPOM. Status registrasi dan klasifikasi obat dapat berbeda berdasarkan kekuatan, bentuk sediaan, dan ukuran kemasan. Periksa Cek Produk BPOM dan konsultasikan dengan apoteker atau tenaga medis sebelum penggunaan. Obat keras dan obat resep hanya boleh digunakan sesuai anjuran dokter."] },
  { heading: "Catatan Penting", bullets: ["Pemilihan dan penggunaan obat resep harus disesuaikan dengan riwayat kesehatan wisatawan dan rekomendasi tenaga medis. Antibiotik, asetazolamid, deksametason, salbutamol (untuk sediaan yang memerlukan resep), serta obat pencegahan malaria harus digunakan atas arahan tenaga medis. Jangan menggunakan antibiotik atau kortikosteroid tanpa resep dokter.", "Bawa obat golongan narkotika dan psikoaktif dalam kemasan asli beserta resep dokter. Beberapa negara membatasi jumlah obat yang boleh dibawa, umumnya maksimal 30 hari atau kurang. Periksa ketentuan negara tujuan terkait batas jumlah obat yang diperbolehkan.", "Daftar ini merupakan rekomendasi, bukan kewajiban untuk membawa seluruh perlengkapan. Sesuaikan dengan kebutuhan kesehatan dan tujuan perjalanan."] },
  { heading: "Referensi", paragraphs: ["[1] Centers for Disease Control and Prevention. CDC Yellow Book 2026: Health Information for International Travel. “Travel Health Kits.” Dipublikasikan pada 23 April 2025. https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travel-health-kits.html", "[2] Referensi adaptasi untuk Indonesia: Kementerian Kesehatan Republik Indonesia, Formularium Nasional (Keputusan Menteri Kesehatan Nomor HK.01.07/MENKES/2197/2023); peraturan Kementerian Kesehatan mengenai penggolongan obat; serta informasi registrasi produk dari Badan Pengawas Obat dan Makanan (BPOM)."] },
])

const avoidingBitesPostId = localizedPost(avoidingBitesPost, {
  category: "KESEHATAN PERJALANAN", title: "Beyond The Buzz: Perlindungan dari Gigitan Serangga dan Artropoda di Indonesia",
  date: "Panduan kesehatan perjalanan", excerpt: "Nyamuk merupakan vektor penular penyakit yang paling penting untuk diwaspadai wisatawan di Indonesia.",
  deck: "Diadaptasi dari panduan kesehatan perjalanan CDC dan informasi penyakit tular vektor di Indonesia tahun 2026.",
}, [
  { heading: "Mengapa Pencegahan Gigitan Serangga Penting?", paragraphs: ["Nyamuk merupakan vektor penular penyakit yang paling penting untuk diwaspadai wisatawan di Indonesia. Bergantung pada wilayah dan rute perjalanan, nyamuk dapat menularkan dengue, chikungunya, Zika, malaria, Japanese encephalitis (JE), dan filariasis limfatik. Kutu dan artropoda penggigit lainnya juga dapat ditemukan, terutama saat melakukan aktivitas di luar ruangan. Risiko paparan bergantung pada lokasi, musim, jenis penginapan, dan aktivitas yang dilakukan."] },
  { heading: "1. Nyamuk: Pelaku Utama yang Perlu Diwaspadai", afterTable: ["Catatan: Ini adalah panduan singkat, bukan daftar spesies yang lengkap. Kementerian Kesehatan Indonesia mengonfirmasi Aedes aegypti sebagai vektor dengue, chikungunya, dan Zika; Culex quinquefasciatus sebagai vektor yang terkait dengan filariasis limfatik dan JE; serta Culex tritaeniorhynchus sebagai vektor JE yang terkonfirmasi di Indonesia."], table: { headers: ["JENIS NYAMUK", "PENYAKIT YANG PERLU DIWASPADAI", "GAMBARAN RISIKO"], rows: [["Aedes aegypti / Aedes albopictus", "Demam berdarah, chikungunya, dan Zika", "Aedes aegypti tersebar luas di Indonesia dan biasanya menggigit terutama pada pagi dan sore hari; gigitan juga dapat terjadi pada malam hari."], ["Spesies Anopheles", "Malaria", "Risiko sangat bergantung pada lokasi. Pencegahan penting di area berisiko malaria, termasuk wilayah Indonesia timur dan daerah pedesaan di beberapa pulau lainnya."], ["Spesies Culex (termasuk Culex quinquefasciatus dan Culex tritaeniorhynchus)", "Japanese encephalitis dan filariasis limfatik", "Nyamuk Culex dapat menggigit di dalam dan sekitar rumah serta di dekat sawah, lahan basah, atau area peternakan. Risiko JE terutama relevan untuk daerah pedesaan atau masa tinggal yang lebih lama."]] } },
  { heading: "2. Artropoda Penggigit yang Perlu Diwaspadai", subsections: [
    { heading: "Kutu dan Tungau Panen", paragraphs: ["Kutu dapat ditemukan di area berumput, semak-semak, hutan, serta pada tubuh hewan. Tungau panen merupakan tungau pada tahap larva yang hidup di antara tumbuhan. Gigitannya dapat menyebabkan gatal hebat; beberapa jenis dapat menularkan scrub typhus di wilayah tertentu di Asia. Risiko paparan bergantung pada lokasi dan aktivitas.", "Setelah mendaki, berkemah, berkebun, atau mengunjungi peternakan, periksa kulit, pakaian, dan perlengkapan. Perhatikan area pinggang, ketiak, selangkangan, belakang lutut, sekitar telinga, dan kulit kepala."] },
    { heading: "Kutu Loncat", paragraphs: ["Kutu loncat (fleas) dapat ditemukan di sekitar hewan dan tempat hewan beristirahat. Hindari menyentuh hewan liar atau hewan yang terinfestasi kutu, serta hindari duduk atau tidur di area yang terlihat banyak kutu loncat. Penyakit pes dapat ditularkan melalui kutu, tetapi risikonya terbatas pada wilayah tertentu dan bukan risiko umum bagi sebagian besar wisatawan. Cari informasi kesehatan setempat jika berkunjung ke daerah yang diketahui memiliki risiko pes."] },
  ] },
  { heading: "3. Cara Mencegah Gigitan Serangga", emphasizeBulletLead: true, bullets: [
    "Pilih repelan yang terdaftar dan digunakan pada kulit. Di Indonesia, pilih losion atau semprotan antinyamuk yang memiliki izin edar atau notifikasi BPOM sesuai ketentuan. Periksa produk di portal resmi Cek Produk BPOM (https://cekbpom.pom.go.id/) dan cocokkan nama produk, produsen, serta nomor registrasi dengan kemasan. Ikuti batas usia, cara penggunaan, dan interval pemakaian ulang pada label.",
    "Periksa bahan aktif dan label. Bahan aktif yang umum antara lain DEET, picaridin/icaridin, dan IR3535; formulasi dan konsentrasi produk di Indonesia bervariasi. Jangan menganggap semua produk memiliki bahan atau lama perlindungan yang sama. Gunakan produk yang labelnya secara jelas menyatakan bahwa produk dapat dioleskan pada kulit manusia.",
    "Gunakan repelan dengan benar. Oleskan tabir surya terlebih dahulu, kemudian repelan. Hindari mata, mulut, tangan anak kecil, kulit yang terluka, dan kulit yang iritasi. Orang dewasa sebaiknya mengoleskan repelan ke tangan sendiri sebelum mengusapkannya dengan hati-hati ke wajah anak. Cuci kulit yang telah diberi repelan saat perlindungan tidak lagi diperlukan.",
    "Gunakan pakaian pelindung. Kenakan pakaian longgar berlengan panjang, celana panjang, dan alas kaki tertutup, terutama di area yang banyak nyamuk atau tumbuhannya lebat.",
    "Gunakan penghalang fisik. Pilih penginapan dengan kasa jendela dan pintu yang utuh atau pendingin ruangan. Gunakan kelambu saat tidur di luar ruangan atau jika kamar tidak berkasa; pasang kelambu pada stroller dan gendongan bayi.",
    "Kurangi tempat berkembang biak nyamuk. Terapkan 3M Plus: Menguras dan menyikat tempat penampungan air secara rutin; Menutup tempat penyimpanan air; Memanfaatkan atau mendaur ulang barang yang dapat menampung air hujan. Tindakan Plus meliputi repelan, kelambu, kasa jendela, pengendalian jentik bila sesuai, dan pemeriksaan lingkungan rutin.",
    "Perhatikan produk insektisida rumah tangga. Obat nyamuk bakar, pengusir nyamuk elektrik, aerosol, dan insektisida rumah tangga berbeda dari repelan kulit. Periksa izin edar sesuai kategori produk, ikuti label, dan gunakan dengan ventilasi memadai. Jangan oleskan insektisida rumah tangga ke kulit atau pakaian kecuali label secara jelas mengizinkan penggunaan tersebut.",
    "Untuk perawatan pakaian. Jangan otomatis menerapkan anjuran CDC/EPA tentang permetrin pada pakaian untuk produk yang dijual di Indonesia. Gunakan produk perawatan pakaian hanya jika dipasarkan secara legal untuk tujuan tersebut di Indonesia dan labelnya secara khusus memuat petunjuk penggunaan pada pakaian atau perlengkapan. Jangan pernah mengoleskan insektisida pertanian atau rumah tangga langsung ke kulit.",
  ] },
  { heading: "4. Tips Tambahan untuk Bayi dan Anak-anak", bullets: ["Pilih pakaian yang menutupi lengan dan kaki anak. Gunakan kelambu pada stroller atau gendongan bayi.", "Ikuti batas usia dan petunjuk pada label produk Indonesia. Jangan gunakan produk yang mengandung oil of lemon eucalyptus (OLE) atau para-menthane-diol (PMD) pada anak di bawah 3 tahun, sesuai panduan CDC.", "Jangan oleskan repelan pada tangan, mata, mulut, luka, atau kulit anak yang iritasi. Orang dewasa sebaiknya menuangkan repelan ke telapak tangan sendiri lalu mengoleskannya dengan hati-hati ke wajah anak.", "Jangan oleskan insektisida perawatan pakaian atau insektisida rumah tangga langsung ke kulit. Gunakan hanya produk yang secara khusus berlabel untuk kulit manusia."] },
  { heading: "5. Setelah Beraktivitas di Luar Ruangan atau Mengalami Gigitan", bullets: ["Hindari menggaruk bekas gigitan. Losion kalamin atau obat antigatal yang dijual bebas dapat membantu meredakan gatal.", "Setelah beraktivitas di area berumput atau berhutan, periksa seluruh tubuh, pakaian, tas, dan hewan peliharaan untuk memastikan tidak ada kutu. Segera mandi setelah kembali ke dalam ruangan dan lepaskan kutu yang menempel dengan hati-hati.", "Segera periksakan diri ke fasilitas kesehatan jika mengalami demam, sakit kepala berat, nyeri otot atau sendi yang hebat, ruam, atau kelemahan tidak biasa selama maupun setelah perjalanan. Sampaikan lokasi dan waktu perjalanan serta riwayat paparan serangga atau kutu kepada tenaga medis.", "Demam setelah mengunjungi daerah berisiko malaria memerlukan pemeriksaan medis segera, meskipun tindakan pencegahan telah dilakukan."] },
  { heading: "6. Cara Memeriksa Produk di Indonesia", paragraphs: ["Untuk losion atau semprotan antinyamuk yang digunakan langsung pada kulit, Kementerian Kesehatan RI menyarankan produk dengan izin edar BPOM. Periksa produk melalui portal resmi Cek Produk BPOM (https://cekbpom.pom.go.id/). Untuk insektisida rumah tangga seperti aerosol, obat nyamuk bakar, atau pengusir nyamuk elektrik, pastikan produk memiliki izin edar sesuai kategorinya. Produk rumah tangga dapat berada di bawah regulasi Kementerian Kesehatan, bukan jalur registrasi BPOM untuk repelan kulit. Selalu ikuti petunjuk pada kemasan."] },
  { heading: "Kesimpulan", paragraphs: ["Bagi sebagian besar wisatawan di Indonesia, pencegahan gigitan nyamuk perlu menjadi prioritas: gunakan repelan secara konsisten, tutupi kulit yang terbuka, pilih penginapan berkasa atau berpendingin ruangan, dan gunakan kelambu bila diperlukan. Tambahkan tindakan pencegahan kutu dan kutu loncat jika rencana perjalanan mencakup hutan, peternakan, padang rumput, atau kontak dekat dengan hewan."] },
  { heading: "Referensi", bullets: ["1. Centers for Disease Control and Prevention (CDC). Avoid Bug Bites. Travelers’ Health. Page last reviewed May 11, 2022. https://wwwnc.cdc.gov/travel/page/avoid-bug-bites", "2. CDC. Indonesia – Traveler View. https://wwwnc.cdc.gov/travel/destinations/traveler/none/Indonesia/", "3. Ministry of Health, Republic of Indonesia. Pedoman Penanggulangan Demam Rift Valley di Indonesia. 2024. https://infeksiemerging.kemkes.go.id/index.php/document/download/M88O", "4. World Health Organization. Vector-borne diseases. https://www.who.int/news-room/fact-sheets/detail/vector-borne-diseases", "5. Kementerian Kesehatan RI. Cara Mencegah DBD dengan Menjaga Lingkungan & Diri Sendiri. https://ayosehat.kemkes.go.id/cara-mencegah-dbd", "6. Kementerian Kesehatan RI. Musim Penghujan Tiba, Waspada DBD di Lingkungan Kita. https://ayosehat.kemkes.go.id/musim-penghujan-tiba-waspada-dbd", "7. Ministry of Health, Republic of Indonesia. Regulation and guidance for household health supplies (PKRT). https://regalkes.kemkes.go.id/"] },
])

const vaccinationGuidePostId = localizedPost(vaccinationGuidePost, {
  category: "KESEHATAN PERJALANAN",
  title: "Shots for A Safe Journey: Panduan Vaksinasi untuk Pengunjung Terban, Yogyakarta, Indonesia",
  date: "PANDUAN WISATAWAN RESONEGARAN #3",
  excerpt: "Tidak ada persyaratan vaksinasi khusus untuk berkunjung ke Kota Yogyakarta.",
  deck: "Panduan vaksinasi untuk pengunjung Terban, Yogyakarta, Indonesia.",
  imageAlt: "Ilustrasi dokter memberikan vaksin kepada seorang siswi",
}, [
  { heading: "Sebelum Kunjungan", paragraphs: ["Tidak ada persyaratan vaksinasi khusus untuk berkunjung ke Kota Yogyakarta."], bullets: ["Untuk liburan singkat, pastikan vaksinasi rutin Anda sudah lengkap.", "Vaksinasi tambahan yang diperlukan bergantung pada usia, dosis sebelumnya, riwayat kesehatan, durasi tinggal, makanan dan minuman yang dikonsumsi, serta aktivitas yang direncanakan. Panduan ini dibuat khusus untuk Kota Yogyakarta."] },
  { heading: "1. Vaksinasi Rutin", paragraphs: ["Vaksin dalam daftar ini perlu diperoleh sesuai usia dan riwayat vaksinasi, terlepas dari apakah seseorang bepergian atau tidak. Wisatawan sebaiknya memeriksa riwayat imunisasi sebelum keberangkatan."], table: { headers: ["VAKSIN", "SIAPA YANG HARUS MEMERIKSANYA?", "MENGAPA INI PENTING?"], rows: [["MMR (campak, gondongan, rubella)", "Anak-anak dan orang dewasa tanpa bukti imunitas; wisatawan internasional umumnya perlu memiliki 2 dosis terdokumentasi atau bukti imunitas yang diterima.", "Campak mudah menular di tempat ramai seperti bandara, transportasi umum, dan tempat wisata."], ["Difteri, tetanus, dan pertusis (DTP/Tdap/Td)", "Semua kelompok usia sesuai jadwal imunisasi anak dan riwayat booster saat dewasa.", "Melindungi dari infeksi saluran pernapasan (difteri/pertusis) dan tetanus akibat luka."], ["Polio", "Anak-anak harus melengkapi dosis rutin; orang dewasa perlu memeriksa apakah seri primer sudah lengkap.", "Mencegah poliomielitis. Dosis tambahan bergantung pada wabah dan saran khusus destinasi."], ["Influenza", "Semua orang berusia minimal 6 bulan, terutama anak-anak, ibu hamil, lansia, dan orang dengan penyakit kronis.", "Perlindungan tahunan terhadap influenza musiman, terutama berguna saat penerbangan dan kegiatan di tempat ramai."], ["Varisela (cacar air)", "Orang berusia minimal 12 bulan tanpa bukti imunitas yang memenuhi syarat.", "Mencegah cacar air dan komplikasinya. Tidak cocok untuk beberapa orang hamil atau dengan gangguan sistem imun."]] }, bullets: ["Anak-anak dapat membandingkan riwayat imunisasi dengan Jadwal Imunisasi Anak IDAI 2024.", "Orang dewasa dapat membandingkan riwayatnya dengan Jadwal Imunisasi Dewasa Indonesia 2026 dari PAPDI: https://satgasimunisasipapdi.com/jadwal-imunisasi-dewasa-2026/"] },
  { heading: "2. Vaksinasi Tambahan", paragraphs: ["Vaksin-vaksin di bawah ini tidak secara otomatis dibutuhkan oleh setiap wisatawan."], table: { headers: ["VAKSIN", "USIA/PENERIMA", "KAPAN PERLU DIPERTIMBANGKAN UNTUK KOTA YOGYAKARTA"], rows: [["Hepatitis A", "Wisatawan yang belum divaksinasi dan berusia ≥1 tahun; bayi 6–11 bulan dapat menerima dosis perjalanan awal.", "Pertimbangkan untuk masa tinggal lebih lama atau sering mengonsumsi makanan lokal/kaki lima. Virus menyebar melalui makanan dan air terkontaminasi. Aturan umum dewasa: 2 dosis dengan jarak 6–12 bulan; dosis perjalanan untuk bayi tidak dihitung sebagai dosis rutin."], ["Demam tifoid", "Sebagian besar wisatawan; vaksin suntik umumnya mulai usia 2 tahun (konfirmasikan usia minimum pada label produk).", "Pertimbangkan untuk masa tinggal lebih lama atau sering mengonsumsi makanan lokal/kaki lima. Jadwal umum: 1 dosis setidaknya 2 minggu sebelum paparan; booster bergantung pada merek dan jenis vaksin."], ["Hepatitis B", "Wisatawan yang belum divaksinasi dari semua kelompok usia.", "Pertimbangkan jika belum pernah divaksinasi, terutama bila mungkin menjalani prosedur medis/gigi, tato/tindik, kontak seksual, atau paparan darah. Jadwal umum dewasa: bulan ke-0, 1, dan 6."], ["Rabies (pra-paparan)", "Anak-anak atau orang dewasa dengan risiko paparan hewan yang meningkat.", "Biasanya tidak diperlukan untuk perjalanan singkat di pusat Kota Yogyakarta. Pertimbangkan bagi pengawas hewan, dokter hewan, atau orang yang sering kontak dengan anjing/kucing/monyet. Jadwal umum: 2 dosis pada hari ke-0 dan ke-7. Gigitan atau cakaran tetap memerlukan perawatan medis segera."], ["Japanese encephalitis (JE)", "Wisatawan yang tinggal lama (biasanya ≥1 bulan), sering mengunjungi daerah endemik, atau memiliki paparan pedesaan; batas usia produk berlaku.", "Biasanya tidak diperlukan untuk perjalanan singkat yang terbatas pada pusat Kota Yogyakarta. Pertimbangkan hanya jika rencana perjalanan mencakup paparan luar ruangan berkepanjangan di daerah pedesaan berisiko JE."], ["Yellow fever", "Wisatawan berusia ≥9 bulan yang datang dari negara berisiko penularan yellow fever, jika aturan masuk mewajibkannya.", "Tidak diperlukan untuk perlindungan di Yogyakarta. Mungkin diwajibkan untuk masuk bergantung pada negara yang dikunjungi sebelum Indonesia."]] } },
  { heading: "3. Fasilitas Kesehatan Terdekat", paragraphs: ["Kota Yogyakarta memiliki berbagai fasilitas pelayanan kesehatan, termasuk rumah sakit, Puskesmas, dan klinik swasta. Daftar ini berfokus pada fasilitas di Kelurahan Terban, Kemantren Gondokusuman, untuk membantu pengunjung menemukan pilihan terdekat untuk vaksinasi dan perawatan medis."], table: { headers: ["FASILITAS KESEHATAN", "JENIS", "SITUS WEB RESMI"], rows: [["RS Panti Rapih", "Rumah sakit umum", "https://pantirapih.or.id/"], ["RS Mata Dr. YAP", "Rumah sakit khusus mata", "https://yap.or.id/"], ["Puskesmas Gondokusuman II", "Pusat kesehatan masyarakat", "https://gondokusuman2pusk.jogjakota.go.id/"]] }, afterTable: ["Catatan: Artikel ini hanya direktori, bukan pemeringkatan atau rekomendasi."], bullets: ["Beberapa rumah sakit menyediakan layanan spesialistik.", "Dalam keadaan darurat medis, hubungi layanan darurat setempat atau kunjungi instalasi gawat darurat rumah sakit terdekat.", "Konfirmasikan langsung ketersediaan layanan vaksinasi dan layanan lainnya kepada rumah sakit."] },
  { heading: "4. Sebelum Mendapatkan Vaksin", bullets: ["Bawa kartu atau catatan vaksinasi Anda.", "Tanyakan kepada klinik apakah vaksin tersedia, batas usia penerima, jumlah dosis yang diperlukan, dan total biayanya.", "Periksa izin edar produk di Indonesia melalui BPOM Cek Produk: https://cekbpom.pom.go.id/", "Beberapa vaksin tidak tersedia di setiap Puskesmas. Untuk sertifikat internasional (e-ICV) atau vaksin perjalanan khusus, tanyakan apakah diperlukan rujukan ke pusat vaksinasi internasional resmi."] },
  { heading: "Referensi", bullets: ["1. CDC. Indonesia – Traveler View. https://wwwnc.cdc.gov/travel/destinations/traveler/none/indonesia", "2. Satgas Imunisasi Dewasa PAPDI. Jadwal Imunisasi Dewasa 2026. https://satgasimunisasipapdi.com/jadwal-imunisasi-dewasa-2026/", "3. Kementerian Kesehatan RI. Jadwal Imunisasi Program (KMK HK.01.07/MENKES/1098/2024 dan perubahan yang berlaku). https://jdih.kemkes.go.id/", "4. Dinas Kesehatan Kota Yogyakarta. Direktori resmi Puskesmas. https://kesehatan.jogjakota.go.id/pages/kontak/direktori", "5. BPOM Cek Produk. https://cekbpom.pom.go.id/"] },
])

const sunProtectionPostId = localizedPost(sunProtectionPost, {
  category: "KESEHATAN PERJALANAN", title: "Beneath The Sun: Panduan Perlindungan Kulit dan Mata bagi Wisatawan Selama Beraktivitas di Luar Ruangan di Indonesia",
  date: "PANDUAN WISATAWAN RESONEGARAN #4", excerpt: "Paparan sinar UV di Indonesia dapat tinggi sepanjang tahun. Perlindungan kulit dan mata membantu mencegah kulit terbakar, penuaan dini, kerusakan mata, dan kanker kulit.",
  deck: "PANDUAN WISATAWAN RESONEGARAN #4", imageAlt: "Ilustrasi dokter daring yang merekomendasikan tabir surya",
}, [
  { heading: "1. Mengapa Perlindungan dari Sinar Matahari Itu Penting?", paragraphs: ["Lokasi tropis Indonesia menyebabkan paparan sinar UV bisa tetap tinggi sepanjang tahun. Paparan UV berlebihan dapat menyebabkan kulit terbakar (sunburn), penuaan dini, kerusakan mata, dan kanker kulit. Sinar UV tetap dapat menjangkau Anda pada hari berawan. UVB dapat menyebabkan kulit terbakar dan kerusakan DNA langsung; UVA meresap lebih dalam serta berkontribusi pada penuaan dini dan kerusakan kulit. Perlindungan penting untuk semua warna kulit."] },
  { heading: "2. Periksa Indeks UV", paragraphs: ["Indeks UV memperkirakan intensitas radiasi UV yang berpotensi merusak kulit. Semakin tinggi angkanya, semakin besar kebutuhan akan perlindungan.", "💕 Periksa prakiraan harian BMKG: https://cews.bmkg.go.id/dashboard-custom/prediksi-UVI-indonesia/"], table: { headers: ["INDEKS UV", "TINGKAT RISIKO", "TINDAKAN YANG DISARANKAN"], rows: [["0–2", "Rendah", "Perlindungan dasar untuk aktivitas luar ruangan berdurasi panjang."], ["3–5", "Sedang", "Cari tempat teduh, kenakan pakaian pelindung, dan gunakan tabir surya."], ["6–7", "Tinggi", "Kurangi waktu di bawah sinar matahari langsung; gunakan perlindungan menyeluruh dari kepala hingga kaki."], ["8–10", "Sangat tinggi", "Hindari paparan matahari terik tengah hari sebisa mungkin; lindungi kulit dan mata."], ["11+", "Ekstrem", "Minimalkan aktivitas luar ruangan selama jam puncak radiasi UV."]] } },
  { heading: "3. Daftar Periksa Perlindungan dari Sinar Matahari", bullets: ["Batasi paparan matahari langsung berkepanjangan, terutama pukul 10.00–16.00.", "Cari tempat berteduh dengan memanfaatkan pohon, bangunan, payung, atau area istirahat terlindung.", "Tutupi tubuh dengan pakaian ringan berlengan panjang dan celana panjang. Pakaian berperingkat UPF 50 dapat menghalangi sekitar 98% radiasi UV.", "Gunakan topi bertepi lebar untuk menaungi wajah, telinga, dan leher.", "Lindungi mata dengan kacamata hitam berlabel UV400 atau perlindungan 100% UVA/UVB.", "Oleskan tabir surya spektrum luas minimal SPF 30; SPF 50+ disarankan untuk aktivitas luar ruangan yang lama.", "Gunakan pelembap bibir dengan SPF 30 atau lebih."] },
  { heading: "4. Tabir Surya: Gunakan dengan Benar", bullets: ["Pilih perlindungan spektrum luas terhadap UVA dan UVB, dengan SPF 30 atau lebih tinggi.", "Oleskan secukupnya dan merata pada seluruh kulit yang terbuka, termasuk telinga, leher, punggung tangan, dan punggung kaki.", "Jika menggunakan tabir surya kimia, oleskan sekitar 15–20 menit sebelum beraktivitas di luar ruangan. Tabir surya fisik/mineral dapat bekerja langsung.", "Oleskan kembali setiap 2 jam serta setelah berenang, berkeringat banyak, atau mengeringkan badan dengan handuk.", "Untuk seluruh tubuh, orang dewasa umumnya membutuhkan sekitar 30–35 mL (setara satu sloki kecil).", "Tabir surya hanya satu lapis perlindungan dan tidak membuat berjemur lama sepenuhnya aman."] },
  { heading: "5. Lindungi Mata Anda: Pilih Kacamata Hitam Secara Bijak", bullets: ["Cari label “100% UVA/UVB protection”, “100% UV protection”, atau “UV400”.", "Lensa besar dan bingkai melengkung (wraparound) dapat mengurangi paparan UV dari samping.", "Lensa terpolarisasi mengurangi silau dari air atau jalan, tetapi polarisasi saja tidak memblokir UV. Selalu periksa label perlindungan UV.", "Lensa gelap, lapisan cermin, warna, dan harga mahal tidak menjamin perlindungan UV.", "Untuk olahraga, pertimbangkan lensa polikarbonat tahan benturan atau Trivex."], afterTable: ["⚠ Paparan UV dapat menyebabkan fotokeratitis serta berkaitan dengan katarak dan masalah mata lainnya. Kacamata hitam biasa tidak aman untuk menatap matahari langsung, melihat gerhana, mengelas, atau menggunakan lampu tanning."] },
  { heading: "6. Kanker Kulit/Melanoma: Kenali Tanda-tandanya", paragraphs: ["Paparan UV dapat merusak DNA sel kulit. Paparan intensif saat masa kanak-kanak merupakan faktor risiko melanoma di kemudian hari. Orang dengan warna kulit lebih gelap juga tetap berisiko terkena kanker kulit."], table: { headers: ["ABCDE", "APA YANG PERLU DIPERHATIKAN?"], rows: [["A – Asimetris", "Bentuk satu sisi tidak sama dengan sisi lainnya."], ["B – Tepi", "Tepi tahi lalat atau bercak tidak teratur, kabur, atau tidak tegas."], ["C – Warna", "Warna tidak merata atau terdiri dari beberapa gradasi."], ["D – Diameter", "Biasanya lebih dari 6 mm, tetapi dapat lebih kecil."], ["E – Perubahan/Evolusi", "Ukuran, bentuk, atau warna berubah; mulai terasa gatal, berdarah, atau nyeri saat disentuh."]] }, afterTable: ["Melanoma dapat tumbuh di telapak tangan, telapak kaki, atau bawah kuku. Tidak semua melanoma mengikuti pola ABCDE.", "⚠ Segera periksakan bercak baru, tidak biasa, atau berubah; periksakan juga luka yang tidak kunjung sembuh atau garis/bercak gelap baru di bawah kuku."] },
  { heading: "7. Perhatian Ekstra untuk Anak-anak", bullets: ["Usia di bawah 6 bulan: hindarkan bayi dari sinar matahari langsung; gunakan tempat teduh, pakaian penutup yang ringan, topi, dan penutup stroller.", "Usia 6 bulan ke atas: gunakan tabir surya yang sesuai usia. Tabir surya fisik/mineral seperti zinc oxide dan titanium dioxide umumnya lebih disarankan untuk kulit sensitif.", "Gunakan topi dan pakaian pelindung serta hindari aktivitas luar ruangan lama saat matahari terik pada tengah hari."] },
  { heading: "8. Obat-obatan, Buah Sitrus, dan Sensitivitas terhadap Sinar Matahari", paragraphs: ["Beberapa obat dapat membuat kulit lebih sensitif terhadap matahari, misalnya doksisiklin dan tetrasiklin lain, beberapa kuinolon dan sulfonamida, OAINS tertentu (seperti ibuprofen, naproksen, dan ketoprofen), retinoid, furosemid, metotreksat, serta beberapa terapi kanker. Konsultasikan langkah pencegahan tambahan dengan tenaga medis; jangan menghentikan obat resep sendiri.", "Air perasan jeruk nipis dan beberapa minyak sitrus dapat bereaksi dengan UVA dan memicu fitofotodermatitis. Kemerahan, nyeri, atau lepuhan dapat muncul 1–2 hari kemudian, diikuti bercak kecokelatan yang bertahan berminggu-minggu atau berbulan-bulan.", "⚠ Segera cuci bersih sisa air perasan jeruk nipis dari kulit sebelum keluar ruangan."] },
  { heading: "9. Jika Kulit Anda Terbakar Sinar Matahari (Sunburn)", bullets: ["Segera pindah ke tempat sejuk dan teduh serta hindari paparan matahari lebih lanjut.", "Dinginkan kulit dengan air dingin atau kompres kain basah yang dingin.", "Oleskan pelembap lembut dan perbanyak minum cairan.", "Jangan memecahkan lepuhan pada kulit.", "Segera cari pertolongan medis jika timbul lepuhan luas, nyeri hebat, demam, menggigil, mual, muntah, atau sakit kepala."] },
  { heading: "10. Tabir Surya & Kacamata Hitam: Cek Mitos Singkat", table: { headers: ["MITOS", "FAKTA"], rows: [["“Tabir surya atau kacamata hitam yang lebih gelap melindungi lebih baik.”", "Tingkat kegelapan lensa bukan penentu perlindungan UV. Periksa SPF spektrum luas pada tabir surya dan klaim UV400/100% UVA-UVB pada kacamata."], ["“Lensa terpolarisasi pasti melindungi dari sinar UV.”", "Polarisasi mengurangi silau, tetapi tidak otomatis memblokir UV."], ["“Hanya orang berkulit terang yang membutuhkan perlindungan matahari.”", "Semua warna kulit dapat mengalami kerusakan akibat UV dan kanker kulit."], ["“Tabir surya saja sudah cukup.”", "Tempat teduh, pakaian, topi, dan kacamata hitam juga sangat penting."]] } },
  { heading: "Referensi", bullets: ["1. Fivenson D, Norton SA. Sun exposure in travelers. CDC Yellow Book 2026. https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/sun-exposure-in-travelers.html", "2. Morriss S, Scardamaglia L. Sun protection: a practical guide for health professionals. Aust Prescr. 2025;48(5):173–178. https://pubmed.ncbi.nlm.nih.gov/41164102/", "3. American Academy of Ophthalmology. How to choose the best sunglasses to avoid sun damage. https://www.aao.org/eye-health/diseases/sunglasses-3", "4. American Academy of Ophthalmology. Recommended types of sunglasses. https://www.aao.org/eye-health/glasses-contacts/sunglasses-recommended-types", "5. American Optometric Association. Ultraviolet (UV) protection. https://www.aoa.org/healthy-eyes/caring-for-your-eyes/uv-protection", "6. American Academy of Dermatology Association. What to look for: ABCDEs of melanoma. https://www.aad.org/public/diseases/skin-cancer/abcdes-melanoma", "7. BMKG. Prediksi indeks UV harian. https://cews.bmkg.go.id/dashboard-custom/prediksi-UVI-indonesia/"] },
])

const safeFoodWaterPostId = localizedPost(safeFoodWaterPost, {
  category: "KESEHATAN PERJALANAN", title: "Around The Table: Panduan Memilih Makanan dan Air Minum yang Aman bagi Pengunjung Kampung Resonegaran, Yogyakarta, Indonesia",
  date: "PANDUAN WISATAWAN RESONEGARAN #5", excerpt: "Jaga kenyamanan Anda sepanjang kunjungan dengan memilih makanan dan minuman yang lebih aman, menjaga kebersihan tangan, dan mengetahui kapan harus mencari bantuan.",
  deck: "PANDUAN WISATAWAN RESONEGARAN #5", intro: "Heritage walking tour, tur museum, aktivitas membatik, dan pengalaman menyaksikan pembuatan jamu adalah cara luar biasa untuk menikmati Resonegaran. Jaga kenyamanan Anda sepanjang kunjungan dengan memilih makanan dan minuman yang lebih aman, menjaga kebersihan tangan, dan mengetahui kapan harus mencari bantuan!",
  imageAlt: "Ilustrasi makanan yang sudah busuk",
}, [
  { heading: "1. Pilih Makanan yang Aman", paragraphs: ["Pilihlah makanan yang dimasak hingga matang sempurna, disajikan panas, dan diolah secara higienis."], table: { headers: ["PILIHAN LEBIH AMAN", "HINDARI/WASPADA"], rows: [["✅ Makanan yang baru dimasak dan disajikan panas atau beruap.", "❌ Makanan matang yang dibiarkan lama pada suhu ruang atau disajikan suam-suam kuku."], ["✅ Daging, ikan, makanan laut, dan telur yang dimasak hingga matang.", "❌ Daging, makanan laut, atau telur mentah maupun kurang matang."], ["✅ Buah utuh yang dapat dicuci dengan air aman dan dikupas sendiri.", "❌ Buah potong, salad, sayuran mentah, dan hiasan mentah yang kebersihannya tidak diketahui."], ["✅ Susu dan produk susu pasteurisasi dalam kemasan tersegel.", "❌ Produk susu yang tidak dipasteurisasi atau disimpan terbuka tanpa pendingin."], ["✅ Camilan kering atau makanan kemasan pabrik dengan segel utuh.", "❌ Makanan terbuka yang terpapar debu, serangga, atau sering disentuh."]] }, subsections: [{ heading: "🥗 Makanan Kaki Lima & Jajanan Lokal", paragraphs: [], bullets: ["Pilih penjual dengan area penyiapan makanan dan peralatan yang bersih.", "Utamakan makanan yang dimasak langsung saat dipesan dan disajikan panas.", "Hindari makanan yang dipajang tanpa penutup, terpapar lalat, atau dibiarkan lama pada suhu ruang."], afterBullets: ["⚠ Jangan biarkan makanan mudah basi lebih dari 2 jam pada suhu ruang, atau lebih dari 1 jam jika suhu udara di atas 32°C."] }] },
  { heading: "2. Minum secara Aman", table: { headers: ["PILIHAN LEBIH AMAN", "HINDARI/WASPADA"], rows: [["✅ Air minum kemasan dengan segel pabrik; periksa segel dan buka sendiri.", "❌ Botol dengan segel rusak atau minuman dari sumber air yang tidak jelas."], ["✅ Minuman panas yang baru dibuat dan disajikan beruap.", "❌ Minuman suam-suam kuku atau bersuhu ruang saat keamanan air tidak diketahui."], ["✅ Minuman tanpa es, kecuali es diketahui dibuat dari air aman.", "❌ Es yang sumbernya tidak diketahui."], ["✅ Air minum dari dispenser atau sumber yang dipastikan aman.", "❌ Air keran yang belum dipastikan aman untuk diminum atau menyikat gigi."]] }, afterTable: ["☕ Air mungkin tampak jernih, tetapi tetap dapat mengandung kuman berbahaya. Pastikan untuk:", "Memeriksa segel botol dan tutupnya sebelum diminum.", "Menghindari jus segar yang dibuat orang lain jika kebersihan buah, air pencuci, atau peralatannya tidak dapat dipastikan.", "Menggunakan air aman untuk mencuci buah yang akan dimakan mentah."] },
  { heading: "3. Jamu & Pengalaman Kebugaran Tradisional", paragraphs: ["Melihat pembuatan jamu (minuman herbal tradisional) dan ramuan herbal lainnya merupakan pengalaman budaya dan edukatif. Anda tidak diwajibkan untuk mencicipi atau mengonsumsi ramuan apa pun!"], table: { headers: ["LAKUKAN", "JANGAN LAKUKAN"], rows: [["✅ Amati prosesnya dan tanyakan apakah sesi mencicipi bersifat opsional.", "❌ Jangan mencicipi tanaman, akar, daun, bubuk, cairan, atau campuran herbal yang tidak teridentifikasi."], ["✅ Jika ingin mencicipi, tanyakan bahan-bahannya dan pastikan disajikan dengan peralatan bersih.", "❌ Hindari produk yang disimpan tanpa penutup atau disiapkan dan disimpan dalam kondisi yang tidak jelas."], ["✅ Beri tahu tuan rumah tentang alergi atau pantangan sebelum mencicipi.", "❌ Jangan menganggap bahan alami selalu aman atau jamu dapat menggantikan obat resep."]] }, subsections: [{ heading: "⚠ Ingat:", paragraphs: ["Pengunjung yang sedang hamil atau menyusui, orang dengan alergi atau penyakit kronis, serta mereka yang rutin mengonsumsi obat sebaiknya tidak mencoba ramuan herbal kecuali telah berkonsultasi dengan tenaga kesehatan. Produk herbal dapat menimbulkan reaksi alergi atau berinteraksi dengan obat."] }] },
  { heading: "4. Jaga Kebersihan Tangan Anda", table: { headers: ["CUCI DENGAN SABUN DAN AIR MENGALIR", "JIKA SABUN DAN AIR TIDAK TERSEDIA"], rows: [["• Sebelum makan atau memegang makanan\n• Setelah BAB/BAK\n• Setelah membuang sampah atau menyentuh hewan\n• Setelah kegiatan membatik\n• Kapan pun tangan terlihat kotor", "• Gunakan hand sanitizer berbasis alkohol dengan kadar minimal 60%.\n• Cuci tangan dengan sabun dan air sesegera mungkin, terutama jika tangan tampak kotor atau berminyak."]] }, subsections: [{ heading: "⚠ Ingat:", paragraphs: ["Hand sanitizer tidak seefektif mencuci tangan untuk menghilangkan kuman tertentu. Mencuci tangan dengan sabun dan air mengalir tetap menjadi pilihan utama."] }] },
  { heading: "5. Jika Anda Merasa Kurang Sehat", paragraphs: ["Penyakit akibat makanan atau air terkontaminasi dapat menimbulkan gejala selama kunjungan atau setelah Anda kembali ke rumah."], table: { headers: ["GEJALA UMUM", "TANDA BAHAYA — SEGERA CARI BANTUAN MEDIS 📞"], rows: [["• Diare\n• Mual atau muntah\n• Kram atau nyeri perut\n• Demam\n• Badan terasa lemas", "• BAB berdarah atau berwarna hitam\n• Demam tinggi\n• Nyeri perut hebat\n• Muntah terus-menerus\n• Tidak dapat mempertahankan asupan cairan\n• Tanda dehidrasi berat\n• Linglung atau bingung secara mendadak\n• Pingsan\n• Kejang"]] }, subsections: [{ heading: "⚠ Apa yang Harus Dilakukan?", paragraphs: [], bullets: ["Hentikan aktivitas dan beri tahu pemandu wisata atau rekan Anda.", "Beristirahatlah di tempat sejuk dan teduh serta minum cairan aman sedikit demi sedikit tetapi sering.", "Jika diare atau muntah, gunakan oralit sesuai petunjuk kemasan. Larutkan dengan jumlah air aman yang tepat seperti tertera pada kemasan.", "Jangan mengonsumsi antibiotik atau obat antidiare tanpa petunjuk medis, terutama jika diare berdarah atau disertai demam tinggi.", "Jangan menunda mencari penanganan medis jika tanda bahaya muncul.", "Anak-anak, lansia, ibu hamil, serta orang dengan sistem kekebalan lemah atau penyakit kronis sebaiknya mencari saran medis lebih awal."] }] },
  { heading: "6. Checklist Ringkas untuk Pengunjung", table: { headers: ["SEBELUM DAN SELAMA KUNJUNGAN, PASTIKAN BAHWA:"], rows: [["☐ Saya memiliki akses ke air minum yang aman."], ["☐ Saya memilih makanan matang sempurna yang disajikan panas."], ["☐ Saya menghindari es atau minuman dari sumber air yang tidak jelas."], ["☐ Saya membersihkan tangan sebelum makan dan setelah menggunakan toilet."], ["☐ Saya hanya mencicipi jamu jika bahan dan proses pembuatannya jelas."], ["☐ Saya tahu cara menghubungi pemandu wisata jika merasa kurang sehat."]] }, afterTable: ["JAGA ASUPAN, JAGA KEBERSIHAN, NIKMATI SETIAP PETUALANGAN DI RESONEGARAN!"] },
  { heading: "Referensi", bullets: ["1. Chard AN, Hill V. Food and Water Precautions for Travelers. CDC Yellow Book 2026. https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/food-and-water-precautions-for-travelers.html", "2. Centers for Disease Control and Prevention. Avoid Contaminated Water During Travel. https://wwwnc.cdc.gov/travel/page/water-disinfection", "3. Centers for Disease Control and Prevention. About Water Treatment Options When Hiking, Camping, or Traveling. https://www.cdc.gov/drinking-water/prevention/water-treatment-hiking-camping-traveling.html", "4. Centers for Disease Control and Prevention. Food and Drink Considerations When Traveling. https://wwwnc.cdc.gov/travel/page/food-water-safety"] },
])

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
      travelHealthKitPostId,
      avoidingBitesPostId,
      vaccinationGuidePostId,
      sunProtectionPostId,
      safeFoodWaterPostId,
    ],
    readStory: "Baca ceritanya",
    signoffEyebrow: "KUNJUNGAN BERBASIS MASYARAKAT",
    signoffTitle: "Datang dengan rasa ingin tahu.",
    signoffText: "Rencanakan lebih dahulu, temui tuan rumah lokal, dan hormati waktu serta nilai setiap tempat.",
    signoffButton: "Rencanakan kunjungan",
  },
})
