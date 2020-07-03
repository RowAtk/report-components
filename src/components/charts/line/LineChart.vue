<script>
// template tag will overwrite rendered chart template
import { Line } from 'vue-chartjs';
import deferred from 'chartjs-plugin-deferred'

export default {
    name: "LineChart",
    extends: Line,
    props: [   
        'chartdata', 
        'options'
    ],
    data() {
        return {};
    },
    mounted() {
        this.addPlugin(deferred);
        this.renderChart(this.chartdata, this.options);
    }
}
</script>

<style scoped>
    
</style>