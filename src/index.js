// import Vue from 'vue'
// 引入kendoUI组件
import '@progress/kendo-ui/js/kendo.core.js'
// import '@progress/kendo-ui/js/kendo.button.js'
// import '@progress/kendo-ui/js/kendo.buttongroup.js'
import '@progress/kendo-theme-default/dist/all.css'
// import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
// import { DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'
// import { Grid } from '@progress/kendo-grid-vue-wrapper'

// 布局组件
import OkendoRow from './components/row'
import OkendoCol from './components/col'

// 自定义业务组件
import OkendoIcon from './components/icon'
import OkendoButton from './components/button'
import OkendoInput from './components/input'
import OkendoTreeselect from './components/treeselect'

import locale from './locale'

// 引用KendoUI组件
// Vue.use(DateinputsInstaller)

const components = [
  OkendoRow,
  OkendoCol,
  OkendoIcon,
  OkendoButton,
  OkendoInput,
  OkendoTreeselect
]

const install = (Vue, opts = {}) => {
  if (install.installed) return

  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION,
  locale: locale,
  i18n: locale.i18n,
  install,
  OkendoRow,
  OkendoCol,
  OkendoIcon,
  OkendoButton,
  OkendoInput,
  OkendoTreeselect
}

export default API
