<template>
  <div class="img-wrapper">
    <RImage :data="{ src: data.src } || {}" alt="" />
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
import RImage from "@/components/images/image.vue";
export default {
  name: "ImageCaption",
  components: { RImage },
  props: ["data"],
};
</script>

<style scoped>
img {
  width: 100%;
  padding: 3%;
}

.img-wrapper {
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  background-color: rgba(255, 250, 250, 0.553);
}

.caption-wrapper {
  padding: 1em 0;
  width: 75%;
}
.caption {
  font-size: 1rem;
}
</style>
