<script>
// template tag will overwrite rendered chart template
import { Doughnut } from "vue-chartjs";
import deferred from 'chartjs-plugin-deferred'

export default {
  name: "DoughnutChart",
  extends: Doughnut,
  props: ["chartdata", "options"],
  data() {
    return {};
  },
  mounted() {
    this.addPlugin(deferred);
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style scoped></style>
