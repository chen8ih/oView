import ONotification from './notification.vue'

ONotification.install = (vue) => {
  Vue.component(ONotification.name, ONotification)
}

export default ONotification
