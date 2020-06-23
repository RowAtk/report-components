<template>
  <!-- :style="style || ''" -->
  <div class="card bg-dark text-white overlay">
    <img class="card-img" :src="src" alt="Card image">
    <div class="card-img-overlay d-flex align-items-center justify-content-center text-center filter">
      <div><h1 class="overlay-content">{{data.header}}</h1></div>
      
      <RComponent
        v-for="(comp, index) in data.components || []"
        :key="index"
        :data="comp"
      />
    </div>
</div>
</template>

<script>
// import Header from '@/components/texts/header/header.vue';
import RComponent from '@/components/RComponent.vue'
export default {
  components: {RComponent},
  props: ['data'],
  computed: {
    src () {
      console.log('@/assets/rimages/' + this.data.src)
      return this.data.src ? require('@/assets/rimages/' + this.data.src) : require('@/assets/placeholder.jpg')
    },
    style () {
      const height = this.data.height ? this.data.height : null
      return `height: ${height}%;`
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.overlay {
  height: 20vw;
  overflow: hidden;
}

.filter {
  background-color: rgba(124, 121, 121, 0.418);
}

.overlay-content {
  text-shadow: 2px 2px 5px rgba(24, 24, 24, 0.89);
  color: white;
}
</style>