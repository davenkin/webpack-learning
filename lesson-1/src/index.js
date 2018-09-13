import './main.css'
import _ from 'lodash'
import pic4 from './pic4.png'

//使用 js 添加图片
let img = document.createElement("img");
img.src = pic4;
let imgDiv = document.createElement("div");
imgDiv.appendChild(img);
document.body.appendChild(imgDiv);

var element = document.createElement('div');
element.innerHTML = _.join(["Hello", "World"], ' ');

document.body.appendChild(element);


