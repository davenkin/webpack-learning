const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    //environment specific config goes here
    mode: 'production',
    devtool: 'source-map',
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
        new webpack.HashedModuleIdsPlugin()
    ]
});

module.exports = webpackConfig;

