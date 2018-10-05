- 本课程博客地址: 
- 本地安装:`cnpm install`
- 本地构建:`cnpm run build`
- 本地运行:`cnpm start`

index依赖于a和b,a和b都依赖于c,index通过async依赖于 lodash和D,index依赖于axios
minSize: 0,

split原则:
    为 Vendor 单独打包（Vendor 指第三方的库或者公共的基础组件，因为 Vendor 的变化比较少，单独打包利于缓存）
    为 Manifest （Webpack 的 Runtime 代码）单独打包
    为不同入口的公共业务代码打包（同理，也是为了缓存和加载速度）
    为异步加载的代码打一个公共的包

