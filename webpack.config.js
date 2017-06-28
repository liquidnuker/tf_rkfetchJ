const path = require('path');
const webpack = require('webpack');
const Promise = require('es6-promise').Promise;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.jsx'
      // vendor: ['jquery', 'lodash']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // extractCSS
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
      },
      // babel-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // babel jsx
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals : {
    react: 'react',
    ReactDOM: 'react-dom'
    // $: 'jquery',
    // Vue: 'vue',
    // VueRouter: 'vue-router'
  },
  plugins: [
    // HtmlWebpackPluginConfig,
    extractCSS
  ],
  resolve: {
    modules: [
      '../node_modules',
      // 'D:/WINDOWS/GD2/web/dev/_npm/libs/jquery_3.1.1/node_modules',
      // 'D:/WINDOWS/GD2/web/dev/_npm/utils/lodash_4.17.4/node_modules'
    ]
  }
};