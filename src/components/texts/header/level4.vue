<template>
  <div class="p-1">
    <h4 class="bold">{{ data }}</h4>
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
</style>
