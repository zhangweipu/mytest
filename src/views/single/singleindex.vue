<template>
  <el-carousel :title="title" :interval="5000" arrow="always" :height="height1">
    <el-carousel-item :title="title" v-for="(item,idx) in dataCarousel" :key="idx">
      <!--:class是做什么的 :style 和style的区别是什么-->
      <div class="pull-height animated" :style="{backgroundImage:'url('+item.imgUrl+')'}" :class="'a'+idx"
           style="background-size: 100% 100%;">

        <!--<img src="/static/background.jpg" class="img-fluid imgset"></img>-->

        <div class="index" :style="{display:idx==0?'':'none'}">
          <el-container class="content">
            <el-header style="font-size: xx-large;background-color: rgba(255,255,255,0.0)">
              张伟普的主页
            </el-header>
            <el-main class="el-main" style="height: 600px;background: rgba(255,255,255,0.0)">
              <div class="poems" style="border: red solid">
                <el-alert style="font-weight: bolder;font-size: xx-large">
                  <dl class="ql-editor" v-html="sentence.content">
                    {{sentence.content}}
                  </dl>
                </el-alert>
              </div>
              <div class="float-right" style="border: red solid;height: 100px;width: 50px;
          background-image: url('/static/image/lufei.jpeg');background-size: 100% 100%">
              </div>

              <el-button @click="test">按钮</el-button>
            </el-main>
            <el-footer
              style="position: relative;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
              </div>
            </el-footer>
          </el-container>
        </div>
        <div class="index2" :style="{display:idx==1?'': 'none'}">
          <el-container class="content">
            <el-header style="font-size: xx-large;background-color: rgba(255,255,255,0.0)">
              张伟普的主页
            </el-header>
            <el-main class="el-main" style="height: 600px;background: rgba(255,255,255,0.0)">
              <div class="index2-main"
                   style="background: white;height: 300px;width: 500px;position:relative;left: 150px;top: 50px; border: red solid">
                <div class="index2-title" style="position: absolute">
                  <h5>哲理短文</h5>
                </div>
                <div class="index2-content" style="position: absolute;align-content: center">
                  <div class="sentence n1">就算你觉得自己是一个屎壳郎，</div>
                  <div class="sentence">总有一天会不远万里找到一坨臭狗屎，</div>
                  <div class="sentence">然后当成宝贝，在不远万里的把她滚回家，</div>
                  <div class="sentence">一路上细心呵护着，怕她被抢，被踩扁，</div>
                  <div class="sentence">或者撞到石头上，</div>
                  <div class="sentence">一心想着把她变成家里的镇宅之宝。</div>

                </div>
              </div>
            </el-main>
            <el-footer
              style="position: relative;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
              </div>
            </el-footer>
          </el-container>
        </div>
        <div class="index3" :style="{display:idx==2?'': 'none'}">
          <el-container class="content">
            <el-header style="font-size: xx-large;background-color: rgba(255,255,255,0.0)">
              张伟普的主页
            </el-header>
            <el-main class="el-main" style="height: 600px;background: rgba(255,255,255,0.0)">
              <div class="ql-container">
                didjidjidjidjiji
              </div>
            </el-main>
            <el-footer
              style="position: relative;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">About</router-link>
              </div>
            </el-footer>
          </el-container>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
  <!--一些判断的例子
  :class="['content',{'radioModel':checkType}]"
:class="['siteAppListDirNode',{open:appitem.open==true}]"
:class="['portalCenterMenu',{showNav:!showHideNav,hideNav:showHideNav}]"
:class="{shortcutMenuShow:!showHideNav,shortcutMenuHide:showHideNav}"
:style="{height:checkType?'423px':'385px'}"
:src="userInfo.userFace?userInfo.userFace:defaultHead"
-->
</template>
<script>
  //这种太复杂,自己的小东西用不到
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "singleindex",
    data() {
      return {
        title: "",
        content: "main",

        height1: '',
        dataCarousel: [
          {
            imgUrl: "/static/image/bg-img-01.jpg",
            poem: "锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦"
          },
          {
            imgUrl: "/static/image/bg-img-05.jpg",
            poem: "锄禾日当午，汗滴禾下土，"
          },
          {
            imgUrl: "/static/image/bg-img-06.jpg",
            poem: "锄禾日当午，汗滴禾下土，谁知盘中餐，"
          }
        ],
        sentence: {
          id: '',
          userid: '',
          title: '',
          createtime: '',
          content: ''
        }
      }
    },
    //使用的是getters.js中放入的值，通过mutations中的数据实现联动的
    computed: {
      ...mapGetters(['$single', '$article', '$validate'])
    },
    methods: {
      //demo.js中放入actions的方法调用使用方法名
      ...mapActions(['singleaction', 'getSentence', 'loginsys']),
      getHeight() {
        this.height1 = window.innerHeight + 'px';
        console.log('hegiht', this.height1)
      },
      test() {
        var data = {
          'str': 'here'
        }
        this.loginsys(data).then(res => {

        })
      },
      findsentence() {
        this.getSentence(2).then(res => {
          var a = res.data
          console.info(a)
          this.sentence = a
          console.info('sentence')
          console.info(this.sentence)
        })
      },
      //页面跳转
      func() {
        this.$router.push({name: '/order/page1', params: {id: '1'}});
      }

    },
    created() {
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
      console.info('获取完高度')
      this.findsentence()
    },
    destroyed() {
      window.removeEventListener('resize', this.getHeight)
    }
  }


</script>
<style scoped>
  .ql-editor {
    font-size: small;
    color: red;
  }

  .links {
    font-size: xx-large;
    float: left;
    margin-left: 20px;
  }

  .article p {
    height: 30px;
  }

  .n1 {
    margin-top: 30px;
  }

  .sentence {
    height: 25px;
    font-family: 仿宋;
    font-size: x-large;
    color: #df5723;
    margin-left: 30px;
  }

  .poems, .index2-main {
    /*设置透明但是有模糊设置透明：background-color: rgba(255,255,255,0.0)*/
    /*filter: alpha(Opacity=1);*/
    /*-moz-opacity: 1;*/
    /*这是设置透明度的包括文字*/
    opacity: 0.5;
    margin: 0px;
    padding: 0px;
    z-index: 0;
  }

  .content {
    height: 100%;
  }

  .pull-height {
    height: 100%;
    z-index: 2;
  }

  /*el-carousel-item{*/
  /*color: #475669;*/
  /*font-size: 18px;*/
  /*opacity: 0.75;*/
  /*line-height: 300px;*/
  /*margin:100px;*/
  /*}*/

</style>
