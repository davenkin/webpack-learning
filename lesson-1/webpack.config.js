const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'distribution'),
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
    plugins: [
        new CleanWebpackPlugin(['distribution']),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        })
    ]

};
