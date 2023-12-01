/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:storybook/recommended",
  ],
  globals: {
    React: "readonly",
  },
  rules: {
    "no-unused-vars": [
      1,
      {
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};

module.exports = config;
