module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6, // default is 5
    sourceType: "module", // default is "script"

    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jsx-a11y"],
  env: {
    node: true,
  },
  rules: {
    "jsx-a11y/iframe-has-title": "error",
  },
};
