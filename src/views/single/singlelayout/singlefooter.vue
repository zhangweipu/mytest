<template>
  <el-footer
    style="position: absolute;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
    <div style="height: 100%;margin: 0px;padding: 0px">
      <router-link :to="{path:'/single',params: '',title: 'aa'}" class="links">首页</router-link>
      <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">分类</router-link>
      <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">归档</router-link>
      <router-link target="_blank" :to="{name:'resume',params: '',title: 'aa'}" class="links">关于</router-link>
    </div>
  </el-footer>
</template>

<script>
    export default {
        name: "singlefooter"
    }
</script>

<style scoped>

</style>
