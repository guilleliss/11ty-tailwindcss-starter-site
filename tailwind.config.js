/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,njk,md,json,js}', './.eleventy.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};
