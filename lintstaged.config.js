module.exports = {
  "**/*.{js,jsx,ts,tsx}": (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")}`,
  ],
};
