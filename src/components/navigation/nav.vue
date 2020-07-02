<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#"
          >Home <span class="sr-only">(current)</span></a
        >
        <div v-for="(section, index) in sections.slice(1)" :key="index">
          <div v-if="section.id">
            <a class="nav-item nav-link" :href="makeLink(section.id)">{{
              titleCase(section.header)
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["sections"],
  methods: {
    makeLink(data) {
      // `this` points to the vm instance
      console.log(data.split(" ").join("_"));
      return (
        "#" +
        data
          .toLowerCase()
          .split(" ")
          .join("_")
      );
    },
    titleCase(str) {
      return str
        .toLowerCase()
        .split(" ")
        .map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
  },
};
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: green;
}

.navbar-light .navbar-nav .nav-link {
  color: rgb(44, 62, 80);
  font-weight: 600;
}
</style>
