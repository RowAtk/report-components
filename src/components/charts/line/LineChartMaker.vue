<template>
  <div class="small">
    <LineChart 
      :chartdata="mergeProps()"
      :options="mergeOptions()"
    ></LineChart>
  </div>
</template>

<script>
  import LineChart from '@/components/charts/line/LineChart.vue';
  import { merge } from 'lodash'

  export default {
    components: {
      LineChart
    },
    props: ["uconfig"], // user defined properties
    data () {
      return {
        chartdata: {
          datasets: [
            {
              backgroundColor: ["#2B2D42", "#3F78BD"]
            }
          ] 
        },
        options: {
          
        }
      }
    },
    methods: {
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },

      /**
       * merge user chartdata and developer chartdata. preference placed on user chartdata
       * @return {Object} merged chartdata object for chart
       */
      mergeProps() {
        let mp = merge(this.chartdata, this.uconfig.properties)
        console.log("MERGED")
        console.log(mp)
        return mp
      },

      /**
       * merge user options and developer options. preference placed on user options
       * @return {Object} merged options object for chart
       */
      mergeOptions() {

        return merge(this.options, this.uconfig.options)
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
