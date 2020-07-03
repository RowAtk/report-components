<template>
  <div data-aos="fade-up-left" class="p-1">
    <h6 class="bold">{{ data }}</h6>
  </div>
</template>

<script>
export default {
  name: "level1",
  props: ["data"],
};
</script>

<style scoped>
h6 {
  font-size: 8vw;
}
.p-1 {
  margin: 1.5em auto;
}
</style>
