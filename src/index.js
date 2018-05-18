/*
 * @Author: chenhang
 * @Date: 2018-04-11 15:01:28
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-05-18 09:53:24
 */
// 引入kendoUI组件
import '@progress/kendo-ui/js/kendo.core.js'
// import '@progress/kendo-ui/js/kendo.button.js'
// import '@progress/kendo-ui/js/kendo.buttongroup.js'
// import '@progress/kendo-theme-default/dist/all.css'
// import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
// import { Grid } from '@progress/kendo-grid-vue-wrapper'

// 布局组件
import OkendoRow from './components/row'
import OkendoCol from './components/col'

// 自定义业务组件
import OkendoIcon from './components/icon'
import OkendoButton from './components/button'

import locale from './locale'

const components = [
  OkendoRow,
  OkendoCol,
  OkendoIcon,
  OkendoButton
]

const okendo = {
  ...components
}

const install = (Vue, opts = {}) => {
  if (install.installed) return

  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  Object.keys(okendo).forEach(key => {
    Vue.component(okendo[key].name, okendo[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION,
  locale: locale,
  i18n: locale.i18n,
  install,
  ...components
}

export default API
