const expoConfig = require('eslint-config-expo/flat');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = [
  ...expoConfig,
  prettier,
  { ignores: ['dist/*', '.expo/*', 'node_modules/*'] },
  { rules: { '@typescript-eslint/no-explicit-any': 'error' } },
];