// Page 03 — Map. (Place names come from content/places.ts.)
// `en` = English, `id` = Bahasa Indonesia. Both must have the same fields.
// Formatting: "\n" = line break, "*word*" = coloured italic. (See TRANSLATING.md)

import { defineContent } from "@/lib/i18n"

export const mapContent = defineContent({
  en: {
    kicker: "GETTING AROUND",
    title: "A little map.\n*A lot to find.*",
    lead: "Resonegaran is best explored at an easy pace. Use this starting point to find your bearings.",
    listTitle: "PLACES ON THE MAP",
    villageName: "Kampung Resonegaran",
    overview: "Overview",
    best: "best", // shown as "Nature · best early morning"
    mapOf: "Map of",
    directions: "Get directions",
    openInMaps: "Open in Google Maps",
    note: "Pin locations are placeholders · to be confirmed",
  },
  id: {
    kicker: "BERKELILING",
    title: "Peta kecil.\n*Banyak yang ditemukan.*",
    lead: "Resonegaran paling nikmat dijelajahi dengan santai. Gunakan peta ini sebagai titik awal.",
    listTitle: "TEMPAT DI PETA",
    villageName: "Kampung Resonegaran",
    overview: "Gambaran umum",
    best: "paling pas", // tampil sebagai "Alam · paling pas pagi hari"
    mapOf: "Peta",
    directions: "Petunjuk arah",
    openInMaps: "Buka di Google Maps",
    note: "Lokasi pin masih sementara · akan dikonfirmasi",
  },
})
