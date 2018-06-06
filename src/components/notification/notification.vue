<template>
  <transition name="okendo-notification-fade">
    <div :class="['okendo-notification', customClass, horizontalClass]"
    v-show="visiable"
    :style="positionStyle"
    @mouseenter="startTimer()"
    @mouseleave="clearTimer()"
    @click="click"
    role="alert">
      <i class="okendo-notifcation__icon"
      :class="[typeClass, iconClass]"
      v-if="type || iconClass"></i>
      <div class="okendo-notification__group" :class="{ 'is-with-icon': typeClass || iconClass }">
        <h2 class="okendo-notification__title" v-text="title"></h2>
        <div class="okendo-notfication__content" v-show="message">
          <slot>
            <p v-if="dangerouslyUseHTMLString">{{message}}</p>
            <p v-else v-html="message"></p>
          </slot>
        </div>
        <div class="okendo-notification__closeBtn okendo-icon-close"
          v-if="showClose"
          @click.stop="close"></div>
      </div>
    </div> 
  </transition>
</template>

<script>
let typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}
export default {
  data () {
    return {
      visiable: false,
      title: '',
      message: '',
      duration: 4500,
      type: '',
      showClose: '',
      customClass: '',
      iconClass: '',
      onClose: null,
      onClick: null,
      closed: false,
      verticalOffset: 0,
      timer: null,
      dangerouslyUseHTMLString: false,
      position: 'top-right'
    }
  },
  computed: {
    typeClass () {
      return this.type && typeMap[this.type] ? `okendo-icon-${ typeMap[this.type] }` : ''
    },
    horizontalClass () {
      return this.position.index('right') > -1 ? 'right' : 'left'
    },
    verticalProperty () {
      return /^top-/.test(this.position) ? 'top' : 'bottom'
    },
    positionStyle () {
      return {
        [this.verticalProperty]: `${ this.verticalOffset }px`
      }
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visiable = false,
        this.$el.addEventListener('transitionend', this.destoryElement)
      }
    }
  },
  methods: {
    destoryElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    click () {
      if (typeof this.onClick === 'function') {
        this.onClick()
      }
    },
    close () {
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
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
    keydown (e) {
      if (e.keyCode === 46 || e.keyCode === 8) {
        this.clearTimer()
      } else if (e.keyCode === 27) {
        if (!this.closed) {
          this.close()
        }
      } else {
        this.startTimer() // 恢复倒计时
      }
    },
    mounted () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
      document.addEventListener('keydown', this.keydown)
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.keydown)
    }
  }
}
</script>

