// Page 06 — Blogs / field notes. English and Indonesian versions stay aligned.
import { defineContent } from "@/lib/i18n"

export const blogs = defineContent({
  en: {
    kicker: "FIELD NOTES FROM TERBAN",
    title: "Stories through\n*three local doors.*",
    lead: "A closer look at the history, hand skills, and traditional knowledge behind the proposed Resonegaran visitor route.",
    posts: [
      {
        category: "HERITAGE",
        title: "From colonial residence to Army museum",
        date: "A place on the heritage walk",
        image: "photo-1518005020951-eccb494ad742",
        excerpt: "The 1904 building now used by Museum TNI AD Dharma Wiratama later served as a TKR headquarters. Today, its collections interpret the history and service of the Indonesian Army.",
      },
      {
        category: "CULTURE & WELLNESS",
        title: "Batik, jamu, and knowledge passed along",
        date: "Meet the proposed route’s local partners",
        image: "photo-1528459801416-a9e53bbf4e17",
        excerpt: "At Sekar Rinonce, visitors can learn the steps of batik tulis with artisans. The Sardjito house and jamu enterprise add another heritage story, with any visit arranged directly with its host.",
      },
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
    posts: [
      {
        category: "HERITAGE",
        title: "Dari rumah kolonial menjadi museum TNI AD",
        date: "Salah satu titik heritage walk",
        image: "photo-1518005020951-eccb494ad742",
        excerpt: "Gedung tahun 1904 yang kini digunakan Museum TNI AD Dharma Wiratama pernah menjadi markas TKR. Kini, koleksinya mengisahkan sejarah dan pengabdian TNI Angkatan Darat.",
      },
      {
        category: "BUDAYA & KESEHATAN",
        title: "Batik, jamu, dan pengetahuan yang diwariskan",
        date: "Mengenal mitra dalam rancangan rute",
        image: "photo-1528459801416-a9e53bbf4e17",
        excerpt: "Di Sekar Rinonce, pengunjung dapat mengenal tahapan batik tulis bersama perajin. Rumah Sardjito dan usaha jamu menambah kisah heritage lainnya; kunjungan perlu diatur langsung dengan tuan rumah.",
      },
    ],
    readStory: "Baca ceritanya",
    signoffEyebrow: "KUNJUNGAN BERBASIS MASYARAKAT",
    signoffTitle: "Datang dengan rasa ingin tahu.",
    signoffText: "Rencanakan lebih dahulu, temui tuan rumah lokal, dan hormati waktu serta nilai setiap tempat.",
    signoffButton: "Rencanakan kunjungan",
  },
})
