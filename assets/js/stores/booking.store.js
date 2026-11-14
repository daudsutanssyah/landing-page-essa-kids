/**
 * ESSA Kids Therapy - Booking & Interactive Landing Alpine Store
 * -------------------------------------------------------------
 * Menyediakan Single Source of Truth interaktif untuk:
 * - Data konten landing page (impor dari LANDING_CONTENT)
 * - Tab Kelompok Usia (Interactive Age Groups)
 * - Interaksi Cek Gejala Awal & Simulasi Laporan Evaluasi
 * - Formulir Pendaftaran Observasi & Konsultasi Anak (Section 9: Final CTA)
 * - Integrasi WhatsApp & penyimpanan simulasi LocalStorage
 */

import { LANDING_CONTENT } from '../data/landing-content.js';

export const createBookingStore = () => ({
  // =========================================================================
  // 1. State Utama
  // =========================================================================
  content: LANDING_CONTENT,

  // ID Kelompok Usia aktif pada tab Section 4 (Kategori Program & Usia)
  activeAgeGroupId: LANDING_CONTENT.ageGroups[0]?.id || 'age-1-2',

  // ID Kategori Gejala Awal aktif pada Section 5 (Preview Interaktif)
  activeRedFlagId: LANDING_CONTENT.redFlags[0]?.id || 'speech',

  // Daftar gejala yang dicentang oleh orang tua saat self-screening
  selectedChecklist: [],

  // Data input formulir Pendaftaran Observasi & Konsultasi Awal (#final-cta)
  bookingForm: {
    childName: '',
    childNickname: '',
    childAge: '',
    gender: 'L',
    parentName: '',
    parentPhone: '',
    selectedServiceId: 'SPEECH',
    selectedPackageId: 'PKG-REGULER', // Cocok dengan LANDING_CONTENT.packages (PKG-REGULER, PKG-INTENSIF, PKG-OPTIMAL, OBS-01)
    preferredSchedule: 'Pagi (08:00 - 11:30 WIB)',
    concernNotes: ''
  },

  // Status submission formulir
  bookingSubmitted: false,
  lastSubmittedSummary: null,

  // =========================================================================
  // 2. Getters
  // =========================================================================
  
  /**
   * Mengembalikan objek kelompok usia yang sedang aktif
   */
  get activeAgeGroup() {
    return (
      this.content.ageGroups.find(ag => ag.id === this.activeAgeGroupId) ||
      this.content.ageGroups[0]
    );
  },

  /**
   * Mengembalikan objek kategori Red Flag yang sedang aktif (beserta interactivePreview)
   */
  get activeRedFlag() {
    return (
      this.content.redFlags.find(rf => rf.id === this.activeRedFlagId) ||
      this.content.redFlags[0]
    );
  },

  /**
   * Mengembalikan detail objek layanan yang sedang dipilih pada formulir
   */
  get selectedService() {
    return (
      this.content.services.find(s => s.id === this.bookingForm.selectedServiceId) ||
      this.content.services[0]
    );
  },

  /**
   * Mengembalikan detail objek paket yang sedang dipilih pada formulir
   */
  get selectedPackage() {
    if (this.bookingForm.selectedPackageId === 'OBS-01' || this.bookingForm.selectedPackageId === 'ASSESSMENT-01') {
      return {
        id: this.content.initialAssessment.id,
        name: this.content.initialAssessment.name,
        sessions: 1,
        priceFormatted: this.content.initialAssessment.priceFormatted
      };
    }

    return (
      this.content.packages.find(
        p => p.id === this.bookingForm.selectedPackageId || 
             p.code === this.bookingForm.selectedPackageId ||
             p.id === 'PKG-' + this.bookingForm.selectedPackageId
      ) || this.content.packages[0]
    );
  },

  // =========================================================================
  // 3. Methods Interaktif: Kelompok Usia (Section 4)
  // =========================================================================

  /**
   * Mengganti tab kelompok usia yang aktif pada Section 4
   */
  selectAgeGroup(id) {
    this.activeAgeGroupId = id;
    if (window.refreshIcons) {
      window.refreshIcons();
    }
  },

  // =========================================================================
  // 4. Methods Interaktif: Self-Screening & Preview Interaktif (Section 5)
  // =========================================================================

  /**
   * Mengganti kategori gejala yang aktif pada Section 5 (Preview Interaktif)
   */
  selectRedFlagCategory(id) {
    this.activeRedFlagId = id;
    if (window.refreshIcons) {
      window.refreshIcons();
    }
  },

  /**
   * Menambah atau menghapus gejala yang dicentang oleh orang tua
   */
  toggleSignCheck(signText) {
    const index = this.selectedChecklist.indexOf(signText);
    if (index > -1) {
      this.selectedChecklist.splice(index, 1);
    } else {
      this.selectedChecklist.push(signText);
    }
  },

  /**
   * Cek apakah suatu gejala sedang tercentang
   */
  isSignChecked(signText) {
    return this.selectedChecklist.includes(signText);
  },

  /**
   * Mengosongkan daftar centang gejala
   */
  clearChecklist() {
    this.selectedChecklist = [];
  },

  /**
   * Menerapkan rekomendasi layanan dari hasil cek gejala ke formulir booking di #final-cta
   */
  applyRecommendationToForm(serviceId) {
    if (serviceId) {
      this.bookingForm.selectedServiceId = serviceId;
    }

    // Jika ada gejala yang dicentang, salin ke catatan keluhan
    if (this.selectedChecklist.length > 0) {
      const summaryNotes = `Gejala yang teramati pada cek mandiri:\n• ${this.selectedChecklist.join('\n• ')}`;
      this.bookingForm.concernNotes = summaryNotes;
    }

    // Tampilkan notifikasi toast ramah
    const uiStore = window.Alpine && window.Alpine.store('ui');
    if (uiStore && uiStore.showToast) {
      uiStore.showToast('Rekomendasi layanan diterapkan ke formulir pendaftaran.', 'info');
    }

    // Smooth scroll ke formulir pendaftaran di #final-cta
    this.scrollToSection('#final-cta');

    // Fokus ke input nama anak setelah scroll
    setTimeout(() => {
      const childInput = document.getElementById('input-child-name');
      if (childInput) childInput.focus();
    }, 450);
  },

  // =========================================================================
  // 5. Methods Interaktif: Paket Terapi & Asesmen Awal (Section 7)
  // =========================================================================

  /**
   * Memilih paket terapi dari kartu paket dan membawa pengguna ke form di #final-cta
   */
  selectPackageForBooking(packageId) {
    // Normalisasi ID paket
    let targetId = packageId;
    if (packageId === 'PKG_REG_4' || packageId === 'PKG-04') targetId = 'PKG-REGULER';
    if (packageId === 'PKG_INT_8' || packageId === 'PKG-08') targetId = 'PKG-INTENSIF';
    if (packageId === 'PKG_OPT_12' || packageId === 'PKG-12') targetId = 'PKG-OPTIMAL';
    if (packageId === 'OBS-01' || packageId === 'ASSESSMENT-01') targetId = 'OBS-01';

    this.bookingForm.selectedPackageId = targetId;

    const uiStore = window.Alpine && window.Alpine.store('ui');
    if (uiStore && uiStore.showToast) {
      uiStore.showToast('Paket terapi berhasil dipilih. Silakan lengkapi data si kecil.', 'info');
    }

    this.scrollToSection('#final-cta');
  },

  /**
   * Memilih Sesi Observasi & Asesmen Perdana (Highlight Banner di Section 7)
   */
  selectInitialAssessment() {
    this.bookingForm.selectedPackageId = 'OBS-01';
    
    const uiStore = window.Alpine && window.Alpine.store('ui');
    if (uiStore && uiStore.showToast) {
      uiStore.showToast('Sesi Observasi & Asesmen Awal dipilih. Silakan lengkapi formulir.', 'info');
    }

    this.scrollToSection('#final-cta');

    setTimeout(() => {
      const childInput = document.getElementById('input-child-name');
      if (childInput) childInput.focus();
    }, 450);
  },

  // =========================================================================
  // 6. Validasi & Submit Formulir Pendaftaran (Section 9: Final CTA)
  // =========================================================================

  /**
   * Validasi & submit formulir pendaftaran observasi
   */
  submitBookingForm() {
    const uiStore = window.Alpine && window.Alpine.store('ui');

    // Validasi field wajib
    if (!this.bookingForm.childName?.trim()) {
      if (uiStore) uiStore.showToast('Mohon masukkan nama lengkap si kecil.', 'warning');
      const input = document.getElementById('input-child-name');
      if (input) input.focus();
      return false;
    }

    if (!this.bookingForm.parentName?.trim()) {
      if (uiStore) uiStore.showToast('Mohon masukkan nama Ayah atau Bunda.', 'warning');
      const input = document.getElementById('input-parent-name');
      if (input) input.focus();
      return false;
    }

    if (!this.bookingForm.parentPhone?.trim()) {
      if (uiStore) uiStore.showToast('Mohon cantumkan nomor WhatsApp yang aktif untuk konfirmasi jadwal.', 'warning');
      const input = document.getElementById('input-parent-phone');
      if (input) input.focus();
      return false;
    }

    // Susun ringkasan pendaftaran
    const serviceInfo = this.selectedService;
    const packageInfo = this.selectedPackage;

    const newBooking = {
      bookingCode: 'BK-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      childName: this.bookingForm.childName.trim(),
      childNickname: this.bookingForm.childNickname.trim() || this.bookingForm.childName.trim(),
      childAge: this.bookingForm.childAge.trim() || '-',
      gender: this.bookingForm.gender === 'P' ? 'Perempuan' : 'Laki-laki',
      genderCode: this.bookingForm.gender,
      parentName: this.bookingForm.parentName.trim(),
      parentPhone: this.bookingForm.parentPhone.trim(),
      selectedServiceId: this.bookingForm.selectedServiceId,
      serviceTitle: serviceInfo?.title || this.bookingForm.selectedServiceId,
      serviceRoom: serviceInfo?.room || 'Ruang Terapi',
      selectedPackageId: this.bookingForm.selectedPackageId,
      packageName: packageInfo?.name || 'Paket Terapi',
      packageSessions: packageInfo?.sessions || 1,
      packagePrice: packageInfo?.priceFormatted || '-',
      preferredSchedule: this.bookingForm.preferredSchedule,
      concernNotes: this.bookingForm.concernNotes.trim() || 'Tidak ada catatan tambahan',
      checklistSigns: [...this.selectedChecklist]
    };

    // Simpan ke localStorage sebagai simulasi prototipe
    try {
      const storageKey = 'essa_public_bookings';
      const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
      existing.unshift(newBooking);
      localStorage.setItem(storageKey, JSON.stringify(existing));
    } catch (e) {
      console.warn('Gagal menyimpan pendaftaran ke localStorage:', e);
    }

    // Update state tampilan sukses
    this.bookingSubmitted = true;
    this.lastSubmittedSummary = newBooking;

    if (uiStore) {
      uiStore.showToast('Pendaftaran observasi berhasil dikirim! Tim kami akan segera menghubungi Ayah/Bunda.', 'success');
    }

    if (window.refreshIcons) {
      window.refreshIcons();
    }

    // Scroll ke bagian pesan sukses di #final-cta
    this.scrollToSection('#final-cta');
    return true;
  },

  /**
   * Reset form untuk mendaftarkan anak lain atau mengulang
   */
  resetBookingForm() {
    this.bookingForm = {
      childName: '',
      childNickname: '',
      childAge: '',
      gender: 'L',
      parentName: '',
      parentPhone: '',
      selectedServiceId: 'SPEECH',
      selectedPackageId: 'PKG-REGULER',
      preferredSchedule: 'Pagi (08:00 - 11:30 WIB)',
      concernNotes: ''
    };
    this.selectedChecklist = [];
    this.bookingSubmitted = false;
    this.lastSubmittedSummary = null;

    if (window.refreshIcons) {
      window.refreshIcons();
    }
  },

  // =========================================================================
  // 7. Integrasi WhatsApp & Tautan Bantuan
  // =========================================================================

  /**
   * Mengirim ringkasan pendaftaran langsung ke WhatsApp resmi klinik
   */
  sendBookingViaWhatsApp() {
    const summary = this.lastSubmittedSummary || this.bookingForm;
    const phone = this.content.clinicInfo.whatsappNumber;

    const messageLines = [
      `*KONFIRMASI PENDAFTARAN OBSERVASI ANAK*`,
      `*ESSA Kids Therapy*`,
      `---------------------------------------`,
      summary.bookingCode ? `*Kode:* ${summary.bookingCode}` : '',
      `*Nama Anak:* ${summary.childName || this.bookingForm.childName} (${summary.childAge || this.bookingForm.childAge} thn / ${summary.gender || (this.bookingForm.gender === 'P' ? 'Perempuan' : 'Laki-laki')})`,
      `*Nama Orang Tua:* ${summary.parentName || this.bookingForm.parentName}`,
      `*No. WhatsApp:* ${summary.parentPhone || this.bookingForm.parentPhone}`,
      `*Layanan Dipilih:* ${summary.serviceTitle || this.selectedService.title}`,
      `*Pilihan Paket:* ${summary.packageName || this.selectedPackage.name}`,
      `*Waktu Preferensi:* ${summary.preferredSchedule || this.bookingForm.preferredSchedule}`,
      `---------------------------------------`,
      `*Catatan Keluhan / Observasi:*`,
      `${summary.concernNotes || this.bookingForm.concernNotes || '-'}`,
      `---------------------------------------`,
      `Mohon info ketersediaan slot jadwal dan konfirmasi lebih lanjut. Terima kasih!`
    ].filter(Boolean);

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  },

  /**
   * Membuka obrolan WhatsApp konsultasi umum dengan resepsionis klinik
   */
  openWhatsAppGeneral() {
    const phone = this.content.clinicInfo.whatsappNumber;
    const message = this.content.clinicInfo.defaultWaMessage;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  },

  /**
   * Helper smooth scroll ke elemen ID tertentu
   */
  scrollToSection(selector) {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
