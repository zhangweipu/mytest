// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import '@/permission'
import '../theme/index.css'
import 'lib-flexible'
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// require styles 引入样式
import VueQuillEditor from 'vue-quill-editor'
import Vues from 'vue-resource'
import common from './common'


require('../node_modules/quill/dist/quill.core.css')
require('../node_modules/quill/dist/quill.snow.css')
require('../node_modules/quill/dist/quill.bubble.css')
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
import store from './store'
import response from "vue-resource/src/http/response";
// new Vue({
//   store
// })

Vue.use(axios)
Vue.use(VueQuillEditor)
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(common)
Vue.config.productionTip = false
axios.interceptors.request.use(config => {
  console.info("aaaa")
  debugger
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: {App},
  template: '<App/>'
})



