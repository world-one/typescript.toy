const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    // library: 'webpackNumbers',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  // 종속성 제거시 나열 또는 정규식으로
  // externals: [
  //   'library/one',
  //   'library/two',
  //   // "library/"로 시작하는 모든 것
  //   /^library\/.+$/,
  // ],
};