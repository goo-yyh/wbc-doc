const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: './doc/src/index.js',
  devServer: {
    static: './',
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  module: {
    rules: [
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