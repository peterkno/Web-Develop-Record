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
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendors.bundle.js'
        }
      }
    }
  }
}