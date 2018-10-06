import a from './A-module';
import g from './G-module';
import h from './H-module';
import axios from "axios";
import underscore from 'underscore';
import(/* webpackChunkName: "async-lodash" */ 'lodash');
import(/* webpackChunkName: "async-b" */ './B-module');



a();
g();
h();