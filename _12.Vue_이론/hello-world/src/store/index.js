import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

store = new Vuex.Store({
  // modules: {}
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
