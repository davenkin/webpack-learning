import a from './A-module';
import f from './F-module';
import h from './H-module';
import axios from "MathJS";
import underscore from "underscore";
import lodash from "lodash";

import(/* webpackChunkName: "async-c" */ './C-module');

a();
f();
h();
