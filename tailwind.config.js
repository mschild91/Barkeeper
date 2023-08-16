/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        heading: ['52px'],
      },
      colors: {
        "gin": "#6FC3DF",
        "vodka": "#8D82C4",
        "rum": "#EC8D81",
        "scotch": "#E7B788",
        "non_alcoholic": "#8EA9E8",
        "random": "#87C5A4",

      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      playfair: ['Playfair_Display', 'sans-serif'],
    },
    colors: {
      'project-blue': '#262B46',
      'project-white': '#FFFFFF',
      "gin": "#6FC3DF",
      "vodka": "#8D82C4",
      "rum": "#EC8D81",
      "scotch": "#E7B788",
      "non_alcoholic": "#8EA9E8",
      "random": "#87C5A4",
    },
    height: {
      120: '30rem',
    },
  },
  plugins: [],
})
