const path = require('path');
const webpack = require('webpack');
const bootstrap = require('./bootstrap.plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },

  output: {
    library: 'HelloWorld',
    libraryTarget: 'umd',
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new bootstrap.BootstrapPlugin(),
    new HtmlWebpackPlugin(),
  ],

  optimization: {
    concatenateModules: true,
    flagIncludedChunks: true,
    removeAvailableModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 1,
      chunks: 'all',
      usedExports: true,
    },
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }]
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}