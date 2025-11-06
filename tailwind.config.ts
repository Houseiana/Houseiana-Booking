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
        primary: {
          DEFAULT: '#528C8C', // Houseiana Teal
          light: '#6BA5A5', // Lighter Teal
          dark: '#3E6B6B', // Darker Teal
        },
        secondary: {
          DEFAULT: '#7FBABA', // Light Teal/Turquoise
          light: '#9ECCCC', // Very Light Teal
          dark: '#478989', // Medium Teal
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
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #528C8C 0%, #3E6B6B 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7FBABA 0%, #528C8C 100%)',
        'gradient-light': 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
      },
    },
  },
  plugins: [],
}
export default config