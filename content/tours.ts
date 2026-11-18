// Page 04 — Tour plans.
// `en` = English, `id` = Bahasa Indonesia. Both must have the same fields.
// Formatting: "\n" = line break, "*word*" = coloured italic. (See TRANSLATING.md)

import { defineContent } from "@/lib/i18n"

export const tours = defineContent({
  en: {
    kicker: "MAKE A DAY OF IT",
    title: "Good days,\n*well spent.*",
    lead: "Simple ideas for exploring Resonegaran. Mix and match, or let the day surprise you.",

    // Keep the same number of tours, in the same order, in en and id.
    list: [
      { title: "A gentle village morning", time: "2 hours", text: "Start with a slow walk through the lanes, stop by the fields, and share a local breakfast." },
      { title: "Resonegaran by bike", time: "Half day", text: "Take the scenic route past farms and neighborhood landmarks, with plenty of time to pause." },
      { title: "Meet the makers", time: "Half day", text: "Spend an unhurried afternoon meeting local residents and learning about daily village life." },
    ],
    explore: "Explore", // screen-reader label: "Explore A gentle village morning"

    noteBold: "Make it your own.",
    noteText: "These are just starting points. Ask a local guide about seasonal activities and community visits.",
    noteButton: "Good to know",
  },
  id: {
    kicker: "HABISKAN HARIMU DI SINI",
    title: "Hari yang baik,\n*waktu yang berarti.*",
    lead: "Ide sederhana untuk menjelajahi Resonegaran. Padukan sesukamu, atau biarkan harimu penuh kejutan.",

    list: [
      { title: "Pagi yang tenang di kampung", time: "2 jam", text: "Mulailah dengan jalan santai menyusuri gang, mampir ke sawah, lalu sarapan khas bersama warga." },
      { title: "Bersepeda keliling Resonegaran", time: "Setengah hari", text: "Ambil rute yang indah melewati kebun dan tempat-tempat khas kampung, dengan banyak waktu untuk berhenti sejenak." },
      { title: "Bertemu para perajin", time: "Setengah hari", text: "Habiskan sore yang santai bersama warga dan belajar tentang kehidupan sehari-hari di kampung." },
    ],
    explore: "Jelajahi",

    noteBold: "Sesuaikan dengan keinginanmu.",
    noteText: "Ini hanya titik awal. Tanyakan kepada pemandu lokal tentang kegiatan musiman dan kunjungan ke komunitas.",
    noteButton: "Perlu diketahui",
  },
})
