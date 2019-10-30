<template>
  <div>
    <!-- 存在加载的问题-->
    <el-card>
      <div slot="header" style="height: 10px">
        ssssdhuhdu
      </div>
      <div>
        vjvdjfif
        djidji
        djijid
        jdi\n
        ssscccc
      </div>
      <div>
        vjvdjfif
        djidji
        djijid
        jdi\n
        ssscccc
      </div>
      <div>
        vjvdjfif
        djidji
        djijid
        jdi\n
        ssscccc
      </div>
      <el-divider></el-divider>
      <div>
        sss
      </div>
    </el-card>

    <el-card>
      <div slot="header" style="height: 10px">
        ssssdhuhdu
      </div>
      <div>
        vjvdjfif
        djidji
        djijid
        jdi\n
        ssscccc
      </div>
      <div>
        vjvdjfif
        djidji
        djijid
        jdi\n
        ssscccc
      </div>
      <div>
        vjvdjfif
        djidji
        djijid
        jdi\n
        ssscccc
      </div>
    </el-card>

  </div>

</template>

<script>
    export default {
        name: "blogindex",
        props: {
            messA: {
                type: String
            }
        },
        data() {
            return {
                // heights: '50px',
                count: 10
            }
        },
        methods: {
            load() {
                this.count += 2
            }
        }
    }
</script>

<style scoped>
.el-card{
  margin-bottom: 10px;
}
  .el-divider{
    margin: 0px;
  }
</style>
