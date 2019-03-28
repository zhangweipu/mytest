<template>
  <el-carousel :title="title" :interval="5000" arrow="always" :height="this.windowHeight()">
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
              style="position: absolute;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{path:'/single',params: '',title: 'aa'}" class="links">首页</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">分类</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">归档</router-link>
                <router-link target="_blank" :to="{name:'resume',params: '',title: 'aa'}" class="links">关于</router-link>
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
              style="position: absolute;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{path:'/single',params: '',title: 'aa'}" class="links">首页</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">分类</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">归档</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">关于</router-link>
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
              <div class="ql">
                <div class="list-group">
                  <div class="list-group-item" v-for="i in articles" @click="godetail(i.id)"
                       style="border: red solid 1px;height: 200px;line-height: 20px;opacity: 0.5;">
                    <div
                      style="border: black solid 1px;height: 40px;font-size: xx-large;text-align:left;line-height: 50px">
                      {{i.title}}
                    </div>
                    <div style="text-align:left;line-height: 20px;height:80px;border: red solid 1px;padding-left: 50px">
                      {{i.content}}<i class="el-icon-more"></i></div>
                    <div style="border: black solid 1px;height: 40px;">
                      <div style="float: left;font-size: larger"><i class="el-icon-location">{{i.userid}}</i></div>
                      <div style="float: left;font-size: larger"><i class="el-icon-date">{{i.createtime}}</i></div>
                    </div>
                  </div>
                </div>
              </div>
            </el-main>
            <el-footer
              style="position: absolute;bottom: -10px;left: 0px;width: 100%;background-color: rgba(255,255,255,0.0)">
              <div style="height: 100%;margin: 0px;padding: 0px">
                <router-link :to="{path:'/single',params: '',title: 'aa'}" class="links">首页</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">分类</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">归档</router-link>
                <router-link :to="{name:'resume',params: '',title: 'aa'}" class="links">关于</router-link>
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
  import footers from '../single/singlelayout/singlefooter'

  export default {
    name: "singleindex",
    components: {
      footers
    },
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
        sentence: {},
        articles: [{
          id: 'aa11',
          userid: 'aaaaass',
          title: 'sss',
          createtime: 'sssssdnffnjfnj',
          content: 'dnjdnjdnjdnjnjd' +
            'jjhushihfbbdddnfjbvjcbxjbc' +
            'cvbjkcbxzjvcbjxz' +
            '插线板嘉宾出席嘉宾出席' +
            '地方hi丹佛i解放后hi但是' +
            'dsfhoihifsjosdhfihsfdfd' +
            '但还是佛i哦吼迪佛送dsfhio ' +
            '分电视剧佛对手i腹地' +
            '的方式哦的身份后i' +
            '的身份hi哦都十分hi反倒是' +
            '的时间佛教的的加偶但是' +
            'dfjodsfhopdasvnk ' +
            '的房间死哦绝对是佛法的' +
            '地方hi哦为哦啊市场门口出口v你' +
            '的身份你睡觉哦反饥饿反' +
            '的飞机的飞机都费劲' +
            'fjdifjfdijfidf' +
            '放假哦对房价sdhuidhsishsishdihdihsisahdiagfsgdzbjcxbv '
        },
          {
            id: 'aaaa22',
            userid: 'aaaaas222s',
            title: 'sss',
            createtime: 'sssssd22nffnjfnj',
            content: 'dnjdnjdnj2dnjnjd'
          },
          {
            id: 'aaa33a',
            userid: 'aaaa22a3333ss',
            title: 'sss',
            createtime: 'sssssdnffnjfnj',
            content: '333333333333333'
          },
          {
            id: 'aaaa4',
            userid: 'aaaaas4s',
            title: 'sss',
            createtime: 'sssss4dnffnjfnj',
            content: 'dnjdnjdn4jdnjnjd'
          }
        ]
      }
    },
    //使用的是getters.js中放入的值，通过mutations中的数据实现联动的
    computed: {
      ...mapGetters(['$single', '$article', '$validate'])
    },
    methods: {
      //demo.js中放入actions的方法调用使用方法名
      ...mapActions(['singleaction', 'getSentence', 'loginsys']),
      // getHeight() {
      //   this.height1 = window.innerHeight + 'px';
      //   console.log('hegiht', this.height1)
      // },
      test() {
        var data = {
          'str': 'here'
        }
        this.loginsys(data).then(res => {

        })
      },
      godetail(id) {
        this.$router.push({path: '/single/article/' + id});
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
      // this.getHeight()
      console.info('获取完高度')
      this.findsentence()
    },
    destroyed() {
      window.removeEventListener('resize', this.getHeight)
    }
  }


</script>
<style scoped>
  /*.ar {*/
  /*!*清除浮动并不能使文字位于div里*!*/
  /*!*clear: both;*!*/
  /*!*position: relative;*!*/
  /*!*margin: 0px;*!*/
  /*!*padding: 0px;*!*/
  /*!*height: 20px;*!*/

  /*}*/
  .ar-title {
    /*margin-top: -50px;*/
    border: red solid 1px;
  }

  .ar-key {
    border: #409eff solid 2px;
  }

  .ar-content {
    border: #0b0b0b solid 2px;
  }

  .ar-detail {
    border: white solid 2px;
  }

  /*.ls {*/
  /*background-color: #b1dfbb;*/
  /*height: 150px;*/
  /*opacity: 0.8;*/
  /*margin: 0px;*/
  /*!*padding: 0px;*!*/
  /*}*/

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
