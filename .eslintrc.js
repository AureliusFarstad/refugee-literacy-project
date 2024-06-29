module.exports = {
  // Configuration for JavaScript files
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  plugins: ["unicorn"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        endOfLine: "auto",
      },
    ],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.js"],
      plugins: [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort",
      ],
      extends: [
        "plugin:tailwindcss/recommended",
        "@react-native-community",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            singleQuote: false,
            endOfLine: "auto",
          },
        ],
        "max-params": ["error", 3], // Limit the number of parameters in a function to use object instead
        "max-lines-per-function": ["error", 5000],
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "tailwindcss/classnames-order": [
          "warn",
          {
            officialSorting: true,
          },
        ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
        "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        "react-native/no-inline-styles": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "tailwindcss/no-custom-classname": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
};
