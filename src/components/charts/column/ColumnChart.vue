<script>
// template tag will overwrite rendered chart template
import { Bar } from "vue-chartjs";
import deferred from 'chartjs-plugin-deferred'


export default {
  name: "ColumnChart",
  extends: Bar,
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
