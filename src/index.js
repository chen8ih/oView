/*
 * @Author: chenhang
 * @Date: 2018-04-11 15:01:28
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-05-12 14:31:43
 */
// 引入kendoUI组件
import Vue from 'vue'
import '@progress/kendo-ui/js/kendo.button.js'
import '@progress/kendo-ui/js/kendo.buttongroup.js'
import '@progress/kendo-theme-default/dist/all.css'
import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
// import { Grid } from '@progress/kendo-grid-vue-wrapper'

// 布局组件
import Row from './components/row'
import Col from './components/col'

// 自定义业务组件
import OIcon from './components/icon'
import OButton from './components/button'

const kendoWidgets = {
  ButtonsInstaller
}
const installKendoWidget = (Vue, opt = {}) => {
  Object.keys(kendoWidgets).forEach(key => {
    Vue.use(kendoWidgets[key])
  })
}
installKendoWidget(Vue)

const components = [
  Row,
  Col,
  OIcon,
  OButton
]

const oview = {
  ...components
}

const install = (Vue, opts = {}) => {
  if (install.installed) return
  Object.keys(oview).forEach(key => {
    Vue.component(oview[key].name, oview[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION,
  install,
  ...components
}

export default API
