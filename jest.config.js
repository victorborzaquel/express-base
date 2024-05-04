module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // moduleNameMapper: {
  //   '^@/(.*)$': './src/$1',
  // },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: ['./jest.setup.js'],
};
