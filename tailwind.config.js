module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        fifty: "50vh",
        threeFourths: "75vh",
        full: "100%",
      },
    },
  },
  variants: {
    gridColumn: ["responsive", "hover"],
    gridColumnStart: ["responsive", "hover"],
    gridColumnEnd: ["responsive", "hover"],
  },
  plugins: [],
};
