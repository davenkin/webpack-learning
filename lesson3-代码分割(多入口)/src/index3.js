import a from './A-module';
import f from './F-module';
import h from './H-module';
import lodash from 'lodash'
import jquery from "jquery";

import(/* webpackChunkName: "async-c" */ './C-module');

a();
f();
h();