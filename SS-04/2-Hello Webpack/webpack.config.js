// webpack.config.js
var path = require('path')

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, './src'),
  entry: ['./main.js'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}