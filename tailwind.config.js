module.exports = {
  darkMode: "class",
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontFamily: {
      display: ["Roboto Slab", "system-ui", "sans-serif"],
      body: ["Radio Canada", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
