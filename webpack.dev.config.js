const basic = require('./webpack.config');
const WebpackDemoPlugin = require('./plugins/webpack-demo-dev-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const srcPath = path.posix.resolve(__dirname, './src');

module.exports = {
  ...basic,
  mode: "development",
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
  watchOptions: {
    aggregateTimeout: 500,
    ignored: [
      '**/demo-config.json',
      '**/node_modules',
      '**/.idea',
      '**/.vscode',
      '**/.git',
      `${srcPath}/**/*.js`,
      `${srcPath}/**/*.ts`,
      `${srcPath}/**/*.json`,
      `${srcPath}/**/*.html`,
    ],
  },
}