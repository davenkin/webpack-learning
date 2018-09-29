import _ from 'lodash'

let element = document.createElement('div');
element.innerHTML = _.join(['Hello', 'World'], ' ')
document.body.appendChild(element);
