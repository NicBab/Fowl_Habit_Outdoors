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
        dimWhite: "#ffffffb3",
      },
      backgroundImage: {
        'hero_pattern': "url('./src/assets/images/fowlHabitHero.jpg')",
      },

      fontFamily: {
        council: ["council", "sans-serif"],
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


