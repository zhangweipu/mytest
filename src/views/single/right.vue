<template>
  <div class="grid-content bg-purple" :style="{height: windowHeight}">

      <div class="block">
        <div class="radio">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
  </div>

</template>

<script>
    export default {
        name: "right",
        data() {
            return {
                reverse: true,
                activities: [{
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }]
            };
        }
    }
</script>

<style>
  .wind {
    width: auto;
    height: auto;
    background: white;
    z-index: 20;
    margin: 20px;
    border-radius: 2px;
    clear: both;
  }

  .wind-label {
    clear: both;
    height: auto;
  }
/*.el-timeline-item__content{*/
/*  height: 30px;*/
/*}*/
/*  .el-timeline-item{*/
/*    height: 20px;*/
/*  }*/
/*  .radio{*/
/*    height: 50px;*/
/*  }*/
/*  .el-radio{*/
/*    margin: 0px;*/
/*    padding: 0px;*/
/*  }*/
</style>
