const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    entry: {
        'index': './src/index.js',
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
                include: [resolve('src')],
                exclude: [resolve('node_modules')]
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
                common: {
                    chunks: "initial",
                    minChunks: 2,
                    enforce: true,
                    priority: 30
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    enforce: true,
                    priority: 20
                },

                async: {
                    chunks: "async",
                    enforce: true,
                    priority: 3
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['distribution']),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: 'bundle-analyzer-report.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',//relative to root of the application
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/index2.html',
            filename: 'index2.html',//relative to root of the application
            // chunks: ['index2', 'runtime', 'vendor', 'common']
        }),
        new HtmlWebpackPlugin({
            template: './src/index3.html',
            filename: 'index3.html',//relative to root of the application
            // chunks: ['index3', 'runtime', 'vendor', 'common']
        }),
        new webpack.HashedModuleIdsPlugin()
    ]

}
;
