import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import demo from './modules/demo'


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    demo
  },
  getters
});

export default store
