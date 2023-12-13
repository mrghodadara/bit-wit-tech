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
        dark: {
          25: '#717173',
          50: '#1f1f25',
        },
      },
      backgroundImage: {
        banner: "url('/assets/images/banner.png')",
        service: "url('/assets/images/bg-image-2.jpg')",
      },
    },
  },
  plugins: [lineClamp],
};
