module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
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
    'quotes': ['error', 'single']
  }
};
