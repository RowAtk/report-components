import { merge } from "lodash";
import Vue from "vue";

const ChartMaker = Vue.mixin({
  data() {
    return {
      defaultChartData: {
        datasets: [],
      },
      backgroundColor: [
        "#2B2D42",
        "#39B54A",
        "#3F78BD",
        "#7AB6FF",
        "#DBECF8",
        "#D90429",
      ],
      defaultDataset: {
        // line graphs
        lineTension: 0,
        fill: false,
      },
      defaultOptions: {
        title: {
          display: true,
          text: this.splitTitle(),
          position: "bottom",
          padding: 30,
          fontColor: "#2B2D42",
          fontSize: 16,
        },
        legend: {
          display: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "",
              },
            },
          ],
        },
        plugins: {
          deferred: {
            xOffset: 150, // defer until 150px of the canvas width are inside the viewport
            yOffset: "40%", // defer until 50% of the canvas height are inside the viewport
            delay: 400, // delay of 500 ms after the canvas is considered inside the viewport
          },
        },
      },
      bgnum: 0,
    };
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },

    splitTitle() {
      if (this.data && this.data.title) {
        const limit = 7;
        const words = this.data.title.split(" ");
        let lines = [];
        for (var i = 0; i < words.length; i += limit) {
          lines.push(words.slice(i, i + limit).join(" "));
        }
        return lines;
      } else {
        return "";
      }
    },

    makeDefaults() {
      let d = [];
      for (var i = 0; i < this.data.properties.datasets.length; i++) {
        d.push(
          merge(
            { backgroundColor: this.backgroundColor[i] },
            this.defaultDataset || {},
            this.dataset || {}
          )
        );
      }

      const defaultConfig = merge(this.defaultChartData, { datasets: d });
      return defaultConfig;
    },

    /**
     * merge user chartdata and developer chartdata. preference placed on user chartdata
     * @return {Object} merged chartdata object for chart
     */
    mergeData() {
      if (this.data) {
        const defaultConfig = this.makeDefaults();
        let mp = merge(
          defaultConfig,
          this.chartdata || {},
          this.data.properties
        );
        return mp;
      }
    },

    /**
     * merge user options and developer options. preference placed on user options
     * @return {Object} merged options object for chart
     */
    mergeOptions() {
      // only show legend by default if more than 1 dataset provided
      const ldisplay = this.data.properties.datasets.length == 1 ? false : true;
      const defaultOptions = JSON.parse(JSON.stringify(this.defaultOptions));
      defaultOptions.legend.display = ldisplay;

      if (this.data.yaxis) {
        defaultOptions.scales.yAxes[0].scaleLabel.display = true;
        defaultOptions.scales.yAxes[0].scaleLabel.labelString = this.data.yaxis;
      }

      if (this.data.xaxis) {
        defaultOptions.scales.xAxes[0].scaleLabel.display = true;
        defaultOptions.scales.xAxes[0].scaleLabel.labelString = this.data.xaxis;
      }

      // actual merging
      return merge(
        defaultOptions || {},
        this.options || {},
        this.data.options || {}
      );
    },
  },
});

export default ChartMaker;
