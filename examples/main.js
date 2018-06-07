// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

import DemoBlock from './components/demo-block'
import okendo from '../src/index'
import '../packages/theme-defaults/index.less'
import './styles/index.less'

Vue.config.productionTip = false

Vue.component('DemoBlock', DemoBlock)
Vue.use(okendo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
