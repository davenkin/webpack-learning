本系列文章的源代码：
```
git clone https://github.com/davenkin/webpack-learning.git
```
# 创建项目
创建本地nodejs项目：
```
cnpm init -y
```
安装webpack4和webpak-cli：
```
cnpm install webpack webpack-cli --save-dev
```
请注意，与先前的版本不同的是，webpack 4必须同时安装webpack和webpack-cli。

此时的package.json如下：
```
{
  "name": "lesson-1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.1"
  }
}
```

此时建议对package.json文件做以下修改：删除`"main": "index.js"`，加上`"private": true`：
```
{
  "name": "lesson-1",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.1"
  }
}
```

创建在src/index.js：
```
import _ from 'lodash'

let element = document.createElement('div');
element.innerHTML = _.join(['Hello', 'World'], ' ')
document.body.appendChild(element);
```
创建src/index.html：
```
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Webpack4基本使用</title>
</head>
<body>
<script src="dist/main.js"></script>
</body>
</html>
```

创建webpack.config.js：
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

修改package.json:
```
...
  "scripts": {
    "build": "webpack"
  },
...
```
运行打包命令：
```
cnpm run build
```
可以看到在dist文件夹下生成了一个main.js文件，打开该文件可以发现其中包含了webpack运行时代码、lodash代码以及我们自己的helloworld代码。在浏览器中打开index.html可以看到`Hello World`输出。

在index.js文件中，我们加入了`import _ from 'lodash'`，这里的import便是webpack来处理的，通过引入类似于import的机制，Webpack将诸如js文件、图片、css文件等多种资源当做模块来处理，然后通过他们之间的依赖关系生成依赖树，最终输出打包在一起的资源文件，这个过程便叫module bundling。

在声明对其他module的依赖时，除了`import`，webpack还支持：

-  CommonJS中的`require`
- AMD的`define`
- css文件中的`@import`
- css文件中的`url(...)`
- html文件中的`<img src=...>`

# 本地启动(webpack-dev-server)
前文中我们直接在浏览器中打开了index.html文件，不过更好的方式还是通过webpack-dev-server来启动，因为此时我们可以获得live loading以及HMR等功能。

安装webpack-dev-server：
```
cnpm install --save-dev webpack-dev-server
```
然后在package.json中修改配置：
```
...
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --config ./webpack.config.js --mode development"
  },
...
```
运行`cnpm start`，在浏览器中打开`http://localhost:8080`即可，此时webpack-dev-server默认将当前目录当做根目录，并默认使用名为index.html的文件。

# development模式和production模式
webpack4一个很大的改变便是引入了两种运行模式，一个是development用于开发阶段，一个production用于打包最终的部署包。事实上两种模式只是分别引入了一些默认的webpack配置而已，比如production模式默认引入了与chunk和minification相关的功能。

在默认情况下，webpack会使用production模式，但是我们可以在运行时进行设置，修改package.json文件：
```
...
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack-dev-server --config ./webpack.config.js --mode development"
  },
...
```
此时，还需要在webpack.config.js中加入`publicPath:"/dist"`：
```
...
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:"dist"
    },
...
```
至于原因，请参考[这里](https://medium.com/@raviroshan.talk/webpack-understanding-the-publicpath-mystery-aeb96d9effb1)。


# 引入Babel
安装babel：
```
cnpm install --save-dev @babel/core @babel/preset-env
```
安装babel-loader：
```
cnpm install --save-dev babel-loader
```
babel自己的配置一般建议放在.babelrc文件中：
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
# HTML模板
通过为index.html创建HTML模板，webpack可以自动将打包好的js文件添加到index.html中。

安装webpack-html-plugin：
```
cnpm install --save-dev html-webpack-plugin
```
修改webpack.config.js：
 ```
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


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
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        })
    ]

};
```


这里我们修改了输出路径为非默认的distribution，然后去除掉publicPath，运行`cnpm start`，工作依然正常，不知道为什么，下来好好研究研究，反正当前是工作了。


# 清理输出文件夹
在每次build之前，我们希望将现有存在的输出路径清除。安装html-webpack-plugin:
```
cnpm install --save-dev html-webpack-plugin
```

修改webpack.config.js文件：
```
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

```

# 处理图片
主要有以下loader用于处理图片：

- file-loader，用于将图片转为连接
- url-loader，对小图片直接Base64编码，对大图片通过file-loader进行处理
- image-webpack-loader，对各种图片进行压缩

安装以上3个loader：
```
cnpm install --save-dev file-loader 
cnpm install --save-dev url-loader
cnpm install --save-dev image-webpack-loader
```
修改webpack.config.js文件，加入loader配置如下：
```
...
           {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8*1024
                        }
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                            optipng: {
                                enabled: true
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            }
                        }
                    }
                ]
            }
...
```
可以看到，我们会对所有的图片进行压缩，压缩之后的图片如果小于8KB，那么将直接转为Base64编码，否则通过URL的形式连接图片。

在项目中引入一下3张图片:

- small-image.jpg：只有7KB，将被Base64转码
- normal-image.jpg，40KB，将被压缩
- big-image.jpg，140KB，将被压缩

将这些图片加入index.js中：
```
import _ from 'lodash'
import smallSizeImage from './assets/small-image.jpg';
import normalSizeImage from './assets/normal-image.jpg';
import bigSizeImage from './assets/big-image.jpg';

let result = [1, 2, 3].map((n) => n + 1);

let element = document.createElement('div');
element.innerHTML = _.join(result, '-');
document.body.appendChild(element);

let smallSizeImageElement=document.createElement(('img'));
smallSizeImageElement.src=smallSizeImage;
document.body.appendChild(smallSizeImageElement)

let normalSizeImageElement=document.createElement(('img'));
normalSizeImageElement.src=normalSizeImage;
document.body.appendChild(normalSizeImageElement)

let bigSizeImageElement=document.createElement(('img'));
bigSizeImageElement.src=bigSizeImage;
document.body.appendChild(bigSizeImageElement)
```

运行`cnpm run build`，可以看到distribution文件夹中只有2张图片了，因为7KB那张已经被Base64编码后直接放到了js文件中。
 
# 处理css

处理css主要有2个loader：

- style-loader：负责将css自动添加到html文件中
- css-loader：负责处理对css文件的依赖 

安装：
```
cnpm install --save-dev style-loader css-loader
```

在webpack.config.js文件中加入以下loader配置：
```
...
                  {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader'
                        ]
                    }
...
```
创建main.css文件：
```
body {
    background-color: antiquewhite;
}
```
在index.js中引入main.css：
```
...
import './main.css'
...
```
运行`cnpm start`，可以看到页面的背景色发生了改变。


# 代码分隔
webpack4默认对代码分隔提供了很好的支持，先修改output：
```
   output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'distribution')
    },
```
这样分隔的每个chunk文件都会以自己chunk的名字来命名。

然后在webpack.config.js中配置optimization：
```
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
```
再次运行`cnpm run build`，此时的distribution文件夹如下：
```
├── 10b9ee4915331d4d1c3f84afae3bcb93.jpg
├── 6ae19e419ad3696ced138f8a7d02a59f.jpg
├── index.html
├── main.b5d4929ad6aec532039c.js
├── runtime.ad513d18f94de88a582b.js
└── vendors.15e792b64ae1030c47b4.js
```
可以看到，最终生成了3个js文件，`main.b5d4929ad6aec532039c.js`对应我们自己的代码，`runtime.ad513d18f94de88a582b.js`对应webpack运行时代码，`vendors.15e792b64ae1030c47b4.js`对应所有的第三方库的代码。