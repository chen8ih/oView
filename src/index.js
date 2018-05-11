/*
 * @Author: chenhang
 * @Date: 2018-04-11 15:01:28
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-05-11 09:16:15
 */
// 引入kendoUI组件
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Button } from '@progress/kendo-buttons-vue-wrapper'
// import { Grid } from '@progress/kendo-grid-vue-wrapper'

// 布局组件
import Row from './components/row'
import Col from './components/col'

// 自定义业务组件
import OIcon from './components/icon'
import OButton from './components/button'

const components = [
  Row,
  Col,
  OIcon,
  Button,
  OButton
]

const oview = {
  ...components
}

console.log(oview)

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
