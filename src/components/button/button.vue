<template>
  <kendo-button :type="htmlType"
                :class="classes"
                :disabled="disabled"
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
    types: {
      validator (value) {
        return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'])
      }
    },
    htmlType: {
      default: 'button',
      validator (value) {
        return oneOf(value, ['button', 'submit', 'reset'])
      }
    },
    disabled: Boolean
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
          [`${prefixCls}-${this.type}`]: !!this.type
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
