module.exports = {
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
  parser: "@typescript-eslint/parser",
};
