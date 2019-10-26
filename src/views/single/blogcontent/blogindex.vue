<template>
  <div class="index">
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
    export default {
        name: "blogindex"
    }
</script>

<style>
  .el-row {
    margin-bottom: 2px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 0px 0;
    background-color: #f9fafc;
  }
</style>
