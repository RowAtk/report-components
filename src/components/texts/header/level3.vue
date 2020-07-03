<template>
  <div data-aos="fade-left" class="p-1">
    <h3 class="bold">{{data}}</h3>
  </div>
</template>

<script>
export default {
  name: 'level1',
  props: ['data']
}
</script>

<style scoped>
h3 {
  color: #3F78BD;
}
</style>