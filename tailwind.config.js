/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  extend: {
    spacing: {
      108: "108px",
    },
  },
  theme: {
    fontFamily: {
      sans: ["Open Sans", "-apple-system", "BlinkMacSystemFont"],
      poppins: "Poppins",
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
