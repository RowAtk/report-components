<template>
  <div>
    {{ class1 }}
    <div class="d-flex p-4">
      <div :class="class1">
        COMP1
      </div>

      <div :class="class2">
        COMP2
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['comp1', 'comp2', 'w1', 'w2'],
  computed: {
    class1 () {
      const classes = [
        'row-item',
        'w-' + this.w1,
        ''
      ]
      return classes.join(' ')
    },
    class2 () {
      const classes = [
        'row-item',
        'w-' + this.w2
      ]
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
.row-item {
  justify-content:end;
}
</style>