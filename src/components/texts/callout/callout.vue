<template>
  <div class="Captions-wrapper">
    <i
      ><p v-for="text in ptext" :key="text.data">
        {{ text.data }}
      </p></i
    >
  </div>
</template>

<script>
export default {
  name: "CaptionsText",
  props: ["ptext"],
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
  width: 80%;
}
</style>
