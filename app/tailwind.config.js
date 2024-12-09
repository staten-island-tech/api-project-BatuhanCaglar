/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': '#829bb3',
        'tertiary': '#292323',
        'fontcolor': 'black',
        'h1color': 'black',
        'button': 'white',
      },
      fontFamily: {
        handjet: ['Handjet', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}