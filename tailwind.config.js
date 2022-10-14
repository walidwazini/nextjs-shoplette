/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': {
          'font-size': '0.60rem',
          'line-height': '0.75rem',
        },
      }
    },
  },
  plugins: [],
}
