# ESSA Kids Therapy — Public Landing Page & Online Observation Booking
> **Interactive Prototype & Single Source of Truth Landing Experience**  
> Klinik Terapi Tumbuh Kembang Anak Terpadu (Play-Based & Pediatric Certified).

---

## 🌟 Tentang Proyek

**ESSA Kids Therapy Public Landing Page** adalah antarmuka web publik resmi untuk memperkenalkan layanan terapi tumbuh kembang anak, sarana fasilitas, tim terapis berlisensi resmi (STR/SIP), serta sistem registrasi observasi awal berbasis web.

Dirancang dengan prinsip **Human-Centered Design** yang hangat, menenangkan, dan empatik bagi orang tua, proyek ini mengedepankan performa tinggi tanpa dependensi build step yang berat (*zero-build modern vanilla stack*) sehingga sangat cepat dimuat di perangkat seluler maupun desktop dan 100% siap di-*deploy* langsung ke platform modern seperti **Vercel**, GitHub Pages, atau static web hosting lainnya.

---

## 🧭 Struktur 9 Section yang Dioptimasi untuk Konversi

Landing page ini disusun dalam 9 section berurutan secara strategis demi kenyamanan dan keyakinan orang tua:

1. **Section 1: Navigation Bar (`#app-navbar` via `assets/js/components/navbar.js`)**
   - Floating Pill Navbar dengan 6 anchor link (`#keunggulan`, `#program-usia`, `#preview-interaktif`, `#tim-ahli`, `#paket-harga`, `#faq`) dan tombol CTA kapsul *"Daftar Observasi"* (`#final-cta`) serta tombol WhatsApp cepat.
2. **Section 2: Hero Section (`#hero`)**
   - Asymmetric Layout dengan tipografi bersih, 2 CTA (*"Jadwalkan Observasi Awal"* & *"Cek Gejala & Simulasi"*), Stacked Trust Indicators (5 avatar squircle dari CDN publik + 5 bintang + teks kepercayaan), Hero Metrics strip, dan *Connected Geometric Squircle Pods* (5 node yang dihubungkan garis putus-putus SVG presisi).
3. **Section 3: Value Proposition — Keunggulan & Keamanan (`#keunggulan`)**
   - Bento Grid / 4 Pilar Keunggulan: Kurikulum Individual (IEP), Ruang Terapi Tematik & Steril, Metode Play-Based Terukur, dan Transparansi Evaluasi & Kuota.
4. **Section 4: Kategori Program & Kelompok Usia (`#program-usia`)**
   - 3 Tab Kelompok Usia interaktif (Usia 1–2 Thn *Golden Early*, Usia 3–4 Thn *Preschool Readiness*, Usia 5–7 Thn *School Readiness*), lengkap dengan kartu peran 4 Layanan Inti (*Physiotherapy*, *Sensory Integration*, *Speech Therapy*, *Occupational Therapy*) berdurasi 60 menit/sesi.
5. **Section 5: Preview Interaktif — Cek Gejala & Simulasi Laporan Evaluasi (`#preview-interaktif`)**
   - Layout 2-panel berdampingan:
     - **Panel Kiri:** Screening tanda awal (*Red Flags*) dengan checklist interaktif dan counter gejala teramati.
     - **Panel Kanan (Live Dynamic Preview):** 3 kartu simulasi autentik (1. Contoh Aktivitas di Ruang Terapi, 2. Contoh Kartu Laporan Evaluasi Sesi Terapis, 3. Contoh Home Program 10 Menit/Hari di Rumah) serta tombol auto-apply ke form observasi.
6. **Section 6: Trust, Credibility & Mini-About (`#tim-ahli`)**
   - Profil 4 tenaga ahli medis berizin resmi STR & SIP (`Kak Nadia Putri`, `Kak Bima Pratama`, `Kak Rini Kartika`, `Kak Dinda Lestari`) serta 3 cerita/testimoni hangat dari orang tua pasien (*Bunda Arka*, *Mama Cally*, *Ayah Kenzo*).
7. **Section 7: Pilihan Paket & Biaya / Pricing (`#paket-harga`)**
   - Highlight banner **Sesi Observasi & Asesmen Tumbuh Kembang Awal (1x Kunjungan Pertama — 60 Menit)** berbiaya terjangkau (Rp 275.000) dan 3 Kartu Paket Komitmen Terapi (Paket Reguler 4 sesi, Paket Intensif 8 sesi *Paling Populer*, Paket Optimal 12 sesi).
8. **Section 8: FAQ — Pertanyaan Umum Orang Tua (`#faq`)**
   - DaisyUI Collapsible Accordion berisi pertanyaan penting seputar izin pendampingan, usia minimal, reschedule karena sakit, serta bantuan cepat via chat resepsionis.
