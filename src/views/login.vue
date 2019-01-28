<template>
  <div class="load" style="border: red">
    <div class="login" style="border: red solid">
      <el-form ref="formdata" :model="formdata" status-icon :rules="rules" label-width="100px" class="demo-ruleForm"
               style="margin: 20px">
        <el-form-item label="登录名:" prop="username">
          <el-input type="text" v-model="formdata.username"
                    style="height:10px;width: 150px;margin-left: -100px;padding: 0px"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="passwd">
          <el-input type="password" v-model="formdata.passwd" auto-complete="off"
                    style="width: 150px;margin-left: -100px"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: -100px;margin-top: -10px">
          <el-button type="primary" @click="submitForm('formdata')">提交</el-button>
          <el-button @click="resetForm('formdata')">重置</el-button>
          <el-button @click="test">测试</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "login",
    data() {
      //数据验证
      var checkusername = (rule, value, callback) => {
        if (!value) {
          console.info("登陆名为空！！！")
          return callback(new Error('登陆名不能为空'));
        }
        callback();
      };
      var checkpasswd = (rule, value, callback) => {
        if (!value) {
          console.info("密码为空！！")
          return callback(new Error('密码不能为空！'))
        }
        callback();
      };

      return {

        formdata: {
          username: '',
          passwd: ''
        },
        //和变量名保持一致
        rules: {
          username: [{validator: checkusername, trigger: 'blur'}],
          passwd: [{validator: checkpasswd, trigger: 'blur'}]
        }
      }
    },
    computed: {
      ...mapGetters(['$validate'])
    },
    methods: {
      ...mapActions(['loginsys']),
      test() {

      },
      submitForm(formName) {
        //el-form 放 ref这个属性
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loginsys(this.formdata).then(res => {
              if (res.code == 1) {
                console.info(res)
                localStorage.setItem('user', res.data.username)
                var aa = localStorage.getItem('user')
                console.info("放入aa", aa)
                this.open("登陆成功！！！！")
                this.$router.push({path: "/home"})
              } else {
                alert(res.msg)
                this.$router.push({path: "/login"})
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

  .load {
    background-image: url("../assets/login.jpg");
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .login {
    background-color: #e1f3d8;
    height: 200px;
    width: 400px;
    position: absolute;
    top: 100px;
    left: 500px;
  }

</style>
