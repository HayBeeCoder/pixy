/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['"Josefin Sans"', "sans-serif"],
      'logo': ["KoHo", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
