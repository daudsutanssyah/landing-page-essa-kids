# ESSA Kids Therapy — Public Landing Page & Online Observation Booking
> **Interactive Prototype & Single Source of Truth Landing Experience**  
> Klinik Terapi Tumbuh Kembang Anak Terpadu (Play-Based & Pediatric Certified).

---

## 🌟 Tentang Proyek

**ESSA Kids Therapy Public Landing Page** adalah antarmuka web publik resmi untuk memperkenalkan layanan terapi tumbuh kembang anak, sarana fasilitas, tim terapis berlisensi resmi (STR/SIP), serta sistem registrasi observasi awal berbasis web.

Dirancang dengan prinsip **Human-Centered Design** yang hangat, menenangkan, dan empatik bagi orang tua, proyek ini mengedepankan performa tinggi tanpa dependensi build step yang berat (*zero-build modern vanilla stack*) sehingga sangat cepat dimuat di perangkat seluler maupun desktop dan 100% siap di-*deploy* langsung ke platform modern seperti **Vercel**, GitHub Pages, atau static web hosting lainnya.

---

## 🎯 Fitur Utama untuk Orang Tua Pasien

1. **Interactive Red Flags Self-Screening (Cek Tanda Awal Tumbuh Kembang):**
   - Panduan interaktif bagi orang tua untuk mengamati 4 kategori keterlambatan tumbuh kembang anak usia 1–7 tahun (*Bicara & Komunikasi*, *Fokus & Sensori*, *Motorik Kasar & Postur*, dan *Kemandirian & Motorik Halus*).
   - Dilengkapi *checklist* interaktif yang dapat dicentang langsung oleh orang tua.
   - **Fitur Otomasi Cerdas:** Mengklik tombol rekomendasi akan otomatis memindahkan gejala yang dicentang ke formulir pendaftaran serta memilih layanan terapi yang relevan secara instan!

2. **Edukasi 4 Layanan Terapi Pediatrik Inti:**
   - **Physiotherapy (Fisioterapi Anak):** Stimulasi tonggak gerak, keseimbangan, perbaikan postur, dan penanganan tonus otot abnormal di *Gym Fisioterapi A*.
   - **Sensory Integration (Sensori Integrasi):** Penyeimbangan modulasi sensori, regulasi emosi, dan rentang fokus di *Ruang Sensori Integrasi*.
   - **Speech Therapy (Terapi Wicara):** Stimulasi keterlambatan bicara (*speech delay*), artikulasi, dan latihan organ bicara di *Ruang Wicara B*.
   - **Occupational Therapy (Terapi Okupasi):** Keterampilan motorik halus, kemandirian aktivitas harian (*ADL*), dan persiapan sekolah di *Ruang Okupasi C*.

3. **Transparansi Pilar Keunggulan & Profil Terapis:**
   - Pendekatan kurikulum individual (*Individualized Education Program - IEP*).
   - Laporan evaluasi berkala dan panduan modul stimulasi di rumah (*Home Program*).
   - Profil lengkap 4 tenaga ahli medis berizin praktik resmi (*STR & SIP*).

4. **Kalkulasi & Pilihan Paket Terapi Transparan:**
   - Paket Reguler (4 Sesi, masa aktif 30 hari).
   - Paket Intensif (8 Sesi, masa aktif 60 hari — Rekomendasi Utama).
   - Paket Optimal (12 Sesi, masa aktif 90 hari).
   - Mengklik tombol paket langsung menghubungkan pilihan ke formulir pendaftaran.

5. **Formulir Pendaftaran Observasi Terpadu & Direct WhatsApp Integration:**
   - Validasi input ramah pengguna dengan pesan notifikasi *toast*.
   - Penyimpanan data pendaftaran ke *LocalStorage* sebagai simulasi prototipe.
   - Ringkasan pendaftaran instan dengan tombol **Kirim Konfirmasi via WhatsApp Sekarang** yang membuka obrolan ke admin klinik dengan pesan yang sudah terisi rapi (*pre-filled message*).

---

## 🧪 Panduan Uji Coba untuk Klien & Pengguna

Untuk menguji alur interaktif aplikasi secara menyeluruh, ikuti langkah berikut:

### Skenario 1: Cek Gejala Awal $\rightarrow$ Auto-Fill ke Formulir
1. Buka halaman utama dan gulir ke seksi **Cek Tanda Awal (Red Flags)** (`#cek-gejala`).
2. Klik tab kategori, misalnya **Bicara & Komunikasi**.
3. Centang 1 atau 2 gejala (contoh: *"Kosa kata bermakna masih kurang dari 10 kata..."*).
4. Klik tombol **"Konsultasikan Keluhan Ini Sekarang"**.
5. Perhatikan halaman otomatis melakukan *smooth scroll* ke **Formulir Pendaftaran** (`#form-booking`), di mana pilihan layanan langsung tersetting ke **Terapi Wicara** dan catatan keluhan terisi otomatis dengan gejala yang dicentang.

