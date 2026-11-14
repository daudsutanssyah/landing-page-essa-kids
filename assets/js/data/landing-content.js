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
  // 3. Cek Tanda Awal Tumbuh Kembang (Red Flags Interactive Self-Screening)
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ],

  // =========================================================================
  // 4. Layanan Terapi Inti (Core Clinical Services)
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
      description: 'Layanan rehabilitasi medik pediatrik untuk mengoptimalkan tonggak tumbuh kembang fisik (milestone), koordinasi lokomotor, stabilitas postur tubuh, serta rehabilitasi gangguan gerak pada anak dengan suasana latihan yang seru dan suportif.',
      focusAreas: [
        'Pencapaian tonggak gerak: merayap, merangkak, berdiri mandiri, hingga berlari seimbang',
        'Latihan keseimbangan dinamis, koordinasi bilateral, dan ketangkasan fisik',
        'Koreksi postur tubuh dan penanganan tonus otot abnormal (hipotonia & hipertonia)',
        'Koreksi pola jalan khusus (seperti kebiasaan toe-walking atau in-toeing)'
      ],
      idealFor: 'Anak dengan keterlambatan milestone motorik, celebral palsy ringan, hipotonia, atau pasca-cedera.'
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
      description: 'Metode terapi berbasis neurologis untuk membantu sistem saraf anak memproses, menyaring, dan mengorganisir informasi dari seluruh panca indera, vestibular (keseimbangan), dan proprioseptif melalui ayunan, lintasan rintang, dan stimulasi taktil.',
      focusAreas: [
        'Modulasi sensori bagi anak hipersensitif (mudah kaget/takut) maupun hiposensitif (pencari sensasi)',
        'Meningkatkan ketahanan fokus (sustained attention) dan kontak mata saat beraktivitas',
        'Manajemen regulasi emosi, transisi rutinitas, dan pengurangan tantrum akibat overstimulasi',
        'Perencanaan gerak motorik kompleks (praxis/motor planning) di dalam arena sensori'
      ],
      idealFor: 'Anak dengan Sensory Processing Disorder (SPD), ADHD, Spektrum Autisme, atau rentang konsentrasi pendek.'
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
      ],
      idealFor: 'Anak usia batita/balita dengan speech delay, artikulasi cadel, gagap (stuttering), atau minim inisiatif bicara.'
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
      ],
      idealFor: 'Anak yang kesulitan menulis, otot tangan mudah lelah, canggung memegang alat, atau belum mandiri merawat diri.'
    }
  ],

  // =========================================================================
  // 5. Pilar Keunggulan & Fasilitas Klinik (Why Choose Us)
  // =========================================================================
  whyChooseUs: [
    {
      id: 'why-iep',
      title: 'Individualized Education Program (IEP)',
      tagline: 'Terpersonalisasi & Terarah',
      icon: 'clipboard-check',
      description: 'Setiap anak memiliki keunikan dan kecepatan belajar tersendiri. Kami tidak menerapkan metode satu formula untuk semua, melainkan menyusun target program individual (IEP) yang dievaluasi berkala bersama dokter dan orang tua.',
      keyPoints: [
        'Asesmen awal komprehensif sebelum sesi terapi dimulai',
        'Target capaian milestone realistis dan terukur setiap bulan',
        'Penyelarasan target dengan guru di sekolah anak (bila diperlukan)'
      ]
    },
    {
      id: 'why-report',
      title: 'Laporan Evaluasi & Home Program Terstruktur',
      tagline: 'Transparan & Kolaboratif',
      icon: 'file-text',
      description: 'Keberhasilan terapi berakar dari kemitraan erat antara terapis dan keluarga di rumah. Orang tua menerima lembar resume progres mingguan serta petunjuk stimulasi praktis (Home Program) yang mudah dipraktikkan sehari-hari.',
      keyPoints: [
        'Konsultasi 10–15 menit bersama terapis di akhir tiap sesi',
        'Lembar modul panduan aktivitas stimulasi di rumah',
        'Monitoring progres objektif berbasis milestone klinis'
      ]
    },
    {
      id: 'why-facility',
      title: '4 Ruang Terapi Spesifik & Ramah Sensori',
      tagline: 'Aman, Higienis & Tematik',
      icon: 'shield-check',
      description: 'Fasilitas klinik dirancang khusus memenuhi standar keamanan pediatrik: Gym Fisioterapi A beralas matras busa densitas tinggi, Ruang Sensori Integrasi dengan ayunan multi-arah, Ruang Wicara B berperedam akustik, dan Ruang Okupasi C berorientasi kemandirian.',
      keyPoints: [
        'Peralatan terapi teruji medis & disanitasi menyeluruh antar sesi',
        'Pencahayaan ramah sensori (tidak menyilaukan mata anak)',
        'Ruang tunggu orang tua yang nyaman dilengkapi Wi-Fi & jendela observasi'
      ]
    },
    {
      id: 'why-scheduling',
      title: 'Sistem Kuota & Penjadwalan Tanpa Antre',
      tagline: 'Tepat Waktu & Nyaman',
      icon: 'calendar-check',
      description: 'Kami menghargai waktu keluarga Anda dan stabilitas emosi anak. Sistem penjadwalan terintegrasi memastikan setiap sesi dimulai tepat waktu tanpa antrean panjang yang membuat anak lelah atau rewel sebelum terapi.',
      keyPoints: [
        'Slot jadwal pasti (fixed slot mingguan) untuk konsistensi terapi',
        'Sistem reservasi dan konfirmasi digital via WhatsApp praktis',
        'Fleksibilitas reschedule sesuai kebijakan klinik yang ramah orang tua'
      ]
    }
  ],

  // =========================================================================
  // 6. Alur Pendaftaran & Terapi (Therapy Journey Steps)
  // =========================================================================
  therapySteps: [
    {
      stepNumber: '01',
      title: 'Konsultasi & Pendaftaran Online',
      subtitle: 'Langkah Awal yang Mudah',
      icon: 'message-square',
      description: 'Ayah & Bunda dapat mengisi formulir screening online singkat atau langsung menghubungi tim kami via WhatsApp untuk berbagi cerita mengenai kebutuhan si kecil tanpa rasa sungkan.',
      actionHint: 'Respons cepat tim admin kami dalam hitungan menit pada jam operasional.'
    },
    {
      stepNumber: '02',
      title: 'Observasi & Asesmen Tumbuh Kembang',
      subtitle: 'Mengenal Potensi Si Kecil',
      icon: 'search',
      description: 'Terapis profesional kami melakukan observasi menyeluruh berbasis bermain (play-based) untuk memetakan kekuatan, respons sensori, dan area yang memerlukan penguatan stimulasi.',
      actionHint: 'Sesi ramah anak tanpa jarum suntik atau tes yang menegangkan.'
    },
    {
      stepNumber: '03',
      title: 'Penyusunan IEP & Jadwal Rutin',
      subtitle: 'Rencana Jelas Bersama Keluarga',
      icon: 'calendar',
      description: 'Terapis dan orang tua berdiskusi menetapkan target capaian (IEP), memilih paket sesi yang sesuai, serta menentukan hari dan jam terapi rutin mingguan yang paling nyaman bagi keluarga.',
      actionHint: 'Jadwal tetap mingguan menjamin anak ditangani oleh terapis yang konsisten.'
    },
    {
      stepNumber: '04',
      title: 'Sesi Terapi & Evaluasi Berkala',
      subtitle: 'Rayakan Setiap Capaian Kecil',
      icon: 'award',
      description: 'Si kecil menjalani sesi terapi 60 menit one-on-one yang menyenangkan. Orang tua menerima feedback langsung di setiap sesi serta evaluasi berkala per siklus paket untuk melihat lompatan kemajuannya.',
      actionHint: 'Dilengkapi panduan stimulasi lanjutan (Home Program) untuk di rumah.'
    }
  ],

  // =========================================================================
  // 7. Profil Tenaga Ahli Klinis (Therapists Directory)
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
      avatar: 'assets/images/therapists/nadia.jpg',
      bio: 'Berpengalaman mendampingi anak-anak dengan Sensory Processing Disorder, ADHD, dan tantangan regulasi diri. Pendekatannya yang ceria dan penuh kesabaran membuat anak merasa aman berekspresi di ruang sensori.',
      focusSkills: [
        'Sensory Modulation & Regulation',
        'Vestibular & Proprioceptive Integration',
        'Motor Planning (Dyspraxia)',
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
      avatar: 'assets/images/therapists/bima.jpg',
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
      avatar: 'assets/images/therapists/rini.jpg',
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
      avatar: 'assets/images/therapists/dinda.jpg',
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
  // 8. Paket Sesi Terapi (Therapy Packages)
  // =========================================================================
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
      badgeText: null,
      priceFormatted: 'Rp 1.000.000',
      pricePerSession: 'Rp 250.000 / sesi',
      description: 'Pilihan fleksibel yang ideal untuk fase adaptasi awal si kecil, observasi berkelanjutan, atau tindak lanjut pemeliharaan milestone tumbuh kembang.',
      benefits: [
        '4 Sesi Terapi One-on-One (60 menit per sesi)',
        'Masa aktif 30 hari kalender sejak sesi pertama',
        'Resume catatan perkembangan harian dari terapis',
        '1x Lembar panduan modul Home Program awal',
        'Akses ruang tunggu ber-AC, Wi-Fi cepat, dan fasilitas ramah anak'
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
      badgeText: 'Paling Direkomendasikan',
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
      badgeText: 'Nilai Terbaik',
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
  // 9. Pertanyaan Umum Orang Tua (Frequently Asked Questions)
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
      category: 'Kenyamanan & Proses'
    },
    {
      id: 'faq-preparation',
      question: 'Apa saja yang perlu dipersiapkan dan dibawa saat sesi terapi pertama?',
      answer: 'Cukup bawa buku riwayat kesehatan anak/buku KIA (jika ada), pakaian ganti yang nyaman berbahan katun menyerap keringat, sepasang kaus kaki antiselip (khusus ruang Gym Fisioterapi & Sensori Integrasi), serta botol minum favorit anak. Kami menyarankan anak sudah makan sekitar 45–60 menit sebelum terapi dan beristirahat cukup agar suasana hatinya ceria dan berenergi.',
      category: 'Persiapan Sesi'
    },
    {
      id: 'faq-duration',
      question: 'Berapa lama durasi setiap sesi dan berapa frekuensi yang disarankan?',
      answer: 'Setiap sesi terapi berlangsung selama 60 menit. Durasi ini terbagi menjadi 45–50 menit stimulasi aktif berbasis bermain bersama anak, dan 10–15 menit sesi konsultasi langsung dengan orang tua untuk menyampaikan evaluasi harian serta memberikan panduan Home Program. Frekuensi terapi umumnya dianjurkan 1 hingga 2 kali per minggu, disesuaikan dengan hasil asesmen kebutuhan anak.',
      category: 'Durasi & Jadwal'
    },
    {
      id: 'faq-reschedule',
      question: 'Bagaimana jika anak sakit atau berhalangan hadir pada jadwal terapi?',
      answer: 'Kami sangat memahami bahwa kesehatan anak bersifat dinamis. Ayah & Bunda cukup menginformasikan kepada tim admin kami via WhatsApp selambat-lambatnya 4 jam sebelum sesi dimulai. Kuota sesi Anda tidak akan hangus dan dapat dijadwalkan ulang (reschedule) pada hari lain yang masih berada dalam rentang masa aktif paket yang Anda miliki.',
      category: 'Kebijakan & Kehadiran'
    }
  ]
});
