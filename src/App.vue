<template>
  <div id="app">
    <!-- Uncomment to test paragraph component -->
    <!-- <div class="container">
      <div class="row">
        <div class="col">
          <ParagraphText :ptext="pdata"> </ParagraphText>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import DoughnutChart from "@/components/charts/Doughnut/DoughnutChart.vue";
// import ParagraphText from "@/components/texts/paragraph/paragraph.vue";
export default {
  name: "App",
  components: {
    // DoughnutChart,
    // ParagraphText,
  },
  data() {
    return {
      //       pdata: [ //for paragraph component
      //         {
      //           data: `Standing tall in our vision is the hope that the Mona Campus must be the preferred choice for the
      // many communities we serve: students, neighbours, research affiliates and industry partners;
      // and that government and civil society leaders see us as a major resource for supporting policy
      // and socio-economic development initiatives.`,
      //         },
      //       ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
