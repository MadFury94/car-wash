const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    colors: {
      primary: {
        500: "#21317D",
        // define other shades if necessary
      },
      secondary: {
        50: "#E5F6FF",
        100: "#CCEFFF",
        200: "#99DFFF",
        300: "#66CFFF",
        400: "#33BFFF",
        500: "#2DB7FF",
        600: "#008CBA",
        700: "#005E80",
        800: "#003045",
        900: "#001520",
      },
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      violet: colors.violet,
      blue: colors.blue,
      slate: colors.slate,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
};
