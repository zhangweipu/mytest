<template>
  <div id="app2">
    <el-container>
      <el-container>
        <el-main :style="{height: windowHeight}" style="padding: 0px">
          <el-row style="padding: 0px;margin: 0px">
            <el-col :span="3">
              <div class="grid-content bg-purple" style="padding: 0px" :style="{height: windowHeight}"></div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content bg-purple-light">
                <router-view/>
              </div>
            </el-col>
            <el-col :span="4">
              <RIGHT></RIGHT>
            </el-col>
            <el-col :span="3">
              <div>kong</div>
            </el-col>
          </el-row>

        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
    import right from "./right";

    export default {
        components: {
            RIGHT: right
        },
        name: "SingleAppMain",
        data() {
            return {
                message: 'aaaaaa',
                windowHeight: '',
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
            }
        },
        methods: {
            getHeight() {
                this.windowHeight = window.innerHeight - 50 + 'px';
                console.log('hegiht', this.windowHeight)
            },
        },
        created() {
            //获取窗口高度的方法,没啥作用
            window.addEventListener('resize', this.getHeight);
            this.getHeight()
        },
        destroyed() {
            window.removeEventListener('resize', this.getHeight)
        }
    }
</script>

<style>
  .el-row {
    margin-bottom: 20px;

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
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
