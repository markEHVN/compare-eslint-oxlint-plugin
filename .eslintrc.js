module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6, // default is 5
  },
  plugins: ["import"],
  env: {
    node: true,
  },
  rules: {
    "import/export": "error",
  },
};
