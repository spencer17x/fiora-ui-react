const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './lib/index.tsx',
  output: {
    path: path.join(__dirname, '/dist/lib'),
    filename: 'index.js',
    library: 'fiora-ui-react',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader?cacheDirectory=true', exclude: /node_modules/ },
      { test: /\.svg$/, loader: 'svg-sprite-loader?cacheDirectory=true', exclude: /node_modules/ },
      {
        test: /\.(sa|sc|c)ss/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'sass-loader', // 将 Sass 编译成 CSS，默认使用 Node Sass
          {
            loader: 'sass-resources-loader?cacheDirectory=true',
            options: {
              resources: './lib/style/index.scss'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/, // 正则表达式匹配图片规则
        use: [
          {
            loader: 'url-loader?cacheDirectory=true',
            options: {
              limit: 500,
              name: 'images/[name]-[hash:8].[ext]'
            }
          }
        ],
				exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader?cacheDirectory=true'],
				exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new CleanWebpackPlugin()
  ]
};
