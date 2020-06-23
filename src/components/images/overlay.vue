<template>
  <!-- :style="style || ''" -->
  <div class="card bg-dark text-white overlay" :style="style">
    <img class="card-img" :src="src" alt="Card image">
    <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center text-center filter">
      <div><h1 class="d-flex overlay-content">{{data.headers[0]}}</h1></div>
      <div v-if="data.headers.length > 1"><h2 class="d-flex overlay-content">{{data.headers[1]}}</h2></div>
      <div v-if="data.headers.length > 1"><h3 class="d-flex overlay-content">{{data.headers[2]}}</h3></div>
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
      return this.data.src ? require('@/assets/rimages2/' + this.data.src) : require('@/assets/placeholder.jpg')
    },
    style () {
      const height = this.data.height ? `height: ${this.data.height}vw;` : ''
      return height
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
  max-width: 100%;
  overflow: hidden;
  margin: 0;
}

.filter {
  background-color: rgba(124, 121, 121, 0.418);
}

.overlay-content {
  text-shadow: 2px 2px 5px rgba(24, 24, 24, 0.89);
  color: white;
  margin: 0;
}
</style>