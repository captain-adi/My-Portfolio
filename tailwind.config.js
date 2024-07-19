/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  corePlugins: {
    preflight: false, // Disable the preflight base styles
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        xs:{'max': '450px'},
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}

