
// importing my tailwind and adding tailwind settings
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // telling it what kinds of files to target
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // adding media queries
      'sm': [{'min': '0px', 'max': '640px'}],
      // => @media (min-width: 640px) { ... }

      'md': [{'min': '668px', 'max': '767px'},
      {'min': '868px'}],
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}