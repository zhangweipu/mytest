<template>
  <div>
{{msg}}aaaaaaaaaaaaaa {{demo}}
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: "test",
    data() {
          return {
            msg:"test"
          }
    },
    //使用的是getters.js中放入的值，通过mutations中的数据实现联动的
    computed:{
      ...mapGetters(['demo'])
    },
    methods:{
      //demo.js中放入actions的方法调用使用方法名
      ...mapActions(['mydemo']),

      mytest(){
        alert("come in");
        //调用接口
        var keyword={
          name:'tom',
          age:18
        };
        this.mydemo(keyword).then(res=>{
          this.msg=res.data;
          console.info(res);
        })
      }

    }

  }
</script>

<style scoped>

</style>
