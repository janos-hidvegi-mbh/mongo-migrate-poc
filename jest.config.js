/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    maxWorkers: 1,
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['text'],
    collectCoverageFrom: ['<rootDir>/**/*.ts'],
    coveragePathIgnorePatterns: ['<rootDir>/generated'],
    coverageThreshold: {
        global: {
            lines: 75,
        },
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                experimentalDecorators: true,
                emitDecoratorMetadata: true,
                isolatedModules: true,
            },
        },
    },
    rootDir: 'src',
};
