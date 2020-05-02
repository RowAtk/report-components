<template>
  <div class="small">
    <PieChart :chartdata="datacollection" :options="options"></PieChart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
  import PieChart from '@/components/charts/pie/PieChart.vue';

  export default {
    components: {
      PieChart
    },
    data () {
      return {
        datacollection: this.datacollection = {
            labels: ["Food", "Clothes", "Bills"],
            datasets: [
                {
                label: 'Data One',
                // lineTension: 0,
                backgroundColor: '#9434AA',
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
