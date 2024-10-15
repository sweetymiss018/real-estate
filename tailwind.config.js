/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glitten: ['Nanum Myeongjo','roboto', 'sans-serif'], // Add 'Glitten' font
      },
    }
  },
  plugins: [],
}

