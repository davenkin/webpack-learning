const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    entry: {
        'index': './src/index.js',
        'index2': './src/index2.js'
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
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['distribution']),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename:'bundle-analyzer-report.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',//relative to root of the application
            chunks: ['index', 'runtime', 'vendors']
        }),
        new HtmlWebpackPlugin({
            template: './src/index2.html',
            filename: 'index2.html',//relative to root of the application
            chunks: ['index2', 'runtime', 'vendors']
        })
    ]

}
;
