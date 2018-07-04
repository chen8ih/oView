import OAlert from './alert.vue'

OAlert.install = (Vue) => {
  Vue.component(OAlert.name, OAlert)
}

export default OAlert
