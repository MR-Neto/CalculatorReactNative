module.exports = {
  env: {
    "react-native/react-native": true,
    es6: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react-native/all",
    "@react-native-community"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "react-native"
  ],
  rules: {
    "prettier/prettier": "off",
    "semi": ["error", "never"],
    "comma-dangle": ["error", "only-multiline"],
    "computed-property-spacing": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "jsx-quotes": ["error", "prefer-single"],
    "quotes": ["error", "single"],
    "no-mixed-spaces-and-tabs": "error",
    "function-paren-newline": "off",
    "no-dupe-keys": "error",
    "max-len": ["error", { "code": 150 }],
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "arrow-parens": ["error", "as-needed"],
    "react-native/no-raw-text": "off"
  },
};
