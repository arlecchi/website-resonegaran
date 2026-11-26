// Page 06 — Blog index and full article copy, in English and Bahasa Indonesia.
import { defineContent } from "@/lib/content"

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
    ],
    readStory: "Baca ceritanya",
    signoffEyebrow: "KUNJUNGAN BERBASIS MASYARAKAT",
    signoffTitle: "Datang dengan rasa ingin tahu.",
    signoffText: "Rencanakan lebih dahulu, temui tuan rumah lokal, dan hormati waktu serta nilai setiap tempat.",
    signoffButton: "Rencanakan kunjungan",
  },
})
