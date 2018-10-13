- 本地安装:`cnpm install`
- 构建production:`cnpm run build`
- 本地运行:`cnpm start`
- 构建docker镜像(需要在`cnpm run build`之后运行):`docker build -t lesson6 .`
- 运行docker:`docker run -p 8081:8081 lesson6`

styles: {
                    name: 'styles',
                    // test: /\.css$/,
                  test: /\.(s?css|vue)$/, // chunks plugin has to be aware of all kind of files able to output css in order to put them together
                    chunks: 'initial',
                  minChunks:1,
                    enforce: true
                }
