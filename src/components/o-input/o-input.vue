<template>
  <div :class="wrapClasses">
    <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady">
      <slot name="prepend"></slot>
    </div>
    <i class="ovu-icon" :class="['ovu-icon-delete', prefixCls + '-icon', prefixCls + '-icon-clear' , prefixCls + '-icon-normal']" v-if="clearable" @click="handleClear"></i>
    <i class="ovu-icon" :class="['ovu-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-else-if="icon" @click="handleIconClick"></i>
    <transition name="fade">
      <i class="ovu-icon ovu-icon-refresh" :class="[prefixCls + '-icon', prefixCls + '-icon-normal']" v-if="!icon"></i>
    </transition>
    <input
      :id="eleId"
      ref="input"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxlength"
      :readonly="readonly"
      :spellcheck="spellcheck"
      :class="inputClasses"
      :type="type"
      :name="name"
      :number="number"
      :value="currentValue"
      @keyup.enter="handleEnter"
      @keyup="handleKeyup"
      @keypress="handleKeypress"
      @keydown="handleKeydown"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange">
    <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../utils/assist'
const prefixCls = 'ovu-input'

export default {
  name: 'o-input',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['text', 'password', 'url', 'email', 'date'])
      },
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    number: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    spellcheck: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      validator (value) {
        return oneOf(value, ['on', 'off'])
      },
      default: 'off'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    eleId: {
      type: String
    }
  },
  data () {
    return {
      currentValue: this.value,
      prefixCls: prefixCls,
      prepend: true,
      append: true,
      slotReady: false
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type`]: this.type,
          [`${prefixCls}-group`]: this.prepend || this.append,
          [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size,
          [`${prefixCls}-group-with-prepend`]: this.prepend,
          [`${prefixCls}-group-with-append`]: this.append,
          [`${prefixCls}-hide-icon`]: this.append
        }
      ]
    },
    inputClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ]
    }
  },
  methods: {
    handleEnter (event) {
      this.$emit('on-enter', event)
    },
    handleKeydown (event) {
      this.$emit('on-keydown', event)
    },
    handleKeypress (event) {
      this.$emit('on-keypress', event)
    },
    handleKeyup (event) {
      this.$emit('on-keyup', event)
    },
    handleIconClick (event) {
      this.$emit('on-click', event)
    },
    handleFocus (event) {
      this.$emit('on-focus', event)
    },
    handleBlur (event) {
      this.$emit('on-blur', event)
    },
    handleInput (event) {
      let value = event.target.value
      if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value)
      this.$emit('input', value)
      this.setCurrentValue(value)
      this.$emit('on-change', event)
    },
    handleChange (event) {
      this.$emit('on-input-change', event)
    },
    setCurrentValue (value) {
      if (value === this.currentValue) return
      this.currentValue = value
    },
    focus () {
      this.$ref.input.focus()
    },
    blur () {
      this.$ref.input.blur()
    },
    handleClear () {
      const e = { target: { value: '' } }
      this.$emit('input', '')
      this.setCurrentValue('')
      this.$emit('on-change', e)
    }
  },
  mounted () {
    this.prepend = this.$slots.prepend !== undefined
    this.append = this.$slots.append !== undefined

    this.slotReady = true
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  }
}
</script>
