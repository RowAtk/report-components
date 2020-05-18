<template>
    <div>
        <!-- dynamically render components based on type specified in configuration -->
        <component
            :is="compchoice"
            v-if="compchoice"
            :uconfig="data.config"
        ></component>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            compchoice: null, // actual component to be rendered
            cregister: {
                // register to map config component types to component filenames on vue
                "doughnut": "DoughnutChartMaker",
                "line": "LineChartMaker"
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
        let name = this.cname(this.data.type)
        
        this.compchoice = () => import(`@/components/${group}/${type}/${name}.vue`); // dynamic component import
        console.log(`@/components/${group}/${type}/${name}.vue`)
        // console.log(this.compchoice)
    },
    methods: {
        /**
         * get filename *value* using type as the *key*
         * @return {String} filename of component to render
         */
        cname(type) {
            // console.log(this.cregister[type])
            return this.cregister[type]
        },
    }
}
</script>

<style scoped>

</style>