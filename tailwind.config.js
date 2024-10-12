/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#fff7e6",
          200: "#ffe8b3",
          300: "#ffd580",
          400: "#ffc14d",
          500: "#ffac1a",
          600: "#e69500",
          700: "#b37700",
          800: "#805800",
          900: "#4d3900",
        },
        darkGold: {
          100: "#f2e8d1",
          200: "#e5d1a3",
          300: "#d7ba75",
          400: "#c9a347",
          500: "#b08a2e",
          600: "#8a6e23",
          700: "#695319",
          800: "#47380f",
          900: "#241d05",
        },
        black: {
          100: "#e0e0e0",
          200: "#b3b3b3",
          300: "#808080",
          400: "#4d4d4d",
          500: "#262626",
          600: "#1f1f1f",
          700: "#191919",
          800: "#0d0d0d",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
