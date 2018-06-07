const path = require('path')
const fs = require('fs')
var nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))

let externals = {}

Object.keys(Components).forEach(function(key) {
  externals[`@opp/oview/packages/${key}`] = `@opp/oview/lib/${key}`
})

externals['@opp/oview/src/assets'] = '@opp/oview/lib/assets'
externals['@opp/oview/src/locale'] = '@opp/oview/lib/locale'

utilsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`@opp/oview/src/utils/${file}`] = `@opp/oview/lib/utils/${file}`
})

mixinsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`@opp/oview/src/mixins/${file}`] = `@opp/oview/lib/mixins/${file}`
})

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  'vue$': 'vue/dist/vue.esm.js',
  main: path.resolve(__dirname, '../src'),
  examples: path.resolve(__dirname, '../examples'),
  '@opp/oview': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}
