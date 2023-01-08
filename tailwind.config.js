/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '650px',
      ml: '850px',
      lg: '1150px',
      xl: '2750px',
    },
    extend: {
      fontFamily: {
        base: ["Cormorant Upright", "serif"],
        alt: ["Open Sans", "sans-serif"],
      },
      colors: {
        'burgandy': '#6A040F',
      },
    },
  },
  plugins: [],
}
