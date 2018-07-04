import ONotification from './notification.vue'

ONotification.install = (Vue) => {
  Vue.component(ONotification.name, ONotification)
}

export default ONotification
