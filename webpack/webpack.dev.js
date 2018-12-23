const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack/hot/dev-server',
      './src/index.tsx'
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },

  devtool: 'cheap-eval-source-map',

  devServer: {
    disableHostCheck: true,
    hot: true,
    inline: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.d.ts'],
    alias: {
      Src: path.resolve('./src'),
      Components: path.resolve('./src', 'components'),
      Containers: path.resolve('./client', 'containers'),
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader'
        }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|svg)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=img/[name].[ext]',
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: process.cwd()
    }),
  ]
}
