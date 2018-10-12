const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    mode:'production',
    devtool:'source-map'
    //environment specific config goes here
});

module.exports = webpackConfig;

