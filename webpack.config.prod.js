'use strict'
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js']
  },

  plugins: [
//    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
   new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],

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
    filename: '[name].js',
    libraryTarget: 'umd'
  }
}
