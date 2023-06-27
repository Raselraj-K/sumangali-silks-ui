/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        10: "5%",
        90: "95%",
      },
    },
    colors: {
      "border-color": "#D9D9D9",
      "brand-name-color": "#481212",
      "toggle-switch": "#D0A34C",
    },
    fontFamily: {
      karla: ["karla"],
    },
  },
  plugins: [],
};
