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
        sidebarDark: '#68BBE3', 
      },
      backgroundImage: {
        'topbar-gradient': 'linear-gradient(46deg, #A3BDED 0%, #6991C7 100%)',
      },
    },
  },
  plugins: [],
}
