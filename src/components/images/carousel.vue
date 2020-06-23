<template>
  <div class="w-100">
    <!-- <img :src="require('@/assets/rimages/' + 'Earl-Jarret.jpg')" alt="NOT FOUND"> -->
    <!-- :style="`height: ${data.height || 30}vw;`" -->
    <Flickity ref="flickity" :options="flickityOptions">
      <div v-for="(image, index) in data.images" :key="index" class="carousel-cell" :style="`height: ${data.height || 30}vw;`">
        <img :src="require('@/assets/rimages2/' + image)" alt="NOT FOUND" class="">
        <!-- <RImage :data="{src: image} || {}" /> -->
        <!-- {{index}} -->
      </div>
    </Flickity>
  </div>
</template>

<script>
// import RImage from '@/components/images/image.vue';
import Flickity from 'vue-flickity'
export default {
  components: {Flickity},
  props: ['data'],
  data () {
    return {
      flickityOptions: {
        // initialIndex: 0,
        // cellAlign: "left",
        // contain: true,
        // draggable: false,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        freeScroll: true,
        autoPlay: true,
      }
    }
  }
  
}
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