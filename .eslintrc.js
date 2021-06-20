module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "prefer-promise-reject-errors": ["off"],
    "promise/param-names": ["off"],
    "no-undef": ["off"],
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }]
  }
};
