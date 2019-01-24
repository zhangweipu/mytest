<template>
  <div class="header1" style="height: 50px;margin: 0px">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             style="height: 50px;">
      <el-menu-item index="1">
        <router-link :to="{path:'/home',title:'home'}">首页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">
          <router-link :to="{path: '/home/resume2',title: '编辑文档'}">编辑文档</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <router-link :to="{path:'/home/message'}">消息中心</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link target="_blank" :to="{path:'/resume'}">我的简历</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link target="_blank" :to="{path:'/single'}">我的主页</router-link>
      </el-menu-item>
      <h4 class="show">张伟普的官网后台</h4>
      <el-submenu index="9" style="position: absolute;right: 40px">
        <template slot="title">{{user}}</template>
        <el-menu-item index="9-1" @click="logout">退出</el-menu-item>
        <!--<el-menu-item index="9-2">选项2</el-menu-item>-->
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        user: '张伟普'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout() {
        localStorage.removeItem("user")
        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style scoped>
  .header1 {

  }

  .show {
    padding: 0px;
    font-family: "Adobe 黑体 Std R";
    position: absolute;
    left: 650px;
    top: 10px;
    font-size: large;
  }
</style>
