<template>
  <div id="app">
    <!-- Uncomment to test paragraph component -->
    <!-- <div class="container-fluid">
      <div class="row ">
        <div class="col-lg d-flex align-items-center justify-content-center">
          <ParagraphText :ptext="pdata"> </ParagraphText>
        </div>
        <div class="col-lg d-flex align-items-center justify-content-center">
          <CaptionImage :caption="pcaption" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg d-flex align-items-center justify-content-center">
          <CaptionImage :caption="pcaption" />
        </div>
        <div class="col-lg d-flex align-items-center justify-content-center">
          <ParagraphText :ptext="pdata2"> </ParagraphText>
        </div>
      </div>
      <div class="row">
        <div class="col-lg d-flex align-items-center justify-content-center">
          <ParagraphText :ptext="pdata3"> </ParagraphText>
        </div>
        <div class="col-lg d-flex align-items-center justify-content-center">
          <ParagraphText :ptext="pdata3"> </ParagraphText>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import DoughnutChart from "@/components/charts/Doughnut/DoughnutChart.vue";
// import ParagraphText from "@/components/texts/paragraph/paragraph.vue";
// import CaptionImage from "@/components/images/caption-image/caption-image.vue";
export default {
  name: "App",
  components: {
    // DoughnutChart,
    // ParagraphText,
    // CaptionImage,
  },
  data() {
    return {
      //       pcaption: `Research affiliates and industry partners`,
      //       pdata: [
      //         {
      //           //for paragraph component
      //           data: `Standing tall in our vision is the hope that the Mona Campus must be the preferred choice for the
      //       many communities we serve: students, neighbours, research affiliates and industry partners;
      //       and that government and civil society leaders see us as a major resource for supporting policy
      //       and socio-economic development initiatives.`,
      //         },
      //       ],
      //       pdata2: [
      //         {
      //           //for paragraph component
      //           data: `In 2018, we assessed the uptake of secondary education leading to tertiary education choices and
      // found, according to the most recent census, that the Jamaican population possessing tertiary
      // education qualifications increased from 12.3% in 2001 to 12.8% in 2011.1 Over the same
      // inter-censal period, the Jamaican population aged 15 and over gaining a secondary education,
      // declined from 55.5% in 2001 to 52.7% in 2011. In light of a waning uptake of secondary
      // education, and its implications for a growing under-education in this society, our current drive in
      // the second decade of the twenty-first century to increase access to a university education is both
      // timely and necessary for revitalizing Caribbean development. In the 2018/19 academic year our
      // total student registration showed a 3% increase over the previous academic year. Our marketing
      // in high schools to encourage secondary students into tertiary education stimulates the necessary
      // expansion of both levels of education.`,
      //         },
      //       ],
      //       pdata3: [
      //         {
      //           //for paragraph component
      //           data: `Although minimal gains were experienced, we were nonetheless able to achieve a steady rise in student registration at the Mona Campus between 2017/2018 and 2018/2019. The Campus in 2018/2019
      // registered 19,599 students, the highest number ever registered in the 71 years, providing more access than ever before. This was only possible through the efforts of the entire Mona Campus team
      // maximizing the available resources.`,
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
