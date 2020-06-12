<template>
  <div>
    <ul>
      <li v-for="(bullet, index) in data.bullets" :key="index">{{bullet}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bullet',
  props: ['data'],
}
</script>

<style scoped>

</style>