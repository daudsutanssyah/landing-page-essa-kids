/**
 * ESSA Kids Therapy - Public Header & Sticky Navbar Component
 * -------------------------------------------------------------
 * Komponen navigasi publik yang bersih, ramah orang tua, dan responsif.
 * Didesain 100% untuk pengunjung publik tanpa akses/tautan sistem internal.
 */

export const renderPublicNavbar = () => {
  return `
    <header 
      x-data="{ mobileMenuOpen: false }"
      class="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-200 transition-all shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Bagian Kiri: Brand Identity & Logo -->
          <a href="#" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-2xl p-1 transition-transform">
            <div class="w-11 h-11 rounded-2xl bg-primary/15 text-primary flex items-center justify-center transition-transform group-hover:scale-105 shadow-soft">
              <i data-lucide="baby" class="w-6 h-6"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-lg sm:text-xl font-bold tracking-tight text-slate-800 leading-tight">
                ESSA <span class="text-primary">Kids</span> Therapy
              </span>
              <span class="text-xs font-medium text-slate-500">
                Klinik Tumbuh Kembang Anak
              </span>
            </div>
          </a>

          <!-- Bagian Tengah: Desktop Menu Navigation (hidden lg:flex) -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
            <a 
              href="#cek-gejala" 
              class="px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              Cek Gejala Awal
            </a>
            <a 
              href="#layanan" 
              class="px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              Layanan Terapi
            </a>
            <a 
              href="#keunggulan" 
              class="px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              Keunggulan & Fasilitas
            </a>
            <a 
              href="#paket" 
              class="px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              Alur & Paket
            </a>
            <a 
              href="#terapis" 
              class="px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              Tim Terapis
            </a>
            <a 
              href="#faq" 
              class="px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              FAQ
            </a>
          </nav>

          <!-- Bagian Kanan: CTA Buttons (Desktop) -->
          <div class="hidden lg:flex items-center gap-3">
            <!-- Secondary Button: Chat WhatsApp -->
            <button 
              type="button" 
              @click="$store.landing.openWhatsAppGeneral()"
              class="btn btn-ghost btn-sm rounded-xl gap-2 text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 font-medium"
              title="Konsultasi cepat via WhatsApp"
            >
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
              <span>Chat WhatsApp</span>
            </button>

            <!-- Primary Button: Daftar Observasi -->
            <a 
              href="#form-booking" 
              class="btn btn-primary btn-sm rounded-xl gap-2 font-semibold shadow-soft hover:shadow-soft-hover transition-all"
            >
              <i data-lucide="calendar" class="w-4 h-4"></i>
              <span>Daftar Observasi</span>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle Button (lg:hidden) -->
          <div class="flex items-center gap-2 lg:hidden">
            <button 
              type="button" 
              @click="$store.landing.openWhatsAppGeneral()"
              class="btn btn-ghost btn-square btn-sm rounded-xl text-emerald-700 hover:bg-emerald-50"
              title="Chat WhatsApp"
            >
              <i data-lucide="message-circle" class="w-5 h-5"></i>
            </button>

            <button 
              type="button" 
              @click="mobileMenuOpen = !mobileMenuOpen; if (mobileMenuOpen && window.refreshIcons) window.refreshIcons();"
              class="btn btn-ghost btn-square btn-sm rounded-xl text-slate-700 hover:bg-base-200"
              :aria-expanded="mobileMenuOpen" 
              aria-label="Toggle menu navigasi"
            >
              <i data-lucide="menu" class="w-6 h-6" x-show="!mobileMenuOpen"></i>
              <i data-lucide="x" class="w-6 h-6" x-show="mobileMenuOpen" x-cloak></i>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Navigation Menu (lg:hidden) -->
      <div 
        x-show="mobileMenuOpen" 
        x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 -translate-y-2"
        x-transition:enter-end="opacity-100 translate-y-0"
        x-transition:leave="transition ease-in duration-150"
        x-transition:leave-start="opacity-100 translate-y-0"
        x-transition:leave-end="opacity-0 -translate-y-2"
        @click.away="mobileMenuOpen = false"
        x-cloak
        class="lg:hidden border-t border-base-200 bg-base-100/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl space-y-3"
      >
        <div class="grid grid-cols-1 gap-1">
          <a 
            href="#cek-gejala" 
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
          >
            <i data-lucide="sparkles" class="w-4 h-4 text-primary"></i>
            <span>Cek Gejala Awal</span>
          </a>
          <a 
            href="#layanan" 
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
          >
            <i data-lucide="activity" class="w-4 h-4 text-info"></i>
            <span>Layanan Terapi</span>
          </a>
          <a 
            href="#keunggulan" 
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
          >
            <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
            <span>Keunggulan & Fasilitas</span>
          </a>
          <a 
            href="#paket" 
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
          >
            <i data-lucide="tag" class="w-4 h-4 text-warning"></i>
            <span>Alur & Paket Terapi</span>
          </a>
          <a 
            href="#terapis" 
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
          >
            <i data-lucide="users" class="w-4 h-4 text-secondary"></i>
            <span>Tim Terapis Tersertifikasi</span>
          </a>
          <a 
            href="#faq" 
            @click="mobileMenuOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors"
          >
            <i data-lucide="help-circle" class="w-4 h-4 text-slate-400"></i>
            <span>Pertanyaan Umum (FAQ)</span>
          </a>
        </div>

        <div class="pt-3 border-t border-base-200 flex flex-col gap-2">
          <a 
            href="#form-booking" 
            @click="mobileMenuOpen = false"
            class="btn btn-primary w-full rounded-xl gap-2 font-semibold shadow-soft"
          >
            <i data-lucide="calendar" class="w-4 h-4"></i>
            <span>Daftar Observasi & Konsultasi</span>
          </a>
          <button 
            type="button" 
            @click="mobileMenuOpen = false; $store.landing.openWhatsAppGeneral()"
            class="btn btn-outline btn-sm w-full rounded-xl gap-2 text-emerald-700 border-emerald-300 hover:bg-emerald-50"
          >
            <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
            <span>Tanya Admin via WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  `;
};
