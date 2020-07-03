<template>
  <div data-aos="fade-up" class="p-2">
    <h2 class="bold">{{ data }}</h2>
  </div>
</template>

<script>
export default {
  name: "level1",
  props: ["data"],
};
</script>

<style scoped>
h2 {
  color: #2b2d42;
}
.p-2 {
  margin: 1.5em auto;
}
</style>
