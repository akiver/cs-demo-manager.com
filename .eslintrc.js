module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: [
    '.DS_Store',
    'node_modules',
    'LICENSE',
    'yarn.lock',
    '/*.js',
    'dist',
    '*.png',
    '*.html',
    '*.md',
    '*.jpg',
    '*.yml',
    '*.json',
    '*.svg',
    '*.toml',
    '*.ico',
    '*.txt',
    '*.scss',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
