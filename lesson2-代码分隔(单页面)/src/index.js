import _ from "lodash";
import a from './A-module';
let result = [1, 2, 3].map((n) => n + 1);

let element = document.createElement('div');
element.innerHTML = _.join(result, '-');
document.body.appendChild(element);

a();

var button = document.createElement('button');
button.innerHTML = 'Say Hello';
document.body.appendChild(button);
button.onclick = e =>{
import(/* webpackChunkName: "async-b" */ './B-module').then(module => {
    var b = module.default;
    b();
});
    import(/* webpackChunkName: "async-c" */ './C-module').then(module => {
        var c = module.default;
        c();
    });

};


