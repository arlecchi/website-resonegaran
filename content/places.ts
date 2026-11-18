// Page 02 — Places to visit. Also holds the NAME/DESCRIPTION of every place,
// which the Map, Tour plans and Profile pages reuse.
// `en` = English, `id` = Bahasa Indonesia. Both must have the same fields.
// Formatting: "\n" = line break, "*word*" = coloured italic. (See TRANSLATING.md)
//
// Adding a new place? Two steps:
//   1. Add its photo + coordinates in lib/places.ts (pick a slug, e.g. "old-mosque").
//   2. Add text for that same slug under `places:` below, in BOTH en and id.

import { defineContent } from "@/lib/i18n"

export const placesContent = defineContent({
  en: {
    kicker: "FIND YOUR WAY",
    title: "Places to\n*slow down.*",
    lead: "A few lovely places to begin. Take your time, follow a path, and see what catches your eye.",
    filterLabel: "THOUGHTFUL STOPS, ALL AROUND THE VILLAGE",
    searchPlaceholder: "Find a place",
    searchLabel: "Search places",
    mapButton: "Find it on the map",

    // One entry per place. The key (e.g. "village-lanes") must match the slug in lib/places.ts.
    places: {
      "village-lanes": {
        name: "The village lanes",
        type: "Village life",
        time: "Anytime",
        desc: "Wander through quiet lanes framed by old trees, friendly homes, and the everyday rhythm of Resonegaran.",
      },
      "rice-fields": {
        name: "Green rice fields",
        type: "Nature",
        time: "Early morning",
        desc: "Follow the footpaths between emerald paddies and watch the light change across the fields.",
      },
      "gathering-space": {
        name: "Local gathering space",
        type: "Culture",
        time: "Late afternoon",
        desc: "Meet the community and discover the small traditions that make a visit feel personal.",
      },
    },
  },
  id: {
    kicker: "TEMUKAN JALANMU",
    title: "Tempat untuk\n*melambat.*",
    lead: "Beberapa tempat menyenangkan untuk memulai. Luangkan waktu, ikuti jalan setapak, dan lihat apa yang menarik perhatianmu.",
    filterLabel: "PERSINGGAHAN PILIHAN DI SEKELILING KAMPUNG",
    searchPlaceholder: "Cari tempat",
    searchLabel: "Cari tempat",
    mapButton: "Lihat di peta",

    places: {
      "village-lanes": {
        name: "Gang-gang kampung",
        type: "Kehidupan kampung",
        time: "Kapan saja",
        desc: "Susuri gang-gang tenang yang dinaungi pohon tua, rumah-rumah yang ramah, dan irama keseharian Resonegaran.",
      },
      "rice-fields": {
        name: "Hamparan sawah hijau",
        type: "Alam",
        time: "Pagi hari",
        desc: "Ikuti pematang di antara sawah hijau zamrud dan saksikan cahaya yang berubah di atas hamparannya.",
      },
      "gathering-space": {
        name: "Ruang kumpul warga",
        type: "Budaya",
        time: "Sore hari",
        desc: "Bertemu warga dan temukan tradisi-tradisi kecil yang membuat kunjungan terasa lebih personal.",
      },
    },
  },
})
