import a from './A-module';
import axios from "axios";

const request = axios.create({
    timeout: 10 * 1000,
    baseURL: '/api/'
});


a();

var button = document.createElement('button');
button.innerHTML = 'Say Hello';
document.body.appendChild(button);
button.onclick = e =>{
    import(/* webpackChunkName: "async-lodash" */ 'lodash').then(module => {
        var _ = module.default;
        let result = [1, 2, 3].map((n) => n + 1);

        let element = document.createElement('div');
        element.innerHTML = _.join(result, '-');
        document.body.appendChild(element);

    });
import(/* webpackChunkName: "async-b" */ './B-module').then(module => {
    var b = module.default;
    b();
});
    import(/* webpackChunkName: "async-c" */ './C-module').then(module => {
        var c = module.default;
        c();
    });

};


