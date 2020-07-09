const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
	merge(common, {
		mode: 'development',
		devtool: 'eval-cheap-source-map',
		entry: './examples/src/index.tsx',
		plugins: [
			new HtmlWebpackPlugin({
				title: 'fiora-ui-react',
				template: './examples/public/index.html'
			})
		],
		devServer: {
			contentBase: path.join(__dirname, 'doc'),
			compress: true,
			open: true,
			port: 3000
		}
	})
);
