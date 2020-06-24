<template>
  <div>
    <div>
      <Nav :sections="sections" />
    </div>
    <div>
      <!-- Rendering of list ofsections from configuration object -->
      <RSection
        v-for="(section, index) in sections"
        :key="index"
        :data="section"
      />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/navigation/nav.vue";
import RSection from "@/components/RSection.vue";
import openingdata from "@/data/opening.json";
import accessdata from "@/data/access.json";
import agilitydata from "@/data/agility.json"; // configuration object from json file
import oneuwidata from "@/data/oneuwi.json";
import alignmentdata from "@/data/alignment.json";

export default {
  components: {
    RSection,
    Nav,
  },
  data() {
    return {
      sections: [],

      // redundant
      opening: openingdata,
      access: accessdata,
      agility: agilitydata,
      oneuwi: oneuwidata,
    };
  },
  mounted() {
    this.sections = this.sections
      .concat(openingdata.report)
      .concat(accessdata.report)
      .concat(alignmentdata.report)
      .concat(agilitydata.report)
      .concat(oneuwidata.report);
  },
  methods: {
    /**
     * parse data from reactive config object
     */
    parsedData(section) {
      let spec = JSON.parse(JSON.stringify(section));
      return spec.report;
    },
  },
};
</script>

<style scoped></style>
