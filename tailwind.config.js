module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xl: { min: '1445px' },
      lg: { max: '1440px' },
      md: { max: '1080px' },
      sm: { max: '767px' },
    },
    colors: {
      primary: '#0A459F',
      lightBlue: '#336CFB',
      secondary: '#52575C',
      lightGray: '#DBDDE0',
      grey: '#A0A4A8',
    },
  },
  plugins: [],
};
