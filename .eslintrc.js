module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname
      },
      plugins: ['unused-imports'],
      rules: {
        'no-console': [0],
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'unused-imports/no-unused-imports': 'error',
        'rxjs-angular/prefer-takeuntil': [
          'error',
          {
            // Support the Angular 16 takeUntilDestroyed
            alias: ['takeUntilDestroyed'],
            checkComplete: true,
            checkDecorators: ['Component', 'Directive', 'Injectable']
          }
        ],
        '@angular-eslint/component-selector': [
          'warn',
          {
            type: 'element',
            // tt stands for teach-time
            prefix: ['tt'],
            style: 'kebab-case'
          }
        ]
      }
    },
    {
      files: ['**/*.component.html'],
      parser: '@angular-eslint/template-parser',
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      plugins: ['@angular-eslint/template']
    }
  ],
  parserOptions: {
    ecmaVersion: 2022
  },
  ignorePatterns: ['node_modules/**', '.eslintrc.js']
};
