<template>
  <div data-aos="fade-up-right" class="p-1">
    <h5 class="bold med">{{ data }}</h5>
  </div>
</template>

<script>
export default {
  name: "level1",
  props: ["data"],
};
</script>

<style scoped>
.p-1 {
  margin: 1.5em auto;
}
.med {
  font-size: 1.5rem;
}
</style>
