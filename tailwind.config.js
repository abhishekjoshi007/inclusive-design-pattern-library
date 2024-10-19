module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/geek-design-react/src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};