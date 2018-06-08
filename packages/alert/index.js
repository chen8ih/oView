import OAlert from './alert.vue'

OAlert.install = (vue) => {
  Vue.component(OAlert.name, OAlert)
}

export default OAlert
