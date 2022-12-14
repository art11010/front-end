import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // modules: {}
  // plugins: [],
  // strict: true
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
  },
  getters: {
    countGetters: (state) => {
      return 100 + state.count;
    },
  },
});
