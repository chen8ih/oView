'use strict'
process.env.NODE_ENV = 'production'

/**
 * --locale='zh-CN'
 * --namespace='ovu'
 * --components=Group,Cell
 */

var argv = require('yargs').argv
var namespace = argv.namespace || 'ovu'

var isBuildAll = !argv.components
var buildComponents = argv.components ? argv.components.split(',') : []

let config = require('./webpack.prod.conf.js')
const vuxConfig = require('./vux-loader.conf.js')
vuxConfig.plugins.forEach(function (plugin) {
  if (plugin.name === 'i18n') {
    plugin.vuxStaticReplace = true
    plugin.vuxLocale = argv['locale'] || 'zh-CN'
  }
})