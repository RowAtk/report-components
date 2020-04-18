<script>
// template tag will overwrite rendered chart template
import { Doughnut } from 'vue-chartjs';

export default {
    name: "DoughnutChart",
    extends: Doughnut,
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