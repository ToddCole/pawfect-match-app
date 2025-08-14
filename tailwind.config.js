/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f5',
          100: '#f7f5f3',
          200: '#f7be89',
          300: '#e6454a',
          400: '#312032',
          500: '#8b6f47',
        },
        brown: {
          50: '#fdf8f5',
          100: '#f7f5f3',
          200: '#f7be89',
          300: '#8b6f47',
          400: '#312032',
          500: '#e6454a',
        }
      }
    },
  },
  plugins: [],
}