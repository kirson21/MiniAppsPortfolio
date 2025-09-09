/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#474545',
        'cyan-blue': '#0097B2',
        'light-beige': '#FAECEC',
      },
    },
  },
  plugins: [],
}