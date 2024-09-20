import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// Mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Mimic ESLintRC-style extends
  ...compat.extends('eslint:recommended'),

  {
    ignores: ['lib/**/*'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
      globals: {
        $: 'readonly',
        browser: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      // Add any specific rules here if needed
    },
  },
];
