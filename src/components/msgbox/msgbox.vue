<template>
  <transition name="okendo-msgbox-fade">
    <div class="okendo-msgbox__wrapper"
      tabindex="-1"
      v-show="visiable"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'">
      <div class="okendo-msgbox" :class="[customClass, center && 'okendo-msgbox--center']">
        <div class="okendo-msgbox__header" v-if="title !== null">
          <div class="okendo-msgbox__title">
            <div 
            :class="['okendo-msgbox__status', typeClass]"
            v-if="typeClass && center"></div>
            <span>{{ title }}</span>
          </div>
          <button 
            type="button"
            class="okendo-msgbox__headerbtn" 
            aria-label="Close" 
            v-if="showClose" 
            @click="handleAction('cancel')" 
            @keydown-enter="handleAction('cancel')">
            <i class="okendo-msgbox__close okendo-icon-close"></i>  
          </button>
        </div>
        <div class="okendo-msgbox__content">
          <div 
          :class="['okendo-msgbox__status', typeClass]" 
          v-if="typeClass && !center && message !== ''"></div>
          <div class="okendo-msgbox__message" v-if="message !== ''">
            <slot>
              <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
              <p v-else v-html="message"></p>
            </slot>
          </div>
          <div class="okendo-msgbox__input" v-show="showInput">
            <okendo-input 
              v-model="inputValue"
              :type="inputType"
              @keydown.enter.native="handleInputEnter"
              :placeholder="inputPlaceholder" 
              ref="input"></okendo-input>
              <div class="okendo-msgbox__errormsg" :style="{ visiability: !!editorErrorMessage ? 'visiable' : 'hidden'}">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="okendo-msgbox__btns">
          <okendo-button 
          :loading="cancelButtonLoading" 
          :class="[ cancelButtonClasses ]"
          v-if="showCancelButton" 
          :round="roundButton" 
          :size="small" 
          @click.native="handleAction('cancel')"
          @keydown.enter="handleAction('cancel')">
          {{ cancelButtonText || t('okendo.msgbox.cancel')}}
          </okendo-button>
          <okendo-button 
          :loading="confirmButtonLoading" 
          :class="[ confirmButtonClasses ]"
          ref="confirm" 
          v-show="showConfirmButton" 
          :round="roundButton"
          :size="small" 
          @click.native="handleAction('confirm')" 
          @keydown.enter="handleAction('confirm')">
          {{ confirmButtonText || t('okendo.msgbox.confirm')}}
          </okendo-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import OkendoInput from '../input'
import OkendoButton from '../button'

import Popup from '../../utils/popup'
import Dialog from '../../utils/aria-dialog'
import { addClass, removeClass } from '../../utils/dom'
import Locale from '../../mixins/locale'
import { t } from '../../locale'

let msgbox
let typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger'
}
export default {
  mixins: [Popup, Locale],
  porps: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    closeOnHashChange: {
      default: true
    },
    center: {
      default: false,
      type: Boolean
    },
    roundButton: {
      default: false,
      type: Boolean
    }
  },
  components: {
    OkendoInput,
    OkendoButton
  },
  computed: {
    typeClass () {
      return this.type && typeMap[this.type] ? `okendo-icon-${ typeMap[this.type] }` : '';
    },
    confirmButtonClasses() {
      return `okendo-button--primary ${ this.confirmButtonClass }`;
    },
    cancelButtonClasses() {
      return `${ this.cancelButtonClass }`;
    }
  },
  methods: {
    getSafeClose() {
      const currentId = this.uid
      return () => {
        this.$nextTick(() => {
          if (currentId === this.uid) this.doClose()
        })
      }
    },
    doClose() {
      if (!this.visible) return
      this.visible = false
      this._closing = true
      this.onClose && this.onClose()
      messageBox.closeDialog() // 解绑
      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200)
      }
      this.opened = false
      this.doAfterClose()
      setTimeout(() => {
        if (this.action) this.callback(this.action, this)
      })
    },
    handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction('cancel')
      }
    },
    handleInputEnter() {
      if (this.inputType !== 'textarea') {
        return this.handleAction('confirm')
      }
    },
    handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return
      }
      this.action = action
      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose()
        this.beforeClose(action, this, this.close)
      } else {
        this.doClose()
      }
    },
    validate() {
      if (this.$type === 'prompt') {
        const inputPattern = this.inputPattern
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error')
          addClass(this.getInputElement(), 'invalid')
          return false
        }
        const inputValidator = this.inputValidator
        if (typeof inputValidator === 'function') {
          const validateResult = inputValidator(this.inputValue)
          if (validateResult === false) {
            this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error')
            addClass(this.getInputElement(), 'invalid')
            return false
          }
          if (typeof validateResult === 'string') {
            this.editorErrorMessage = validateResult
            addClass(this.getInputElement(), 'invalid')
            return false
          }
        }
      }
      this.editorErrorMessage = ''
      removeClass(this.getInputElement(), 'invalid')
      return true
    },
    getFirstFocus() {
      const btn = this.$el.querySelector('.okendo-message-box__btns .okendo-button')
      const title = this.$el.querySelector('.okendo-message-box__btns .okendo-message-box__title')
      return btn || title;
    },
    getInputElement() {
      const inputRefs = this.$refs.input.$refs
      return inputRefs.input || inputRefs.textarea
    }
  },
  watch: {
    inputValue: {
      immediate: true,
      handler(val) {
        this.$nextTick(_ => {
          if (this.$type === 'prompt' && val !== null) {
            this.validate()
          }
        })
      }
    },
    visible(val) {
      if (val) {
        this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          this.$nextTick(() => {
            this.$refs.confirm.$el.focus()
          })
        }
        this.focusAfterClosed = document.activeElement
        messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFirstFocus())
      }
      // prompt
      if (this.$type !== 'prompt') return
      if (val) {
        setTimeout(() => {
          if (this.$refs.input && this.$refs.input.$el) {
            this.getInputElement().focus()
          }
        }, 500)
      } else {
        this.editorErrorMessage = ''
        removeClass(this.getInputElement(), 'invalid')
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.closeOnHashChange) {
        window.addEventListener('hashchange', this.close);
      }
    })
  },
  beforeDestroy () {
    if (this.closeOnHashChange) {
      window.removeEventListener('hashchange', this.close);
    }
    setTimeout(() => {
      messageBox.closeDialog();
    })
  },
  data() {
    return {
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      customClass: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: false,
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null,
      dangerouslyUseHTMLString: false,
      focusAfterClosed: null,
      isOnComposition: false
    }
  }
}
</script>
<style lang="less">
  @import '../../theme-defaults/widget/msgbox.less';
</style>
