module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    gridColumn: ["responsive", "hover"],
    gridColumnStart: ["responsive", "hover"],
    gridColumnEnd: ["responsive", "hover"],
  },
  plugins: [],
};
