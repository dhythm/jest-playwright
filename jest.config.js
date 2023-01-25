/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/src",
    "<rootDir>/utils",
  ],
  "testMatch": [
    "**/?(*.)+spec.+(ts|tsx|js)"
  ],
  testPathIgnorePatterns: ["node_modules"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "utils/**/*.{ts,tsx}",
    "!**/index.ts"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest"],
  }
};
