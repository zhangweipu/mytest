<template>
  <div id="app">
    <Top></Top>

    <el-container style="height: 1200px; border: 1px solid #eee">
      <Left></Left>
      <!--<el-aside width="200px"><Left></Left></el-aside>-->
      <el-container>
        <!--<el-header><Top></Top></el-header>-->
        <el-main><AppMain></AppMain></el-main>
        <!--<el-footer><Footer></Footer></el-footer>-->
      </el-container>
    </el-container>
    <!--<div>-->
    <!--<b-alert show>App.vue</b-alert>-->
    <!--</div>-->
    <!--<Footer></Footer>-->
  </div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Left from './views/layout/left'
  import AppMain from './views/layout/AppMain'
  import Footer from './views/layout/footer'
  import Top from './views/layout/top'
  //导入组件
  import Layout from './views/layout/Layout'
  // import hello from './components/HelloWorld'
  // import hello2 from './components/hello2'
  // import axios from 'axios'

  export default {
    name: 'App',
    components: {
      AppMain,
      Layout,
      Top,
      Left
    },
    data() {
      return {
        msg: '欢迎来到菜鸟教程！',
        test: ''
      }
    },
    //   this:console.log("daozh"),
    // //加载mounted 或 create
    // created:function(){
    //   this.loadData
    // },
    // //TODO：没能实现数据传输
    // computed:{
    //   loadData:function () {
    //     axios.post("/api/admin/api/test").then(function (response) {
    //       console.log(1),
    //       this.test=response.data.data
    //     }.bind(this))
    //   }
    // }


  }

</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  ::-webkit-scrollbar{
    width: 5px;
    background: red;
  }
  ::-webkit-scrollbar-track{
    border-radius:10px;
    background: #2c3e50;
  }
  ::-webkit-scrollbar-thumb{
    background: #8c939d;
  }
</style>
