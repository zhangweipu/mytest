<template>
  <div class="header1"  style="margin: 0px">
    <el-menu  class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link :to="{path:'/single/blogindex',title:'home'}">首页</router-link>
      </el-menu-item>
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">
        <router-link :to="{path: '/home/resume2',title: '编辑文档'}">编辑文档</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{path:'/home/message'}">消息中心</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link target="_blank" :to="{path:'/resume'}">我的简历</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link target="_blank" :to="{path:'/single'}">我的主页</router-link>
      </el-menu-item>

    </el-menu>

  </div>
</template>
<script>
    export default {
        name: "singletop",
        data() {

            return {
                topHeight: '50px',
            }
        },
        methods: {},
        created() {

        }
    }
</script>

