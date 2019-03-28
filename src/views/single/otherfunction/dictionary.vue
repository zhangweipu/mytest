<template>
  <div class="main">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light">{{this.windowHeight()}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "dictionary",
    data() {
      return {
        height: this.common.aa
      }
    }
  }
</script>

<style scoped>
  .grid-content {

  }
</style>
