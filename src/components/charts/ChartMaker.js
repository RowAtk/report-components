import { merge } from 'lodash'
import Vue from 'vue';

const ChartMaker = Vue.mixin({
  data () {
    return {
      defaultChartData: {
        datasets: [
          {
            backgroundColor: ["#2B2D42", "#39B54A", "#3F78BD", "#7AB6FF", "#DBECF8", "#D90429"],
          }
        ] 
      },
      defaultOptions: {
        title: {
          display: true,
          text: this.splitTitle(),
          position: 'bottom',
          padding: 30,
          fontColor: '#2B2D42'
        }
      }
    }
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
        // console.log(lines)
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
      let mp = merge(this.chartdata || {}, this.defaultChartData, this.data.properties )
      console.log("MERGED")
      console.log(mp)
      return mp
    },

    /**
     * merge user options and developer options. preference placed on user options
     * @return {Object} merged options object for chart
     */
    mergeOptions() {

      return merge(this.options || {}, this.defaultOptions, this.data.options)
    }
  },
});

export default ChartMaker;