/** @type {import('tailwindcss').Config} */
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: 'Roboto',
      poppins: 'Poppins',
    },

    extend: {
      colors: {
        primary: '#3a0a76',
        light: {
          purple: {
            50: '#33065b',
            100: '#160550',
          },
        },
      },
      backgroundImage: {
        banner: "url('/assets/images/banner.png')",
      },
    },
  },
  plugins: [lineClamp],
};
