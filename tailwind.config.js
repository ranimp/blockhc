/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#EEF8FF',
        'odd-blue': '#F1F6FF',
        'even-blue': '#D4EFFD',
        'medium-blue' : '#0787CA',
      }
    },
  },
  plugins: [],
}