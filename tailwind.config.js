/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#EEEEEE",
          white80: "#EEEEEECC",
          white15: "#EEEEEE26",
          red: "#CF0A0A",
          red50: "#CF0A0ACC",
          red80: "#CF0A0A80",
          black: "#000000",
          black90: "#000000E5",
          black60: "#00000099",
          black50: "#00000080",
          black30: "#0000004D",
          yellow: "#FFA113",
        },
      },
      fontFamily:{
        'Bellefair': ['Bellefair', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
