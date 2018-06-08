<script>
export default {
  name: 'OCol',
  props: {
    span: [Number, String],
    tag: {
      type: String,
      default: 'div'
    },
    offset: [Number, String],
    order: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xxl: [Number, Object]
  },
  computed: {
    gutter () {
      let parent = this.$parent

      while (parent && parent.$options.componentName !== 'ORow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },
  render (h) {
    let classList = []
    let style = {}

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px'
      style.paddingRight = style.paddingLeft
    }

    ['span', 'offset', 'order', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(prop !== 'span' ? `okendo-col-${prop}-${this[prop]}` : `okendo-col-${this[prop]}`)
      }
    })

    let sizeArray = ['xs', 'sm', 'md', 'lg', 'xl']
    sizeArray.forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`okendo-col-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        let props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(prop !== 'span' ? `okendo-col-${size}-${prop}-${props[prop]}` : `okendo-col-${size}-${props[prop]}`)
        })
      }
    })

    return h(
      this.tag,
      {
        class: ['okendo-col', classList],
        style
      },
      this.$slots.default
    )
  }
}
</script>
