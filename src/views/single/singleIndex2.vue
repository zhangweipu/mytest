<template>
  <div>
    <Top></Top>
    <Main></Main>
  </div>

</template>

<script>
    import singletop from "./singletop";
    import SingleAppMain from "./SingleAppMain";

    export default {
        name: "singleIndex2",
        components: {
            Top: singletop,
            Main: SingleAppMain
        }

    }
</script>

<style scoped>

</style>