9. **Section 9: Final CTA & Footer (`#final-cta` & `#app-footer`)**
   - Kartu konversi ganda: Kolom kiri konsultasi langsung via WhatsApp & info operasional klinik; Kolom kanan form booking observasi terpadu dengan auto-fill dari Section 5 & 7, konfirmasi sukses, dan tombol direct trigger pesan WhatsApp. Ditutup dengan footer publik yang hangat.

---

## 🧪 Panduan Uji Coba untuk Pengguna & Klien

Untuk menguji alur interaktif aplikasi secara menyeluruh, ikuti langkah berikut:

### Skenario 1: Cek Gejala Awal $\rightarrow$ Auto-Fill ke Formulir
1. Buka halaman utama dan gulir ke seksi **Simulasi & Screening** (`#preview-interaktif`).
2. Klik tab kategori, misalnya **Bicara & Komunikasi**.
3. Centang 1 atau 2 gejala (contoh: *"Kosa kata bermakna masih kurang dari 10 kata..."*). Perhatikan 3 kartu preview di panel kanan berubah secara dinamis!
4. Klik tombol **"Gunakan Hasil Screening Ini untuk Daftar Observasi"**.
5. Perhatikan halaman otomatis melakukan *smooth scroll* ke **Formulir Pendaftaran** (`#final-cta`), di mana pilihan layanan langsung tersetting ke **Terapi Wicara** dan catatan keluhan terisi otomatis dengan gejala yang dicentang.

### Skenario 2: Pemilihan Paket Sesi
1. Gulir ke seksi **Paket & Biaya** (`#paket-harga`).
2. Klik tombol **"Pilih Paket Ini"** pada kartu Paket Intensif atau klik **"Booking Sesi Observasi"** pada banner observasi perdana.
3. Halaman akan otomatis menggulir ke formulir booking di `#final-cta` dengan opsi paket telah terpilih.

### Skenario 3: Pengiriman Formulir & Notifikasi WhatsApp
1. Lengkapi field formulir:
   - Nama Anak: `Muhammad Rayyan`
   - Usia: `3 tahun 4 bulan`
   - Nama Orang Tua: `Bunda Sarah`
   - Nomor WhatsApp: `081234567890`
2. Klik **"Kirim Pendaftaran Observasi"**.
3. Notifikasi *toast* sukses akan muncul, dan layar beralih ke kartu ringkasan pendaftaran berisi Kode Booking unik.
4. Klik tombol hijau **"Kirim Konfirmasi via WhatsApp Sekarang"** untuk membuka format pesan yang siap dikirim ke nomor resmi klinik.

---

## 🏗️ Arsitektur Teknis & Struktur Folder

Aplikasi ini dibangun dengan paradigma **Clean Modern Frontend Architecture**:
- **Markup:** Semantik HTML5, aksesibilitas ramah pembaca layar (ARIA), dan *responsive layout*.
- **Styling:** **Tailwind CSS Play CDN** yang diselaraskan dengan tema DaisyUI v4 (`emerald`), dipadukan dengan tipografi Google Fonts *Plus Jakarta Sans* dan efek visual pada `custom.css`.
- **State Management:** **Alpine.js v3** via arsitektur Store terpusat (`$store.landing` dan `$store.ui`).
- **Icons:** **Lucide Icons** dengan *helper debounced refresh* (`window.refreshIcons()`). Bebas dari ikon `sparkles`.
- **Modularity:** Menggunakan standar **ES6 Modules** (`import` / `export`) asli dari peramban tanpa memerlukan kompilasi Node/Webpack.

```text
essa-kids-landing/
│
├── index.html                    # Halaman landing page utama & perakitan seluruh 9 seksi
├── vercel.json                   # Konfigurasi perutean & header hosting statis Vercel
├── README.md                     # Dokumentasi arsitektur dan panduan pengguna
│
└── assets/
    ├── css/
    │   └── custom.css            # Aturan CSS pelengkap (overflow-x clip, hero-pattern, animations)
    │
    ├── images/
    │   └── therapists/           # Aset visual foto profil terapis (fallback squircle CDN & initials)
    │
    └── js/
        ├── app.js                # Main bootstrapper, registrasi layout navbar/footer, Alpine store, & icon helper
        │
        ├── config/
        │   └── tailwind.config.js # Palet brand lembut (Soft Emerald, Warm Amber, Sky Blue), font, & keyframes
        │
        ├── data/
        │   └── landing-content.js # Single Source of Truth (SSOT) data klinik, ageGroups, red flags, & paket
        │
        ├── components/
        │   ├── navbar.js         # Floating pill navbar publik (6 navigasi + CTA ke #final-cta)
        │   └── footer.js         # Footer informatif 4 kolom dengan data dinamis jam & kontak resmi
        │
        └── stores/
            └── booking.store.js  # Alpine store untuk age group tabs, self-screening, reactive booking form, & WA
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
