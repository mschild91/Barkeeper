/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Playfair: ['Playfair_Display', 'sans-serif'],
    },
  },
  plugins: [],
})
