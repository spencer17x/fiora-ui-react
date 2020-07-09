const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    },
		'react-router-dom': {
			commonjs: 'react-router-dom',
			commonjs2: 'react-router-dom',
			amd: 'react-router-dom',
			root: 'react-router-dom'
		}
  }
});
