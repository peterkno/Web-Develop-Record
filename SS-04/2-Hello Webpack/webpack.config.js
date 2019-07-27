// webpack.config.js
let path = require('path');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './src'),
  entry: {
    main: ['babel-polyfill', './main.js'],
    // module: './module-1.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'es2015', {
                    modules: false,
                  },
                ],
              ],
              // ,
              // plugins: [
              //   'proposal-class-properties'
              // ]
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};
