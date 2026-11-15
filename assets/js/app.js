/**
 * ESSA Kids Therapy - Main Application Bootstrapper
 * -------------------------------------------------------------
 * Menginisialisasi komponen layout publik, mendaftarkan Alpine.js store,
 * dan mengelola rendering ikon Lucide secara andal tanpa race condition.
 */

import { createBookingStore } from './stores/booking.store.js';
import { renderPublicNavbar } from './components/navbar.js';
import { renderPublicFooter } from './components/footer.js';

// =========================================================================
// 1. Helper Global: Refresh Ikon Lucide
// =========================================================================
window.refreshIcons = () => {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    setTimeout(() => {
      lucide.createIcons();
    }, 25);
  }
};

// =========================================================================
// 2. Registrasi Alpine.js Stores
// =========================================================================
let storesRegistered = false;

export const registerAlpineStores = () => {
  if (storesRegistered) return;
  if (!window.Alpine) return;

  // Store 1: Landing & Booking Management
  window.Alpine.store('landing', createBookingStore());

  // Store 2: Global UI Feedback (Toast Notification)
  window.Alpine.store('ui', {
    toastMessage: '',
    toastType: 'success', // 'success' | 'warning' | 'info' | 'error'
    toastVisible: false,
    toastTimer: null,

    showToast(message, type = 'success', duration = 3500) {
      this.toastMessage = message;
      this.toastType = type;
      this.toastVisible = true;

      if (this.toastTimer) {
        clearTimeout(this.toastTimer);
      }

      this.toastTimer = setTimeout(() => {
        this.hideToast();
      }, duration);

      if (window.refreshIcons) {
        window.refreshIcons();
      }
    },

    hideToast() {
      this.toastVisible = false;
    }
  });

  storesRegistered = true;
};

// Daftarkan store baik melalui event 'alpine:init' maupun langsung jika Alpine sudah siap
if (window.Alpine) {
  registerAlpineStores();
}
document.addEventListener('alpine:init', () => {
  registerAlpineStores();
});

// =========================================================================
// 3. Helper Kontainer Toast Notifikasi Dinamis
// =========================================================================
const ensureToastContainer = () => {
  if (!document.getElementById('app-toast-container')) {
    const toastWrapper = document.createElement('div');
    toastWrapper.id = 'app-toast-container';
    toastWrapper.setAttribute('x-data', '');
    toastWrapper.innerHTML = `
      <div 
        x-show="$store.ui && $store.ui.toastVisible"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="transition ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-cloak
        class="toast toast-top toast-end z-50 p-4 max-w-md w-full"
      >
        <div 
          class="alert shadow-xl rounded-2xl flex items-center justify-between text-sm py-3 px-4 border"
          :class="{
            'bg-emerald-50 border-emerald-200 text-emerald-900': $store.ui && $store.ui.toastType === 'success',
            'bg-amber-50 border-amber-200 text-amber-900': $store.ui && $store.ui.toastType === 'warning',
            'bg-sky-50 border-sky-200 text-sky-900': $store.ui && $store.ui.toastType === 'info',
            'bg-rose-50 border-rose-200 text-rose-900': $store.ui && $store.ui.toastType === 'error'
          }"
        >
          <div class="flex items-center gap-3">
            <template x-if="$store.ui && $store.ui.toastType === 'success'">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 flex-shrink-0"></i>
            </template>
            <template x-if="$store.ui && $store.ui.toastType === 'warning'">
              <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-600 flex-shrink-0"></i>
            </template>
            <template x-if="$store.ui && $store.ui.toastType === 'info'">
              <i data-lucide="info" class="w-5 h-5 text-sky-600 flex-shrink-0"></i>
            </template>
            <template x-if="$store.ui && $store.ui.toastType === 'error'">
              <i data-lucide="alert-circle" class="w-5 h-5 text-rose-600 flex-shrink-0"></i>
            </template>
            <span class="font-medium" x-text="$store.ui ? $store.ui.toastMessage : ''"></span>
          </div>
          <button 
            type="button" 
            @click="$store.ui && $store.ui.hideToast()" 
            class="btn btn-ghost btn-xs btn-circle ml-2 text-slate-500 hover:text-slate-800"
            aria-label="Tutup notifikasi"
          >
            ✕
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(toastWrapper);
  }
};

// =========================================================================
// 4. Inisialisasi Layout Publik & Rendering Ikon
// =========================================================================
export const initLayoutAndIcons = () => {
  // Injeksi Navbar Publik
  const navbarTarget = document.getElementById('app-navbar');
  if (navbarTarget) {
    navbarTarget.classList.add('sticky', 'top-0', 'z-50', 'w-full');
    navbarTarget.innerHTML = renderPublicNavbar();
  }

  // Injeksi Footer Publik
  const footerTarget = document.getElementById('app-footer');
  if (footerTarget) {
    footerTarget.innerHTML = renderPublicFooter();
  }

  // Siapkan kontainer toast
  ensureToastContainer();

  // Inisialisasi ScrollSpy pada global store
  if (window.Alpine && window.Alpine.store && window.Alpine.store('landing')) {
    const landingStore = window.Alpine.store('landing');
    if (typeof landingStore.initScrollSpy === 'function') {
      landingStore.initScrollSpy();
    }
  }

  // Render awal ikon Lucide
  window.refreshIcons();
};

// Jalankan saat DOM siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLayoutAndIcons);
} else {
  initLayoutAndIcons();
}

// Refresh ulang ikon setelah seluruh resource gambar/font selesai dimuat
window.addEventListener('load', () => {
  window.refreshIcons();
});
