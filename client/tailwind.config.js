/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-background": "#0F1114",
        "orange-bg": "#C3956B",
        "orange-text": "#C3956B",
        "blue-text": "#101C2C",
        "bg-dots": "#111E2F",
        "gradient-start": "#F1D9A0",
        "gradient-end": "#9B7231",
        "white-text": "#F9F9F9",
      },
    },
    screens: {
      'xsm': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};