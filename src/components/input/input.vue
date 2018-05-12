<template>
  <div :class="[
    type === 'textarea' ? 'ovu-textarea' : 'ovu-input',
    inputSize ? 'ovu-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'ovu-input-group': $slots.prepend || $slots.append,
      'ovu-input-group--append': $slots.append,
      'ovu-input-group--prepend': $slot.prepend,
      'ovu-input--prefix': $slots.prefix || prefixIcon,
      'ovu-input--suffix': $slots.suffix || suffixIcon || clearable
    }
  ]"
  @mouseenter="hovering = true"
  @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="ovu-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="ovu-input__inner"
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
      <span class="ovu-input__prefix" v-if="$slots.prepend || prefixIcon" :style="prefixOffset">
        <slot name="prefix"></slot>
        <i class="el-input__icon" v-if="prefixIcon" :class="prefixIcon">
      </span>
      <!-- 后置内容-->
      <span class="ovu-input__suffix" v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon" :style="subffixOffset">
        <span class="ovu-input__suffix-inner">
          <template v-if="!showClear">
            <slot name="suffix"></slot>
            <i class="ovu-input__icon" v-if="suffixIcon" :class="suffixIcon"></i>
          </template>
          <i v-else class="ovu-input__icon ovu-icon-circle-close ovu-input__clear"
          @click="clear"></i>
        </span>
        <i class="ovu-input__icon" v-if="validateState" 
        :class="['ovu-input__validateIcon', validateState]"></i>
      </span>
      <!--后置元素-->
      <div class="ovu-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea v-else></textarea>
  </div>
</template>

<script>
export default {
  name: 'OInput',
  componentName: 'OInput',
  inject: {
    // 父组件向子组件直接传递上下文，配合provide函数使用
    ovuForm: {
      default: ''
    },
    ovuFormItem: {
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
  data() {
    return {
      currentValue: this.value === undefined || this.value === null ? '' : this.value,
      prefixOffset: null,
      suffixOffset: null,
      hovering: false,
      focused: false
    }
  },
  computed: {
    _ovuFormItemSize() {
      return (this.ovuFormItem || {}).ovuFormItemSize
    },
    validateState() {
      return this.ovuFormItem ? this.ovuFormItem.validateState : ''
    },
    needStatusIcon() {
      return this.ovuForm ? this.ovuForm.statusIcon : false
    },
    inputSize() {
      return this.size || this._ovuFormItemSize || (this.$ELEMENT || {}).size
    },
    inputDisabled() {
      return this.disabled || (this.ovuForm || {}).disabled
    },
    isGroup() {
      return this.$slots.prepend || this.$slots.append
    },
    showClear() {
      return this.clearable &&
        !this.disabled &&
        !this.readonly &&
        this.currentValue !== '' &&
        (this.focused || this.hovering)
    }
  },
  watch: {
    'value'(val, oldValue) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    focus() {
      (this.$refs.input || this.$refs.textarea).focus()
    },
    blur() {
      (this.$refs.input || this.$refs.textarea).blur()
    },
    handleFocus() {

    },
    handleBlur() {

    },
    select() {
      (this.$refs.input || this.$refs.textarea).select()
    },
    handleInput() {

    },
    handleChange() {

    },
    calcIconOffset(place) {
      const pendantMap = {
        'suf': 'append',
        'pre': 'prepend'
      }

      const pendant = pendantMap(place)

      if (this.$slots[pendant]) {
        return { transform: `translateX(${palce} === 'suf' ? '-' : ''}${this.$el.querySelector(`.ovu-input-group__${place}`).offsetWidth}px)` }
      }
    },
    clear() {

    }
  },
  created() {
    this.$on('inputSelect', this.select)
  },
  mounted() {
    if (this.isGroup) {
      this.prefixOffset = this.calcIconOffset('pre')
      this.suffixOffset = this.calcIconOffset('suf')
    }
  }
}
</script>

