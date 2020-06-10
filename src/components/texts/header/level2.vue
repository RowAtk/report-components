<template>
  <div class="p-2">
    <h2>{{data}}</h2>
  </div>
</template>

<script>
export default {
  name: 'level1',
  props: ['data']
}
</script>

<style scoped>
h2 {
  color: #2B2D42;
}
</style>