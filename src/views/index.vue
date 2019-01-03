<template>
  <div>
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
  </div>
</template>

<script>
  import Left from './layout/left'
  import AppMain from './layout/AppMain'
  import Top from './layout/top'
    export default {
        name: "index",
      components: {
        AppMain,
        Top,
        Left
      },
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
