const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue=1 }) => {
      return `rgba(var(${variableName}), ${opacityValue})`
  }
}

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spartan: "'Spartan', sans-serif",
      },
      textColor: {
        skin: {
          header: withOpacity('--color-text-header'),
          num: withOpacity('--color-text-num'),
          del: withOpacity('--color-text-del'),
        },
      },
      backgroundColor: {
        skin: {
          main: withOpacity('--color-main-bg'),
          keypad: withOpacity('--color-keypad-bg'),
          screen: withOpacity('--color-screen-bg'),
          toggle: withOpacity('--color-toggle'),
          'toggle-shadow': withOpacity('--color-toggle-shadow'),
          num: withOpacity('--color-num'),
          'num-shadow': withOpacity('--color-num-shadow'),
          del: withOpacity('--color-del'),
          'del-shadow': withOpacity('--color-del-shadow'),                    
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
