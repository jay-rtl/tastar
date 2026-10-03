import js from '@eslint/js';
export default [
  {ignores:['dist/**','node_modules/**','.local/**','test-results/**','playwright-report/**']},
  js.configs.recommended,
  {languageOptions:{ecmaVersion:'latest',sourceType:'module',globals:{document:'readonly',window:'readonly',IntersectionObserver:'readonly',FormData:'readonly',console:'readonly',process:'readonly',URL:'readonly'}}},
];
