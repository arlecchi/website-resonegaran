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
    ],
    readStory: "Baca ceritanya",
    signoffEyebrow: "KUNJUNGAN BERBASIS MASYARAKAT",
    signoffTitle: "Datang dengan rasa ingin tahu.",
    signoffText: "Rencanakan lebih dahulu, temui tuan rumah lokal, dan hormati waktu serta nilai setiap tempat.",
    signoffButton: "Rencanakan kunjungan",
  },
})
