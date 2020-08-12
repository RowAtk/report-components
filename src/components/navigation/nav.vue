<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="@/assets/rimages/uwilogo.png" width="25px" height="30px" />
    </a>
    <span class="mobiletitle">Principal's Report 2020</span>
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
        <a
          class="nav-item nav-link active linkText"
          href="https://www.mona.uwi.edu/principal/"
          target="_blank"
          >Home <span class="sr-only">(current)</span></a
        >
        <div v-for="(section, index) in sections.slice(1)" :key="index">
          <div v-if="section.id">
            <a
              class="nav-item nav-link"
              style=""
              :href="makeLink(section.id)"
              :style="`color: ${section.linkColor}`"
            >
              <div class="linkText">{{ titleCase(section.header) }}</div>
            </a>
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
  /* color: green; */
}

.navbar-light .navbar-nav .nav-link {
  /* color: rgb(44, 62, 80); */
  /* font-weight: 600; */
}

.linkText {
  color: rgb(44, 62, 80);
  font-weight: 600;
}

.linkText:focus,
.linkText:hover {
  text-decoration: underline;
  color: inherit;
}

.mobiletitle {
  display: none;
}

@media screen and (max-width: 991px) {
  .mobiletitle {
    display: block;
    font-weight: 12px;
  }
}
</style>
