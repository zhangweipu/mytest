<template>
  <div>
    <app-main/>
  </div>
</template>

<script>
  import {Top, Left, Footer, AppMain} from "./index"

  export default {
    name: "layout",
    components: {
      AppMain,
      Top,
      Left,
      Footer
    }
  }
</script>

<style scoped>

</style>
