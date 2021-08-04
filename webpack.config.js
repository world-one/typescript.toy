const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './app/dist',
  // },
  entry: {
    index: { 
      import: './app/src/index.ts', 
      dependOn: 'shared'
    },
    print: './app/src/components/print.ts',
    another: {
      import: './app/src/components/another.ts',
      dependOn: 'shared'
    },
    shared: 'lodash',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DEV TITLE',
    })
  ],
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }
}