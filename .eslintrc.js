module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "no-nested-ternary": 0,
    "react/require-default-props": 0,
    "no-alert": 0,
    "no-console": 2,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "no-underscore-dangle": 0,
    "react/jsx-props-no-spreading": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "react/no-array-index-key": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-unescaped-entities": 0,
    "no-case-declarations": 0,
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: [".", "src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
