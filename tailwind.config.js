module.exports = {
  content: ["./**/*.{ejs,html}", "./assets/javascripts/**/*.js"],
  purge: false,
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
  darkMode: "class",
};
