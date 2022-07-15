module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "2000px",
      },
      maxHeight: {
        0: "0",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        fifty: "50vh",
        threeFourths: "75vh",
        full: "100%",
      },
      minHeight: {
        0: "0",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        full: "100%",
        screen: "100vh",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    gridColumn: ["responsive", "hover"],
    gridColumnStart: ["responsive", "hover"],
    gridColumnEnd: ["responsive", "hover"],
    borderWidth: ["hover", "focus"],
  },
  plugins: [],
};
