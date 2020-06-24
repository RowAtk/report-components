<template>
  <div class="chart d-flex justify-content-center">
    <BarChart
      v-if="data"
      :chartdata="mergeData()"
      :options="mergeOptions()"
    ></BarChart>
  </div>
</template>

<script>
import ChartMaker from "@/components/charts/ChartMaker.js"
import BarChart from "@/components/charts/bar/BarChart.vue";
// import { merge } from 'lodash'
// backgroundColor: ["#3498DB", "#138D75", "#6C3483"],
export default {
  components: {
    BarChart,
  },
  mixins: [ChartMaker],
  props: ["data"], // user defined properties
  data() {
    return {
      chartdata: {
        datasets: [ 
        ] 
      },
      dataset: {
        borderColor: "#000000",
        borderWidth: 0,
      },
      options: {
        barPercentage: 0.9,
        categoryPercentage: 0.8,
        animation: {
          animateScale: true
        }
      }
    };
  },
  mounted() {
    // console.log("USER CONFIG")
    // console.log(this.data)
  }
};
</script>

<style>
.chart {
  width: 100%;
  height: auto;
  /* margin: 20px auto; */
}
</style>

