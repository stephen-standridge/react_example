/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    extensions: ['.js', '.jsx'],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    },{
      test: /\.jsx$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}
