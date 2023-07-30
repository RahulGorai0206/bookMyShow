/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBg': { 50: '#EDF1FC', 100: '#D5DEF8', 200: '#A5B9F0', 300: '#7593E8', 400: '#456EE0', 500: '#224FCB', 600: '#1A3C9B', 700: '#12296B', 800: '#0A173B', 900: '#02040A', 950: '#000000' },
        'premire': { 
          50: '#C8CCDE',
          100: '#BBC0D7',
          200: '#A1A9C8',
          300: '#8791B9',
          400: '#6E7AA9',
          500: '#586596',
          600: '#49537C',
          700: '#3A4263',
          800: '#2B3149',
          900: '#161926',
          950: '#0C0D14'},
      }
    },
  },
  plugins: [],
}

