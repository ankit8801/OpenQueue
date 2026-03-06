/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f2b90d",
        "background-light": "#f8f8f5",
        "background-dark": "#221e10",
        "neutral-light": "#e6e3db",
        "neutral-dark": "#3a3528",
        "text-main": "#181611",
        "text-sub": "#8a8060",
      },
      fontFamily: {
        display: ['"Work Sans"', "sans-serif"],
        body: ['"Work Sans"', "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};