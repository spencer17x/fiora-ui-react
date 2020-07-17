module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['airbnb-typescript'],
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: [
		'react-hooks'
	],
	rules: {
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
	}
};