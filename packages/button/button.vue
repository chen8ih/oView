<template>
  <button
      class="okendo-button"
      @click="handerClick"
      :disabled="buttonDisabled || loading"
      :autofocus="autofocus"
      :type="nativeType"
      :class="[
        type ? 'okendo-button--' + type: '',
        buttonSize ? 'okendo-button--' + buttonSize : '',
        {
          'is-disabled': buttonDisabled,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle
        }
      ]">
      <o-icon class="ovu-load-loop" type="load-c" v-if="loading"></o-icon>
      <o-icon :type="icon" v-if="icon && !loading"></o-icon>
      <span v-if="showSlot" ref="slot"><slot></slot></span>
  </button>
</template>

<script>
import OIcon from '../icon'
import { oneOf } from '@opp/oview/src/utils/assist'

export default {
  name: 'OButton',
  components: { OIcon },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default'])
      }
    },
    size: {
      validator (value) {
        return oneOf(value, ['large', 'small', 'default'])
      }
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  data () {
    return {
      showSlot: true
    }
  },
  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize
    },
    buttonSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
    buttonDisabled () {
      return this.disabled || (this.elForm || {}).disabled
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
