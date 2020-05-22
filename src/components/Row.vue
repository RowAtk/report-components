<template>
  <div class="responsive">
    <div class="d-flex p-4" v-if="comp1 || comp2">
      <div :class="class1">
        <RComponent :data="comp1" v-if="comp1"/>
        COMP1
      </div>

      <div :class="class2" v-if="comp2">
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
    console.log(this.data)
    const len = this.data.length
    if (this.data[0].align == 'left' || this.data[0].align == 'full') {
      this.comp1 = this.data[0]
      this.comp2 = len === 2 && this.data[0].align != 'full' ? this.data[1] : null

    } else {
      this.comp2 = this.data[0]
      this.comp1 = len === 2 && this.data[1].align == 'right' ? this.data[1] : null
    }
    console.log("COMP1", this.comp1)
    console.log("COMP2", this.comp2)
  },
  computed: {
    class1 () {
      const width = this.comp1.align == 'full' ? '100' : this.comp1.size ? this.comp1.size : this.comp2.size ? toString(100 - parseInt(this.comp2.size)) : '0'
      console.log(width)
      const classes = [
        'row-item',
        'w-' + width
      ];
      return classes.join(' ')
    },
    class2 () {
      const width = this.comp2.align == 'full' ? '100' : this.comp2.size ? this.comp2.size : '0'
      const classes = [
        'row-item',
        'w-' + width
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

.responsive {

}
</style>