/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "raleway" : ['Raleway', 'sans-serif']
      },
      colors: {
        'dark-blue': '#023047',
        'primary-blue': '#6F7DFB',
        'primary-orange' : '#DA722C'
      },
    },
  },
  plugins: [],
}

