'use strict'

const path = require('path')
const fs = require('fs')
const demoPath = path.resolve(__dirname, '../src/demo_list.json')


module.exports = {
  options: {
    vuxWriteFile: false,
    env: 'dev'
  },
  plugins: [
    'inline-manifest',
    {
      name: 'duplicate-style',
      envs: ['production']
    },
    {
      name: 'process-bar',
      envs: ['development']
    },
    {
      name: 'i18n',
      vuxStaticReplace: false,
      staticReplace: false,
      extractToFiles: 'src/locales/components.yml',
      localeList: ['en', 'zh-CN']
    },
    {
      name: 'less-theme',
      path: 'src/styles/custom.less'
    }
  ]
}