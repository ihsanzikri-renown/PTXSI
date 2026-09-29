/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1A1F1C",
          light: "#2C302E",
        },
        steel: {
          DEFAULT: "#5E7266",
          dark: "#49584F",
          light: "#7E8E84",
        },
        gold: {
          DEFAULT: "#E9C46A",
          dark: "#CDAC5D",
        },
      },
    },
  },
  plugins: [],
};
