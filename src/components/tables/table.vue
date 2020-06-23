<template>
  <div class="container">
    <div class="title">
      <h2>{{ data.title }}</h2>
    </div>
    <table class="table table-striped table-borderless">
      <thead class="thead-dark">
        <tr>
          <th scope="col" v-for="(head, index) in data.headers" :key="index">
            {{ head.data }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data.rows" :key="index">
          <th scope="row">{{ row.header }}</th>
          <td v-if="row.texts">
            <div class="spacer" v-for="(text, index) in row.texts" :key="index">
              <p>
                {{ text.text }}
              </p>
            </div>
          </td>
          <td v-if="row.texts2">
            <div
              class="spacer"
              v-for="(text, index) in row.texts2"
              :key="index"
            >
              <p>
                {{ text.text }}
              </p>
            </div>
          </td>
          <td>
            <div
              class="spacer"
              v-for="(value, index) in row.values"
              :key="index"
            >
              <p>
                {{ value.value }}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["data"],
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.table {
  margin-top: 0;
}
.spacer {
  min-height: 100px;
}

.spacer:nth-child(n + 2) {
  margin-top: 0.5em;
}
.title {
  width: 100%;
  background-color: #2b2d42;
  color: #ffffff;
  text-transform: uppercase;
  text-align: left;
  padding: 1.3em;
  word-wrap: break-word;
}
.table .thead-dark th {
  text-transform: uppercase;
  background-color: #2b2d42 !important;
}
h2 {
  padding-bottom: 0;
}
</style>
