module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    'semistandard',
  ],
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  ignorePatterns: [
    "dist/*",
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "no-console": [
      "warn",
      {"allow": ["error"]}
    ],
    "no-debugger": "warn",
    "no-unused-vars": "off",
    "array-callback-return": "warn",
    "no-sequences": "warn",
    "no-useless-escape": "warn",
    "no-duplicate-case": "warn",
    "no-use-before-define": "warn",
    "no-var": "error",
    "semi": [
      "error",
    ],
    "no-multi-spaces": "error",
    "no-irregular-whitespace": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "prefer-const": "error",
    "spaced-comment": "warn",
    "eqeqeq": [
      "error",
      "always"
    ],
    "no-nested-ternary": "off",
    "object-curly-spacing": [
      "error",
      "always"
    ],
  },
};
