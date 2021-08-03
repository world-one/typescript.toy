const express = require('express');
const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevServer = require('webpack-dev-server');

// const app = express();
const config = require('../../webpack.config.js');
const compiler = webpack(config);

const options = {
  contentBase: '../dist',
  hot: true,
  host: 'localhost',
};
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );
const app = new webpackDevServer(compiler, options);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});