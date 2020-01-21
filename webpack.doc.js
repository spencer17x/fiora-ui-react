const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	entry: './examples/src/index.tsx',
	output: {
		filename: 'bundle.[hash].js',
		path: path.join(__dirname, '/doc')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'fiora-ui-react',
			template: './examples/public/index.html'
		})
	]
});
