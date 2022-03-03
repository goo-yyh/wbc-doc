const basic = require('./webpack.config');
const WebpackDemoPlugin = require('./plugins/webpack-demo-dev-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const srcPath = path.posix.resolve(__dirname, './src');

module.exports = {
  ...basic,
  mode: "development",
  devServer: {
    static: [
      {
        directory: path.join(__dirname, './dist'),
      },
      {
        directory: path.join(__dirname, './src'),
        publicPath: '/src',
        watch: false
      },
      {
        directory: path.join(__dirname, './public'),
        publicPath: '/public',
      },
      {
        directory: path.join(__dirname, './doc'),
        publicPath: '/doc',
      },
    ],
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
      `${srcPath}/**/*.js`,
      `${srcPath}/**/*.ts`,
      `${srcPath}/**/*.json`,
    ],
  },
}