// Page 01 — Profile (the home page).
// `en` = English, `id` = Bahasa Indonesia. Both must have the same fields.
// Formatting: "\n" = line break, "*word*" = coloured italic. (See TRANSLATING.md)

import { defineContent } from "@/lib/i18n"

export const profile = defineContent({
  en: {
    // Big photo at the top
    heroEyebrow: "A SMALL PLACE WITH A BIG HEART",
    heroTitle: "Come for the\n*quiet.* Stay for\nthe stories.",
    heroText: "Find your slower side in Resonegaran — a welcoming village tucked into the green heart of Yogyakarta.",
    heroExplore: "Explore the village",
    heroAbout: "A little about us",
    heroCaption: "RESONEGARAN, YOGYAKARTA",

    // "Not a landmark" section
    introKicker: "A PLACE TO PAUSE",
    introLabel: "01 — PROFILE",
    introTitle: "Not a landmark.\n*A feeling.*",
    introText: "Resonegaran is the kind of place you discover by slowing down. A village of open skies, familiar faces, and paths that invite you to wander a little further.",
    introMuted: "Come curious. Leave feeling like you know the way back.",
    introLink: "Get to know Resonegaran",

    // Photo + text band
    featureEyebrow: "A DIFFERENT KIND OF GETAWAY",
    featureTitle: "Let the day\nunfold *naturally.*",
    featureText: "No packed itinerary required. Just open roads, a warm welcome, and room to see where the day takes you.",
    featureButton: "Find your kind of day",

    // Places preview (the place names come from content/places.ts)
    previewKicker: "A FEW PLACES TO BEGIN",
    previewLabel: "02 — PLACES",
    previewTitle: "Little moments.\n*Lovely places.*",
    previewSeeAll: "See all places",

    // Dark strip before the footer
    journalEyebrow: "A LITTLE SOMETHING TO REMEMBER",
    journalTitle: "Leave room for\n*the unexpected.*",
    journalButton: "Read our field notes",
  },
  id: {
    heroEyebrow: "TEMPAT KECIL DENGAN HATI YANG BESAR",
    heroTitle: "Datang untuk\n*ketenangan.* Tinggal\nkarena ceritanya.",
    heroText: "Temukan sisi santaimu di Resonegaran — kampung ramah yang terselip di jantung hijau Yogyakarta.",
    heroExplore: "Jelajahi kampung",
    heroAbout: "Sedikit tentang kami",
    heroCaption: "RESONEGARAN, YOGYAKARTA",

    introKicker: "TEMPAT UNTUK REHAT",
    introLabel: "01 — PROFIL",
    introTitle: "Bukan sekadar tempat.\n*Sebuah rasa.*",
    introText: "Resonegaran adalah tempat yang kamu temukan saat melambat. Kampung dengan langit terbuka, wajah-wajah yang akrab, dan jalan-jalan kecil yang mengajakmu melangkah sedikit lebih jauh.",
    introMuted: "Datanglah dengan rasa ingin tahu. Pulanglah dengan merasa tahu jalan kembali.",
    introLink: "Kenali Resonegaran",

    featureEyebrow: "LIBURAN DENGAN CARA BERBEDA",
    featureTitle: "Biarkan hari\nmengalir *apa adanya.*",
    featureText: "Tak perlu jadwal yang padat. Cukup jalan terbuka, sambutan hangat, dan ruang untuk melihat ke mana hari membawamu.",
    featureButton: "Temukan harimu",

    previewKicker: "BEBERAPA TEMPAT UNTUK MEMULAI",
    previewLabel: "02 — TEMPAT",
    previewTitle: "Momen kecil.\n*Tempat yang indah.*",
    previewSeeAll: "Lihat semua tempat",

    journalEyebrow: "SESUATU UNTUK DIKENANG",
    journalTitle: "Sisakan ruang untuk\n*hal tak terduga.*",
    journalButton: "Baca catatan lapangan kami",
  },
})
