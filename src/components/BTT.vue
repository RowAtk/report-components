<template>
  <a href="#">
    <div id="btt" class="btt hide"><img :src="src" alt="back to top" /></div>
  </a>
</template>

<script>
export default {
  computed: {
    src() {
      return require("@/assets/btt.png");
    },
  },
};
</script>

<style scoped>
.btt {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 3vw;
  height: 3vw;
  border-radius: 100%;
  background-color: #ffffff;
  transition: all 500ms ease-in;
}
.hide {
  transform: translateY(100px);
}
.btt img {
  width: 1vw;
}
</style>
