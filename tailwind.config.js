/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        'img-w':'105px',
        'img-h':'36px'
      }
    },
  },
  plugins: [],
}