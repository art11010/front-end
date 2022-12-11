import Vue from 'vue';
import VueRouter from 'vue-router';

import Routes from './route';

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  routes: Routes,
  scrollBehavior(/* to, from, savedPosition */) {
    return { x: 0, y: 0 };
  },
});

Router.beforeEach((/* to, from, */ next) => {
  next();
});

export default Router;
