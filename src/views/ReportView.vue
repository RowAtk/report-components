<template>
  <div>
    <!-- Rendering of list ofsections from configuration object -->
    <!-- <RSection
      v-for="(section, index) in parsedData()"
      :key="index"
      :data="section"
    > -->
    <RSection
      v-for="(section, index) in parsedData(agility)"
      :key="index"
      :data="section"
    />
    <RSection
      v-for="(section, index) in parsedData(oneuwi)"
      :key="index"
      :data="section"
    />
  </div>
</template>

<script>
import RSection from "@/components/RSection.vue"
import agilitydata from "@/data/agility.json" // configuration object from json file 
import oneuwidata from "@/data/oneuwi.json"

export default {
  components: {
    RSection,
  },
  data() {
    return {
      agility: agilitydata,
      oneuwi: oneuwidata
    };
  },
  methods: {
    /**
     * parse data from reactive config object
     */
    parsedData(section) {
      let spec = JSON.parse(JSON.stringify(section));
      return spec.report;
    }
  }
}
</script>

<style scoped>
.access > div {
}
</style>
