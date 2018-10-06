- 本课程博客地址: 
- 本地安装:`cnpm install`
- 本地构建:`cnpm run build`
- 本地运行:`cnpm start`

,
    optimization: {
        runtimeChunk: {
            "name": "manifest"
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: false,
                vendors: false,
                common: {
                    chunks: "initial",
                    minChunks: 2,
                    name:'commons',
                    enforce: true,
                    priority: 30
                },
                // common2: {
                //     chunks: "async",
                //     minChunks: 1,
                //     name:'commons2',
                //     enforce: true,
                //     priority: 30
                // },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    enforce: true,
                    priority: 40,
                    name:'vendor2'
                },

                //         cacheGroups: {
    //             common: {
    //                 minChunks: 2,
    //                 name: 'commons',
    //                 chunks: 'async',
    //                 priority: 10,
    //                 reuseExistingChunk: true,
    //                 enforce: true
    //             }
            }
        }
    }
