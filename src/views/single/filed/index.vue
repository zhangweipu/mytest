<template>
  <div>
    ss
    {{this.$route.params.id}}
  </div>
</template>

<script>

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "index",
    computed: {
      ...mapGetters(['$article'])
    },
    methods: {
      ...mapActions(['getArticleAction']),
    },
    created() {

    }
  }
</script>

<style scoped>

</style>
