/** @type {import('tailwindcss').Config} */
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: 'Roboto',
      poppins: 'Poppins',
      montserrat: 'Montserrat',
    },

    extend: {
      colors: {
        primary: '#3a0a76',
        light: {
          25: '#c6c9d8',
          50: '#f8f9fc',
          100: '#ebebeb',
          purple: {
            50: '#33065b',
            75: '#4f1675',
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
        portfolio: "url('/assets/images/bg-image-6.jpg')",
        service: "url('/assets/images/bg-image-2.jpg')",
        'footer-1': "url('/assets/images/footer.png')",
        'footer-2': "url('/assets/images/footer-2.jpg')",
        serviceHover: 'linear-gradient(to right, #743a8f, #3c0a77)',
        'team-hover': 'linear-gradient(to bottom, #852d9d, #3c0a77)',
        'footer-color': 'linear-gradient(145deg, #4f0a7f  0%, #e34fe8  100%)',
      },
    },
  },
  plugins: [lineClamp],
};
