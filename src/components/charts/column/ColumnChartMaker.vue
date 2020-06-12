<template>
  <div class="chart d-flex justify-content-center">
    <ColumnChart
      :chartdata="mergeProps()"
      :options="mergeOptions()"
    ></ColumnChart>
  </div>
</template>

<script>
import ChartMaker from "@/components/charts/ChartMaker.js"
import ColumnChart from "@/components/charts/column/ColumnChart.vue";
// import { merge } from 'lodash'
// backgroundColor: ["#3498DB", "#138D75", "#6C3483"],
export default {
  components: {
    ColumnChart,
  },
  mixins: [ChartMaker],
  props: ["data"], // user defined properties
  data() {
    console.log("COLOOOOORS:", this.backgroundColors)
    return {
      chartdata: {
        datasets: [
          {
            borderColor: "#000000",
            borderWidth: 1,
            hoverBackgroundColor: "#8D99AE",
            hoverBorderColor: "#FFFFFF",
          }
        ] 
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
    console.log("USER CONFIG")
    console.log(this.data)
    console.log("COLUMN COLOOOOORS:", this.backgroundColors)
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
