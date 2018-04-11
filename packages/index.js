/*
 * @Author: oppo.chenhang 
 * @Date: 2018-04-11 15:01:28 
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-04-11 15:11:35
 */

import OIcon from './oicon'

const components = [
  OIcon
]

const install = (Vue) => {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '0.0.1',
  install,
  OIcon
}

module.exports.default = module.exports
