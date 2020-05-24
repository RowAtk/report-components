<template>
  <div class="img-wrapper">
    <img src="@/assets/forest.jpg" alt="" />
    <div class="caption-wrapper">
      <i
        ><h3 class="caption">
          {{ caption }}
        </h3></i
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCaption",
  props: ["caption"],
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
