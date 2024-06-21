/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // lub 'media' dla automatycznego trybu ciemnego
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3490dc", // Primary color
          light: "#6cb2eb", // Light variant
          dark: "#B4C9FF", // Dark variant
        },
        secondary: {
          DEFAULT: "#0D005B", // Primary color
          light: "#FFF", // Light variant
          light2: "#FAFCFF", // Light variant
          dark: "#03020E", // Dark variant
          dark2: "#000A2B", // Dark variant
        },
        background: {
          DEFAULT: "#0D0E13",
        },
        accent: {
          DEFAULT: "#2400FF",
        },
        accent2: {
          DEFAULT: "#1800AD",
        },
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        description: ["Titillium Web", "sans-serif"],
        body: ['"Helvetica Neue"', "Arial", "sans-serif"], // Example for body text
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
