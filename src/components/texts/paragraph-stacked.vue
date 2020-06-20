<template>
  <div class="paragraph-wrapper">
    <p v-for="(text, index) in data.texts" :key="index">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ParagraphText",
  props: ["data"],
};
</script>

<style scoped>
p {
  font-size: 16px;
  margin: 0 auto;
  text-align: justify;
  padding: 0% 3% 6% 3%;
  line-height: 2em;
}

.paragraph-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
}
</style>
