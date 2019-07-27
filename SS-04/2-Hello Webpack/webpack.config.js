// webpack.config.js
var path = require('path')

module.exports = {
  entry: ['./src/main'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js'
  }
}