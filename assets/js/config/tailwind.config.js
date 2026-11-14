/**
 * ESSA Kids Therapy - Tailwind CSS CDN Configuration
 * ----------------------------------------------------
 * Konfigurasi kustom untuk Tailwind CSS Play CDN.
 * Menyediakan palet warna ramah anak (pediatric-friendly),
 * tipografi Plus Jakarta Sans, dan animasi halus.
 */

window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Palet Primer: Soft Emerald (Menyelaraskan tema DaisyUI emerald & memberi rasa tenang)
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Brand Emerald Utama
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Warna Aksen 1: Warm Amber (Hangat, ceria, bersahabat untuk anak)
        warm: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        // Warna Aksen 2: Sky Blue (Menenangkan, jernih, melegakan orang tua)
        skysoft: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        // Warna Aksen 3: Gentle Violet (Imajinatif, stimulasi sensori lembut)
        gentle: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        // Warna Aksen 4: Coral Rose (Cinta kasih & sentuhan empatik)
        coral: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.9' },
        }
      },
      animation: {
        'float': 'float 3.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 185, 129, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-hover': '0 12px 30px -4px rgba(16, 185, 129, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'warm-hover': '0 12px 30px -4px rgba(245, 158, 11, 0.18), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
      }
    }
  }
};
