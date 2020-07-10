module.exports = {
	verbose: true,
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	rootDir: __dirname,
	collectCoverage: true,
	setupFiles: [
		'./tests/setup.tsx'
	],
	//	collectCoverageFrom: [
	//		'lib/**/*.{js,jsx,ts,tsx}',
	//		'!**/node_modules/**'
	//	],
	coveragePathIgnorePatterns: [
		'node_modules'
	],
	testMatch: [
		'<rootDir>/**/?(*.)+(spec|test).[jt]s?(x)'
	],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest'
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/styleMock.tsx'
	},
	globals: {
		'ts-jest': {
			diagnostics: false,
			pathRegex: /\.(spec|test)\.(j|t)sx?$/
		}
	}
};
