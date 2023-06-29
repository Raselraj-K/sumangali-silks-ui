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
      "custom-black": "#ccc",
      "custom-red": "red",
      "custom-blue": "blue",
      "border-color": "#D9D9D9",
      "brand-name-color": "#481212",
      "new-tag": "#FF5C42",
      "white-color": "#fff",
      "theme-text-color": "#7B7B7B",
      "branch-floor": "#271E0D",
      "save-clr": "#D0A34C",
      "clr-hover": "#D0A34C",
    },
    fontFamily: {
      karla: ["karla"],
    },
  },
  plugins: [],
};
