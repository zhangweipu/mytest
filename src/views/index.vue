<template>
  <div>

    <el-container style=" border: 1px solid #eee" v-bind:style="{height:windowHeight}">
      <!--<Left></Left>-->
      <!--<el-aside width="200px"><Left></Left></el-aside>-->
      <!--<el-header><Top></Top></el-header>-->
      <el-header style="height: auto;background-color: white">
        <Top></Top>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 30px;margin-left: 200px">
          <el-breadcrumb-item v-for="(item) in levelList" :key="item.path" v-if="item.meta.title">
            <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <AppMain></AppMain>
      </el-main>
      <!--<el-footer><Footer></Footer></el-footer>-->
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
    data() {
      return {
        windowHeight: '',
        levelList: null,
        imgUrl:"/static/image/bg-img-06.jpg"
      }
    },
    methods: {
      getHeight() {
        this.windowHeight = window.innerHeight +'px';
        console.log('hegiht', this.windowHeight)
      },
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        if (first && first.name !== '首页') {
          matched = [{path: '/home', meta: {title: '首页'}}].concat(matched)
        }
        this.levelList = matched;
      }
    },
    mounted() {
      this.getBreadcrumb();
    },
    watch: {
      $route(to, from) {
        this.getBreadcrumb();
      }
    },
    created() {
      //获取窗口高度的方法
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
    },
    destroyed() {
      window.removeEventListener('resize', this.getHeight)
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

  ::-webkit-scrollbar {
    width: 5px;
    background: red;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #2c3e50;
  }

  ::-webkit-scrollbar-thumb {
    background: #8c939d;
  }
</style>
