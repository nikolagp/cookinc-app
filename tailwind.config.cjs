/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clrPrimary: '#f0e1d8',
        clrPrimaryDark: '#d7ae96',
        clrSecondary: '#333058',
        clrAccent: '#e5354b',
        clrText: '#f0e1d8',
      },
    },
  },
  plugins: [],
};
