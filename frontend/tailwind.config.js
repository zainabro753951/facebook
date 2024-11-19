/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        themeFont: ["Poppins", "serif"],
      },
      colors: {
        themeBlue: "#0866ff",
      },
    },
  },
  plugins: [],
};
