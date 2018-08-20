<template>
  <div class="el-main">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-main class="div-main">
            <el-row>
              <el-col :span="16">
                <div class="grid-content bg-purple">
                  <div class="resume-title">
                    <div class="text resume-name">officeplus</div>
                    <div class="text resume-about">软件开发</div>
                    <div class="text-content">
                      热爱并擅长协调工作、经营类工作。关注用户的内容偏好，有基本的数据分析能力。喜欢新技术、新产品，对互联网产品的运营有浓厚的兴趣和热情。坚信好的互联网产品必将营造更美好的生活。
                    </div>
                  </div>
                  <div class="resume resume-background">
                    <div class="title background-title">
                      教育背景EDUCATION&nbsp;&nbsp;--------------------------------------------
                    </div>
                    <div class="content background-content">
                      <div class="content-title background">
                        Office PLUS大学 软件工程交互艺术 硕士 2013.9-2015.6
                      </div>
                      <div class="content-full background">
                        <span>GPA 3.6/4.0 班级排名2/26 专业排名 4/50</span>
                      </div>
                    </div>
                    <div class="content background-content">
                      <div class="content-title background">
                        Office PLUS大学 软件工程 本科 2009.9-2013.6
                      </div>
                      <div class="content-full background">
                        GPA 3.5/4.0 班级排名3/28 专业排名 6/57
                      </div>
                    </div>
                  </div>
                  <div class="resume resume-experience">
                    <div class="title experience-title">
                      实习经历JOB EXPERIENCE&nbsp;&nbsp;--------------------------------------
                    </div>
                    <div class="content experience-content">
                      <div class="content-title experience">
                        产品实习生：Office 产品事业部 2014.10-至今
                      </div>
                      <div class="content-full experience">
                        <span>主要职责：Office视频移动客户端产品策划工作。</span>
                        <ul>
                          <li>对竞品，特别是个人页面进行SWOT分析。策划个人页改版方案，并协调设计与技术实施。改版后，用户使用个人页面的频率上升35%；</li>
                          <li>编写视频移动端与今日头条、红包等第三方合作需求PRD，并跟进实施。活动期间App周下载量提高40%，活跃用户提高50%；</li>
                          <li>直接在句尾回车增加能容。</li>
                        </ul>

                      </div>

                      <div class="content-title experience">
                        产品实习生：Office 产品事业部 2014.10-至今
                      </div>
                      <div class="content-full experience">
                        <span>主要职责：Office视频移动客户端产品策划工作。</span>
                        <li>对竞品，特别是个人页面进行SWOT分析。策划个人页改版方案，并协调设计与技术实施。改版后，用户使用个人页面的频率上升35%；</li>
                        <li>编写视频移动端与今日头条、红包等第三方合作需求PRD，并跟进实施。活动期间App周下载量提高40%，活跃用户提高50%；</li>
                        <li>直接在句尾回车增加能容。</li>

                      </div>
                    </div>

                  </div>
                  <div class="resume resume-practice">
                    <div class="resume resume-experience">
                      <div class="title experience-title">
                        实践经历PRACTICAL EXPERIENCE&nbsp;&nbsp;--------------------------------------
                      </div>
                      <div class="content experience-content">
                        <div class="content-title experience">
                          全国“Office高校联盟”菁英挑战赛商业策划大赛
                        </div>
                        <div class="content-full experience">
                          <ul>
                            <li>统计产品的数据和优势，为团队的产品设计和商业模式的搭建提供数据支持</li>
                            <li>完成商业广告文案的策划和广告海报的制作</li>
                            <li>作为主讲人，带领最后的路演，并解答嘉宾问题。</li>
                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-dark">
                  <div class="avatar">
                    <img src="/static/lauch.png"/>
                  </div>
                  <div class="person-message">
                    <span class="el-icon-location">北京市海淀区中关村科技园</span>
                  </div>
                  <div class="person-message">
                    <span class="el-icon-mobile-phone">18010001000</span>
                  </div>
                  <div class="person-message">
                    <span class="el-icon-message">officeplus@microsoft.com</span>
                  </div>
                  <div class="person-message">
                    <span class="el-icon-location-outline">江苏省 扬州市</span>
                  </div>
                  <div class="person-message">
                    <span class="el-icon-date">1992.06.22</span>
                  </div>
                  <div class="skills">
                    <div class="title2">技能SKILLS-------------</div>
                    <div class="skill">
                      <div class="label">英语</div>
                      <div class="percent">
                        <el-progress :percentage="80" color="#8e71c7"></el-progress>
                      </div>
                    </div>
                    <div class="skill">
                      <div class="label">AE</div>
                      <div class="percent">
                        <el-progress :percentage="80" color="#8e71c7"></el-progress>
                      </div>
                    </div>
                    <div class="skill">
                      <div class="label">AI</div>
                      <div class="percent">
                        <el-progress :percentage="80" color="#8e71c7"></el-progress>
                      </div>
                    </div>
                    <div class="skill">
                      <div class="label">Office</div>
                      <div class="percent">
                        <el-progress :percentage="80" color="#8e71c7"></el-progress>
                      </div>
                    </div>
                  </div>
                  <div class="honors">
                    <div class="title2">荣誉AWARDS----</div>
                    <div class="honor"><span>2014  校级优秀学生干事</span></div>
                    <div class="honor"><span>2014  院级优秀学生干事</span></div>
                    <div class="honor"><span>2014  优秀学习奖学金三等奖</span></div>
                    <div class="honor"><span>2013  校优秀团支书</span></div>
                    <div class="honor"><span>2012  全国数学建模比赛二等奖</span></div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        width1: 20,
        width2: 20
      }
    },

    computed: {}
  }
