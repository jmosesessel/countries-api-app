/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'dark-blue-dark-mode-elements': 'hsl(209, 23%, 22%)',
      'very-dark-blue-dark-mode-bg': 'hsl(207, 26%, 17%)',
      'very-dark-blue-light-mode-text': 'hsl(200, 15%, 8%)',
      'dark-gray-light-mode-input': 'hsl(0, 0%, 52%)',
      'very-light-gray-light-mode-bg': 'hsl(0, 0%, 98%)',
      'white-dark-mode-text-light-mode-elements': 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      'Nunito': ['Nunito Sans'],

    },
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    extend: {},
  },
  plugins: [],
};
