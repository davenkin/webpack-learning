import a from './A-module';
import f from './F-module';
import g from './G-module';
import axios from "axios";
import lodash from 'lodash'
import(/* webpackChunkName: "async-b" */ './B-module');
import(/* webpackChunkName: "async-c" */ './C-module');

a();
f();
g();
