module.exports = {
  extends: ['next/core-web-vitals'],
  cache: true,
  cacheLocation: '.eslintcache',
  cacheStrategy: 'content',
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'public/',
    '**/*.d.ts'
  ],
};
