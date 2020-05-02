<template>
  <div class="small">
    <DoughnutChart
      :chartdata="datacollection"
      :options="options"
    ></DoughnutChart>
    <!-- <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
import DoughnutChart from "@/components/charts/Doughnut/DoughnutChart.vue";

export default {
  components: {
    DoughnutChart,
  },
  data() {
    return {
      datacollection: (this.datacollection = {
        labels: ["Food", "Clothes", "Bills"],
        datasets: [
          {
            label: "Data One",
            lineTension: 0,
            circumference: Math.PI,
            backgroundColor: ["#3498DB", "#138D75", "#6C3483"],
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      }),
      options: (this.options = {
        animation: {
          animateScale: true,
        },
      }),
    };
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style>
.small {
  width: 200px;
  margin: 20px auto;
}
</style>
