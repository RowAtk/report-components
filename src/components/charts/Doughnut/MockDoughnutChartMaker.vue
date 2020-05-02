<template>
  <div class="small">
    <h4>{{ title }}</h4>
    <DoughnutChart :chartdata="datacollection" :options="options"></DoughnutChart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
  import DoughnutChart from '@/components/charts/Doughnut/DoughnutChart.vue';
  // import DoughnutDataset from '@/components/charts/models.js'
  import DoughnutDataset from './doughnut.js'

  export default {
    components: {
      DoughnutChart
    },
    props: {
      title: String,
      chartdata: DoughnutDataset,
    },
    data () {
      return {
        /* datacollection: this.datacollection = {
            labels: ["Food", "Clothes", "Bills"],
            datasets: [
                {
                backgroundColor: ['#55D310', '#AEF43F', '#121250'],
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                },
            ]
        }, */

        datacollection: this.datacollection = {
          labels: this.chartdata.labels,
          datasets: [
            {
              backgroundColor: this.chartdata.colors,
              data: this.chartdata.values
            }
          ]
        },
        options: this.options = {
          animation: {
              animateScale: true
          }
        }
      }
    },
    methods: {
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      func () {
        let smn = new DoughnutData();
        smn = {
          'x' : 5,
          'label': "Food",
          'color' : "#FF00A3"
        }
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
