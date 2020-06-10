<template>
  <div class="section-content">
    <Header :data="{level: 3, text:data.header}" />
    <div class="mt-3 content-list">
      <Header
        v-for="(content, index) in data.contents || []"
        :key="index"
        :data="{level: 4, text: content}"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/texts/header/header.vue'

export default {
  components: {
    Header,
  },
  props: ['data']
  
}
</script>

<style scoped>
.section-content {
  background-color: #DBECF8;
}

.content-list {
  color: #2B2D42;
}
</style>