<template>
  <div class="small">
    <DoughnutChart :chartdata="datacollection" :options="options"></DoughnutChart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
  import DoughnutChart from '@/components/charts/Doughnut/DoughnutChart.vue';

  export default {
    components: {
      DoughnutChart
    },
    data () {
      return {
        datacollection: this.datacollection = {
            labels: ["Food", "Clothes", "Bills"],
            datasets: [
                {
                label: 'Data One',
                // lineTension: 0,
                backgroundColor: ['#55D310', '#AEF43F', '#121250'],
                data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                },
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
