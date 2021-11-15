module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        wedding: ["Parisienne", "cursive"],
      },
    },
  },
  variants: {
    outline: ["focus"],
    extend: {
      borderStyle: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
