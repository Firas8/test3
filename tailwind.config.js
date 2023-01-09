/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      white: '#ffffff',
      heavyMetal: '#1D1D1B',
      grey: '#555555',
      lightbrown: '#B15533',
      alto: '#D8D8D8',
      brown: '#723E31',
      dawnPink: '#F3ECE7',
      seashellPeach: '#FFF7F2',
      black: '#000000',
      upwhite: '#FDFDFD',
      bizarre: '#EEE0D6',
      barleyCorn: '#A68059',
      sliver: '#A6A6A6',
      wildSand: '#F6F6F6',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      professor: ['Professor Regular'],
      gothic: ['Century Gothic'],
    },
    extend: {
      dropShadow: {
        scaleOnHover: '0em 0.4em 0.4em rgba(0, 0, 0, 0.3)'
      },
      boxShadow: {
        small: "0 2px 4px 0 rgb(0 0 0 / 8%)",
        menu: "inset 0 4px 9px 0px rgb(0 0 0 / 8%), 0 4px 8px 0 rgb(0 0 0 / 8%)"
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}