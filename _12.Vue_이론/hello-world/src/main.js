import Vue from 'vue';
import App from './App.vue';

import Router from './router/index';
import store from './store/index';
// prodoction setting
Vue.config.productionTip = false;

// Vue 인스턴스 생성
new Vue({
  data: {
    test: 'test',
  },
  store: store,
  router: Router,
  render: (h) => h(App),
}).$mount('#app');
