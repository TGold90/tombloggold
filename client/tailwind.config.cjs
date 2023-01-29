/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#83FE3F",
      white: "#FDFFFC",
      purple: "#5D08E6",
      grey: "#BABABA",
      black: "#1B1B1E",
      gold: "#ffd700",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    fontFamily: {
      header: ['Righteous'],
    },
    screens: {
      sm: { min: "300px", max: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "641px", max: "768px" },
      // => @media (min-width: 768px) { ... }

      lg: { min: "769px", max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { min: "1024px", max: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