### Skenario 2: Pemilihan Paket Sesi
1. Gulir ke seksi **Pilihan Paket Sesi Terapi** (`#paket`).
2. Klik tombol **"Pilih Paket Intensif"** pada kartu paket terpopuler.
3. Halaman akan otomatis menggulir ke formulir booking dengan opsi paket telah terpilih sebagai **Paket Intensif (8 Sesi)**.

### Skenario 3: Pengiriman Formulir & Notifikasi WhatsApp
1. Lengkapi field formulir:
   - Nama Anak: `Muhammad Rayyan`
   - Usia: `3 tahun 4 bulan`
   - Nama Orang Tua: `Bunda Sarah`
   - Nomor WhatsApp: `081234567890`
2. Klik **"Kirim Pendaftaran Observasi"**.
3. Notifikasi *toast* sukses akan muncul, dan layar beralih ke kartu ringkasan pendaftaran berisi Kode Booking unik.
4. Klik tombol hijau **"Kirim Konfirmasi via WhatsApp Sekarang"** untuk melihat format pesan yang siap dikirim ke nomor resmi klinik.

---

## 🏗️ Arsitektur Teknis & Struktur Folder

Aplikasi ini dibangun dengan paradigma **Clean Modern Frontend Architecture**:
- **Markup:** Semantik HTML5, aksesibilitas ramah pembaca layar (ARIA), dan *responsive layout*.
- **Styling:** **Tailwind CSS Play CDN** yang diselaraskan dengan tema DaisyUI v4 (`emerald`), dipadukan dengan tipografi Google Fonts *Plus Jakarta Sans* dan efek visual pada `custom.css`.
- **State Management:** **Alpine.js v3** via arsitektur Store terpusat (`$store.landing` dan `$store.ui`).
- **Icons:** **Lucide Icons** dengan *helper debounced refresh* (`window.refreshIcons()`).
- **Modularity:** Menggunakan standar **ES6 Modules** (`import` / `export`) asli dari peramban tanpa memerlukan kompilasi Node/Webpack.

```text
essa-kids-landing/
│
├── index.html                    # Halaman landing page utama & perakitan seluruh seksi
├── vercel.json                   # Konfigurasi perutean & header hosting statis Vercel
├── README.md                     # Dokumentasi arsitektur dan panduan pengguna
│
└── assets/
    ├── css/
    │   └── custom.css            # Aturan CSS pelengkap (anti-FOUC cloak, hero-pattern, scrollbar)
    │
    ├── images/
    │   └── therapists/           # Aset visual foto profil terapis (opsional / fallback SVG initials)
    │
    └── js/
        ├── app.js                # Main bootstrapper, registrasi layout navbar/footer, Alpine store, & icon helper
        │
        ├── config/
        │   └── tailwind.config.js # Palet brand lembut (Soft Emerald, Warm Amber, Sky Blue), font, & keyframes
        │
        ├── data/
        │   └── landing-content.js # Single Source of Truth (SSOT) data klinik, red flags, layanan, & paket
        │
        ├── components/
        │   ├── navbar.js         # Sticky header publik, mobile responsive drawer (bebas link internal)
        │   └── footer.js         # Footer informatif 4 kolom dengan data dinamis jam & kontak resmi
        │
        └── stores/
            └── booking.store.js  # Alpine store untuk self-screening, reactive booking form, & WhatsApp integration
```

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

Karena proyek ini menggunakan modul ES6 standar, jalankan menggunakan local web server apa pun:

### Cara 1: Menggunakan Node.js / `npx serve`
```bash
npx serve .
```
Lalu buka alamat `http://localhost:3000` di browser Anda.

### Cara 2: Menggunakan Python
```bash
# Python 3
python -m http.server 8000
```
Buka `http://localhost:8000`.

### Cara 3: Menggunakan VS Code Live Server
Cukup klik kanan pada file `index.html` dan pilih **"Open with Live Server"**.

---

## 🔒 Catatan Keamanan & Hak Akses Publik

Landing page ini **100% didedikasikan untuk pengunjung publik dan calon orang tua pasien**. Tidak ada tombol, menu, atau kredensial yang mengarah ke portal administratif internal atau rekam medis terapis. Seluruh data formulir disimpan secara aman di peramban lokal pengunjung (*LocalStorage*) dan diteruskan secara sukarela oleh orang tua melalui jalur komunikasi WhatsApp resmi klinik.

---

&copy; 2026 **ESSA Kids Therapy**. Seluruh Hak Cipta Dilindungi Undang-Undang.
