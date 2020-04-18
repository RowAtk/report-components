<template>
  <div class="small">
    <LineChart :chartdata="datacollection"></LineChart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
  import LineChart from '@/components/graphs/LineGraph.vue';

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
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
