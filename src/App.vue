<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{msg}}
    aaaaaaaaaa
    {{test}}
    <router-view/>
  </div>
</template>
<script>
  //导入组件
  // import hello from './components/HelloWorld'
  // import hello2 from './components/hello2'
  import axios from 'axios'
export default {
  name: 'App',
  params:'',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！',
      test:''
    }
  },
    this:console.log("daozh"),
  //加载mounted 或 create
  created:function(){
    this.loadData()
  },
  //TODO：没能实现数据传输
  methods:{
    loadData:function () {
      axios.post("/api/admin/api/test").then(function (response) {
        console.log(1),
          console.log(response.data.data)
        this.test=response.data.data
      })
    }
  }



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
