<template>
  <div id="app">
    <ReportView />
    <!-- <Access /> -->
  </div>
</template>

<script>
import ReportView from "@/views/ReportView.vue";

export default {
  name: "App",
  components: {
    ReportView,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap");

body {
  background-color: #fafafa;
}
#app {
  font-family: "Open Sans", sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
  /* background: url("assets/bg1.svg") no-repeat center center fixed; */
  /* background: url("assets/bg1.svg") no-repeat; */
  background-size: contain;
  background-color: #fafafa;
  max-width: 2600px;
  scroll-behavior: smooth;
}
ul {
  text-align: left;
}

#app > div {
  overflow-x: hidden;
  /* border: 1px solid red; */
  /* overflow: hidden; */
}

.bold {
  font-weight: bold;
}
</style>
