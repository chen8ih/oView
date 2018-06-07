# 快速上手

---

## 按需引入

目前只提供按需引入模式，全局引用不建议故不提供

借用 babel-plugin-component, 我们可以只引入需要的组件，已达到减小项目体积的目的

首先，安装 babel-plugin-component

    npm install babel-plugin-component -D

或者使用yarn安装

    yarn add babel-plugin-component --dev

然后，将.babelrc修改为：

    {
      "presets": [["es2015", { "modules": false }]],
      "plugins": [
        [
          "component",
          {
            "libraryName": "@opp/oview",
            "styleLibraryName": "theme-defaults"
          }
        ]
      ]
    }

然后在页面中引入部分组件， 比如Button 或者 Input

    import Vue from 'vue'
    import { Button, Input } from '@opp/oview'
    import App from './App.vue'

    Vue.component(Button.name, Button)
    Vue.component(Input.name, Input)
    /* 或者使用
    * Vue.use(Button)
    * Vue.use(Input)
    */
    new Vue({
      el: '#app',
      render: h => h(App)
    })





