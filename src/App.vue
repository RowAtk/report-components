<template>
  <div id="app">
    <LineChartMaker></LineChartMaker>
    <PieChartMaker></PieChartMaker>
    <DoughnutChartMaker></DoughnutChartMaker>
    <MockDoughnutChartMaker></MockDoughnutChartMaker>
  </div>
</template>

<script>
import LineChartMaker from "@/components/charts/Line/LineChartMaker.vue";
import PieChartMaker from "@/components/charts/Pie/PieChartMaker.vue";
import DoughnutChartMaker from "@/components/charts/Doughnut/DoughnutChartMaker.vue";
import MockDoughnutChartMaker from "@/components/charts/Doughnut/MockDoughnutChartMaker.vue";

export default {
  name: 'App',
  components: {
    LineChartMaker,
    PieChartMaker,
    DoughnutChartMaker,
    MockDoughnutChartMaker
  }
}
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
