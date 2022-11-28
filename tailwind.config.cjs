/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '3px 3px 3px 2px rgb(0,0,0)'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
