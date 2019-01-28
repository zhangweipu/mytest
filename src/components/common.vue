<template>

</template>

<script>
  export default {
    name: "common",
    methods: {
      data(){
        return{

        }
      },
      open(message) {
        const h = this.$createElement;
        this.$notify({
          title: '消息提醒',
          message: h('i', {style: 'color: teal'}, message)
        });
      },
    }
  }
</script>

<style scoped>

</style>
