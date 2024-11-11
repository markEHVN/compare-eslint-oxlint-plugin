module.exports = {
  extends: "eslint:recommended",
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: 6, // default is 5
  },
  env: {
    node: true,
    "jest/globals": true,
  },
  rules: {
    "jest/expect-expect": "error",
  },
};
