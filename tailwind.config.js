/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html, js}"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        dark: "#070F18",
        orange: "#F75C4E",
        blue_custom: "#1F7CFF",
        blue_custom2: "#1F65FF",
        gray_custom: "#F5F6FB",
        gray_custom2: "#575455"
      }
    },
  },
  plugins: [],
}

