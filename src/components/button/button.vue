<template>
  <kendo-button :type="htmlType"
                :class="classes"
                :disabled="disabled"
                :icon="icon"
                :img-url="imgurl"
                @click="handerClick">
    <span v-if="showSlot" ref="slot"><slot></slot></span>
  </kendo-button>
</template>

<script>
import { oneOf } from '../../utils/assist'

const prefixCls = 'ovu-btn'

export default {
  name: 'OButton',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'])
      }
    },
    shape: {
      validator (value) {
        return oneOf(value, ['circle', 'circle-outline'])
      }
    },
    size: {
      validator (value) {
        return oneOf(value, ['large', 'small', 'default'])
      }
    },
    htmlType: {
      default: 'button',
      validator (value) {
        return oneOf(value, ['button', 'submit', 'reset'])
      }
    },
    disabled: Boolean,
    icon: String,
    imgurl: String
  },
  data () {
    return {
      showSlot: true
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon)
        }
      ]
    }
  },
  methods: {
    handerClick (evt) {
      this.$emit('click', evt)
    }
  },
  mounted () {
    this.showSlot = this.$slots.default !== undefined
  }
}
</script>
<style lang="less">
@import '../../theme-defaults/widget/button.less';
</style>
