const path = require('path');

module.exports = {
  entry: './doc/src/index.js',
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