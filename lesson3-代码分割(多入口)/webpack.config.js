const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        'index1': './src/index1.js',
        'index2': './src/index2.js',
        'index3': './src/index3.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'distribution')
    },
    //use inline-source-map for development:
    devtool: 'inline-source-map',

    //use source-map for production:
    // devtool: 'source-map',
    devServer: {
        contentBase: './distribution'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['distribution']),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: 'bundle-analyzer-report.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index1.html',
            filename: 'index1.html',
            chunks: ['index1', 'manifest', 'vendor', 'common']
        }),
        new HtmlWebpackPlugin({
            template: './src/index2.html',
            filename: 'index2.html',
            chunks: ['index2', 'manifest', 'vendor', 'common']

        }),
        new HtmlWebpackPlugin({
            template: './src/index3.html',
            filename: 'index3.html',
            chunks: ['index3', 'manifest', 'vendor', 'common']

        }),
        new webpack.HashedModuleIdsPlugin()

    ],
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
                    chunks: 'initial',
                    enforce: true,
                    priority: 10,
                    name: 'vendor'
                },
                common: {
                    chunks: "all",
                    minChunks: 2,
                    name: 'common',
                    enforce: true,
                    priority: 5
                }
            }
        }
    }

}
;
