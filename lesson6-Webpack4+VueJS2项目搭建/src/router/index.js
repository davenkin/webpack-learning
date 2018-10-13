import Vue from "vue";
import Router from "vue-router";
import HelloWorld1 from "@/components/HelloWorld1";
import HelloWorld2 from "@/components/HelloWorld2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/helloworld1',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/helloworld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    }
  ]
})
