module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-var": 2,
    indent: 0,
    "no-console": 1,
    "no-duplicate-imports": 2,
    "no-import-assign": 2,
    "no-const-assign": 2,
    semi: 0,
  },
};
