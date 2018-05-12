<template>
  <kendo-buttongroup 
      :class="classes" 
      :index="index"
      @select="onSelect">
    <slot></slot>
  </kendo-buttongroup>
</template>

<script>
import { oneOf } from '../../utils/assist'

const prefixCls = 'ovu-btn-group'
export default {
  name: 'OButtonGroup',
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      }
    },
    shape: {
      validator (value) {
        return oneOf(value, ['circle', 'circle-outline'])
      }
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.vertical}`]: this.vertical
        }
      ]
    }
  },
  methods: {
    onSelect (evt) {
      this.$emit('select', evt)
    }
  }
}
</script>
<style lang="less">

</style>


