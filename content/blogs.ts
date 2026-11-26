// Page 06 — Blog index and full article copy, in English and Bahasa Indonesia.
import { defineContent } from "@/lib/content"

const travelHealthKitPost = {
  slug: "personal-travel-health-kit",
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
      bullets: ["Other prescription-related supplies: Needles and syringes for regularly self-administered injectable medicines (e.g., insulin; carry a copy of the prescription), and spare prescription glasses or contact lenses."],
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
    ],
    readStory: "Baca ceritanya",
    signoffEyebrow: "KUNJUNGAN BERBASIS MASYARAKAT",
    signoffTitle: "Datang dengan rasa ingin tahu.",
    signoffText: "Rencanakan lebih dahulu, temui tuan rumah lokal, dan hormati waktu serta nilai setiap tempat.",
    signoffButton: "Rencanakan kunjungan",
  },
})
