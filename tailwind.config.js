/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        heading: ['52px'],
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      playfair: ['Playfair_Display'],
    },
    colors: {
      'project-blue': '#262B46',
      'project-white': '#FFFFFF',
    },
    height: {
      120: '30rem',
    },
  },
  plugins: [],
})
