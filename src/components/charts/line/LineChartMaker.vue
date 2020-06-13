<template>
  <div class="small">
    <LineChart 
      :chartdata="mergeData()"
      :options="mergeOptions()"
    ></LineChart>
  </div>
</template>

<script>
import ChartMaker from '@/components/charts/ChartMaker.js'
import LineChart from '@/components/charts/line/LineChart.vue';

export default {
  name: "LineChart",
  mixins: [ChartMaker],
  components: {
    LineChart
  },
  props: ["data"], // user defined properties
  data () {
    return {
      chartdata: {
        datasets: [
          
        ] 
      },
      dataset:{
        lineTension: 0
      },
      options: {
        
      }
    }
  },
}
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
