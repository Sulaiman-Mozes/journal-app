const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'My Journal',
      template: 'public/index.html',
    }),
  ],
});
