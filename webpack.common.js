const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getWebpackEntries = require('./node-tools/getWebpackEntries');

const componenNames = getWebpackEntries('./lib/components');

const entries = componenNames.reduce((result, current) => {
	result[current] = path.resolve(`./lib/components/${current}`);
	return result;
}, {});

module.exports = {
	entry: {
		index: './lib/index.tsx',
		...entries
	},
	output: {
		path: path.join(__dirname, '/dist'),
		library: 'fiora-ui-react',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: { loader: 'babel-loader' } // options 在 .babelrc 定义
			},
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ test: /\.svg$/, loader: 'svg-sprite-loader' },
			{
				test: /\.(sa|sc|c)ss/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					// 'style-loader', // 将 JS 字符串生成为 style 节点
					'css-loader', // 将 CSS 转化成 CommonJS 模块
					'sass-loader', // 将 Sass 编译成 CSS，默认使用 Node Sass
					{
						loader: 'sass-resources-loader',
						options: {
							resources: './lib/style/index.scss',
						}
					}
				]
			},
			{
				test: /\.(jpg|png|gif|bmp|jpeg)$/,//正则表达式匹配图片规则
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 500,
							name: 'images/[name]-[hash:8].[ext]',
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new CheckerPlugin(),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		})
	]
};
