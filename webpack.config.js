const path = require('path');

module.exports = {
  entry: './app/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}