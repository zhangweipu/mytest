<template>
    <div>
      <b-alert  show>my test {{test}}</b-alert>
      <button @click="bomb">按钮</button>
      <el-buttom @click="go">跳转</el-buttom>
      <b-alert show>{{name}}</b-alert>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "show-test",
      data(){
        return {
          test:'aaaa',
          name:'name'
        }
      },
      computed:{
        ...mapGetters(['demo'])
      },
        methods:{
          bomb(){
             alert("aaaa");
            // this.test="ssddd";
            // console.info(this.demo())
            // this.name=this.demo
          },
          go(){
            this.$router.push({path:'/test'})
          }
        },

      //自己注册组建
        components:{

        },
        created:{

        }
    }
</script>

<style scoped>

</style>
