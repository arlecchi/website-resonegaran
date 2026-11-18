// Page 05 — Information & history.
// `en` = English, `id` = Bahasa Indonesia. Both must have the same fields.
// Formatting: "\n" = line break, "*word*" = coloured italic. (See TRANSLATING.md)
// Anything marked TODO is a placeholder waiting for real info from fieldwork / interviews.
// The layout lives in components/info-history.tsx.

import { defineContent } from "@/lib/i18n"

export const info = defineContent({
  en: {
    kicker: "THE PLACE, THE PEOPLE",
    title: "A story still\n*being told.*",
    lead: "Resonegaran's story lives in its people, its shared spaces, and the landscape that shapes daily life.",

    // 1. Intro — photo + a few paragraphs
    intro: {
      eyebrow: "ROOTED IN COMMUNITY",
      title: "Every place has\na *before and after.*",
      paragraphs: [
        "Resonegaran is part of the wider Yogyakarta region, where village life and a deep sense of community are woven into the everyday. Here, the best way to understand a place is often the simplest: walk, listen, and meet the people who call it home.",
        "Stories and traditions are shared person to person. We’re still gathering more of Resonegaran’s local history — and we invite you to learn with care and curiosity.",
      ],
      quote: "The heart of a village is found in the people who welcome you.",
      link: "Read stories from the village",
    },

    // 2. Timeline. Keep each entry to 1–2 sentences.
    // `year` can be a year, a decade ("1950s") or an era ("Long ago").
    timelineEyebrow: "A SHORT HISTORY",
    timelineTitle: "How Resonegaran\n*came to be.*",
    timeline: [
      { year: "TODO", title: "Where the name comes from", text: "Placeholder — the origin of the name “Resonegaran”, as told by village elders." },
      { year: "TODO", title: "The first families settle", text: "Placeholder — how and when the kampung first formed." },
      { year: "TODO", title: "A turning point", text: "Placeholder — an important event, change, or landmark in the village’s story." },
      { year: "Today", title: "A village that welcomes visitors", text: "Placeholder — what Resonegaran is known for now, and the community behind it." },
    ],

    // 3. "Good to know" cards. Don't rename the keys (gettingHere, …) — they pick the icon.
    practicalEyebrow: "BEFORE YOU COME",
    practicalTitle: "Good *to know.*",
    practical: {
      gettingHere: { title: "Getting here", text: "TODO — route and travel time from Tugu Station / Malioboro, and which transport works best." },
      bestTime: { title: "Best time to visit", text: "TODO — best season and time of day, plus any regular events worth timing a visit around." },
      hours: { title: "Visiting hours", text: "TODO — when visitors are welcome, and whether tours need to be booked ahead." },
      parking: { title: "Parking & facilities", text: "TODO — where to park, toilets, places to eat, and accessibility notes." },
    },

    // 4. Find us (the actual address/phone/email are in `contact` at the bottom of this file)
    findEyebrow: "LOCATION & CONTACT",
    findTitle: "Find *us.*",
    mapTitle: "Map of Resonegaran",
    addressLabel: "Address",
    emailLabel: "Email",
    toBeAdded: "to be added",
    socialsEmpty: "Social media links to be added",
    directions: "Get directions",
    seeMap: "See all places on the map",

    // 5. Etiquette
    etiquetteEyebrow: "A GOOD GUEST",
    etiquetteTitle: "Travel gently.",
    etiquetteText: "Ask before taking photos, respect private spaces, and support locally owned businesses when you can. A little kindness goes a long way.",
  },
  id: {
    kicker: "TEMPAT DAN WARGANYA",
    title: "Kisah yang masih\n*terus ditulis.*",
    lead: "Kisah Resonegaran hidup dalam warganya, ruang-ruang bersamanya, dan alam yang membentuk keseharian.",

    intro: {
      eyebrow: "BERAKAR PADA KEBERSAMAAN",
      title: "Setiap tempat punya\n*masa lalu dan masa kini.*",
      paragraphs: [
        "Resonegaran adalah bagian dari wilayah Yogyakarta, tempat kehidupan kampung dan rasa kebersamaan yang kuat menyatu dalam keseharian. Di sini, cara terbaik untuk mengenal sebuah tempat sering kali yang paling sederhana: berjalan, mendengarkan, dan bertemu dengan warganya.",
        "Cerita dan tradisi diwariskan dari orang ke orang. Kami masih mengumpulkan lebih banyak sejarah Resonegaran — dan kami mengajakmu untuk mengenalnya dengan penuh hormat dan rasa ingin tahu.",
      ],
      quote: "Jantung sebuah kampung ada pada warga yang menyambutmu.",
      link: "Baca cerita dari kampung",
    },

    timelineEyebrow: "SEJARAH SINGKAT",
    timelineTitle: "Bagaimana Resonegaran\n*bermula.*",
    timeline: [
      { year: "TODO", title: "Asal-usul nama", text: "Sementara — asal-usul nama “Resonegaran”, seperti yang diceritakan para sesepuh kampung." },
      { year: "TODO", title: "Keluarga pertama menetap", text: "Sementara — bagaimana dan kapan kampung ini pertama kali terbentuk." },
      { year: "TODO", title: "Titik balik", text: "Sementara — peristiwa, perubahan, atau tengara penting dalam kisah kampung." },
      { year: "Kini", title: "Kampung yang menyambut wisatawan", text: "Sementara — apa yang dikenal dari Resonegaran saat ini, dan komunitas di baliknya." },
    ],

    practicalEyebrow: "SEBELUM BERKUNJUNG",
    practicalTitle: "Perlu *diketahui.*",
    practical: {
      gettingHere: { title: "Menuju ke sini", text: "TODO — rute dan waktu tempuh dari Stasiun Tugu / Malioboro, serta transportasi yang paling cocok." },
      bestTime: { title: "Waktu terbaik berkunjung", text: "TODO — musim dan waktu terbaik, serta acara rutin yang layak dijadikan waktu berkunjung." },
      hours: { title: "Jam kunjungan", text: "TODO — kapan wisatawan dipersilakan datang, dan apakah tur perlu dipesan terlebih dahulu." },
      parking: { title: "Parkir & fasilitas", text: "TODO — tempat parkir, toilet, tempat makan, dan catatan aksesibilitas." },
    },

    findEyebrow: "LOKASI & KONTAK",
    findTitle: "Temukan *kami.*",
    mapTitle: "Peta Resonegaran",
    addressLabel: "Alamat",
    emailLabel: "Email",
    toBeAdded: "akan ditambahkan",
    socialsEmpty: "Tautan media sosial akan ditambahkan",
    directions: "Petunjuk arah",
    seeMap: "Lihat semua tempat di peta",

    etiquetteEyebrow: "TAMU YANG BAIK",
    etiquetteTitle: "Berwisata dengan santun.",
    etiquetteText: "Minta izin sebelum memotret, hormati ruang pribadi warga, dan dukung usaha milik warga setempat bila memungkinkan. Sedikit kebaikan sangat berarti.",
  },
})

// Contact details — the same in both languages, so they're NOT inside en/id.
// Leave a value as "" and the page shows "to be added".
export const contact = {
  address: "", // TODO e.g. "Jl. ..., Kelurahan ..., Kecamatan ..., Kota Yogyakarta"
  whatsapp: [
    // number in international format without "+" or spaces, e.g. "6281234567890"
    { name: "Village contact", number: "" }, // TODO
  ],
  email: "", // TODO
  socials: [
    { name: "Instagram", url: "" }, // TODO e.g. "https://instagram.com/..."
    { name: "TikTok", url: "" },
    { name: "YouTube", url: "" },
  ],
}
