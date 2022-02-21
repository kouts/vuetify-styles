module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:prettier-vue/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['html'],
  ignorePatterns: ['**/node_modules/**', '{tmp,temp}/**', '**/*.min.js', 'vendor/**', 'dist/**', 'public/**'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        quotes: [2, 'double'],
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  rules: {
    // Typescript

    // Disable 'no-unused-vars' as TypeScript has its own version
    'no-unused-vars': 'off',

    // Prefer T[] instead of Array<T>
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
  },
}
