<template>
  <section class="app-main">
    <transition>
      <router-view/>
    </transition>
  </section>
</template>

<script>
  import Top from './top'
  export default {
    name: "app-main",
    components:{
      Top
    }
  }
</script>

<style scoped>
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
