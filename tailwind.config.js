const colors = require("./src/ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Inter"],
        sans: ["Inter"],
      },
      colors,
    },
  },
  plugins: [],
};
