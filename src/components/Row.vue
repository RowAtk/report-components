<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-lg d-flex align-items-center justify-content-center">
        <Header v-if="data.header" :data="data.header" />
      </div>
    </div>
    <div class="row d-flex justify-content-center" v-if="comp1 || comp2">
      <div class="col-lg d-flex align-items-center justify-content-center">
        <RComponent
          v-for="(comp, index) in comp1.components || []"
          :key="index"
          :data="comp"
        />
        <!-- <div class="d-block block bg-info text-dark">COMP1</div> -->
      </div>

      <div
        class="col-lg d-flex align-items-center justify-content-center"
        v-if="comp2"
      >
        <RComponent
          v-for="(comp, index) in comp2.components || []"
          :key="index"
          :data="comp"
        />
        <!-- <div class="d-block block bg-info text-dark">COMP2</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/texts/header/header.vue";
import RComponent from "@/components/RComponent.vue";
export default {
  components: {
    Header,
    RComponent,
  },
  props: ["data"],
  data() {
    return {
      comp1: null,
      comp2: null,
    };
  },
  mounted() {
    console.log("ROW: ", this.data);
    this.comp1 = this.data.left || {};
    this.comp2 = this.data.right || {};
  },
  computed: {
    class1() {
      const width = this.comp1.size
        ? this.comp1.size
        : this.comp2.size
        ? 100 - this.comp2.size
        : 0;
      const classes = ["row-item", "w-" + width.toString()];
      return classes.join(" ");
    },
    class2() {
      const width = this.comp2.size
        ? this.comp2.size
        : this.comp1.size
        ? 100 - this.comp1.size
        : 0;
      const classes = ["row-item", "w-" + width.toString()];
      return classes.join(" ");
    },
  },
};
</script>

<style scoped>
.row-item {
  justify-content: end;
}
</style>
