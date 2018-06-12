<template>
  <transition name="okendo-message-fade">
    <div :class="['okendo-message',
      type && !iconClass ? `okendo-message--${type}`: '',
      center ? 'is-center' : '',
      showClose ? 'is-closable' : '',
      customClass]"
      v-show="visiable"
      @mouseenter="clearTimer"
      @mouseleave="clearTimer"
      role="alert">
      <i v-if="iconClass" :class="iconClass"></i>
      <i v-else :class="typeClass"></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="okendo-message__content">{{ message }}</p>
        <p v-else v-html="message" class="okendo-message__content"></p>
      </slot>
      <i v-if="showClose" class="okendo-message__closeBtn okendo-icon-close k-icon k-i-close" @click="close"></i>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'OMessage',
  data () {
    return {
      visiable: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    }
  },
  computed: {
    typeClass () {
      return this.type && !this.iconClass
        ? `okendo-message__icon okendo-icon-${this.type} k-icon k-i-${this.type}`
        : ''
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visiable = false
        this.$el.addEventListener('transitionend', this.destoryElement)
      }
    }
  },
  methods: {
    destoryElement () {
      this.$el.removeEventListener('transitionend', this.destoryElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    keydown (e) {
      if (e.keyCode === 27) {
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.addEventListener('keydown', this.keydown)
  }
}
</script>
