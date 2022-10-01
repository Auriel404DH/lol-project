/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      ubuntuBold: ['UbuntuBold', 'sans-serif'],
      ubuntuLight: ['UbuntuLight', 'sans-serif'],
      ubuntuRegular: ['UbuntuRegular', 'sans-serif'],
      ubuntuMedium: ['UbuntuMedium', 'sans-serif'],
    },
    extend: {
      colors: {
        main: '#a68a00',
        mainBorder: '#957d00',
        mainBG: '#10041c',
        mainBG2: '#170b2a',
      },
    },
  },
  plugins: [],
};
