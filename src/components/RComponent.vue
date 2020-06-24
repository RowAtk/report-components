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
                "doughnutChart": "charts/doughnut/DoughnutChartMaker",
                "lineChart": "charts/line/LineChartMaker",
                "columnChart": "charts/column/ColumnChartMaker",
                "barChart": "charts/bar/BarChartMaker",
                'callout': 'texts/callout',
                'paragraph': 'texts/paragraph',
                'stacked': 'texts/paragraph-stacked',
                'stacked-full': 'texts/paragraph-stacked-full',
                'table': 'tables/table',
                'header': 'texts/header/header',
                'bullet': 'texts/bullet',
                'content-list': 'nav/contentList',
                'image': 'images/image',
                'caption-image': 'images/caption-image',
                'note': 'texts/note',
                'list': 'texts/list',
                'carousel': 'images/carousel',
                'overlay': 'images/overlay',
                'carousel-overlay': 'images/carousel-overlay'
            }
        }
    },
    mounted() {
        // console.log("DATA")
        // console.log(this.data.config)
        // extract component group (name of component folder eg. charts, text, images)
        // let group = this.data.group 
        // extract specific type belonging to group (Eg. doughnut(chart), line(chart), paragraph(text), testimony(text))
        // let type = this.data.type 
        // get filename based on type using cregister
        let path = this.cregister[this.data.type]
        
        this.compchoice = () => import(`@/components/${path}.vue`); // dynamic component import
        // console.log(`@/components/${path}.vue`)
        // console.log(this.compchoice)
    },
};
</script>

<style scoped></style>
