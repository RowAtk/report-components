<template>
    <div>
        <Level2 v-if="title" :data="title" />
        <!-- {{ title }} -->
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
import Level2 from '@/components/texts/header/level2.vue'

export default {
    components: {
        Row,
        Level2
    },
    props: ["data"],
    data() {
        return {
            title: null,
        }
    },
    mounted() {
        this.title = this.data.section
    },
    methods: {

    }
}
</script>

<style scoped>

</style>