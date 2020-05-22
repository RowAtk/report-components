<template>
    <div>
        {{ title }}
        <!-- Render all rows in section -->
        <Row
            v-for="(row, index) in data.rows"
            :key="index"
            :data="row"
        />
        <!-- render all components in a section based on configuration object -->
        <!-- <RComponent
            v-for="(component, index) in data.components"
            :key="index"
            :data="component"
        >
        </RComponent> -->
        
    </div>
</template>

<script>
import Row from '@/components/Row.vue'
// import RComponent from "@/components/RComponent.vue"
export default {
    components: {
        Row,
        // RComponent
    },
    props: ["data"],
    data() {
        return {
            title: null,
        }
    },
    mounted() {
        console.log(this.data)
        this.title = this.data.section
        // this.components = this.data.components
        // console.log(this.components)
        // let data = JSON.parse(JSON.stringify(this.data))
        // console.log("SECTION DATA")
        console.log(this.data)
        // this.title = data
        // console.log(this.data)
    },
    methods: {

    }
}
</script>

<style scoped>

</style>