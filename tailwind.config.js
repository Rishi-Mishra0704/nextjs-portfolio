/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1c20',
        'dark-text': '#f8f8f8',
        'light-bg': '#f8f8f8',
        'light-text': '#1a1c20',
      },
    },
  },
  variants: {},
  plugins: [],
};
