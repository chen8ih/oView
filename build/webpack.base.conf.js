'use strict'
require("babel-polyfill")
const path = require('path')
const os = require('os')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const vueLoaderConfig = require('./vue-loader.conf')

const HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')

const Scan = require('charactor-scanner')

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    // ```code`` 给这种样式加个class code_inline
    const code_inline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function(...args){
      args[0][args[1]].attrJoin('class', 'code_inline')
      return code_inline(...args)
    }
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function(tokens, idx) {

        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          var desc = tokens[idx + 2].content;
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
          // 移除描述，防止被添加到代码块
          tokens[idx + 2].children = [];

          return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }]
  ]
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

let strFontCharactors = Scan({
  dir: [path.resolve(__dirname, '../examples'), path.resolve(__dirname, '../packages')],
  sync: true,
  appendAscii: false
}).join('')

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('examples'), resolve('package'), resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['babel-polyfill', './examples/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('examples'), resolve('package'), resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|TTF|otf)(\?.*)?$/,
        use: [
          {
            loader: 'awesome-fontmin-loader',
            options: {
              limit: 1000,
              name: utils.assetsPath('css/fonts/[name].[hash:7].[ext]'),
              text: strFontCharactors
            }
          }
        ]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: vueMarkdown
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest: require('./vendor-manifest.json')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version']
          })
        ]
      }
    })
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

const vuxLoader = require('vux-loader')
const vuxLoaderConfig = require('./vux-loader.conf')
module.exports = vuxLoader.merge(webpackConfig, vuxLoaderConfig)