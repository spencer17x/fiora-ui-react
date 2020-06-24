module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		//		'plugin:react/recommended'
	],
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		node: true
	},
	settings: {
		'react': {
			'pragma': 'React',
			'version': 'detect'
		}
	},
	parserOptions: {
		'ecmaVersion': 2019,
		'sourceType': 'module',
		'ecmaFeatures': {
			jsx: true
		}
	},
	rules: {
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/member-delimiter-style': [
			2,
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: true,
				},
			},
		],
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				'allowSingleExtends': true
			}
		],
		'quotes': ['error', 'single']
	}
};
