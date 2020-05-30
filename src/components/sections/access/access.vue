<template>
  <div class="container-fluid">
    <div class="row ">
      <div class="col-lg d-flex align-items-center justify-content-center">
        <div class="row">
          <ParagraphText :data="pdata1"> </ParagraphText>
          <ParagraphText :data="pdata2"> </ParagraphText>
          <ParagraphText :data="pdata3"> </ParagraphText>
        </div>
      </div>
      <div class="col-lg-5 d-flex align-items-center justify-content-center">
        <div class="row d-flex justify-content-center">
          <Title :data="title" />
          <Callout :data="pdata4"> </Callout>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <RTable :data="tdata" />
      </div>
      <div class="col-lg">
        <ParagraphText :data="pdata1"> </ParagraphText>
        <ParagraphText :data="pdata1"> </ParagraphText>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/texts/title/title.vue";
import reportdata from "@/data/report-spec.json";
// import DoughnutChart from "@/components/charts/Doughnut/DoughnutChart.vue";
import ParagraphText from "@/components/texts/paragraph/paragraph.vue";
import Callout from "@/components/texts/callout/callout.vue";
import RTable from "@/components/tables/table/table.vue";
// import CaptionImage from "@/components/images/caption-image/caption-image.vue";
export default {
  name: "Access",
  components: {
    // DoughnutChart,
    ParagraphText,
    Callout,
    RTable,
    Title,
    // CaptionImage,
  },
  props: ["test"],
  data() {
    return {
      title: {
        class: "caption-header",
        text: "Further Expansion of the Mona Western Jamaica Campus",
      },
      rdata: reportdata,
      tdata: {
        headers: [
          {
            data: `Faculty`,
          },
          {
            data: `Award/Scholarship`,
          },
          {
            data: `Value`,
          },
        ],
        rows: [
          {
            header: `Faculty of Science and Technology`,
            texts: [
              {
                text: `The NCB Best Student in Computer Science/Software Engineering (Level 2)`,
              },
              {
                text: `The NCB Best Student in Information Technology (Level 2)`,
              },
            ],
            values: [
              {
                value: `JMD$ 50,000`,
              },
              {
                value: `JMD$ 50,000`,
              },
            ],
          },
          {
            header: `Faculty of Law`,
            texts: [
              {
                text: `The Maurice Robinson Prize for Intellectual Property Law`,
              },
              {
                text: `The Noel Levy Prize for Revenue Law`,
              },
              {
                text: `Defying the Odds Award`,
              },
            ],
            values: [
              {
                value: `JMD$ 50,000`,
              },
              {
                value: `JMD$ 50,000`,
              },
              {
                value: `JMD$ 30,000 Gift Voucher`,
              },
            ],
          },
        ],
      },
      pdata1: [
        {
          //for paragraph component
          data: `Standing tall in our vision is the hope that the Mona Campus must be the preferred choice for the
            many communities we serve: students, neighbours, research affiliates and industry partners;
            and that government and civil society leaders see us as a major resource for supporting policy
            and socio-economic development initiatives.`,
        },
      ],
      pdata2: [
        {
          //for paragraph component
          data: `In 2018, we assessed the uptake of secondary education leading to tertiary education choices and
      found, according to the most recent census, that the Jamaican population possessing tertiary
      education qualifications increased from 12.3% in 2001 to 12.8% in 2011.1 Over the same
      inter-censal period, the Jamaican population aged 15 and over gaining a secondary education,
      declined from 55.5% in 2001 to 52.7% in 2011. In light of a waning uptake of secondary
      education, and its implications for a growing under-education in this society, our current drive in
      the second decade of the twenty-first century to increase access to a university education is both
      timely and necessary for revitalizing Caribbean development. In the 2018/19 academic year our
      total student registration showed a 3% increase over the previous academic year. Our marketing
      in high schools to encourage secondary students into tertiary education stimulates the necessary
      expansion of both levels of education.`,
        },
      ],
      pdata3: [
        {
          //for paragraph component
          data: `Although minimal gains were experienced, we were nonetheless able to achieve a steady rise in student registration at the Mona Campus between 2017/2018 and 2018/2019. The Campus in 2018/2019
      registered 19,599 students, the highest number ever registered in the 71 years, providing more access than ever before. This was only possible through the efforts of the entire Mona Campus team
      maximizing the available resources.`,
        },
      ],
      pdata4: [
        {
          //for paragraph component
          data: `On Friday, March 22, 2019, a Ground Breaking Ceremony was held on Barnett
site in Montego Bay to signal the start of construction of the new Mona
Western Jamaica Campus.`,
        },
        {
          //for paragraph component
          data: `The development of The UWI Mona Western Jamaica Campus (The UWI-WJC)
will provide: more tertiary opportunities in Western Jamaica (access); more
academic and industry partnerships through collaboration with Barnett
Limited (alignment) and; another step toward restoring the financial health of
The UWI.`,
        },
        {
          //for paragraph component
          data: `The Campus is expected to have a world class School of Management that
caters to Business Process Outsourcing (BPO), as well as Financial and Tourism
Management. A world class School of Engineering will provide the technical
skillset for the BPO sector.`,
        },
        {
          //for paragraph component
          data: `Minister of Tourism, The Hon. Edmund Bartlett, expressed his delight at the
ceremony. “To see this vision now become a reality under the leadership of
Professor Dale Webber, augurs well for tourism and our human capital
development strategy.”`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-fluid {
}
</style>
