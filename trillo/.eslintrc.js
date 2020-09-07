module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
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
  plugins: ['react', 'prettier', 'react-hooks'],
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    'infra/',
    'public/',
    'amplify/',
    '.npm',
  ],
  rules: {
    "react/prop-types": 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    "prettier/prettier": ["error", {}, {
      "usePrettierrc": false
    }]
  },
};
