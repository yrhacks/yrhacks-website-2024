/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xs': '480px'
      },
      colors: {
        "slate-950": "#0E1116",
      },
    },
  },
  plugins: [],
};
