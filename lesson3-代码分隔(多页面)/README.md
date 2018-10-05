- 本课程博客地址: 
- 本地安装:`cnpm install`
- 本地构建:`cnpm run build`
- 本地运行:`cnpm start`

只定义一个entry,默认的chunk名为main.  

split是和caching紧密相关联的东西.

Anyhoo, adding optimization.splitChunks.chunks = 'all' is a way of saying “put everything in node_modules into a file called vendors~main.js".