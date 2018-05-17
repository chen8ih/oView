<template>
  <i :class="classes" :style="style"></i>
</template>

<script>
const prefixCls = 'k-icon'
export default {
  name: 'KendoIcon',
  props: {
    type: String,
    size: [Number, String],
    color: String,
    flip: String // 提供翻转 v h
  },
  computed: {
    classes () {
      let c = `${prefixCls} k-i-${this.type}`
      if (this.flip) {
        c += ` k-flip-${this.flip}`
      }
      return c
    },
    style () {
      let style = {}

      if (this.size) {
        style['font-size'] = `${this.size}px`
      }

      if (this.color) {
        style.color = this.color
      }

      return style
    }
  }
}
</script>
