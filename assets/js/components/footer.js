/**
 * ESSA Kids Therapy - Public Footer Component
 * -------------------------------------------------------------
 * Komponen footer publik yang informatif, hangat, dan ramah keluarga.
 * Menampilkan ringkasan layanan, panduan orang tua, serta kontak resmi.
 */

import { LANDING_CONTENT } from '../data/landing-content.js';

export const renderPublicFooter = () => {
  const { clinicInfo } = LANDING_CONTENT;
  const currentYear = new Date().getFullYear();

  return `
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Grid 4 Kolom Informasi -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <!-- Kolom 1: Tentang ESSA Kids (lg:col-span-4) -->
          <div class="lg:col-span-4 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <i data-lucide="baby" class="w-6 h-6"></i>
              </div>
              <div>
                <span class="text-xl font-bold tracking-tight text-white leading-tight">
                  ESSA <span class="text-emerald-400">Kids</span> Therapy
                </span>
                <span class="block text-xs text-slate-400 font-medium">Klinik Tumbuh Kembang Anak</span>
              </div>
            </div>

            <p class="text-sm text-slate-400 leading-relaxed">
              Mendampingi langkah kecil buah hati menuju kemandirian yang percaya diri melalui metode stimulasi terarah berbasis bermain (<em>play-based therapy</em>) dalam lingkungan yang aman, hangat, dan penuh kasih.
            </p>

            <!-- Badges Komitmen Klinis -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                100% Terapis STR Resmi
              </span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-sky-950/80 text-sky-300 border border-sky-800/60">
                <i data-lucide="award" class="w-3.5 h-3.5"></i>
                Play-Based Terukur
              </span>
            </div>
          </div>

          <!-- Kolom 2: Layanan Terapi Inti (lg:col-span-3) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-white">Layanan Terapi Kami</h4>
            <ul class="space-y-2.5 text-sm">
              <li>
                <a href="#layanan" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <i data-lucide="activity" class="w-4 h-4 text-sky-400"></i>
                  <span>Fisioterapi Anak (Physiotherapy)</span>
                </a>
              </li>
              <li>
                <a href="#layanan" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <i data-lucide="compass" class="w-4 h-4 text-purple-400"></i>
                  <span>Sensori Integrasi (Sensory Integration)</span>
                </a>
              </li>
              <li>
                <a href="#layanan" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <i data-lucide="message-circle" class="w-4 h-4 text-amber-400"></i>
                  <span>Terapi Wicara (Speech Therapy)</span>
                </a>
              </li>
              <li>
                <a href="#layanan" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <i data-lucide="puzzle" class="w-4 h-4 text-emerald-400"></i>
                  <span>Terapi Okupasi (Occupational Therapy)</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Kolom 3: Informasi & Panduan Orang Tua (lg:col-span-2) -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-white">Panduan Orang Tua</h4>
            <ul class="space-y-2.5 text-sm">
              <li>
                <a href="#cek-gejala" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-emerald-500"></i>
                  <span>Cek Tanda Awal</span>
                </a>
              </li>
              <li>
                <a href="#keunggulan" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-emerald-500"></i>
                  <span>Fasilitas Ruangan</span>
                </a>
              </li>
              <li>
                <a href="#paket" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-emerald-500"></i>
                  <span>Alur & Paket Sesi</span>
                </a>
              </li>
              <li>
                <a href="#terapis" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-emerald-500"></i>
                  <span>Profil Tim Terapis</span>
                </a>
              </li>
              <li>
                <a href="#faq" class="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-emerald-500"></i>
                  <span>Tanya Jawab (FAQ)</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Kolom 4: Lokasi & Jam Operasional (lg:col-span-3) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-white">Lokasi & Kontak</h4>
            
            <div class="space-y-3 text-sm text-slate-400">
              <div class="flex items-start gap-2.5">
                <i data-lucide="map-pin" class="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0"></i>
                <span>${clinicInfo.address.full}</span>
              </div>
              
              <div class="flex items-start gap-2.5">
                <i data-lucide="clock" class="w-4 h-4 text-amber-400 mt-1 flex-shrink-0"></i>
                <div>
                  <span class="block text-slate-300 font-medium">${clinicInfo.operatingHours}</span>
                  <span class="block text-xs text-slate-500">${clinicInfo.operatingDaysNotice}</span>
                </div>
              </div>

              <div class="flex items-center gap-2.5">
                <i data-lucide="phone" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
                <a 
                  href="https://wa.me/${clinicInfo.whatsappNumber}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-emerald-400 hover:underline font-medium"
                >
                  ${clinicInfo.whatsappFormatted}
                </a>
              </div>
            </div>

            <div class="pt-2">
              <a 
                href="${clinicInfo.googleMapsUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn btn-outline btn-xs rounded-lg text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-slate-600 gap-1.5"
              >
                <i data-lucide="map" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>Buka Petunjuk Arah (Maps)</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Bottom Bar: Hak Cipta & Salam Kehangatan -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; ${currentYear} <strong>${clinicInfo.name}</strong>. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p class="flex items-center gap-1.5 text-slate-400">
            <span>Didedikasikan dengan</span>
            <i data-lucide="heart" class="w-3.5 h-3.5 text-rose-500 fill-rose-500"></i>
            <span>untuk keluarga & tumbuh kembang anak Indonesia.</span>
          </p>
        </div>

      </div>
    </footer>
  `;
};
