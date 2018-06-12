import Vue from 'vue'
import OMessageComponent from './message.vue'

import { PopupManager } from '@opp/oview/src/utils/popup'

let MessageConstructor = Vue.extend(OMessageComponent)

let instance
let instances = []
let seed = 1

const OMessage = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let userOnClose = options.onClose
  let id = 'omessage_' + seed++

  options.onClose = function () {
    OMessage.close(id, userOnClose)
  }

  instance = new MessageConstructor({
    data: options
  })

  instance.id = id

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visiable = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = PopupManager.nextZIndex()
  instances.push(instance)
  return instance.vm
}

let typeArray = ['success', 'warning', 'info', 'error']
typeArray.forEach(type => {
  OMessage[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return OMessage(options)
  }
})

OMessage.close = (id, userOnClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

OMessage.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default OMessage
