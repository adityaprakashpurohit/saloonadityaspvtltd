/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5EF',
        champagne: '#E8DCD2',
        espresso: '#241F1C',
        rose: '#B99A6B',
        sand: '#DDD5CC',
        slate: '#706963'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
