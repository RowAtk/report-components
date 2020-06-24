<template>
  <div class="container-fluid p-0" :style="style">
    <div class="row d-flex justify-content-center p-0 m-0 w-100">
      <div
        class="col-lg p-0 d-flex align-items-center justify-content-center section-header"
      >
        <Overlay :data="overlay" />
      </div>
    </div>

    <!-- Render all rows in section -->
    <Row v-for="(row, index) in data.rows" :key="index" :data="row" />
  </div>
</template>

<script>
import Overlay from "@/components/images/overlay.vue";
import Row from "@/components/Row.vue";
// import Level2 from "@/components/texts/header/level2.vue";
// import Level3 from "@/components/texts/header/level3.vue";
// import RImage from "@/components/images/image.vue";

export default {
  components: {
    Row,
    Overlay,
    // Level2,
    // Level3,
    // RImage,
  },
  props: ["data"],
  mounted() {
    // console.log(this.data.img || '@/assets/agility/ph.jpg')
  },
  computed: {
    image() {
      return this.data.img || "@/assests/agility/ph.jpg";
    },
    overlay() {
      let headers = [];
      if (this.data.header) {
        headers.push(this.data.header);
      }
      if (this.data.subheader) {
        headers.push(this.data.subheader);
      }
      return {
        src: this.data.img || null,
        headers: headers,
        height: 40,
        rg2: this.data.rg2,
      };
    },
    style() {
      let style = "";
      if (this.data.bg)
        style +=
          "background: url(" +
          require(`@/assets/${this.data.bg}`) +
          ") repeat-y;" +
          `background-size: ${
            this.data.cover != null ? this.data.cover : "contain;"
          }`;
      console.log(style);
      return style;
    },
  },
};
</script>

<style scoped>
.section-img {
  width: 100%;
  /* max-height: 30vw; */
}

.section-header {
  max-width: 100%;
  background-color: #8d99ae;
}
</style>
