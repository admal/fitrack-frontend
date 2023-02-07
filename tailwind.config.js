/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3f88c5ff",
        "white": "#eff1f3ff",
        "green": "#44bba4ff",
        "red": "#f45b69ff"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
