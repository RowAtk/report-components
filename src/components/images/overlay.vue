<template>
  <!-- :style="style || ''" -->
  <div class="card bg-dark text-white overlay" :style="bgonly">
    <!-- <img class="card-img" :src="src" alt="Card image" /> -->
    <div
      class="card-img-overlay d-flex flex-column align-items-center justify-content-center text-center filter"
    >
      <div>
        <h1 class="d-flex overlay-content big">{{ data.headers[0] }}</h1>
      </div>
      <div v-if="data.headers.length > 1">
        <h2 class="d-flex overlay-content med">{{ data.headers[1] }}</h2>
      </div>
      <div v-if="data.headers.length > 1">
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
      // console.log("@/assets/rimages/" + this.data.src);
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
      // console.log(overlay);
      return overlay;
    },
    bgonly() {
      return `background: url(${require("@/assets/rimages2/" + this.data.src)}); background-size: cover; ${this.style}`
    }
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
  animation-name: slowbgflash;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  /* background-color: rgba(77, 77, 77, 0.418); */
  /* background-color: rgba(252, 252, 252, 0.397); */
}

.overlay-content {
  text-shadow: 3px 3px 6px rgba(24, 24, 24, 0.9);
  /* color: snow; */
  /* color: #071291; */
  /* color: #D90429; */
  /* color: #bfdcff; */
  margin: 0;
  text-decoration: underline;
  /* animation-name: slowflash; */
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
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

/* animations */
@keyframes slowflash {
  0%   {color:rgb(255, 255, 255); left:0px; top:0px;}
  25%  {color:rgb(195, 224, 252); left:200px; top:0px;}
  50%  {color:rgb(165, 210, 252); left:200px; top:200px;}
  75%  {color:rgb(133, 195, 253); left:0px; top:200px;}
  100% {color:rgb(94, 175, 252); left:0px; top:0px;}
}

@keyframes slowbgflash {
  0%    {background-color: rgba(77, 77, 77, 0.418);}
  25%   {background-color: rgba(77, 77, 77, 0.318);}
  50%   {background-color: rgba(77, 77, 77, 0.218);}
  75%   {background-color: rgba(77, 77, 77, 0.118);}
  100%  {background-color: rgba(77, 77, 77, 0.018);}
}
</style>
