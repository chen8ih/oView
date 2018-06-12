<template>
  <transition name="okendo-alert-fade">
    <div
    class="okendo-alert"
    :class="[typeClass, center ? 'is-center' : '']"
    v-show="visible"
    role="alert">
      <i class="okendo-alert__icon k-icon" v-if="showIcon" :class="[iconClasses, isBigIcon]"></i>
      <div class="okendo-alert__content">
        <span class="okendo-alert__title" :class="[ isBoldTitle ]" v-if="!!title">{{ title }}</span>
        <slot>
          <p class="okendo-alert__description" v-if="!!description">{{ description }}</p>
        </slot>
        <i class="okendo-alert__closebtn" :class="{ 'is-customed' : closeText !== '', 'k-icon k-i-close': closeText === '' }" v-show="closeable" @click="onClose()">{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'OAlert',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closeable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    autoHide: {
      type: Boolean,
      default: false
    },
    hideTime: {
      type: Number,
      default: 200
    },
    showIcon: Boolean,
    center: Boolean
  },
  data () {
    return {
      visible: true
    }
  },
  mounted () {
    if (this.autoHide) {
      setTimeout(() => {
        this.visiable = false
      }, this.hideTime)
    }
  },
  methods: {
    onClose () {
      this.visible = false
      this.$emit('close')
    }
  },
  computed: {
    typeClass () {
      return `okendo-alert--${this.type}`
    },
    iconClasses () {
      return `k-i-${this.type}` || 'k-i-info'
    },
    isBigIcon () {
      return this.description || this.$slots.default ? 'is-big' : ''
    },
    isBoldTitle () {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  }
}
</script>
