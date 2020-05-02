<template>
  <div id="app">
    <ReportView></ReportView> <!-- main report view -->
  </div>
</template>

<script>
import ReportView from "@/views/ReportView.vue";

export default {
  name: "App",
  components: {
    ReportView,
  },
  data() {
    return {
      
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  text-transform: uppercase;
  text-align: center;
  line-height: 40px;
}

h2:nth-child(1) {
  color: #2fad00;
}
h1 {
  font-size: 100px;
}
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.small {
  width: 260px;
  margin: 20px auto;
}

.med {
  width: 350px;
  margin: 10px auto;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas: "a a" "b c";
}

.a {
  grid-area: a;
}

.b {
  grid-area: b;
}

.c {
  grid-area: c;
}
</style>
