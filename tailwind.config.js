/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7C3AED',
        'purple-light': '#A78BFA',
        'purple-dark': '#5B21B6',
        'purple-dim': 'rgba(124,58,237,0.12)',
        'purple-border': 'rgba(124,58,237,0.30)',
        cyan: '#06B6D4',
        pink: '#EC4899',
        bg: '#0F0F1A',
        surface: '#1A1A2E',
        'surface-2': '#252540',
        'surface-3': '#2D2D4A',
        bdr: '#3D3D5C',
        t1: '#FAFAFA',
        t2: '#B0B0C0',
        t3: '#6B6B80',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
