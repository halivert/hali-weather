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
    extend: {
      colors: {
        fg: "#0095ff",
        bg: {
          100: "#f0f0f0",
          500: "#919199",
          600: "#232434",
          700: "#171829",
          800: "#0b0c1e",
        },
      },
    },
  },
  plugins: [],
}
