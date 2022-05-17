module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        cusGreen: {
          50: '#E6F3F1',
          100: '#B3DCD4',
          200: '#80C5B8',
          300: '#59B4A2',
          400: '#269C85',
          500: '#008B70',
          600: '#006854',
          700: '#004C3E',
          800: '#00382D',
          900: '#001C16',
        },
        cusPurple: {
          50: '#F1EFF9',
          100: '#D6CFEC',
          200: '#BBAFE0',
          300: '#A797D7',
          400: '#8B77CA',
          500: '#775FC1',
          600: '#6551A4',
          700: '#4D3E7D',
          800: '#30264D',
          900: '#181327',
        },
      },
    },
  },
  plugins: [],
};
