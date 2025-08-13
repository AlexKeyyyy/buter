export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat Alternates"', "sans-serif"],
        serif: ['"Montserrat Alternates"', "serif"],
      },
      colors: {
        brand: {
          orange: "#ff8c42",
          gold: "#ffcc70",
        },
      },
    },
  },
  plugins: [],
};
