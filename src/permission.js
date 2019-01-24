//路由控制
import router from './router'
// import store from './store'
// import env from './../config/env.prod'
// import { Message } from 'element-ui';
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样
import axois from 'axios'

const writeList = ['/login', '/single']
//这是路由的进行跳转时完成的
router.beforeEach((to, from, next) => {

  //进度条
  console.info("请求开始")
  var url = to.path
  //如果包括该字段返回-1
  var goRouter = false;
  var user = localStorage.getItem("user");
  console.info("user", user)
  //如果没有登陆
  if (user == 'undefined' || user == null || user == '') {
    console.info(user)
    writeList.forEach(function (value, index) {
      if (url.indexOf(value) != -1) {
        console.info(url)
        console.info("白名单里放行")
        next()
      }
    })
    //如果不包含在白名单里
    next('/login')
  }
  if (user != null) {
    next()
  } else {
    next('/login')
  }

  // NProgress.start();
});


router.afterEach(() => {
  console.info("请求结束")

  // NProgress.done();
})
