const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    //environment specific config goes here
    mode: 'production',
    devtool: 'source-map'
});

module.exports = webpackConfig;

