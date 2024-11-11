module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6, // default is 5
  },
  env: {
    node: true,
  },
  rules: {
    "no-undef": ["error"],
    "no-cond-assign": ["error", "always"],
  },
};