</script>

<style scoped>

  .skill {
    line-height: normal;
    margin: 10px;
  }

  .title2 {
    line-height: normal;
    clear: both;
    height: 20px;
    margin-top: 20px;
    font-size: 20px;
    color: blue;
    margin-bottom: 20px;
  }

  .person-message {
    height: 20px;
    font-size: 15px;
    color: blue;
    margin-top: 10px;
  }

  span {
    line-height: normal;
    display: block;
  }

  .honor {
  margin-top: 10px;
    margin-bottom: 10px ;
  }

  img {
    width: auto;
    height: auto;
    max-width: 200px;
    max-height: 200px;
    -webkit-border-radius: 100%;

  }

  .avatar {
    width: 200px;
    height: 200px;
    position: relative;
    top: 20px;
    left: 10px;
    margin-bottom: 50px;
  }

  .text {
    width: 200px;
    height: 40px;
    font-size: 30px;
    font-family: 微软雅黑;
    font-style: oblique;
    font-weight: bold;
    color: dodgerblue;

  }

  .bg-purple-dark {
    background: #99a9bf;
    padding: 0px;
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
    height: 1200px;
    padding-left: 30px;
    padding-right: 10px;
    text-align: left;
    width: auto;
  }

  .div-main {
    border: #2c3e50 solid 1px;
    height: 1200px;
  }

  .text-content {
    text-align: left;
    padding-top: 20px;
    height: 100px;
    line-height: 30px;
    margin-top: 60px;
  }

  .resume {
    line-height: normal;
  }

  ul {
    margin: 0px 0px 0px 20px;
    padding: 0px;
  }

  .title {
    height: 30px;
    font-family: 微软雅黑;
    font-size: 25px;
    color: #409eff;
    font-weight: bold;
    float: left;
  }

  .background-title {

  }

  .content {
    width: auto;

  }

  .content-title {
    font-weight: bold;
    width: auto;
    float: left;
    clear: both;
    margin-top: 5px;

  }

  .content-full {
    line-height: 30px;
    width: auto;
    float: left;
    clear: both;
  }
</style>
