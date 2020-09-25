<template>
  <div
    data-aos="zoom-in-down"
    class="card bg-dark text-white overlay"
    :style="bgonly"
  >
    <div
      class="card-img-overlay d-flex flex-column align-items-center justify-content-center text-center filter"
    >
      <div data-aos="zoom-out">
        <h1 class="d-flex overlay-content big">{{ data.headers[0] }}</h1>
      </div>
      <div v-if="data.headers.length > 1" data-aos="zoom-out">
        <h2 class="d-flex overlay-content med">{{ data.headers[1] }}</h2>
      </div>
      <div v-if="data.headers.length > 1" data-aos="zoom-out">
        <h3 class="d-flex overlay-content small">{{ data.headers[2] }}</h3>
      </div>
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
import RComponent from "@/components/RComponent.vue";
export default {
  components: { RComponent },
  props: ["data"],
  computed: {
    src() {
      return this.data.src
        ? require("@/assets/rimages2/" + this.data.src)
        : require("@/assets/placeholder.jpg");
    },
    style() {
      const height = this.data.height ? `height: ${this.data.height}vw;` : "";
      return height;
    },
    overlay() {
      const overlay = `width: 100%; background: linear-gradient(rgba(${
        this.data.rg1 ? this.data.rg1 : `255, 255, 255, 0.85`
      }), rgba(${
        this.data.rg2 ? this.data.rg2 : `63, 120, 189, 0.21`
      })), url(${require("@/assets/rimages2/" +
        this.data.src)}); background-size: cover; ${this.style}`;
      return overlay;
    },
    bgonly() {
      return `background: url(${require("@/assets/rimages2/" +
        this.data.src)}); background-size: cover; ${this.style}`;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.overlay {
  width: 100%;
  height: 25vw;
  max-width: 100%;
  overflow: hidden;
  margin: 0;
  border: 0;
}

.filter {
  background-color: rgba(77, 77, 77, 0.618);
  /* background-color: rgba(252, 252, 252, 0.397); */
}

.overlay-content {
  text-shadow: 3px 3px 6px rgba(24, 24, 24, 0.9);
  color: snow;
  /* color: #D90429; */
  /* color: #bfdcff; */
  margin: 0;
  font-weight: bold;
  /* text-decoration: underline; */
}
.big {
  font-size: 5vw;
  text-transform: uppercase;
}
.med {
  font-size: 3vw;
}
.small {
  font-size: 2vw;
}
</style>
