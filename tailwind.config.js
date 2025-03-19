/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    extend: {
      'width':{
          '200': '200%',
      },
      'height':{
        '200': '200%',
      }
    },
  },
  plugins: [],
}

