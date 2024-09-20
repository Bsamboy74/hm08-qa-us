import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
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
        afterEach: 'readonly'
      }
    },
    rules: {
      // Add any specific rules here if needed
    },
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    plugins: {
      js: pluginJs,
    },
    extends: [
      'eslint:recommended',
    ],
  },
];