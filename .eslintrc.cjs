module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:svelte/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  ignorePatterns: ['node_modules', 'dist']
}
