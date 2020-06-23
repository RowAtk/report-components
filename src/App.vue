<template>
  <div id="app">
    <ReportView />
    <!-- <Access /> -->
  </div>
</template>

<script>
// import Access from "@/components/sections/access/access.vue";
import ReportView from "@/views/ReportView.vue";
// import ReportData from "@/data/report-spec.json";
// // import Access from "@/components/sections/access/access.vue";
// import ReportView from '@/views/ReportView.vue';

export default {
  name: "App",
  components: {
    // Access,
    ReportView,
  },
};
</script>

<style>
body {
  background-color: #fafafa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
  /* background: url("assets/bg1.svg") no-repeat center center fixed; */
  /* background: url("assets/bg1.svg") no-repeat; */
  background-size: contain;
  background-color: #fafafa;
}

* {
  /* border:1px solid red; */
}
</style>
