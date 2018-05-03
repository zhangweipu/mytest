<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{msg}}
    aaaaaaaaaa
    <router-view/>
  </div>
</template>
<script>
  //导入组件
  // import hello from './components/HelloWorld'
  // import hello2 from './components/hello2'
export default {
  name: 'App',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
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
