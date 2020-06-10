<template>
  <div>
    <div class="row">
      <div class="col-6">
        <Level2 :data="data.header" />
        <Level3 :data="data.subheader" />
      </div>

      <div class="col-6">
        <img :src="data.img || '@/assets/agility/pc.jpg'" alt="place holder image">
      </div>
    </div>
  </div>
</template>

<script>
import Level2 from '@/components/texts/header/level2.vue'
import Level3 from '@/components/texts/header/level3.vue'

export default {
  components: {
    Level2,
    Level3
  },
  props: ['data']
}
</script>

<style scoped>

</style>