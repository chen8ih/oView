<script>
export default {
  name: 'ORow',
  componentName: 'ORow', // 自定义属性，用于Col获取当前节点的gutter
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    align: {
      type: String,
      default: 'top'
    },
    gutter: Number,
    justify: {
      type: String,
      default: 'start'
    },
    type: String
  },
  computed: {
    style () {
      const ret = {}

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    }
  },
  render (h) {
    return h(this.tag, {
      class: [
        'okendo-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        {'okendo-row--flex': this.type === 'flex'}
      ],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
