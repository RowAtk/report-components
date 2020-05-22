<template>
  <div id="app">
    <Access :test="rdata" />
  </div>
</template>

<script>
import Access from "@/components/sections/access/access.vue";
import ReportData from "@/data/report-spec.json";

export default {
  name: "App",
  components: {
    Access,
  },

  data() {
    return {
      rdata: ReportData.report[0].section,
    };
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
  margin-top: 0;
  padding: 0;
}
</style>
