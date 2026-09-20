/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brew: {
          400: '#a97c50',
          500: '#8b5e3c',
          600: '#6f4a2e',
        },
      },
    },
  },
  plugins: [],
};