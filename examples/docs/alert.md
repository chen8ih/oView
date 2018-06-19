<style lang="less">
  .demo-block {
    .okendo-alert {
      margin: 10px 0;
    }

    .okendo-alert__description {
      padding: 0;
    }
  }
</style> 

# 警告 Alert

---

用于页面中展示的重要信息

## 基本用法

页面中非浮动元素，不会自动消失

<div class="demo-block">
  <o-alert type="success" title="成功时的提示信息"></o-alert>
  <o-alert type="warning" title="警告时的提示信息"></o-alert>
  <o-alert type="error" title="错误时的提示信息"></o-alert>
</div>

:::demo
```html
<o-alert type="success" title="成功时的提示信息"></o-alert>
<o-alert type="warning" title="警告时的提示信息"></o-alert>
<o-alert type="error" title="错误时的提示信息"></o-alert>
```
:::


## 自定义关闭按钮

自定义关闭按钮为文字或者按钮

<div class="demo-block">
  <o-alert type="success" title="不可关闭的alert" :closeable="false"></o-alert>
  <o-alert type="warning" title="自定义close-text" close-text="知道了，关闭"></o-alert>
  <o-alert type="error" title="设置回调函数" @close="hello"></o-alert>
</div>

<script>
  export default {
    methods: {
      hello () {
        alert('Who Are You')
      }
    }
  }
</script>

:::demo
```html
<o-alert type="success" title="不可关闭的alert" :closeable="false"></o-alert>
<o-alert type="warning" title="自定义close-text" close-text="知道了，关闭"></o-alert>
<o-alert type="error" title="设置回调函数" @close="hello"></o-alert>

<script>
  export default {
    methods: {
      hello () {
        alert('What Are You')
      }
    }
  }
</script>
```
:::

## 带有Icon的alert

表示某种状态提升可读性, 通过设置`show-icon`属性来显示Alert的icon, icon根据type定义图标类型，使用图标可以更好的向用户展示你的显示意图

<div class="demo-block">
  <o-alert type="success" title="成功提示的信息" show-icon></o-alert>
  <o-alert type="warning" title="警告提示的信息" show-icon></o-alert>
  <o-alert type="error" title="错误提示的信息" show-icon></o-alert>
</div>

:::demo
```html
<o-alert type="success" title="成功提示的信息" show-icon></o-alert>
<o-alert type="warning" title="警告提示的信息" show-icon></o-alert>
<o-alert type="error" title="错误提示的信息" show-icon></o-alert>
```
:::

## 文字居中的alert

使用`center`属性让文字水平居中

<div class="demo-block">
  <o-alert type="success" title="成功提示的信息" center show-icon></o-alert>
  <o-alert type="warning" title="警告提示的信息" center show-icon></o-alert>
  <o-alert type="error" title="错误提示的信息" center show-icon></o-alert>
</div>

:::demo
```html
<o-alert type="success" title="成功提示的信息" center show-icon></o-alert>
<o-alert type="warning" title="警告提示的信息" center show-icon></o-alert>
<o-alert type="error" title="错误提示的信息" center show-icon></o-alert>
```
:::


## 带有辅助性文字介绍

包含标题和内容，显示更详细的提示信息, 除了title, 可以使用`description`属性来帮助你更好的介绍，一般成为辅助性文字，辅助性文字只能存放单行文本，会自动换行

<div class="demo-block">
  <o-alert title="带辅助性的介绍" type="success"
  description="当你明天开始生活的时候，有人跟你争执，你就让他赢，这个赢跟输，都只是文字的观念罢了。当你让对方赢，你并没有损失什么。所谓的赢，他有赢到什么?得到什么?所谓的输，你又输到什么?失去什么?我们大部份的生命都浪费在文字语言的捉摸上"></o-alert> 
</div>

:::demo
```html
<o-alert title="带辅助性的介绍" type="success"
  description="当你明天开始生活的时候，有人跟你争执，你就让他赢，这个赢跟输，都只是文字的观念罢了。当你让对方赢，你并没有损失什么。所谓的赢，他有赢到什么?得到什么?所谓的输，你又输到什么?失去什么?我们大部份的生命都浪费在文字语言的捉摸上"></o-alert>
```
:::


## 带有Icon和辅助性文字

<div class="demo-block">
  <o-alert title="带辅助性的介绍" type="success" show-icon
  description="当你明天开始生活的时候，有人跟你争执，你就让他赢，这个赢跟输，都只是文字的观念罢了。当你让对方赢，你并没有损失什么。所谓的赢，他有赢到什么?得到什么?所谓的输，你又输到什么?失去什么?我们大部份的生命都浪费在文字语言的捉摸上"></o-alert>
</div>

:::demo
```html
<o-alert title="带辅助性的介绍" type="success" show-icon
  description="当你明天开始生活的时候，有人跟你争执，你就让他赢，这个赢跟输，都只是文字的观念罢了。当你让对方赢，你并没有损失什么。所谓的赢，他有赢到什么?得到什么?所谓的输，你又输到什么?失去什么?我们大部份的生命都浪费在文字语言的捉摸上"></o-alert>
```
:::


## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | String |  success / warning / error | - |
| title | 提示文本 | String | - | - |
| description | 辅助文本 | String | - |
| show-icon | 是否显示图标 | String | - | - |
| disabled | 是否禁用状态 | Boolean | - | false |
| closable | 是否可关闭 | Boolean | - | - |
| close-text | 自定义关闭文本 | String | - | - |


## 事件

| 事件名      | 说明         | 回调参数     |
|------------ |-------------- |---------- |
| close | 关闭alert触发的回调 | - |