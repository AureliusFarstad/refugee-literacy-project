const colors = require("./src/ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        dongle: ["Dongle_400Regular"],
        sans: ["Dongle_400Regular"],
        mono: ["Dongle_400Regular"],
      },
      colors,
    },
  },
  plugins: [],
};
