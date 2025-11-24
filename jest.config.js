const config = {
  testMatch: ['<rootDir>/packages/slate-react/test/**/*.{js,ts,tsx,jsx}'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/packages/slate-react/tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^slate$': '<rootDir>/packages/slate/src',
    '^slate-history$': '<rootDir>/packages/slate-history/src',
    '^slate-hyperscript$': '<rootDir>/packages/slate-hyperscript/src',
    '^slate-react$': '<rootDir>/packages/slate-react/src',
    '^@deepnote/slate$': '<rootDir>/packages/slate/src',
    '^@deepnote/slate-history$': '<rootDir>/packages/slate-history/src',
    '^@deepnote/slate-hyperscript$': '<rootDir>/packages/slate-hyperscript/src',
    '^@deepnote/slate-react$': '<rootDir>/packages/slate-react/src',
  },
}

module.exports = config
