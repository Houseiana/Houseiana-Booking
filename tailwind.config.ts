import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Color Palette
        midnight: {
          DEFAULT: '#0A192F', // Deep Midnight Blue (Primary)
          50: '#E6E9EE',
          100: '#CCD3DD',
          200: '#99A7BB',
          300: '#667B99',
          400: '#334F77',
          500: '#0A192F', // Base
          600: '#081426',
          700: '#060F1D',
          800: '#040A13',
          900: '#02050A',
        },
        gold: {
          DEFAULT: '#B8860B', // Muted Gold (Secondary/Accent)
          50: '#FAF6E8',
          100: '#F5EDD1',
          200: '#EBDBA3',
          300: '#E1C975',
          400: '#D7B747',
          500: '#B8860B', // Base
          600: '#936B09',
          700: '#6E5007',
          800: '#4A3604',
          900: '#251B02',
        },
        pearl: {
          DEFAULT: '#F8F9FA', // Soft white for backgrounds
          50: '#FFFFFF',
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
        },
        // Legacy colors maintained for backward compatibility
        primary: {
          DEFAULT: '#0A192F',
          light: '#334F77',
          dark: '#060F1D',
        },
        secondary: {
          DEFAULT: '#B8860B',
          light: '#D7B747',
          dark: '#6E5007',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        // Luxury Typography
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'], // Clean sans-serif for body
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'], // Elegant serif for headlines
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'], // Alias for headlines
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'luxury': '0 20px 40px -12px rgba(10, 25, 47, 0.25)',
        'gold': '0 4px 20px rgba(184, 134, 11, 0.15)',
        'glow': '0 0 30px rgba(184, 134, 11, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A192F 0%, #334F77 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #B8860B 0%, #D7B747 100%)',
        'gradient-midnight': 'linear-gradient(180deg, #0A192F 0%, #060F1D 100%)',
        'gradient-gold-shimmer': 'linear-gradient(90deg, #B8860B 0%, #D7B747 50%, #B8860B 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(10, 25, 47, 0) 0%, rgba(10, 25, 47, 0.8) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '0% center' },
        },
      },
    },
  },
  plugins: [],
}
export default config