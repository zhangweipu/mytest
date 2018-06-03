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
      path:'/test',
      name:'test',
      component:_import('test')
    }
    // {
    //   path:'/mytest',
    //   component:_import('show/showTest'),
    //   name:'mytest'
    // }
  ]
})
