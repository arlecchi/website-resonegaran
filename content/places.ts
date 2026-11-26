// Page 02 — the three anchor destinations used by Places, Map, Tours and Profile.
// Keep English and Indonesian fields in sync.
import { defineContent } from "@/lib/i18n"

export const placesContent = defineContent({
  en: {
    kicker: "THREE DESTINATIONS, ONE NEIGHBORHOOD",
    title: "Heritage, culture &\n*wellness.*",
    lead: "Meet Resonegaran through three locally rooted experiences: military history, hands-on batik, and traditional jamu knowledge.",
    filterLabel: "THE THREE ANCHORS OF RESONEGARAN",
    searchPlaceholder: "Find a destination",
    searchLabel: "Search destinations",
    mapButton: "Find it on the map",
    places: {
      "museum-tni-ad": {
        name: "Museum TNI AD Dharma Wiratama",
        type: "Heritage · Military history",
        time: "Tue–Sun · 08:00–15:00",
        desc: "At Jl. Jenderal Sudirman No. 75, explore Army history through objects, photographs, and dioramas. The 1904 heritage building later served as a headquarters for the People’s Security Army. Group visits require advance reservation.",
      },
      "batik-sekar-rinonce": {
        name: "Batik Sekar Rinonce",
        type: "Culture · Batik tulis",
        time: "By prior arrangement",
        desc: "At Gg. Resonegaran GK No. 5/1296, meet local batik makers, learn about the tools and meaning of batik tulis, then try the process from canting and colour to wax removal. The proposal’s sample session is about 3 hours 50 minutes; drying can extend the visit. Confirm availability and group size first.",
      },
      "sardjito-jamu": {
        name: "Prof. Sardjito House & Jamu",
        type: "Heritage · Traditional wellness",
        time: "Permission required",
        desc: "At Jl. Cik Di Tiro No. 16, the heritage home connects the story of Prof. Sardjito—a physician, scientist, UGM’s first rector, and National Hero—with the family’s jamu enterprise, including the traditional preparation Calcusol. This is private property, not a walk-in attraction; any visit or tasting must be confirmed with the host.",
      },
    },
  },
  id: {
    kicker: "TIGA DESTINASI, SATU KAWASAN",
    title: "Warisan, budaya &\n*kesehatan tradisional.*",
    lead: "Kenali Resonegaran melalui tiga pengalaman yang berakar pada potensi lokal: sejarah militer, praktik batik, dan pengetahuan jamu tradisional.",
    filterLabel: "TIGA DESTINASI UTAMA RESONEGARAN",
    searchPlaceholder: "Cari destinasi",
    searchLabel: "Cari destinasi",
    mapButton: "Lihat di peta",
    places: {
      "museum-tni-ad": {
        name: "Museum TNI AD Dharma Wiratama",
        type: "Warisan · Sejarah militer",
        time: "Sel–Min · 08.00–15.00",
        desc: "Di Jl. Jenderal Sudirman No. 75, telusuri sejarah TNI AD melalui benda koleksi, foto, dan diorama. Gedung cagar budaya yang dibangun pada 1904 ini pernah digunakan sebagai markas Tentara Keamanan Rakyat. Rombongan wajib reservasi terlebih dahulu.",
      },
      "batik-sekar-rinonce": {
        name: "Batik Sekar Rinonce",
        type: "Budaya · Batik tulis",
        time: "Dengan janji terlebih dahulu",
        desc: "Di Gg. Resonegaran GK No. 5/1296, bertemu perajin batik dan mengenal alat serta filosofi batik tulis, lalu mencoba proses mencanting dan mewarnai hingga melorod malam. Contoh sesi dalam proposal berlangsung sekitar 3 jam 50 menit; pengeringan dapat menambah durasi. Konfirmasikan ketersediaan dan jumlah peserta terlebih dahulu.",
      },
      "sardjito-jamu": {
        name: "Rumah Prof. Sardjito & Jamu",
        type: "Warisan · Kesehatan tradisional",
        time: "Wajib izin terlebih dahulu",
        desc: "Di Jl. Cik Di Tiro No. 16, rumah bersejarah ini menghubungkan kisah Prof. Sardjito—dokter, ilmuwan, rektor pertama UGM, dan Pahlawan Nasional—dengan usaha jamu keluarga, termasuk produk tradisional Calcusol. Properti ini bukan tempat wisata yang menerima kunjungan langsung; kunjungan maupun cicip jamu harus dikonfirmasi dengan tuan rumah.",
      },
    },
  },
})
