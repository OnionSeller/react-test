/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript/TypeScript files in the src directory
    "./public/index.html"          // Scans the root HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
