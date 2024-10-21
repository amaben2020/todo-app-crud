/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundColor: {
        lemon: '#CDE53D',
        'white-primary': '#FDFDFD',
        'gray-primary': '#CBCBCB',
        blue: '#3556AB',
        'blue-secondary': '#071D55',
      },
      borderColor: {
        'gray-primary': '#CBCBCB',
        'lemon-primary': '#9EB031',
        card: '#E7E7E7',
      },
      colors: {
        'blue-base': '#071D55',
        'blue-secondary': '#0D2972',
        gold: '#F2C94C',
      },
      boxShadow: {
        'custom-primary': 'inset 0px 4px 0px 0px #FFFFFF99',
        'custom-text-shadow': '0px 1px 0px 0px #FFFFFF',
        'custom-black-shadow': '0px 4px 4px 0px #0000001A',
        right: '4px 0px 4px 0px #00000026',
      },
      textShadow: {
        default: '2px 2px 4px rgba(0, 0, 0, 0.1)', // light shadow
        md: '2px 2px 6px rgba(0, 0, 0, 0.2)', // medium shadow
        lg: '4px 4px 10px rgba(0, 0, 0, 0.3)', // large shadow
        xl: '6px 6px 15px rgba(0, 0, 0, 0.4)', // extra-large shadow
      },
    },
  },
  plugins: [],
};
