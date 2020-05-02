<template>
  <div class="small">
    <DoughnutChart
      :chartdata="mergeProps()"
      :options="mergeOptions()"
    ></DoughnutChart>
    DOUGHNUT!!
  </div>
</template>

<script>
import DoughnutChart from "@/components/charts/doughnut/DoughnutChart.vue";
import { merge } from 'lodash'
// backgroundColor: ["#3498DB", "#138D75", "#6C3483"],
export default {
  components: {
    DoughnutChart,
  },
  props: ["uconfig"], // user defined properties
  data() {
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
    };
  },
  mounted() {
    console.log("USER CONFIG")
    console.log(this.uconfig)
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
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
  },
};
</script>

<style>
.small {
  width: 200px;
  margin: 20px auto;
}
</style>
