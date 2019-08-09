module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testRegex: '.*\\.test\\.js$',
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  clearMocks: true,
  collectCoverageFrom: [
    '!jest.config.js',
    '!jest.setup.js',
    '!server.js',
    '!nextjs-server.js',
    '**/*.{js,jsx}',
    'pages/**',
    '!coverage/**',
  ],
};
