/**
 * ESSA Kids Therapy - Public Header & Sticky Pill Navbar Component
 * -----------------------------------------------------------------
 * Komponen navigasi publik bergaya Floating Pill Track yang ringkas,
 * proporsional, dan sleek:
 * 1. Bagian Kiri: Brand Identity & Logo Ringkas
 * 2. Bagian Tengah: Floating Pill Navigation Track Ramping (6 Navigasi)
 * 3. Bagian Kanan: Pill CTA Button Sleek & Circular WhatsApp
 */

export const renderPublicNavbar = () => {
  return `
    <header 
      x-data="{ mobileMenuOpen: false, activeNav: '#keunggulan' }"
      class="sticky top-0 z-50 w-full bg-base-100/90 backdrop-blur-md border-b border-base-200 transition-all shadow-xs"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- ==============================================================
               1. BAGIAN KIRI: Brand Identity & Logo (Ringkas & Proporsional)
               ============================================================== -->
          <a href="#" class="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl transition-transform">
            <img 
              src="./assets/images/logo-essa.webp" 
              alt="Logo ESSA Kids Therapy" 
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain ring-1 ring-slate-200/80 shadow-xs transition-transform group-hover:scale-105"
              loading="eager"
            />
            <div class="flex flex-col">
              <span class="text-sm sm:text-base font-extrabold tracking-tight text-slate-800 leading-tight">
                ESSA <span class="text-primary">Kids</span> Therapy
              </span>
              <span class="text-[9px] sm:text-[10px] font-medium text-slate-500 -mt-0.5">
                Klinik Tumbuh Kembang Anak
              </span>
            </div>
          </a>

          <!-- ==============================================================
               2. BAGIAN TENGAH: Floating Pill Navigation Track (Desktop - Sleek & Ramping)
               ============================================================== -->
          <nav 
            class="hidden lg:flex items-center p-1 border border-base-300/80 bg-base-200/60 backdrop-blur-md rounded-full gap-0.5 shadow-xs" 
            aria-label="Navigasi Utama"
          >
            <!-- 1. Keunggulan -->
            <a 
              href="#keunggulan" 
              @click="activeNav = '#keunggulan'"
              :class="activeNav === '#keunggulan' 
                ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' 
                : 'text-slate-600 hover:text-primary border border-transparent'"
              class="text-[11px] xl:text-xs px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap"
            >
              Keunggulan
            </a>

            <!-- 2. Program & Usia -->
            <a 
              href="#program-usia" 
              @click="activeNav = '#program-usia'"
              :class="activeNav === '#program-usia' 
                ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' 
                : 'text-slate-600 hover:text-primary border border-transparent'"
              class="text-[11px] xl:text-xs px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap"
            >
              Program & Usia
            </a>

            <!-- 3. Simulasi & Screening -->
            <a 
              href="#preview-interaktif" 
              @click="activeNav = '#preview-interaktif'"
              :class="activeNav === '#preview-interaktif' 
                ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' 
                : 'text-slate-600 hover:text-primary border border-transparent'"
              class="text-[11px] xl:text-xs px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap"
            >
              Simulasi & Screening
            </a>

            <!-- 4. Tim Ahli -->
            <a 
              href="#tim-ahli" 
              @click="activeNav = '#tim-ahli'"
              :class="activeNav === '#tim-ahli' 
                ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' 
                : 'text-slate-600 hover:text-primary border border-transparent'"
              class="text-[11px] xl:text-xs px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap"
            >
              Tim Ahli
            </a>

            <!-- 5. Paket & Biaya -->
            <a 
              href="#paket-harga" 
              @click="activeNav = '#paket-harga'"
              :class="activeNav === '#paket-harga' 
                ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' 
                : 'text-slate-600 hover:text-primary border border-transparent'"
              class="text-[11px] xl:text-xs px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap"
            >
              Paket & Biaya
            </a>

            <!-- 6. FAQ -->
            <a 
              href="#faq" 
              @click="activeNav = '#faq'"
              :class="activeNav === '#faq' 
                ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' 
                : 'text-slate-600 hover:text-primary border border-transparent'"
              class="text-[11px] xl:text-xs px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>

          <!-- ==============================================================
               3. BAGIAN KANAN: 1 Tombol Chat/Konsultasi WhatsApp (Soft Outline)
               ============================================================== -->
          <div class="hidden lg:flex items-center">
            <button 
              type="button" 
              @click="$store.landing.openWhatsAppGeneral()"
              class="btn btn-outline border-emerald-300 hover:border-emerald-500 bg-emerald-50/60 hover:bg-emerald-100/80 text-emerald-800 rounded-full px-3.5 xl:px-4 py-1.5 h-auto min-h-0 text-xs font-semibold flex items-center gap-2 transition-all shadow-xs group"
              title="Konsultasi Cepat via WhatsApp"
              aria-label="Konsultasi Cepat via WhatsApp"
            >
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600 transition-transform group-hover:scale-110"></i>
              <span>Konsultasi WhatsApp</span>
            </button>
          </div>

          <!-- ==============================================================
               4. MOBILE ACTION BUTTONS & TOGGLE (lg:hidden)
               ============================================================== -->
          <div class="flex items-center gap-2 lg:hidden">
            <button 
              type="button" 
              @click="$store.landing.openWhatsAppGeneral()"
              class="px-2.5 py-1.5 rounded-full bg-emerald-50/70 text-emerald-800 border border-emerald-300 flex items-center gap-1.5 text-xs font-semibold hover:bg-emerald-100/70 shadow-xs"
              title="Chat WhatsApp"
              aria-label="Chat WhatsApp"
            >
              <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
              <span class="text-[11px]">WhatsApp</span>
            </button>

            <button 
              type="button" 
              @click="mobileMenuOpen = !mobileMenuOpen; if (mobileMenuOpen && window.refreshIcons) window.refreshIcons();"
              class="w-8.5 h-8.5 rounded-full bg-base-200/80 text-slate-700 border border-base-300 flex items-center justify-center hover:bg-base-200 transition-colors"
              :aria-expanded="mobileMenuOpen" 
              aria-label="Toggle menu navigasi"
            >
              <i data-lucide="menu" class="w-4 h-4" x-show="!mobileMenuOpen"></i>
              <i data-lucide="x" class="w-4 h-4" x-show="mobileMenuOpen" x-cloak></i>
            </button>
          </div>

        </div>
      </div>

      <!-- ==============================================================
           5. MOBILE DROPDOWN NAVIGATION MENU (lg:hidden)
           ============================================================== -->
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
        class="lg:hidden border-t border-base-200 bg-base-100/98 backdrop-blur-lg px-4 pt-3 pb-5 shadow-xl space-y-2.5"
      >
        <!-- Track Kapsul Mobile Menu -->
        <div class="p-1 border border-base-300 bg-base-200/50 rounded-2xl space-y-0.5">
          <!-- 1. Keunggulan -->
          <a 
            href="#keunggulan" 
            @click="activeNav = '#keunggulan'; mobileMenuOpen = false"
            :class="activeNav === '#keunggulan' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-2.5 px-3.5 py-2 text-xs sm:text-sm rounded-xl transition-all"
          >
            <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
            <span>Keunggulan & Fasilitas</span>
          </a>

          <!-- 2. Program & Usia -->
          <a 
            href="#program-usia" 
            @click="activeNav = '#program-usia'; mobileMenuOpen = false"
            :class="activeNav === '#program-usia' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-2.5 px-3.5 py-2 text-xs sm:text-sm rounded-xl transition-all"
          >
            <i data-lucide="compass" class="w-4 h-4 text-sky-600"></i>
            <span>Program & Kelompok Usia</span>
          </a>

          <!-- 3. Simulasi & Screening -->
          <a 
            href="#preview-interaktif" 
            @click="activeNav = '#preview-interaktif'; mobileMenuOpen = false"
            :class="activeNav === '#preview-interaktif' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-2.5 px-3.5 py-2 text-xs sm:text-sm rounded-xl transition-all"
          >
            <i data-lucide="clipboard-check" class="w-4 h-4 text-primary"></i>
            <span>Simulasi & Screening</span>
          </a>

          <!-- 4. Tim Ahli -->
          <a 
            href="#tim-ahli" 
            @click="activeNav = '#tim-ahli'; mobileMenuOpen = false"
            :class="activeNav === '#tim-ahli' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-2.5 px-3.5 py-2 text-xs sm:text-sm rounded-xl transition-all"
          >
            <i data-lucide="users" class="w-4 h-4 text-purple-600"></i>
            <span>Tim Ahli & Testimoni</span>
          </a>

          <!-- 5. Paket & Biaya -->
          <a 
            href="#paket-harga" 
            @click="activeNav = '#paket-harga'; mobileMenuOpen = false"
            :class="activeNav === '#paket-harga' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-2.5 px-3.5 py-2 text-xs sm:text-sm rounded-xl transition-all"
          >
            <i data-lucide="tag" class="w-4 h-4 text-amber-600"></i>
            <span>Paket & Biaya Terapi</span>
          </a>

          <!-- 6. FAQ -->
          <a 
            href="#faq" 
            @click="activeNav = '#faq'; mobileMenuOpen = false"
            :class="activeNav === '#faq' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-2.5 px-3.5 py-2 text-xs sm:text-sm rounded-xl transition-all"
          >
            <i data-lucide="help-circle" class="w-4 h-4 text-slate-400"></i>
            <span>Pertanyaan Umum (FAQ)</span>
          </a>
        </div>

        <!-- Tombol Aksi Bantuan Cepat Mobile -->
        <div class="pt-1">
          <button 
            type="button" 
            @click="mobileMenuOpen = false; $store.landing.openWhatsAppGeneral()"
            class="btn btn-outline btn-sm w-full rounded-full py-2 h-auto gap-2 text-emerald-800 bg-emerald-50/70 border-emerald-300 hover:bg-emerald-100 text-xs font-semibold shadow-xs"
          >
            <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
            <span>Konsultasi Cepat via WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  `;
};
