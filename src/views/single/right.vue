<template>
  <div :style="{height: windowHeight}">

    <el-card class="right">
      <div class="right-label">ss</div>
      <div class="right-content">
        dd
      </div>
    </el-card>

      <el-card class="right">
        <div>
          sss
        </div>
        <el-container>
          ssss
        </el-container>
        ssssffji
      </el-card>


      <el-card class="right">
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
      </el-card>

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
                },{
                    content: '创建成功',
                    timestamp: '2018-04-11'
                },{
                    content: '创建成功',
                    timestamp: '2018-04-11'
                },{
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
  .right{
    margin-bottom: 20px;
  }
</style>
