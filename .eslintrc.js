module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ["import"],
  extends: ["react-app", "react-app/jest", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
