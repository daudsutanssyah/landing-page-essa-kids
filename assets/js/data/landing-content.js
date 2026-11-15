/**
 * ESSA Kids Therapy - Landing Page Content Repository
 * ----------------------------------------------------
 * Single Source of Truth (SSOT) untuk seluruh teks, parameter,
 * dan struktur data interaktif di landing page.
 *
 * Menggunakan arsitektur ES6 Module dengan Deep Freeze agar
 * data bersifat immutable dan aman diakses oleh Alpine.js Store.
 */

// Utility pembantu untuk membekukan objek bersarang (Deep Freeze)
function deepFreeze(object) {
  const propNames = Reflect.ownKeys(object);
  for (const name of propNames) {
    const value = object[name];
    if ((value && typeof value === 'object') || typeof value === 'function') {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

export const LANDING_CONTENT = deepFreeze({
  // =========================================================================
  // 1. Informasi Umum Klinik (Clinic Info)
  // =========================================================================
  clinicInfo: {
    name: 'ESSA Kids Therapy',
    shortName: 'ESSA Kids',
    tagline: 'Mendampingi Langkah Kecil Menuju Tumbuh Kembang Mandiri & Penuh Percaya Diri',
    subTagline: 'Klinik Tumbuh Kembang & Pusat Terapi Terpadu Anak Berbasis Bermain (Play-Based Therapy)',
    description: 'Pusat rehabilitasi medik dan stimulasi tumbuh kembang anak dengan pendekatan multidisiplin yang hangat, empatik, dan terukur. Kami membantu anak-anak usia 0–12 tahun menemukan potensi terbaik mereka dalam suasana yang menyenangkan dan aman.',
    whatsappNumber: '6281234567890',
    whatsappFormatted: '0812-3456-7890',
    email: 'halo@essakids.id',
    operatingHours: 'Senin - Sabtu, 08:00 - 16:00 WIB',
    operatingDaysNotice: 'Hari Minggu & Hari Libur Nasional tutup',
    address: {
      street: 'Jl. Wijaya Kusuma No. 45, Kebayoran Baru',
      city: 'Jakarta Selatan',
      province: 'DKI Jakarta',
      postalCode: '12160',
      full: 'Jl. Wijaya Kusuma No. 45, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160',
      landmark: '500 meter dari Stasiun MRT Blok A, area parkir luas & ramah stroller'
    },
    googleMapsUrl: 'https://maps.google.com/?q=ESSA+Kids+Therapy+Jakarta',
    socialMedia: {
      instagram: '@essakidstherapy',
      youtube: 'ESSA Kids Therapy Official',
      tiktok: '@essakids'
    },
    defaultWaMessage: 'Halo Tim ESSA Kids Therapy, saya ingin berkonsultasi mengenai jadwal asesmen tumbuh kembang untuk anak saya.'
  },

  // =========================================================================
  // 2. Metrik Kepercayaan Hero (Hero Trust Metrics)
  // =========================================================================
  heroMetrics: [
    {
      id: 'metric-certified',
      value: '100%',
      label: 'Terapis Tersertifikasi',
      description: 'Seluruh tenaga ahli memiliki STR & SIP aktif serta tersertifikasi klinis resmi.',
      icon: 'badge-check',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 'metric-rooms',
      value: '4 Ruang',
      label: 'Ruang Terapi Tematik & Aman',
      description: 'Fasilitas terisolasi, higienis, berperedam suara, dan dilengkapi busa pengaman medis.',
      icon: 'shield-check',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 'metric-method',
      value: 'Play-Based',
      label: 'Metode Bermain Terarah',
      description: 'Stimulasi berbasis bermain yang disukai anak dengan target capaian IEP yang terukur.',
      icon: 'award',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'metric-report',
      value: 'Rutin & Real-Time',
      label: 'Laporan & Home Program',
      description: 'Evaluasi mingguan transparan dan panduan stimulasi lanjutan di rumah bagi orang tua.',
      icon: 'file-text',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200'
    }
  ],

  // =========================================================================
  // 3. Pilar Keunggulan & Keamanan Klinik (Section 3: Value Proposition)
  // =========================================================================
  whyChooseUs: [
    {
      id: 'why-iep',
      title: 'Kurikulum Individual (IEP)',
      tagline: 'Terpersonalisasi & Terarah',
      icon: 'clipboard-check',
      badgeText: 'Individualized Plan',
      description: 'Setiap anak memiliki keunikan dan kecepatan belajar tersendiri. Kami tidak menerapkan metode satu formula untuk semua, melainkan menyusun target program individual (IEP) yang disesuaikan secara presisi dengan kebutuhan tumbuh kembang si kecil.',
      keyPoints: [
        'Asesmen awal komprehensif sebelum sesi terapi dimulai',
        'Target capaian milestone realistis dan terukur setiap bulan',
        'Penyelarasan target stimulasi dengan guru di sekolah anak'
      ]
    },
    {
      id: 'why-facility',
      title: 'Ruang Terapi Tematik & Steril',
      tagline: 'Aman, Higienis & Ramah Anak',
      icon: 'shield-check',
      badgeText: '4 Ruang Khusus',
      description: 'Fasilitas klinik dirancang khusus memenuhi standar keamanan pediatrik: Gym Fisioterapi A beralas matras busa densitas tinggi, Ruang Sensori Integrasi berayunan multi-arah, Ruang Wicara B kedap suara, dan Ruang Okupasi C berorientasi kemandirian harian.',
      keyPoints: [
        'Peralatan terapi teruji medis & disanitasi menyeluruh antar sesi',
        'Pencahayaan ramah sensori (tidak menyilaukan mata anak)',
        'Ruang tunggu orang tua yang nyaman dilengkapi Wi-Fi & jendela observasi'
      ]
    },
    {
      id: 'why-method',
      title: 'Metode Play-Based Terukur',
      tagline: 'Gembira Tanpa Tekanan',
      icon: 'award',
      badgeText: 'Berbasis Bermain',
      description: 'Anak belajar dan berlatih paling efektif saat mereka merasa bahagia. Terapi dikemas dalam petualangan bermain interaktif yang menyenangkan sehingga anak tidak merasa tertekan, namun target klinis tetap tercapai secara konsisten.',
      keyPoints: [
        'Aktivitas sensori-motorik berbasis minat alami anak',
        'Mengurangi stres adaptasi dan kecemasan bertemu tenaga medis',
        'Membangun rasa percaya diri dan inisiatif kemandirian spontan'
      ]
    },
    {
      id: 'why-scheduling',
      title: 'Transparansi Evaluasi & Kuota Terjadwal',
      tagline: 'Tepat Waktu & Kolaboratif',
      icon: 'calendar-check',
      badgeText: 'Tanpa Antre Lama',
      description: 'Orang tua mendapatkan resume evaluasi perkembangan berkala dan panduan Home Program terstruktur. Sistem reservasi terintegrasi memastikan sesi dimulai tepat waktu tanpa antrean panjang yang membuat anak lelah sebelum terapi.',
      keyPoints: [
        'Konsultasi 10–15 menit bersama terapis di akhir tiap sesi',
        'Slot jadwal pasti (fixed slot mingguan) untuk konsistensi terapi',
        'Fleksibilitas reschedule ramah orang tua dengan konfirmasi mudah'
      ]
    }
  ],

  // =========================================================================
  // 4. Kategori Program & Kelompok Usia (Section 4: Interactive Age Groups)
  // =========================================================================
  ageGroups: [
    {
      id: 'age-1-2',
      name: 'Usia 1 – 2 Tahun',
      subtitle: 'Golden Early Stage',
      badge: 'Fase Emas Pertama',
      accentColor: 'emerald',
      summary: 'Fokus pada stimulasi sensorik dasar, pematangan tonggak berjalan, inisiasi kontak mata, dan babbling (fase pra-wicara).',
      serviceHighlights: [
        {
          serviceId: 'PHYSIO',
          serviceName: 'Fisioterapi Anak',
          focusTitle: 'Milestone Motorik Awal',
          focusDesc: 'Transisi duduk mandiri, merangkak seimbang, hingga langkah berjalan pertama yang stabil dan tidak goyah.'
        },
        {
          serviceId: 'SENSORY',
          serviceName: 'Sensori Integrasi',
          focusTitle: 'Eksplorasi Sensori & Regulasi',
          focusDesc: 'Pengenalan stimulasi vestibular lembut melalui ayunan terapeutik dan adaptasi berbagai tekstur sentuhan.'
        },
        {
          serviceId: 'SPEECH',
          serviceName: 'Terapi Wicara',
          focusTitle: 'Komunikasi Pra-Bicara',
          focusDesc: 'Respons menoleh saat dipanggil, kontak mata bersama (joint attention), serta ocehan kata bermakna (mama/papa).'
        },
        {
          serviceId: 'OCCUPATIONAL',
          serviceName: 'Terapi Okupasi',
          focusTitle: 'Motorik Halus Awal',
          focusDesc: 'Melatih genggaman palmar, koordinasi meraih benda kecil, serta latihan makan mandiri (finger food).'
        }
      ]
    },
    {
      id: 'age-3-4',
      name: 'Usia 3 – 4 Tahun',
      subtitle: 'Preschool Readiness',
      badge: 'Kesiapan Prasekolah',
      accentColor: 'amber',
      summary: 'Fokus pada pengayaan kosa kata aktif, pembentukan kalimat 2–3 kata, regulasi emosi/manajemen tantrum, dan kemandirian rutinitas harian.',
      serviceHighlights: [
        {
          serviceId: 'SPEECH',
          serviceName: 'Terapi Wicara',
          focusTitle: 'Ekspresi Verbal & Kosakata',
          focusDesc: 'Merangkai kalimat tanya/keinginan, kejelasan artikulasi huruf vokal/konsonan dasar, dan komunikasi aktif 2 arah.'
        },
        {
          serviceId: 'SENSORY',
          serviceName: 'Sensori Integrasi',
          focusTitle: 'Regulasi Emosi & Fokus',
          focusDesc: 'Peningkatan rentang atensi bermain terarah, modulasi suara bising/ruang ramai, dan pengurangan tantrum transisi.'
        },
        {
          serviceId: 'OCCUPATIONAL',
          serviceName: 'Terapi Okupasi',
          focusTitle: 'Kemandirian Harian (ADL)',
          focusDesc: 'Melatih melepas & memakai pakaian, memegang sendok tanpa tumpah, mencoret lingkaran, dan meniru balok susun.'
        },
        {
          serviceId: 'PHYSIO',
          serviceName: 'Fisioterapi Anak',
          focusTitle: 'Keseimbangan & Ketangkasan',
          focusDesc: 'Melompat dengan dua kaki, menaiki anak tangga bergantian, serta penguatan stabilitas postur tubuh inti (core muscles).'
        }
      ]
    },
    {
      id: 'age-5-7',
      name: 'Usia 5 – 7 Tahun',
      subtitle: 'School Readiness',
      badge: 'Kesiapan Masuk SD',
      accentColor: 'sky',
      summary: 'Fokus pada pematangan motorik halus memegang pensil (tripod grasp), ketahanan konsentrasi meja kelas, dan artikulasi bicara jernih.',
      serviceHighlights: [
        {
          serviceId: 'OCCUPATIONAL',
          serviceName: 'Terapi Okupasi',
          focusTitle: 'Kesiapan Pra-Akademik',
          focusDesc: 'Penguatan jemari untuk menulis tanpa cepat lelah (tripod grasp), keterampilan menggunting pola rapi, dan kemandirian toilet.'
        },
        {
          serviceId: 'SPEECH',
          serviceName: 'Terapi Wicara',
          focusTitle: 'Artikulasi & Bahasa Kompleks',
          focusDesc: 'Kejelasan lafal huruf konsonan sulit (R, S, L), kemampuan bercerita runut, dan pemahaman instruksi majemuk bertingkat.'
        },
        {
          serviceId: 'SENSORY',
          serviceName: 'Sensori Integrasi',
          focusTitle: 'Ketahanan Konsentrasi Kelas',
          focusDesc: 'Toleransi lingkungan kelas sekolah, kemampuan menyaring distraksi auditori, dan kestabilan emosi saat berinteraksi sosial.'
        },
        {
          serviceId: 'PHYSIO',
          serviceName: 'Fisioterapi Anak',
          focusTitle: 'Koordinasi Gerak Kompleks',
          focusDesc: 'Kelincahan berolahraga, koordinasi bilateral gerak tubuh, serta koreksi pola jalan khusus (seperti kebiasaan jinjit/in-toeing).'
        }
      ]
    }
  ],

  // =========================================================================
  // 5. Cek Tanda Awal & Preview Interaktif (Section 5: Screening & Simulation)
  // =========================================================================
  redFlags: [
    {
      id: 'speech',
      categoryName: 'Bicara & Komunikasi',
      ageRange: 'Usia 1 – 7 Tahun',
      icon: 'message-circle',
      recommendedService: 'SPEECH',
      badgeClass: 'badge-warning',
      colorTheme: 'amber',
      shortIntro: 'Apakah Ayah & Bunda mengamati tanda-tanda berikut pada komunikasi si kecil?',
      signs: [
        'Belum menoleh atau merespons saat namanya dipanggil di usia 12 bulan ke atas.',
        'Kosa kata bermakna masih kurang dari 10 kata pada usia 18 hingga 24 bulan.',
        'Kesulitan menggabungkan 2 kata sederhana (misal: "mau minum") pada usia 2 tahun.',
        'Sering menangis atau tantrum karena frustrasi tidak mampu mengungkapkan keinginannya.'
      ],
      interactivePreview: {
        clinicActivity: {
          title: 'Stimulasi Percakapan Interaktif via Flashcard & Sensory Storytelling',
          description: 'Terapis memandu permainan tebak suara hewan, meniup gelembung terapeutik untuk oral motor, dan mendongeng interaktif untuk memicu inisiatif bicara alami anak.',
          tools: 'Flashcard artikulasi, tiupan gelembung medis, boneka tangan karakter, cermin wicara',
          icon: 'message-circle'
        },
        evalCard: {
          sessionNumber: 'Sesi 01 — Observasi Awal Wicara',
          childMood: 'Ceria & Kooperatif (Tertarik pada media visual)',
          targetMilestone: 'Inisiasi verbal 2 kata & peniruan bunyi vokal aktif',
          observationNotes: 'Anak mulai mau menirukan bunyi "ba-ba" dan merespons kontak mata saat diajak bernyanyi bersama terapis.',
          therapistFeedback: 'Progres responsif sangat baik. Direkomendasikan stimulasi penguatan artikulasi 2x seminggu.',
          therapistName: 'Kak Bima Pratama, A.Md.TW',
          therapistRole: 'Terapis Wicara & Bahasa (STR Resmi)'
        },
        homeProgram: {
          title: 'Aktivitas 10 Menit di Rumah (Home Program)',
          taskName: 'Permainan "Tebak Benda" & Beri Jeda Bicara 3 Detik',
          instruction: 'Ajak anak menunjuk dan mencoba mengucap nama benda favorit sebelum diberikan. Berikan jeda 3 detik agar anak terbiasa berinisiatif mengeluarkan suara.',
          frequency: '10 menit setiap pagi dan sore hari',
          duration: '10 Menit / Hari',
          parentingTip: 'Hindari langsung memberikan barang saat anak merengek. Berikan jeda 3 detik dan tanyakan "Adik mau apa?" dengan senyuman hangat tanpa memaksa.'
        }
      }
    },
    {
      id: 'sensory',
      categoryName: 'Fokus & Sensori',
      ageRange: 'Usia 1 – 7 Tahun',
      icon: 'compass',
      recommendedService: 'SENSORY',
      badgeClass: 'badge-secondary',
      colorTheme: 'purple',
      shortIntro: 'Kenali reaksi berlebih atau kurang sensitif anak terhadap lingkungannya:',
      signs: [
        'Sangat takut atau menutup telinga rapat-rapat saat mendengar suara blender/pengering rambut.',
        'Mencari stimulasi ekstrem tanpa henti: berputar-putar, melompat, atau menabrakkan badan.',
        'Kesulitan mempertahankan kontak mata dan fokus belajar lebih dari beberapa saat.',
        'Menolak keras tekstur makanan tertentu (selective eater ekstrem) atau label pada pakaian.'
      ],
      interactivePreview: {
        clinicActivity: {
          title: 'Sirkuit Ayunan Terapeutik & Terowongan Rintang Taktil',
          description: 'Melatih keseimbangan vestibular dan kepekaan proprioseptif melalui ayunan lycra multi-arah, merangkak di terowongan busa lembut, dan kolam bola sensori terarah.',
          tools: 'Ayunan lycra vestibular, beanbag pemberat lembut, matras sensory-path, brush taktil',
          icon: 'compass'
        },
        evalCard: {
          sessionNumber: 'Sesi 01 — Observasi Sensori Integrasi',
          childMood: 'Awalnya cemas suara bising, tenang setelah 15 menit relaksasi',
          targetMilestone: 'Regulasi diri saat transisi & pematangan modulasi vestibular',
          observationNotes: 'Anak menunjukkan penurunan kecemasan setelah stimulasi deep-pressure di kolam busa. Rentang fokus meningkat menjadi 8 menit.',
          therapistFeedback: 'Hipersensitivitas auditori dapat diredam bertahap melalui latihan sensori terstruktur.',
          therapistName: 'Kak Nadia Putri, S.Tr.Kes',
          therapistRole: 'Spesialis Sensori Integrasi (STR Resmi)'
        },
        homeProgram: {
          title: 'Aktivitas 10 Menit di Rumah (Home Program)',
          taskName: 'Pijatan Sensori Taktil Lembut & Selimut Kepompong',
          instruction: 'Berikan usapan lembut bertekanan stabil (deep touch) di kedua lengan dan punggung anak sebelum tidur untuk menenangkan sistem saraf pusat.',
          frequency: '1x sehari sebelum waktu istirahat malam',
          duration: '10 Menit / Hari',
          parentingTip: 'Redupkan lampu kamar 15 menit sebelum tidur dan ciptakan rutinitas tenang tanpa layar gawai (screen-free) agar modulasi sensori anak lebih rileks.'
        }
      }
    },
    {
      id: 'physio',
      categoryName: 'Motorik Kasar & Postur',
      ageRange: 'Usia 6 Bulan – 7 Tahun',
      icon: 'activity',
      recommendedService: 'PHYSIO',
      badgeClass: 'badge-info',
      colorTheme: 'sky',
      shortIntro: 'Perhatikan kekuatan otot, keseimbangan gerak, dan tonggak fisik anak:',
      signs: [
        'Belum mampu duduk mandiri di usia 9 bulan atau belum berjalan stabil di usia 15–18 bulan.',
        'Keseimbangan tubuh tampak goyah, gaya berjalan kaku, atau sangat sering tersandung dan jatuh.',
        'Otot terasa lemas/lunglai (hipotonia) atau sebaliknya terasa sangat kaku saat digerakkan.',
        'Berjalan jinjit terus-menerus (toe-walking) saat tidak mengenakan alas kaki.'
      ],
      interactivePreview: {
        clinicActivity: {
          title: 'Petualangan Sirkuit Keseimbangan Gym Ball & Balok Busa',
          description: 'Melatih kekuatan tonus otot kaki, stabilitas panggul, dan koreksi postur tubuh melalui rintangan balok busa bertingkat serta latihan melompat berpegangan.',
          tools: 'Gym ball pediatrik, trampolin berpengaman, balance beam busa, wedge matras',
          icon: 'activity'
        },
        evalCard: {
          sessionNumber: 'Sesi 01 — Observasi Fisioterapi',
          childMood: 'Sangat antusias mengeksplorasi tantangan fisik',
          targetMilestone: 'Keseimbangan berdiri satu kaki & koreksi fase jalan tumit',
          observationNotes: 'Postur anak tampak lebih tegak saat menaiki tanjakan balok busa. Pola berjalan jinjit berkurang dengan stimulasi tumpuan tumit.',
          therapistFeedback: 'Kekuatan otot inti (core muscles) merespons latihan fisik terarah dengan sangat baik.',
          therapistName: 'Kak Rini Kartika, S.Fis',
          therapistRole: 'Fisioterapis Pediatrik (STR Resmi)'
        },
        homeProgram: {
          title: 'Aktivitas 10 Menit di Rumah (Home Program)',
          taskName: 'Latihan Berjalan di Atas Bantal & Meniru Gerakan Hewan',
          instruction: 'Susun 3 bantal lantai di ruang tamu dan pandu anak melangkah di atasnya tanpa berpegangan untuk melatih reseptor telapak kaki.',
          frequency: '10 menit saat waktu bermain sore hari',
          duration: '10 Menit / Hari',
          parentingTip: 'Biarkan anak bertelanjang kaki saat bermain di dalam rumah atau rumput yang aman untuk menstimulasi titik saraf sensorik telapak kaki secara alami.'
        }
      }
    },
    {
      id: 'occupational',
      categoryName: 'Kemandirian & Motorik Halus',
      ageRange: 'Usia 2 – 7 Tahun',
      icon: 'puzzle',
      recommendedService: 'OCCUPATIONAL',
      badgeClass: 'badge-success',
      colorTheme: 'emerald',
      shortIntro: 'Cek kesiapan koordinasi jemari dan kemandirian rutinitas harian anak:',
      signs: [
        'Kesulitan memegang sendok makan, mencoret kertas, atau menggenggam pensil secara wajar.',
        'Geli atau menolak keras saat tangannya menyentuh tekstur basah, lengket, lem, atau pasir.',
        'Kesulitan menggunakan kedua tangan bersamaan saat menggunting kertas atau memasang kancing.',
        'Ketergantungan total pada bantuan orang dewasa untuk memakai sepatu, mandi, atau ke toilet.'
      ],
      interactivePreview: {
        clinicActivity: {
          title: 'Playdough Modelling, Meronce Manik Jumbo, & Jepit Sensory',
          description: 'Melatih kekuatan jemari (pincer grasp), koordinasi bilateral dua tangan, serta kemandirian memegang sendok dan alat tulis pra-sekolah secara mantap.',
          tools: 'Playdough terapeutik non-toksik, jepit kayu sensorik, manik kayu jumbo, puzzle geometri',
          icon: 'puzzle'
        },
        evalCard: {
          sessionNumber: 'Sesi 01 — Observasi Okupasi Terapi',
          childMood: 'Fokus dan tekun memainkan media plastisin',
          targetMilestone: 'Genggaman jemari tripod grasp & koordinasi bilateral tangan',
          observationNotes: 'Anak mampu menggunakan kedua tangan bersinergi saat menarik plastisin. Penggunaan sendok makan mulai mandiri dengan tumpahan minimal.',
          therapistFeedback: 'Keterampilan motorik halus siap dilanjutkan ke latihan memegang krayon segitiga.',
          therapistName: 'Kak Dinda Lestari, A.Md.OT',
          therapistRole: 'Terapis Okupasi Pediatrik (STR Resmi)'
        },
        homeProgram: {
          title: 'Aktivitas 10 Menit di Rumah (Home Program)',
          taskName: 'Meremas Kertas Bekas & Memindahkan Tutup Botol',
          instruction: 'Ajak anak meremas dan merobek kertas menjadi bola-bola kecil, lalu pindahkan menggunakan dua jari (ibu jari dan telunjuk) ke dalam wadah.',
          frequency: '10-15 menit di meja bermain anak',
          duration: '10 Menit / Hari',
          parentingTip: 'Beri pujian spesifik saat anak berhasil menyelesaikan tahapan kecil sendiri, seperti "Hebat, jemari Kakak kuat sekali meremas kertas ini!"'
        }
      }
    }
  ],

  // =========================================================================
  // 6. Layanan Terapi Inti (Core Clinical Services)
  // =========================================================================
  services: [
    {
      id: 'PHYSIO',
      code: 'PHYSIO',
      title: 'Physiotherapy (Fisioterapi Anak)',
      shortName: 'Fisioterapi Anak',
      badge: 'badge-info',
      badgeLabel: 'Motorik Kasar',
      icon: 'activity',
      duration: '60 Menit / Sesi',
      ratio: '1 Terapis : 1 Anak (One-on-One)',
      room: 'Gym Fisioterapi A',
      headline: 'Melatih Kekuatan Otot, Postur Seimbang, dan Kelincahan Fisik Anak',
      description: 'Layanan rehabilitasi medik pediatrik untuk mengoptimalkan tonggak tumbuh kembang fisik (milestone), koordinasi gerak, stabilitas postur tubuh, serta rehabilitasi gangguan gerak pada anak dalam suasana yang seru dan suportif.',
      focusAreas: [
        'Pencapaian tonggak gerak: merayap, merangkak, berdiri mandiri, hingga berlari seimbang',
        'Latihan keseimbangan dinamis, koordinasi bilateral, dan ketangkasan fisik',
        'Koreksi postur tubuh dan penanganan tonus otot abnormal (hipotonia & hipertonia)',
        'Koreksi pola jalan khusus (seperti kebiasaan toe-walking atau in-toeing)'
      ]
    },
    {
      id: 'SENSORY',
      code: 'SENSORY',
      title: 'Sensory Integration (Sensori Integrasi)',
      shortName: 'Sensori Integrasi',
      badge: 'badge-secondary',
      badgeLabel: 'Regulasi Sensori',
      icon: 'compass',
      duration: '60 Menit / Sesi',
      ratio: '1 Terapis : 1 Anak (One-on-One)',
      room: 'Ruang Sensori Integrasi',
      headline: 'Menyeimbangkan Pengolahan Sensori, Regulasi Emosi, dan Rentang Fokus',
      description: 'Metode terapi berbasis neurologis untuk membantu sistem saraf anak memproses, menyaring, dan mengorganisir informasi dari seluruh panca indera, keseimbangan vestibular, dan proprioseptif melalui ayunan dan rintangan taktil terarah.',
      focusAreas: [
        'Modulasi sensori bagi anak hipersensitif (mudah takut) maupun hiposensitif (pencari stimulasi)',
        'Meningkatkan ketahanan fokus (sustained attention) dan kontak mata saat beraktivitas',
        'Manajemen regulasi emosi, transisi rutinitas, dan pengurangan tantrum akibat overstimulasi',
        'Perencanaan gerak motorik kompleks (praxis/motor planning) di dalam arena sensori'
      ]
    },
    {
      id: 'SPEECH',
      code: 'SPEECH',
      title: 'Speech Therapy (Terapi Wicara)',
      shortName: 'Terapi Wicara',
      badge: 'badge-warning',
      badgeLabel: 'Bicara & Bahasa',
      icon: 'message-circle',
      duration: '60 Menit / Sesi',
      ratio: '1 Terapis : 1 Anak (One-on-One)',
      room: 'Ruang Wicara B',
      headline: 'Mengembangkan Kemampuan Komunikasi Verbal, Artikulasi, dan Bahasa Ekspresif',
      description: 'Pendampingan klinis untuk mengatasi speech delay, ketidakjelasan artikulasi kata, hingga gangguan pemahaman instruksi. Menggunakan media visual interaktif, flashcard bercerita, dan latihan motorik mulut yang menyenangkan.',
      focusAreas: [
        'Stimulasi keterlambatan bicara (speech delay) dan percepatan kosa kata fungsional',
        'Peningkatan pemahaman instruksi dua tahap atau lebih (bahasa reseptif)',
        'Koreksi artikulasi huruf/kata agar pelafalan terdengar jelas oleh orang lain',
        'Latihan otot organ bicara (oral motor exercise) untuk kekuatan lidah, bibir, dan rahang'
      ]
    },
    {
      id: 'OCCUPATIONAL',
      code: 'OCCUPATIONAL',
      title: 'Occupational Therapy (Terapi Okupasi)',
      shortName: 'Terapi Okupasi',
      badge: 'badge-success',
      badgeLabel: 'Motorik Halus & ADL',
      icon: 'puzzle',
      duration: '60 Menit / Sesi',
      ratio: '1 Terapis : 1 Anak (One-on-One)',
      room: 'Ruang Okupasi C',
      headline: 'Membangun Kemandirian Beraktivitas Harian dan Kesiapan Belajar di Sekolah',
      description: 'Fokus pada penguatan keterampilan motorik halus jemari, koordinasi mata-tangan, serta kemandirian Activity of Daily Living (ADL) seperti makan sendiri, memasang kancing baju, memegang pensil dengan benar, dan konsentrasi meja.',
      focusAreas: [
        'Kemandirian makan, melepas dan memakai pakaian, mengancing baju, dan toilet training',
        'Penguatan genggaman jari (tripod grasp), kontrol pensil, dan kemampuan pra-menulis',
        'Koordinasi bilateral kedua belah tangan (menggunting kertas, meronce, menyusun puzzle)',
        'Adaptasi perilaku tenang saat duduk di meja belajar untuk persiapan masuk jenjang TK/SD'
      ]
    }
  ],

  // =========================================================================
  // 7. Profil Tenaga Ahli Klinis (Section 6: Therapists Directory)
  // =========================================================================
  therapists: [
    {
      id: 'THR-01',
      name: 'Kak Nadia Putri, S.Tr.Kes',
      credentials: 'S.Tr.Kes (Sensory Integration Specialist)',
      role: 'Terapis Sensori Integrasi',
      serviceId: 'SENSORY',
      serviceName: 'Sensory Integration',
      experienceYears: '5+ Tahun Pengalaman Klinis',
      strNumber: 'STR: 12.04.5.2.21.89012',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face&auto=format',
      bio: 'Berpengalaman mendampingi anak-anak dengan Sensory Processing Disorder, ADHD, dan tantangan regulasi diri. Pendekatannya yang ceria dan penuh kesabaran membuat anak merasa aman berekspresi di ruang sensori.',
      focusSkills: [
        'Sensory Modulation & Regulation',
        'Vestibular & Proprioceptive Integration',
        'Motor Planning (Praxis)',
        'Calming & De-escalation Techniques'
      ],
      quote: '"Saat kebutuhan sensorinya dipahami, anak akan merasa nyaman dan siap belajar mengeksplorasi dunianya."'
    },
    {
      id: 'THR-02',
      name: 'Kak Bima Pratama, A.Md.TW',
      credentials: 'A.Md.TW (Pediatric Speech Therapist)',
      role: 'Terapis Wicara & Bahasa',
      serviceId: 'SPEECH',
      serviceName: 'Speech Therapy',
      experienceYears: '6+ Tahun Pengalaman Klinis',
      strNumber: 'STR: 14.02.3.1.20.76543',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face&auto=format',
      bio: 'Fokus pada penanganan speech delay, pengayaan kosa kata fungsional, dan stimulasi motorik mulut anak balita. Kak Bima lihai mengubah latihan bicara menjadi permainan interaktif berbasis dongeng dan lagu.',
      focusSkills: [
        'Speech Delay Intervention',
        'Artikulasi & Kejelasan Pelafalan',
        'Oral Motor Stimulation',
        'Bahasa Reseptif & Ekspresif'
      ],
      quote: '"Setiap kata pertama dari si kecil adalah mukjizat besar yang berhak kita perjuangkan bersama."'
    },
    {
      id: 'THR-03',
      name: 'Kak Rini Kartika, S.Fis',
      credentials: 'S.Fis (Pediatric Physiotherapist)',
      role: 'Fisioterapis Anak',
      serviceId: 'PHYSIO',
      serviceName: 'Physiotherapy',
      experienceYears: '4+ Tahun Pengalaman Klinis',
      strNumber: 'STR: 11.08.4.2.22.45129',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face&auto=format',
      bio: 'Memiliki dedikasi tinggi pada stimulasi tonggak motorik kasar, penguatan tonus otot, dan perbaikan postur tubuh anak. Mengemas latihan fisik dalam tantangan sirkuit mini yang membangkitkan rasa percaya diri anak.',
      focusSkills: [
        'Milestone Delay (Duduk, Berdiri, Berjalan)',
        'Koreksi Hipotonia & Tonus Otot',
        'Koreksi Postur & Pola Berjalan (Gait)',
        'Latihan Keseimbangan Dinamis'
      ],
      quote: '"Tubuh yang kuat dan seimbang adalah pondasi utama kemandirian gerak anak di masa depan."'
    },
    {
      id: 'THR-04',
      name: 'Kak Dinda Lestari, A.Md.OT',
      credentials: 'A.Md.OT (Certified Occupational Therapist)',
      role: 'Terapis Okupasi Pediatrik',
      serviceId: 'OCCUPATIONAL',
      serviceName: 'Occupational Therapy',
      experienceYears: '5+ Tahun Pengalaman Klinis',
      strNumber: 'STR: 13.06.3.2.21.34891',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format',
      bio: 'Ahli dalam stimulasi motorik halus, penguatan jemari untuk persiapan menulis di sekolah, dan kemandirian rutinitas harian (makan, memakai baju). Dikenal sangat telaten dan hangat dalam membangun rasa mandiri anak.',
      focusSkills: [
        'Fine Motor & Pencil Grasp Development',
        'Kemandirian Activity of Daily Living (ADL)',
        'Koordinasi Visual-Motorik & Bilateral',
        'Kesiapan Pra-Akademik Sekolah'
      ],
      quote: '"Melihat binar bangga di mata anak saat berhasil melakukan hal sendiri adalah kebahagiaan terbesar kami."'
    }
  ],

  // =========================================================================
  // 8. Testimoni Orang Tua Pasien (Section 6: Social Proof)
  // =========================================================================
  testimonials: [
    {
      id: 'testi-01',
      parent: 'Bunda Citra',
      childInfo: 'Ibunda Arka (3 tahun 2 bulan)',
      serviceTag: 'Terapi Wicara',
      badge: 'Speech Delay Teratasi',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face&auto=format',
      quote: 'Sebelum ke ESSA Kids, Arka di usia 2.5 tahun hanya bisa menunjuk dan menangis kalau minta sesuatu. Setelah 8 sesi terapi wicara bersama Kak Bima, sekarang kosa katanya berkembang pesat dan sudah bisa merangkai "Bunda mau susu cokelat". Rasanya terharu luar biasa.',
      stars: 5
    },
    {
      id: 'testi-02',
      parent: 'Mama Stephanie',
      childInfo: 'Ibunda Cally (4 tahun 6 bulan)',
      serviceTag: 'Sensori Integrasi',
      badge: 'Regulasi Emosi Stabil',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&h=120&fit=crop&crop=face&auto=format',
      quote: 'Cally dulunya gampang tantrum hebat kalau dengar suara blender atau baju yang ada labelnya. Berkat bimbingan telaten Kak Nadia di ruang sensori dan PR home program yang teratur, Cally jauh lebih tenang dan fokus saat diajak bermain bersama teman sebayanya.',
      stars: 5
    },
    {
      id: 'testi-03',
      parent: 'Ayah Hendra',
      childInfo: 'Ayahanda Kenzo (5 tahun)',
      serviceTag: 'Fisioterapi & Okupasi',
      badge: 'Siap Masuk TK/SD',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format',
      quote: 'Kenzo sempat kesulitan pegang pensil dan gampang lelah saat duduk di meja belajar. Latihan terpadu fisioterapi dan okupasi di ESSA Kids benar-benar membentuk postur dan kekuatan jemarinya. Sekarang Kenzo sudah mandiri pakai sepatu sendiri dan siap masuk TK B.',
      stars: 5
    }
  ],

  // =========================================================================
  // 9. Pilihan Paket & Biaya (Section 7: Initial Assessment & Pricing Packages)
  // =========================================================================
  initialAssessment: {
    id: 'ASSESSMENT-01',
    code: 'OBS-01',
    name: 'Sesi Observasi & Asesmen Tumbuh Kembang Awal',
    duration: '1x Kunjungan Pertama — 60 Menit',
    priceFormatted: 'Rp 275.000',
    badge: 'Pintu Masuk Terbaik',
    tagline: 'Langkah Awal yang Nyaman & Terarah untuk Mengenal Kebutuhan Riil Buah Hati',
    description: 'Sesi one-on-one komprehensif bersama terapis berlisensi resmi untuk memetakan kekuatan serta area stimulasi spesifik anak sebelum memutuskan paket terapi berkelanjutan.',
    benefits: [
      '60 Menit observasi one-on-one berbasis bermain langsung dengan terapis ahli',
      'Pemetaan milestone tumbuh kembang motorik, bicara, sensori, dan kemandirian',
      'Rekomendasi tertulis penyusunan kurikulum Individualized Education Program (IEP)',
      'Konsultasi tatap muka 15 menit bersama orang tua tanpa rasa terburu-buru'
    ],
    ctaText: 'Booking Sesi Observasi'
  },

  packages: [
    {
      id: 'PKG-REGULER',
      code: 'PKG-04',
      name: 'Paket Reguler',
      subtitle: 'Program Adaptasi & Pengenalan',
      sessions: 4,
      sessionCountText: '4 Sesi Terapi',
      validityDays: 30,
      validityText: 'Masa aktif 30 hari',
      isPopular: false,
      badgeText: 'Pilihan Fleksibel',
      priceFormatted: 'Rp 1.000.000',
      pricePerSession: 'Rp 250.000 / sesi',
      description: 'Pilihan fleksibel yang ideal untuk fase adaptasi awal si kecil, observasi berkelanjutan, atau tindak lanjut pemeliharaan milestone tumbuh kembang.',
      benefits: [
        '4 Sesi Terapi One-on-One (60 menit per sesi)',
        'Masa aktif 30 hari kalender sejak sesi pertama',
        'Resume catatan perkembangan harian dari terapis',
        '1x Lembar panduan modul Home Program awal',
        'Akses ruang tunggu nyaman ber-AC, Wi-Fi, & fasilitas ramah anak'
      ],
      ctaText: 'Pilih Paket Reguler',
      suitableNote: 'Cocok untuk screening tindak lanjut atau program 1x per minggu selama 1 bulan.'
    },
    {
      id: 'PKG-INTENSIF',
      code: 'PKG-08',
      name: 'Paket Intensif',
      subtitle: 'Pilihan Utama Orang Tua',
      sessions: 8,
      sessionCountText: '8 Sesi Terapi',
      validityDays: 60,
      validityText: 'Masa aktif 60 hari',
      isPopular: true,
      badgeText: 'Paling Populer / Rekomendasi Utama',
      priceFormatted: 'Rp 1.900.000',
      pricePerSession: 'Rp 237.500 / sesi',
      description: 'Program paling efektif dan direkomendasikan untuk menstimulasi pencapaian target tumbuh kembang secara konsisten dengan frekuensi 1–2 kali per minggu.',
      benefits: [
        '8 Sesi Terapi One-on-One (60 menit per sesi)',
        'Masa aktif fleksibel 60 hari kalender',
        'Penyusunan Individualized Education Program (IEP) resmi',
        'Laporan evaluasi perkembangan berkala komprehensif',
        'Panduan Home Program bertahap yang diperbarui setiap 2 minggu',
        'Prioritas utama dalam pemilihan slot hari dan jam terapi rutin'
      ],
      ctaText: 'Pilih Paket Intensif',
      suitableNote: 'Rekomendasi klinis terbaik untuk hasil stimulasi motorik dan bicara yang terukur.'
    },
    {
      id: 'PKG-OPTIMAL',
      code: 'PKG-12',
      name: 'Paket Optimal',
      subtitle: 'Pendampingan Jangka Menengah',
      sessions: 12,
      sessionCountText: '12 Sesi Terapi',
      validityDays: 90,
      validityText: 'Masa aktif 90 hari',
      isPopular: false,
      badgeText: 'Nilai Penghematan Terbaik',
      priceFormatted: 'Rp 2.700.000',
      pricePerSession: 'Rp 225.000 / sesi',
      description: 'Program komprehensif untuk anak yang memerlukan intervensi terstruktur jangka menengah menuju kemandirian penuh dengan penghematan biaya terbaik.',
      benefits: [
        '12 Sesi Terapi One-on-One (60 menit per sesi)',
        'Masa aktif panjang 90 hari kalender',
        'Dokumen IEP lengkap dengan target milestone bertingkat',
        '1x Sesi konsultasi mendalam review tumbuh kembang bersama orang tua',
        'Buku panduan Home Program eksklusif sesuai minat spesifik anak',
        'Hak prioritas penuh untuk reservasi ulang dan reschedule jadwal'
      ],
      ctaText: 'Pilih Paket Optimal',
      suitableNote: 'Paling hemat untuk program intensif 2x per minggu atau pendampingan menyeluruh.'
    }
  ],

  // =========================================================================
  // 10. Pertanyaan Umum Orang Tua (Section 8: Frequently Asked Questions)
  // =========================================================================
  faqs: [
    {
      id: 'faq-age',
      question: 'Berapa usia minimal anak untuk mulai mengikuti terapi di ESSA Kids?',
      answer: 'Terapi tumbuh kembang dapat dimulai sedini mungkin sejak orang tua mengamati adanya tanda keterlambatan, bahkan mulai usia 6–12 bulan untuk stimulasi motorik dini dan sensori. Masa usia emas (golden age) di rentang 0–5 tahun memiliki tingkat plastisitas otak tertinggi, sehingga intervensi yang diberikan lebih awal akan memberikan hasil yang jauh lebih optimal dan cepat.',
      category: 'Usia & Screening'
    },
    {
      id: 'faq-accompany',
      question: 'Apakah orang tua boleh mendampingi si kecil di dalam ruangan terapi?',
      answer: 'Tentu saja boleh! Pada sesi awal atau masa adaptasi anak, kehadiran orang tua sangat kami anjurkan agar anak merasa aman, tenang, dan terlindungi. Seiring terbangunnya rasa percaya diri anak dengan terapis, anak akan dilatih berinteraksi mandiri secara perlahan. Ruangan kami juga dilengkapi jendela observasi agar Ayah & Bunda tetap bisa memantau proses terapi dengan nyaman dari luar tanpa mendistraksi fokus anak.',
      category: 'Kenyamanan Sesi'
    },
    {
      id: 'faq-duration',
      question: 'Berapa lama durasi setiap sesi dan berapa frekuensi yang disarankan?',
      answer: 'Setiap sesi terapi berlangsung selama 60 menit. Durasi ini terbagi menjadi 45–50 menit stimulasi aktif berbasis bermain bersama anak, dan 10–15 menit sesi konsultasi langsung dengan orang tua untuk menyampaikan evaluasi harian serta memberikan panduan Home Program. Frekuensi terapi umumnya dianjurkan 1 hingga 2 kali per minggu, disesuaikan dengan hasil asesmen kebutuhan anak.',
      category: 'Durasi & Frekuensi'
    },
    {
      id: 'faq-reschedule',
      question: 'Bagaimana jika anak sakit atau berhalangan hadir pada jadwal terapi?',
      answer: 'Kami sangat memahami bahwa kesehatan anak bersifat dinamis. Ayah & Bunda cukup menginformasikan kepada tim admin kami via WhatsApp selambat-lambatnya 4 jam sebelum sesi dimulai. Kuota sesi Anda tidak akan hangus dan dapat dijadwalkan ulang (reschedule) pada hari lain yang masih berada dalam rentang masa aktif paket yang Anda miliki.',
      category: 'Kebijakan Jadwal'
    },
    {
      id: 'faq-payment',
      question: 'Bagaimana alur pembayaran paket sesi terapi di ESSA Kids?',
      answer: 'Pembayaran dapat dilakukan setelah sesi observasi perdana selesai dan Anda sepakat dengan rencana terapi yang direkomendasikan. Kami menyediakan berbagai metode pembayaran yang praktis dan transparan, termasuk Transfer Bank (BCA, Mandiri), QRIS, serta Kartu Debit/Kredit tanpa biaya tersembunyi.',
      category: 'Alur Pembayaran'
    },
    {
      id: 'faq-preparation',
      question: 'Apa saja yang perlu dipersiapkan dan dibawa saat sesi terapi pertama?',
      answer: 'Cukup bawa buku riwayat kesehatan anak/buku KIA (jika ada), pakaian ganti yang nyaman berbahan katun menyerap keringat, sepasang kaus kaki antiselip (khusus ruang Gym Fisioterapi & Sensori Integrasi), serta botol minum favorit anak. Kami menyarankan anak sudah makan sekitar 45–60 menit sebelum terapi dan beristirahat cukup agar suasana hatinya ceria dan berenergi.',
      category: 'Persiapan Kunjungan'
    }
  ]
});
