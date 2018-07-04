<template>
  <div ref="wraper" :class="wraperClasses" @DOMMouseScroll="handleDOMMouseWheel" @mousewheel="handleMouseWheel">
    <div ref="content"
      class="okendo-scrollerbar__content"
      :style="contentStyles">
      <slot></slot>
    </div>
    <div v-show="percentY < 1 && !disScrollerY" :class="scrollerYClasses" :style="scrollerYStyles">
      <div :class="[`${prefix}-scroller-bar`, `${prefix}-scroller-bar-y`]" :style="scrollerBarYStyles" @mousedown="handleMousedownScrollBarY"></div>
    </div>
    <div v-show="percentX < 1 && !disScrollerX" :class="scrollerXClasses" :style="scrollerXStyles">
      <div :class="[`${prefix}-scroller-bar`, `${prefix}=scroller-bar-x`]" :style="scrollerBarXStyles" @mousedown="handleMousedownScrollBarX"></div>
    </div>
    <div v-show="percentX < 1 && percentY < 1" :class="`${prefix}-place-holder`"></div>
  </div>
</template>

<script>
export default {
  name: 'OScrollerbars',
  props: {
    speed: {
      type: Number,
      default: 20
    },
    scrollXStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    disScrollerX: {
      type: Boolean,
      default: false
    },
    disScrollerY: {
      type: Boolean,
      default: false
    },
    scrollerYStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    scrollerXType: {
      type: String,
      default: 'cover'
    },
    scrollerYType: {
      type: String,
      default: 'cover'
    },
    showAll: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefix: 'okendo-scrollerbar',
      scrollerOffsetX: 0,
      scrollerOffsetY: 0,
      contentSize: {
        width: 0,
        height: 0
      },
      wraperSize: {
        width: 0,
        height: 0
      },
      initY: 0,
      initOffsetY: 0,
      initX: 0,
      initOffsetX: 0
    }
  },
  computed: {
    wraperClasses () {
      return [`${this.prefix}-wraper`, this.showAll ? '' : 'show-when-hover']
    },
    contentStyles () {
      return {
        transform: `translate3d(-${this.scrollerOffsetX}px, -${this.scrollerOffsetY}px, 0)`,
        width: this.disScrollerX ? '100%' : 'auto',
        height: this.disScrollerY ? '100%' : 'auto'
      }
    },
    percentY () {
      return this.wraperSize.height / this.contentSize.height
    },
    scrollerYStyles () {
      return Object.assign(this.scrollerYStyle, {
        height: this.percentY < 1 ? 'calc(100% - 14px)' : '100%'
      })
    },
    scrollerBarYHeight () {
      return this.percentY * (this.wraperSize.height - 2)
    },
    scrollerBarYStyles () {
      let height = this.scrollerBarYHeight
      return {
        transform: `translate3d(0, ${this.scrollerOffsetY * (height / this.wraperSize.height)}px, 0)`,
        height: `${height}px`
      }
    },
    scrollerYClasses () {
      return [
        `${this.prefix}-scroller`,
        `${this.prefix}-scroller-y`,
        this.scrollYType === 'cover' ? 'scroller-y-cover' : ''
      ]
    },
    gapY () {
      return this.contentSize.height - this.wraperSize.height
    },
    percentX () {
      return this.wraperSize.width / this.contentSize.width
    },
    scrollerXStyles () {
      return Object.assign(this.scrollXStyle, {
        width: this.percentY < 1 ? 'calc(100% - 14px)' : '100%'
      })
    },
    scrollerBarWidth () {
      return this.percentX * (this.wraperSize.width - 2)
    },
    scrollerBarXStyles () {
      let width = this.scrollerBarWidth
      return {
        transform: `translate3d(${this.scrollOffsetX * (width / this.wraperSize.width)}px, 0px, 0px)`,
        width: `${width}px`
      }
    },
    scrollerXClasses () {
      return [
        `${this.prefix}-scroller`,
        `${this.prefix}-scroller-x`,
        this.scrollerXType === 'cover' ? 'scroller-x-cover' : ''
      ]
    },
    gapX () {
      return this.contentSize.width - this.wraperSize.width
    }
  },
  methods: {
    resize () {
      this.$nextTick(() => {
        let wraperRect = this.$refs.wraper.getBoundingClientRect()
        let contentRect = this.$refs.content.getBoundingClientRect()

        this.contentSize = {
          width: contentRect.width,
          height: contentRect.height
        }
        let precentXLowerThanOne = (wraperRect.width / contentRect.width) < 1
        let precentYLowerThanOne = (wraperRect.height / contentRect.heiht) < 1

        let gap = precentXLowerThanOne && precentYLowerThanOne ? 14 : 0
        this.wraperSize = {
          width: wraperRect.width - gap,
          height: wraperRect.height - gap
        }
        if (this.contentSize.height <= this.wraperSize.height) {
          this.scrollerOffsetY = 0
        }
        if ((wraperRect.bottom > contentRect.bottom) && (this.scrollOffsetY > 0)) {
          this.scrollerOffsetY += contentRect.bottom - wraperRect.bottom
        }
      })
    },
    handleMouseWheel (e) {
      this.scrollerOffsetY += this.percentY < 1 ? e.deltaY : 0
      this.scrollerOffsetX += this.percentX < 1 ? e.deltaX : 0

      if (this.percentY < 1) {
        if (this.scrollerOffsetY >= this.gapY) {
          this.scrollerOffsetY = Math.min(this.gapY, this.scrollerOffsetY)
        } else if (this.scrollerOffsetY <= 0) {
          this.scrollerOffsetY = Math.min(this.scrollerOffsetY, 0)
        }
      }

      if (this.percentX < 1) {
        if (this.scrollerOffsetX >= this.gapX) {
          this.scrollerOffsetX = Math.min(this.gapX, this.scrollerOffsetX)
        } else if (this.scrollerOffset <= 0) {
          this.scrollerOffsetX = Math.min(this.scrollerOffsetX, 0)
        }
      }
    },
    handleDOMMouseWheel (e) {
      this.scrollOffsetY += e.detail * 16
      if (this.scrollOffsetY >= this.gapY) {
        this.scrollOffsetY = Math.min(this.gapY, this.scrollOffsetY)
      } else if (this.scrollOffsetY <= 0) {
        this.scrollOffsetY = Math.max(this.scrollOffsetY, 0)
      }
    },
    handleMousemoveY (e) {
      let offset = e.pageY - this.initY
      this.scrollerOffsetY = this.initOffsetY + offset / ((this.wraperSize.height - 2 - this.scrollerBarYHeight) / (this.contentSize.height - this.wraperSize.height))
      if (this.scrollerOffsetY >= this.gapY) {
        this.scrollerOffsetY = Math.min(this.gapY, this.scrollOffsetY)
      } else if (this.scrollerOffsetY <= 0) {
        this.scrollerOffsetY = Math.max(this.scrollerOffsetY, 0)
      }
      e.preventDefault()
    },
    handleMousedownScrollBarY (e) {
      this.initY = e.pageY
      this.initOffsetY = this.scrollerOffsetY
      document.addEventListener('mousemove', this.handleMousemoveY)
      document.addEventListener('mouseup', this.handleMouseup)
    },
    handleMousemoveX (e) {
      let offset = e.pageX - this.initX
      this.scrollerOffsetX = this.initOffsetX + offset / ((this.wraperSize.width - 2 - this.scrollerBarXWidth) / (this.contentSize.width - this.wraperSize.width))
      if (this.scrollerOffsetX >= this.gapX) {
        this.scrollerOffsetX = Math.min(this.gapX, this.scrollerOffsetX)
      } else if (this.scrollerOffsetX <= 0) {
        this.scrollerOffsetX = Math.max(this.scrollerOffsetX, 0)
      }
      e.preventDefault()
    },
    handleMousedownScrollBarX (e) {
      this.initX = e.pageX
      this.initOffsetX = this.scrollerOffsetX
      document.addEventListener('mousemove', this.handleMousemoveX)
      document.addEventListener('mouseup', this.handleMouseup)
    },
    handleMouseup (e) {
      document.removeEventListener('mousemove', this.handleMousemoveY)
      document.removeEventListener('mousemove', this.handleMousemoveX)
      document.removeEventListener('mousemove', this.handleMouseup)
    }
  },
  mounted () {
    this.resize()
  }
}
</script>
