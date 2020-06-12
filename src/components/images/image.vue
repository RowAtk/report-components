<template>
  <div class="d-flex justify-content-center">
    <img :src="src" alt="Image not found">
  </div>
</template>

<script>

export default {
  name: "r-image",
  props: ['data'],
  computed: {
    src () {
      const src = this.data.src ? require(this.data.src) : require('@/assets/placeholder.jpg')
      return src
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>