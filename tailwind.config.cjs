/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f", //black
        secondary: "#8F9779", //artichoke
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimPurple: "rgba(106, 23, 250, 0.122)",
        iconGreen: "#8F9779",
        blueText: "#33bbcf",
      },

      fontFamily: {
        changa: ["changa+one", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}


