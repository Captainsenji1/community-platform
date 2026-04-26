/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: '#121212',
        accent: {
          electricBlue: '#00BFFF', // Electric Blue
          vibrantPurple: '#9B59B6', // Vibrant Purple
        },
      },
      // Glassmorphism design tokens
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      backdropOpacity: {
        0: '0%',
        25: '25%',
        50: '50%',
        75: '75%',
        100: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};