<template>
  <div class="small">
    <LineChart :chartdata="datacollection"></LineChart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
  import LineChart from '@/components/charts/line/LineChart.vue';

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: this.datacollection = {
          labels: [1,2,3,4],
          datasets: [
            {
              label: 'Data One',
              lineTension: 0,
              backgroundColor: '#f87979',
              data: [
                {
                  x: this.getRandomInt(),
                  y: this.getRandomInt()
                },
                {
                  x: this.getRandomInt(),
                  y: this.getRandomInt()
                },
                {
                  x: this.getRandomInt(),
                  y: this.getRandomInt()
                },
                {
                  x: this.getRandomInt(),
                  y: this.getRandomInt()
                },
              ]
            },
          ]
        }
      }
    },
    methods: {
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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
