/*
 * @Author: oppo.chenhang
 * @Date: 2018-04-11 15:01:28
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-04-13 09:50:54
 */

import pkg from '../package.json'
import OIcon from '../packages/oicon'
import OButton from '../packages/obutton'

const components = [
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
  version: pkg.version,
  install,
  ...components
}

export default API
