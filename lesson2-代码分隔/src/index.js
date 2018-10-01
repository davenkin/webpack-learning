import "babel-polyfill";
import _ from "lodash";
import axios from "axios";

const request = axios.create({
    timeout: 10 * 1000,
    baseURL: '/api/'
});


let result = [1, 2, 3].map((n) => n + 1);

let element = document.createElement('div');
element.innerHTML = _.join(result, '-');
document.body.appendChild(element);

var button = document.createElement('button');
button.innerHTML = 'Say hello';
document.body.appendChild(button);
button.onclick = e =>
    import(/* webpackChunkName: "hello" */ './hello').then(module => {
        var hello = module.default;

        hello();
    });


