const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extraPlugins = [];

if (process.env.ANALYZE) {
  extraPlugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode: 'production',

  entry: {
    app: './src/app.tsx'
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },

  devtool: 'cheap-eval-source-map',

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
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'awesome-typescript-loader'
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
    ...extraPlugins,
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false),
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: process.cwd()
    }),
  ]
}
