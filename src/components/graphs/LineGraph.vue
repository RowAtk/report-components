<script>
// template tag will overwrite rendered chart template
import { Line } from 'vue-chartjs';

export default {
    name: "LineGraph",
    extends: Line,
    props: [   
        'chartdata', 
        'options'
    ],
    data() {
        return {

        }
    },
    mounted() {
        console.log(this.chartdata);
        this.renderChart(this.chartdata, this.options);
    }
}
</script>

<style scoped>
    
</style>