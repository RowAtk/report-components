import { merge } from 'lodash'
import Vue from 'vue';

const ChartMaker = Vue.mixin({
  data () {
    return {
      defaultChartData: {
        datasets: [
        ] 
      },
      backgroundColor: ["#2B2D42", "#39B54A", "#3F78BD", "#7AB6FF", "#DBECF8", "#D90429"],
      defaultDataset: {

        // line graphs
        lineTension: 0,
        fill: false
      },
      defaultOptions: {
        title: {
          display: true,
          text: this.splitTitle(),
          position: 'bottom',
          padding: 30,
          fontColor: '#2B2D42',
          fontSize: 16
        },
        legend: {
          display: true
        }
      },
      bgnum: 0
    }
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },

    splitTitle() {
      if (this.data && this.data.title) {
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

    makeDefaults() {
      let d = []
      // console.log("LENGTH DATASET: ", this.data.properties.datasets)
      for(var i=0; i < this.data.properties.datasets.length; i++) {
        d.push(merge({backgroundColor: this.backgroundColor[i]}, this.defaultDataset || {}, this.dataset || {}))
      }
      // console.log('ddd: ', d)
      const defaultConfig = merge(this.defaultChartData, {datasets: d})
      // console.log("DEFAULT CONFIG:", defaultConfig)
      return defaultConfig
    },

    /**
     * merge user chartdata and developer chartdata. preference placed on user chartdata
     * @return {Object} merged chartdata object for chart
     */
    mergeData() {
      if (this.data) {
        const defaultConfig = this.makeDefaults(); 
        // console.log("DEFAULT CONFIG:", defaultConfig)
        let mp = merge(defaultConfig, this.chartdata || {}, this.data.properties)
        return mp
      }
    },

    /**
     * merge user options and developer options. preference placed on user options
     * @return {Object} merged options object for chart
     */
    mergeOptions() {
      // only show legend by default if more than 1 dataset provided
      const ldisplay = this.data.properties.datasets.length == 1 ? false : true
      const defaultOptions = JSON.parse(JSON.stringify(this.defaultOptions))
      defaultOptions.legend.display = ldisplay;

      // actual merging
      return merge(defaultOptions || {}, this.options || {}, this.data.options || {})
    }
  },
});

export default ChartMaker;