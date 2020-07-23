<template>
  <div class="Captions-wrapper" v-if="data">
    <i>
      <RComponent
        v-for="(comp, index) in data.components || []"
        :key="index"
        :data="comp"
      />
      <p v-for="(text, index) in data.texts" :key="index">
        {{ text }}
      </p>
    </i>
  </div>
</template>

<script>
import RComponent from "@/components/RComponent.vue";
export default {
  name: "CaptionsText",
  components: { RComponent },
  props: ["data"],
};
</script>

<style scoped>
p {
  font-size: 14px;
  margin: 0 auto;
  text-align: justify;
  padding: 3% 10%;
  line-height: 2em;
}

.Captions-wrapper {
  /* background-color: green; */
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.555);
  padding: 1em;
  margin: 0.5em;
}
</style>
