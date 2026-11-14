/**
 * ESSA Kids Therapy - Public Header & Sticky Pill Navbar Component
 * -----------------------------------------------------------------
 * Komponen navigasi publik bergaya Floating Pill Track yang modern,
 * bersih, dan ramah orang tua dengan 3 bagian sejajar:
 * 1. Bagian Kiri: Brand Identity & Logo
 * 2. Bagian Tengah: Floating Pill Navigation Track (6 Navigasi Utama)
 * 3. Bagian Kanan: Pill CTA Button ("Daftar Observasi" -> #final-cta) & Circular WhatsApp
 */

export const renderPublicNavbar = () => {
  return `
    <header 
      x-data="{ mobileMenuOpen: false, activeNav: '#keunggulan' }"
      class="sticky top-0 z-50 w-full bg-base-100/90 backdrop-blur-md border-b border-base-200 transition-all shadow-xs"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- ==============================================================
               1. BAGIAN KIRI: Brand Identity & Logo
               ============================================================== -->
          <a href="#" class="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl transition-transform">
            <div class="text-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <i data-lucide="baby" class="w-8 h-8"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-lg sm:text-xl font-bold tracking-tight text-slate-800 leading-tight">
                ESSA <span class="text-primary">Kids</span> Therapy
              </span>
              <span class="text-[11px] font-medium text-slate-500 -mt-0.5">
                Klinik Tumbuh Kembang Anak
              </span>
            </div>
          </a>

          <!-- ==============================================================
               2. BAGIAN TENGAH: Floating Pill Navigation Track (Desktop)
               ============================================================== -->
          <nav 
            class="hidden lg:flex items-center p-1.5 border border-base-300 bg-base-200/70 backdrop-blur-md rounded-full gap-1 shadow-xs" 
            aria-label="Navigasi Utama"
          >
            <!-- 1. Keunggulan -->
            <a 
              href="#keunggulan" 
              @click="activeNav = '#keunggulan'"
              :class="activeNav === '#keunggulan' 
                ? 'bg-base-100 text-primary font-semibold shadow-sm border border-base-300/80' 
                : 'text-base-content/70 hover:text-primary border border-transparent'"
              class="text-xs xl:text-sm px-4 xl:px-4.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Keunggulan
            </a>

            <!-- 2. Program & Usia -->
            <a 
              href="#program-usia" 
              @click="activeNav = '#program-usia'"
              :class="activeNav === '#program-usia' 
                ? 'bg-base-100 text-primary font-semibold shadow-sm border border-base-300/80' 
                : 'text-base-content/70 hover:text-primary border border-transparent'"
              class="text-xs xl:text-sm px-4 xl:px-4.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Program & Usia
            </a>

            <!-- 3. Simulasi & Screening -->
            <a 
              href="#preview-interaktif" 
              @click="activeNav = '#preview-interaktif'"
              :class="activeNav === '#preview-interaktif' 
                ? 'bg-base-100 text-primary font-semibold shadow-sm border border-base-300/80' 
                : 'text-base-content/70 hover:text-primary border border-transparent'"
              class="text-xs xl:text-sm px-4 xl:px-4.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Simulasi & Screening
            </a>

            <!-- 4. Tim Ahli -->
            <a 
              href="#tim-ahli" 
              @click="activeNav = '#tim-ahli'"
              :class="activeNav === '#tim-ahli' 
                ? 'bg-base-100 text-primary font-semibold shadow-sm border border-base-300/80' 
                : 'text-base-content/70 hover:text-primary border border-transparent'"
              class="text-xs xl:text-sm px-4 xl:px-4.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Tim Ahli
            </a>

            <!-- 5. Paket & Biaya -->
            <a 
              href="#paket-harga" 
              @click="activeNav = '#paket-harga'"
              :class="activeNav === '#paket-harga' 
                ? 'bg-base-100 text-primary font-semibold shadow-sm border border-base-300/80' 
                : 'text-base-content/70 hover:text-primary border border-transparent'"
              class="text-xs xl:text-sm px-4 xl:px-4.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Paket & Biaya
            </a>

            <!-- 6. FAQ -->
            <a 
              href="#faq" 
              @click="activeNav = '#faq'"
              :class="activeNav === '#faq' 
                ? 'bg-base-100 text-primary font-semibold shadow-sm border border-base-300/80' 
                : 'text-base-content/70 hover:text-primary border border-transparent'"
              class="text-xs xl:text-sm px-4 xl:px-4.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>

          <!-- ==============================================================
               3. BAGIAN KANAN: Pill CTA Button & Circular WhatsApp Button
               ============================================================== -->
          <div class="hidden lg:flex items-center gap-2.5">
            <!-- Secondary Button: Circular Icon-Only Chat WhatsApp -->
            <button 
              type="button" 
              @click="$store.landing.openWhatsAppGeneral()"
              class="w-10 h-10 rounded-full bg-base-200/80 hover:bg-emerald-50 text-emerald-700 border border-base-300/80 hover:border-emerald-300 flex items-center justify-center transition-all shadow-xs group"
              title="Chat WhatsApp Konsultasi"
              aria-label="Chat WhatsApp Konsultasi"
            >
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600 transition-transform group-hover:scale-110"></i>
            </button>

            <!-- Primary Button: Pill CTA with Arrow Circle -->
            <a 
              href="#final-cta" 
              class="group pl-5 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-600 text-primary-content font-semibold text-xs xl:text-sm flex items-center gap-3 shadow-soft hover:shadow-soft-hover transition-all hover:brightness-105"
            >
              <span>Daftar Observasi</span>
              <div class="w-8 h-8 rounded-full bg-base-100 text-primary flex items-center justify-center shadow-xs transition-transform group-hover:translate-x-0.5">
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </div>
            </a>
          </div>

          <!-- ==============================================================
               4. MOBILE ACTION BUTTONS & TOGGLE (lg:hidden)
               ============================================================== -->
          <div class="flex items-center gap-2 lg:hidden">
            <button 
              type="button" 
              @click="$store.landing.openWhatsAppGeneral()"
              class="w-9 h-9 rounded-full bg-base-200/80 text-emerald-700 border border-base-300 flex items-center justify-center hover:bg-emerald-50"
              title="Chat WhatsApp"
              aria-label="Chat WhatsApp"
            >
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
            </button>

            <button 
              type="button" 
              @click="mobileMenuOpen = !mobileMenuOpen; if (mobileMenuOpen && window.refreshIcons) window.refreshIcons();"
              class="w-10 h-10 rounded-full bg-base-200/80 text-slate-700 border border-base-300 flex items-center justify-center hover:bg-base-200 transition-colors"
              :aria-expanded="mobileMenuOpen" 
              aria-label="Toggle menu navigasi"
            >
              <i data-lucide="menu" class="w-5 h-5" x-show="!mobileMenuOpen"></i>
              <i data-lucide="x" class="w-5 h-5" x-show="mobileMenuOpen" x-cloak></i>
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
        class="lg:hidden border-t border-base-200 bg-base-100/98 backdrop-blur-lg px-4 pt-4 pb-6 shadow-xl space-y-3"
      >
        <!-- Track Kapsul Mobile Menu -->
        <div class="p-1.5 border border-base-300 bg-base-200/50 rounded-2xl space-y-1">
          <!-- 1. Keunggulan -->
          <a 
            href="#keunggulan" 
            @click="activeNav = '#keunggulan'; mobileMenuOpen = false"
            :class="activeNav === '#keunggulan' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all"
          >
            <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
            <span>Keunggulan & Fasilitas</span>
          </a>

          <!-- 2. Program & Usia -->
          <a 
            href="#program-usia" 
            @click="activeNav = '#program-usia'; mobileMenuOpen = false"
            :class="activeNav === '#program-usia' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all"
          >
            <i data-lucide="compass" class="w-4 h-4 text-sky-600"></i>
            <span>Program & Kelompok Usia</span>
          </a>

          <!-- 3. Simulasi & Screening -->
          <a 
            href="#preview-interaktif" 
            @click="activeNav = '#preview-interaktif'; mobileMenuOpen = false"
            :class="activeNav === '#preview-interaktif' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all"
          >
            <i data-lucide="clipboard-check" class="w-4 h-4 text-primary"></i>
            <span>Simulasi & Screening</span>
          </a>

          <!-- 4. Tim Ahli -->
          <a 
            href="#tim-ahli" 
            @click="activeNav = '#tim-ahli'; mobileMenuOpen = false"
            :class="activeNav === '#tim-ahli' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all"
          >
            <i data-lucide="users" class="w-4 h-4 text-purple-600"></i>
            <span>Tim Ahli & Testimoni</span>
          </a>

          <!-- 5. Paket & Biaya -->
          <a 
            href="#paket-harga" 
            @click="activeNav = '#paket-harga'; mobileMenuOpen = false"
            :class="activeNav === '#paket-harga' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all"
          >
            <i data-lucide="tag" class="w-4 h-4 text-amber-600"></i>
            <span>Paket & Biaya Terapi</span>
          </a>

          <!-- 6. FAQ -->
          <a 
            href="#faq" 
            @click="activeNav = '#faq'; mobileMenuOpen = false"
            :class="activeNav === '#faq' ? 'bg-base-100 text-primary font-semibold shadow-xs border border-base-300/80' : 'text-slate-700 hover:text-primary'"
            class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all"
          >
            <i data-lucide="help-circle" class="w-4 h-4 text-slate-400"></i>
            <span>Pertanyaan Umum (FAQ)</span>
          </a>
        </div>

        <!-- Tombol Aksi Mobile -->
        <div class="pt-2 flex flex-col gap-2">
          <a 
            href="#final-cta" 
            @click="mobileMenuOpen = false"
            class="group pl-5 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-600 text-primary-content font-semibold text-sm flex items-center justify-between shadow-soft hover:shadow-soft-hover"
          >
            <span>Daftar Observasi & Konsultasi</span>
            <div class="w-8 h-8 rounded-full bg-base-100 text-primary flex items-center justify-center shadow-xs">
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </div>
          </a>
          <button 
            type="button" 
            @click="mobileMenuOpen = false; $store.landing.openWhatsAppGeneral()"
            class="btn btn-outline btn-sm w-full rounded-full gap-2 text-emerald-700 border-emerald-300 hover:bg-emerald-50"
          >
            <i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i>
            <span>Tanya Admin via WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  `;
};
