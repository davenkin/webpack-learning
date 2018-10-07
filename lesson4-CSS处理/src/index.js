import _ from 'lodash'
import './main.css'

let result = [1, 2, 4].map((n) => n + 1);

let element = document.createElement('div');
element.innerHTML = _.join(result, '-');
document.body.appendChild(element);



