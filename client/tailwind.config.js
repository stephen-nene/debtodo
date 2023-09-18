/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{jsx,js}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF5733',
        secondary: '#3498DB',
        tertiary: '#27AE60',
        "dark-purple":"#081A51",
        "light-white":"rgba(255,255,255,0.17",
        "red":"#E74438",
        "green":"#6ECE9D",
        "light-white":"#303A67",
        "gold":"#F7F744"
      },
    },
  },
  plugins: [],
}

