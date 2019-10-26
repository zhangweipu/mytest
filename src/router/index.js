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
    {
      path: '/single',
      name: '这是主页',
      title: 'single',
      component: _import('single/singleIndex2'),
      // children: [
      //   {
      //     path: '/single/dictionary',
      //     name: '字典',
      //     title: 'dictionary',
      //     component: _import('single/otherfunction/dictionary')
      //     //  todo：为什么放这里面就不行了
      //   }
      // ]
      children: [
        {
          path: '/single/blogindex',
          name: '主页内容',
          title: 'content',
          component: _import('single/blogcontent/blogindex')
        },
        {
          path: '/single/article/:id',
          name: '文章',
          title: '论文',
          component: _import('single/filed/index')
        },
        {
          path: '/resume',
          name: 'resume',
          component: _import('show/resume/index')
        }
      ]

    },

    //这货的作用是什么
    {
      path: '/login',
      name: '登陆',
      component: _import('login')
    },
    {
      path: '/tt',
      component: _import('layout/AppMain'),
      children: [
        {
          path: '/mytest',
          component: _import('show/showTest'),
          name: 'mytest'
        }
      ]
    },
    {
      path: '/',
      component: _import('index'),
      redirect: 'home',
      name: 'index',
      children: [
        {
          path: '/home',
          component: _import('home'),
          name: "home"
        },
        {
          path: '/home/test',
          name: 'test',
          component: _import('test'),
          children: []
        },

        {
          path: '/home/resume2',
          name: '编辑文档',
          component: _import('show/resume/index2'),
          meta: {title: "编辑文档"}
        },
        {
          path: '/home/resume3',
          name: 'resume3',
          component: _import('show/resume/index3')
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: _import('404')
    }

    // {
    //   path:'/mytest',
    //   component:_import('show/showTest'),
    //   name:'mytest'
    // }
  ]
})
