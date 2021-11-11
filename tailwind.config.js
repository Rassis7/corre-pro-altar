module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'wedding': ['Parisienne', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
