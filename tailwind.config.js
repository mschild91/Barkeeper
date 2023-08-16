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
      montserrat: ['Montserrat', 'sans-serif'],
      playfair: ['Playfair_Display', 'sans-serif'],
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
