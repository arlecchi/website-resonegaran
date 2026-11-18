// Text shared by EVERY page: top bar, menu and footer.
// `en` = English, `id` = Bahasa Indonesia. Both must have the same fields.
// Formatting: "\n" = line break, "*word*" = coloured italic. (See TRANSLATING.md)

import { defineContent } from "@/lib/i18n"

export const common = defineContent({
  en: {
    // Menu labels. Don't rename the keys on the left (profile, places, …) — only the text.
    nav: {
      profile: "Profile",
      places: "Places to visit",
      map: "Map",
      tours: "Tour plans",
      info: "Information & history",
      blogs: "Blogs",
    },
    planVisit: "Plan your visit",
    homeLabel: "Kastaraya home",
    logoAlt: "Kastaraya — Kampung Wisata Terban Yogyakarta",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    themeTitle: "Toggle theme (D)",
    switchLang: "Ganti ke Bahasa Indonesia", // written in the OTHER language on purpose
    openMenu: "Open menu",
    closeMenu: "Close menu",
    footerTagline: "A slower kind of welcome,\nin the heart of Yogyakarta.",
    copyright: "© RESONEGARAN · MADE WITH CARE",
  },
  id: {
    nav: {
      profile: "Profil",
      places: "Tempat wisata",
      map: "Peta",
      tours: "Rencana tur",
      info: "Informasi & sejarah",
      blogs: "Blog",
    },
    planVisit: "Rencanakan kunjungan",
    homeLabel: "Beranda Kastaraya",
    logoAlt: "Kastaraya — Kampung Wisata Terban Yogyakarta",
    toLight: "Beralih ke mode terang",
    toDark: "Beralih ke mode gelap",
    themeTitle: "Ganti tema (D)",
    switchLang: "Switch to English",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    footerTagline: "Sambutan yang lebih tenang,\ndi jantung Yogyakarta.",
    copyright: "© RESONEGARAN · DIBUAT DENGAN SEPENUH HATI",
  },
})

// The six pages, in menu order. Taken from the `nav` keys above.
export type PageId = keyof typeof common.en.nav
export const PAGES = Object.keys(common.en.nav) as PageId[]
