<style lang="less">
  .demo-block {
    .ovu-row:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
# Button 按钮

---

## 基础用法

基础的按钮用法

<div class="demo-block">
  <o-row>
    <o-button>default</o-button>
    <o-button type="primary">primary</o-button>
    <o-button type="success">success</o-button>
    <o-button type="warning">warning</o-button>
    <o-button type="error">error</o-button>
    <o-button type="info">info</o-button>
  </o-row>
  <o-row>
    <o-button shape="circle">default</o-button>
    <o-button shape="circle" type="success">primary</o-button>
    <o-button shape="circle" type="success">success</o-button>
    <o-button shape="circle" type="warning">warning</o-button>
    <o-button shape="circle" type="error">error</o-button>
    <o-button shape="circle" type="info">info</o-button>
  </o-row>
  <o-row>
    <o-button shape="circle" icon="search"></o-button>
    <o-button shape="circle" type="success" icon="edit"></o-button>
    <o-button shape="circle" type="success" icon="check"></o-button>
    <o-button shape="circle" type="warning" icon="delete"></o-button>
    <o-button shape="circle" type="error" icon="close"></o-button>
    <o-button shape="circle" type="info" icon="marker-pin-target"></o-button>
  </o-row>
</div> 

`type`, `shape`, `icon`分别控制按钮类型，是否圆角，以及图标按钮的图形

:::demo
```html
<o-row>
  <o-button>default</o-button>
  <o-button type="primary">primary</o-button>
  <o-button type="success">success</o-button>
  <o-button type="warning">warning</o-button>
  <o-button type="error">error</o-button>
  <o-button type="info">info</o-button>
</o-row>
<o-row>
  <o-button shape="circle">default</o-button>
  <o-button shape="circle" type="success">primary</o-button>
  <o-button shape="circle" type="success">success</o-button>
  <o-button shape="circle" type="warning">warning</o-button>
  <o-button shape="circle" type="error">error</o-button>
  <o-button shape="circle" type="info">info</o-button>
</o-row>
<o-row>
  <o-button shape="circle" icon="search"></o-button>
  <o-button shape="circle" type="success" icon="edit"></o-button>
  <o-button shape="circle" type="success" icon="check"></o-button>
  <o-button shape="circle" type="warning" icon="delete"></o-button>
  <o-button shape="circle" type="error" icon="close"></o-button>
  <o-button shape="circle" type="info" icon="marker-pin-target"></o-button>
</o-row>
```
:::

## 禁用

使用`disable`属性控制按钮是否被禁用

<div class="demo-block">
  <o-row>
    <o-button :disabled="true">default</o-button>
    <o-button type="primary" :disabled="true">primary</o-button>
    <o-button type="success" :disabled="true">success</o-button>
    <o-button type="warning" :disabled="true">warning</o-button>
    <o-button type="error" :disabled="true">error</o-button>
    <o-button type="info" :disabled="true">info</o-button>
  </o-row>
</div>

:::demo
```html
<o-row>
  <o-button :disabled="true">default</o-button>
  <o-button type="primary" :disabled="true">primary</o-button>
  <o-button type="success" :disabled="true">success</o-button>
  <o-button type="warning" :disabled="true">warning</o-button>
  <o-button type="error" :disabled="true">error</o-button>
  <o-button type="info" :disabled="true">info</o-button>
</o-row>
```
:::

## 按钮尺寸

按钮有三种尺寸： 大、默认（中）、小
通过设置`size`为`large`或者`small`, 将按钮设置成大和小尺寸，不设置则为默认尺寸

<div class="demo-block">
  <o-row>
    <o-button type="success" size="large">large</o-button>
    <o-button type="success">default</o-button>
    <o-button type="success" size="small">small</o-button>
  </o-row>
  <o-row>
    <o-button type="success" shape="circle" size="large">large</o-button>
    <o-button type="success" shape="circle">default</o-button>
    <o-button type="success" shape="circle" size="small">small</o-button>
  </o-row>
</div>

:::demo
```html
<o-row>
  <o-button type="success" size="large">large</o-button>
  <o-button type="success">default</o-button>
  <o-button type="success" size="small">small</o-button>
</o-row>
<o-row>
  <o-button type="success" shape="circle" size="large">large</o-button>
  <o-button type="success" shape="circle">default</o-button>
  <o-button type="success" shape="circle" size="small">small</o-button>
</o-row>
```
:::

## 图标按钮

带图标的按钮

<div class="demo-block">
  <o-row>
    <o-button type="success" icon="search">Search</o-button>
    <o-button type="success" shape="circle" icon="search">Search</o-button>
  </o-row>
</div>

:::demo
```html
<o-row>
  <o-button type="success" icon="search">Search</o-button>
  <o-button type="success" shape="circle" icon="search">Search</o-button>
</o-row>
```
:::

## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | String | primary / success / warning / danger / info / text | - |
| size | 尺寸 | String | large / small | - |
| shape | 形状 | String | circle / circle-outline | - |
| icon | 图标 | String | - | - |
| disabled | 是否禁用状态 | Boolean | - | false |
| image-url | 图片图标地址 | String | - | - |

## KendoUI Button基础用法

基础的按钮用法

<div class="demo-block">
  <o-row>
    <kendo-button>默认按钮</kendo-button>
    <kendo-button class="k-primary">默认按钮</kendo-button>
    <kendo-button class="k-bare">默认按钮</kendo-button>
    <kendo-button class="k-flat">默认按钮</kendo-button>
    <kendo-button class="k-outline">默认按钮</kendo-button>
    <kendo-button class="k-primary k-bare">默认按钮</kendo-button>
  </o-row>
</div>

:::demo
```html
<o-row>
  <kendo-button>默认按钮</kendo-button>
  <kendo-button class="k-primary">默认按钮</kendo-button>
  <kendo-button class="k-bare">默认按钮</kendo-button>
  <kendo-button class="k-flat">默认按钮</kendo-button>
  <kendo-button class="k-outline">默认按钮</kendo-button>
  <kendo-button class="k-primary k-bare">默认按钮</kendo-button>
</o-row>
```
:::



## KendoUI Button 禁用状态

按钮不可用状态

<div class="demo-block">
  <o-row>
    <kendo-button :disabled="true">默认按钮</kendo-button>
    <kendo-button class="k-primary" :disabled="true">默认按钮</kendo-button>
    <kendo-button class="k-bare" :disabled="true">默认按钮</kendo-button>
    <kendo-button class="k-primary k-bare" :disabled="true">默认按钮</kendo-button>
  </o-row>
</div>

:::demo
```html
<o-row>
  <kendo-button :disabled="true">默认按钮</kendo-button>
  <kendo-button class="k-primary" :disabled="true">默认按钮</kendo-button>
  <kendo-button class="k-bare" :disabled="true">默认按钮</kendo-button>
  <kendo-button class="k-primary k-bare" :disabled="true">默认按钮</kendo-button>
</o-row>
```
:::

## KendoUI Button 带图标按钮

带图标的按钮

<div class="demo-block">
  <o-row>
    <kendo-button icon="folder">文件夹</kendo-button>
    <kendo-button icon="pencil" class="k-primary">编辑</kendo-button>
    <kendo-button icon="folder" class="k-bare">文件夹</kendo-button>
    <kendo-button icon="pencil" class="k-primary k-bare">编辑</kendo-button>
  </o-row>
</div>

:::demo
```html
<o-row>
  <kendo-button icon="folder">文件夹</kendo-button>
  <kendo-button icon="pencil" class="k-primary">编辑</kendo-button>
  <kendo-button icon="folder" class="k-bare">文件夹</kendo-button>
  <kendo-button icon="pencil" class="k-primary k-bare">编辑</kendo-button>
</o-row>
```
:::

使用图片作为图标

<div class="demo-block">
  <o-row>
    <kendo-button image-url="http://demos.telerik.com/kendo-ui/content/web/16x16/Chart.png">Chart</kendo-button>
  </o-row>
</div>

:::demo
```html
<o-row>
  <kendo-button image-url="http://demos.telerik.com/kendo-ui/content/web/16x16/Chart.png">Chart</kendo-button>
</o-row>
```
:::


