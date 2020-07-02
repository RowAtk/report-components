<template>
  <div class="cover-container" :style="style">
    <!-- <div class="cover-img"><img src="image.jpg" alt="forest"></div> -->
    <div id="cover-body" class="cover-body trap">
      <div class="cover-text">
        <img class="logo" :src="src" alt="" />
        <div class="cover-title">
          <h1>{{ data.title }}</h1>
          <h2>{{ data.year }}</h2>
        </div>
        <div class="cover-theme">
          {{ data.theme }}
        </div>
      </div>
      <div class="credits">
        {{ data.quote }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    src() {
      return require("@/assets/" + this.data.logo);
    },
    style() {
      return (
        "background-image: url(" +
        require("@/assets/rimages2/" + this.data.cover) +
        ");  background-size: cover; background-attachment: fixed; background-position: center;"
      );
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.poly {
  -webkit-clip-path: polygon(0% 40%, 100% 100%, 100% 100%, 0% 100%);
  clip-path: polygon(0% 40%, 100% 100%, 100% 100%, 0% 100%);
  background-color: #ffffffe5;
}
.square {
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  background-color: #ffffff;
}
.trap {
  -webkit-clip-path: polygon(0 0, 55% 0, 43% 56%, 0 81%);
  clip-path: polygon(0 0, 55% 0, 43% 56%, 0 80%);
  background-color: #ffffffe5;
}
.cover-container {
  margin: 0px;
  padding: 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 1920;
}
.cover-container .cover-body {
  width: 100%;
  height: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  left: 0;
  top: 0;
  -webkit-transition: all ease-in-out 600ms;
  transition: all ease-in-out 600ms;
  text-align: left;
}
.cover-container .cover-body .credits {
  margin: 2em auto;
  text-align: center;
  font-weight: bold;
  color: rgb(117, 117, 117);
}
.cover-container .cover-body .cover-text {
  position: absolute;
  top: 20px;
  left: 0;
  padding: 2em;
}
.cover-container .cover-body .cover-text .logo {
  width: 20%;
  margin: 40px auto;
}
.cover-container .cover-body .cover-text .cover-title {
  width: 100%;
  font-size: 4vh;
  font-weight: 800;
  text-transform: uppercase;
}
.cover-container .cover-body .cover-text .cover-title h1 {
  font-weight: 600;
  padding: 0.3em 0;
}
.cover-container .cover-body .cover-text .cover-title h2 {
  font-weight: 800;
  font-size: 3vh;
}
.cover-container .cover-body .cover-text .cover-theme {
  padding: 0.5em 0;
  width: 60%;
  font-size: 2.5vh;
  font-weight: 400;
  color: #0ab90a;
}

@media screen and (max-width: 1023px) {
  .trap {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background-color: #ffffff;
  }
  .cover-container .cover-body {
    position: relative;
    justify-content: center;
    left: 0;
    top: 0;
    -webkit-transition: all ease-in-out 600ms;
    transition: all ease-in-out 600ms;
    text-align: left;
  }
  .cover-container .cover-body .cover-text {
    text-align: center;
    position: relative;
    margin: 2em auto;
  }
  .cover-container .cover-body .cover-text .cover-title {
    width: 100%;
    margin: 1em auto;
    font-size: 4vh;
    font-weight: 800;
    text-transform: uppercase;
  }
  .cover-container .cover-body .cover-text .cover-theme {
    width: 90%;
    margin: 1em auto;
    font-size: 2.5vh;
    font-weight: 400;
    color: #0ab90a;
  }
  .cover-container .cover-body .credits {
    width: 70%;
  }
}
</style>
