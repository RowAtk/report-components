<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-lg d-flex align-items-center justify-content-center">
        <RHeader v-if="data.header" :data="data.header" />
      </div>
    </div>
    <div class="row d-flex justify-content-center" v-if="comp1">
      <div class="col-lg d-flex align-items-center justify-content-center">
        <div class="row">
          <div class="col-lg">
            <RComponent
              v-for="(comp, index) in comp1.components || []"
              :key="index"
              :data="comp"
            />
            <!-- <div class="d-block block bg-info text-dark">COMP1</div> -->
          </div>
        </div>
      </div>

      <div
        class="col-lg d-flex align-items-center justify-content-center"
        v-if="comp2"
      >
        <div v-if="!full" class="row">
          <div class="col-lg">
            <RComponent
              v-for="(comp, index) in comp2.components || []"
              :key="index"
              :data="comp"
            />
          </div>
        </div>
      </div>

      

    </div>
    <div class="row d-flex justify-content-center" v-if="comp1">

      <div
        class="col-lg d-flex align-items-center justify-content-center"
        v-if="data.across"
      >
        <div class="row">
          <div class="col-lg d-flex">
            <RComponent
              v-for="(comp, index) in data.across.components || []"
              :key="index"
              :data="comp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RHeader from "@/components/texts/header/header.vue";
import RComponent from "@/components/RComponent.vue";
export default {
  components: {
    RHeader,
    RComponent,
  },
  props: ["data"],
  data() {
    return {
      comp1: null,
      comp2: null,
      full: null
    };
  },
  mounted() {
    // console.log("ROW: ", this.data);
    this.full = this.data.full || false;
    this.comp1 = this.data.left || (this.full? null : {});
    this.comp2 = this.data.right || (this.full? null : {});
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
