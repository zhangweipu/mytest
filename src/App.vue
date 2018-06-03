<template>
  <div id="app">
    <Top></Top>
    <Left></Left>
    <AppMain></AppMain>

    <div>
      <b-alert show>App.vue</b-alert>
    </div>
    <Footer></Footer>
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
  // import hello from './components/HelloWorld'
  // import hello2 from './components/hello2'
 // import axios from 'axios'
export default {
  name: 'App',
  components:{
    Left,
    AppMain,
    Footer,
    Top
  },
  data () {
    return {
      msg: '欢迎来到菜鸟教程！',
      test:''
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
  margin-top: 60px;
}
</style>
