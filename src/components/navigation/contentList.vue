<template>
  <div class="section-content mb-5">
    <RHeader :data="{ level: 3, text: data.header }" />
    <div
      class="mt-3 content-list"
      v-for="(content, index) in data.contents || []"
      :key="index"
      :data-aos="animate(index)"
    >
      <a class="link" @click="navigate(content)">
        <RHeader :data="{ level: 4, text: content, anon: true }" />
      </a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import RHeader from "@/components/texts/header/header.vue";

export default {
  components: {
    RHeader,
  },
  methods: {
    makeLink(data) {
      return (
        "#" +
        data
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .split(" ")
          .join("_")
      );
    },

    navigate(data) {
      $("html, body").animate(
        { scrollTop: $(this.makeLink(data)).offset().top - 100 },
        "slow"
      );
    },

    animate(i) {
      if (i % 2 == 0) {
        return "fade-left";
      }
      return "fade-right";
    },
  },
  props: ["data"],
};
</script>

<style scoped>
.section-content {
  background-color: #dbecf89a;
  width: 93vw;
  padding: 3% 0% 3% 0%;
}
.link {
  cursor: pointer;
}
.link:hover {
  color: darkorange;
}
.content-list {
  color: #2b2d42;
}
</style>
