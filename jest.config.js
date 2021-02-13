module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  // runner: 'jest-electron/runner',
  // testEnvironment: 'jest-electron/environment',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  transform: {
    'node_modules/(lit-element|lit-html)/.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(lit-element|lit-html)/.*)'],
};
