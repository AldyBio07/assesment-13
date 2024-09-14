/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#8BA78D",
        "custom-dark": "#403C33",
      },
      backgroundImage: {
        "custom-image": "url('./src/assets/bg1.jpg')", // Replace with the actual path to your image
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
