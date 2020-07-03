<template>
  <div data-aos="fade-down" class="p-5">
    <h1 class="bold">{{ data }}</h1>
  </div>
</template>

<script>
export default {
  name: "level1",
  props: ["data"],
};
</script>

<style scoped>
.p-5 {
  margin: 1.5em auto;
}
</style>
