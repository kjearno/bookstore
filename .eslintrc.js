module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@features", "./src/features"],
          ["@shared", "./src/shared"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
