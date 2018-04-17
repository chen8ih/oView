# ColorPicker

---

## 基础用法

颜色选择器

<div class="demo-block">
  <kendo-colorpicker v-model="color">ColorPicker</kendo-colorpicker>
</div>

<script>
export default {
  data () {
    return {
      color: ''
    }
  }
}
</script>

::: demo

```html
<kendo-colorpicker v-model="color">ColorPicker</kendo-colorpicker>

```
```js
<script>
export default {
  data () {
    return {
      color: ''
    }
  }
}
</script>

```
:::


### 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| button | 是否显示Apply / Cancel 按钮 | Boolean | - | true |
| clearButton | 是否显示Clear color按钮 | Boolean | - | false |
| preview | 显示颜色预览元素, 用户可以直接在 `input` 中预览元素 | Boolean | - | true |
| toolIcon | 添加一个按钮类名用于将颜色选择按钮显示成一个图标 | String | - | null |
| value | 设置一个默认色值 | String | - | null |
| palette | 根据用户提供的色值数组显示可选的颜色 | String\|Array | 'basic': 显示基本的20种颜色<br/> 'websafe': 显示'web-safe'颜色<br/> 根据用户提供的HEX Array colors | null 

### 事件

| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|

### 方法

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |