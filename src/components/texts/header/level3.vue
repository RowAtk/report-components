<template>
  <div class="p-1">
    <h3>{{ data }}</h3>
  </div>
</template>

<script>
export default {
  name: "level1",
  props: ["data"],
};
</script>

<style scoped>
h3 {
  color: #3f78bd;
}
.p-1 {
  margin: 1.5em auto;
}
</style>
