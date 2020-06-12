<template>
  <div class="chart d-flex justify-content-center">
    <ColumnChart
      :chartdata="mergeProps()"
      :options="mergeOptions()"
    ></ColumnChart>
  </div>
</template>

<script>
import ColumnChart from "@/components/charts/column/ColumnChart.vue";
import { merge } from 'lodash'
// backgroundColor: ["#3498DB", "#138D75", "#6C3483"],
export default {
  components: {
    ColumnChart,
  },
  props: ["data"], // user defined properties
  data() {
    return {
      chartdata: {
        datasets: [
          {
            backgroundColor: ["#2B2D42", "#39B54A", "#3F78BD", "#7AB6FF", "#DBECF8", "#D90429"],
            borderColor: ["#000000"],
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
        },
        title: {
          display: true,
          text: this.splitTitle(),
          position: 'bottom',
          padding: 30,
          fontColor: '#2B2D42'
        }
      }
    };
  },
  mounted() {
    console.log("USER CONFIG")
    console.log(this.data)
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },

    splitTitle() {
      if (this.data.title) {
        const limit = 7
        const words = this.data.title.split(' ')
        let lines = []
        for(var i = 0; i<words.length; i+=limit){
          lines.push(words.slice(i, i+limit).join(' '))
        }
        console.log(lines)
        return lines
      } else {
        return ''
      }
    },

    /**
     * merge user chartdata and developer chartdata. preference placed on user chartdata
     * @return {Object} merged chartdata object for chart
     */
    mergeProps() {
      let mp = merge(this.chartdata || {}, this.data.properties)
      console.log("MERGED")
      console.log(mp)
      return mp
    },

    /**
     * merge user options and developer options. preference placed on user options
     * @return {Object} merged options object for chart
     */
    mergeOptions() {

      return merge(this.options || {}, this.data.options)
    }
  },
};
</script>

<style>
.chart {
  width: 100%;
  height: auto;
  /* margin: 20px auto; */
}
</style>
