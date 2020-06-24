<template>
  <div class="chart d-flex justify-content-center">
    <DoughnutChart
      v-if="data"
      :chartdata="mergeData()"
      :options="mergeOptions()"
    ></DoughnutChart>
  </div>
</template>

<script>
import ChartMaker from "@/components/charts/ChartMaker.js"
import DoughnutChart from "@/components/charts/doughnut/DoughnutChart.vue";
// backgroundColor: ["#3498DB", "#138D75", "#6C3483"],
export default {
  components: {
    DoughnutChart,
  },
  mixins: [ChartMaker],
  props: ["data"], // user defined properties
  data() {
    return {
      chartdata:{
        datasets:[
          {
            backgroundColor: ["#2B2D42", "#39B54A", "#3F78BD", "#7AB6FF", "#DBECF8", "#D90429"],
          }
        ]
      },
      options: {
        animation: {
          animateScale: true
        },
        legend:{
          display: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
            } 
          }
        }
      }
    };
  }
};
</script>

<style>
.chart {
  width: 80%;
  height: auto;
  /* margin: 20px auto; */
}
</style>
