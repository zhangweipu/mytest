<template>
  <el-carousel :interval="5000" arrow="always" :height="height1">
    <el-carousel-item v-for="item,idx in dataCarousel" :key="item">
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
                  {{item.poem}}{{idx}}{{height1}}item{{item}}
                </el-alert>
              </div>
              <div class="float-right" style="border: red solid;height: 100px;width: 50px;
          background-image: url('/static/image/lufei.jpeg');background-size: 100% 100%">
              </div>
              {{content}}
              <el-button @click="test">按钮</el-button>
            </el-main>
            <el-footer
              style="position: relative;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
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
              <div class="index2-main" style="background: white;height: 400px;width: 600px;position:relative;left: 150px;top: 50px; border: red solid">
                <div class="index2-title" style="position: absolute">
                      <h5>悯农</h5>
                </div>
                <div class="index2-content" style="position: absolute">
                  锄禾日当午
                  锄禾日当午
                  锄禾日当午
                  锄禾日当午

                </div>
              </div>
            </el-main>
            <el-footer
              style="position: relative;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
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
              inde3
            </el-main>
            <el-footer
              style="position: relative;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
                <router-link :to="{name:'resume',params: ''}" class="links">About</router-link>
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
  import axios from 'axios'

  export default {
    name: "singleindex",
    data() {
      return {
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
        ]
      }
    },
    //使用的是getters.js中放入的值，通过mutations中的数据实现联动的
    computed: {
      ...mapGetters(['$single'])
    },
    methods: {
      //demo.js中放入actions的方法调用使用方法名
      ...mapActions(['singleaction']),
      getHeight() {
        this.height1 = window.innerHeight + 'px';
        console.log('hegiht', this.height1)
      },
      test() {
        var data = {
          'str': 'here'
        }
        this.singleaction(data).then(res => {
          console.log(res.data)
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
    },
    destroyed() {
      window.removeEventListener('resize', this.getHeight)
    }
  }


</script>
<style scoped>
  .links {
    font-size: xx-large;
    float: left;
    margin-left: 20px;
  }
  .poems,.index2-main{
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
