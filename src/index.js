// import Vue from 'vue'
// 引入kendoUI组件
// import '@progress/kendo-ui/js/kendo.core.js'
// import '@progress/kendo-ui/js/kendo.button.js'
// import '@progress/kendo-ui/js/kendo.buttongroup.js'
// import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
// import { DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'
// import { Grid } from '@progress/kendo-grid-vue-wrapper'

// 组件
import ORow from '../packages/row'
import OCol from '../packages/col'
import OIcon from '../packages/icon'
import OButton from '../packages/button'
import OInput from '../packages/input'
import OAlert from '../packages/alert'
import OMessage from '../packages/message'
// import OMsgbox from '../packages/msgbox'
import Treeselect from '../packages/treeselect'

import locale from './locale'

// 引用KendoUI组件
// Vue.use(DateinputsInstaller)

const components = [
  ORow,
  OCol,
  OIcon,
  OButton,
  OInput,
  OAlert,
  Treeselect
]

const install = (Vue, opts = {}) => {
  if (install.installed) return

  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.map(component => Vue.component(component.name, component))

  // 对于Message等采取插件形式
  Vue.prototype.$omessage = OMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION,
  locale: locale,
  i18n: locale.i18n,
  install,
  ORow,
  OCol,
  OIcon,
  OButton,
  OInput,
  OAlert,
  OMessage,
  Treeselect
}

export default API
