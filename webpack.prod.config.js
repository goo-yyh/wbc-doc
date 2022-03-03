const basic = require('./webpack.config');
const WebpackDemoPlugin = require('./plugins/webpack-demo-prod-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...basic,
  mode: "production",
  plugins: [
    new WebpackDemoPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
}