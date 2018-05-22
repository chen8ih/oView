<template>
  <div :class="[
    type === 'textarea' ? 'okendo-textarea' : 'okendo-input',
    inputSize ? 'okendo-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'okendo-input-group': $slots.prepend || $slots.append,
      'okendo-input-group--append': $slots.append,
      'okendo-input-group--prepend': $slots.prepend,
      'okendo-input--prefix': $slots.prefix || prefixIcon,
      'okendo-input--suffix': $slots.suffix || suffixIcon || clearable
    }
  ]"
  @mouseenter="hovering = true"
  @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="okendo-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="okendo-input__inner"
        v-bind="$attrs"
        :type="type"
        :disabled="inputDisabled"
        :autocomplete="autoComplete"
        :value="currentValue"
        ref="input"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
      >
      <!-- 前置内容-->
      <span class="okendo-input__prefix" v-if="$slots.prefix || prefixIcon" :style="prefixOffset">
        <slot name="prefix"></slot>
        <i class="okendo-input__icon k-icon" v-if="prefixIcon" :class="prefixIcon"></i>
      </span>
      <!-- 后置内容-->
      <span class="okendo-input__suffix" v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon" :style="suffixOffset">
        <span class="okendo-input__suffix-inner">
          <template v-if="!showClear">
            <slot name="suffix"></slot>
            <i class="okendo-input__icon k-icon" v-if="suffixIcon" :class="suffixIcon"></i>
          </template>
          <i v-else class="okendo-input__icon okendo-input__clear k-icon k-i-close-circle"
          @click="clear"></i>
        </span>
        <i class="okendo-input__icon" v-if="validateState"
        :class="['okendo-input__validateIcon', validateState]"></i>
      </span>
      <!--后置元素-->
      <div class="okendo-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea v-else></textarea>
  </div>
</template>

<script>
import emitter from '../../mixins/emitter'
import Migrating from '../../mixins/migrating'
// import merge from '../../utils/merge'
import { isKorean } from '../../utils/assist'
export default {
  name: 'OkendoInput',
  componentName: 'KendoInput',
  mixins: [emitter, Migrating],
  inject: {
    // 父组件向子组件直接传递上下文，配合provide函数使用
    okendoForm: {
      default: ''
    },
    okendoFormItem: {
      default: ''
    }
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },
  data () {
    return {
      currentValue: this.value === undefined || this.value === null ? '' : this.value,
      prefixOffset: null,
      suffixOffset: null,
      hovering: false,
      focused: false,
      isOnComposition: false
    }
  },
  computed: {
    _okendoFormItemSize () {
      return (this.okendoFormItem || {}).okendoFormItemSize
    },
    validateState () {
      return this.okendoFormItem ? this.okendoFormItem.validateState : ''
    },
    needStatusIcon () {
      return this.okendoForm ? this.okendoForm.statusIcon : false
    },
    validateIcon () {
      return {
        validating: 'k-i-reload',
        success: 'k-i-check',
        error: 'k-i-error'
      }[this.validateState]
    },
    inputSize () {
      return this.size || this._okendoFormItemSize || (this.$ELEMENT || {}).size
    },
    inputDisabled () {
      return this.disabled || (this.okendoForm || {}).disabled
    },
    isGroup () {
      return this.$slots.prepend || this.$slots.append
    },
    showClear () {
      return this.clearable &&
        !this.disabled &&
        !this.readonly &&
        this.currentValue !== '' &&
        (this.focused || this.hovering)
    }
  },
  watch: {
    'value' (val, oldValue) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    focus () {
      (this.$refs.input || this.$refs.textarea).focus()
    },
    blur () {
      (this.$refs.input || this.$refs.textarea).blur()
    },
    getMigratingConfig () {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      }
    },
    handleBlur (event) {
      this.focused = false
      this.$emit('blur', event)
      if (this.validateEvent) {
        this.dispatch('okendoFormItem', 'okendo.form.blur', [this.currentValue])
      }
    },
    handleFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },
    select () {
      (this.$refs.input || this.$refs.textarea).select()
    },
    handleComposition (event) {
      if (event.type === 'compositionend') {
        this.isOnComposition = false
        this.handleInput(event)
      } else {
        const text = event.target.value
        const lastCharacter = text[text.length - 1] || ''
        this.isOnComposition = !isKorean(lastCharacter)
      }
    },
    handleInput (event) {
      if (this.isOnComposition) {
        return
      }
      const value = event.target.value
      this.$emit('input', value)
      this.setCurrentValue(value)
    },
    handleChange () {
      this.$emit('change', event.target.value)
    },
    setCurrentValue (value) {
      if (value === this.currentValue) {
        return
      }
      // this.$nextTick(_ => {
      //   this
      // })
      this.currentValue = value
      if (this.validateEvent) {
        this.dispatch('okendoFormItem', 'okendo.form.change', [value])
      }
    },
    calcIconOffset (place) {
      const pendantMap = {
        'suf': 'append',
        'pre': 'prepend'
      }

      const pendant = pendantMap[place]

      if (this.$slots[pendant]) {
        return { transform: `translateX(${place === 'suf' ? '-' : ''}${this.$el.querySelector(`.okendo-input-group__${pendant}`).offsetWidth}px)` }
      }
    },
    clear () {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
      this.setCurrentValue('')
      this.focus()
    }
  },
  created () {
    this.$on('inputSelect', this.select)
  },
  mounted () {
    if (this.isGroup) {
      this.prefixOffset = this.calcIconOffset('pre')
      this.suffixOffset = this.calcIconOffset('suf')
    }
  }
}
</script>
<style lang="less">
@import '../../theme-defaults/widget/input.less';
</style>
