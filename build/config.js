const path = require('path')
const fs = require('fs')
var nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))

let externals = {}

Object.keys(Components).forEach(function(key) {
  externals[`oview-ui/packages/${key}`] = `oview-ui/lib/${key}`
})

externals['oview-ui/src/assets'] = 'oview-ui/lib/assets'
externals['oview-ui/src/locale'] = 'oview-ui/lib/locale'

utilsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`oview-ui/src/utils/${file}`] = `oview-ui/lib/utils/${file}`
})

mixinsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`oview-ui/src/mixins/${file}`] = `oview-ui/lib/mixins/${file}`
})

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  'vue$': 'vue/dist/vue.esm.js',
  main: path.resolve(__dirname, '../src'),
  examples: path.resolve(__dirname, '../examples'),
  'oview-ui': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}
