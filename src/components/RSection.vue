<template>
  <div>
    <div class="row d-flex">
      <div class="col p-0 d-flex flex-column align-items-center justify-content-center section-header">
        <Level2 :data="data.header" />
        <Level3 :data="data.subheader || ''" />
      </div>

      <div class="col p-0" v-if="data.img">
        <RImage :data="{src: data.img} || {}"/>
        <!-- <img src="@/assets/placeholder.jpg" alt="place holder image" class="section-img"> -->
      </div>
    </div>

    <!-- Render all rows in section -->
    <Row v-for="(row, index) in data.rows" :key="index" :data="row" />

  </div>
</template>

<script>
import Row from "@/components/Row.vue";
import Level2 from "@/components/texts/header/level2.vue";
import Level3 from "@/components/texts/header/level3.vue";
import RImage from "@/components/images/image.vue";

export default {
  components: {
    Row,
    Level2,
    Level3,
    RImage,
  },
  props: ["data"],
  mounted() {
    // console.log(this.data.img || '@/assets/agility/ph.jpg')
  },
  computed: {
    image() {
      return this.data.img || "@/assests/agility/ph.jpg";
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
  background-color: #8d99ae;
}
</style>
