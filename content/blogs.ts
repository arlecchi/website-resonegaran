// Page 06 — Blogs.
// `en` = English, `id` = Bahasa Indonesia. Both must have the same fields.
// Formatting: "\n" = line break, "*word*" = coloured italic. (See TRANSLATING.md)

import { defineContent } from "@/lib/i18n"

export const blogs = defineContent({
  en: {
    kicker: "POSTCARDS & PEOPLE",
    title: "Notes from\n*Resonegaran.*",
    lead: "Small stories, local voices, and little things worth remembering from a slower kind of trip.",

    // Keep the same posts, in the same order, in en and id.
    // `image` is an Unsplash photo id — use the SAME id in both languages.
    posts: [
      {
        category: "FIELD NOTES",
        title: "The quiet joy of taking the long way",
        date: "A slow travel journal",
        image: "photo-1470770841072-f978cf4d019e",
        excerpt: "Some places ask you to do more. Here, we’re learning the pleasure of noticing more — one unhurried moment at a time.",
      },
      {
        category: "LOCAL LIFE",
        title: "A morning that begins in the fields",
        date: "Stories from Resonegaran",
        image: "photo-1500382017468-9049fed747ef",
        excerpt: "Some places ask you to do more. Here, we’re learning the pleasure of noticing more — one unhurried moment at a time.",
      },
    ],
    readStory: "Read the story",

    signoffEyebrow: "A NOTE FROM THE VILLAGE",
    signoffTitle: "Have a story to share?",
    signoffText: "We’d love to hear what made your visit special.",
    signoffButton: "Come say hello",
  },
  id: {
    kicker: "KARTU POS & CERITA WARGA",
    title: "Catatan dari\n*Resonegaran.*",
    lead: "Cerita kecil, suara warga, dan hal-hal sederhana yang layak dikenang dari perjalanan yang lebih santai.",

    posts: [
      {
        category: "CATATAN LAPANGAN",
        title: "Nikmatnya mengambil jalan yang lebih panjang",
        date: "Jurnal perjalanan santai",
        image: "photo-1470770841072-f978cf4d019e",
        excerpt: "Ada tempat yang membuatmu ingin melakukan banyak hal. Di sini, kami belajar menikmati hal-hal kecil — satu momen santai demi satu momen.",
      },
      {
        category: "KEHIDUPAN WARGA",
        title: "Pagi yang dimulai di sawah",
        date: "Cerita dari Resonegaran",
        image: "photo-1500382017468-9049fed747ef",
        excerpt: "Ada tempat yang membuatmu ingin melakukan banyak hal. Di sini, kami belajar menikmati hal-hal kecil — satu momen santai demi satu momen.",
      },
    ],
    readStory: "Baca ceritanya",

    signoffEyebrow: "PESAN DARI KAMPUNG",
    signoffTitle: "Punya cerita untuk dibagikan?",
    signoffText: "Kami ingin mendengar apa yang membuat kunjunganmu berkesan.",
    signoffButton: "Sapa kami",
  },
})
