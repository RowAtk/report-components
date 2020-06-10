<template>
  <div>
    <!-- Rendering of list ofsections from configuration object -->
    <RSection
      v-for="(section, index) in parsedData()"
      :key="index"
      :data="section"
    >
    </RSection>
  </div>
</template>

<script>
import RSection from "@/components/RSection.vue"
import reportdata from "@/data/agility.json" // configuration object from json file 

export default {
  components: {
    RSection,
  },
  data() {
    return {
      rsections: reportdata,
    };
  },
  mounted() {
    // console.log(reportconfig)
    // const y = YAML.safeLoad()
    // console.log(y)
    // reportdata.then((s) => {console.log(s)})
    // console.log(reportdata)
  },
  methods: {
    /**
     * parse data from reactive config object
     */
    parsedData() {
      let spec = JSON.parse(JSON.stringify(this.rsections));
      return spec.report;
    },
    data() {
        return {
            rsections: reportdata
        }
    },
    mounted() {
        console.log(reportdata)
        // const y = YAML.safeLoad()
        // console.log(y)
        // reportdata.then((s) => {console.log(s)})
        // console.log(reportdata)
    }
  }
}
</script>

<style scoped>
.access > div {
}
</style>
