<template>
  <div class="el-date-editor">
    <!--&lt;!&ndash;面包屑 导航栏&ndash;&gt;-->
    <el-row class="warp">
      <!--<el-col :span="24" class="warp-breadcrum">-->
      <!--<el-breadcrumb separator=">">-->
      <!--<el-breadcrumb-item :to="{path:'/home'}"><b>首页</b></el-breadcrumb-item>-->
      <!--<el-breadcrumb-item :to="{path: '/aboutus/aboutlist'}">关于我们</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>添加关于我们</el-breadcrumb-item>-->
      <!--</el-breadcrumb>-->
      <!--</el-col>-->
      <!--
      Form 组件提供了表单验证的功能，只需要通过 rule 属性传入约定的验证规则，并 Form-Item 的 prop 属性设置为需校验的字段名即可。具体可以参考官网：http://element.eleme.io/#/zh-CN/component/form
      -->
      <el-col :span="24" class="warp-main">
        <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="120px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="infoForm.title"></el-input>
          </el-form-item>

          <el-form-item label="来源" prop="source">
            <el-input v-model="infoForm.source"></el-input>
          </el-form-item>
          <!--使用编辑器
          -->
          <el-form-item label="详细">
            <div class="edit_container">
              <quill-editor v-model="infoForm.content"
                            ref="myQuillEditor"
                            class="editer"
                            :options="editorOption" @ready="onEditorReady($event)">
              </quill-editor>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>


    </el-row>
  </div>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        infoForm: {
          title: '',
          source: '',
          content: ''

        },
        editorOption: {
          placeholder: 'Compose an epic...',
          theme: 'snow'  // or 'bubble'
        },
        msg:'',
        //表单验证
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          content: [
            {required: true, message: '请输入详细内容', trigger: 'blur'}
          ]
        },
      }
    },
    computed: {
      ...mapGetters(['article']),
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      //初始化
    },
    methods: {
      ...mapActions(['addArticleAction']),
      onEditorReady(editor) {
      },
      onSubmit() {
        this.addArticleAction(this.infoForm).then(res => {
          console.info(res)
        })
      }
    },
    components: {
//使用编辑器
      quillEditor
    }
  }
</script>
<style>
  .edit_container {

  }

  .editer {
    height: 200px;
    background: white;
  }
</style>

