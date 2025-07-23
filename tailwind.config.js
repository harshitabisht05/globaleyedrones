// tailwind.config.js
const path = require('path');

module.exports = {
   darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"'],
        raleway: ['Raleway'],
      },
    },
  },
  plugins: [],
}
