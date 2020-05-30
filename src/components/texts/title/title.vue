<template>
  <div class="title-wrapper">
    <h1 :class="data.class">{{ data.text }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["data"],
};
</script>

<style scoped>
.title-wrapper {
  width: 80%;
}
.main-header {
  font: size 20px;
}

.sub-header {
  font-size: 10px;
}

.caption-header {
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
}
</style>
