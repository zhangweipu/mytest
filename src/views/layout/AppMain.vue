<template>
  <section class="app-main">
    <Top></Top>
    <transition>
      <router-view/>
    </transition>
  </section>

</template>

<script>
  import Top from './top'
  export default {
    name: "app-main",
    components:{
      Top
    }
  }
</script>

<style scoped>

</style>
