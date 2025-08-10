export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
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
