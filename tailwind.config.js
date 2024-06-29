/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgrey: '#f0f0f0', // Pretty light grey
        lightblue: '#BFD7ED', // Light blue
        darkblue: '#5885AF',  // Dark blue
        sidebarDark: '#68BBE3',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      backgroundImage: {
        'topbar-gradient': 'linear-gradient(46deg, #A3BDED 0%, #6991C7 100%)',
        'topbar-gradient-dark': 'linear-gradient(46deg, #6B8FC3 0%, #4D6B9F 100%)',
        'sidebar-gradient-dark': 'linear-gradient(135deg, #4C6793 0%, #2E3B55 100%)', // New dark gradient
      },
      fontFamily: {
        body: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji',
        ],
        sans: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji',
        ],
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
}