<template>
  <div class="chart d-flex justify-content-center">
    <LineChart 
       v-if="data"
      :chartdata="mergeData()"
      :options="mergeOptions()"
    ></LineChart>
  </div>
</template>

<script>
import ChartMaker from '@/components/charts/ChartMaker.js'
import LineChart from '@/components/charts/line/LineChart.vue';

export default {
  components: {
    LineChart
  },
  mixins: [ChartMaker],
  props: ["data"], // user defined properties
  data () {
    return {
      chartdata: {
        datasets: [
          
        ] 
      },
      dataset:{
      },
      options: {
        
      }
    };
  },
  mounted() {
    // console.log("USER CONFIG")
    // console.log(this.data)
  }
}
</script>

<style>
.chart {
  width: 100%;
  height: auto;
  /* margin: 20px auto; */
}
</style>
