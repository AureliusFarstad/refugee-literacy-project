const colors = require("./src/ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["SpaceMono-Regular"],
      },
      colors,
    },
  },
  plugins: [],
};
