module.exports = {
  collectCoverageFrom: [
    'assets/js/**/*.{js,jsx}',
    '!assets/js/github-issues.js',
    '!assets/js/logos.js',
    '!assets/js/main.js',
    '!assets/js/misc.js',
    '!assets/js/openapis.js',
    '!assets/js/projects.js',
    '!assets/js/swagger-custom.js',
  ],
  coverageReporters: ['text'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/assets/js/setup-tests.js'],
};
