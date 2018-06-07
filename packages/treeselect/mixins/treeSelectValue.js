import { onlyOnLeftClick } from 'oview-ui/src/utils/assist'

export default {
  computed: {
    limitText () {
      const count = this.instance.internalValue.length - this.instance.limit
      return this.instance.limitText(count)
    }
  },
  methods: {
    focusInput () {
      this.$refs.input.focus()
    },
    blurInput () {
      this.$refs.input.blur()
    },
    handleMouseDownOnValueItem: onlyOnLeftClick(function handleMouseDownOnValueItem (evt, node) {
      this.instance.select(node) // deselect
    })
  }
}
