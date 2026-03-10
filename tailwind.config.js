/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7C6FFF',
        'purple-2': '#A89FFF',
        'purple-dim': 'rgba(124,111,255,0.12)',
        'purple-border': 'rgba(124,111,255,0.28)',
        bg: '#08080F',
        surface: '#111119',
        'surface-2': '#1A1A28',
        't2': '#9898B8',
        't3': '#5A5A78',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
