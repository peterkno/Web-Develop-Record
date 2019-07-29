// webpack.config.js
let path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  context: srcPath,
  resolve: {
    alias: {
      components: path.resolve(srcPath, 'components')
    }
  },
  entry: {
    index: './index.jsx',
    vendor: ['react', 'react-dom']
    // main: ['babel-polyfill', './main.js'],
    // module: './module-1.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env', {
                    modules: false,
                  },
                ],
                'react',
              ],
              plugins: [
                'babel-plugin-transform-class-properties',
              ]
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
      minChunks: 2,
      
    },
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 8080,
  },
  
};
