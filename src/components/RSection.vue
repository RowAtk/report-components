<template>
    <div>
        <div class="d-flex section-header">
            <div class="w-50 d-flex align-items-center justify-content-center">
                <div>
                    <Level2 :data="data.header" />
                    <Level3 :data="data.subheader" />
                </div>
            </div>

            <div class="w-50 p-2">
                <RImage :data="{}"/>
                <!-- <img src="@/assets/placeholder.jpg" alt="place holder image" class="section-img"> -->
            </div>
        </div>
        <!-- <Level2 v-if="title" :data="data.header" /> -->
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
import Level3 from '@/components/texts/header/level3.vue'
import RImage from '@/components/images/image.vue'

export default {
    components: {
        Row,
        Level2,
        Level3,
        RImage
    },
    props: ["data"],
    mounted() {
        // console.log(this.data.img || '@/assets/agility/ph.jpg')
    },
    computed: {
        image () {
            return this.data.img || "@/assests/agility/ph.jpg"
        }
    }
}
</script>

<style scoped>
.section-img {
    width: 100%;
    /* max-height: 30vw; */
}

.section-header {
    background-color: #8D99AE;
}
</style>