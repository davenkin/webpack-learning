const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入html-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin');//引入

module.exports = {
    entry: {
        index: "./src/index.js" //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: "[name]-[hash].bundle.js",//输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, "dist")//输出文件路径
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',//输出到images文件夹
                        limit: 60000  //是把小于500B的文件打成Base64的格式，写入JS
                    }
                }]
            }
        ]
    },
    plugins: [// 对应的插件
        new HtmlWebpackPlugin({ //配置
            filename: 'index.html',//输出文件名
            template: './src/index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
        new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
            }
        }
    },

}
