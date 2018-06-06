import Col from './col.vue'

Col.install = (vue) => {
  Vue.component(Col.name, Col)
}

export default Col
