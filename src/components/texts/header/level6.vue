<template>
  <div class="p-1">
    <h6>{{ data }}</h6>
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
</style>
