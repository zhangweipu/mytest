import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import demo from './modules/demo'
import $article from './modules/article'


Vue.use(Vuex);

const store = new Vuex.Store({
  //js文件中抛出的固定名称
  modules: {
    demo,
    $article
  },
  getters
});

export default store
