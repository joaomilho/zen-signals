'use strict'
var path = require('path')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      }
    ]
  },

  entry: {
    dist: './index.js'
  },

  output: {
    filename: '[name].js'
  }
}
