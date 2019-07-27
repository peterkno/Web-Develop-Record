// webpack.config.js
var path = require('path')

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, './src'),
  entry: {
    main: './main.js',
    module: './module-1.js'
  },  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}