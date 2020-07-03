<template>
  <div class="header">
    <component
      :id="makeLink(data)"
      v-if="level"
      :is="level"
      :data="data.text"
    />
  </div>
</template>

<script>
import Level1 from "@/components/texts/header/level1.vue";
import Level2 from "@/components/texts/header/level2.vue";
import Level3 from "@/components/texts/header/level3.vue";
import Level4 from "@/components/texts/header/level4.vue";
import Level5 from "@/components/texts/header/level5.vue";
import Level6 from "@/components/texts/header/level6.vue";

export default {
  name: "RHeader",
  props: ["data"],
  components: {
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
  },
  methods: {
    makeLink(data) {
      const anon = data.anon == undefined ? false : data.anon;
      if (!anon) {
        return data.text
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .split(" ")
          .join("_");
      } else {
        return "";
      }
    },
  },
  data() {
    return {
      level: null,
    };
  },
  mounted() {
    const lvl = this.data.level;

    switch (lvl) {
      case 1:
        this.level = Level1;
        break;
      case 2:
        this.level = Level2;
        break;
      case 3:
        this.level = Level3;
        break;
      case 4:
        this.level = Level4;
        break;
      case 5:
        this.level = Level5;
        break;
      case 6:
        this.level = Level6;
        break;
      default:
        throw Error(`Level ${lvl} header does not exist`);
    }
  },
};
</script>

<style scoped>
.header{
  font-weight: bold;
}
</style>
