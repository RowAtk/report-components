<script>
// template tag will overwrite rendered chart template
import { Bar } from "vue-chartjs";

export default {
  name: "ColumnChart",
  extends: Bar,
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
