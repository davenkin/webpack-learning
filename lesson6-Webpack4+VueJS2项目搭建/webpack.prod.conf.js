const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  //environment specific config goes here
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]---[local]---[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require("autoprefixer")],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: '@import "./src/styles/_variables.scss";'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      "name": "manifest"
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }

      }
    }
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css"
    })
  ]
});

module.exports = webpackConfig;

