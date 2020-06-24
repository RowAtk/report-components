<template>
  <div class="left">
    <ol>
      <li v-for="(bullet, index) in data.items" :key="index">{{ bullet }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "lsit",
  props: ["data"],
};
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
