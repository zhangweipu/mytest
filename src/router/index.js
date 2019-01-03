import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Hello2 from '@/components/hello2'
//引入布局
import Layout from '../views/layout/Layout'

// 选择不同的引入方式、大型项目中 懒加载页面足够多的话会导致热更新耗时较长、所以只在生产环境下启动懒加载
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/hello2',
    //   name: 'hello2',
    //   component: Hello2
    // }

    // {
    //   path: '/test',
    //   component: _import('test'),
    //   name: '首页'
    // }
    // {
    //   path:'',
    //   component:Layout,
    //   firstFlag:true,
    //   children:[
    //     {
    //       path:'/test',
    //       component:_import('test'),
    //       name:'Test'
    //     }
    //   ]
    // }
    //这货的作用是什么
    {
      path:'/login',
      name:'登陆',
      component:_import('login')
    },
    {
      path:'/tt',
      component:_import('layout/AppMain'),
      children:[
        {
          path:'/mytest',
          component:_import('show/showTest'),
          name:'mytest'
        }
      ]
    },
    {
      path:'/index',
      component:_import('index'),
      name:'index',
      children:[
        {
          path:'/test',
          name:'test',
          component:_import('test'),
          children:[]
        },
        {
          path:'/resume',
          name:'resume',
          component:_import('show/resume/index')
        },
        {
          path:'/resume2',
          name:'resume2',
          component:_import('show/resume/index2')
        },
        {
          path:'/resume3',
          name:'resume3',
          component:_import('show/resume/index3')
        }
      ]
    }

    // {
    //   path:'/mytest',
    //   component:_import('show/showTest'),
    //   name:'mytest'
    // }
  ]
})
