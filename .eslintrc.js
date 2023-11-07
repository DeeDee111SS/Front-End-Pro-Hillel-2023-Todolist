module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier", "react-hooks"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "react/prefer-stateless-function": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "arrow-body-style": ["error", "as-needed"],
    "no-console": "off",
    "no-param-reassign": ["error", { props: false }],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        controlComponents: ["Field"],
        allowChildren: true,
      },
    ],
  },
};

// disabled now
