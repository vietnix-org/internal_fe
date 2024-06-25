/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#BFD7ED', // Light blue
        darkblue: '#5885AF',  // Dark blue
        sidebarDark: '#A9CEE8', 
      },
    },
  },
  plugins: [],
}
