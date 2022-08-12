const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log(env);
  return {
    mode: env.dev ? 'development' : 'production',
    devtool: 'inline-source-map',
    // devServer: {
    //   contentBase: './app/dist',
    // },
    entry: {
      index: './src/index.ts',
      print: './src/components/print.ts',
      another: './src/components/another.ts',
      // shared: 'lodash',
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'DEV TITLE',
      })
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: [
            { 
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
          // include로 실제 변환해야하는 곳에만 로더 적용
          include: path.resolve(__dirname, 'src'),
          exclude: ['/node_modules'],
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
}