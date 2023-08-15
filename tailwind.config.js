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
      sans: ['Fira Sans', 'Arial', 'sans-serif'],
    },
    colors: {
      primary: {
        50: "#E6E7F4", // Lightest
        100: "#C4C7E1",
        200: "#A2A8CE",
        300: "#8089BB",
        400: "#5E6AA8",
        500: "#21317D", // Original primary color
        600: "#172662",
        700: "#0D1B47",
        800: "#030F2C",
        900: "#000311", // Darkest
      },
   /*     secondary: {
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
      },  */
      secondary:colors.blue,
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
