<template>
  <div class="container-fluid">
    <!-- dynamically render components based on type specified in configuration -->
    <div class="row">
      <div class="col-lg d-flex align-items-center justify-content-center">
        <component
          :is="compchoice"
          v-if="compchoice"
          :data="data.config"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
// const complist = !Array.isArray(this.data) && typeof this.data == "object" ? [this.data] : this.data
export default {
    props: ["data"],
    data() {
        return {
            compchoice: null, // actual component to be rendered
            cregister: {
                // register to map config component types to component filenames on vue
                "doughnut": "DoughnutChartMaker",
                "line": "LineChartMaker",
                'callout': 'callout',
                'paragraph': 'paragraph',
                'stacked': 'paragraph-stacked',
                'table': 'table',
                'header': 'header',
                'bullet': 'bullet',
                'list': 'contentList',
                'image': 'image',
                'caption-image': 'caption-image'
            }
        }
    },
    mounted() {
        console.log("DATA")
        console.log(this.data.config)
        // extract component group (name of component folder eg. charts, text, images)
        let group = this.data.group 
        // extract specific type belonging to group (Eg. doughnut(chart), line(chart), paragraph(text), testimony(text))
        let type = this.data.type 
        // get filename based on type using cregister
        let name = this.cregister[this.data.type]
        
        this.compchoice = () => import(`@/components/${group}/${type}/${name}.vue`); // dynamic component import
        console.log(`@/components/${group}/${type}/${name}.vue`)
        // console.log(this.compchoice)
    },
};
</script>

<style scoped></style>
