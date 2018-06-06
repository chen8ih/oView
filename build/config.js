const path = require('path')
const fs = require('fs')
var nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')


const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))

let externals = {}

Object.keys(Components).forEach(function(key) {
  externals[`../src/components/${key}`] = `../lib/${key}`
})

externals['../src/locale'] = '../lib/locale'
utilsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`../src/utils/${file}`] = `../lib/utils/${file}`
})

mixinsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`../src/mixins/${file}`] = `../lib/mixins/${file}`
})

// transitionList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`../src/transitions/${file}`] = `../lib/transitions/${file}`
// })


externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  'vue$': 'vue/dist/vue.esm.js',
  main: path.resolve(__dirname, '../src'),
  examples: path.resolve(__dirname, '../examples'),
  'oview': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}
