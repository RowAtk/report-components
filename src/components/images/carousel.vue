<template>
  <div class="w-100">
    <Flickity ref="flickity" :options="flickityOptions">
      <div
        v-for="(image, index) in data.images"
        :key="index"
        class="carousel-cell"
        :style="`height: ${data.height || 30}vw;`"
      >
        <img
          :src="require('@/assets/rimages2/' + image)"
          alt="NOT FOUND"
          class=""
          :style="style"
        />
        <!-- <RImage :data="{src: image} || {}" /> -->
        <!-- {{index}} -->
      </div>
    </Flickity>
  </div>
</template>

<script>
// import RImage from '@/components/images/image.vue';
import Flickity from "vue-flickity";
export default {
  components: { Flickity },
  props: ["data"],
  data() {
    return {
      flickityOptions: {
        // initialIndex: 0,
        // cellAlign: "left",
        // contain: true,
        // draggable: false,
        prevNextButtons:
          this.data.buttons == undefined ? true : this.data.buttons,
        pageDots: false,
        wrapAround: true,
        freeScroll:
          this.data.freeScroll == undefined ? true : this.data.freeScroll,
        draggable:
          this.data.freeScroll == undefined ? true : this.data.freeScroll,
        autoPlay: true,
        pauseAutoPlayOnHover:
          this.data.hoverPause == undefined ? true : this.data.hoverPause,
      },
    };
  },
  mounted() {},
  computed: {
    style() {
      let style = "";
      if (this.data.fullWidth) {
        style += "width: 100%;";
      }
      return style;
    },
  },
};
</script>

<style scoped>
.carousel-cell {
  width: 100%; /* half-width */
  /* height: auto; */
  margin-right: 1%;
}

img {
  width: auto;
  height: 100%;
}
</style>
