/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-background": "#101C2C",
        "orange-bg": "#C2956B",
        "orange-text": "#C2956B",
        "blue-text": "#101C2C",
        "bg-dots": "#111E2F",
        "gradient-start": "#9C8774",
        "gradient-end": "#C2956B",
        "white-text": "#F9F9F9",
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};