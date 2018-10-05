import "babel-polyfill";
import _ from "lodash";
import axios from "axios";
import common1 from "./common1";
import common2 from "./common2";

const request = axios.create({
    timeout: 10 * 1000,
    baseURL: '/api/'
});


let result = [1, 2, 3].map((n) => n + 1);

let element = document.createElement('div');
element.innerHTML = _.join(result, '-');
document.body.appendChild(element);

var button = document.createElement('button');
button.innerHTML = 'Say Hello';
document.body.appendChild(button);
button.onclick = e =>
    import(/* webpackChunkName: "asynccommon3" */ './common3').then(module => {
        var common3 = module.default;

        common1();
        common2();
        common3();
    });


