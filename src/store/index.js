import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import demo from './modules/demo'
import $article from './modules/article'
import $single from './modules/singlestore'
import $validate from './modules/validatestore'


Vue.use(Vuex);

const store = new Vuex.Store({
  //js文件中抛出的固定名称
  modules: {
    demo,
    $article,
    $single,
    $validate
  },
  getters
});

export default store
