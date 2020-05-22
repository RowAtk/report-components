<template>
  <div id="app">
    <Access />
  </div>
</template>

<script>
import Access from "@/components/sections/access/access.vue";
export default {
  name: "App",
  components: {
    Access,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
