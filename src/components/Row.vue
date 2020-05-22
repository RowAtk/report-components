<template>
  <div>
    {{ class1 }}
    <div class="d-flex p-4" v-if="data">
      <div :class="class1">
        <RComponent :data="comp1"/>
        COMP1
      </div>

      <div :class="class2" v-if="class2">
        <RComponent :data="comp2"/>
        COMP2
      </div>

    </div>
  </div>
</template>

<script>
import RComponent from '@/components/RComponent.vue'
export default {
  components: {
    RComponent
  },
  props: {
    data : Array
  },
  data () {
    return {
      comp1: null,
      comp2: null
    }
  },
  mounted () {
    const len = data.length
    if (data[0].align == 'left' || data[0].align == 'full') {
      this.comp1 = data[0]
      this.comp2 = len === 2 && data[0].align == 'full' ? data[1] : null

    } else {
      this.comp2 = 
    }

    this.comp2 = len === 2 ? data[1] : null
  },
  computed: {
    get class1 () {
      const classes = [
        'row-item',
        'w-' + this.comp1.,
        ''
      ];
      return classes.join(' ')
    },
    get class2 () {
      const classes = [
        'row-item',
        'w-' + this.w2
      ];
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