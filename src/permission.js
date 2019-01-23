//路由控制
import router from './router'
// import store from './store'
// import env from './../config/env.prod'
// import { Message } from 'element-ui';
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样
import axois from 'axios'

//这是路由的进行跳转时完成的
router.beforeEach((to, from, next) => {
  
  //进度条
  console.info("请求开始")
  next()
  // NProgress.start();
});


router.afterEach(() => {
  console.info("请求结束")

  // NProgress.done();
})
