<template>
  <div class="section-content mb-5">
    <RHeader :data="{level: 3, text:data.header}" />
    <div class="mt-3 content-list">
      <RHeader
        v-for="(content, index) in data.contents || []"
        :key="index"
        :data="{level: 4, text: content}"
      />
    </div>
  </div>
</template>

<script>
import RHeader from '@/components/texts/header/header.vue'

export default {
  components: {
    RHeader,
  },
  props: ['data']
  
}
</script>

<style scoped>
.section-content {
  background-color: #DBECF8;
  width: 93vw;
  padding: 3% 0% 3% 0%;
}

.content-list {
  color: #2B2D42;
}
</style>