/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    extend: {
      'backgroundImage':{
          'star-teal-400': 'radial-gradient(#eee, rgba(240, 253, 250, 0.8), rgba(45, 212, 191, 0.2), rgba(252, 255, 255, 0))',
        },
    },
  },
  plugins: [],
}

