<script>
// template tag will overwrite rendered chart template
import { Pie } from "vue-chartjs";

export default {
  name: "PieGraph",
  extends: Pie,
  props: ["chartdata", "options"],
  data() {
    return {};
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style scoped></style>
