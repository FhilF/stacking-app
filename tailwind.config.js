const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    gray:{
      ...defaultColors.gray,
      400:"#bdc9d0"
    },
    secondary: {
      400: "#faba6b",
      500: "#f8a23a",
      600: "#f7931a",
    },
    primary: {
      400: "#20f8a9",
      500: "#30ce95",
      600: "#06c680",
      900: "#18B87D"
    },
    primaryDarker: {
      400: "#00ffd2",
    },
    customColor: {
      stx: "#5546ff",
    },
  },
};
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
