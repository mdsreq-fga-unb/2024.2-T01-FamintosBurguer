/// <reference types="node" />
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/main/tests/'], // Define a pasta de testes
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/main/tests/setup.ts'] // Arquivo de configuração extra
}
