const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './distribution'
    }

    //environment specific config goes here
});

module.exports = webpackConfig;

