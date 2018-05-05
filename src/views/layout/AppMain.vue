<template>
  <section class="app-main">
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
