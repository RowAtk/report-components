<template>
  <table class="table table-striped table-borderless">
    <thead class="thead-dark">
      <tr>
        <th scope="col" v-for="(head, index) in thead" :key="index">
          {{ head.data }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in trow" :key="index">
        <th scope="row">{{ row.header }}</th>
        <td>
          <p v-for="(text, index) in row.texts" :key="index">
            {{ text.text }}
          </p>
        </td>
        <td>
          <p v-for="(value, index) in row.values" :key="index">
            {{ value.value }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: ["thead", "trow"],
};
</script>

<style scoped></style>
