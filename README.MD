- chunk详解(多入口,多page抽离,共同依赖抽离,vendor依赖抽离,manifest分离), 缓存处理(只hash自己写的代码)
- css处理(cssloader,提取css,scss入门,postcss入门,scope,css module,)
- Babel使用详解(babel入门,babel配置)
- 开发(development)环境 vs 生产(production)环境(多配置文件,webpack-merge)
- 搭建Webpack 4 + Vuejs 2项目
- Webpack 4 API的使用

minchunks表示最终生成的其他chunk中,如果有多余或等于minchunks都引用了某个module,那么该module将被加入到当前配置的chunk中.
enforce=true表示无论生成的chunk多大都会生成该chunk,否则webpack将按照最小size原则决定是否生成新的chunk,默认生成的最小chunk尺寸为30kb,表示如果生成的chunk尺寸小于30kb,那么便不会生成chunk.
cacheGroups可以继承并覆盖splitChunks节点下的配置


split原则:
    为 Vendor 单独打包（Vendor 指第三方的库或者公共的基础组件，因为 Vendor 的变化比较少，单独打包利于缓存）
    为 Manifest （Webpack 的 Runtime 代码）单独打包
    为不同入口的公共业务代码打包（同理，也是为了缓存和加载速度）
    为异步加载的代码打一个公共的包

理解split:https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0

所有的都依赖common1
index1/2同时依赖于common2
index2异步依赖于common3
index3异步依赖于common4