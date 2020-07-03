<template>
  <!-- :style="style || ''" -->
  <div class="d-flex justify-content-center overflow-hidden">
    <img :src="src" alt="Image not found" />
  </div>
</template>

<script>
export default {
  name: "r-image",
  props: ["data"],
  computed: {
    src() {
      // console.log('@/assets/rimages/' + this.data.src)
      return this.data.src
        ? require("@/assets/rimages2/" + this.data.src)
        : require("@/assets/placeholder.jpg");
    },
    style() {
      const height = this.data.height ? this.data.height : null;
      return `height: ${height}vw;`;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-height: 70vh;
  /* max-height: 40vw; */
  height: auto;
  /* width: auto; */
  object-fit: contain;
  margin: 1em auto;
}
@media screen and (max-width: 1023px) {
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
}
</style>
