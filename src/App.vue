<template>
  <div id="app">
    <ReportView />
  </div>
</template>

<script>
// import Access from "@/components/sections/access/access.vue";
import ReportView from '@/views/ReportView.vue';

export default {
  name: "App",
  components: {
    // Access,
    ReportView
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
}
</style>
