<template>
  <div class="img-wrapper">
    <img :src="src" alt="" />
    <div class="caption-wrapper">
      <i>
        <h3 class="caption">
          {{ data.captions[0] }}
        </h3>
        <h4 v-if="data.captions.length > 1" class="caption">
          {{ data.captions[1] }}
        </h4>
        <h5 v-if="data.captions.length > 2" class="caption">
          {{ data.captions[2] }}
        </h5>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCaption",
  props: ["data"],
  computed: {
    src () {
      const src = this.data.src ? require(this.data.src) : require('@/assets/placeholder.jpg')
      return src
    }
  }
};
</script>

<style scoped>
img {
  width: 80%;
  padding: 3%;
}

.img-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
}

.caption-wrapper {
  width: 75%;
}
.caption {
  font-size: 1rem;
}
</style>
