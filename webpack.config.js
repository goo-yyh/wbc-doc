const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDemoPlugin = require('./plugins/webpack-demo-plugin');


module.exports = {
  mode: "development",
  entry: './doc/src/index.js',
  devServer: {
    static: './',
    port: 9000,
  },
  plugins: [
    new WebpackDemoPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'doc.bundle.js',
    path: path.resolve(__dirname, '')
  },
};