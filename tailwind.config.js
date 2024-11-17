/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'laptop': "url('./img/bg-header-desktop.svg')",
        'mobile': "url('./img/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}

